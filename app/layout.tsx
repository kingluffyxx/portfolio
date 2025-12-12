import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BotIdClient } from "botid/client";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavier-adda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xavier Adda - Développeur Fullstack PHP & Next.js",
    template: "%s | Xavier Adda",
  },
  description:
    "Développeur web fullstack avec 7+ ans d'expérience. Spécialisé en PHP (Symfony, Laravel) et Next.js/React. Freelance disponible pour vos projets web.",
  keywords: [
    "développeur fullstack",
    "développeur PHP",
    "développeur Next.js",
    "développeur React",
    "Symfony",
    "Laravel",
    "freelance",
    "développeur web",
    "fullstack developer",
    "Xavier Adda",
    "France",
    "Île-de-France",
  ],
  authors: [{ name: "Xavier Adda", url: siteUrl }],
  creator: "Xavier Adda",
  publisher: "Xavier Adda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Xavier Adda - Portfolio",
    title: "Xavier Adda - Développeur Fullstack PHP & Next.js",
    description:
      "Développeur web fullstack avec 7+ ans d'expérience. Spécialisé en PHP (Symfony, Laravel) et Next.js/React. Freelance disponible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xavier Adda - Développeur Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xavier Adda - Développeur Fullstack PHP & Next.js",
    description:
      "Développeur web fullstack avec 7+ ans d'expérience. Spécialisé en PHP (Symfony, Laravel) et Next.js/React.",
    images: ["/og-image.png"],
    creator: "@xavier_adda",
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-FR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  category: "technology",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Xavier Adda",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: "Développeur Fullstack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Soisy-sous-Montmorency",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    sameAs: [
      "https://github.com/kingluffyxx",
      "https://www.linkedin.com/in/xavier-adda/",
    ],
    knowsAbout: [
      "PHP",
      "Symfony",
      "Laravel",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "TailwindCSS",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BotIdClient protect={[{ path: "/api/contact", method: "POST" }]} />
            <div className="relative flex flex-col min-h-screen">
              {/* Violet Storm Background with Top Glow */}
              <div
                className="z-0 fixed inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)",
                }}
              />
              <Navbar />
              <main className="z-1 relative flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
