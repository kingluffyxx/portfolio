"use client"

import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className="border-t py-6 md:py-0 bg-card/50 backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    {t('copyright')}{" "}
                    <span className="text-primary font-semibold">Next.js</span> {t('and')}{" "}
                    <span className="text-primary font-semibold">TailwindCSS</span>
                </p>
            </div>
        </footer>
    )
}
