export type ServiceSlug =
  | "site-vitrine"
  | "boutique-en-ligne"
  | "application-sur-mesure"
  | "implementation-ia"
  | "audit-seo"
  | "refonte-site"
  | "maintenance-hebergement"
  | "developpement-symfony"
  | "developpement-laravel"
  | "developpement-nextjs"

export type ServiceSlugEn =
  | "website-design"
  | "online-store"
  | "custom-web-application"
  | "ai-integration"
  | "seo-audit"
  | "website-redesign"
  | "website-maintenance"
  | "symfony-development"
  | "laravel-development"
  | "nextjs-development"

export interface ServiceContent {
  h1: string
  metaTitle: string
  metaDescription: string
  tagline: string
  intro: string
  techName: string
  pricing: string
  audience: string[]
  deliverables: string[]
  process: { step: string; description: string }[]
  faqs: { q: string; a: string }[]
}

export interface ServiceData {
  slug: ServiceSlug
  slugEn: ServiceSlugEn
  related: ServiceSlug[]
  fr: ServiceContent
  en: ServiceContent
}

export const services: Record<ServiceSlug, ServiceData> = {
  "site-vitrine": {
    slug: "site-vitrine",
    slugEn: "website-design",
    related: ["boutique-en-ligne", "audit-seo", "refonte-site"],
    fr: {
      techName: "Site vitrine",
      h1: "Création de site vitrine professionnel ·Freelance",
      metaTitle: "Création de Site Vitrine Pro | Xavier Adda Freelance",
      metaDescription:
        "Création de site vitrine professionnel à partir de 2 500€. Design sur-mesure, SEO inclus, livré en 2-3 semaines. Freelance Île-de-France & Remote.",
      tagline:
        "Site vitrine professionnel livré en 2-3 semaines, SEO technique inclus.",
      intro:
        "5 à 10 pages, design sur-mesure adapté à votre identité de marque, SEO technique de base (metadata, sitemap, schema, Core Web Vitals), formulaire de contact relié à votre email. Vous repartez avec un site administrable et 1 mois de support.",
      pricing: "À partir de 2 500€",
      audience: [
        "Artisans, indépendants et professions libérales",
        "TPE et PME locales cherchant à développer leur visibilité",
        "Consultants et coachs ayant besoin d'un site crédible",
        "Restaurants, hôtels, salons et commerces locaux",
      ],
      deliverables: [
        "Design sur-mesure adapté à votre identité de marque",
        "5 à 10 pages optimisées (Accueil, Services, À propos, Contact...)",
        "SEO technique complet : metadata, sitemap, schema, Core Web Vitals",
        "Formulaire de contact relié à votre email",
        "Site responsive mobile, tablette et desktop",
        "Formation à l'administration (1h) ou interface no-code",
        "1 mois de support inclus",
      ],
      process: [
        { step: "Brief", description: "Visioconférence 1h pour cerner vos besoins, votre cible et vos objectifs." },
        { step: "Maquette", description: "Présentation d'une maquette interactive sous 5 jours. 2 allers-retours inclus." },
        { step: "Développement", description: "Intégration du site avec tous les contenus et fonctionnalités validés." },
        { step: "Mise en ligne", description: "Déploiement sur votre nom de domaine + déclaration Google Search Console." },
      ],
      faqs: [
        {
          q: "Combien de temps pour livrer un site vitrine ?",
          a: "Entre 2 et 3 semaines selon la complexité et la rapidité des allers-retours. Je peux accélérer en mode express si besoin urgent.",
        },
        {
          q: "Le nom de domaine et l'hébergement sont-ils inclus ?",
          a: "L'achat du nom de domaine et l'hébergement sont en sus (environ 100-150€/an). Je peux les gérer pour vous ou vous laisser autonome.",
        },
        {
          q: "Pourrai-je modifier mon site moi-même ?",
          a: "Oui, je propose deux options : un site WordPress que vous administrez, ou un site Next.js plus performant avec une interface no-code (Sanity, Payload).",
        },
        {
          q: "Le SEO est-il vraiment inclus ?",
          a: "Oui : SEO technique complet (vitesse, schema, sitemap, meta), structure de pages optimisée et conseils contenu. Pour du SEO offensif (backlinks, contenu mensuel), prévoir un accompagnement séparé.",
        },
      ],
    },
    en: {
      techName: "Showcase website",
      h1: "Professional showcase website design, freelance",
      metaTitle: "Professional Showcase Website Design | Xavier Adda",
      metaDescription:
        "Professional showcase website from €2,500. Custom design, SEO included, delivered in 2-3 weeks. Freelance developer, Paris area and remote.",
      tagline: "Professional showcase website delivered in 2-3 weeks, technical SEO included.",
      intro:
        "5 to 10 pages, custom design matched to your brand identity, baseline technical SEO (metadata, sitemap, schema, Core Web Vitals), contact form connected to your email. You leave with a site you can edit yourself and 1 month of support.",
      pricing: "From €2,500",
      audience: [
        "Craftsmen, freelancers and independent professionals",
        "Small businesses looking to grow their visibility",
        "Consultants and coaches who need a credible website",
        "Restaurants, hotels, salons and local shops",
      ],
      deliverables: [
        "Custom design matched to your brand identity",
        "5 to 10 optimized pages (Home, Services, About, Contact...)",
        "Full technical SEO: metadata, sitemap, schema, Core Web Vitals",
        "Contact form connected to your email",
        "Responsive on mobile, tablet and desktop",
        "Admin training (1h) or no-code editor",
        "1 month of support included",
      ],
      process: [
        { step: "Brief", description: "1h video call to map out your needs, audience and goals." },
        { step: "Mockup", description: "Interactive mockup delivered within 5 days. 2 rounds of revisions included." },
        { step: "Development", description: "Build the site with all approved content and features." },
        { step: "Launch", description: "Deploy to your domain and submit to Google Search Console." },
      ],
      faqs: [
        {
          q: "How long to deliver a showcase website?",
          a: "Between 2 and 3 weeks depending on scope and how fast we iterate. Express mode is possible if you have an urgent deadline.",
        },
        {
          q: "Are the domain name and hosting included?",
          a: "Domain and hosting are extra (around €100-150 per year). I can handle them for you or let you manage them.",
        },
        {
          q: "Will I be able to edit the site myself?",
          a: "Yes. Two options: a WordPress site you administer, or a faster Next.js site with a no-code editor (Sanity, Payload).",
        },
        {
          q: "Is SEO really included?",
          a: "Yes: full technical SEO (speed, schema, sitemap, meta), optimized page structure and content guidance. For active SEO work (backlinks, monthly content), plan a separate engagement.",
        },
      ],
    },
  },

  "boutique-en-ligne": {
    slug: "boutique-en-ligne",
    slugEn: "online-store",
    related: ["site-vitrine", "audit-seo", "maintenance-hebergement"],
    fr: {
      techName: "Boutique en ligne",
      h1: "Création de boutique en ligne ·WooCommerce & sur-mesure",
      metaTitle: "Création Boutique en Ligne E-commerce | Xavier Adda",
      metaDescription:
        "Création de boutique en ligne WooCommerce ou sur-mesure. Paiement Stripe, livraison, SEO produit. À partir de 5 000€. Freelance Île-de-France.",
      tagline: "Boutique en ligne WooCommerce ou Next.js, paiement Stripe, SEO produit.",
      intro:
        "WooCommerce pour démarrer rapidement avec un catalogue standard, ou Next.js + Stripe pour une marque premium ou un catalogue complexe. Paiement CB/Apple Pay/Google Pay, gestion stocks, livraison Mondial Relay/Colissimo, schema Product et Google Merchant Center.",
      pricing: "À partir de 5 000€",
      audience: [
        "Marques DTC lançant leur première boutique",
        "Artisans et créateurs voulant vendre en ligne",
        "Commerces locaux ouvrant un canal e-commerce",
        "Entreprises B2B avec catalogue de produits",
      ],
      deliverables: [
        "Boutique WooCommerce ou Next.js + Stripe selon vos besoins",
        "Fiches produits optimisées SEO (schema Product, images)",
        "Tunnel de paiement Stripe (CB, Apple Pay, Google Pay)",
        "Gestion stocks, taxes, livraison (Mondial Relay, Colissimo)",
        "Compte client, suivi commandes, factures PDF",
        "Sitemap produit, Google Merchant Center, Pixel Meta",
        "Formation administration (2h) + documentation",
      ],
      process: [
        { step: "Cadrage", description: "Analyse du catalogue, des besoins logistiques et fiscaux." },
        { step: "Setup", description: "Installation de la plateforme, design boutique et fiches type." },
        { step: "Catalogue", description: "Import des produits, configuration paiement et livraison." },
        { step: "Lancement", description: "Tests, formation, mise en ligne et SAV 1 mois." },
      ],
      faqs: [
        {
          q: "WooCommerce ou solution sur-mesure ?",
          a: "WooCommerce convient à 90% des projets avec un catalogue standard. Pour une marque premium, un catalogue complexe ou une volonté de différenciation forte, je recommande du sur-mesure (Next.js + Stripe).",
        },
        {
          q: "Quels sont les frais récurrents ?",
          a: "Hébergement (15-50€/mois), nom de domaine (15€/an), Stripe (1.4% + 0.25€ par transaction), et optionnellement la maintenance.",
        },
        {
          q: "Pouvez-vous migrer ma boutique existante ?",
          a: "Oui, je migre depuis Shopify, PrestaShop ou WooCommerce vers une nouvelle plateforme en préservant le SEO (redirections 301, structure URL).",
        },
      ],
    },
    en: {
      techName: "E-commerce store",
      h1: "Online store, WooCommerce and custom builds",
      metaTitle: "Online Store and E-commerce Development | Xavier Adda",
      metaDescription:
        "WooCommerce or custom online store. Stripe payments, shipping, product SEO. From €5,000. Freelance developer, Paris area and remote.",
      tagline: "Online store on WooCommerce or Next.js, Stripe payments, product SEO.",
      intro:
        "WooCommerce to launch fast with a standard catalog, or Next.js + Stripe for a premium brand or complex catalog. Card/Apple Pay/Google Pay checkout, stock management, shipping integrations (Mondial Relay/Colissimo), Product schema and Google Merchant Center.",
      pricing: "From €5,000",
      audience: [
        "DTC brands launching their first store",
        "Craftsmen and creators selling online",
        "Local shops opening an e-commerce channel",
        "B2B companies with a product catalog",
      ],
      deliverables: [
        "WooCommerce or Next.js + Stripe store depending on your needs",
        "SEO-optimized product pages (Product schema, images)",
        "Stripe checkout (card, Apple Pay, Google Pay)",
        "Stock, tax and shipping management (Mondial Relay, Colissimo)",
        "Customer account, order tracking, PDF invoices",
        "Product sitemap, Google Merchant Center, Meta Pixel",
        "Admin training (2h) and documentation",
      ],
      process: [
        { step: "Scoping", description: "Review of catalog, logistics and tax requirements." },
        { step: "Setup", description: "Install the platform, design the store and product templates." },
        { step: "Catalog", description: "Import products, configure payments and shipping." },
        { step: "Launch", description: "Tests, training, go-live and 1 month of post-launch support." },
      ],
      faqs: [
        {
          q: "WooCommerce or a custom build?",
          a: "WooCommerce fits 90% of projects with a standard catalog. For a premium brand, a complex catalog or strong differentiation, I recommend a custom build (Next.js + Stripe).",
        },
        {
          q: "What are the recurring costs?",
          a: "Hosting (€15-50/month), domain (€15/year), Stripe (1.4% + €0.25 per transaction), and optionally maintenance.",
        },
        {
          q: "Can you migrate my existing store?",
          a: "Yes. I migrate from Shopify, PrestaShop or WooCommerce to a new platform while preserving SEO (301 redirects, URL structure).",
        },
      ],
    },
  },

  "application-sur-mesure": {
    slug: "application-sur-mesure",
    slugEn: "custom-web-application",
    related: ["developpement-nextjs", "developpement-symfony", "developpement-laravel"],
    fr: {
      techName: "Application sur-mesure",
      h1: "Création d'application web sur-mesure ·Next.js & React",
      metaTitle: "Création Application Web Sur-Mesure | Xavier Adda Freelance",
      metaDescription:
        "Création d'applications web sur-mesure : SaaS, dashboards, MVP. Next.js, React, API. 7+ ans d'expérience. Freelance Île-de-France & Remote.",
      tagline:
        "Application web sur-mesure : SaaS, MVP, dashboard métier, plateforme.",
      intro:
        "Next.js + TypeScript en front, Symfony, Laravel ou Node pour l'API, PostgreSQL + Prisma. Authentification, paiements Stripe, jobs asynchrones, tests et CI/CD. Déploiement Vercel ou self-hosted Docker selon le besoin.",
      pricing: "À partir de 15 000€",
      audience: [
        "Fondateurs de startup lançant un MVP",
        "PME ayant besoin d'un outil métier interne",
        "SaaS B2B en phase de scale",
        "Entreprises modernisant un outil legacy",
      ],
      deliverables: [
        "Application Next.js 15 App Router + TypeScript strict",
        "Authentification (Better Auth, OAuth, magic link, SSO)",
        "Base de données PostgreSQL + Prisma ORM",
        "API REST ou GraphQL documentée",
        "Dashboard admin, gestion utilisateurs et permissions",
        "Intégrations (Stripe, Resend, S3, webhooks)",
        "Tests, CI/CD, monitoring et documentation",
      ],
      process: [
        { step: "Discovery", description: "2 ateliers pour cadrer le MVP et prioriser les features." },
        { step: "Sprint 0", description: "Setup technique, design system, CI/CD, premiers écrans." },
        { step: "Sprints", description: "Itérations 1-2 semaines avec démos régulières." },
        { step: "Launch", description: "Beta privée, ajustements, lancement public et accompagnement." },
      ],
      faqs: [
        {
          q: "Combien coûte un MVP ?",
          a: "Un MVP fonctionnel se situe entre 15 000 et 40 000€ selon le périmètre. Je propose un devis fixe après cadrage initial offert.",
        },
        {
          q: "Combien de temps pour un MVP ?",
          a: "Entre 6 et 12 semaines selon la complexité. Je travaille en sprints courts avec des démos régulières pour itérer rapidement.",
        },
        {
          q: "Êtes-vous disponible pour de la mission longue ?",
          a: "Oui, je peux m'engager sur 3 à 12 mois en tant que CTO fractionnel ou lead dev de votre produit.",
        },
      ],
    },
    en: {
      techName: "Custom application",
      h1: "Custom web application development, Next.js and React",
      metaTitle: "Custom Web Application Development | Xavier Adda",
      metaDescription:
        "Custom web applications: SaaS, dashboards, MVPs. Next.js, React, APIs. 7+ years of experience. Freelance, Paris area and remote.",
      tagline: "Custom web application: SaaS, MVP, internal dashboard, platform.",
      intro:
        "Next.js + TypeScript on the front, Symfony, Laravel or Node for the API, PostgreSQL + Prisma. Auth, Stripe payments, async jobs, tests and CI/CD. Deployed on Vercel or self-hosted Docker depending on your needs.",
      pricing: "From €15,000",
      audience: [
        "Startup founders launching an MVP",
        "SMBs needing an internal business tool",
        "B2B SaaS in scale-up phase",
        "Companies modernizing a legacy tool",
      ],
      deliverables: [
        "Next.js 15 App Router app with strict TypeScript",
        "Authentication (Better Auth, OAuth, magic link, SSO)",
        "PostgreSQL database with Prisma ORM",
        "Documented REST or GraphQL API",
        "Admin dashboard, user and permission management",
        "Integrations (Stripe, Resend, S3, webhooks)",
        "Tests, CI/CD, monitoring and documentation",
      ],
      process: [
        { step: "Discovery", description: "2 workshops to scope the MVP and prioritize features." },
        { step: "Sprint 0", description: "Tech setup, design system, CI/CD, first screens." },
        { step: "Sprints", description: "1-2 week iterations with regular demos." },
        { step: "Launch", description: "Private beta, adjustments, public launch and follow-up." },
      ],
      faqs: [
        {
          q: "How much does an MVP cost?",
          a: "A working MVP runs between €15,000 and €40,000 depending on scope. Fixed quote after a free initial scoping session.",
        },
        {
          q: "How long for an MVP?",
          a: "Between 6 and 12 weeks depending on complexity. Short sprints with regular demos so we can iterate fast.",
        },
        {
          q: "Are you available for long engagements?",
          a: "Yes. I can commit to 3-12 months as fractional CTO or lead developer on your product.",
        },
      ],
    },
  },

  "audit-seo": {
    slug: "audit-seo",
    slugEn: "seo-audit",
    related: ["refonte-site", "site-vitrine", "maintenance-hebergement"],
    fr: {
      techName: "Audit SEO",
      h1: "Audit SEO complet + plan d'action ·Freelance",
      metaTitle: "Audit SEO Freelance 350€ + Plan d'Action | Xavier Adda",
      metaDescription:
        "Audit SEO technique et stratégique de votre site à 350€. Core Web Vitals, schema, contenu, crawl. Plan d'action priorisé. Livré en 5 jours.",
      tagline:
        "Audit SEO technique et stratégique, plan d'action 90 jours, livré en 5 jours.",
      intro:
        "Crawl complet (Screaming Frog, PageSpeed, Search Console), audit technique (Core Web Vitals, schema, indexation), audit on-page (titles, descriptions, Hn, contenu) et analyse de 3-5 concurrents. Rapport PDF 40-60 pages et plan d'action priorisé impact × effort.",
      pricing: "350€ (forfait)",
      audience: [
        "Sites existants qui stagnent ou perdent du trafic",
        "Entreprises avant une refonte SEO",
        "Boutiques en ligne avec un catalogue mal indexé",
        "Sites locaux invisibles sur leur zone géographique",
      ],
      deliverables: [
        "Rapport d'audit PDF complet (40-60 pages)",
        "Analyse technique : Core Web Vitals, crawl, indexation",
        "Analyse on-page : titles, descriptions, hiérarchie, contenu",
        "Analyse schema markup et données structurées",
        "Analyse concurrence sur 3-5 concurrents",
        "Plan d'action priorisé sur 90 jours (impact × effort)",
        "Visioconférence 1h de restitution",
      ],
      process: [
        { step: "Brief", description: "Comprendre vos objectifs business et votre cible." },
        { step: "Crawl", description: "Analyse technique complète avec Screaming Frog, PageSpeed, Search Console." },
        { step: "Audit", description: "Rapport détaillé avec priorisation des actions." },
        { step: "Restitution", description: "Présentation, échange et remise du plan d'action." },
      ],
      faqs: [
        {
          q: "Pouvez-vous aussi implémenter les correctifs ?",
          a: "Oui, je propose un accompagnement à la mise en œuvre en sus (TJM 450€ ou forfait selon l'ampleur).",
        },
        {
          q: "L'audit couvre-t-il le SEO local ?",
          a: "Oui : Google Business Profile, schema LocalBusiness, citations NAP, et analyse de la SERP locale sur votre zone.",
        },
        {
          q: "Combien de temps pour voir des résultats SEO ?",
          a: "Les corrections techniques peuvent donner des gains en 2-4 semaines. Les gains de positionnement durables prennent 3-6 mois.",
        },
      ],
    },
    en: {
      techName: "SEO Audit",
      h1: "Full SEO audit and action plan, freelance",
      metaTitle: "Freelance SEO Audit €350 with Action Plan | Xavier Adda",
      metaDescription:
        "Technical and strategic SEO audit for €350. Core Web Vitals, schema, content, crawl. Prioritized action plan. Delivered in 5 days.",
      tagline: "Technical and strategic SEO audit, 90-day action plan, delivered in 5 days.",
      intro:
        "Full crawl (Screaming Frog, PageSpeed, Search Console), technical audit (Core Web Vitals, schema, indexing), on-page audit (titles, descriptions, headings, content) and analysis of 3-5 competitors. 40-60 page PDF report and action plan prioritized by impact and effort.",
      pricing: "€350 (flat fee)",
      audience: [
        "Existing sites that stagnate or lose traffic",
        "Companies preparing an SEO redesign",
        "Online stores with a poorly indexed catalog",
        "Local sites invisible in their area",
      ],
      deliverables: [
        "Complete PDF audit report (40-60 pages)",
        "Technical analysis: Core Web Vitals, crawl, indexing",
        "On-page analysis: titles, descriptions, hierarchy, content",
        "Schema markup and structured data analysis",
        "Competitive analysis on 3-5 competitors",
        "Prioritized 90-day action plan (impact x effort)",
        "1h video call to walk through the report",
      ],
      process: [
        { step: "Brief", description: "Understand your business goals and audience." },
        { step: "Crawl", description: "Full technical analysis with Screaming Frog, PageSpeed, Search Console." },
        { step: "Audit", description: "Detailed report with prioritized actions." },
        { step: "Review", description: "Walkthrough, Q&A and handover of the action plan." },
      ],
      faqs: [
        {
          q: "Can you also implement the fixes?",
          a: "Yes. I offer hands-on implementation as a separate engagement (€450/day or flat fee depending on scope).",
        },
        {
          q: "Does the audit cover local SEO?",
          a: "Yes: Google Business Profile, LocalBusiness schema, NAP citations, and local SERP analysis for your area.",
        },
        {
          q: "How long until I see SEO results?",
          a: "Technical fixes can show gains in 2-4 weeks. Sustained ranking improvements take 3-6 months.",
        },
      ],
    },
  },

  "refonte-site": {
    slug: "refonte-site",
    slugEn: "website-redesign",
    related: ["audit-seo", "site-vitrine", "boutique-en-ligne"],
    fr: {
      techName: "Refonte de site",
      h1: "Refonte de site internet ·design, performance & SEO",
      metaTitle: "Refonte Site Internet Freelance | Xavier Adda",
      metaDescription:
        "Refonte de site internet : nouveau design, performance, SEO préservé et amélioré. Migration sans perte de trafic. Freelance Île-de-France.",
      tagline:
        "Refonte de site avec préservation du SEO existant et amélioration des Core Web Vitals.",
      intro:
        "Cartographie du site existant (pages, contenus, trafic, positions Google), plan de migration avec mapping URL et redirections 301, refonte sur environnement de staging, bascule contrôlée et monitoring 30 jours.",
      pricing: "Sur devis (à partir de 4 000€)",
      audience: [
        "Sites WordPress / Drupal / Joomla vieillissants",
        "Sites lents (Core Web Vitals au rouge)",
        "Sites avec un fort trafic SEO à préserver",
        "E-commerce changeant de plateforme",
      ],
      deliverables: [
        "Audit du site existant (contenu, SEO, technique)",
        "Plan de migration avec mapping URL et redirections 301",
        "Nouveau design responsive et moderne",
        "Migration de tout le contenu sans perte",
        "Amélioration Core Web Vitals (cible 95+ Lighthouse)",
        "Monitoring post-migration (Search Console, GA4)",
        "Garantie : aucune perte de trafic SEO (sinon corrigée gratuitement)",
      ],
      process: [
        { step: "Audit", description: "Cartographie du site existant : pages, contenus, trafic, positions Google." },
        { step: "Plan", description: "Stratégie de migration avec mapping et plan de redirections." },
        { step: "Build", description: "Refonte sur environnement de staging, validation page par page." },
        { step: "Migration", description: "Bascule contrôlée, monitoring 30 jours et corrections." },
      ],
      faqs: [
        {
          q: "Allez-vous garder mon contenu existant ?",
          a: "Oui, je migre l'intégralité du contenu (textes, images, pages). On profite de la refonte pour améliorer ce qui peut l'être, mais rien n'est supprimé sans validation.",
        },
        {
          q: "Mes URLs vont-elles changer ?",
          a: "Idéalement non. Si elles doivent changer (mauvaise structure), je mets en place des redirections 301 pour préserver le SEO.",
        },
        {
          q: "Combien de temps pour une refonte ?",
          a: "4 à 8 semaines pour un site vitrine, 8 à 16 semaines pour un e-commerce ou une app.",
        },
      ],
    },
    en: {
      techName: "Website redesign",
      h1: "Website redesign, design, performance and SEO",
      metaTitle: "Freelance Website Redesign | Xavier Adda",
      metaDescription:
        "Website redesign: new design, performance, SEO preserved and improved. Migration without traffic loss. Freelance, Paris area and remote.",
      tagline: "Website redesign that preserves existing SEO and improves Core Web Vitals.",
      intro:
        "Mapping of the existing site (pages, content, traffic, Google rankings), migration plan with URL mapping and 301 redirects, rebuild on staging, controlled cutover and 30 days of monitoring.",
      pricing: "Custom quote (from €4,000)",
      audience: [
        "Aging WordPress / Drupal / Joomla sites",
        "Slow sites (Core Web Vitals in the red)",
        "Sites with significant SEO traffic to preserve",
        "E-commerce stores changing platform",
      ],
      deliverables: [
        "Audit of the existing site (content, SEO, technical)",
        "Migration plan with URL mapping and 301 redirects",
        "New responsive, modern design",
        "Full content migration with no loss",
        "Improved Core Web Vitals (target 95+ Lighthouse)",
        "Post-migration monitoring (Search Console, GA4)",
        "Guarantee: no SEO traffic loss (or fixed for free)",
      ],
      process: [
        { step: "Audit", description: "Map the existing site: pages, content, traffic, Google rankings." },
        { step: "Plan", description: "Migration strategy with mapping and redirect plan." },
        { step: "Build", description: "Rebuild on staging, page-by-page validation." },
        { step: "Migration", description: "Controlled cutover, 30 days of monitoring and fixes." },
      ],
      faqs: [
        {
          q: "Will you keep my existing content?",
          a: "Yes. I migrate all content (text, images, pages). We improve what can be improved, but nothing is deleted without your approval.",
        },
        {
          q: "Will my URLs change?",
          a: "Ideally no. If they have to change (bad structure), I set up 301 redirects to preserve SEO.",
        },
        {
          q: "How long for a redesign?",
          a: "4 to 8 weeks for a showcase site, 8 to 16 weeks for e-commerce or an app.",
        },
      ],
    },
  },

  "maintenance-hebergement": {
    slug: "maintenance-hebergement",
    slugEn: "website-maintenance",
    related: ["site-vitrine", "audit-seo", "refonte-site"],
    fr: {
      techName: "Maintenance & hébergement",
      h1: "Maintenance & hébergement de site internet",
      metaTitle: "Maintenance Site Internet & Hébergement | Xavier Adda",
      metaDescription:
        "Maintenance technique, mises à jour, sauvegardes, sécurité et hébergement performant pour votre site internet. À partir de 80€/mois.",
      tagline:
        "Hébergement performant, mises à jour, sauvegardes quotidiennes et monitoring 24/7.",
      intro:
        "Hébergement Vercel, OVH ou Hostinger selon le projet. Mises à jour mensuelles WordPress, thèmes et plugins. Sauvegardes quotidiennes externalisées, certificat SSL, monitoring uptime avec alertes, et support par email sous 24h.",
      pricing: "À partir de 80€/mois",
      audience: [
        "Tous les sites WordPress (très exposés aux failles)",
        "Sites e-commerce (interruption = perte de CA)",
        "Sites SEO-dépendants ne pouvant pas tomber",
        "Entreprises sans équipe technique interne",
      ],
      deliverables: [
        "Hébergement haute performance (Vercel, OVH, Hostinger)",
        "Mises à jour WordPress, thèmes, plugins (mensuelles)",
        "Sauvegardes quotidiennes externalisées",
        "Certificat SSL et renouvellement automatique",
        "Monitoring uptime 24/7 et alertes",
        "Support technique par email (réponse 24h)",
        "Rapport mensuel d'activité",
      ],
      process: [
        { step: "Onboarding", description: "Audit de l'existant, migration vers infra performante." },
        { step: "Setup", description: "Configuration monitoring, sauvegardes et alertes." },
        { step: "Maintenance", description: "Cycle mensuel de mises à jour et vérifications." },
        { step: "Reporting", description: "Rapport mensuel et point trimestriel d'optimisation." },
      ],
      faqs: [
        {
          q: "Que se passe-t-il si mon site plante ?",
          a: "Monitoring 24/7 m'alerte automatiquement. J'interviens sous 4h en heures ouvrées, 24h le weekend. Sauvegarde restorable en quelques minutes.",
        },
        {
          q: "Y a-t-il un engagement de durée ?",
          a: "Non, mensuel sans engagement. Vous pouvez arrêter à tout moment avec préavis d'un mois.",
        },
        {
          q: "Pouvez-vous reprendre mon site existant ?",
          a: "Oui, audit de l'existant offert, puis migration sur infra performante (avec ou sans changement de prestataire).",
        },
      ],
    },
    en: {
      techName: "Maintenance & Hosting",
      h1: "Website maintenance and hosting",
      metaTitle: "Website Maintenance and Hosting | Xavier Adda",
      metaDescription:
        "Technical maintenance, updates, backups, security and reliable hosting for your website. From €80/month.",
      tagline: "Reliable hosting, updates, daily backups and 24/7 monitoring.",
      intro:
        "Hosting on Vercel, OVH or Hostinger depending on the project. Monthly WordPress, theme and plugin updates. Daily off-site backups, SSL certificate, uptime monitoring with alerts, and email support within 24h.",
      pricing: "From €80/month",
      audience: [
        "All WordPress sites (highly exposed to vulnerabilities)",
        "E-commerce sites (downtime = lost revenue)",
        "SEO-dependent sites that cannot go down",
        "Companies without an internal tech team",
      ],
      deliverables: [
        "High-performance hosting (Vercel, OVH, Hostinger)",
        "Monthly WordPress, theme and plugin updates",
        "Daily off-site backups",
        "SSL certificate with auto-renewal",
        "24/7 uptime monitoring and alerts",
        "Email support (24h response)",
        "Monthly activity report",
      ],
      process: [
        { step: "Onboarding", description: "Audit of the existing setup, migration to reliable infrastructure." },
        { step: "Setup", description: "Configure monitoring, backups and alerts." },
        { step: "Maintenance", description: "Monthly cycle of updates and checks." },
        { step: "Reporting", description: "Monthly report and quarterly optimization review." },
      ],
      faqs: [
        {
          q: "What happens if my site goes down?",
          a: "24/7 monitoring alerts me automatically. I respond within 4h on business hours, 24h on weekends. Backups can be restored in minutes.",
        },
        {
          q: "Is there a minimum commitment?",
          a: "No, monthly with no commitment. You can cancel any time with one month notice.",
        },
        {
          q: "Can you take over my existing site?",
          a: "Yes. Free audit of the existing setup, then migration to reliable infrastructure (with or without changing provider).",
        },
      ],
    },
  },

  "developpement-symfony": {
    slug: "developpement-symfony",
    slugEn: "symfony-development",
    related: ["application-sur-mesure", "developpement-laravel", "developpement-nextjs"],
    fr: {
      techName: "Symfony",
      h1: "Développeur Symfony freelance ·Île-de-France & Remote",
      metaTitle: "Développeur Symfony Freelance | Xavier Adda",
      metaDescription:
        "Développeur Symfony freelance avec 7+ ans d'expérience. APIs, migrations Symfony 3→7, audit. Île-de-France & Remote. TJM 450€.",
      tagline: "APIs robustes, migrations de version et applications métier sur Symfony 5, 6 et 7.",
      intro:
        "Je conçois et maintiens des applications Symfony depuis 2017. APIs REST/GraphQL, migrations legacy (Symfony 3.4 → 6.4 en production) et applications métier. En mission longue ou en renfort ponctuel.",
      pricing: "TJM 450€",
      audience: [
        "Startups ayant besoin d'un backend solide",
        "ESN cherchant un renfort Symfony senior",
        "PME avec un monolithe legacy à moderniser",
      ],
      deliverables: [
        "APIs REST/GraphQL documentées (OpenAPI)",
        "Migrations de version Symfony progressives sans downtime",
        "Architecture hexagonale, DDD léger, tests PHPUnit",
        "Intégration CI/CD",
        "Documentation et passation",
      ],
      process: [
        { step: "Cadrage", description: "Atelier de découverte pour cerner le besoin et l'existant." },
        { step: "Architecture", description: "Proposition d'architecture et roadmap." },
        { step: "Développement", description: "Sprints courts avec démos régulières." },
        { step: "Mise en prod", description: "Déploiement, monitoring, documentation." },
      ],
      faqs: [
        { q: "Versions anciennes ?", a: "Oui, j'ai migré Symfony 3.4 → 6.4 en prod sur 4 ans sans interruption." },
        { q: "Disponibilité ?", a: "TJM ou forfait, temps plein/partiel, télétravail ou Île-de-France." },
        { q: "Intégration équipe ?", a: "Oui, je m'adapte à vos process (Scrum, Kanban) et outils." },
      ],
    },
    en: {
      techName: "Symfony development",
      h1: "Freelance Symfony developer, Paris area and remote",
      metaTitle: "Freelance Symfony Developer | Xavier Adda",
      metaDescription:
        "Freelance Symfony developer with 7+ years of experience. APIs, Symfony 3 to 7 migrations, audits. Paris area and remote. €450/day.",
      tagline: "Robust APIs, version migrations and business apps on Symfony 5, 6 and 7.",
      intro:
        "I have been designing and maintaining Symfony applications since 2017. REST/GraphQL APIs, legacy migrations (Symfony 3.4 to 6.4 in production) and business apps. Long-term engagements or short reinforcement.",
      pricing: "€450/day",
      audience: [
        "Startups needing a solid backend",
        "IT services firms looking for a senior Symfony developer",
        "SMBs with a legacy monolith to modernize",
      ],
      deliverables: [
        "Documented REST/GraphQL APIs (OpenAPI)",
        "Progressive Symfony version migrations with no downtime",
        "Hexagonal architecture, light DDD, PHPUnit tests",
        "CI/CD integration",
        "Documentation and handover",
      ],
      process: [
        { step: "Scoping", description: "Discovery workshop to map the need and existing code." },
        { step: "Architecture", description: "Architecture proposal and roadmap." },
        { step: "Development", description: "Short sprints with regular demos." },
        { step: "Production", description: "Deployment, monitoring, documentation." },
      ],
      faqs: [
        { q: "Older versions?", a: "Yes, I migrated Symfony 3.4 to 6.4 in production over 4 years with no downtime." },
        { q: "Availability?", a: "Day rate or flat fee, full-time or part-time, remote or Paris area." },
        { q: "Team integration?", a: "Yes, I adapt to your process (Scrum, Kanban) and tools." },
      ],
    },
  },

  "developpement-laravel": {
    slug: "developpement-laravel",
    slugEn: "laravel-development",
    related: ["application-sur-mesure", "developpement-symfony", "developpement-nextjs"],
    fr: {
      techName: "Laravel",
      h1: "Développeur Laravel freelance ·Île-de-France & Remote",
      metaTitle: "Développeur Laravel Freelance | Xavier Adda",
      metaDescription:
        "Développeur Laravel freelance pour SaaS, MVP et APIs. 7+ ans d'expérience PHP. Île-de-France et remote. TJM 450€.",
      tagline: "MVP rapides, SaaS scalables et APIs Laravel.",
      intro:
        "Laravel pour itérer vite sur un MVP ou consolider un SaaS en croissance : auth, abonnements Stripe, dashboards, jobs asynchrones, APIs.",
      pricing: "TJM 450€",
      audience: [
        "Fondateurs voulant lancer un MVP en quelques semaines",
        "SaaS B2B avec backend solide",
        "Agences cherchant un renfort Laravel senior",
      ],
      deliverables: [
        "MVP fonctionnel en 4-8 semaines",
        "Intégration Stripe / paiements / webhooks",
        "Queues, jobs et événements asynchrones",
        "Tests Pest / PHPUnit",
        "Déploiement Forge / Vapor / VPS",
      ],
      process: [
        { step: "Cadrage", description: "Définition du MVP et des user stories." },
        { step: "Sprint 0", description: "Setup projet, CI/CD, DB, auth." },
        { step: "Sprints", description: "Itérations 1-2 semaines avec démos." },
        { step: "Lancement", description: "Déploiement et suivi post-lancement." },
      ],
      faqs: [
        { q: "Coût MVP ?", a: "15-40k€ selon périmètre. Devis fixe après cadrage." },
        { q: "Hébergement ?", a: "Je gère Forge, Vapor ou VPS, avec maintenance optionnelle." },
      ],
    },
    en: {
      techName: "Laravel development",
      h1: "Freelance Laravel developer, Paris area and remote",
      metaTitle: "Freelance Laravel Developer | Xavier Adda",
      metaDescription:
        "Freelance Laravel developer for SaaS, MVP and APIs. 7+ years of PHP experience. Paris area and remote. €450/day.",
      tagline: "Fast MVPs, scalable SaaS and Laravel APIs.",
      intro:
        "Laravel to iterate fast on an MVP or consolidate a growing SaaS: auth, Stripe subscriptions, dashboards, async jobs, APIs.",
      pricing: "€450/day",
      audience: [
        "Founders looking to launch an MVP in weeks",
        "B2B SaaS with a solid backend",
        "Agencies looking for a senior Laravel developer",
      ],
      deliverables: [
        "Working MVP in 4-8 weeks",
        "Stripe / payments / webhooks integration",
        "Queues, jobs and async events",
        "Pest / PHPUnit tests",
        "Deployment on Forge / Vapor / VPS",
      ],
      process: [
        { step: "Scoping", description: "Define the MVP and user stories." },
        { step: "Sprint 0", description: "Project setup, CI/CD, DB, auth." },
        { step: "Sprints", description: "1-2 week iterations with demos." },
        { step: "Launch", description: "Deployment and post-launch follow-up." },
      ],
      faqs: [
        { q: "MVP cost?", a: "€15-40k depending on scope. Fixed quote after scoping." },
        { q: "Hosting?", a: "I handle Forge, Vapor or VPS, with optional maintenance." },
      ],
    },
  },

  "developpement-nextjs": {
    slug: "developpement-nextjs",
    slugEn: "nextjs-development",
    related: ["application-sur-mesure", "developpement-symfony", "developpement-laravel"],
    fr: {
      techName: "Next.js",
      h1: "Développeur Next.js freelance ·Île-de-France & Remote",
      metaTitle: "Développeur Next.js Freelance | Xavier Adda",
      metaDescription:
        "Développeur Next.js / React freelance. SSR, App Router, performance et SEO. 7+ ans d'expérience. Île-de-France & Remote.",
      tagline: "Applications React/Next.js performantes, App Router, SSR, SEO et Core Web Vitals.",
      intro:
        "Next.js (App Router) pour les SaaS, dashboards, landing pages SEO. Optimisation Core Web Vitals, SSG/SSR adapté, intégration APIs (Symfony, Laravel, headless CMS).",
      pricing: "TJM 450€",
      audience: [
        "Startups SaaS construites sur Next.js",
        "Marques cherchant un site marketing performant SEO",
        "Équipes WordPress migrant vers headless",
      ],
      deliverables: [
        "Next.js 15+ en App Router et TypeScript strict",
        "Score Lighthouse 95+ sur mobile",
        "SEO technique : sitemap, schema, metadata, hreflang",
        "Intégration shadcn/ui, TailwindCSS",
        "Déploiement Vercel ou self-hosted Docker",
      ],
      process: [
        { step: "Audit", description: "Analyse de l'existant ou maquette." },
        { step: "Setup", description: "Initialisation Next.js, design system, CI/CD." },
        { step: "Build", description: "Développement itératif avec previews Vercel." },
        { step: "Optim", description: "Core Web Vitals, SEO et accessibilité." },
      ],
      faqs: [
        { q: "Pourquoi Next.js ?", a: "SSR, SSG, routing, images, fonts, SEO et edge sans config." },
        { q: "Migration WordPress ?", a: "Oui, en headless (WP CMS + Next.js front) ou réécriture complète." },
      ],
    },
    en: {
      techName: "Next.js development",
      h1: "Freelance Next.js developer, Paris area and remote",
      metaTitle: "Freelance Next.js Developer | Xavier Adda",
      metaDescription:
        "Freelance Next.js / React developer. SSR, App Router, performance and SEO. 7+ years of experience. Paris area and remote.",
      tagline: "High-performance React/Next.js apps, App Router, SSR, SEO and Core Web Vitals.",
      intro:
        "Next.js (App Router) for SaaS, dashboards, SEO landing pages. Core Web Vitals optimization, fitting SSG/SSR strategy, API integration (Symfony, Laravel, headless CMS).",
      pricing: "€450/day",
      audience: [
        "SaaS startups built on Next.js",
        "Brands looking for a fast SEO-focused marketing site",
        "WordPress teams migrating to headless",
      ],
      deliverables: [
        "Next.js 15+ on App Router with strict TypeScript",
        "Lighthouse 95+ on mobile",
        "Technical SEO: sitemap, schema, metadata, hreflang",
        "shadcn/ui and Tailwind CSS integration",
        "Deployment on Vercel or self-hosted Docker",
      ],
      process: [
        { step: "Audit", description: "Review existing code or mockups." },
        { step: "Setup", description: "Next.js init, design system, CI/CD." },
        { step: "Build", description: "Iterative development with Vercel previews." },
        { step: "Optim", description: "Core Web Vitals, SEO and accessibility." },
      ],
      faqs: [
        { q: "Why Next.js?", a: "SSR, SSG, routing, images, fonts, SEO and edge without config." },
        { q: "WordPress migration?", a: "Yes, headless (WP CMS + Next.js front) or full rewrite." },
      ],
    },
  },
  "implementation-ia": {
    slug: "implementation-ia",
    slugEn: "ai-integration",
    related: ["application-sur-mesure", "site-vitrine", "boutique-en-ligne"],
    fr: {
      h1: "Intégration d'IA dans votre site ou application",
      metaTitle: "Intégration IA pour site web et application | Xavier Adda Freelance",
      metaDescription:
        "Intégration de fonctionnalités IA (ChatGPT, Claude, RAG, chatbot) dans votre site ou application. Cas d'usage concrets, coûts maîtrisés.",
      techName: "Intégration IA",
      tagline:
        "Chatbot, recherche intelligente, génération de contenu : j'intègre l'IA dans votre site ou app sans usine à gaz.",
      intro:
        "OpenAI, Anthropic, Mistral. Vous avez une idée précise (chatbot de support, recherche en langage naturel, génération de devis, résumé de documents) et vous voulez l'intégrer proprement à votre stack existante. Je m'occupe du choix du modèle, du prompt engineering, du contrôle des coûts et du déploiement.",
      pricing: "Sur devis",
      audience: [
        "TPE et PME voulant ajouter une fonctionnalité IA concrète",
        "Sites e-commerce cherchant à automatiser le support client",
        "Plateformes de contenu voulant améliorer la recherche",
        "Équipes marketing pour générer ou résumer du contenu à grande échelle",
      ],
      deliverables: [
        "Fonctionnalité IA intégrée à votre site ou application existante",
        "Choix du modèle adapté au cas d'usage (OpenAI, Claude, Mistral, open source)",
        "Prompt engineering et tests sur vos cas réels",
        "Monitoring des coûts (tokens consommés, alertes de dépassement)",
        "Garde-fous : modération, fallback humain, limite de débit",
        "Documentation technique et formation à la maintenance",
        "1 mois de support inclus",
      ],
      process: [
        {
          step: "Cadrage",
          description:
            "Cas d'usage précis, données disponibles, contraintes de budget. Sélection du modèle adapté.",
        },
        {
          step: "Prototype",
          description:
            "Version fonctionnelle sous 1 semaine, testée sur vos vrais contenus pour valider la qualité.",
        },
        {
          step: "Intégration",
          description:
            "Branchement à votre stack, monitoring des coûts, garde-fous pour la production.",
        },
        {
          step: "Mise en ligne",
          description:
            "Déploiement, formation de votre équipe et 1 mois de support technique inclus.",
        },
      ],
      faqs: [
        {
          q: "Quel modèle choisir entre OpenAI, Claude et Mistral ?",
          a: "Ça dépend du cas d'usage. Claude est très bon pour les longs textes et l'analyse, GPT-4o pour le multimodal, Mistral pour des coûts réduits et la souveraineté française. Je benchmark sur vos vrais cas avant de décider, pas sur des promesses marketing.",
        },
        {
          q: "Combien ça coûte par mois en API ?",
          a: "Très variable. Un chatbot de support avec 500 requêtes/jour tourne autour de 30 à 80€/mois sur Claude Haiku. Je dimensionne au plus juste et mets en place du caching pour réduire la facture.",
        },
        {
          q: "Mes données sont-elles utilisées pour entraîner les modèles ?",
          a: "Non. OpenAI et Anthropic ne s'entraînent pas sur les données API par défaut. Pour les données sensibles, on peut basculer sur du Mistral hébergé en France ou un modèle open source auto-hébergé.",
        },
        {
          q: "Un chatbot IA, ça remplace un humain ?",
          a: "Non. Il prend en charge 60 à 80% des questions répétitives. Pour le reste, il transfère poliment à un humain. C'est un assistant, pas un remplaçant.",
        },
      ],
    },
    en: {
      h1: "AI integration for your website or application",
      metaTitle: "AI Integration for Websites and Apps | Xavier Adda",
      metaDescription:
        "Integrating AI features (ChatGPT, Claude, RAG, chatbots) into your website or app. Concrete use cases, controlled costs.",
      techName: "AI Integration",
      tagline:
        "Chatbot, smart search, content generation. I integrate AI into your site or app without overengineering.",
      intro:
        "OpenAI, Anthropic, Mistral. You have a specific idea (support chatbot, natural language search, quote generation, document summarization) and you want it cleanly integrated into your existing stack. I handle model selection, prompt engineering, cost control and deployment.",
      pricing: "Quote on request",
      audience: [
        "Small businesses wanting to add a concrete AI feature",
        "E-commerce sites looking to automate customer support",
        "Content platforms wanting to improve search",
        "Marketing teams generating or summarizing content at scale",
      ],
      deliverables: [
        "AI feature integrated into your existing website or application",
        "Model selection matched to the use case (OpenAI, Claude, Mistral, open source)",
        "Prompt engineering and testing on your real cases",
        "Cost monitoring (token consumption, budget alerts)",
        "Safeguards: moderation, human fallback, rate limiting",
        "Technical documentation and maintenance training",
        "1 month of support included",
      ],
      process: [
        {
          step: "Scoping",
          description:
            "Specific use case, available data, budget constraints. Model selection.",
        },
        {
          step: "Prototype",
          description:
            "Working version within a week, tested on your real content to validate quality.",
        },
        {
          step: "Integration",
          description:
            "Wired into your stack, cost monitoring, safeguards for production.",
        },
        {
          step: "Launch",
          description:
            "Deployment, team training and 1 month of technical support included.",
        },
      ],
      faqs: [
        {
          q: "Which model: OpenAI, Claude or Mistral?",
          a: "It depends on the use case. Claude is strong for long texts and analysis, GPT-4o for multimodal, Mistral for lower costs and French data sovereignty. I benchmark on your real cases before deciding, not on marketing promises.",
        },
        {
          q: "How much does it cost per month in API fees?",
          a: "Highly variable. A support chatbot with 500 requests per day runs around €30 to €80 per month on Claude Haiku. I size it precisely and add caching to reduce the bill.",
        },
        {
          q: "Will my data be used to train the models?",
          a: "No. OpenAI and Anthropic do not train on API data by default. For sensitive data, we can switch to Mistral hosted in France or a self-hosted open source model.",
        },
        {
          q: "Does an AI chatbot replace a human?",
          a: "No. It handles 60 to 80% of repetitive questions. For the rest, it politely hands off to a human. It is an assistant, not a replacement.",
        },
      ],
    },
  },
}

export const serviceSlugs = Object.keys(services) as ServiceSlug[]
export const serviceSlugsEn = (Object.values(services) as ServiceData[]).map(
  (s) => s.slugEn,
)

// Services mis en avant sur la home (ordre)
export const featuredServices: ServiceSlug[] = [
  "site-vitrine",
  "boutique-en-ligne",
  "application-sur-mesure",
  "implementation-ia",
  "audit-seo",
  "refonte-site",
  "maintenance-hebergement",
]

export function getServiceByLocaleSlug(
  slug: string,
  locale: "fr" | "en",
): ServiceData | undefined {
  return Object.values(services).find((s) =>
    locale === "fr" ? s.slug === slug : s.slugEn === slug,
  )
}

export function getLocalizedSlugs(locale: "fr" | "en"): string[] {
  return Object.values(services).map((s) => (locale === "fr" ? s.slug : s.slugEn))
}
