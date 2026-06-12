export type ProjectSlug = "flowsolo" | "steamhunter"
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
}

export const projectSlugs = Object.keys(projects) as ProjectSlug[]
