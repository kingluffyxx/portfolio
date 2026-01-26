import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image metadata
export const alt = "Xavier Adda - Développeur Fullstack PHP & Next.js";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation - pre-rendered at build time (static)
export default async function Image() {
  // Load logo
  const iconPath = path.join(process.cwd(), "public", "icon.png");
  const iconBuffer = fs.readFileSync(iconPath);
  const iconBase64 = `data:image/png;base64,${iconBuffer.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <img
            src={iconBase64}
            alt="Logo"
            width={120}
            height={120}
            style={{
              marginBottom: 30,
              borderRadius: 24,
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: "linear-gradient(90deg, #ffffff 0%, #e0e0e0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
            }}
          >
            Xavier Adda
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 600,
              background: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: 40,
            }}
          >
            Développeur Fullstack
          </div>

          {/* Technologies */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["PHP", "Symfony", "Laravel", "Next.js", "React", "TypeScript"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    border: "2px solid rgba(139, 92, 246, 0.3)",
                    borderRadius: 12,
                    color: "#e0e0e0",
                    fontSize: 24,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Experience */}
          <div
            style={{
              marginTop: 40,
              fontSize: 28,
              color: "#a0a0a0",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>7+ ans d'expérience</span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#8b5cf6",
              }}
            />
            <span>Freelance disponible</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#666",
          }}
        >
          xavier-adda.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
