import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { SiteShell } from "@/components/site-shell"

// Blog is FR-only — provider is forced to FR
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  setRequestLocale("fr")
  const messages = await getMessages({ locale: "fr" })
  return (
    <NextIntlClientProvider locale="fr" messages={messages}>
      <SiteShell>{children}</SiteShell>
    </NextIntlClientProvider>
  )
}
