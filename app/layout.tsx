import { Geist, Geist_Mono } from "next/font/google";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { BotIdClient } from "botid/client";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Création de sites internet & SEO · Xavier Adda Freelance",
    template: "%s",
  },
  description:
    "Freelance création de sites internet professionnels, boutiques en ligne et applications sur-mesure. SEO inclus, livré rapidement. 7+ ans d'expérience. Île-de-France & Remote.",
  keywords: [
    "création site internet",
    "freelance création site web",
    "création site WordPress",
    "création boutique en ligne",
    "freelance SEO",
    "audit SEO",
    "création site Next.js",
    "développeur freelance",
    "refonte site web",
    "site vitrine professionnel",
    "WooCommerce",
    "Xavier Adda",
    "Île-de-France",
    "Paris",
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
    title: "Création de sites internet & SEO · Xavier Adda Freelance",
    description:
      "Création de sites internet, boutiques en ligne et applications sur-mesure. SEO inclus. Freelance avec 7+ ans d'expérience. Île-de-France & Remote.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Création de sites internet & SEO · Xavier Adda Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de sites internet & SEO · Xavier Adda Freelance",
    description:
      "Création de sites internet, e-commerce et applications. SEO inclus. Freelance 7+ ans d'expérience.",
    images: ["/opengraph-image"],
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
      "x-default": siteUrl,
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

  // JSON-LD structured data for SEO
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Xavier Adda",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Développeur web freelance & consultant SEO",
    email: "mailto:xavier.adda@gmail.com",
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
      "SEO",
      "Référencement naturel",
      "Création de site web",
      "Création de site vitrine",
      "Création de boutique en ligne",
      "Audit SEO",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Symfony",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "TailwindCSS",
    ],
  };

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Xavier Adda · Création de sites internet & SEO",
    description:
      "Freelance création de sites internet, e-commerce, intégration IA et SEO. Île-de-France et remote international. Devis sous 48h, 7+ ans d'expérience.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    provider: { "@id": `${siteUrl}/#person` },
    priceRange: "€€",
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "Place", name: "Remote" },
    ],
    serviceType: [
      "Création de site internet",
      "Création de site vitrine",
      "Création de boutique en ligne",
      "Audit SEO",
      "Référencement naturel",
      "Refonte de site web",
      "Intégration d'IA",
      "Développement Next.js",
      "Développement Symfony",
      "Développement Laravel",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "350",
      highPrice: "40000",
      offerCount: "10",
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Xavier Adda · Freelance",
    inLanguage: ["fr-FR", "en-US"],
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const jsonLd = [personLd, professionalServiceLd, websiteLd];

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BotIdClient protect={[{ path: "/api/contact", method: "POST" }]} />
          <div className="relative flex flex-col min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
