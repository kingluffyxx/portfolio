import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkBotId } from "botid/server";
import {
  clientIp,
  escapeHtml,
  isRateLimited,
  isValidEmail,
  LIMITS,
  tooLong,
} from "@/lib/security";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Verify BotID - automatically reads headers from the request context
    const botIdResult = await checkBotId();

    if (botIdResult.isBot && !botIdResult.isVerifiedBot) {
      return NextResponse.json(
        { error: "Bot detection triggered" },
        { status: 403 },
      );
    }

    // 3 messages / 10 min par IP : BotID ne filtre que les bots, pas les humains.
    if (isRateLimited(`contact:${clientIp(request)}`, 3, 10 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 },
      );
    }

    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (
      tooLong(name, LIMITS.name) ||
      tooLong(subject, LIMITS.subject) ||
      tooLong(message, LIMITS.message)
    ) {
      return NextResponse.json({ error: "Field too long" }, { status: 400 });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, email not sent");
      // Return success anyway for development
      return NextResponse.json({ success: true, dev: true });
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to yourself
    const toEmail = process.env.CONTACT_EMAIL || "xavier.adda@gmail.com";

    // Tout ce qui vient du visiteur est échappé avant interpolation HTML.
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    };

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject.slice(0, LIMITS.subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New message from your portfolio
          </h2>

          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${safe.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
            <p><strong>Subject:</strong> ${safe.subject}</p>
          </div>

          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #27272a;">Message:</h3>
            <p style="white-space: pre-wrap; color: #3f3f46;">${safe.message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />

          <p style="color: #71717a; font-size: 12px;">
            This message was sent from the contact form on your portfolio website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    // Accusé de réception. Volontairement sans le corps du message : cet email
    // part vers une adresse fournie par le visiteur, donc tout contenu qu'il
    // contrôle ferait du formulaire un relais de phishing depuis notre domaine.
    await resend.emails
      .send({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "Xavier Adda <onboarding@resend.dev>",
        to: email,
        subject: "Message received - Xavier Adda",
        text: [
          `Hi ${name.slice(0, LIMITS.name)},`,
          "",
          "I have received your message and will get back to you as soon as possible.",
          "",
          "Best regards,",
          "Xavier Adda",
          "",
          "---",
          "This is an automated confirmation email.",
        ].join("\n"),
      })
      .catch((err) => {
        // Don't fail the main request if confirmation email fails
        console.warn("Failed to send confirmation email:", err);
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
