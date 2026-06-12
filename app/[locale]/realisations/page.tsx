import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TemplateCard } from "@/components/template-card"
import {
  templates,
  templateCategories,
  type TemplateCategory,
  type Locale,
} from "@/lib/templates-data"
import { projects, getLocalizedProject } from "@/lib/projects-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const frUrl = `${siteUrl}/realisations`
  const enUrl = `${siteUrl}/en/realisations`
  const url = locale === "fr" ? frUrl : enUrl
  return {
    title: "Réalisations & maquettes : exemples de sites",
    description:
      "Découvrez mes réalisations clients (FlowSolo, SteamHunter) et une galerie de maquettes par secteur : restaurant, artisan, e-commerce, SaaS, cabinet médical, immobilier...",
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": frUrl,
        "en-US": enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      title: "Réalisations & maquettes · Xavier Adda",
      description:
        "Galerie de sites et maquettes par secteur. Voyez concrètement ce que je peux créer pour votre activité.",
      url,
    },
  }
}

const categories: TemplateCategory[] = ["vitrine", "ecommerce", "saas", "local"]

export default async function RealisationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = (locale as Locale) === "en" ? "en" : "fr"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Réalisations & maquettes",
    url: `${siteUrl}/realisations`,
    description:
      "Galerie de réalisations et maquettes de sites internet par secteur d'activité.",
    isPartOf: { "@type": "WebSite", url: siteUrl },
    about: { "@id": `${siteUrl}/#person` },
  }

  return (
    <div className="container py-16 md:py-24 max-w-7xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Retour à l&apos;accueil
        </Link>
      </Button>

      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-4">
          Réalisations
        </h1>
        <p className="text-xl text-muted-foreground">
          Projets en production et maquettes par secteur d&apos;activité.
        </p>
      </header>

      {/* Produits/projets perso */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl mb-2">
              Produits en production
            </h2>
            <p className="text-muted-foreground">
              SaaS et applications mis en ligne.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(projects).map((project) => {
            const pc = getLocalizedProject(project, loc)
            return (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={pc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {pc.title.split(/[:—]/)[0].trim()}
                  </h3>
                  <Badge variant={project.status === "live" ? "default" : "secondary"}>
                    {pc.statusLabel}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 flex-1">
                  {pc.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">
                    {loc === "en" ? "View case study" : "Voir l'étude de cas"}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      </section>

      {/* Galerie templates */}
      <section>
        <div className="mb-10 max-w-3xl">
          <h2 className="font-bold text-3xl md:text-4xl mb-3">
            Maquettes par secteur
          </h2>
          <p className="text-muted-foreground text-lg">
            Exemples de styles selon le secteur. Point de départ à adapter
            à votre marque et vos contenus.
          </p>
        </div>

        {categories.map((category) => {
          const items = templates.filter((t) => t.category === category)
          if (items.length === 0) return null

          return (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-semibold text-xl text-muted-foreground uppercase tracking-wider text-sm">
                  {templateCategories[category][loc]}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((template) => (
                  <TemplateCard key={template.slug} template={template} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA bas */}
      <section className="mt-20 rounded-2xl border border-primary/30 bg-linear-to-br from-primary/10 via-card to-accent/5 p-8 md:p-12 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Votre secteur n&apos;est pas listé ?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Tout site est conçu sur-mesure. Décrivez votre projet, je reviens
          vers vous sous 24h.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/#contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services/site-vitrine">
              Voir mes packs sites vitrine
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
