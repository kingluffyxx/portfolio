import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { Button } from "@/components/ui/button"
import {
  getServiceByLocaleSlug,
  getLocalizedSlugs,
  services,
} from "@/lib/services-data"
import { routing } from "@/i18n/routing"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

type SupportedLocale = "fr" | "en"

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === "fr" || locale === "en"
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getLocalizedSlugs(locale as SupportedLocale).map((slug) => ({
      locale,
      slug,
    })),
  )
}

type Params = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isSupportedLocale(locale)) return {}
  const service = getServiceByLocaleSlug(slug, locale)
  if (!service) return {}

  const content = service[locale]
  const frUrl = `${siteUrl}/services/${service.slug}`
  const enUrl = `${siteUrl}/en/services/${service.slugEn}`
  const url = locale === "fr" ? frUrl : enUrl
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": frUrl,
        "en-US": enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: Params) {
  const { locale, slug } = await params
  if (!isSupportedLocale(locale)) notFound()
  setRequestLocale(locale)
  const service = getServiceByLocaleSlug(slug, locale)
  if (!service) notFound()

  const content = service[locale]
  const localizedSlug = locale === "fr" ? service.slug : service.slugEn
  const localePath = locale === "fr" ? "" : "/en"
  const url = `${siteUrl}${localePath}/services/${localizedSlug}`
  const homeUrl = `${siteUrl}${localePath || ""}` || siteUrl

  const isFr = locale === "fr"
  const t = {
    backToServices: isFr ? "Tous les services" : "All services",
    discussProject: isFr ? "Discuter de votre projet" : "Discuss your project",
    dailyRate: isFr ? "TJM indicatif :" : "Indicative rate:",
    forWhom: isFr ? "Pour qui ?" : "Who is it for?",
    whatIDeliver: isFr ? "Ce que je livre" : "What I deliver",
    howItWorks: isFr ? "Comment ça se passe" : "How it works",
    faqTitle: isFr ? "Questions fréquentes" : "Frequently asked questions",
    relatedTitle: isFr ? "Autres expertises" : "Other expertise",
    startProject: isFr ? "Démarrer un projet" : "Start a project",
    contactCopy: isFr
      ? "Décrivez votre besoin, je réponds sous 24h."
      : "Describe your need, I reply within 24h.",
    contactCta: isFr ? "Me contacter" : "Contact me",
    serviceTypePrefix: isFr ? "Développement" : "Development",
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.metaTitle,
    description: content.metaDescription,
    url,
    serviceType: `${t.serviceTypePrefix} ${content.techName}`,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "Place", name: "Remote" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "450",
        priceCurrency: "EUR",
        unitText: "DAY",
      },
    },
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isFr ? "Accueil" : "Home",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${homeUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.h1,
        item: url,
      },
    ],
  }

  return (
    <article className="container py-16 md:py-24 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceLd, faqLd, breadcrumbLd]) }}
      />

      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/#services">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.backToServices}
        </Link>
      </Button>

      <header className="mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-6">
          {content.h1}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">{content.tagline}</p>
        <p className="text-lg leading-relaxed">{content.intro}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button asChild size="lg">
            <Link href="/#contact">{t.discussProject}</Link>
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{t.forWhom}</h2>
        <ul className="space-y-3">
          {content.audience.map((a) => (
            <li key={a} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-lg">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{t.whatIDeliver}</h2>
        <ul className="space-y-3">
          {content.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-lg">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{t.howItWorks}</h2>
        <ol className="space-y-6">
          {content.process.map((p, i) => (
            <li key={p.step} className="flex gap-4">
              <div className="flex shrink-0 justify-center items-center bg-primary/10 border border-primary/30 rounded-full w-10 h-10 font-bold text-primary">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">{p.step}</h3>
                <p className="text-muted-foreground">{p.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{t.faqTitle}</h2>
        <div className="space-y-6">
          {content.faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {service.related.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.relatedTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {service.related.map((r) => {
              const rel = services[r]
              if (!rel) return null
              const relSlug = locale === "fr" ? rel.slug : rel.slugEn
              const relContent = rel[locale]
              return (
                <Button key={r} asChild variant="outline">
                  <Link href={`/${locale}/services/${relSlug}`}>
                    {relContent.techName}
                  </Link>
                </Button>
              )
            })}
          </div>
        </section>
      )}

      <section className="rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">{t.startProject}</h2>
        <p className="text-muted-foreground mb-6">{t.contactCopy}</p>
        <Button asChild size="lg">
          <Link href="/#contact">{t.contactCta}</Link>
        </Button>
      </section>
    </article>
  )
}
