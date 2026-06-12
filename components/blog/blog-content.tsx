import { Info, AlertTriangle, CheckCircle2 } from "lucide-react"
import type { BlogBlock } from "@/lib/blog-data"

interface Props {
  blocks: BlogBlock[]
}

export function BlogContent({ blocks }: Props) {
  return (
    <div className="space-y-7 leading-relaxed">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed font-light first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-primary">
          {block.text}
        </p>
      )

    case "p":
      return (
        <p className="text-base md:text-lg text-foreground/80 leading-[1.75]">
          {block.text}
        </p>
      )

    case "h2":
      return (
        <h2
          id={block.id}
          className="font-bold text-2xl md:text-3xl tracking-tight mt-12 mb-2 scroll-mt-24"
        >
          {block.text}
        </h2>
      )

    case "h3":
      return (
        <h3
          id={block.id}
          className="font-semibold text-xl md:text-2xl tracking-tight mt-8 mb-1 scroll-mt-24"
        >
          {block.text}
        </h3>
      )

    case "ul":
      return (
        <ul className="space-y-2.5 text-base md:text-lg text-foreground/80">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-[1.65]">
              <span
                className="mt-3 w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case "ol":
      return (
        <ol className="space-y-3 text-base md:text-lg text-foreground/80 counter-reset">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 leading-[1.65]">
              <span
                className="shrink-0 font-mono text-sm text-primary font-semibold mt-1"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )

    case "quote":
      return (
        <blockquote className="relative pl-6 my-8 border-l-2 border-primary/60">
          <p className="text-xl md:text-2xl italic font-light text-foreground/90 leading-relaxed">
            « {block.text} »
          </p>
          {block.author && (
            <footer className="mt-3 text-sm text-muted-foreground tracking-wide">
              — {block.author}
            </footer>
          )}
        </blockquote>
      )

    case "code":
      return (
        <pre
          className="font-mono text-sm bg-card border border-border rounded-lg p-5 overflow-x-auto"
          style={{ tabSize: 2 }}
        >
          <code>{block.code}</code>
        </pre>
      )

    case "callout": {
      const Icon =
        block.tone === "warning"
          ? AlertTriangle
          : block.tone === "success"
            ? CheckCircle2
            : Info
      const color =
        block.tone === "warning"
          ? "text-amber-500"
          : block.tone === "success"
            ? "text-green-500"
            : "text-primary"
      const bg =
        block.tone === "warning"
          ? "bg-amber-500/5 border-amber-500/20"
          : block.tone === "success"
            ? "bg-green-500/5 border-green-500/20"
            : "bg-primary/5 border-primary/20"
      return (
        <aside
          className={`rounded-xl border p-5 md:p-6 flex gap-4 my-8 ${bg}`}
        >
          <Icon
            className={`w-5 h-5 mt-0.5 shrink-0 ${color}`}
            strokeWidth={2}
          />
          <div>
            <p className="font-semibold text-base mb-1">{block.title}</p>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
              {block.text}
            </p>
          </div>
        </aside>
      )
    }

    case "hr":
      return (
        <div className="my-12 flex items-center justify-center" aria-hidden>
          <span className="text-3xl text-primary opacity-50 tracking-[1em]">···</span>
        </div>
      )

    case "img":
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-lg border border-border"
          />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    default:
      return null
  }
}
