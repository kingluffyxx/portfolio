import { notFound, permanentRedirect } from "next/navigation"
import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { templates, getLocalizedTemplate, type Locale } from "@/lib/templates-data"
import { TemplateMockupView } from "@/components/template-mockup-view"
import {
  RestaurantMockup,
  RestaurantDemoBanner,
} from "@/components/mockups/restaurant-mockup"
import {
  ArtisanMockup,
  ArtisanDemoBanner,
} from "@/components/mockups/artisan-mockup"
import {
  SalonMockup,
  SalonDemoBanner,
} from "@/components/mockups/salon-mockup"
import {
  MedicalMockup,
  MedicalDemoBanner,
} from "@/components/mockups/medical-mockup"
import {
  CoachMockup,
  CoachDemoBanner,
} from "@/components/mockups/coach-mockup"
import {
  FashionMockup,
  FashionDemoBanner,
} from "@/components/mockups/fashion-mockup"
import {
  RealEstateMockup,
  RealEstateDemoBanner,
} from "@/components/mockups/real-estate-mockup"
import {
  CraftShopMockup,
  CraftShopDemoBanner,
} from "@/components/mockups/craft-shop-mockup"
import {
  PhotographerMockup,
  PhotographerDemoBanner,
} from "@/components/mockups/photographer-mockup"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

/** Maquettes haut de gamme avec composant dédié (palette, typo, sections custom) */
const PREMIUM_MOCKUPS: Record<string, () => React.ReactElement> = {
  "restaurant-bistrot": () => (
    <>
      <RestaurantDemoBanner />
      <RestaurantMockup />
    </>
  ),
  "artisan-btp": () => (
    <>
      <ArtisanDemoBanner />
      <ArtisanMockup />
    </>
  ),
  "salon-beaute": () => (
    <>
      <SalonDemoBanner />
      <SalonMockup />
    </>
  ),
  "cabinet-medical": () => (
    <>
      <MedicalDemoBanner />
      <MedicalMockup />
    </>
  ),
  "coach-consultant": () => (
    <>
      <CoachDemoBanner />
      <CoachMockup />
    </>
  ),
  "ecommerce-mode": () => (
    <>
      <FashionDemoBanner />
      <FashionMockup />
    </>
  ),
  "agence-immo": () => (
    <>
      <RealEstateDemoBanner />
      <RealEstateMockup />
    </>
  ),
  "ecommerce-artisan": () => (
    <>
      <CraftShopDemoBanner />
      <CraftShopMockup />
    </>
  ),
  "photographe-portfolio": () => (
    <>
      <PhotographerDemoBanner />
      <PhotographerMockup />
    </>
  ),
}

export function generateStaticParams() {
  const slugs = templates
    .filter((t) => t.fr.mockup || PREMIUM_MOCKUPS[t.slug])
    .map((t) => t.slug)
  // FR-only: maquettes are FR demos by design. EN visitors are redirected.
  return slugs.map((slug) => ({ locale: "fr", slug }))
}

type Params = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale === "en") return {}
  const template = templates.find((t) => t.slug === slug)
  if (!template) return {}
  const tc = template.fr

  const url = `${siteUrl}/realisations/${template.slug}`
  return {
    title: `Maquette ${tc.title} · Exemple de site ${tc.industry}`,
    description: `${tc.description} Maquette navigable, à adapter à votre marque.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Maquette ${tc.title}`,
      description: tc.description,
      url,
      type: "website",
    },
    robots: { index: true, follow: true },
  }
}

export default async function TemplatePreviewPage({ params }: Params) {
  const { locale, slug } = await params
  if (locale === "en") {
    permanentRedirect(`/realisations/${slug}`)
  }
  setRequestLocale(locale)
  const template = templates.find((t) => t.slug === slug)
  if (!template) notFound()

  const Premium = PREMIUM_MOCKUPS[template.slug]
  if (Premium) return <Premium />

  const loc: Locale = locale === "en" ? "en" : "fr"
  const tc = getLocalizedTemplate(template, loc)
  if (!tc.mockup) notFound()
  return <TemplateMockupView template={template} locale={loc} />
}
