"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  ShoppingCart,
  Code2,
  Search,
  RefreshCw,
  Wrench,
  ArrowRight,
  Sparkles,
  Check,
  Bot,
} from "lucide-react"
import { services, featuredServices, type ServiceSlug } from "@/lib/services-data"

const iconMap: Record<ServiceSlug, typeof Globe> = {
  "site-vitrine": Globe,
  "boutique-en-ligne": ShoppingCart,
  "application-sur-mesure": Code2,
  "implementation-ia": Bot,
  "audit-seo": Search,
  "refonte-site": RefreshCw,
  "maintenance-hebergement": Wrench,
  "developpement-symfony": Code2,
  "developpement-laravel": Code2,
  "developpement-nextjs": Code2,
}

export function Services() {
  const { elementRef, isVisible } = useScrollAnimation()
  const rawLocale = useLocale()
  const locale: "fr" | "en" = rawLocale === "en" ? "en" : "fr"
  const isFr = locale === "fr"
  const labels = {
    heading: isFr ? "Services" : "Services",
    subheading: isFr
      ? "Sites internet, e-commerce, applications et SEO. Devis sous 48h, SEO inclus."
      : "Websites, e-commerce, applications and SEO. Quote within 48h, SEO included.",
    mostRequested: isFr ? "Le plus demandé" : "Most requested",
    learnMore: isFr ? "En savoir plus" : "Learn more",
    quoteIn48h: isFr ? "Devis sous 48h" : "Quote within 48h",
    notSure: isFr
      ? "Pas sûr de l'offre dont vous avez besoin ?"
      : "Not sure which option fits your need?",
    askQuote: isFr ? "Demander un devis gratuit" : "Request a free quote",
  }

  return (
    <section
      id="services"
      className="py-12 md:py-24 lg:py-32 container"
      ref={elementRef}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${
              isVisible ? "scroll-animate-visible" : ""
            }`}
          >
            {labels.heading}
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate ${
              isVisible ? "scroll-animate-visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {labels.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((slug, idx) => {
            const service = services[slug]
            const content = service[locale]
            const localizedSlug = locale === "fr" ? service.slug : service.slugEn
            const Icon = iconMap[slug]
            const isHero = idx === 0

            return (
              <Link
                key={slug}
                href={`/${locale}/services/${localizedSlug}`}
                className={`group relative scroll-animate ${
                  isVisible ? "scroll-animate-visible" : ""
                } ${
                  isHero
                    ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-linear-to-br from-primary/15 via-card to-accent/10 border-primary/30"
                    : "bg-card border-border"
                } border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col`}
                style={{ transitionDelay: `${0.15 + idx * 0.05}s` }}
              >
                {isHero && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground border-transparent gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      {labels.mostRequested}
                    </Badge>
                  </div>
                )}

                <div
                  className={`mb-4 inline-flex items-center justify-center rounded-xl ${
                    isHero ? "w-14 h-14 bg-primary/20" : "w-12 h-12 bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`${isHero ? "w-7 h-7" : "w-6 h-6"} text-primary`}
                  />
                </div>

                <h3
                  className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                    isHero ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {content.techName}
                </h3>

                <p
                  className={`text-muted-foreground ${
                    isHero ? "text-base mb-5" : "text-sm mb-4 flex-1"
                  }`}
                >
                  {content.tagline}
                </p>

                {isHero && (
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {content.deliverables.slice(0, 4).map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border/60">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Sparkles className="w-3 h-3 text-primary" />
                    {labels.quoteIn48h}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    {labels.learnMore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div
          className={`mt-12 text-center scroll-animate ${
            isVisible ? "scroll-animate-visible" : ""
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p className="text-muted-foreground mb-4">{labels.notSure}</p>
          <Button asChild size="lg">
            <Link href="#contact">
              {labels.askQuote}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
