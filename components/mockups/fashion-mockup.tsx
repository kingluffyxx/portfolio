import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  User,
  ShoppingBag,
  Instagram,
  Heart,
  Menu as MenuIcon,
  ChevronRight,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "MAISON NORD"
const TAGLINE = "Vêtements essentiels · Fabriqués en Europe"

const PRIMARY_NAV_LEFT = ["Femme", "Homme", "Nouveautés"]
const PRIMARY_NAV_RIGHT = ["Lookbook", "Journal", "À propos"]

const ANNOUNCEMENTS = [
  "Livraison offerte dès 120€",
  "Retours gratuits sous 30 jours",
  "Collection automne 2026 disponible",
  "10% supplémentaire avec le code BIENVENUE",
]

const CATEGORIES = [
  {
    title: "Femme",
    label: "32 nouveautés",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Homme",
    label: "21 nouveautés",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1400&q=85",
  },
]

const PRODUCTS = [
  {
    name: "Manteau Aubin",
    detail: "Laine vierge · Fait au Portugal",
    price: "320€",
    image:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80",
    tag: "Nouveau",
  },
  {
    name: "Robe Étoile",
    detail: "Lin française · Collection N°08",
    price: "185€",
    image:
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bomber Léon",
    detail: "Coton ciré · Unisexe",
    price: "245€",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    tag: "Bientôt épuisé",
  },
  {
    name: "Chemise Margaux",
    detail: "Popeline biologique",
    price: "95€",
    image:
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&w=900&q=80",
  },
]

const LOOKBOOK = [
  {
    image:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=85",
    label: "Look 01",
    title: "Trench & col claudine",
  },
  {
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    label: "Look 02",
    title: "Long manteau ceintré",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=85",
    label: "Look 03",
    title: "Robe dentelle d'été",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&w=1200&q=85",
    label: "Look 04",
    title: "Chemise & lavallière",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
    label: "Look 05",
    title: "Robe imprimée d'été",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&w=1200&q=85",
    label: "Look 06",
    title: "Robe corolle & paille",
  },
]

const JOURNAL = [
  {
    image:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=900&q=80",
    category: "Atelier",
    date: "06 juin 2026",
    title: "Dans les coulisses de notre atelier de Porto",
    readTime: "8 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    category: "Matière",
    date: "29 mai 2026",
    title: "Pourquoi nous avons choisi le mérinos 18.5 microns",
    readTime: "5 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    category: "Vestiaire",
    date: "21 mai 2026",
    title: "Construire un vestiaire de 30 pièces qui dure 10 ans",
    readTime: "12 min",
  },
]

export function FashionMockup() {
  return (
    <div
      className="fashion-mockup"
      style={{
        backgroundColor: "#F0EDE6",
        color: "#0E0E0C",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
      />
      <MockupAnimations scope="fashion-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        .fashion-mockup .editorial-rule {
          background-image: linear-gradient(to right, rgba(14, 14, 12, 0.25) 50%, transparent 50%);
          background-size: 6px 1px;
          background-repeat: repeat-x;
          background-position: center;
          height: 1px;
        }
        .fashion-mockup .page-marker {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
        .fashion-mockup .btn-editorial {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.4rem;
          color: #0E0E0C;
          position: relative;
          padding: 0.5rem 0;
          display: inline-flex;
          align-items: baseline;
          gap: 0.8rem;
          background: transparent;
          border: none;
        }
        .fashion-mockup .btn-editorial::before,
        .fashion-mockup .btn-editorial::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: #0E0E0C;
        }
        .fashion-mockup .btn-editorial::before { top: 0; opacity: 0.4; }
        .fashion-mockup .btn-editorial::after { bottom: 0; opacity: 1; }
        .fashion-mockup .btn-editorial .arrow-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: #0E0E0C;
          transform: translateY(-0.4rem);
          transition: width 0.3s ease;
        }
        .fashion-mockup .btn-editorial:hover .arrow-line {
          width: 52px;
        }
        .fashion-mockup .btn-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #0E0E0C;
          background: transparent;
          padding: 0.5rem 0;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border-bottom: 1px solid #0E0E0C;
        }
      `}} />

      {/* ─── ANNOUNCEMENT TICKER ─── */}
      <div
        className="text-[11px] tracking-[0.2em] uppercase relative overflow-hidden"
        style={{ backgroundColor: "#0E0E0C", color: "#F0EDE6" }}
      >
        <div className="h-10 flex items-center marquee-mask">
          <div data-anim="marquee" className="gap-16">
            {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
              <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap font-medium">
                <span className="opacity-50">●</span>
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── HEADER · CENTERED LOGO ─── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(240, 237, 230, 0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(14, 14, 12, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-3 items-center h-20">
          {/* LEFT NAV */}
          <nav className="hidden md:flex items-center gap-7 text-xs tracking-[0.2em] uppercase font-medium">
            {PRIMARY_NAV_LEFT.map((item) => (
              <span key={item} className="opacity-80 hover:opacity-100 cursor-default transition-opacity">
                {item}
              </span>
            ))}
          </nav>
          <button className="md:hidden inline-flex items-center justify-self-start">
            <MenuIcon className="w-5 h-5" />
          </button>

          {/* CENTERED LOGO */}
          <Link
            href="#"
            className="text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              letterSpacing: "0.04em",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              color: "#0E0E0C",
            }}
          >
            {BRAND}
          </Link>

          {/* RIGHT UTILITY */}
          <div className="flex items-center justify-self-end gap-5">
            <button className="hidden sm:inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase opacity-75 hover:opacity-100">
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Recherche</span>
            </button>
            <button className="hidden sm:inline-flex items-center opacity-75 hover:opacity-100">
              <User className="w-4 h-4" />
            </button>
            <button className="relative inline-flex items-center opacity-90 hover:opacity-100">
              <ShoppingBag className="w-5 h-5" />
              <span
                className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{ backgroundColor: "#0E0E0C", color: "#F0EDE6" }}
              >
                2
              </span>
            </button>
          </div>
        </div>
        {/* Secondary nav */}
        <div
          className="border-t hidden md:block"
          style={{ borderColor: "rgba(14, 14, 12, 0.05)" }}
        >
          <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-8 text-[10px] tracking-[0.3em] uppercase opacity-65">
            {PRIMARY_NAV_RIGHT.map((item) => (
              <span key={item} className="hover:opacity-100 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ─── HERO · FULL-BLEED EDITORIAL ─── */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0" data-anim="ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=2400&q=85"
            alt="Collection N°08"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Top right marker */}
        <div
          className="absolute top-8 right-8 hidden md:flex items-center gap-3 text-xs tracking-[0.35em] uppercase"
          style={{ color: "#0E0E0C", writingMode: "vertical-rl" }}
          data-anim="fade-in"
          data-delay="600"
        >
          <span className="font-semibold">Automne / Hiver 2026</span>
        </div>

        {/* Top left index */}
        <div
          className="absolute top-8 left-8 text-xs tracking-[0.35em] uppercase font-semibold"
          style={{ color: "#0E0E0C" }}
          data-anim="fade-down"
        >
          N° 08 / Collection
        </div>

        {/* Bottom text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container max-w-7xl mx-auto px-6 pb-16 md:pb-24 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div
                className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-6"
                style={{ color: "#0E0E0C" }}
                data-anim="fade-up"
              >
                — Lookbook · Pièce signature
              </div>
              <h1
                className="leading-[0.88] tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontStyle: "italic",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  color: "#0E0E0C",
                }}
                data-anim="fade-up"
                data-delay="200"
              >
                Le vestiaire
                <br />
                qu'on garde.
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9" data-anim="fade-up" data-delay="500">
              <p
                className="text-base md:text-lg leading-relaxed mb-6 max-w-sm"
                style={{ color: "#0E0E0C" }}
              >
                32 pièces nouvelles dessinées pour traverser les saisons.
                Lin, laine vierge, coton biologique. Tricotées à Porto,
                cousues à Guimarães.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn-editorial">
                  Voir la collection
                  <span className="arrow-line" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll line indicator */}
        <div
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
          data-anim="float"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#0E0E0C" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{ backgroundColor: "rgba(14, 14, 12, 0.5)" }}
          />
        </div>
      </section>

      {/* ─── CATEGORIES SPLIT BLOCK ─── */}
      <section style={{ backgroundColor: "#0E0E0C" }}>
        <div className="grid md:grid-cols-2">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.title}
              href="#"
              className="group relative aspect-[4/5] md:aspect-square overflow-hidden block"
              data-reveal={idx === 0 ? "slide-right" : "slide-left"}
              data-hover="zoom-img"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 transition-opacity group-hover:opacity-70"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(14, 14, 12, 0.7) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <div
                  className="text-xs tracking-[0.3em] uppercase font-semibold opacity-90"
                  style={{ color: "#F0EDE6" }}
                >
                  0{idx + 1} / Catégorie
                </div>
                <div>
                  <h2
                    className="leading-[0.9] tracking-tight mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      fontStyle: "italic",
                      fontSize: "clamp(4rem, 10vw, 8rem)",
                      color: "#F0EDE6",
                    }}
                  >
                    {cat.title}
                  </h2>
                  <div
                    className="flex items-center justify-between text-xs tracking-[0.25em] uppercase font-semibold pt-4"
                    style={{
                      borderTop: "1px solid rgba(240, 237, 230, 0.3)",
                      color: "#F0EDE6",
                    }}
                  >
                    <span className="opacity-80">{cat.label}</span>
                    <span className="inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Découvrir
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "#F0EDE6" }}>
        <div
          className="absolute top-8 right-8 text-[10px] tracking-[0.3em] uppercase font-semibold opacity-50 page-marker hidden md:block"
          style={{ color: "#0E0E0C" }}
        >
          P. 03 / Sélection
        </div>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-6">
            <div>
              <div
                className="page-marker text-[10px] tracking-[0.4em] uppercase mb-3 font-semibold opacity-65"
                style={{ color: "#0E0E0C" }}
                data-reveal
              >
                003 — Sélection de la semaine
              </div>
              <h2
                className="leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "#0E0E0C",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
                data-reveal
                data-delay="100"
              >
                Quatre pièces, pas une de trop.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold opacity-80 hover:opacity-100 hover:gap-3 transition-all whitespace-nowrap"
              data-reveal
              data-delay="200"
            >
              Voir tout · 53 produits
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="editorial-rule mb-12" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, idx) => (
              <article
                key={p.name}
                className="group cursor-pointer"
                data-reveal
                data-delay={`${idx * 100}`}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  {p.tag && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold"
                      style={{ backgroundColor: "#F0EDE6", color: "#0E0E0C" }}
                    >
                      {p.tag}
                    </div>
                  )}
                  {/* Quick actions overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{ backgroundColor: "rgba(14, 14, 12, 0.92)" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <button
                        className="flex-1 py-2.5 text-[10px] tracking-[0.25em] uppercase font-semibold"
                        style={{ backgroundColor: "#F0EDE6", color: "#0E0E0C" }}
                      >
                        Ajouter au panier
                      </button>
                      <button className="opacity-80 hover:opacity-100" style={{ color: "#F0EDE6" }}>
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div
                    className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase font-semibold opacity-60"
                    style={{ color: "#0E0E0C" }}
                  >
                    0{idx + 1}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-medium text-sm tracking-wide mb-1" style={{ color: "#0E0E0C" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs opacity-60" style={{ color: "#0E0E0C" }}>
                      {p.detail}
                    </p>
                  </div>
                  <div className="text-sm font-semibold shrink-0" style={{ color: "#0E0E0C" }}>
                    {p.price}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL STORY ─── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#E8E2D5" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Image asymmetric */}
            <div className="lg:col-span-7 relative" data-reveal="slide-right">
              <div className="relative aspect-[4/5] overflow-hidden" data-hover="zoom-img">
                <Image
                  src="https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=1600&q=85"
                  alt="Atelier de Porto"
                  fill
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 max-w-[180px] p-5"
                style={{ backgroundColor: "#0E0E0C", color: "#F0EDE6" }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-70"
                >
                  Atelier
                </div>
                <p
                  className="text-sm italic leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Porto, Portugal — depuis 2021
                </p>
              </div>
            </div>

            {/* Text columns */}
            <div className="lg:col-span-5 flex flex-col justify-center" data-reveal="slide-left">
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold opacity-65"
                style={{ color: "#0E0E0C" }}
              >
                — 002 / La maison
              </div>
              <h2
                className="leading-[0.92] tracking-tight mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  color: "#0E0E0C",
                }}
              >
                Deux ateliers,
                <br />
                zéro intermédiaire.
              </h2>
              <div className="space-y-5 text-base leading-relaxed opacity-80" style={{ color: "#0E0E0C" }}>
                <p>
                  Maison Nord travaille avec deux ateliers familiaux à Porto et
                  Guimarães. Le premier tricote nos mailles depuis 1968. Le second
                  coud nos pièces depuis trois générations.
                </p>
                <p>
                  Nous y allons six fois par an. Nous choisissons les fils, les
                  tombés, les coutures. Les prix de catalogue ne sont pas gonflés
                  pour cacher cinq intermédiaires : nous fabriquons directement
                  et vous vendons directement.
                </p>
              </div>

              <ul className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { label: "Pièces", value: "300+" },
                  { label: "Pays livrés", value: "42" },
                  { label: "Trustpilot", value: "4.9/5" },
                ].map((s) => (
                  <li key={s.label}>
                    <div
                      className="leading-none mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontStyle: "italic",
                        fontSize: "2.5rem",
                        color: "#0E0E0C",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase opacity-65"
                      style={{ color: "#0E0E0C" }}
                    >
                      {s.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOOKBOOK HORIZONTAL SCROLL ─── */}
      <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F0EDE6" }}>
        <div className="container max-w-7xl mx-auto px-6 flex items-end justify-between mb-12 gap-6">
          <div>
            <div
              className="text-[10px] tracking-[0.4em] uppercase mb-3 font-semibold opacity-65"
              data-reveal
            >
              005 — Lookbook · Automne 2026
            </div>
            <h2
              className="leading-[0.92] tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#0E0E0C",
              }}
              data-reveal
              data-delay="100"
            >
              06 looks · 1 silhouette.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold opacity-70">
            <span>Glisser</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Horizontal scroll strip */}
        <div className="overflow-x-auto pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]" data-reveal>
          <div className="flex gap-5 pb-6" style={{ width: "max-content" }}>
            {LOOKBOOK.map((look, idx) => (
              <article
                key={look.label}
                className="group relative overflow-hidden shrink-0"
                style={{ width: "clamp(280px, 32vw, 440px)" }}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="440px"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(14, 14, 12, 0.7) 100%)",
                    }}
                  />
                  <div
                    className="absolute bottom-5 left-5 right-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ color: "#F0EDE6" }}
                  >
                    <div className="text-[10px] tracking-[0.3em] uppercase opacity-80 mb-2">
                      {look.label}
                    </div>
                    <h3
                      className="text-2xl leading-tight italic"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                    >
                      {look.title}
                    </h3>
                  </div>
                  <div
                    className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase font-semibold"
                    style={{ color: "#F0EDE6", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
                  >
                    {look.label} / 06
                  </div>
                </div>
              </article>
            ))}
            <div className="shrink-0 w-6" />
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH BANNER ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=85"
          alt="Vestiaire essentiel"
          fill
          className="object-cover"
          data-parallax
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14, 14, 12, 0.6) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="max-w-xl" data-reveal>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold"
                style={{ color: "#F0EDE6" }}
              >
                006 — Le Manifeste
              </div>
              <p
                className="leading-[1.1] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#F0EDE6",
                }}
              >
                « Acheter moins, choisir mieux, faire durer. »
              </p>
              <p
                className="text-sm tracking-[0.25em] uppercase opacity-80"
                style={{ color: "#F0EDE6" }}
              >
                — Vivienne Westwood
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LE JOURNAL ─── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#F0EDE6" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold opacity-65"
              data-reveal
            >
              007 — Le Journal
            </div>
            <h2
              className="leading-[0.92] tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#0E0E0C",
              }}
              data-reveal
              data-delay="100"
            >
              Lecture &amp; matière.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {JOURNAL.map((article, idx) => (
              <article
                key={article.title}
                className="group cursor-pointer"
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold"
                    style={{ backgroundColor: "#F0EDE6", color: "#0E0E0C" }}
                  >
                    {article.category}
                  </div>
                </div>
                <div
                  className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-3 font-semibold"
                  style={{ color: "#0E0E0C" }}
                >
                  {article.date} · {article.readTime} de lecture
                </div>
                <h3
                  className="text-2xl md:text-3xl italic leading-tight mb-4 group-hover:underline underline-offset-4 decoration-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "#0E0E0C",
                  }}
                >
                  {article.title}
                </h3>
                <span
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold group-hover:gap-3 transition-all"
                  style={{ color: "#0E0E0C" }}
                >
                  Lire l'article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER FULL DARK ─── */}
      <section
        className="py-24 md:py-32 relative"
        style={{ backgroundColor: "#0E0E0C", color: "#F0EDE6" }}
      >
        <div className="container max-w-3xl mx-auto px-6 text-center" data-reveal>
          <div
            className="text-[10px] tracking-[0.4em] uppercase mb-6 font-semibold opacity-60"
          >
            008 — Newsletter
          </div>
          <h2
            className="leading-[0.92] tracking-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Une pièce coup
            <br />
            de cœur, une fois par mois.
          </h2>
          <p className="text-base opacity-70 max-w-md mx-auto mb-10">
            Pas plus. Pas de promo agressive, pas de spam. Une pièce, une histoire,
            un mot du studio.
          </p>
          <form className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              readOnly
              className="flex-1 px-5 py-4 text-sm outline-none"
              style={{
                backgroundColor: "transparent",
                color: "#F0EDE6",
                border: "1px solid rgba(240, 237, 230, 0.25)",
              }}
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs tracking-[0.25em] uppercase font-semibold"
              style={{ backgroundColor: "#F0EDE6", color: "#0E0E0C" }}
            >
              S'inscrire
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mt-6">
            En vous inscrivant vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-16"
        style={{
          backgroundColor: "#0A0A09",
          color: "#F0EDE6",
          borderTop: "1px solid rgba(240, 237, 230, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 mb-16">
            <div className="md:col-span-2">
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  fontSize: "2rem",
                }}
              >
                {BRAND}
              </p>
              <p className="text-sm opacity-65 leading-relaxed max-w-xs mb-6">
                Vêtements essentiels fabriqués au Portugal. Sans soldes, sans
                intermédiaires, à des prix justes.
              </p>
              <div className="flex items-center gap-4 opacity-65">
                <Instagram className="w-4 h-4 hover:opacity-100" />
                <span className="text-xs tracking-[0.25em] uppercase">@maisonnord</span>
              </div>
            </div>
            {[
              {
                title: "Boutique",
                items: ["Femme", "Homme", "Nouveautés", "Lookbook", "Cartes cadeaux"],
              },
              {
                title: "Aide",
                items: ["Livraison", "Retours", "Guide des tailles", "Entretien", "Contact"],
              },
              {
                title: "Maison",
                items: ["À propos", "Le Journal", "Boutique Paris", "CGV", "Mentions"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-sm opacity-75">
                  {col.items.map((i) => (
                    <li key={i} className="hover:opacity-100 cursor-default">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(240, 237, 230, 0.08)" }}
          >
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Maison Nord · SAS au capital de 25 000€ · Paris
            </p>
            <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase opacity-50">
              <span>EUR €</span>
              <span>·</span>
              <span>FR / EN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function FashionDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Boutique mode</span>
          </span>
        </div>
        <Link
          href="/services/boutique-en-ligne"
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
