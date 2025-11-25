"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { Menu, X, User, Briefcase, Code2, FolderGit2, Mail } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

type MobileMenuProps = React.ComponentProps<"div"> & {
    open: boolean
}

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!open || !mounted) {
        return null
    }

    return createPortal(
        <div
            className={cn(
                "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
                "fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
            )}
            id="mobile-menu"
        >
            <div
                className={cn(
                    "data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:zoom-in-95 ease-out",
                    "size-full p-4",
                    className
                )}
                data-slot={open ? "open" : "closed"}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}

export function Navbar() {
    const t = useTranslations('nav')
    const tHero = useTranslations('hero')
    const activeSection = useActiveSection()
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: t('about'), href: "#about", icon: User },
        { name: t('skills'), href: "#skills", icon: Code2 },
        { name: t('experience'), href: "#experience", icon: Briefcase },
        { name: t('projects'), href: "#projects", icon: FolderGit2 },
        { name: t('contact'), href: "#contact", icon: Mail },
    ]

    const isActive = (href: string) => {
        return `#${activeSection}` === href
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container flex h-16 items-center justify-between">
                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <div className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-all duration-200 hover:text-primary hover:scale-105 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all ${
                                    isActive(item.href)
                                        ? "text-primary after:w-full"
                                        : "text-foreground/60 after:w-0 hover:after:w-full"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    size="icon"
                    variant="outline"
                >
                    {isOpen ? (
                        <X className="size-5" />
                    ) : (
                        <Menu className="size-5" />
                    )}
                </Button>

                {/* Right side: CTA + Toggles */}
                <div className="flex items-center gap-2">
                    {/* CTA Desktop */}
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-colors"
                    >
                        <span className="inline-grid *:[grid-area:1/1]">
                            <span className="status status-success animate-ping"></span>
                            <span className="status status-success"></span>
                        </span>
                        {tHero('available')}
                    </Link>

                    <div className="flex items-center gap-1">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu className="flex flex-col justify-between" open={isOpen}>
                <div className="grid gap-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={handleLinkClick}
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "justify-start gap-3 h-12 text-base",
                                    isActive(item.href)
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-foreground/70"
                                )}
                            >
                                <Icon className="size-5" />
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                {/* CTA Mobile */}
                <div className="mt-auto pt-4">
                    <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                        <span className="inline-grid *:[grid-area:1/1]">
                            <span className="status status-success animate-ping"></span>
                            <span className="status status-success"></span>
                        </span>
                        {tHero('available')}
                    </Link>
                </div>
            </MobileMenu>
        </header>
    )
}
