import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Création de sites internet & SEO · Xavier Adda Freelance"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #2A1A4A 100%)",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#22c55e",
              boxShadow: "0 0 16px #22c55e",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: 28, fontWeight: 600 }}>
            Disponible · Freelance
          </span>
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            background:
              "linear-gradient(90deg, #A78BFA 0%, #22D3EE 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          Xavier Adda
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: "#FAFAFA",
            marginBottom: 16,
          }}
        >
          Création de sites internet & SEO
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#A1A1AA",
            marginBottom: 40,
          }}
        >
          Site vitrine · E-commerce · App sur-mesure · Île-de-France & Remote
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["Site vitrine", "WordPress", "WooCommerce", "Next.js", "SEO", "Refonte"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(167, 139, 250, 0.4)",
                  background: "rgba(139, 92, 246, 0.1)",
                  fontSize: 22,
                  color: "#A78BFA",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 24,
            color: "#A1A1AA",
          }}
        >
          xavieradda.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
