import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { SiteShell } from "@/components/site-shell"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound()
  }
  setRequestLocale(locale)
  const messages = await getMessages({ locale })
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteShell>{children}</SiteShell>
    </NextIntlClientProvider>
  )
}
