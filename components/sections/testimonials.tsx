"use client"

import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { useLocale } from "next-intl"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  projects,
  projectSlugs,
  getLocalizedProject,
  type Locale,
} from "@/lib/projects-data"

export function Testimonials() {
  const locale = useLocale()
  const loc: Locale = locale === "en" ? "en" : "fr"
  const localePath = loc === "en" ? "/en" : ""
  const { elementRef, isVisible } = useScrollAnimation()

  const items = projectSlugs
    .map((slug) => ({ slug, project: projects[slug] }))
    .map(({ slug, project }) => ({
      slug,
      project,
      content: getLocalizedProject(project, loc),
    }))
    .filter(({ content }) => content.testimonial)

  if (items.length === 0) return null

  const t =
    loc === "en"
      ? {
          eyebrow: "Client reviews",
          title: "What my clients say",
          subtitle:
            "Real, verifiable feedback from people I have worked with.",
          project: "View the project",
        }
      : {
          eyebrow: "Avis clients",
          title: "Ce que disent mes clients",
          subtitle:
            "Des retours réels et vérifiables de personnes avec qui j'ai travaillé.",
          project: "Voir le projet",
        }

  return (
    <section
      id="testimonials"
      className="py-12 md:py-24 container"
      ref={elementRef}
    >
      <div
        className={`max-w-2xl mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-4">
          ● {t.eyebrow}
        </p>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map(({ slug, content }, i) => {
          const tm = content.testimonial!
          return (
            <figure
              key={slug}
              className={`flex flex-col rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1 mb-4" aria-label="5 sur 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="text-sm md:text-base leading-relaxed text-foreground/85 whitespace-pre-line italic line-clamp-[10]">
                « {tm.quote} »
              </blockquote>

              <figcaption className="mt-5 pt-5 border-t border-primary/15 text-sm">
                <span className="font-semibold text-foreground not-italic">
                  {tm.authorUrl ? (
                    <a
                      href={tm.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
                    >
                      {tm.author}
                    </a>
                  ) : (
                    tm.author
                  )}
                </span>
                {tm.role && (
                  <span className="block text-muted-foreground mt-0.5">
                    {tm.role}
                  </span>
                )}
              </figcaption>

              <Link
                href={`${localePath}/projets/${slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                {t.project}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
