import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { WhyWebsite } from "@/components/sections/why-website";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { SeoExpertise } from "@/components/sections/seo-expertise";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "fr"
        ? "Création de sites internet & SEO · Xavier Adda Freelance"
        : "Web development & SEO · Xavier Adda Freelance",
    description:
      locale === "fr"
        ? "Développeur web freelance en Île-de-France et à distance : création de sites vitrines, boutiques en ligne et applications sur-mesure. SEO inclus, 9+ ans d'expérience, devis sous 48h."
        : "Freelance web developer in the Paris area and remote: showcase sites, online stores and custom web apps. SEO included, 9+ years of experience, quote within 48h.",
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
      <Testimonials />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
