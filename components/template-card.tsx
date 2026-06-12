"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useLocale } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { getLocalizedTemplate, type Template, type Locale } from "@/lib/templates-data"

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  const locale = (useLocale() as Locale) || "fr"
  const content = getLocalizedTemplate(template, locale)
  const { style, liveUrl, techStack, image } = template
  const mockup = content.mockup
  const isLive = Boolean(liveUrl)
  const hasMockup = Boolean(mockup)
  const hasRealImage = Boolean(image)
  // Image présente sans liveUrl = capture de maquette premium → page preview existe
  const hasPreviewPage = hasMockup || (hasRealImage && !isLive)

  const fontFamily =
    style.font === "serif"
      ? "var(--font-serif, Georgia, serif)"
      : style.font === "mono"
        ? "var(--font-mono, monospace)"
        : "var(--font-sans, system-ui)"

  const href =
    liveUrl ??
    (hasPreviewPage
      ? `/realisations/${template.slug}`
      : `/services/${template.recommendedService}`)

  const labels = locale === "en"
    ? { welcome: "Welcome", visit: "Visit site", preview: "View mockup", start: "Start", start2: "Start" }
    : { welcome: "Bienvenue", visit: "Visiter le site", preview: "Voir la maquette", start: "Démarrer", start2: "Démarrer" }

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isLive ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
      >
        {children}
      </Link>
    )

  return (
    <Wrapper>
      {/* Visuel : image réelle si projet live, sinon mockup CSS */}
      {hasRealImage ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-card">
          <Image
            src={image!}
            alt={content.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {isLive && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-green-500/90 text-white border-0 gap-1 shadow-lg">
                <span className="inline-grid *:[grid-area:1/1]">
                  <span className="animate-ping w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>
                LIVE
              </Badge>
            </div>
          )}
        </div>
      ) : (
        <div
          className="relative aspect-[16/10] overflow-hidden flex flex-col p-5 group-hover:scale-[1.02] transition-transform duration-500"
          style={{ backgroundColor: style.bg, fontFamily }}
        >
          {isLive && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-green-500/90 text-white border-0 gap-1 shadow-lg">
                <span className="inline-grid *:[grid-area:1/1]">
                  <span className="animate-ping w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </span>
                LIVE
              </Badge>
            </div>
          )}

          {/* Fake navbar */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="text-xs font-bold tracking-tight"
              style={{ color: style.primary }}
            >
              {content.industry.toUpperCase()}
            </div>
            <div className="flex gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full opacity-50"
                style={{ backgroundColor: style.secondary }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full opacity-50"
                style={{ backgroundColor: style.secondary }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full opacity-50"
                style={{ backgroundColor: style.secondary }}
              />
            </div>
          </div>

          {/* Fake hero */}
          <div className="flex-1 flex flex-col justify-center">
            <div
              className="text-[10px] tracking-widest uppercase mb-2 opacity-70"
              style={{ color: style.secondary }}
            >
              {labels.welcome}
            </div>
            <div
              className="font-bold leading-tight mb-2 text-lg md:text-xl"
              style={{ color: style.secondary }}
            >
              {content.title}
            </div>
            <div
              className="text-[10px] mb-3 opacity-60 line-clamp-2"
              style={{ color: style.secondary }}
            >
              {content.description.slice(0, 80)}…
            </div>

            <div
              className="inline-flex self-start items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-semibold"
              style={{
                backgroundColor: style.primary,
                color: style.bg,
              }}
            >
              {content.ctaLabel}
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* Decorative element */}
          <div
            className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl"
            style={{ backgroundColor: style.primary }}
          />
        </div>
      )}

      {/* Card content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
            {content.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground shrink-0 mt-1">
            {content.mood}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {content.description}
        </p>

        {/* Stack technique si projet live */}
        {isLive && techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techStack.map((t) => (
              <Badge key={t} variant="outline" className="text-[10px]">
                {t}
              </Badge>
            ))}
          </div>
        )}

        {/* Features si maquette générique */}
        {!isLive && (
          <ul className="space-y-1 mb-4">
            {template.features.slice(0, 3).map((f) => (
              <li
                key={f}
                className="text-xs text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-0.5">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs font-medium text-muted-foreground">
            {content.industry}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
            {isLive ? (
              <>
                {labels.visit}
                <ExternalLink className="w-4 h-4" />
              </>
            ) : hasPreviewPage ? (
              <>
                {labels.preview}
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                {labels.start}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </span>
        </div>
      </div>
    </Wrapper>
  )
}
