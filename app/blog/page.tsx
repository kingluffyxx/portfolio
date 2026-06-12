import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogPosts, blogCategories } from "@/lib/blog-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export const metadata: Metadata = {
  title: "Blog · Création de sites internet & SEO",
  description:
    "Articles techniques sur la création de sites web, le SEO, la performance et les choix d'architecture. Sans bullshit, sans jargon marketing.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Blog · Xavier Adda",
    description:
      "Articles techniques création de sites web, SEO, performance, architecture.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const [featured, ...rest] = sortedPosts

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Xavier Adda",
    url: `${siteUrl}/blog`,
    description: "Articles techniques sur la création de sites web et le SEO.",
    author: { "@id": `${siteUrl}/#person` },
    blogPost: sortedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.date,
      description: p.excerpt,
    })),
  }

  return (
    <article className="container py-16 md:py-24 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-4">
          ● Le blog
        </p>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter mb-6">
          Création de sites,
          <br />
          <span className="bg-clip-text bg-linear-to-r from-primary to-accent text-transparent">
            SEO & performance.
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Notes techniques et retours d'expérience. Sans bullshit, sans jargon
          marketing. {blogPosts.length} articles publiés.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-8">
          {blogCategories.map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="px-3 py-1.5 text-xs uppercase tracking-wider"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </header>

      {/* Featured article (latest) */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group block mb-16 p-6 md:p-10 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
      >
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
          {featured.coverIsEmoji ? (
            <div className="md:col-span-3 flex justify-center">
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-linear-to-br from-primary/10 to-accent/5 flex items-center justify-center text-7xl md:text-8xl border border-primary/15 group-hover:scale-105 transition-transform duration-500"
                aria-hidden
              >
                {featured.cover}
              </div>
            </div>
          ) : null}
          <div className="md:col-span-9">
            <div className="flex items-center gap-3 mb-3 text-xs">
              <Badge className="bg-primary text-primary-foreground">
                Dernier article
              </Badge>
              <span className="text-muted-foreground">
                {formatDate(featured.date)}
              </span>
              <span className="text-muted-foreground/50">·</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {featured.readingTime} min
              </span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-primary font-medium">{featured.category}</span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-5">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
              Lire l'article
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>

      {/* Other articles grid */}
      {rest.length > 0 && (
        <section>
          <h2 className="font-bold text-2xl md:text-3xl mb-8">
            Plus d'articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  {post.coverIsEmoji ? (
                    <div
                      className="w-16 h-16 shrink-0 rounded-xl bg-linear-to-br from-primary/10 to-accent/5 flex items-center justify-center text-4xl border border-primary/15"
                      aria-hidden
                    >
                      {post.cover}
                    </div>
                  ) : null}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 flex-wrap">
                      <span className="text-primary font-semibold tracking-wide">
                        {post.category}
                      </span>
                      <span className="opacity-40">·</span>
                      <span>{formatDate(post.date)}</span>
                      <span className="opacity-40">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter / CTA */}
      <section className="mt-20 rounded-2xl border border-primary/30 bg-linear-to-br from-primary/10 via-card to-accent/5 p-8 md:p-10 text-center">
        <Tag className="w-6 h-6 mx-auto mb-4 text-primary" />
        <h2 className="font-bold text-2xl md:text-3xl mb-3">
          Un sujet à creuser ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Si vous bloquez sur un point technique ou stratégique pour votre
          site, écrivez-moi. Je réponds vite et je sors souvent un article
          si la question revient plusieurs fois.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Me poser une question
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  )
}
