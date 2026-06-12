import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Hortense"
const SUBTITLE = "Studio photo · Paris"
const NAV = ["Œuvres", "Séries", "Studio", "Tarifs"]

const HERO_IMG =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85"

const SERIES = [
  {
    n: "01",
    title: "Lumières du Nord",
    location: "Norvège",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?auto=format&fit=crop&w=1600&q=85",
  },
  {
    n: "02",
    title: "Bois & étoffes",
    location: "Studio Marais",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?auto=format&fit=crop&w=1600&q=85",
  },
  {
    n: "03",
    title: "Le mouvement",
    location: "Stade Charléty",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    n: "04",
    title: "Vague basse",
    location: "Côte Bretonne",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
  },
  {
    n: "05",
    title: "Route 191",
    location: "Utah, USA",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85",
  },
  {
    n: "06",
    title: "Portrait Octobre",
    location: "Studio Marais",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=85",
  },
]

const CASE_STUDY = {
  brand: "MARQUE / Maison Vasseur",
  title: "Une campagne, un savoir-faire.",
  body: "Photographie de la collection automne 2026 pour la maison Vasseur. 3 jours en Bretagne, 2 ateliers, 14 silhouettes capturées en lumière naturelle. Un livre, une vitrine et un lookbook.",
  stats: [
    { v: "3", l: "jours" },
    { v: "14", l: "silhouettes" },
    { v: "240", l: "tirages" },
  ],
}

const CATEGORIES = [
  { label: "Mariage & union", count: "42 reportages", image: SERIES[1].image },
  { label: "Portrait éditorial", count: "120 séances", image: SERIES[5].image },
  { label: "Mode & marque", count: "28 campagnes", image: SERIES[3].image },
  { label: "Voyage & paysage", count: "+18 destinations", image: SERIES[4].image },
]

const PRICING = [
  { name: "Portrait", price: "à partir de 480€", desc: "1 heure · 30 retouches" },
  { name: "Mariage", price: "à partir de 2 400€", desc: "Reportage 6h · album inclus" },
  { name: "Campagne", price: "sur devis", desc: "Production complète" },
]

export function PhotographerMockup() {
  return (
    <div
      className="photo-mockup"
      style={{
        backgroundColor: "#F5F2EC",
        color: "#1A1614",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Italiana&family=Inter:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
      />
      <MockupAnimations scope="photo-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        .photo-mockup .display { font-family: 'Italiana', serif; font-weight: 400; }
        .photo-mockup .mono { font-family: 'Geist Mono', ui-monospace, monospace; letter-spacing: 0.02em; }
        .photo-mockup .btn-thin {
          font-family: 'Italiana', serif;
          font-size: 1.5rem;
          background: transparent;
          color: #1A1614;
          padding: 0.85rem 2.5rem;
          border: 1px solid #1A1614;
          display: inline-flex;
          align-items: baseline;
          gap: 1rem;
          line-height: 1;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .photo-mockup .btn-thin:hover { background: #1A1614; color: #F5F2EC; }
        .photo-mockup .btn-thin-light {
          font-family: 'Italiana', serif;
          font-size: 1.5rem;
          background: transparent;
          color: #F5F2EC;
          padding: 0.85rem 2.5rem;
          border: 1px solid rgba(245, 242, 236, 0.5);
          display: inline-flex;
          align-items: baseline;
          gap: 1rem;
          line-height: 1;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .photo-mockup .btn-thin-light:hover {
          background: #F5F2EC;
          color: #1A1614;
        }
        .photo-mockup .text-link {
          font-family: 'Italiana', serif;
          font-size: 1.15rem;
          color: inherit;
          padding-bottom: 4px;
          border-bottom: 1px solid currentColor;
          display: inline-flex;
          align-items: baseline;
          gap: 0.6rem;
        }
        .photo-mockup .h-display-xl { font-size: clamp(4rem, 12vw, 12rem); }
        .photo-mockup .h-display-lg { font-size: clamp(3rem, 8vw, 7rem); }
        .photo-mockup .h-display-md { font-size: clamp(2.25rem, 5vw, 4.5rem); }
      `}} />

      {/* ─── TOP THIN BAR ─── */}
      <div
        className="mono text-[11px] uppercase tracking-[0.25em]"
        style={{ backgroundColor: "#F5F2EC", color: "#1A1614" }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-between border-b" style={{ borderColor: "rgba(26, 22, 20, 0.1)" }}>
          <span className="hidden md:inline opacity-65">
            <Instagram className="w-3.5 h-3.5 inline -mt-0.5 mr-2" />
            @studio.hortense · 14.2k abonnés
          </span>
          <span className="md:hidden opacity-65">@studio.hortense</span>
          <span className="opacity-65">Studio Marais · Paris 3<sup>e</sup></span>
        </div>
      </div>

      {/* ─── HEADER MINIMAL ─── */}
      <header
        className="absolute top-10 left-0 right-0 z-30 pt-16 md:pt-20"
        style={{ color: "#F5F2EC" }}
      >
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          <nav className="display flex items-center gap-7 text-xl">
            {NAV.slice(0, 2).map((item) => (
              <span key={item} className="cursor-default opacity-90 hover:opacity-100">
                {item}
              </span>
            ))}
          </nav>
          <Link href="#" className="text-center">
            <p className="display text-5xl md:text-6xl tracking-wide" style={{ lineHeight: "0.85" }}>
              {BRAND}
            </p>
            <p className="mono text-[10px] tracking-[0.4em] uppercase opacity-80 mt-1">
              {SUBTITLE}
            </p>
          </Link>
          <nav className="display flex items-center justify-end gap-7 text-xl">
            {NAV.slice(2).map((item) => (
              <span key={item} className="cursor-default opacity-90 hover:opacity-100">
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── HERO · FULL-BLEED IMMERSIVE ─── */}
      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <div className="absolute inset-0" data-anim="ken-burns">
          <Image
            src={HERO_IMG}
            alt="Lumières du Nord"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 22, 20, 0.55) 0%, rgba(26, 22, 20, 0.15) 25%, rgba(26, 22, 20, 0.05) 55%, rgba(26, 22, 20, 0.85) 100%)",
          }}
        />

        {/* Vertical metadata right */}
        <div
          className="absolute top-1/2 right-8 -translate-y-1/2 mono text-[10px] tracking-[0.4em] uppercase hidden lg:flex flex-col items-center gap-3"
          style={{ color: "#F5F2EC", writingMode: "vertical-rl" }}
          data-anim="fade-in"
          data-delay="600"
        >
          <span className="opacity-60">N° 027</span>
          <span className="w-px h-12" style={{ backgroundColor: "#D4A574" }} />
          <span style={{ color: "#D4A574" }}>SÉRIE LUMIÈRES DU NORD</span>
        </div>

        {/* Bottom huge name */}
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 lg:px-20 pb-16">
          <div
            className="display tracking-tight leading-[0.78]"
            style={{ color: "#F5F2EC" }}
          >
            <span
              className="block h-display-xl"
              data-anim="fade-up"
              data-delay="300"
            >
              Hortense
            </span>
            <span
              className="block h-display-xl italic mt-2"
              style={{ color: "#D4A574" }}
              data-anim="fade-up"
              data-delay="500"
            >
              Marquet
            </span>
          </div>
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-10 max-w-5xl"
            data-anim="fade-up"
            data-delay="800"
          >
            <p
              className="display text-xl md:text-2xl max-w-xl"
              style={{ color: "#F5F2EC", lineHeight: "1.2" }}
            >
              Photographe d'auteur · Portraits, mariages, voyage et marque.
              Paris & ailleurs, depuis 2017.
            </p>
            <div className="flex gap-3 items-center">
              <button className="btn-thin-light">
                Œuvres
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#" className="text-link" style={{ color: "#F5F2EC" }}>
                Réserver
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 right-8 mono text-[10px] tracking-[0.4em] uppercase opacity-70 hidden md:flex items-center gap-3"
          style={{ color: "#F5F2EC" }}
          data-anim="fade-in"
          data-delay="1000"
        >
          <span>Faites défiler</span>
          <span className="w-8 h-px" style={{ backgroundColor: "#D4A574" }} />
        </div>
      </section>

      {/* ─── HORIZONTAL SCROLL SERIES ─── */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="container max-w-7xl mx-auto px-6 flex items-end justify-between mb-12 flex-wrap gap-4">
          <div data-reveal>
            <p className="mono text-[10px] tracking-[0.3em] uppercase opacity-50 mb-3">
              ◯ Sélection 2024 — 2026
            </p>
            <h2 className="display h-display-md leading-[0.95] italic">
              Six séries,<br />
              six respirations.
            </h2>
          </div>
          <div className="mono text-[11px] tracking-[0.25em] uppercase opacity-50 hidden md:flex items-center gap-3" data-reveal data-delay="100">
            <span>Drag →</span>
            <span className="w-8 h-px" style={{ backgroundColor: "#D4A574" }} />
          </div>
        </div>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]" data-reveal>
          <div className="flex gap-5 pb-6" style={{ width: "max-content" }}>
            {SERIES.map((s) => (
              <article
                key={s.title}
                className="group shrink-0 relative"
                style={{ width: "clamp(360px, 46vw, 720px)" }}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    sizes="720px"
                  />
                  {/* Métadonnée discrète seulement, pas d'overlay sombre */}
                  <div
                    className="absolute top-5 left-5 mono text-[10px] tracking-[0.3em] uppercase opacity-90"
                    style={{ color: "#F5F2EC", textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
                  >
                    {s.n} / 06
                  </div>
                </div>
                <div className="flex items-baseline justify-between mt-6 gap-3">
                  <div>
                    <p className="display text-3xl md:text-4xl leading-tight italic" style={{ color: "#1A1614" }}>
                      {s.title}
                    </p>
                    <p className="mono text-[10px] tracking-[0.25em] uppercase opacity-50 mt-2">
                      {s.location} · {s.year}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </article>
            ))}
            <div className="shrink-0 w-6" />
          </div>
        </div>
      </section>

      {/* ─── MUR D'IMAGES MASONRY ─── */}
      <section className="relative" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="container max-w-7xl mx-auto px-6 md:px-10 pb-12">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="mono text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2" data-reveal>
                ◯ Mur d&apos;images · Sélection 2026
              </p>
              <h2 className="display h-display-md leading-[0.95] italic" data-reveal data-delay="100">
                Quelques fragments,
                <br />
                <span style={{ color: "#D4A574" }}>une année.</span>
              </h2>
            </div>
            <a href="#" className="text-link" style={{ color: "#1A1614" }} data-reveal data-delay="200">
              Tout voir · 412 images
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Pleine largeur, sans padding container */}
        <div className="grid grid-cols-12 gap-1 px-1" data-reveal>
          {/* Ligne 1 : grande gauche + 2 verticales droite */}
          <div className="col-span-12 md:col-span-7 relative aspect-[16/10] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[0].image}
              alt={SERIES[0].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className="col-span-6 md:col-span-2 relative aspect-[3/4] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[1].image}
              alt={SERIES[1].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 18vw"
            />
          </div>
          <div className="col-span-6 md:col-span-3 relative aspect-[3/4] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[5].image}
              alt={SERIES[5].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Ligne 2 : 3 verticales + 1 carrée */}
          <div className="col-span-6 md:col-span-3 relative aspect-square overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[2].image}
              alt={SERIES[2].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="col-span-6 md:col-span-4 relative aspect-[5/4] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[3].image}
              alt={SERIES[3].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-12 md:col-span-5 relative aspect-[5/4] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[4].image}
              alt={SERIES[4].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          {/* Ligne 3 : 2 grandes */}
          <div className="col-span-12 md:col-span-8 relative aspect-[16/9] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[1].image}
              alt={SERIES[1].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="col-span-12 md:col-span-4 relative aspect-[3/4] overflow-hidden group" data-hover="zoom-img">
            <Image
              src={SERIES[0].image}
              alt={SERIES[0].title}
              fill
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* ─── CAS CLIENT EDITORIAL FULL ─── */}
      <section className="relative">
        {/* Full image panoramique cinéma */}
        <div className="relative aspect-[21/9] md:aspect-[2.4/1] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=2800&q=85"
            alt="Campagne Maison Vasseur"
            fill
            className="object-cover"
            sizes="100vw"
            data-parallax
          />
        </div>

        {/* Floating overlap content */}
        <div
          className="container max-w-7xl mx-auto px-6 -mt-32 md:-mt-44 relative z-10"
          data-reveal
        >
          <div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16"
            style={{
              backgroundColor: "#F5F2EC",
            }}
          >
            <div className="lg:col-span-7">
              <p className="mono text-[10px] tracking-[0.35em] uppercase opacity-50 mb-5">
                ◯ Cas client · 04 / 2026
              </p>
              <p className="mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D4A574" }}>
                {CASE_STUDY.brand}
              </p>
              <h2 className="display h-display-md leading-[0.95] italic mb-6" style={{ color: "#1A1614" }}>
                {CASE_STUDY.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-75 max-w-xl" style={{ color: "#1A1614" }}>
                {CASE_STUDY.body}
              </p>
              <a href="#" className="text-link mt-8" style={{ color: "#1A1614" }}>
                Voir la campagne complète
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-px" style={{ borderTop: "1px solid rgba(26, 22, 20, 0.12)" }}>
              {CASE_STUDY.stats.map((s) => (
                <div
                  key={s.l}
                  className="flex items-baseline justify-between py-5"
                  style={{ borderBottom: "1px solid rgba(26, 22, 20, 0.12)" }}
                >
                  <span className="display text-6xl italic" style={{ color: "#D4A574" }}>
                    {s.v}
                  </span>
                  <span className="mono text-[10px] tracking-[0.3em] uppercase opacity-60">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATEMENT FULL DARK ─── */}
      <section
        className="py-32 md:py-44 text-center relative"
        style={{ backgroundColor: "#1A1614", color: "#F5F2EC" }}
      >
        <div className="container max-w-5xl mx-auto px-6">
          <p
            className="mono text-[10px] tracking-[0.4em] uppercase opacity-50 mb-10"
            data-reveal
          >
            ◯ Manifeste
          </p>
          <p
            className="display italic leading-[1.05]"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
              color: "#F5F2EC",
            }}
            data-reveal
            data-delay="100"
          >
            «&nbsp;Je photographie ce qui ne se voit pas
            <br />
            quand on regarde —{" "}
            <span style={{ color: "#D4A574" }}>l'instant juste avant.</span>
            &nbsp;»
          </p>
          <p
            className="mono text-[10px] tracking-[0.4em] uppercase opacity-50 mt-12"
            data-reveal
            data-delay="200"
          >
            — Hortense Marquet
          </p>
        </div>
      </section>

      {/* ─── CATEGORIES BENTO ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="container max-w-7xl mx-auto px-6 mb-14">
          <p className="mono text-[10px] tracking-[0.3em] uppercase opacity-50 mb-3" data-reveal>
            ◯ Spécialités
          </p>
          <h2 className="display h-display-md leading-[0.95] italic" data-reveal data-delay="100">
            Ce que je photographie.
          </h2>
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {CATEGORIES.map((c, idx) => {
              // Bento asymetric sizes
              const span =
                idx === 0
                  ? "col-span-12 md:col-span-7 aspect-[16/10] md:aspect-[16/9]"
                  : idx === 1
                    ? "col-span-12 md:col-span-5 aspect-[5/6]"
                    : idx === 2
                      ? "col-span-6 md:col-span-5 aspect-[5/6]"
                      : "col-span-6 md:col-span-7 aspect-square md:aspect-[16/10]"
              return (
                <article
                  key={c.label}
                  className={`group relative overflow-hidden ${span}`}
                  data-reveal
                  data-delay={`${idx * 100}`}
                  data-hover="zoom-img"
                >
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Petite étiquette qui apparaît au hover seulement */}
                  <div
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 backdrop-blur-md transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                    style={{
                      backgroundColor: "rgba(245, 242, 236, 0.95)",
                      color: "#1A1614",
                    }}
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="mono text-[10px] tracking-[0.3em] uppercase opacity-50 shrink-0">
                        0{idx + 1}
                      </span>
                      <h3 className="display italic truncate" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", lineHeight: 1 }}>
                        {c.label}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="mono text-[10px] tracking-[0.3em] uppercase opacity-60 hidden lg:inline">
                        {c.count}
                      </span>
                      <ArrowUpRight className="w-4 h-4" style={{ color: "#D4A574" }} />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PORTRAIT HORTENSE ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative" data-reveal="slide-right">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=85"
                  alt="Hortense Marquet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 px-5 py-4 mono text-[10px] tracking-[0.25em] uppercase"
                style={{
                  backgroundColor: "#1A1614",
                  color: "#D4A574",
                }}
              >
                Studio Marais
                <br />
                <span style={{ color: "#F5F2EC", opacity: 0.6 }}>Paris 3<sup>e</sup></span>
              </div>
            </div>
            <div className="lg:col-span-7" data-reveal="slide-left">
              <p className="mono text-[10px] tracking-[0.35em] uppercase opacity-50 mb-5">
                ◯ Atelier · Hortense
              </p>
              <h2 className="display h-display-md leading-[0.95] italic mb-8" style={{ color: "#1A1614" }}>
                Diplômée des Gobelins,
                <br />
                <span style={{ color: "#D4A574" }}>indépendante depuis 2017.</span>
              </h2>
              <div className="space-y-5 text-base md:text-lg opacity-80 leading-relaxed" style={{ color: "#1A1614" }}>
                <p>
                  Avant la photographie j'ai été graphiste pendant cinq ans à
                  Saatchi. Puis le besoin de regarder seule, de me lever tôt,
                  de marcher. J'ai pris l'appareil de mon père en 2017, et je ne l'ai
                  plus reposé depuis.
                </p>
                <p>
                  Je travaille principalement à la lumière naturelle. Boitier Leica
                  M11, deux focales (35 et 75), et beaucoup de temps avec mes
                  sujets avant de déclencher.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 pt-8" style={{ borderTop: "1px solid rgba(26, 22, 20, 0.12)" }}>
                {[
                  { v: "9 ans", l: "indépendante" },
                  { v: "120+", l: "marques accompagnées" },
                  { v: "5 livres", l: "publiés" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display text-4xl italic mb-1" style={{ color: "#D4A574" }}>
                      {s.v}
                    </div>
                    <div className="mono text-[10px] tracking-[0.25em] uppercase opacity-60" style={{ color: "#1A1614" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING MINIMAL ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="mono text-[10px] tracking-[0.35em] uppercase opacity-50 mb-3" data-reveal>
              ◯ Tarifs &amp; engagement
            </p>
            <h2 className="display h-display-md leading-[0.95] italic" data-reveal data-delay="100">
              Trois formats,
              <br />
              <span style={{ color: "#D4A574" }}>un seul soin.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(26, 22, 20, 0.12)" }}>
            {PRICING.map((p, idx) => (
              <article
                key={p.name}
                className="p-8 md:p-10 flex flex-col gap-3"
                style={{ backgroundColor: "#F5F2EC" }}
                data-reveal
                data-delay={`${idx * 100}`}
              >
                <span className="mono text-[10px] tracking-[0.3em] uppercase opacity-60">
                  0{idx + 1}
                </span>
                <h3 className="display italic" style={{ fontSize: "2.5rem", lineHeight: 1, color: "#1A1614" }}>
                  {p.name}
                </h3>
                <p
                  className="display italic text-xl mt-2"
                  style={{ color: "#D4A574" }}
                >
                  {p.price}
                </p>
                <p className="mono text-xs opacity-70 mt-2 tracking-wide" style={{ color: "#1A1614" }}>
                  {p.desc}
                </p>
                <a href="#" className="text-link mt-5 self-start" style={{ color: "#1A1614" }}>
                  Réserver
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section
        className="py-32 md:py-44 text-center relative"
        style={{ backgroundColor: "#1A1614", color: "#F5F2EC" }}
      >
        <div className="container max-w-4xl mx-auto px-6" data-reveal>
          <p className="mono text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8">
            ◯ Commencer
          </p>
          <h2
            className="display italic leading-[1] mb-12"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "#F5F2EC",
            }}
          >
            Un projet,
            <br />
            <span style={{ color: "#D4A574" }}>une conversation.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button className="btn-thin-light">
              Écrire à Hortense
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#" className="text-link" style={{ color: "#F5F2EC" }}>
              Voir le studio en photos
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="mono text-[10px] tracking-[0.4em] uppercase opacity-60">
            Studio Marais · 7 rue Charlot · 75003 Paris
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-10"
        style={{
          backgroundColor: "#0F0D0B",
          color: "#F5F2EC",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="display text-3xl italic" style={{ color: "#D4A574" }}>
            Hortense Marquet
          </p>
          <div className="flex items-center gap-6 mono text-[10px] tracking-[0.35em] uppercase opacity-65">
            <a href="#" className="hover:opacity-100 inline-flex items-center gap-1.5">
              <Instagram className="w-3 h-3" />
              @studio.hortense
            </a>
            <a href="#" className="hover:opacity-100 inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              bonjour@studiohortense.fr
            </a>
            <a href="tel:+33145567890" className="hover:opacity-100 inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              01 45 56 78 90
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function PhotographerDemoBanner() {
  return (
    <div className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 h-12 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Toutes les maquettes</span>
            <span className="sm:hidden">Retour</span>
          </Link>
          <span className="text-xs text-muted-foreground hidden md:inline">·</span>
          <span className="text-xs font-medium truncate">
            <span className="text-muted-foreground">Maquette · Photographe portfolio</span>
          </span>
        </div>
        <Link
          href="/services/site-vitrine"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shrink-0"
        >
          <span className="hidden sm:inline">Je veux ce style</span>
          <span className="sm:hidden">Ce style</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
