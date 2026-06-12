import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Clock, Phone, Quote } from "lucide-react"
import { getLocalizedTemplate, type Template, type Locale } from "@/lib/templates-data"

interface Props {
  template: Template
  locale?: Locale
}

export function TemplateMockupView({ template, locale = "fr" }: Props) {
  const content = getLocalizedTemplate(template, locale)
  const m = content.mockup
  if (!m) return null

  const { style } = template
  const fontFamily =
    style.font === "serif"
      ? "Georgia, 'Times New Roman', serif"
      : style.font === "mono"
        ? "ui-monospace, 'SF Mono', monospace"
        : "'Inter', system-ui, sans-serif"

  // Détecte si le fond est clair pour adapter les ombres
  const isLightBg = isLight(style.bg)
  const onBg = isLightBg ? darken(style.secondary, 0) : lighten(style.secondary, 90)

  return (
    <div style={{ fontFamily }}>
      {/* Bandeau "Maquette" sticky */}
      <DemoBanner template={template} locale={locale} />

      {/* Site mockup */}
      <div
        style={{
          backgroundColor: style.bg,
          color: onBg,
          minHeight: "100vh",
        }}
      >
        {/* Header mockup */}
        <header
          className="sticky top-12 z-30 backdrop-blur-md"
          style={{
            backgroundColor: hexA(style.bg, 0.85),
            borderBottom: `1px solid ${hexA(style.secondary, 0.1)}`,
          }}
        >
          <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <div
              className="font-bold tracking-tight text-lg"
              style={{ color: style.primary }}
            >
              {m.brand}
            </div>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              {m.nav.map((item) => (
                <span key={item} className="opacity-70 hover:opacity-100 cursor-default transition-opacity">
                  {item}
                </span>
              ))}
            </nav>
            <button
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: style.primary, color: style.bg }}
            >
              {m.hero.primaryCta}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="container max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            {m.hero.badge && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor: hexA(style.primary, 0.12),
                  color: style.primary,
                  border: `1px solid ${hexA(style.primary, 0.3)}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: style.primary }}
                />
                {m.hero.badge}
              </div>
            )}
            <div
              className="text-xs tracking-[0.25em] uppercase mb-4 opacity-60"
              style={{ color: style.primary }}
            >
              {m.hero.eyebrow}
            </div>
            <h1
              className="font-bold leading-[1.05] mb-6 text-5xl md:text-7xl tracking-tight"
              style={{ color: onBg }}
            >
              {m.hero.title}
            </h1>
            <p
              className="text-lg md:text-xl opacity-70 max-w-2xl mb-10 leading-relaxed"
              style={{ color: onBg }}
            >
              {m.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                style={{ backgroundColor: style.primary, color: style.bg }}
              >
                {m.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </button>
              {m.hero.secondaryCta && (
                <button
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm border"
                  style={{
                    borderColor: hexA(onBg, 0.25),
                    color: onBg,
                  }}
                >
                  {m.hero.secondaryCta}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: hexA(style.primary, 0.04) }}
        >
          <div className="container max-w-6xl mx-auto px-6">
            <h2
              className="font-bold text-3xl md:text-5xl mb-12 max-w-2xl tracking-tight"
              style={{ color: onBg }}
            >
              {m.offerings.sectionTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {m.offerings.items.map((item) => (
                <div
                  key={item.title}
                  className="border-t pt-6"
                  style={{ borderColor: hexA(onBg, 0.15) }}
                >
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <h3
                      className="font-semibold text-xl"
                      style={{ color: onBg }}
                    >
                      {item.title}
                    </h3>
                    {item.price && (
                      <span
                        className="font-bold text-lg shrink-0"
                        style={{ color: style.primary }}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p
                    className="opacity-70 text-sm leading-relaxed"
                    style={{ color: onBg }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="container max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2
              className="font-bold text-3xl md:text-5xl tracking-tight leading-tight"
              style={{ color: onBg }}
            >
              {m.about.title}
            </h2>
            <div>
              <p
                className="text-lg opacity-75 mb-8 leading-relaxed"
                style={{ color: onBg }}
              >
                {m.about.body}
              </p>
              <ul className="space-y-3">
                {m.about.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: onBg }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: style.primary }}
                    />
                    <span className="opacity-85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section
          className="py-20 md:py-28"
          style={{ backgroundColor: hexA(style.secondary, isLightBg ? 0.05 : 0.5) }}
        >
          <div className="container max-w-6xl mx-auto px-6">
            <h2
              className="font-bold text-3xl md:text-5xl mb-12 text-center tracking-tight"
              style={{ color: onBg }}
            >
              {m.proof.title}
            </h2>

            {m.proof.type === "stats" ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {(m.proof.items as { value: string; label: string }[]).map((it) => (
                  <div key={it.label}>
                    <div
                      className="font-bold text-4xl md:text-5xl mb-2"
                      style={{ color: style.primary }}
                    >
                      {it.value}
                    </div>
                    <div
                      className="text-sm opacity-70"
                      style={{ color: onBg }}
                    >
                      {it.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {(
                  m.proof.items as {
                    quote: string
                    author: string
                    role: string
                  }[]
                ).map((it) => (
                  <figure
                    key={it.author}
                    className="rounded-2xl p-8"
                    style={{
                      backgroundColor: hexA(style.bg, isLightBg ? 1 : 0.5),
                      border: `1px solid ${hexA(onBg, 0.1)}`,
                    }}
                  >
                    <Quote
                      className="w-8 h-8 mb-4 opacity-30"
                      style={{ color: style.primary }}
                    />
                    <blockquote
                      className="text-lg leading-relaxed mb-6"
                      style={{ color: onBg }}
                    >
                      « {it.quote} »
                    </blockquote>
                    <figcaption
                      className="text-sm"
                      style={{ color: onBg }}
                    >
                      <div className="font-semibold">{it.author}</div>
                      <div className="opacity-60">{it.role}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section className="container max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-bold text-3xl md:text-5xl tracking-tight mb-4"
                style={{ color: onBg }}
              >
                {m.contact.title}
              </h2>
              <p className="text-lg opacity-75" style={{ color: onBg }}>
                {m.contact.body}
              </p>
              <button
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                style={{ backgroundColor: style.primary, color: style.bg }}
              >
                {m.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {m.contact.address && (
                <ContactRow icon={MapPin} text={m.contact.address} color={style.primary} onBg={onBg} />
              )}
              {m.contact.hours && (
                <ContactRow icon={Clock} text={m.contact.hours} color={style.primary} onBg={onBg} />
              )}
              {m.contact.phone && (
                <ContactRow icon={Phone} text={m.contact.phone} color={style.primary} onBg={onBg} />
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-8 text-center text-sm opacity-50"
          style={{
            borderTop: `1px solid ${hexA(onBg, 0.1)}`,
            color: onBg,
          }}
        >
          © {new Date().getFullYear()} {m.brand} · {m.tagline}
        </footer>
      </div>
    </div>
  )
}

function ContactRow({
  icon: Icon,
  text,
  color,
  onBg,
}: {
  icon: typeof MapPin
  text: string
  color: string
  onBg: string
}) {
  return (
    <div className="flex items-start gap-3" style={{ color: onBg }}>
      <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color }} />
      <span className="opacity-80">{text}</span>
    </div>
  )
}

function DemoBanner({ template, locale = "fr" }: { template: Template; locale?: Locale }) {
  const content = getLocalizedTemplate(template, locale)
  const labels = locale === "en"
    ? { all: "All mockups", back: "Back", sample: "Sample mockup ·", start: "Start my project", startShort: "Start" }
    : { all: "Toutes les maquettes", back: "Retour", sample: "Maquette d'exemple ·", start: "Démarrer mon projet", startShort: "Démarrer" }
  return (
    <div className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 h-12 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{labels.all}</span>
            <span className="sm:hidden">{labels.back}</span>
          </Link>
          <span className="text-xs text-muted-foreground hidden md:inline">·</span>
          <span className="text-xs font-medium truncate">
            <span className="text-muted-foreground">{labels.sample}</span>{" "}
            {content.title}
          </span>
        </div>
        <Link
          href={`/services/${template.recommendedService}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shrink-0"
        >
          <span className="hidden sm:inline">{labels.start}</span>
          <span className="sm:hidden">{labels.startShort}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}

// ─── Color utils (pure HTML hex/rgb) ──────────────────────────────────

function isLight(hex: string): boolean {
  const rgb = hexToRgb(hex)
  if (!rgb) return false
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance > 0.5
}

function hexA(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

function lighten(hex: string, percent: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * (percent / 100)))
  const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * (percent / 100)))
  const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * (percent / 100)))
  return `rgb(${r}, ${g}, ${b})`
}

function darken(hex: string, percent: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const r = Math.max(0, Math.round(rgb.r * (1 - percent / 100)))
  const g = Math.max(0, Math.round(rgb.g * (1 - percent / 100)))
  const b = Math.max(0, Math.round(rgb.b * (1 - percent / 100)))
  return `rgb(${r}, ${g}, ${b})`
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace("#", "")
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean
  if (full.length !== 6) return null
  const num = parseInt(full, 16)
  if (Number.isNaN(num)) return null
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}
