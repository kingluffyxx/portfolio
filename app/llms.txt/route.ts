export const dynamic = "force-static"

export function GET() {
  const body = `# Xavier Adda · Création de sites internet & SEO

> Freelance web developer based in Paris (France), 7+ years of experience. Specialized in building professional websites, online stores, custom web apps, and SEO. Tech stack: Next.js, React, Symfony, Laravel. Quote within 48h, projects from €2,500.

## Services

- [Site vitrine professionnel](https://xavieradda.dev/services/site-vitrine): Professional showcase websites delivered in 2-3 weeks, technical SEO included
- [Boutique en ligne](https://xavieradda.dev/services/boutique-en-ligne): WooCommerce or custom e-commerce stores
- [Application sur-mesure](https://xavieradda.dev/services/application-sur-mesure): Custom web applications, MVP and SaaS
- [Intégration IA](https://xavieradda.dev/services/implementation-ia): Chatbot, smart search, AI features (OpenAI, Claude, Mistral)
- [Audit SEO](https://xavieradda.dev/services/audit-seo): 7-day technical SEO audit with action plan, from €350
- [Refonte de site](https://xavieradda.dev/services/refonte-site): Website redesign without losing SEO ranking
- [Maintenance et hébergement](https://xavieradda.dev/services/maintenance-hebergement): Monthly maintenance and hosting plans
- [Développement Symfony](https://xavieradda.dev/services/developpement-symfony): Symfony 6/7 development and modernization
- [Développement Laravel](https://xavieradda.dev/services/developpement-laravel): Laravel application development
- [Développement Next.js](https://xavieradda.dev/services/developpement-nextjs): Next.js App Router development

## Realised projects

- [FlowSolo](https://xavieradda.dev/projets/flowsolo): Productivity app for solopreneurs (Next.js + Prisma + Better Auth, live at flowsolo.app)
- [SteamHunter](https://xavieradda.dev/projets/steamhunter): Mobile app for tracking Steam achievements (React Native + Expo, on Google Play)

## Blog

- [Blog en sous-dossier ou sous-domaine](https://xavieradda.dev/blog/blog-sous-dossier-ou-sous-domaine): Which is best for SEO
- [WordPress ou Next.js](https://xavieradda.dev/blog/wordpress-ou-nextjs-site-vitrine): Comparison for business websites
- [Audit SEO en 7 vérifications](https://xavieradda.dev/blog/audit-seo-7-verifications-gratuites): Free checklist
- [Combien coûte un site internet en 2026](https://xavieradda.dev/blog/combien-coute-site-internet-2026): Price ranges by type
- [Core Web Vitals 2026](https://xavieradda.dev/blog/core-web-vitals-2026-checklist): Implementation checklist

## Career

- [Career path](https://xavieradda.dev/parcours): 7+ years in web development, ESN and startups, current freelance

## English version

All pages available in English under \`/en/\` prefix.

## Contact

- Email: xavier.adda@gmail.com
- LinkedIn: https://www.linkedin.com/in/xavier-adda/
- GitHub: https://github.com/kingluffyxx
`
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
