import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  projects,
  projectSlugs,
  getLocalizedProject,
  type ProjectSlug,
  type Locale,
} from "@/lib/projects-data"
import { routing } from "@/i18n/routing"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({ locale, slug }))
  )
}

type Params = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params
  const project = projects[slug as ProjectSlug]
  if (!project) return {}
  const loc: Locale = locale === "en" ? "en" : "fr"
  const pc = getLocalizedProject(project, loc)

  const frUrl = `${siteUrl}/projets/${project.slug}`
  const enUrl = `${siteUrl}/en/projets/${project.slug}`
  const url = loc === "fr" ? frUrl : enUrl
  return {
    title: pc.title,
    description: pc.tagline,
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": frUrl,
        "en-US": enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      title: pc.title,
      description: pc.tagline,
      url,
      type: "article",
      images: [{ url: project.image, width: 1200, height: 630, alt: pc.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pc.title,
      description: pc.tagline,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: Params) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const project = projects[slug as ProjectSlug]
  if (!project) notFound()
  const loc: Locale = locale === "en" ? "en" : "fr"
  const pc = getLocalizedProject(project, loc)
  const labels = loc === "en"
    ? {
        back: "Back to projects",
        live: "Live",
        dev: "In development",
        visit: "Visit the site",
        play: "Google Play",
        context: "Context",
        description: "Description",
        keyFeatures: "Key features",
        stack: "Tech stack",
        results: "Results",
        similar: "A similar project?",
        ctaDesc: "Available to build your web or mobile application.",
        cta: "Start a project",
      }
    : {
        back: "Retour aux projets",
        live: "En ligne",
        dev: "En développement",
        visit: "Visiter le site",
        play: "Google Play",
        context: "Contexte",
        description: "Description",
        keyFeatures: "Fonctionnalités clés",
        stack: "Stack technique",
        results: "Résultats",
        similar: "Un projet similaire ?",
        ctaDesc: "Disponible pour développer votre application web ou mobile.",
        cta: "Démarrer un projet",
      }

  const localePath = loc === "fr" ? "" : "/en"
  const url = `${siteUrl}${localePath}/projets/${project.slug}`
  const homeUrl = `${siteUrl}${localePath}` || siteUrl

  const baseLd = {
    name: pc.title,
    description: pc.tagline,
    url,
    image: `${siteUrl}${project.image}`,
    datePublished: project.datePublished,
    author: { "@id": `${siteUrl}/#person` },
    creator: { "@id": `${siteUrl}/#person` },
    keywords: project.tags.join(", "),
    inLanguage: loc === "en" ? "en-US" : "fr-FR",
  }

  const projectLd =
    slug === "steamhunter"
      ? {
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          ...baseLd,
          operatingSystem: "ANDROID",
          applicationCategory: "GameApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          ...(project.links.android ? { downloadUrl: project.links.android } : {}),
        }
      : {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          ...baseLd,
        }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: loc === "en" ? "Home" : "Accueil",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: loc === "en" ? "Projects" : "Réalisations",
        item: `${homeUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pc.title,
        item: url,
      },
    ],
  }

  const jsonLd = [projectLd, breadcrumbLd]

  return (
    <article className="container py-16 md:py-24 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {labels.back}
        </Link>
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <time dateTime={project.datePublished}>
            {new Date(project.datePublished).toLocaleDateString(loc === "en" ? "en-US" : "fr-FR", {
              year: "numeric",
              month: "long",
            })}
          </time>
          <span>·</span>
          <Badge variant={project.status === "live" ? "default" : "secondary"}>
            {project.status === "live" ? labels.live : labels.dev}
          </Badge>
        </div>

        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-4">
          {pc.title}
        </h1>
        <p className="text-xl text-muted-foreground">{pc.tagline}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.links.live && (
            <Button asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                {labels.visit}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          )}
          {project.links.android && (
            <Button asChild variant="outline">
              <a href={project.links.android} target="_blank" rel="noopener noreferrer">
                {labels.play}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </header>

      <div className="relative aspect-video mb-12 overflow-hidden rounded-xl border border-border">
        <Image
          src={project.image}
          alt={pc.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <section className="prose prose-invert max-w-none mb-12">
        <h2 className="text-3xl font-bold mb-4">{labels.context}</h2>
        <p className="text-muted-foreground text-lg">{pc.context}</p>

        <h2 className="text-3xl font-bold mt-12 mb-4">{labels.description}</h2>
        <p className="text-muted-foreground text-lg">{pc.longDescription}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{labels.keyFeatures}</h2>
        <ul className="space-y-3">
          {pc.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-lg">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{labels.stack}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {project.stack.map((s) => (
            <div key={s.category} className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-3">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{labels.results}</h2>
        <ul className="space-y-3">
          {pc.results.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-lg">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">{labels.similar}</h2>
        <p className="text-muted-foreground mb-6">
          {labels.ctaDesc}
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">{labels.cta}</Link>
        </Button>
      </section>
    </article>
  )
}
