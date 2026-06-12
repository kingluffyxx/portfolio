import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  Heart,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Home,
  Building2,
  TreePine,
  Calculator,
  Star,
  Mail,
  Phone,
  ChevronRight,
  Compass,
  Sparkles,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Duval"
const SUBTITLE = "Agence immobilière indépendante"
const PHONE = "01 56 02 18 47"

const NAV_PRIMARY = ["Acheter", "Louer", "Vendre", "Estimer"]
const NAV_UTILITY = [
  { label: "Favoris", icon: Heart },
  { label: "Connexion", icon: Compass },
]

const LISTINGS = [
  {
    title: "Appartement haussmannien · Saint-Germain",
    location: "Paris 6e",
    coords: "48.853 / 2.333",
    price: "1 850 000",
    pricePerM2: "21 800",
    surface: 85,
    rooms: 4,
    bedrooms: 2,
    bathrooms: 1,
    badge: "Coup de cœur",
    badgeColor: "#A67C52",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Maison de famille · Saint-Cloud",
    location: "Hauts-de-Seine",
    coords: "48.844 / 2.222",
    price: "2 240 000",
    pricePerM2: "8 950",
    surface: 250,
    rooms: 8,
    bedrooms: 5,
    bathrooms: 3,
    badge: "Nouveau",
    badgeColor: "#2D4A3E",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Loft d'architecte · République",
    location: "Paris 11e",
    coords: "48.866 / 2.363",
    price: "1 095 000",
    pricePerM2: "14 600",
    surface: 75,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    badge: null,
    badgeColor: "",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Pavillon avec jardin · Le Vésinet",
    location: "Yvelines",
    coords: "48.890 / 2.140",
    price: "1 690 000",
    pricePerM2: "7 200",
    surface: 235,
    rooms: 7,
    bedrooms: 4,
    bathrooms: 2,
    badge: "Exclusivité",
    badgeColor: "#A67C52",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=85",
  },
]

const MAP_LISTINGS = [
  { label: "Saint-Germain", price: "1.85M€", x: 38, y: 42, active: true },
  { label: "Marais", price: "1.12M€", x: 52, y: 35 },
  { label: "Bastille", price: "880K€", x: 60, y: 50 },
  { label: "Montmartre", price: "1.4M€", x: 45, y: 22 },
  { label: "Place des Vosges", price: "2.3M€", x: 55, y: 40 },
  { label: "Île Saint-Louis", price: "3.1M€", x: 48, y: 48 },
  { label: "Saint-Cloud", price: "2.24M€", x: 18, y: 55 },
]

const AGENTS = [
  {
    name: "Élise Duval",
    role: "Directrice · 3e génération",
    speciality: "Hôtels particuliers · Paris rive gauche",
    ventes: 142,
  },
  {
    name: "Antoine Rivière",
    role: "Conseiller senior",
    speciality: "Appartements haussmanniens",
    ventes: 89,
  },
  {
    name: "Camille Sevenier",
    role: "Conseillère",
    speciality: "Maisons familiales IDF",
    ventes: 67,
  },
  {
    name: "Bertrand Lacombe",
    role: "Conseiller",
    speciality: "Investissement locatif",
    ventes: 54,
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Élise a su trouver la maison qui correspondait à notre famille en moins de deux mois. Accompagnement humain, transparent, sans pression.",
    author: "Famille Bertrand",
    purchase: "Maison · Le Vésinet",
    year: "2025",
  },
  {
    quote:
      "Vente de notre appartement en trois semaines au prix demandé. Antoine connaît le marché parisien comme personne. Communication parfaite.",
    author: "Marie L.",
    purchase: "Appartement · Paris 7e",
    year: "2024",
  },
  {
    quote:
      "Notre quatrième transaction avec Duval. Quand on dit famille, on dit famille. Trois générations qui nous accompagnent depuis 1992.",
    author: "Famille Garnier",
    purchase: "Hôtel particulier · Saint-Cloud",
    year: "2025",
  },
]

const MARKET_INSIGHTS = [
  {
    title: "Marché Paris · Mai 2026",
    summary: "Le marché parisien retrouve son volume sur le segment 1.5-2.5M€",
    metric: "+2.4%",
    metricLabel: "Prix m² · trimestre",
    trend: "up",
  },
  {
    title: "Île-de-France familiale",
    summary: "Forte demande sur les pavillons avec jardin en proche banlieue",
    metric: "−12j",
    metricLabel: "Durée vente moy.",
    trend: "down",
  },
  {
    title: "Investissement locatif",
    summary: "Les studios bien situés restent les meilleurs rendements",
    metric: "4.2%",
    metricLabel: "Rentabilité brute",
    trend: "stable",
  },
]

export function RealEstateMockup() {
  return (
    <div
      className="realestate-mockup"
      style={{
        backgroundColor: "#F8F5EE",
        color: "#1A1F2E",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <MockupAnimations scope="realestate-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        .realestate-mockup .display-serif {
          font-family: 'Fraunces', serif;
          font-variation-settings: 'opsz' 144, 'SOFT' 50;
        }
        .realestate-mockup .coord-text {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
          font-variant-numeric: tabular-nums;
        }
        .realestate-mockup .estate-line {
          background-image: linear-gradient(to right, #A67C52 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
          background-position: center;
          height: 1px;
          opacity: 0.4;
        }
        .realestate-mockup .btn-notched {
          font-family: 'Fraunces', serif;
          font-variation-settings: 'opsz' 36;
          font-weight: 500;
          font-style: italic;
          font-size: 1.1rem;
          padding: 0.85rem 1.75rem;
          background: #A67C52;
          color: #1A1F2E;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          transition: filter 0.15s, transform 0.15s;
        }
        .realestate-mockup .btn-notched:hover {
          filter: brightness(1.06);
          transform: translateY(-1px);
        }
        .realestate-mockup .btn-outline-serif {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.05rem;
          padding: 0.85rem 1.6rem;
          color: #F8F5EE;
          background: transparent;
          border: 1px solid rgba(248, 245, 238, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }
        .realestate-mockup .btn-outline-serif:hover {
          background: rgba(166, 124, 82, 0.1);
          border-color: rgba(166, 124, 82, 0.5);
        }
        .realestate-mockup .link-underline-serif {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 1rem;
          color: #1A1F2E;
          display: inline-flex;
          align-items: baseline;
          gap: 0.5rem;
          padding-bottom: 0.3rem;
          border-bottom: 1px solid #A67C52;
        }

        @keyframes realestate-mockup-pinPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }
        .realestate-mockup .pin-pulse::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 1px solid currentColor;
          animation: realestate-mockup-pinPulse 2s ease-out infinite;
        }
      `}} />

      {/* ─── TOP UTILITY BAR ─── */}
      <div
        className="text-xs"
        style={{ backgroundColor: "#1A1F2E", color: "#F8F5EE" }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <span className="opacity-80 inline-flex items-center gap-2">
            <Star className="w-3 h-3" fill="#A67C52" stroke="#A67C52" />
            <span className="hidden md:inline">Agence familiale indépendante depuis 1992</span>
            <span className="md:hidden">Indépendante depuis 1992</span>
          </span>
          <div className="flex items-center gap-6 text-xs">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>
            <span className="hidden md:inline opacity-60">·</span>
            <span className="hidden md:inline opacity-80">FR / EN</span>
          </div>
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(248, 245, 238, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(26, 31, 46, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <Link href="#" className="flex items-end gap-2 leading-none shrink-0">
            <span
              className="display-serif text-4xl md:text-5xl"
              style={{
                color: "#1A1F2E",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              {BRAND}
            </span>
            <span
              className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase font-medium pb-1 pl-2"
              style={{ color: "#A67C52", borderLeft: "1px solid rgba(26, 31, 46, 0.15)" }}
            >
              EST. 1992
            </span>
          </Link>

          {/* Primary Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {NAV_PRIMARY.map((item) => (
              <span key={item} className="opacity-80 hover:opacity-100 cursor-default transition-opacity">
                {item}
              </span>
            ))}
          </nav>

          {/* Utility */}
          <div className="flex items-center gap-4">
            {NAV_UTILITY.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs opacity-75 hover:opacity-100"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              )
            })}
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5"
              style={{
                backgroundColor: "#1A1F2E",
                color: "#F8F5EE",
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "0.95rem",
                clipPath:
                  "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
              }}
            >
              Estimer mon bien
            </button>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#F8F5EE" }}
      >
        {/* Subtle GPS coord background */}
        <div
          className="absolute top-12 right-12 coord-text text-[10px] opacity-30 hidden md:block"
          style={{ color: "#1A1F2E" }}
        >
          48°51'24"N · 2°21'07"E
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Text */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8"
                style={{
                  backgroundColor: "rgba(166, 124, 82, 0.1)",
                  border: "1px solid rgba(166, 124, 82, 0.3)",
                }}
                data-anim="fade-down"
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: "#A67C52" }} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: "#A67C52" }}
                >
                  42 biens en exclusivité
                </span>
              </div>

              <h1
                className="display-serif leading-[0.92] mb-8"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  color: "#1A1F2E",
                  fontWeight: 500,
                }}
                data-anim="fade-up"
                data-delay="100"
              >
                Une maison
                <br />
                ne se choisit pas
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "#A67C52",
                    fontWeight: 400,
                  }}
                >
                  par hasard.
                </span>
              </h1>

              <p
                className="text-lg opacity-70 mb-10 max-w-lg leading-relaxed"
                style={{ color: "#1A1F2E" }}
                data-anim="fade-up"
                data-delay="300"
              >
                Agence familiale indépendante depuis 1992. Nous accompagnons une
                centaine de familles par an dans leur achat ou leur vente à
                Paris et en Île-de-France.
              </p>

              {/* Stats inline */}
              <div className="flex items-end gap-8 mb-12 pb-8" style={{ borderBottom: "1px solid rgba(26, 31, 46, 0.12)" }}>
                {[
                  { value: "34 ans", label: "d'existence" },
                  { value: "2 800+", label: "transactions" },
                  { value: "98%", label: "vendu au prix" },
                ].map((s, idx) => (
                  <div key={s.label} data-anim="fade-up" data-delay={`${500 + idx * 100}`}>
                    <div
                      className="display-serif leading-none mb-1.5"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        color: "#1A1F2E",
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-medium"
                      style={{ color: "#1A1F2E" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search panel */}
            <div className="lg:col-span-5" data-anim="slide-left" data-delay="400">
              <div
                className="p-6 md:p-7"
                style={{
                  backgroundColor: "#1A1F2E",
                  color: "#F8F5EE",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-bold mb-1"
                  style={{ color: "#A67C52" }}
                >
                  — La recherche
                </p>
                <p
                  className="display-serif text-3xl mb-6"
                  style={{ fontWeight: 500, fontStyle: "italic" }}
                >
                  Trouver une pépite
                </p>

                {/* Tabs */}
                <div className="flex gap-1 mb-5 p-1" style={{ backgroundColor: "rgba(248, 245, 238, 0.08)" }}>
                  {["Acheter", "Louer", "Investir"].map((tab, i) => (
                    <button
                      key={tab}
                      className="flex-1 py-2 text-xs uppercase tracking-wider font-semibold transition-colors"
                      style={{
                        backgroundColor: i === 0 ? "#A67C52" : "transparent",
                        color: i === 0 ? "#1A1F2E" : "#F8F5EE",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Location */}
                <label className="block mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-semibold mb-2 block">
                    Localisation
                  </span>
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ border: "1px solid rgba(248, 245, 238, 0.15)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "#A67C52" }} />
                    <span className="text-sm">Paris 6e · Paris 7e · Saint-Cloud</span>
                  </div>
                </label>

                {/* Type + Surface */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <label className="block">
                    <span className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-semibold mb-2 block">
                      Type de bien
                    </span>
                    <div
                      className="flex items-center justify-between px-4 py-3"
                      style={{ border: "1px solid rgba(248, 245, 238, 0.15)" }}
                    >
                      <span className="text-sm">Appartement</span>
                      <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-60" />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-semibold mb-2 block">
                      Surface min.
                    </span>
                    <div
                      className="flex items-center justify-between px-4 py-3"
                      style={{ border: "1px solid rgba(248, 245, 238, 0.15)" }}
                    >
                      <span className="text-sm">80 m²</span>
                      <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-60" />
                    </div>
                  </label>
                </div>

                {/* Budget range */}
                <label className="block mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-semibold">
                      Budget
                    </span>
                    <span className="text-xs opacity-80 font-semibold" style={{ color: "#A67C52" }}>
                      500K€ — 2.2M€
                    </span>
                  </div>
                  <div className="relative h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(248, 245, 238, 0.12)" }}>
                    <div className="absolute h-full" style={{
                      left: "15%",
                      right: "20%",
                      backgroundColor: "#A67C52",
                    }} />
                    <div className="absolute w-3 h-3 rounded-full -top-1" style={{
                      left: "15%",
                      backgroundColor: "#F8F5EE",
                      border: "2px solid #A67C52",
                      transform: "translateX(-50%)",
                    }} />
                    <div className="absolute w-3 h-3 rounded-full -top-1" style={{
                      left: "80%",
                      backgroundColor: "#F8F5EE",
                      border: "2px solid #A67C52",
                      transform: "translateX(-50%)",
                    }} />
                  </div>
                </label>

                <button
                  className="w-full inline-flex items-center justify-center gap-3 py-4"
                  style={{
                    backgroundColor: "#A67C52",
                    color: "#1A1F2E",
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                    fontSize: "1.15rem",
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Search className="w-4 h-4" />
                  Voir 17 biens
                </button>

                <p className="text-[10px] mt-4 opacity-60 text-center coord-text">
                  Mise à jour il y a 12 min · Lots du jour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ESTATE RULE ─── */}
      <div className="container max-w-7xl mx-auto px-6 estate-line" />

      {/* ─── FEATURED LISTINGS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8F5EE" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
                style={{ color: "#A67C52" }}
                data-reveal
              >
                · 04 · BIENS À LA UNE
              </p>
              <h2
                className="display-serif leading-[0.95]"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#1A1F2E",
                  fontWeight: 500,
                }}
                data-reveal
                data-delay="100"
              >
                Quatre adresses,
                <br />
                <span style={{ fontStyle: "italic", color: "#A67C52" }}>quatre histoires.</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold pb-1.5 border-b"
              style={{ color: "#1A1F2E", borderColor: "#A67C52" }}
              data-reveal
              data-delay="200"
            >
              Voir les 42 biens en exclusivité
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
            {LISTINGS.map((l, idx) => (
              <article
                key={l.title}
                className="group cursor-pointer"
                data-reveal
                data-delay={`${idx * 100}`}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[5/4] overflow-hidden mb-5">
                  <Image
                    src={l.image}
                    alt={l.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {l.badge && (
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase font-bold"
                      style={{
                        backgroundColor: l.badgeColor,
                        color: "#F8F5EE",
                      }}
                    >
                      {l.badge}
                    </div>
                  )}
                  <button
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110"
                    style={{
                      backgroundColor: "rgba(248, 245, 238, 0.92)",
                    }}
                  >
                    <Heart className="w-4 h-4" style={{ color: "#1A1F2E" }} />
                  </button>
                  {/* GPS coordinates corner */}
                  <div
                    className="absolute bottom-3 right-3 coord-text text-[10px] font-semibold opacity-80 px-2 py-1"
                    style={{
                      color: "#F8F5EE",
                      backgroundColor: "rgba(26, 31, 46, 0.7)",
                    }}
                  >
                    {l.coords}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-60 mb-2"
                      style={{ color: "#1A1F2E" }}
                    >
                      <MapPin className="w-3 h-3 inline-block mr-1 -mt-0.5" style={{ color: "#A67C52" }} />
                      {l.location}
                    </p>
                    <h3
                      className="display-serif text-2xl md:text-3xl mb-1 group-hover:italic transition-all leading-tight"
                      style={{
                        color: "#1A1F2E",
                        fontWeight: 500,
                      }}
                    >
                      {l.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="display-serif text-2xl md:text-3xl leading-none"
                      style={{ color: "#1A1F2E", fontWeight: 600 }}
                    >
                      {l.price}€
                    </div>
                    <div className="text-[10px] coord-text opacity-60 mt-1" style={{ color: "#1A1F2E" }}>
                      {l.pricePerM2}€/m²
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-5 pt-4 text-xs"
                  style={{ borderTop: "1px solid rgba(26, 31, 46, 0.08)", color: "#1A1F2E" }}
                >
                  <span className="inline-flex items-center gap-1.5 opacity-80">
                    <Maximize className="w-3.5 h-3.5" style={{ color: "#A67C52" }} />
                    {l.surface} m²
                  </span>
                  <span className="opacity-30">·</span>
                  <span className="inline-flex items-center gap-1.5 opacity-80">
                    <Home className="w-3.5 h-3.5" style={{ color: "#A67C52" }} />
                    {l.rooms} pièces
                  </span>
                  <span className="opacity-30">·</span>
                  <span className="inline-flex items-center gap-1.5 opacity-80">
                    <Bed className="w-3.5 h-3.5" style={{ color: "#A67C52" }} />
                    {l.bedrooms} ch.
                  </span>
                  <span className="opacity-30">·</span>
                  <span className="inline-flex items-center gap-1.5 opacity-80">
                    <Bath className="w-3.5 h-3.5" style={{ color: "#A67C52" }} />
                    {l.bathrooms} sdb
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAP VIEW MOCKUP ─── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#1A1F2E", color: "#F8F5EE" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7">
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
                style={{ color: "#A67C52" }}
                data-reveal
              >
                · 05 · EXPLORER LA CARTE
              </p>
              <h2
                className="display-serif leading-[0.95] mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 500,
                  color: "#F8F5EE",
                }}
                data-reveal
                data-delay="100"
              >
                Voir le marché,
                <br />
                <span style={{ fontStyle: "italic", color: "#A67C52" }}>arrondissement par arrondissement.</span>
              </h2>
              <p
                className="text-base opacity-70 max-w-lg leading-relaxed"
                data-reveal
                data-delay="200"
              >
                Notre carte interactive recense en temps réel les biens à la vente
                avec leurs prix au m² et nos analyses de quartier.
              </p>
            </div>
          </div>

          <div
            className="relative aspect-[16/10] overflow-hidden"
            style={{
              backgroundColor: "#0F1320",
              border: "1px solid rgba(166, 124, 82, 0.2)",
            }}
            data-reveal
          >
            {/* Map grid background (parchment style) */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(166, 124, 82, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(166, 124, 82, 0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Fake "roads" */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 30 Q 30 25 50 30 T 100 35"
                stroke="rgba(166, 124, 82, 0.25)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M20 0 Q 25 30 30 60"
                stroke="rgba(166, 124, 82, 0.25)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M60 0 Q 55 30 60 60"
                stroke="rgba(166, 124, 82, 0.25)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0 15 L 100 12"
                stroke="rgba(166, 124, 82, 0.18)"
                strokeWidth="0.3"
                fill="none"
              />
              <path
                d="M0 50 L 100 47"
                stroke="rgba(166, 124, 82, 0.18)"
                strokeWidth="0.3"
                fill="none"
              />
            </svg>
            {/* Seine river */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 40 Q 25 38 50 42 T 100 40"
                stroke="rgba(166, 124, 82, 0.35)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Pins */}
            {MAP_LISTINGS.map((m, idx) => (
              <div
                key={m.label}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                data-reveal="scale"
                data-delay={`${idx * 80}`}
              >
                <div
                  className={`flex flex-col items-center ${m.active ? "z-10" : ""}`}
                >
                  <div
                    className={`px-3 py-1.5 mb-1 whitespace-nowrap text-[10px] font-bold tracking-wider relative ${m.active ? "pin-pulse" : ""}`}
                    style={{
                      backgroundColor: m.active ? "#A67C52" : "#F8F5EE",
                      color: m.active ? "#1A1F2E" : "#1A1F2E",
                      borderRadius: "2px",
                    }}
                  >
                    <div className="coord-text">{m.price}</div>
                  </div>
                  <div
                    className="w-2.5 h-2.5"
                    style={{
                      backgroundColor: m.active ? "#A67C52" : "#F8F5EE",
                      borderRadius: "50% 50% 50% 0",
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Legend */}
            <div
              className="absolute top-5 left-5 px-4 py-3 text-[10px] tracking-[0.2em] uppercase coord-text"
              style={{
                backgroundColor: "rgba(15, 19, 32, 0.9)",
                color: "#F8F5EE",
                border: "1px solid rgba(166, 124, 82, 0.3)",
              }}
            >
              <div className="font-bold mb-2" style={{ color: "#A67C52" }}>
                · Paris centre ·
              </div>
              <div className="opacity-80">42 biens listés</div>
              <div className="opacity-60 mt-1">Prix m² moy. 12 400€</div>
            </div>

            {/* Coordinate display */}
            <div
              className="absolute bottom-5 right-5 coord-text text-[10px] opacity-60"
              style={{ color: "#F8F5EE" }}
            >
              48°51'24"N · 2°21'07"E · ◯ 6 km
            </div>

            {/* Selected listing peek */}
            <div
              className="absolute bottom-5 left-5 max-w-xs p-4"
              style={{
                backgroundColor: "rgba(248, 245, 238, 0.95)",
                color: "#1A1F2E",
              }}
              data-reveal
              data-delay="800"
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative w-16 h-16 overflow-hidden shrink-0"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=200&q=70"
                    alt="Saint-Germain"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="display-serif text-base mb-0.5 leading-tight"
                    style={{ fontWeight: 500 }}
                  >
                    Saint-Germain
                  </p>
                  <p className="coord-text text-sm font-bold" style={{ color: "#A67C52" }}>
                    1.85M€
                  </p>
                  <p className="text-[10px] opacity-60 mt-0.5">85m² · 4 pièces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGENTS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8F5EE" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
              style={{ color: "#A67C52" }}
              data-reveal
            >
              · 06 · L'ÉQUIPE
            </p>
            <h2
              className="display-serif leading-[0.95]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#1A1F2E",
                fontWeight: 500,
              }}
              data-reveal
              data-delay="100"
            >
              <span style={{ fontStyle: "italic", color: "#A67C52" }}>Quatre</span> conseillers, une maison.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((a, idx) => (
              <article
                key={a.name}
                className="p-6 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(26, 31, 46, 0.08)",
                }}
                data-reveal
                data-delay={`${idx * 100}`}
                data-hover="lift"
              >
                {/* Corner markers (surveyor style) */}
                <span className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: "1px solid #A67C52", borderLeft: "1px solid #A67C52" }} />
                <span className="absolute top-0 right-0 w-4 h-4" style={{ borderTop: "1px solid #A67C52", borderRight: "1px solid #A67C52" }} />
                <span className="absolute bottom-0 left-0 w-4 h-4" style={{ borderBottom: "1px solid #A67C52", borderLeft: "1px solid #A67C52" }} />
                <span className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: "1px solid #A67C52", borderRight: "1px solid #A67C52" }} />

                <div
                  className="w-14 h-14 rounded-full mb-5 flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: "#F8F5EE",
                    border: "1px solid rgba(166, 124, 82, 0.4)",
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    color: "#A67C52",
                    fontWeight: 600,
                  }}
                >
                  {a.name[0]}
                </div>
                <h3
                  className="display-serif text-2xl mb-1 leading-tight"
                  style={{ color: "#1A1F2E", fontWeight: 500 }}
                >
                  {a.name}
                </h3>
                <p
                  className="text-xs tracking-[0.15em] uppercase font-semibold opacity-70 mb-4"
                  style={{ color: "#A67C52" }}
                >
                  {a.role}
                </p>
                <p className="text-sm opacity-70 mb-6 leading-relaxed" style={{ color: "#1A1F2E" }}>
                  {a.speciality}
                </p>
                <div
                  className="flex items-center justify-between text-xs pt-4"
                  style={{ borderTop: "1px solid rgba(26, 31, 46, 0.08)" }}
                >
                  <span className="opacity-60" style={{ color: "#1A1F2E" }}>
                    Ventes 2025
                  </span>
                  <span
                    className="display-serif text-xl"
                    style={{
                      fontStyle: "italic",
                      color: "#A67C52",
                      fontWeight: 600,
                    }}
                  >
                    {a.ventes}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESTIMATION WIDGET ─── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#EFE9DC" }}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal="slide-right">
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
                style={{ color: "#A67C52" }}
              >
                · 07 · ESTIMATION GRATUITE
              </p>
              <h2
                className="display-serif leading-[0.92] mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  color: "#1A1F2E",
                  fontWeight: 500,
                }}
              >
                Combien vaut
                <br />
                <span style={{ fontStyle: "italic", color: "#A67C52" }}>votre bien ?</span>
              </h2>
              <p className="text-lg opacity-70 mb-8 leading-relaxed max-w-lg" style={{ color: "#1A1F2E" }}>
                Estimation en 60 secondes basée sur 2 800 transactions, complétée
                sous 48h par un conseiller pour ajuster au juste prix.
              </p>
              <ul className="space-y-3">
                {[
                  "Croisement avec les ventes des 12 derniers mois",
                  "Analyse de votre quartier et de votre rue",
                  "Rapport PDF détaillé envoyé par email",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "#1A1F2E" }}
                  >
                    <span
                      className="mt-1 w-1.5 h-1.5 shrink-0"
                      style={{ backgroundColor: "#A67C52", borderRadius: "50%" }}
                    />
                    <span className="opacity-80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calculator card */}
            <div
              className="p-7 relative"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(26, 31, 46, 0.08)",
              }}
              data-reveal="slide-left"
            >
              <span className="absolute -top-3 left-7 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-bold"
                style={{ backgroundColor: "#A67C52", color: "#1A1F2E" }}>
                Calculateur
              </span>
              <div className="flex items-center gap-2 mb-6 mt-2">
                <Calculator className="w-5 h-5" style={{ color: "#A67C52" }} />
                <span
                  className="display-serif text-xl"
                  style={{
                    color: "#1A1F2E",
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  Estimer en 60 secondes
                </span>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold opacity-60 block mb-2" style={{ color: "#1A1F2E" }}>
                    Adresse du bien
                  </span>
                  <input
                    readOnly
                    value="12 rue de Vaugirard, 75006 Paris"
                    className="w-full px-4 py-3 text-sm"
                    style={{
                      border: "1px solid rgba(26, 31, 46, 0.15)",
                      backgroundColor: "#F8F5EE",
                      color: "#1A1F2E",
                    }}
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-semibold opacity-60 block mb-2" style={{ color: "#1A1F2E" }}>
                      Surface
                    </span>
                    <input
                      readOnly
                      value="85 m²"
                      className="w-full px-4 py-3 text-sm"
                      style={{
                        border: "1px solid rgba(26, 31, 46, 0.15)",
                        backgroundColor: "#F8F5EE",
                        color: "#1A1F2E",
                      }}
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-semibold opacity-60 block mb-2" style={{ color: "#1A1F2E" }}>
                      Pièces
                    </span>
                    <input
                      readOnly
                      value="4"
                      className="w-full px-4 py-3 text-sm"
                      style={{
                        border: "1px solid rgba(26, 31, 46, 0.15)",
                        backgroundColor: "#F8F5EE",
                        color: "#1A1F2E",
                      }}
                    />
                  </label>
                </div>
              </div>

              {/* Result */}
              <div
                className="mt-6 p-5"
                style={{
                  backgroundColor: "#1A1F2E",
                  color: "#F8F5EE",
                }}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase font-semibold opacity-60 mb-2">
                  Estimation préliminaire
                </p>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <span
                    className="display-serif text-4xl"
                    style={{ fontWeight: 600, color: "#A67C52" }}
                  >
                    1.78M€
                  </span>
                  <span className="text-xs opacity-60 coord-text">± 8%</span>
                </div>
                <div className="text-[10px] opacity-60 coord-text mb-4">
                  1 720 000€ — 1 855 000€
                </div>
                <button
                  className="w-full py-3 text-xs uppercase tracking-[0.25em] font-bold"
                  style={{ backgroundColor: "#A67C52", color: "#1A1F2E" }}
                >
                  Obtenir le rapport détaillé
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8F5EE" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
              style={{ color: "#A67C52" }}
              data-reveal
            >
              · 08 · LES FAMILLES NOUS RECOMMANDENT
            </p>
            <h2
              className="display-serif leading-[0.95]"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                color: "#1A1F2E",
                fontWeight: 500,
              }}
              data-reveal
              data-delay="100"
            >
              <span className="coord-text text-base align-top" style={{ color: "#A67C52" }}>4.9/5</span>{" "}sur Google
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-7 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(26, 31, 46, 0.08)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#A67C52" stroke="#A67C52" />
                  ))}
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#1A1F2E", fontFamily: "'Fraunces', serif", fontWeight: 400 }}
                >
                  « {t.quote} »
                </blockquote>
                <figcaption className="pt-5" style={{ borderTop: "1px solid rgba(26, 31, 46, 0.08)" }}>
                  <div
                    className="display-serif text-lg mb-1"
                    style={{ color: "#1A1F2E", fontWeight: 500, fontStyle: "italic" }}
                  >
                    {t.author}
                  </div>
                  <div className="text-xs opacity-60 coord-text" style={{ color: "#1A1F2E" }}>
                    {t.purchase} · {t.year}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARKET INSIGHTS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EFE9DC" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p
                className="text-[10px] tracking-[0.35em] uppercase font-bold mb-3"
                style={{ color: "#A67C52" }}
                data-reveal
              >
                · 09 · NOTES DE MARCHÉ
              </p>
              <h2
                className="display-serif leading-[0.95]"
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                  color: "#1A1F2E",
                  fontWeight: 500,
                }}
                data-reveal
                data-delay="100"
              >
                Pour comprendre
                <br />
                <span style={{ fontStyle: "italic", color: "#A67C52" }}>avant de signer.</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold pb-1.5 border-b"
              style={{ color: "#1A1F2E", borderColor: "#A67C52" }}
              data-reveal
              data-delay="200"
            >
              Toutes les analyses
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MARKET_INSIGHTS.map((i, idx) => (
              <article
                key={i.title}
                className="p-7"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(26, 31, 46, 0.08)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span
                    className="display-serif"
                    style={{
                      fontSize: "2.75rem",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: "#A67C52",
                      lineHeight: 1,
                    }}
                  >
                    {i.metric}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-semibold text-right max-w-[100px]" style={{ color: "#1A1F2E" }}>
                    {i.metricLabel}
                  </span>
                </div>
                <h3
                  className="display-serif text-xl mb-3 leading-tight"
                  style={{ color: "#1A1F2E", fontWeight: 500 }}
                >
                  {i.title}
                </h3>
                <p
                  className="text-sm opacity-70 leading-relaxed mb-5"
                  style={{ color: "#1A1F2E" }}
                >
                  {i.summary}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-bold"
                  style={{ color: "#A67C52" }}
                >
                  Lire la note
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "#1A1F2E", color: "#F8F5EE" }}
      >
        <div className="container max-w-4xl mx-auto px-6 text-center" data-reveal>
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
            style={{ color: "#A67C52" }}
          >
            · 10 · UN PREMIER ÉCHANGE
          </p>
          <h2
            className="display-serif leading-[0.95] mb-8"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 500,
            }}
          >
            Visitons les lieux,
            <br />
            <span style={{ fontStyle: "italic", color: "#A67C52" }}>buvons un café.</span>
          </h2>
          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto leading-relaxed">
            Notre agence est à deux pas de Saint-Sulpice. Passez nous voir ou
            appelez-nous, on prend le temps de comprendre votre projet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-notched">
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a href="#" className="btn-outline-serif">
              <Mail className="w-4 h-4" />
              contact@duval-immobilier.fr
            </a>
          </div>

          <div className="mt-12 coord-text text-[10px] opacity-50 inline-flex items-center gap-3">
            <span>48°51'04"N</span>
            <span>·</span>
            <span>2°20'06"E</span>
            <span>·</span>
            <span>15 rue Bonaparte · 75006 Paris</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-12"
        style={{ backgroundColor: "#10141F", color: "#F8F5EE" }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-end gap-3 leading-none">
            <span
              className="display-serif text-3xl"
              style={{
                color: "#F8F5EE",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              {BRAND}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium pb-1 opacity-60">
              EST. 1992 · {SUBTITLE}
            </span>
          </div>
          <p className="text-xs opacity-50 text-center md:text-right">
            © {new Date().getFullYear()} Duval Immobilier · Carte T n° CPI 7501 2018 000 028 743
            <br />
            FNAIM · Garantie financière 120 000€
          </p>
        </div>
      </footer>
    </div>
  )
}

export function RealEstateDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Agence immobilière</span>
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
