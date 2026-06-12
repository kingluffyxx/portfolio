"use client"

import NextLink from "next/link"
import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/navigation"

export function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className="bg-card/50 backdrop-blur-sm py-8 md:py-12 border-t">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold text-foreground mb-3">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services/site-vitrine" className="hover:text-primary transition-colors">Site vitrine</Link></li>
                            <li><Link href="/services/boutique-en-ligne" className="hover:text-primary transition-colors">Boutique en ligne</Link></li>
                            <li><Link href="/services/audit-seo" className="hover:text-primary transition-colors">Audit SEO</Link></li>
                            <li><Link href="/services/refonte-site" className="hover:text-primary transition-colors">Refonte de site</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-3">Technologies</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services/developpement-nextjs" className="hover:text-primary transition-colors">Next.js / React</Link></li>
                            <li><Link href="/services/developpement-symfony" className="hover:text-primary transition-colors">Symfony</Link></li>
                            <li><Link href="/services/developpement-laravel" className="hover:text-primary transition-colors">Laravel</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-3">Réalisations</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/projets/flowsolo" className="hover:text-primary transition-colors">FlowSolo</Link></li>
                            <li><Link href="/projets/steamhunter" className="hover:text-primary transition-colors">SteamHunter</Link></li>
                            <li><Link href="/realisations" className="hover:text-primary transition-colors">Toutes les réalisations & maquettes</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-3">À propos &amp; blog</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><NextLink href="/blog" className="hover:text-primary transition-colors">Le blog</NextLink></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">Mon approche</Link></li>
                            <li><Link href="/parcours" className="hover:text-primary transition-colors">Parcours professionnel</Link></li>
                            <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-6 flex md:flex-row flex-col justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Xavier Adda · Freelance création de sites internet & SEO
                    </p>
                    <p className="text-muted-foreground text-xs">
                        {t('copyright')} <span className="font-medium">Next.js</span> {t('and')} <span className="font-medium">TailwindCSS</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
