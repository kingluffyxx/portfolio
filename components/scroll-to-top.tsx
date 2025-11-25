"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className={cn(
                "fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300",
                "hover:scale-110 hover:shadow-primary/25 hover:border-primary",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <ArrowUp className="size-5" />
        </Button>
    )
}
