export type ProjectSlug = "flowsolo" | "steamhunter" | "artedas" | "ilearnromanian"
export type Locale = "fr" | "en"

/** Locale-sensitive prose for a project */
export interface ProjectContent {
  title: string
  tagline: string
  description: string
  longDescription: string
  context: string
  highlights: string[]
  results: string[]
  statusLabel: string
  testimonial?: { quote: string; author?: string; role?: string; authorUrl?: string }
}

export interface ProjectData {
  slug: ProjectSlug
  /** Locale-neutral */
  image: string
  tags: string[]
  stack: { category: string; items: string[] }[]
  links: { live?: string; code?: string; android?: string; ios?: string }
  status: "live" | "development"
  datePublished: string
  fr: ProjectContent
  en: ProjectContent
}

export function getLocalizedProject(p: ProjectData, locale: Locale): ProjectContent {
  return locale === "en" ? p.en : p.fr
}

export const projects: Record<ProjectSlug, ProjectData> = {
  flowsolo: {
    slug: "flowsolo",
    image: "/images/projects/flowsolo.jpg",
    tags: ["Next.js 15", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma", "Better Auth"],
    stack: [
      { category: "Frontend", items: ["Next.js 15", "TypeScript", "TailwindCSS", "shadcn/ui"] },
      { category: "Backend", items: ["Next.js API Routes", "Prisma ORM", "PostgreSQL"] },
      { category: "Auth", items: ["Better Auth"] },
      { category: "Infra", items: ["Vercel", "Neon"] },
    ],
    links: { live: "https://flowsolo.app" },
    status: "live",
    datePublished: "2026-01-15",
    fr: {
      title: "FlowSolo : application de productivité pour solopreneurs",
      tagline:
        "Plateforme PARA/Second Brain : tâches, objectifs, time-tracking et analytiques unifiés.",
      description:
        "FlowSolo centralise l'organisation professionnelle des solopreneurs avec la méthodologie PARA et le concept de Second Brain.",
      longDescription:
        "FlowSolo est une application de productivité complète conçue spécifiquement pour les solopreneurs et entrepreneurs indépendants. Basée sur la méthodologie PARA (Projects, Areas, Resources, Archives) de Tiago Forte et le concept de Second Brain, elle centralise toute votre organisation professionnelle en un seul espace de travail. L'application intègre une gestion avancée de tâches avec tableaux Kanban personnalisables, un système de suivi d'objectifs avec visualisation de progression, un timer Pomodoro intégré et des analytiques de productivité pour comprendre et optimiser votre efficacité.",
      context:
        "Produit personnel construit en solo, du design à la mise en production. Objectif : valider la méthodologie Second Brain appliquée aux solopreneurs.",
      highlights: [
        "Tableaux Kanban et vues multiples",
        "Timer Pomodoro et suivi du temps",
        "Suivi d'objectifs avec progression visuelle",
        "Analytiques de productivité",
        "MCP server connectable à Claude / ChatGPT",
      ],
      results: [
        "Application 100% fonctionnelle déployée sur Vercel",
        "Architecture scalable supportant la croissance utilisateur",
        "Integration MCP pour exposer la productivité aux assistants IA",
      ],
      statusLabel: "En ligne",
    },
    en: {
      title: "FlowSolo: productivity app for solopreneurs",
      tagline:
        "PARA/Second Brain platform: tasks, goals, time tracking and analytics in one place.",
      description:
        "FlowSolo centralizes work organization for solopreneurs with the PARA method and the Second Brain concept.",
      longDescription:
        "FlowSolo is a complete productivity app built for solopreneurs and independent founders. Based on Tiago Forte's PARA method (Projects, Areas, Resources, Archives) and the Second Brain concept, it brings your work organization into a single workspace. It includes advanced task management with customizable Kanban boards, goal tracking with progress visualization, a built-in Pomodoro timer and productivity analytics to understand and improve your efficiency.",
      context:
        "Personal product built solo, from design to production. Goal: validate the Second Brain method applied to solopreneurs.",
      highlights: [
        "Kanban boards and multiple views",
        "Pomodoro timer and time tracking",
        "Goal tracking with visual progress",
        "Productivity analytics",
        "MCP server connectable to Claude / ChatGPT",
      ],
      results: [
        "Fully functional app deployed on Vercel",
        "Scalable architecture ready for user growth",
        "MCP integration to expose productivity data to AI assistants",
      ],
      statusLabel: "Live",
    },
  },
  steamhunter: {
    slug: "steamhunter",
    image: "/images/projects/steamhunter.webp",
    tags: ["React Native", "Expo", "TypeScript", "Steam API", "EAS"],
    stack: [
      { category: "Mobile", items: ["React Native", "Expo SDK", "TypeScript"] },
      { category: "API", items: ["Steam Web API"] },
      { category: "Build", items: ["EAS Build", "EAS Submit"] },
    ],
    links: {
      live: "https://steamhunter.app",
      android:
        "https://play.google.com/store/apps/details?id=com.kingluffyxx.steamhunter",
    },
    status: "live",
    datePublished: "2026-03-01",
    fr: {
      title: "SteamHunter : application mobile de suivi des succès Steam",
      tagline:
        "Suivi de progression, statistiques avancées et compétition entre amis pour les joueurs Steam.",
      description:
        "Application mobile React Native pour suivre, comparer et défier ses amis sur les succès Steam.",
      longDescription:
        "SteamHunter est une application mobile complète pour les joueurs Steam. Développée avec React Native et Expo, elle permet de suivre sa progression de succès avec un système de rareté, comparer ses stats avec ses amis, surveiller les jeux et leurs succès complétés, et participer à des challenges communautaires.",
      context:
        "Projet produit pour prendre en main la stack mobile (React Native + Expo) et explorer la monétisation via store.",
      highlights: [
        "Suivi temps réel des succès Steam",
        "Système de rareté et de progression",
        "Comparaison avec les amis",
        "Notifications push",
        "Disponible sur Google Play",
      ],
      results: [
        "Publié sur Google Play Store",
        "Pipeline CI/CD EAS pour déploiements OTA",
        "Architecture offline-first",
      ],
      statusLabel: "En ligne",
    },
    en: {
      title: "SteamHunter: mobile app for tracking Steam achievements",
      tagline:
        "Progress tracking, deep stats and friendly competition for Steam players.",
      description:
        "React Native mobile app to track, compare and challenge friends on Steam achievements.",
      longDescription:
        "SteamHunter is a full-featured mobile app for Steam players. Built with React Native and Expo, it tracks achievement progress with a rarity system, compares stats with friends, monitors games and completed achievements, and supports community challenges.",
      context:
        "Product project to get hands-on with the mobile stack (React Native + Expo) and explore store monetization.",
      highlights: [
        "Real-time Steam achievement tracking",
        "Rarity and progression system",
        "Friend comparison",
        "Push notifications",
        "Available on Google Play",
      ],
      results: [
        "Published on Google Play Store",
        "EAS CI/CD pipeline for OTA deployments",
        "Offline-first architecture",
      ],
      statusLabel: "Live",
    },
  },
  artedas: {
    slug: "artedas",
    image: "/images/projects/artedas.jpg",
    tags: ["Laravel", "Blade", "TailwindCSS", "Vite", "SEO"],
    stack: [
      { category: "Backend", items: ["Laravel", "PHP"] },
      { category: "Frontend", items: ["Blade", "TailwindCSS", "Vite"] },
      { category: "Prestation", items: ["Refonte", "Intégration", "SEO"] },
    ],
    links: { live: "https://www.artedas.fr" },
    status: "live",
    datePublished: "2026-06-15",
    fr: {
      title: "Artedas : migration d'un framework PHP maison vers Laravel",
      tagline:
        "Migration d'un site de 10 ans bâti sur un framework PHP maison vers Laravel et refonte du front à partir de la maquette client.",
      description:
        "Reprise complète du site d'Artedas France, partenaire exclusif de Cadence : migration du back d'un framework PHP maison vers Laravel et refonte du front sur maquette fournie.",
      longDescription:
        "Artedas France est, depuis plus de 25 ans, le partenaire exclusif de Cadence en France, leader mondial des outils de conception de circuits imprimés (CAO électronique). Le site existant, en production depuis plus de 10 ans, reposait sur un framework PHP maison de l'époque PHP 4, devenu difficile à maintenir et à faire évoluer. Mission freelance : migrer l'ensemble des fonctionnalités back vers Laravel (catalogue solutions et produits, espace client premium avec gestion des licences, téléchargements, mises à jour et tickets de support, formulaires commerciaux et prise de rendez-vous) et refondre entièrement le front à partir d'une maquette fournie par le client, intégrée en Blade + TailwindCSS avec un build Vite.",
      context:
        "Prestation client en freelance : reprise d'un site legacy bâti sur un framework PHP maison (10+ ans), réécriture du back sur Laravel et intégration pixel-perfect du front depuis la maquette du client.",
      highlights: [
        "Migration d'un framework PHP maison vers Laravel",
        "Intégration front sur maquette client (Blade + Tailwind)",
        "Catalogue solutions et produits structuré",
        "Espace client premium (licences, téléchargements, MAJ)",
        "Plateforme de tickets de support",
        "Formulaires commerciaux et prise de rendez-vous",
      ],
      results: [
        "Framework PHP maison legacy remplacé par une base Laravel maintenable",
        "Front refondu conforme à la maquette client",
        "Site en production sur artedas.fr",
      ],
      statusLabel: "En ligne",
      testimonial: {
        quote:
          "J'ai eu l'occasion de travailler avec Xavier dans le cadre du développement de la nouvelle version du site web de notre entreprise.\n\nXavier a pris en charge la mise en place du projet avec beaucoup de professionnalisme. Il a développé rapidement les différentes pages tout en assurant une excellente qualité d'exécution, aussi bien sur la gestion du responsive que de l'intégration avec notre base de données.\n\nIl a également porté une attention particulière aux performances du site, notamment en optimisant les images et le chargement des pages, ce qui a permis d'obtenir un résultat fluide et efficace.\n\nAu-delà de ses compétences techniques, j'ai particulièrement apprécié sa capacité à transmettre ses connaissances. Lors de la livraison du projet, il a pris le temps de m'expliquer en détail l'architecture du projet, ainsi que les différentes commandes et bonnes pratiques permettant d'optimiser son déploiement et son fonctionnement.\n\nXavier est un développeur sérieux, réactif et compétent, avec une excellente maîtrise et un véritable souci de la qualité. Je le recommande sans hésitation à toute entreprise recherchant un développeur freelance fiable et efficace.",
        author: "Aurélien Jouanisson",
        role: "Ingénieur DevOps, Artedas France",
        authorUrl: "https://www.linkedin.com/in/aur%C3%A9lien-jouanisson-5729b5a8/",
      },
    },
    en: {
      title: "Artedas: migrating a custom PHP framework to Laravel",
      tagline:
        "Migrated a 10-year-old site built on a custom PHP framework to Laravel and rebuilt the front-end from the client's mockup.",
      description:
        "Full rebuild of the Artedas France website, Cadence's exclusive partner: custom PHP framework back-end migrated to Laravel and front-end redesigned from a provided mockup.",
      longDescription:
        "For over 25 years, Artedas France has been the exclusive partner of Cadence in France, the world leader in PCB design tools (EDA). The existing website, in production for more than 10 years, ran on a custom in-house PHP framework from the PHP 4 era that had become hard to maintain and evolve. Freelance mission: migrate all back-end features to Laravel (solutions and products catalog, premium client area with license management, downloads, updates and support tickets, sales forms and booking) and fully rebuild the front-end from a client-provided mockup, integrated with Blade + TailwindCSS and a Vite build.",
      context:
        "Freelance client work: taking over a legacy site built on a custom PHP framework (10+ years), rewriting the back-end on Laravel and pixel-perfect integration of the front-end from the client's mockup.",
      highlights: [
        "Custom PHP framework migrated to Laravel",
        "Front-end built from client mockup (Blade + Tailwind)",
        "Structured solutions and products catalog",
        "Premium client area (licenses, downloads, updates)",
        "Support ticketing platform",
        "Sales forms and booking",
      ],
      results: [
        "Legacy custom PHP framework replaced by a maintainable Laravel base",
        "Front-end rebuilt to match the client mockup",
        "Live in production on artedas.fr",
      ],
      statusLabel: "Live",
      testimonial: {
        quote:
          "I had the opportunity to work with Xavier on the development of the new version of our company website.\n\nXavier handled the project setup with great professionalism. He quickly built the different pages while ensuring excellent execution quality, both in responsive handling and in the integration with our database.\n\nHe also paid particular attention to the site's performance, notably by optimizing images and page loading, which delivered a smooth and efficient result.\n\nBeyond his technical skills, I especially appreciated his ability to share his knowledge. On delivery, he took the time to explain the project architecture in detail, along with the various commands and best practices to optimize its deployment and operation.\n\nXavier is a serious, responsive and skilled developer, with excellent mastery and a genuine concern for quality. I recommend him without hesitation to any company looking for a reliable and efficient freelance developer.",
        author: "Aurélien Jouanisson",
        role: "DevOps Engineer, Artedas France",
        authorUrl: "https://www.linkedin.com/in/aur%C3%A9lien-jouanisson-5729b5a8/",
      },
    },
  },

  ilearnromanian: {
    slug: "ilearnromanian",
    image: "/images/projects/ilearnromanian.jpg",
    tags: ["WordPress", "Elementor", "WooCommerce", "SEO", "Design"],
    stack: [
      { category: "CMS", items: ["WordPress", "Elementor"] },
      { category: "E-commerce", items: ["WooCommerce"] },
      { category: "SEO", items: ["Schema.org", "Open Graph", "Métadonnées"] },
      { category: "Infra", items: ["Hostinger"] },
    ],
    links: { live: "https://ilearnromanian.com" },
    status: "live",
    datePublished: "2026-05-01",
    fr: {
      title: "I Learn Romanian : refonte et SEO d'une plateforme de cours de roumain",
      tagline:
        "Refonte graphique et optimisation SEO d'une plateforme de cours de roumain en ligne (240+ étudiants, 42 pays).",
      description:
        "Refonte complète d'un site WordPress pour une tutrice de roumain certifiée : nouveau design, SEO, migration d'hébergement et réservation de cours en ligne.",
      longDescription:
        "I Learn Romanian est la plateforme d'une tutrice de roumain certifiée qui enseigne à plus de 240 étudiants répartis dans 42 pays. Le site WordPress existant avait besoin d'une refonte complète : nouvelle identité visuelle aux couleurs du drapeau roumain, optimisation SEO technique, migration d'hébergement et mise en place d'un système de réservation de cours en ligne. Mission freelance couvrant le design et l'intégration sous WordPress / Elementor, l'intégration WooCommerce pour la réservation et le paiement des cours, l'optimisation SEO (Schema.org, Open Graph, métadonnées) et la migration de l'hébergement de DreamHost vers Hostinger pour de meilleures performances.",
      context:
        "Prestation freelance récurrente : refonte d'un site WordPress existant, nouvelle identité visuelle, optimisation SEO, migration d'hébergement et mise en place de la réservation de cours en ligne. Collaboration toujours en cours.",
      highlights: [
        "Refonte graphique avec identité visuelle aux couleurs du drapeau roumain",
        "Optimisation SEO : Schema.org, Open Graph, métadonnées",
        "Migration d'hébergement DreamHost → Hostinger",
        "Intégration WooCommerce et système de réservation de cours",
      ],
      results: [
        "Nouveau design en ligne, cohérent avec l'identité de la marque",
        "Réservation et paiement des cours opérationnels",
        "Hébergement migré vers Hostinger, site plus rapide",
        "Site en production sur ilearnromanian.com",
      ],
      statusLabel: "En ligne",
      testimonial: {
        quote:
          "Travailler avec Xavier a été une expérience formidable ! Non seulement il est professionnel et a fait un travail remarquable sur mon site, mais il est aussi très réactif et résout les problèmes très rapidement, garantissant une expérience fluide sur ma plateforme, pour moi comme pour mes clients. Il a résolu chaque problème et chaque demande que j'ai eus, a communiqué de façon excellente et s'est assuré que tout soit livré à la hauteur de mes exigences. Je collabore toujours avec lui et je continuerai, parce qu'il est le meilleur ! Je le recommande de tout cœur à quiconque cherche une personne professionnelle, créative, excellente en communication et fiable. Merci pour tout ton travail formidable, Xav !",
        author: "Sefora Geantă",
        role: "Fondatrice & tutrice, I Learn Romanian",
        authorUrl: "https://www.linkedin.com/in/sefora-geant%C4%83/",
      },
    },
    en: {
      title: "I Learn Romanian: redesign and SEO of an online Romanian courses platform",
      tagline:
        "Visual redesign and SEO optimization of an online Romanian courses platform (240+ students, 42 countries).",
      description:
        "Full redesign of a WordPress site for a certified Romanian tutor: new design, SEO, hosting migration and online lesson booking.",
      longDescription:
        "I Learn Romanian is the platform of a certified Romanian tutor teaching more than 240 students across 42 countries. The existing WordPress site needed a full overhaul: a new visual identity in the colors of the Romanian flag, technical SEO optimization, a hosting migration and an online lesson booking system. Freelance mission covering design and integration on WordPress / Elementor, WooCommerce integration for booking and paying for lessons, SEO optimization (Schema.org, Open Graph, metadata) and migrating hosting from DreamHost to Hostinger for better performance.",
      context:
        "Ongoing freelance work: redesign of an existing WordPress site, new visual identity, SEO optimization, hosting migration and online lesson booking. Collaboration still active.",
      highlights: [
        "Visual redesign with an identity in the colors of the Romanian flag",
        "SEO optimization: Schema.org, Open Graph, metadata",
        "Hosting migration DreamHost → Hostinger",
        "WooCommerce integration and lesson booking system",
      ],
      results: [
        "New design live, consistent with the brand identity",
        "Lesson booking and payment fully operational",
        "Hosting migrated to Hostinger, faster site",
        "Live in production on ilearnromanian.com",
      ],
      statusLabel: "Live",
      testimonial: {
        quote:
          "Working with Xavier has been an amazing experience! Not only he is professional and did an amazing job with my website, but he is also very responsive and troubleshoots the issues very quickly ensuring both me and my clients have a smooth experience on my platform. He has solved every single problem or request I had, communicated extremely well, and made sure everything was completed up to my standards. I am still collaborating with him and I will continue to do so because he is the best! I wholeheartedly recommend him to anyone who needs someone professional, creative, great at communication and reliable. Thank you for all your amazing work Xav!",
        author: "Sefora Geantă",
        role: "Founder & tutor, I Learn Romanian",
        authorUrl: "https://www.linkedin.com/in/sefora-geant%C4%83/",
      },
    },
  },
}

export const projectSlugs = Object.keys(projects) as ProjectSlug[]
