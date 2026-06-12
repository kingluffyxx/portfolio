import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogContent } from "@/components/blog/blog-content"
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xavieradda.dev"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${siteUrl}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    robots: { index: true, follow: true },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${siteUrl}/blog/${post.slug}`
  const related = getRelatedPosts(post.slug, 3)

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url,
    inLanguage: "fr-FR",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    image: `${siteUrl}/opengraph-image`,
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  }

  const jsonLd = [blogPostingLd, breadcrumbLd]

  return (
    <article className="container py-12 md:py-20 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
        <Link href="/blog">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Tous les articles
        </Link>
      </Button>

      {/* Header */}
      <header className="mb-12">
        {post.coverIsEmoji && (
          <div
            className="w-20 h-20 mb-8 rounded-2xl bg-linear-to-br from-primary/10 to-accent/5 flex items-center justify-center text-5xl border border-primary/15"
            aria-hidden
          >
            {post.cover}
          </div>
        )}

        <div className="flex items-center gap-3 mb-5 flex-wrap text-sm">
          <Badge className="bg-primary text-primary-foreground">
            {post.category}
          </Badge>
          <span className="text-muted-foreground inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="text-muted-foreground inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min de lecture
          </span>
        </div>

        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Content */}
      <BlogContent blocks={post.content} />

      {/* Tags */}
      <div className="mt-16 pt-8 border-t border-border flex items-center gap-3 flex-wrap">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
          Tags
        </span>
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Author / CTA */}
      <section className="mt-12 p-6 md:p-8 rounded-2xl border border-primary/30 bg-linear-to-br from-primary/8 via-card to-accent/4">
        <div className="flex items-start gap-4 flex-wrap">
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-lg font-bold shrink-0">
            XA
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base mb-1">Xavier Adda</p>
            <p className="text-sm text-muted-foreground mb-4">
              Freelance création de sites internet & SEO · 7+ ans d'expérience ·
              Île-de-France & Remote.
            </p>
            <Button asChild size="sm">
              <Link href="/#contact">
                Discuter d'un projet
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-bold text-2xl md:text-3xl mb-6">
            À lire ensuite
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  {p.coverIsEmoji && (
                    <span className="text-xl" aria-hidden>
                      {p.cover}
                    </span>
                  )}
                  <span className="text-primary font-semibold">{p.category}</span>
                </div>
                <h3 className="font-semibold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
