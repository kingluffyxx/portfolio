"use client"

import { useTranslations } from 'next-intl'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, Calendar, TrendingUp, Zap, Shield, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Impact = {
    icon: string
    text: string
    metric?: string
}

type ExperienceItem = {
    title: string
    company: string
    type: string
    period: string
    duration: string
    mission?: string
    stack: string[]
    impacts: Impact[]
    current?: boolean
}

const iconMap: Record<string, React.ElementType> = {
    performance: TrendingUp,
    feature: Zap,
    security: Shield,
    refactor: RefreshCw,
}

export function Experience() {
    const t = useTranslations('experience')
    const { elementRef, isVisible } = useScrollAnimation()

    const experiences = t.raw('items') as ExperienceItem[]

    return (
        <section id="experience" className="py-12 md:py-24 lg:py-32 container" ref={elementRef as any}>
            <div className="mx-auto max-w-4xl">
                {/* En-tête */}
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}>
                        {t('title')}
                    </h2>
                    <p className={`mt-4 text-lg text-foreground dark:text-muted-foreground scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="top-0 bottom-0 left-[23px] md:left-1/2 absolute bg-linear-to-b from-primary via-primary/50 to-transparent w-px md:-translate-x-px" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
                                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                            >
                                {/* Point sur la timeline */}
                                <div className="left-0 md:left-1/2 z-10 absolute md:-translate-x-1/2">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-background ${exp.current ? 'bg-primary text-primary-foreground' : 'bg-card text-primary'} shadow-lg`}>
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                    <div className="group bg-card hover:shadow-primary/10 hover:shadow-xl p-6 border hover:border-primary/30 rounded-2xl transition-all duration-300">
                                        {/* En-tête de la card */}
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold group-hover:text-primary text-lg transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <Badge variant={exp.current ? "default" : "secondary"} className="text-xs">
                                                        {exp.type}
                                                    </Badge>
                                                </div>
                                                <p className="text-foreground dark:text-foreground/70 text-sm">{exp.title}</p>
                                                {exp.mission && (
                                                    <p className="mt-1 text-cyan-600 dark:text-cyan-400 text-xs">{exp.mission}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                                <Calendar className="w-3 h-3" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-primary/20 dark:bg-primary/30 px-2 py-0.5 rounded-md font-medium text-primary dark:text-primary-foreground text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Impacts */}
                                        <div className="space-y-2">
                                            {exp.impacts.map((impact, i) => {
                                                const Icon = iconMap[impact.icon] || Zap
                                                return (
                                                    <div key={i} className="flex items-start gap-2 text-sm">
                                                        <Icon className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                                                        <span className="text-foreground dark:text-foreground/80">
                                                            {impact.text}
                                                            {impact.metric && (
                                                                <span className="ml-1 font-semibold text-emerald-600 dark:text-emerald-400">
                                                                    {impact.metric}
                                                                </span>
                                                            )}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* Période en bas */}
                                        <div className="mt-4 pt-4 border-t text-foreground/60 dark:text-foreground/60 text-xs">
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
