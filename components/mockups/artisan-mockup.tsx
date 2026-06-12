import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Hammer,
  HardHat,
  Wrench,
  ShieldCheck,
  Award,
  Mail,
  Check,
  Calendar,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Maison Vasseur"
const TAGLINE = "Couvreur · Zingueur · Isolation"
const PHONE = "01 39 78 42 10"

const NAV = ["Prestations", "Réalisations", "L'équipe", "Devis"]

const SERVICES = [
  {
    icon: HardHat,
    title: "Toiture",
    description:
      "Rénovation, démoussage, réfection complète, pose d'ardoise et tuile. Garantie décennale.",
  },
  {
    icon: Wrench,
    title: "Zinguerie",
    description:
      "Gouttières zinc et cuivre, chéneaux, noues, raccords sur-mesure soudés à l'étain.",
  },
  {
    icon: Hammer,
    title: "Isolation thermique",
    description:
      "Isolation des combles perdus et aménagés, sarking, par l'extérieur. Éligible MaPrimeRénov'.",
  },
  {
    icon: ShieldCheck,
    title: "Étanchéité",
    description:
      "Toit-terrasse, balcons, vérandas. Membranes EPDM et bitumineuses, contrôle décennal.",
  },
]

const PROJECTS = [
  {
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    title: "Réfection complète toiture ardoise",
    location: "Maison de maître · Saint-Germain-en-Laye",
    surface: "180 m²",
    duration: "3 semaines",
    badge: "Livré 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=1200&q=80",
    title: "Isolation combles + zinguerie",
    location: "Pavillon · Le Vésinet",
    surface: "120 m²",
    duration: "2 semaines",
    badge: "MaPrimeRénov'",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    title: "Étanchéité toit-terrasse",
    location: "Immeuble haussmannien · Paris 17e",
    surface: "240 m²",
    duration: "4 semaines",
    badge: "Copropriété",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1200&q=80",
    title: "Création noues et gouttières cuivre",
    location: "Demeure de caractère · Maisons-Laffitte",
    surface: "65 ml",
    duration: "1 semaine",
    badge: "Sur-mesure",
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Visite gratuite",
    description: "Diagnostic complet sur place sous 48-72h, devis détaillé écrit.",
  },
  {
    step: "02",
    title: "Devis transparent",
    description: "Pas de surprise : matériaux, main d'œuvre, planning et garanties détaillés.",
  },
  {
    step: "03",
    title: "Chantier propre",
    description: "Protection des abords, bâche anti-poussière, nettoyage quotidien.",
  },
  {
    step: "04",
    title: "Réception & garanties",
    description: "Décennale, biennale, garantie matériaux. Procès-verbal signé en fin de chantier.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Travail soigné, équipe ponctuelle et respectueuse. Notre toiture refaite dans les délais annoncés, prix tenu. Je recommande sans hésiter.",
    author: "Olivier R.",
    location: "Saint-Germain-en-Laye",
    rating: 5,
  },
  {
    quote:
      "Dossier MaPrimeRénov' monté avec nous, ce qui nous a fait économiser 4 000€. Isolation impeccable, on sent la différence cet hiver.",
    author: "Marine et Antoine B.",
    location: "Le Vésinet",
    rating: 5,
  },
  {
    quote:
      "Intervention rapide après tempête. Bâchage en urgence le jour-même, devis sous 48h, chantier démarré la semaine suivante.",
    author: "Sophie M.",
    location: "Maisons-Laffitte",
    rating: 5,
  },
]

const ZONES = [
  "Paris 75",
  "Yvelines 78",
  "Hauts-de-Seine 92",
  "Val-d'Oise 95",
  "Seine-Saint-Denis 93",
  "Val-de-Marne 94",
]

const CERTIFICATIONS = [
  { label: "RGE Qualibat", sub: "8612 · Couverture" },
  { label: "RGE Qualibat", sub: "7141 · Isolation thermique" },
  { label: "Garantie", sub: "Décennale Axa" },
  { label: "Qualisol", sub: "Membre depuis 2018" },
]

export function ArtisanMockup() {
  return (
    <div
      className="artisan-mockup"
      style={{
        backgroundColor: "#FAFAF7",
        color: "#0F172A",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap"
      />
      <MockupAnimations scope="artisan-mockup" />

      {/* ─────────── TOP BAND (info) ─────────── */}
      <div
        className="text-xs"
        style={{
          backgroundColor: "#0F172A",
          color: "#FAFAF7",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden md:inline-flex items-center gap-2 opacity-80">
              <Award className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
              Artisan RGE Qualibat depuis 1987
            </span>
            <span className="md:hidden inline-flex items-center gap-2 opacity-80">
              <Award className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
              RGE Qualibat
            </span>
          </div>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold"
            style={{ color: "#F59E0B" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* ─────────── HEADER ─────────── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(250, 250, 247, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-sm"
              style={{ backgroundColor: "#0F172A", color: "#F59E0B" }}
            >
              <Hammer className="w-6 h-6" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{ color: "#0F172A", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                {BRAND.toUpperCase()}
              </span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-medium opacity-60"
                style={{ color: "#0F172A" }}
              >
                {TAGLINE}
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <span
                key={item}
                className="opacity-80 hover:opacity-100 cursor-default"
                style={{ color: "#0F172A" }}
              >
                {item}
              </span>
            ))}
          </nav>
          <button
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider relative"
            style={{
              backgroundColor: "#F59E0B",
              color: "#0F172A",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
          >
            Devis gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="relative grid lg:grid-cols-12 min-h-[80vh]">
          {/* Image gauche */}
          <div className="relative lg:col-span-7 min-h-[400px] lg:min-h-0 overflow-hidden">
            <div className="absolute inset-0" data-anim="ken-burns">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85"
                alt="Couvreur au travail"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,23,42,0.4) 0%, transparent 50%, rgba(15,23,42,0.6) 100%)",
              }}
            />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto flex flex-wrap gap-3">
              {[
                { value: "38", label: "Années" },
                { value: "850+", label: "Chantiers" },
                { value: "RGE", label: "Qualibat" },
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className="px-5 py-3 backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.7)",
                    borderLeft: "3px solid #F59E0B",
                  }}
                  data-anim="slide-right"
                  data-delay={`${600 + idx * 150}`}
                >
                  <div
                    className="text-3xl font-extrabold leading-none mb-1"
                    style={{ color: "#F59E0B", fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.25em] uppercase opacity-80"
                    style={{ color: "#FAFAF7" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Texte droite */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div
              className="inline-flex self-start items-center gap-2 px-3 py-1.5 mb-6"
              style={{
                border: "1px solid rgba(245, 158, 11, 0.4)",
                borderRadius: "2px",
              }}
              data-anim="fade-down"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#84cc16" }}
              />
              <span
                className="text-[10px] tracking-[0.25em] uppercase font-bold"
                style={{ color: "#F59E0B" }}
              >
                Devis sous 48h
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6 font-extrabold tracking-tight"
              style={{
                color: "#FAFAF7",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.01em",
              }}
              data-anim="slide-left"
              data-delay="200"
            >
              Votre toit,
              <br />
              <span style={{ color: "#F59E0B" }}>refait pour</span>
              <br />
              les 30 ans
              <br />
              à venir.
            </h1>
            <p
              className="text-lg opacity-80 mb-8 leading-relaxed max-w-md"
              style={{ color: "#FAFAF7" }}
              data-anim="fade-up"
              data-delay="500"
            >
              Artisan couvreur-zingueur en Île-de-France depuis 1987.
              Diagnostic gratuit, devis détaillé sous 48h, garantie décennale
              sur tous nos chantiers.
            </p>

            {/* Mini form */}
            <div
              className="p-5 mb-6 space-y-3"
              data-anim="scale-in"
              data-delay="700"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "2px",
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Votre nom"
                  className="px-3 py-2.5 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#FAFAF7",
                    borderRadius: "2px",
                  }}
                  readOnly
                />
                <input
                  placeholder="Téléphone"
                  className="px-3 py-2.5 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#FAFAF7",
                    borderRadius: "2px",
                  }}
                  readOnly
                />
              </div>
              <select
                className="w-full px-3 py-2.5 text-sm bg-transparent outline-none"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FAFAF7",
                  borderRadius: "2px",
                }}
              >
                <option>Type de chantier...</option>
                <option>Réfection toiture</option>
                <option>Zinguerie / gouttières</option>
                <option>Isolation</option>
                <option>Étanchéité toit-terrasse</option>
                <option>Démoussage</option>
              </select>
              <button
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "#F59E0B",
                  color: "#0F172A",
                  borderRadius: "2px",
                }}
              >
                Demander mon devis gratuit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div
              className="flex items-center gap-4 text-xs opacity-70"
              style={{ color: "#FAFAF7" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                Sans engagement
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                Réponse 48h
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HAZARD STRIPE DIVIDER ─── */}
      <div
        className="h-3 w-full"
        style={{
          background:
            "repeating-linear-gradient(135deg, #F59E0B 0, #F59E0B 14px, #0F172A 14px, #0F172A 28px)",
        }}
      />

      {/* ─────────── CERTIFICATIONS BAND ─────────── */}
      <section
        className="py-10"
        style={{
          backgroundColor: "#FAFAF7",
          borderTop: "1px solid rgba(15, 23, 42, 0.08)",
          borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((c, idx) => (
              <div
                key={c.sub}
                className="flex items-center gap-4"
                data-reveal
                data-delay={`${idx * 100}`}
              >
                <Award className="w-10 h-10 shrink-0" style={{ color: "#F59E0B" }} strokeWidth={1.5} />
                <div>
                  <div
                    className="font-bold text-sm uppercase tracking-wider"
                    style={{ color: "#0F172A" }}
                  >
                    {c.label}
                  </div>
                  <div className="text-xs opacity-60" style={{ color: "#0F172A" }}>
                    {c.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nos prestations"
            title="Tout pour votre toiture"
            subtitle="Du démoussage à la réfection complète, en passant par l'isolation et l'étanchéité. Tous nos chantiers sont garantis décennale."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-16" style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}>
            {SERVICES.map((s, idx) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="p-8 md:p-10 group cursor-default hover:bg-white transition-colors"
                  style={{ backgroundColor: "#FAFAF7" }}
                  data-reveal
                  data-delay={`${idx * 100}`}
                  data-hover="lift"
                >
                  <div
                    className="text-xs font-bold tracking-[0.25em] uppercase mb-6 opacity-40"
                    style={{ color: "#0F172A" }}
                  >
                    0{idx + 1}
                  </div>
                  <Icon
                    className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform"
                    style={{ color: "#F59E0B" }}
                    strokeWidth={1.5}
                  />
                  <h3
                    className="text-2xl font-extrabold mb-3 uppercase tracking-tight"
                    style={{ color: "#0F172A", fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed opacity-75"
                    style={{ color: "#0F172A" }}
                  >
                    {s.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-6 group-hover:gap-3 transition-all"
                    style={{ color: "#F59E0B" }}
                  >
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────── PROJECTS ─────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nos derniers chantiers"
            title="850 toitures, 38 ans d'expérience"
            subtitle="Une sélection de nos réalisations récentes en Île-de-France. Cliquez pour voir le détail avant/après."
            light
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {PROJECTS.map((p, idx) => (
              <article
                key={p.title}
                className="group relative overflow-hidden"
                data-reveal="scale"
                data-delay={`${idx * 120}`}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.95) 100%)",
                    }}
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: "#F59E0B",
                      color: "#0F172A",
                      borderRadius: "2px",
                    }}
                  >
                    {p.badge}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3
                    className="text-2xl md:text-3xl font-extrabold mb-2 uppercase tracking-tight"
                    style={{ color: "#FAFAF7", fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-4" style={{ color: "#FAFAF7" }}>
                    <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" style={{ color: "#F59E0B" }} />
                    {p.location}
                  </p>
                  <div className="flex gap-6 pt-4" style={{ borderTop: "1px solid rgba(245, 158, 11, 0.3)" }}>
                    <div>
                      <div
                        className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1"
                        style={{ color: "#FAFAF7" }}
                      >
                        Surface
                      </div>
                      <div className="text-sm font-bold" style={{ color: "#F59E0B" }}>
                        {p.surface}
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1"
                        style={{ color: "#FAFAF7" }}
                      >
                        Durée
                      </div>
                      <div className="text-sm font-bold" style={{ color: "#F59E0B" }}>
                        {p.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] hover:gap-3 transition-all"
              style={{ color: "#F59E0B" }}
            >
              Voir tous nos chantiers
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Comment ça se passe"
            title="4 étapes, zéro mauvaise surprise"
            subtitle="De la première visite à la réception du chantier, nous suivons un process clair et transparent."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="relative"
                data-reveal
                data-delay={`${i * 150}`}
              >
                {i < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-20 right-0 h-px"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(245, 158, 11, 0.4) 50%, transparent 50%)",
                      backgroundSize: "10px 1px",
                    }}
                  />
                )}
                <div
                  className="text-7xl font-extrabold leading-none mb-4 opacity-30"
                  style={{
                    color: "#F59E0B",
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-xl font-extrabold uppercase tracking-tight mb-3"
                  style={{ color: "#0F172A", fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-75"
                  style={{ color: "#0F172A" }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TEAM ─────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F1F0EB" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                alt="L'équipe Maison Vasseur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-6"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.92)",
                  borderLeft: "3px solid #F59E0B",
                }}
              >
                <div
                  className="text-[10px] tracking-[0.25em] uppercase mb-2 font-bold"
                  style={{ color: "#F59E0B" }}
                >
                  L'équipe sur place
                </div>
                <p
                  className="text-lg font-extrabold uppercase tracking-tight"
                  style={{ color: "#FAFAF7", fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Jean-Pierre Vasseur &amp; ses 6 compagnons
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-bold"
                style={{ color: "#F59E0B" }}
              >
                — La maison Vasseur
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1] mb-8"
                style={{ color: "#0F172A", fontFamily: "'Bebas Neue', sans-serif" }}
              >
                3 générations,
                <br />
                <span style={{ color: "#F59E0B" }}>1 seul savoir-faire</span>
              </h2>
              <p
                className="text-lg leading-relaxed opacity-80 mb-6"
                style={{ color: "#0F172A" }}
              >
                Fondée en 1987 par Roger Vasseur, reprise en 2008 par son
                fils Jean-Pierre, la maison Vasseur c'est 7 couvreurs-zingueurs
                Compagnons du Devoir formés sur le terrain.
              </p>
              <p
                className="text-lg leading-relaxed opacity-80 mb-10"
                style={{ color: "#0F172A" }}
              >
                Nous intervenons exclusivement en Île-de-France sur des maisons
                de caractère, immeubles anciens et copropriétés. Tout est
                réalisé en interne : pas de sous-traitance, pas
                d'intermédiaire.
              </p>
              <ul className="space-y-3">
                {[
                  "Compagnons du Devoir certifiés",
                  "Zéro sous-traitance, équipe en interne",
                  "Garantie décennale Axa sur tous chantiers",
                  "Adhérent CAPEB Île-de-France",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm font-medium"
                    style={{ color: "#0F172A" }}
                  >
                    <div
                      className="mt-1 w-4 h-4 flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "#F59E0B",
                        borderRadius: "2px",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#0F172A" }} strokeWidth={3} />
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Avis clients"
            title="Ce qu'ils en disent"
            subtitle="4.9/5 sur Google · 187 avis vérifiés"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-8 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderTop: "3px solid #F59E0B",
                  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#0F172A" }}
                >
                  « {t.quote} »
                </blockquote>
                <figcaption
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(15, 23, 42, 0.08)" }}
                >
                  <div
                    className="font-bold text-sm uppercase tracking-wider"
                    style={{ color: "#0F172A" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-xs opacity-60 mt-1"
                    style={{ color: "#0F172A" }}
                  >
                    <MapPin className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                    {t.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ZONES ─────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <div
            className="text-[10px] tracking-[0.4em] uppercase mb-4 font-bold"
            style={{ color: "#F59E0B" }}
          >
            — Nous intervenons en
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-12"
            style={{ color: "#FAFAF7", fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Île-de-France
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {ZONES.map((z, idx) => (
              <div
                key={z}
                className="px-5 py-4 text-sm font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid rgba(245, 158, 11, 0.3)",
                  color: "#F59E0B",
                  borderRadius: "2px",
                }}
                data-reveal="scale"
                data-delay={`${idx * 80}`}
              >
                {z}
              </div>
            ))}
          </div>
          <p
            className="mt-10 text-sm opacity-70 max-w-xl mx-auto"
            style={{ color: "#FAFAF7" }}
          >
            Déplacement gratuit dans toute la région pour diagnostic et devis.
            Intervention rapide possible en cas d'urgence (fuite, dégât).
          </p>
        </div>
      </section>

      {/* ─────────── CTA FINAL ─────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#F59E0B" }}
      >
        <div className="container max-w-5xl mx-auto px-6 relative text-center">
          <h2
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-8"
            style={{ color: "#0F172A", fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Un projet de toiture ?
            <br />
            <span style={{ color: "#FAFAF7" }}>
              Parlons-en aujourd'hui.
            </span>
          </h2>
          <p
            className="text-lg opacity-80 mb-12 max-w-xl mx-auto font-medium"
            style={{ color: "#0F172A" }}
          >
            Diagnostic gratuit · Devis écrit sous 48h · Sans engagement
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-8 py-5 text-base font-extrabold uppercase tracking-wider"
              style={{
                backgroundColor: "#0F172A",
                color: "#F59E0B",
                borderRadius: "2px",
              }}
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <button
              className="inline-flex items-center gap-3 px-8 py-5 text-base font-extrabold uppercase tracking-wider"
              style={{
                backgroundColor: "#FAFAF7",
                color: "#0F172A",
                borderRadius: "2px",
              }}
            >
              <Calendar className="w-5 h-5" />
              Réserver une visite
            </button>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer
        className="py-12 md:py-16"
        style={{ backgroundColor: "#0A0E1A", color: "#FAFAF7" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-sm"
                  style={{ backgroundColor: "#F59E0B", color: "#0F172A" }}
                >
                  <Hammer className="w-5 h-5" />
                </div>
                <span
                  className="font-extrabold text-lg uppercase tracking-wider"
                  style={{ color: "#FAFAF7", fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Maison Vasseur
                </span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed">
                Couvreur-zingueur en Île-de-France depuis 1987. Compagnons du
                Devoir.
              </p>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#F59E0B" }}
              >
                Prestations
              </h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Réfection toiture</li>
                <li>Zinguerie</li>
                <li>Isolation thermique</li>
                <li>Étanchéité</li>
                <li>Démoussage</li>
              </ul>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#F59E0B" }}
              >
                Maison Vasseur
              </h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Notre équipe</li>
                <li>Nos chantiers</li>
                <li>Certifications</li>
                <li>MaPrimeRénov'</li>
                <li>Mentions légales</li>
              </ul>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#F59E0B" }}
              >
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                  <span>{PHONE}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                  <span>contact@maison-vasseur.fr</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                  <span>
                    42 rue de la Paix
                    <br />
                    78110 Le Vésinet
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Maison Vasseur · SIRET 340 821 567 00018 · Décennale Axa
            </p>
            <p className="text-xs opacity-50">RGE Qualibat 8612 · 7141</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
}) {
  const textColor = light ? "#FAFAF7" : "#0F172A"
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div
        className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase mb-4 font-extrabold"
        style={{ color: "#F59E0B" }}
      >
        <span className="opacity-60">[</span>
        {eyebrow.toUpperCase()}
        <span className="opacity-60">]</span>
      </div>
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1]"
        style={{ color: textColor, fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg opacity-75 mt-6 leading-relaxed"
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function ArtisanDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Artisan BTP</span>
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
