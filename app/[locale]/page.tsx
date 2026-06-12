import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { WhyWebsite } from "@/components/sections/why-website";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { SeoExpertise } from "@/components/sections/seo-expertise";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: locale === "fr" ? siteUrl : `${siteUrl}/en`,
      languages: {
        "fr-FR": siteUrl,
        "en-US": `${siteUrl}/en`,
        "x-default": siteUrl,
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <WhyWebsite />
      <Services />
      <SeoExpertise />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
