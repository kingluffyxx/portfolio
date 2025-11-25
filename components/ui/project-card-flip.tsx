"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    CardFlip,
    CardFlipFront,
    CardFlipBack,
    CardFlipHeader,
    CardFlipTitle,
    CardFlipDescription,
    CardFlipContent,
    CardFlipFooter,
} from "@/components/ui/card-flip"
import { ExternalLink, Code2, ArrowRight, Clock, User } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { cn } from "@/lib/utils"

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

interface ProjectCardFlipProps {
    project: Project
    statusBadge: React.ReactNode
    visitLabel: string
    codeLabel: string
    index: number
    isVisible: boolean
}

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const [hasError, setHasError] = useState(false)

    if (hasError || !src) {
        return (
            <div className={cn("absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10", className)}>
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
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn("object-cover", className)}
            onError={() => setHasError(true)}
        />
    )
}

export function ProjectCardFlip({
    project,
    statusBadge,
    visitLabel,
    codeLabel,
    index,
    isVisible
}: ProjectCardFlipProps) {
    return (
        <div
            className={cn(
                "h-[420px] scroll-animate-scale",
                isVisible && "scroll-animate-scale-visible"
            )}
            style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
        >
            <CardFlip className="h-full">
                {/* Front of card */}
                <CardFlipFront>
                    {/* Image */}
                    <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 aspect-video overflow-hidden">
                        <ProjectImage
                            src={project.image}
                            alt={project.title}
                            className="transition-transform duration-300"
                        />
                        {/* Status */}
                        <div className="absolute top-3 left-3 z-10">
                            {statusBadge}
                        </div>
                    </div>

                    <CardFlipHeader>
                        <CardFlipTitle>{project.title}</CardFlipTitle>
                        <CardFlipDescription className="line-clamp-2">
                            {project.description}
                        </CardFlipDescription>
                    </CardFlipHeader>

                    <CardFlipContent>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 4).map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-muted px-2 py-0.5 rounded-md text-muted-foreground text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </CardFlipContent>

                    <CardFlipFooter>
                        {project.links?.live && (
                            <Button size="sm" variant="ghost" asChild className="px-3 h-8">
                                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                                    {visitLabel}
                                </Link>
                            </Button>
                        )}
                        {project.links?.github && (
                            <Button size="sm" variant="ghost" asChild className="px-3 h-8">
                                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <SiGithub className="mr-1.5 w-3.5 h-3.5" />
                                    {codeLabel}
                                </Link>
                            </Button>
                        )}
                    </CardFlipFooter>
                </CardFlipFront>

                {/* Back of card */}
                <CardFlipBack className="bg-gradient-to-br from-card via-card to-primary/5">
                    <CardFlipHeader>
                        <div className="flex items-center gap-2 mb-1">
                            <CardFlipTitle className="text-primary">{project.title}</CardFlipTitle>
                            {statusBadge}
                        </div>

                        {/* Role & Duration */}
                        {(project.role || project.duration) && (
                            <div className="flex flex-wrap gap-3 text-muted-foreground text-xs mt-2">
                                {project.role && (
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        <span>{project.role}</span>
                                    </div>
                                )}
                                {project.duration && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{project.duration}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardFlipHeader>

                    <CardFlipContent className="overflow-y-auto">
                        {/* Long Description */}
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2">
                            {project.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-2 text-xs">
                                    <ArrowRight className="mt-0.5 w-3 h-3 text-primary shrink-0" />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </CardFlipContent>

                    <CardFlipFooter className="border-t mt-auto">
                        {project.links?.live && (
                            <Button size="sm" asChild className="flex-1 h-8">
                                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                                    {visitLabel}
                                </Link>
                            </Button>
                        )}
                        {project.links?.github && (
                            <Button size="sm" variant="outline" asChild className="flex-1 h-8">
                                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <SiGithub className="mr-1.5 w-3.5 h-3.5" />
                                    {codeLabel}
                                </Link>
                            </Button>
                        )}
                    </CardFlipFooter>
                </CardFlipBack>
            </CardFlip>
        </div>
    )
}
