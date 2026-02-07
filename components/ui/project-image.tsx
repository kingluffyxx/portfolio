"use client"

import { useState } from "react"
import Image from "next/image"
import { Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectImageProps {
    src: string
    alt: string
    className?: string
    sizes?: string
    loading?: "eager" | "lazy"
}

export function ProjectImage({ src, alt, className, sizes, loading }: Readonly<ProjectImageProps>) {
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
            sizes={sizes}
            loading={loading}
            className={className}
            onError={() => setHasError(true)}
        />
    )
}
