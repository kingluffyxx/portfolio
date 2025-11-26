"use client"

import { useTranslations } from 'next-intl'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Server, Layout, Database, Cloud, Wrench } from "lucide-react"
import Image from "next/image"

type Skill = {
    name: string
    icon: string
    colorClass?: string
}

type SkillCategory = {
    key: string
    icon: React.ElementType
    gradient: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        key: "backend",
        icon: Server,
        gradient: "from-violet-500 to-purple-600",
        skills: [
            { name: "PHP 8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
            { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { name: "API REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        ]
    },
    {
        key: "frontend",
        icon: Layout,
        gradient: "from-cyan-500 to-blue-600",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        ]
    },
    {
        key: "languages",
        icon: Code2,
        gradient: "from-amber-500 to-orange-600",
        skills: [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        ]
    },
    {
        key: "databases",
        icon: Database,
        gradient: "from-emerald-500 to-green-600",
        skills: [
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        ]
    },
    {
        key: "devops",
        icon: Cloud,
        gradient: "from-rose-500 to-pink-600",
        skills: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        ]
    },
    {
        key: "cmsTools",
        icon: Wrench,
        gradient: "from-slate-500 to-gray-600",
        skills: [
            { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
            { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg", colorClass: "shopify-green" },
            { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        ]
    },
]

export function Skills() {
    const t = useTranslations('skills')
    const { elementRef, isVisible } = useScrollAnimation()

    return (
        <section id="skills" className="py-12 md:py-24 lg:py-32 container" ref={elementRef as any}>
            <div className="mx-auto max-w-6xl">
                {/* En-tête */}
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}>
                        {t('title')}
                    </h2>
                    <p className={`mt-4 text-lg text-foreground scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Grille de compétences */}
                <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => {
                        const IconComponent = category.icon
                        return (
                            <div
                                key={category.key}
                                className={`group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 scroll-animate-scale ${isVisible ? 'scroll-animate-scale-visible' : ''}`}
                                style={{ transitionDelay: `${0.1 + categoryIndex * 0.1}s` }}
                            >
                                {/* En-tête de catégorie */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{t(category.key)}</h3>
                                </div>

                                {/* Grille de skills */}
                                <div className="gap-3 grid grid-cols-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skill.name}
                                            className="group/skill flex items-center gap-3 bg-muted/50 hover:bg-muted p-3 rounded-xl hover:scale-105 transition-all duration-200"
                                            style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                                        >
                                            <div className="relative w-8 h-8 shrink-0">
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    fill
                                                    className={`object-contain group-hover/skill:scale-110 transition-transform duration-200 ${skill.colorClass || ''}`}
                                                />
                                            </div>
                                            <span className="font-medium text-sm truncate">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
