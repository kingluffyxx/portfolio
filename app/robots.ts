import { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/"] },
      // AI crawlers (explicitly allowed)
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Claude-Web", allow: "/", disallow: ["/api/"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Perplexity-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/api/"] },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow: ["/api/"] },
      // Fallback
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
