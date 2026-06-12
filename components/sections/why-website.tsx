"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Search, Zap, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyWebsite() {
  const t = useTranslations("whyWebsite")

  const cards = [
    { icon: Search, title: t("card1Title"), desc: t("card1Desc") },
    { icon: Zap, title: t("card2Title"), desc: t("card2Desc") },
    { icon: Target, title: t("card3Title"), desc: t("card3Desc") },
  ]

  return (
    <section className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139, 92, 246, 0.08), transparent 70%)",
        }}
      />
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("lead")}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="group relative bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
          >
            <Link href="#contact">
              {t("ctaLabel")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
