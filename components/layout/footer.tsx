"use client"

import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className="bg-card/50 backdrop-blur-sm py-6 md:py-0 border-t">
            <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:h-24 container">
                <p className="text-foreground dark:text-muted-foreground text-sm md:text-left text-center leading-loose">
                    {t('copyright')}{" "}
                    <span className="font-semibold text-foreground">Next.js</span> {t('and')}{" "}
                    <span className="font-semibold text-foreground">TailwindCSS</span>
                </p>
            </div>
        </footer>
    )
}
