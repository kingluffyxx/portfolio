"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Code2 } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { useTranslations } from 'next-intl'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ProjectCardFlip } from "@/components/ui/project-card-flip"

function ProjectImage({ src, alt, className, sizes, loading }: Readonly<{ src: string; alt: string; className?: string; sizes?: string; loading?: "eager" | "lazy" }>) {
    const [hasError, setHasError] = useState(false)

    if (hasError || !src) {
        return (
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-primary/10 via-accent/5 to-primary/10 ${className}`}>
                <Code2 className="mb-2 w-12 h-12 text-primary/40" />
                <span className="font-medium text-muted-foreground/60 text-sm">{alt}</span>
            </div>
        )
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            loading={loading}
            className={className}
            onError={() => setHasError(true)}
        />
    )
}

type Project = {
    title: string
    description: string
    longDescription?: string
    image: string
    tags: string[]
    highlights: string[]
    role?: string
    duration?: string
    links?: {
        live?: string
        github?: string
    }
    status?: "development" | "live" | "coming-soon"
}

export function Projects() {
    const t = useTranslations('projects')
    const { elementRef, isVisible } = useScrollAnimation()

    const featuredProject = t.raw('featured') as Project
    const otherProjects = t.raw('items') as Project[]

    const getStatusBadge = (status?: string) => {
        switch (status) {
            case "live":
                return <Badge className="bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400">{t('statusLive')}</Badge>
            case "development":
                return <Badge className="bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400">{t('statusDevelopment')}</Badge>
            case "coming-soon":
                return <Badge className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400">{t('statusComingSoon')}</Badge>
            default:
                return null
        }
    }

    return (
        <section id="projects" className="py-12 md:py-24 lg:py-32 container" ref={elementRef}>
            <div className="mx-auto max-w-6xl">
                {/* En-tête */}
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}>
                        {t('title')}
                    </h2>
                    <p className={`mt-4 text-lg text-muted-foreground scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Projet Featured */}
                <div className={`mb-12 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <div className="group relative bg-card hover:shadow-2xl hover:shadow-primary/10 border hover:border-primary/30 rounded-3xl overflow-hidden transition-all duration-500">
                        <div className="gap-0 grid lg:grid-cols-2">
                            {/* Image */}
                            <div className="relative bg-linear-to-br from-primary/5 to-accent/5 lg:min-h-[400px] aspect-video lg:aspect-auto overflow-hidden">
                                <ProjectImage
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    loading="eager"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="flex flex-col justify-center p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="font-bold group-hover:text-primary text-2xl lg:text-3xl transition-colors">
                                        {featuredProject.title}
                                    </h3>
                                    {getStatusBadge(featuredProject.status)}
                                </div>

                                <p className="mb-6 text-muted-foreground leading-relaxed">
                                    {featuredProject.longDescription}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-6">
                                    {featuredProject.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-center gap-2 text-sm">
                                            <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-muted px-2.5 py-1 rounded-full text-muted-foreground text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Liens */}
                                <div className="flex gap-3">
                                    {featuredProject.links?.live && (
                                        <Button asChild>
                                            <Link href={featuredProject.links.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 w-4 h-4" />
                                                {t('visitSite')}
                                            </Link>
                                        </Button>
                                    )}
                                    {featuredProject.links?.github && (
                                        <Button variant="outline" asChild>
                                            <Link href={featuredProject.links.github} target="_blank" rel="noopener noreferrer">
                                                <SiGithub className="mr-2 w-4 h-4" />
                                                {t('viewCode')}
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Autres projets - Flip Cards */}
                {otherProjects.length > 0 && (
                    <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                        {otherProjects.map((project, index) => (
                            <ProjectCardFlip
                                key={project.title}
                                project={project}
                                statusBadge={getStatusBadge(project.status)}
                                visitLabel={t('visit')}
                                codeLabel={t('code')}
                                index={index}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
