"use client";

import { useTranslations } from "next-intl";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Globe,
  ShoppingCart,
  RefreshCw,
  Wrench,
  Code2,
  ArrowRight,
  Check,
} from "lucide-react";

const startupServices = [
  {
    key: "fullstack",
    icon: Code2,
  },
];

const tpeServices = [
  { key: "vitrine", icon: Globe },
  { key: "ecommerce", icon: ShoppingCart },
  { key: "refonte", icon: RefreshCw },
  { key: "maintenance", icon: Wrench },
];

export function Services() {
  const t = useTranslations("services");
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      className="py-12 md:py-24 lg:py-32 container"
      ref={elementRef}
    >
      <div className="mx-auto max-w-5xl">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <h2
            className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? "scroll-animate-visible" : ""}`}
          >
            {t("title")}
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate ${isVisible ? "scroll-animate-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="startup"
          className={`scroll-animate ${isVisible ? "scroll-animate-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
            <TabsTrigger
              value="startup"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Building2 className="size-4" />
              <span className="hidden sm:inline">{t("tabStartup")}</span>
              <span className="sm:hidden">{t("tabStartupShort")}</span>
            </TabsTrigger>
            <TabsTrigger
              value="tpe"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Users className="size-4" />
              <span className="hidden sm:inline">{t("tabTpe")}</span>
              <span className="sm:hidden">{t("tabTpeShort")}</span>
            </TabsTrigger>
          </TabsList>

          {/* Startup/ESN Content */}
          <TabsContent value="startup" className="mt-0">
            <div className="grid gap-6">
              {startupServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.key}
                    className="group relative bg-card border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl rounded-full transition-opacity duration-300" />
                        <div className="relative flex justify-center items-center bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:border-primary/40 rounded-2xl w-14 h-14 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="font-semibold text-xl">
                            {t(`startup.${service.key}.title`)}
                          </h3>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 text-sm font-semibold w-fit">
                            {t(`startup.${service.key}.price`)}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {t(`startup.${service.key}.description`)}
                        </p>

                        {/* Features */}
                        <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                          {[1, 2, 3, 4].map((i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="size-4 text-primary shrink-0" />
                              {t(`startup.${service.key}.feature${i}`)}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {[
                            "React",
                            "Next.js",
                            "Symfony",
                            "Laravel",
                            "PostgreSQL",
                          ].map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  {t("ctaStartup")}
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </TabsContent>

          {/* TPE/Particuliers Content */}
          <TabsContent value="tpe" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {tpeServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.key}
                    className="group relative bg-card border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl rounded-full transition-opacity duration-300" />
                      <div className="relative flex justify-center items-center bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:border-primary/40 rounded-2xl w-12 h-12 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-semibold text-lg">
                        {t(`tpe.${service.key}.title`)}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 text-sm font-semibold w-fit">
                        {t(`tpe.${service.key}.price`)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t(`tpe.${service.key}.description`)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 text-primary shrink-0" />
                          {t(`tpe.${service.key}.feature${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  {t("ctaTpe")}
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
