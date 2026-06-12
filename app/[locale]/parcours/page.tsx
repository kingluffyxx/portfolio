import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Experience } from "@/components/sections/experience"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "parcours" })

  const frUrl = `${siteUrl}/parcours`
  const enUrl = `${siteUrl}/en/parcours`
  const canonical = locale === "fr" ? frUrl : enUrl

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical,
      languages: {
        "fr-FR": frUrl,
        "en-US": enUrl,
        "x-default": frUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ParcoursPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "parcours" })

  return (
    <div className="container py-16 md:py-24 max-w-5xl">
      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t("back")}
        </Link>
      </Button>

      <header className="mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {t("intro")}
        </p>
      </header>

      <Experience />
    </div>
  )
}
