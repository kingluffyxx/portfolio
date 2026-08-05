"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

const ALL = "Tout"

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category))).sort()]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active)

  return (
    <section>
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h2 className="font-bold text-2xl md:text-3xl">Plus d&apos;articles</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = cat === ALL ? posts.length : posts.filter((p) => p.category === cat).length
            const isActive = active === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat} <span className="opacity-60">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((post) => (
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
              ) : (
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-primary/15">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              )}
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
  )
}
