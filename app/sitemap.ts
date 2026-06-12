import { MetadataRoute } from "next"
import { templates } from "@/lib/templates-data"
import { blogPosts } from "@/lib/blog-data"
import { services } from "@/lib/services-data"

const PROJECT_SLUGS = ["flowsolo", "steamhunter"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"
  const now = new Date()

  const dual = (path: string) => ({
    fr: path === "/" ? siteUrl : `${siteUrl}${path}`,
    en: path === "/" ? `${siteUrl}/en` : `${siteUrl}/en${path}`,
  })

  const withAlternates = (
    path: string,
    extra: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
  ): MetadataRoute.Sitemap => {
    const urls = dual(path)
    return [
      {
        ...extra,
        url: urls.fr,
        alternates: {
          languages: {
            "fr-FR": urls.fr,
            "en-US": urls.en,
            "x-default": urls.fr,
          },
        },
      },
      {
        ...extra,
        url: urls.en,
        alternates: {
          languages: {
            "fr-FR": urls.fr,
            "en-US": urls.en,
            "x-default": urls.fr,
          },
        },
      },
    ]
  }

  const entries: MetadataRoute.Sitemap = [
    ...withAlternates("/", {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    }),
    ...withAlternates("/realisations", {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...withAlternates("/parcours", {
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  ]

  for (const slug of PROJECT_SLUGS) {
    entries.push(
      ...withAlternates(`/projets/${slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    )
  }

  for (const service of Object.values(services)) {
    const frUrl = `${siteUrl}/services/${service.slug}`
    const enUrl = `${siteUrl}/en/services/${service.slugEn}`
    const languages = {
      "fr-FR": frUrl,
      "en-US": enUrl,
      "x-default": frUrl,
    }
    entries.push(
      {
        url: frUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages },
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages },
      },
    )
  }

  // Mockups : FR uniquement (les demos visuelles restent en FR)
  for (const template of templates) {
    if (!template.fr.mockup) continue
    entries.push({
      url: `${siteUrl}/realisations/${template.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  // Blog : FR-only (hors routing locale)
  entries.push({
    url: `${siteUrl}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  })
  for (const post of blogPosts) {
    entries.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updated ? new Date(post.updated) : new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  return entries
}
