"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const isDark = resolvedTheme === "dark"
        const newTheme = isDark ? "light" : "dark"

        // Check if View Transitions API is supported
        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setTheme(newTheme)
            return
        }

        // Get click position for the animation origin
        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        // Start view transition
        const transition = document.startViewTransition(async () => {
            setTheme(newTheme)
        })

        await transition.ready

        // Clip-path animation
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ]

        document.documentElement.animate(
            {
                clipPath: isDark ? clipPath : clipPath.reverse(),
            },
            {
                duration: 400,
                easing: "ease-in-out",
                pseudoElement: isDark
                    ? "::view-transition-new(root)"
                    : "::view-transition-old(root)",
            }
        )
    }

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="relative">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
