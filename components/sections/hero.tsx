"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { LayoutTextFlip } from "@/src/components/ui/layout-text-flip"
import { Vortex } from "@/src/components/ui/vortex"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
    const t = useTranslations('hero')
    const flipWords = t.raw('flipWords') as string[]

    return (
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
            <Vortex
                backgroundColor="transparent"
                baseHue={270}
                rangeY={500}
                particleCount={500}
                baseSpeed={0.1}
                rangeSpeed={1}
                baseRadius={1}
                rangeRadius={2}
                containerClassName="absolute inset-0"
                className="w-full h-full"
            >
                <div className="flex items-center py-24 md:py-32 h-full min-h-[calc(100vh-4rem)] container">
                    <div className="flex md:flex-row flex-col-reverse md:justify-between items-center gap-12 md:gap-16 w-full">
                        {/* Contenu textuel */}
                        <div className="flex flex-col md:flex-1 gap-4 md:text-left text-center animate-slide-in-left">
                            {/* Badge disponible */}
                            <div className="flex justify-center md:justify-start">
                                <div className="inline-flex items-center gap-2 bg-green-500/10 px-3 py-1.5 border border-green-500/20 rounded-full">
                                    <span className="inline-grid *:[grid-area:1/1]">
                                        <span className="animate-ping status status-success"></span>
                                        <span className="status status-success"></span>
                                    </span>
                                    <span className="font-medium text-green-600 dark:text-green-400 text-sm">{t('available')}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-lg">{t('greeting')}</p>
                            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight lg:leading-[1.1] tracking-tighter">
                                <span className="bg-clip-text bg-linear-to-r from-primary to-accent text-transparent">{t('name')}</span>
                            </h1>
                            <h2 className="font-semibold text-foreground text-2xl md:text-3xl">
                                {t('title')}
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                {t('subtitle')}
                            </p>
                            {/* Texte flip animé */}
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                                <LayoutTextFlip
                                    text={t('flipPrefix')}
                                    words={flipWords}
                                    duration={5000}
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col justify-center md:justify-start gap-4 mt-4">
                                <Button asChild size="lg" className="hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
                                    <Link href="#projects">
                                        {t('ctaProjects')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all">
                                    <Link href="#contact">{t('ctaContact')}</Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all">
                                    <a href="/CV_Xavier_Adda.pdf" download className="flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        {t('ctaDownloadCV')}
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Photo de profil */}
                        <div className="relative animate-slide-in-right md:shrink-0">
                            <div className="relative w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96">
                                {/* Cercle décoratif avec gradient */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 blur-2xl rounded-full" />
                                {/* Bordure avec gradient */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent p-1 rounded-full">
                                    <div className="relative bg-background p-1 rounded-full w-full h-full">
                                        <Image
                                            src="/images/profile.jpg"
                                            alt={t('name')}
                                            fill
                                            className="rounded-full object-cover"
                                            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                                            quality={95}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Vortex>
        </section>
    )
}
