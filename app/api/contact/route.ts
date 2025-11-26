import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  turnstileToken?: string
}

interface TurnstileResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    console.warn("TURNSTILE_SECRET_KEY not configured, skipping verification")
    return true
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
          remoteip: ip,
        }),
      }
    )

    const result: TurnstileResponse = await response.json()

    if (!result.success) {
      console.error("Turnstile verification failed:", result["error-codes"])
    }

    return result.success
  } catch (error) {
    console.error("Turnstile verification error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message, turnstileToken } = body

    // Verify Turnstile token if configured
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "CAPTCHA verification required" },
          { status: 400 }
        )
      }

      const ip = request.headers.get("x-real-ip") ||
                 request.headers.get("x-forwarded-for") ||
                 undefined

      const isValid = await verifyTurnstile(turnstileToken, ip)

      if (!isValid) {
        return NextResponse.json(
          { error: "CAPTCHA verification failed" },
          { status: 400 }
        )
      }
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, email not sent")
      // Return success anyway for development
      return NextResponse.json({ success: true, dev: true })
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to yourself
    const toEmail = process.env.CONTACT_EMAIL || "xavier.adda@gmail.com"

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New message from your portfolio
          </h2>

          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #27272a;">Message:</h3>
            <p style="white-space: pre-wrap; color: #3f3f46;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />

          <p style="color: #71717a; font-size: 12px;">
            This message was sent from the contact form on your portfolio website.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    // Send confirmation email to the sender
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Xavier Adda <onboarding@resend.dev>",
      to: email,
      subject: "Message received - Xavier Adda",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Thank you for your message!</h2>

          <p>Hi ${name},</p>

          <p>I have received your message and will get back to you as soon as possible.</p>

          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #27272a;">Your message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="white-space: pre-wrap; color: #3f3f46;">${message}</p>
          </div>

          <p>Best regards,<br/>Xavier Adda</p>

          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />

          <p style="color: #71717a; font-size: 12px;">
            This is an automated confirmation email.
          </p>
        </div>
      `,
    }).catch((err) => {
      // Don't fail the main request if confirmation email fails
      console.warn("Failed to send confirmation email:", err)
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
