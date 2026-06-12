"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import {
  Gauge,
  FileText,
  MapPin,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

const pillarsConfig = [
  { key: "pillar1", icon: Gauge, itemCount: 4 },
  { key: "pillar2", icon: FileText, itemCount: 4 },
  { key: "pillar3", icon: MapPin, itemCount: 4 },
] as const

export function SeoExpertise() {
  const t = useTranslations("seo")
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      id="seo"
      className="py-12 md:py-24 lg:py-32 container"
      ref={elementRef}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 scroll-animate ${
              isVisible ? "scroll-animate-visible" : ""
            }`}
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("badge")}</span>
          </div>
          <h2
            className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${
              isVisible ? "scroll-animate-visible" : ""
            }`}
            style={{ transitionDelay: "0.05s" }}
          >
            <span className="bg-clip-text bg-linear-to-r from-primary to-accent text-transparent">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleRest")}
          </h2>
          <p
            className={`mt-4 text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate ${
              isVisible ? "scroll-animate-visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillarsConfig.map((p, idx) => {
            const Icon = p.icon
            const items = Array.from({ length: p.itemCount }, (_, i) =>
              t(`${p.key}Item${i + 1}` as Parameters<typeof t>[0])
            )
            return (
              <div
                key={p.key}
                className={`bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 scroll-animate ${
                  isVisible ? "scroll-animate-visible" : ""
                }`}
                style={{ transitionDelay: `${0.15 + idx * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">
                  {t(`${p.key}Title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`${p.key}Description` as Parameters<typeof t>[0])}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div
          className={`rounded-2xl border border-primary/30 bg-linear-to-br from-primary/10 via-card to-accent/5 p-8 md:p-10 scroll-animate ${
            isVisible ? "scroll-animate-visible" : ""
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl mb-3">
                {t("exampleTitle")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("exampleDescription")}
              </p>
              <Button asChild size="lg">
                <Link href="/services/audit-seo">
                  {t("exampleCta")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">95+</div>
                <div className="text-xs text-muted-foreground">{t("statLighthouse")}</div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">{t("statIndexable")}</div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">3</div>
                <div className="text-xs text-muted-foreground">{t("statSchemas")}</div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">2</div>
                <div className="text-xs text-muted-foreground">{t("statLanguages")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
