"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Briefcase, Code2, FolderGit2, Mail } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"

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

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    {/* Logo initiales XA */}
                    <Link href="/" className="mr-8 flex items-center space-x-3 group">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-sm shadow-md group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300 group-hover:scale-105">
                            XA
                        </div>
                        <span className="hidden font-semibold lg:inline-block text-foreground group-hover:text-primary transition-colors">
                            Xavier Adda
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all ${
                                    isActive(item.href)
                                        ? "text-primary after:w-full"
                                        : "text-foreground/60 after:w-0 hover:after:w-full"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-72">
                        <nav className="flex flex-col gap-4">
                            {/* Logo mobile */}
                            <Link href="/" className="flex items-center space-x-3 mb-4" onClick={handleLinkClick}>
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold shadow-md">
                                    XA
                                </div>
                                <span className="font-semibold text-foreground">Xavier Adda</span>
                            </Link>

                            {/* Nav items avec icônes */}
                            {navItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-muted ${
                                            isActive(item.href)
                                                ? "bg-primary/10 text-primary font-semibold"
                                                : "text-foreground/70 hover:text-foreground"
                                        }`}
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {item.name}
                                    </Link>
                                )
                            })}

                            {/* CTA mobile */}
                            <Link
                                href="#contact"
                                onClick={handleLinkClick}
                                className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                            >
                                <span className="inline-grid *:[grid-area:1/1]">
                                    <span className="status status-success animate-ping"></span>
                                    <span className="status status-success"></span>
                                </span>
                                {tHero('available')}
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo mobile (visible quand menu fermé) */}
                <Link href="/" className="flex items-center space-x-2 md:hidden">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-xs shadow-md">
                        XA
                    </div>
                </Link>

                <div className="flex flex-1 items-center justify-end space-x-2">
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
            </div>
        </header>
    )
}
