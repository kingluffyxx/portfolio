"use client"

import { useTranslations } from 'next-intl'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Zap, MessageCircle } from "lucide-react"

const icons = {
    code: Code2,
    zap: Zap,
    messageCircle: MessageCircle,
}

export function About() {
    const t = useTranslations('about')
    const { elementRef, isVisible } = useScrollAnimation()

    const values = [
        { key: 'value1', icon: icons.code },
        { key: 'value2', icon: icons.zap },
        { key: 'value3', icon: icons.messageCircle },
    ]

    return (
        <section id="about" className="container py-12 md:py-24 lg:py-32" ref={elementRef as any}>
            <div className="mx-auto max-w-5xl">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}>
                        {t('title')}
                    </h2>
                    <p className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        {t('description')}
                    </p>
                </div>

                {/* Cartes de valeur */}
                <div className="grid gap-8 md:grid-cols-3">
                    {values.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <div
                                key={value.key}
                                className={`group relative scroll-animate-scale ${isVisible ? 'scroll-animate-scale-visible' : ''}`}
                                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center text-center p-8 rounded-2xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                                    {/* Icône avec cercle gradient */}
                                    <div className="mb-6 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                                            <Icon className="h-7 w-7 text-primary" />
                                        </div>
                                    </div>
                                    {/* Contenu */}
                                    <h3 className="text-xl font-semibold mb-3">
                                        {t(`${value.key}Title`)}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t(`${value.key}Desc`)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
