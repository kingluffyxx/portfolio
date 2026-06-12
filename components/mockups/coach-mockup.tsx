import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Sparkles,
  Quote,
  Check,
  Briefcase,
  Users,
  Mic,
  TrendingUp,
  PlayCircle,
  Mail,
  Linkedin,
  ChevronRight,
  Star,
  Headphones,
  Send,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Marie Dubois"
const TAGLINE = "Coach leadership · Fondateurs & CEO"

const NAV = ["Programmes", "Résultats", "Ressources", "Contact"]

const CLIENT_COMPANIES = [
  "DOCTOLIB",
  "QONTO",
  "ALAN",
  "BACK MARKET",
  "MIRAKL",
  "PAYFIT",
  "BREVO",
  "AIRCALL",
]

const PROGRAMS = [
  {
    icon: Briefcase,
    name: "1:1 Executive",
    tagline: "Pour fondateurs en hyper-croissance",
    description:
      "12 sessions individuelles sur 6 mois. Travail sur votre posture, votre équipe et les décisions clés.",
    price: "12 000€",
    duration: "6 mois",
    features: [
      "12 sessions de 90 min",
      "Hotline WhatsApp illimitée",
      "Diagnostic 360° initial",
      "2 sessions avec votre board",
    ],
    cta: "Réserver un appel",
    highlight: true,
  },
  {
    icon: Users,
    name: "Cohorte Founders",
    tagline: "Groupe restreint, 8 fondateurs max",
    description:
      "6 mois de travail collectif avec des pairs au même stade. Sessions mensuelles + workshops.",
    price: "6 500€",
    duration: "6 mois",
    features: [
      "6 sessions de groupe",
      "Peer-to-peer coaching",
      "Workshops trimestriels",
      "Communauté privée",
    ],
    cta: "Candidater",
    highlight: false,
  },
  {
    icon: Mic,
    name: "Masterclass",
    tagline: "Format intensif, 2 jours",
    description:
      "Masterclass thématique en présentiel à Paris. Frameworks pratiques et études de cas.",
    price: "1 800€",
    duration: "2 jours",
    features: [
      "Présentiel Paris 8e",
      "12 participants max",
      "Lunch & networking",
      "Suivi 30 jours inclus",
    ],
    cta: "Voir les dates",
    highlight: false,
  },
]

const STATS = [
  { value: "200+", label: "Leaders accompagnés" },
  { value: "€450M", label: "Levés par les portefeuilles clients" },
  { value: "94%", label: "Recommandent à un pair" },
  { value: "12 ans", label: "Expérience coaching" },
]

const TESTIMONIALS = [
  {
    quote:
      "Marie m'a aidée à transformer ma manière de manager. Après 6 mois, mon équipe est plus alignée, je délègue mieux et je dors mieux. ROI clair.",
    author: "Sophie Charpentier",
    role: "CEO · Series B SaaS",
    avatar:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=200&q=85",
    company: "Doctolib",
  },
  {
    quote:
      "Le programme 1:1 a été le meilleur investissement de mon année. Marie pose les bonnes questions, jamais les évidentes. Recommande à 100%.",
    author: "Antoine Bernard",
    role: "Founder · Series A",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=85",
    company: "Qonto",
  },
  {
    quote:
      "Cohorte exceptionnelle. Le mélange de framework + peer coaching + accompagnement de Marie est unique. J'ai construit des amitiés solides.",
    author: "Léa Mercier",
    role: "Co-founder & COO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=85",
    company: "Alan",
  },
]

const RESOURCES = [
  {
    type: "Newsletter",
    icon: Mail,
    title: "Operating · Le mémo hebdomadaire",
    description: "Chaque lundi, 1 réflexion sur le leadership de scale-up. 4 200 fondateurs abonnés.",
    cta: "S'abonner",
  },
  {
    type: "Podcast",
    icon: Headphones,
    title: "Founders Off-Stage",
    description: "Interviews longue durée avec des fondateurs sur ce qu'ils n'ont jamais raconté ailleurs.",
    cta: "Écouter",
  },
  {
    type: "Vidéo",
    icon: PlayCircle,
    title: "Masterclass · Gérer le doute",
    description: "Format 45 min pour comprendre et travailler le syndrome de l'imposteur en hyper-croissance.",
    cta: "Regarder",
  },
]

const SLOTS = [
  { day: "Mar 10 juin", time: "14:00", taken: false },
  { day: "Mer 11 juin", time: "10:30", taken: true },
  { day: "Mer 11 juin", time: "15:30", taken: false },
  { day: "Jeu 12 juin", time: "09:00", taken: false },
  { day: "Jeu 12 juin", time: "11:30", taken: false },
  { day: "Ven 13 juin", time: "16:00", taken: false },
]

const FAQS = [
  {
    q: "Pour qui s'adresse votre coaching ?",
    a: "Fondateurs et CEO de startups en Series A à C principalement. Quelques exceptions pour des seed bien financés ou des C-levels en scale-up.",
  },
  {
    q: "Comment se déroule le 1er appel ?",
    a: "30 min en visio gratuit pour comprendre votre contexte, vos enjeux et voir si on a un fit. Aucun engagement à l'issue.",
  },
  {
    q: "Acceptez-vous les paiements via votre société ?",
    a: "Oui, facturation au nom de votre société et possibilité d'étalement en 3 fois sans frais.",
  },
]

export function CoachMockup() {
  return (
    <div
      className="coach-mockup"
      style={{
        backgroundColor: "#0A0A0F",
        color: "#F8FAFC",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <MockupAnimations scope="coach-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes coach-cursor-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .coach-mockup .cursor-blink { animation: coach-cursor-blink 1s steps(1) infinite; }
        .coach-mockup .mono-tag {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          letter-spacing: 0;
        }
        .coach-mockup .btn-code {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 0.85rem;
          color: #FFFFFF;
          background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);
          padding: 0.85rem 1.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          position: relative;
          border-radius: 4px;
          box-shadow: 0 0 32px rgba(139, 92, 246, 0.45),
            0 0 0 1px rgba(167, 139, 250, 0.5) inset;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .coach-mockup .btn-code:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 44px rgba(139, 92, 246, 0.6),
            0 0 0 1px rgba(167, 139, 250, 0.7) inset;
        }
        .coach-mockup .btn-code::before {
          content: '[';
          color: rgba(255, 255, 255, 0.6);
          margin-right: 0.1rem;
        }
        .coach-mockup .btn-code::after {
          content: ']';
          color: rgba(255, 255, 255, 0.6);
          margin-left: 0.1rem;
        }
        .coach-mockup .btn-code-ghost {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          font-size: 0.85rem;
          color: #F8FAFC;
          background: rgba(248, 250, 252, 0.04);
          padding: 0.85rem 1.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border: 1px solid rgba(167, 139, 250, 0.25);
          border-radius: 4px;
        }
        .coach-mockup .btn-code-ghost::before {
          content: '$ ';
          color: #A78BFA;
        }
      `}} />

      {/* ─── TOP BAND ─── */}
      <div
        className="text-xs relative"
        style={{
          backgroundColor: "#131320",
          color: "#F8FAFC",
          borderBottom: "1px solid rgba(167, 139, 250, 0.1)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3" style={{ color: "#A78BFA" }} />
          <span className="opacity-80">
            <span className="hidden md:inline">Nouvelle masterclass · </span>
            <span style={{ color: "#A78BFA" }} className="font-medium">
              Gérer le doute en hyper-croissance
            </span>
            <span className="hidden md:inline"> · 28 juin 2026</span>
          </span>
          <ChevronRight className="w-3 h-3 opacity-60" />
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(10, 10, 15, 0.85)",
          backdropFilter: "blur(20px) saturate(140%)",
          borderBottom: "1px solid rgba(167, 139, 250, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
              }}
            >
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <span className="font-semibold text-sm">{BRAND}</span>
            <span
              className="hidden sm:inline text-xs opacity-50 ml-2 pl-3"
              style={{ borderLeft: "1px solid rgba(248, 250, 252, 0.1)" }}
            >
              {TAGLINE}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((item) => (
              <span
                key={item}
                className="opacity-65 hover:opacity-100 cursor-default transition-opacity"
              >
                {item}
              </span>
            ))}
          </nav>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
              color: "#FFFFFF",
              boxShadow: "0 0 24px rgba(139, 92, 246, 0.4)",
            }}
          >
            Réserver un appel
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ─── HERO · IDE WINDOW MOCKUP ─── */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, transparent 70%)",
          }}
          data-anim="float"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248, 250, 252, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 250, 252, 1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container max-w-7xl mx-auto px-6 relative">
          {/* Top eyebrow + announcement */}
          <div className="text-center mb-10" data-anim="fade-down">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full"
              style={{
                backgroundColor: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#A78BFA" }} />
              <span className="text-xs font-medium mono-tag" style={{ color: "#A78BFA" }}>
                {`status: 3 places — cohorte automne 2026`}
              </span>
            </div>
          </div>

          {/* macOS-like window with IDE mockup */}
          <div
            className="relative max-w-6xl mx-auto rounded-xl overflow-hidden"
            style={{
              backgroundColor: "#0E0E18",
              border: "1px solid rgba(167, 139, 250, 0.25)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(139, 92, 246, 0.15)",
            }}
            data-anim="scale-in"
            data-delay="200"
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-3 px-4 h-10"
              style={{
                backgroundColor: "#15151F",
                borderBottom: "1px solid rgba(167, 139, 250, 0.12)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
              </div>
              <div
                className="flex-1 text-center mono-tag text-xs opacity-50"
                style={{ color: "#F8FAFC" }}
              >
                marie-dubois.dev — manifesto.md
              </div>
              <div className="w-12" />
            </div>

            {/* Tab bar */}
            <div
              className="flex items-end px-2 pt-2 gap-1"
              style={{
                backgroundColor: "#0E0E18",
                borderBottom: "1px solid rgba(167, 139, 250, 0.08)",
              }}
            >
              {[
                { name: "manifesto.md", active: true },
                { name: "programmes.md", active: false },
                { name: "ressources.md", active: false },
              ].map((tab) => (
                <div
                  key={tab.name}
                  className="mono-tag text-[11px] px-4 py-2.5"
                  style={{
                    backgroundColor: tab.active ? "#15151F" : "transparent",
                    color: tab.active ? "#A78BFA" : "rgba(248, 250, 252, 0.5)",
                    borderTop: tab.active ? "1px solid #A78BFA" : "1px solid transparent",
                    borderLeft: tab.active ? "1px solid rgba(167, 139, 250, 0.12)" : "none",
                    borderRight: tab.active ? "1px solid rgba(167, 139, 250, 0.12)" : "none",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            {/* Content grid: sidebar + editor */}
            <div className="grid grid-cols-12 min-h-[560px]">
              {/* File tree sidebar */}
              <aside
                className="col-span-3 hidden md:block py-5 px-3 mono-tag text-xs"
                style={{
                  backgroundColor: "#15151F",
                  borderRight: "1px solid rgba(167, 139, 250, 0.08)",
                  color: "rgba(248, 250, 252, 0.65)",
                }}
              >
                <div className="px-2 mb-3 text-[10px] tracking-[0.2em] uppercase opacity-50">
                  marie-dubois/
                </div>
                {[
                  { name: "💭 manifesto.md", active: true, indent: 0 },
                  { name: "📂 programmes/", active: false, indent: 0 },
                  { name: "1-1-executive.md", active: false, indent: 1 },
                  { name: "cohorte-founders.md", active: false, indent: 1 },
                  { name: "masterclass.md", active: false, indent: 1 },
                  { name: "📂 ressources/", active: false, indent: 0 },
                  { name: "newsletter.md", active: false, indent: 1 },
                  { name: "podcast.md", active: false, indent: 1 },
                  { name: "📂 work/", active: false, indent: 0 },
                  { name: "200-founders.json", active: false, indent: 1 },
                ].map((f, i) => (
                  <div
                    key={f.name + i}
                    className="py-1.5 px-2 rounded-sm flex items-center gap-2"
                    style={{
                      backgroundColor: f.active ? "rgba(167, 139, 250, 0.12)" : "transparent",
                      color: f.active ? "#A78BFA" : "inherit",
                      marginLeft: `${f.indent * 12}px`,
                    }}
                  >
                    {f.active && <span style={{ color: "#A78BFA" }}>›</span>}
                    {f.name}
                  </div>
                ))}
              </aside>

              {/* Editor pane */}
              <div className="col-span-12 md:col-span-9 py-8 md:py-10 px-6 md:px-10 relative">
                {/* Line numbers */}
                <div
                  className="absolute left-2 top-10 mono-tag text-[10px] opacity-25 select-none hidden md:flex flex-col gap-2"
                  style={{ color: "#F8FAFC" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                    <span key={n}>{String(n).padStart(2, " ")}</span>
                  ))}
                </div>

                {/* Markdown rendered as styled content */}
                <div className="md:pl-8">
                  <div
                    className="mono-tag text-[11px] mb-4"
                    style={{ color: "#A78BFA" }}
                    data-anim="fade-up"
                    data-delay="400"
                  >
                    {`# manifesto`}
                  </div>
                  <h1
                    className="leading-[1.02] mb-6 font-bold tracking-tight"
                    style={{
                      fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
                      color: "#F8FAFC",
                    }}
                    data-anim="fade-up"
                    data-delay="500"
                  >
                    Le coach{" "}
                    <span
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontStyle: "italic",
                        fontWeight: 400,
                        background:
                          "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 60%, #C4B5FD 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      silencieux
                    </span>
                    <br />
                    des fondateurs qui scalent.
                    <span
                      className="cursor-blink ml-1 inline-block w-3 md:w-3 align-baseline"
                      style={{
                        height: "0.85em",
                        backgroundColor: "#A78BFA",
                        transform: "translateY(0.1em)",
                      }}
                    />
                  </h1>

                  <p
                    className="text-base md:text-lg opacity-70 mb-8 max-w-2xl leading-relaxed"
                    style={{ color: "#F8FAFC" }}
                    data-anim="fade-up"
                    data-delay="700"
                  >
                    {`> 200+ founders accompagnés depuis 2014. De Series A à C, sur la posture, l'équipe et les décisions qui ne se prennent pas en board.`}
                  </p>

                  {/* Quick metadata block */}
                  <div
                    className="grid grid-cols-3 gap-px mb-8 mono-tag text-xs max-w-2xl"
                    style={{ backgroundColor: "rgba(167, 139, 250, 0.12)" }}
                    data-anim="fade-up"
                    data-delay="800"
                  >
                    {[
                      { k: "founders", v: "200+" },
                      { k: "raised", v: "€450M" },
                      { k: "exp", v: "12 yrs" },
                    ].map((kv) => (
                      <div
                        key={kv.k}
                        className="p-4"
                        style={{ backgroundColor: "#0E0E18" }}
                      >
                        <div className="opacity-50" style={{ color: "#F8FAFC" }}>
                          {kv.k}:
                        </div>
                        <div className="font-semibold" style={{ color: "#A78BFA" }}>
                          {kv.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3" data-anim="fade-up" data-delay="900">
                    <button className="btn-code">
                      reserver_appel
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button className="btn-code-ghost">
                      <PlayCircle className="w-3.5 h-3.5" />
                      voir_masterclass
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div
              className="px-4 h-7 flex items-center justify-between mono-tag text-[10px]"
              style={{
                backgroundColor: "#15151F",
                color: "rgba(248, 250, 252, 0.5)",
                borderTop: "1px solid rgba(167, 139, 250, 0.08)",
              }}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#22C55E" }} />
                  available
                </span>
                <span>marie@duboiscoaching</span>
                <span>main</span>
              </div>
              <div className="flex items-center gap-4">
                <span>UTF-8 · markdown</span>
                <span>Ln 6, Col 24</span>
              </div>
            </div>
          </div>

          {/* Press strip below */}
          <div
            className="flex items-center justify-center gap-3 text-xs opacity-50 mt-10"
            data-anim="fade-up"
            data-delay="1000"
          >
            <span className="tracking-[0.2em] uppercase">Vue dans</span>
            <span style={{ color: "#A78BFA" }}>Les Échos</span>
            <span>·</span>
            <span style={{ color: "#A78BFA" }}>Maddyness</span>
            <span>·</span>
            <span style={{ color: "#A78BFA" }}>Frenchweb</span>
          </div>
        </div>
      </section>

      {/* ─── CLIENT COMPANIES (marquee) ─── */}
      <section
        className="py-12 border-y"
        style={{
          backgroundColor: "#0A0A0F",
          borderColor: "rgba(167, 139, 250, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 mb-6 text-center">
          <p
            className="text-[10px] tracking-[0.4em] uppercase opacity-40"
            style={{ color: "#F8FAFC" }}
          >
            Mes clients travaillent ou ont travaillé chez
          </p>
        </div>
        <div className="marquee-mask">
          <div data-anim="marquee" className="opacity-40">
            {[...CLIENT_COMPANIES, ...CLIENT_COMPANIES].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-lg md:text-xl font-bold tracking-[0.2em] whitespace-nowrap"
                style={{ color: "#F8FAFC" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0F" }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div
            className="text-[10px] tracking-[0.4em] uppercase mb-6 font-medium"
            style={{ color: "#A78BFA" }}
            data-reveal
          >
            {`{ ma_vision }`}
          </div>
          <p
            className="leading-[1.2] mb-10"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: "#F8FAFC",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontStyle: "italic",
            }}
            data-reveal
            data-delay="100"
          >
            «&nbsp;Un fondateur ne se transforme pas en suivant une checklist.
            Il se transforme en{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              regardant lucidement
            </span>{" "}
            ce qu'il évite.&nbsp;»
          </p>
          <p
            className="text-sm opacity-60 tracking-[0.25em] uppercase"
            style={{ color: "#F8FAFC" }}
            data-reveal
            data-delay="200"
          >
            Marie Dubois · Paris, 2014 — Aujourd'hui
          </p>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section
        className="py-24 md:py-32 relative"
        style={{ backgroundColor: "#0A0A0F" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div
              className="text-[11px] mono-tag mb-4 opacity-80"
              style={{ color: "#A78BFA" }}
              data-reveal
            >
              {`{ programmes }`}
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2
                className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl"
                style={{ color: "#F8FAFC" }}
                data-reveal
                data-delay="100"
              >
                Trois formats,
                <br />
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#A78BFA",
                  }}
                >
                  une seule promesse
                </span>
                .
              </h2>
              <p
                className="text-base opacity-70 max-w-md"
                style={{ color: "#F8FAFC" }}
                data-reveal
                data-delay="200"
              >
                Quels que soient votre stade et votre format préféré, vous
                repartez avec un cadre de décision plus clair et une posture
                plus solide.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROGRAMS.map((p, idx) => {
              const Icon = p.icon
              return (
                <article
                  key={p.name}
                  className="relative p-8 rounded-2xl group flex flex-col"
                  style={{
                    backgroundColor: p.highlight ? "rgba(167, 139, 250, 0.06)" : "#131320",
                    border: p.highlight
                      ? "1px solid rgba(167, 139, 250, 0.35)"
                      : "1px solid rgba(248, 250, 252, 0.06)",
                    boxShadow: p.highlight
                      ? "0 0 40px rgba(139, 92, 246, 0.15)"
                      : "none",
                  }}
                  data-reveal
                  data-delay={`${idx * 150}`}
                  data-hover="lift"
                >
                  {p.highlight && (
                    <div
                      className="absolute -top-3 left-8 px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      Le plus demandé
                    </div>
                  )}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: p.highlight ? "rgba(167, 139, 250, 0.15)" : "rgba(248, 250, 252, 0.05)",
                      border: "1px solid rgba(167, 139, 250, 0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#A78BFA" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#F8FAFC" }}>
                    {p.name}
                  </h3>
                  <p
                    className="text-sm mb-5 italic"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      color: "#A78BFA",
                    }}
                  >
                    {p.tagline}
                  </p>
                  <p className="text-sm opacity-70 leading-relaxed mb-6" style={{ color: "#F8FAFC" }}>
                    {p.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "#F8FAFC" }}
                      >
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#A78BFA" }} strokeWidth={2.5} />
                        <span className="opacity-85">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(248, 250, 252, 0.08)" }}>
                    <div className="flex items-baseline justify-between mb-5">
                      <div>
                        <div className="text-3xl font-bold" style={{ color: "#F8FAFC" }}>
                          {p.price}
                        </div>
                        <div className="text-xs opacity-50 mt-1" style={{ color: "#F8FAFC" }}>
                          / {p.duration}
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-md transition-transform hover:scale-[1.02]"
                      style={{
                        background: p.highlight
                          ? "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)"
                          : "rgba(248, 250, 252, 0.06)",
                        color: "#FFFFFF",
                        border: p.highlight ? "none" : "1px solid rgba(248, 250, 252, 0.15)",
                        boxShadow: p.highlight
                          ? "0 0 20px rgba(139, 92, 246, 0.3)"
                          : "none",
                      }}
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section
        className="py-20 relative"
        style={{
          backgroundColor: "#0A0A0F",
          borderTop: "1px solid rgba(167, 139, 250, 0.08)",
          borderBottom: "1px solid rgba(167, 139, 250, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, idx) => (
              <div
                key={s.label}
                className="text-center md:text-left"
                data-reveal="scale"
                data-delay={`${idx * 120}`}
              >
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 tracking-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, #F8FAFC 0%, #A78BFA 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase opacity-60"
                  style={{ color: "#F8FAFC" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0F" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="text-[11px] mono-tag mb-4 opacity-80"
              style={{ color: "#A78BFA" }}
              data-reveal
            >
              {`{ témoignages }`}
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ color: "#F8FAFC" }}
              data-reveal
              data-delay="100"
            >
              Ce qu'en disent
              <br />
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#A78BFA",
                }}
              >
                les fondateurs accompagnés
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-7 rounded-2xl group"
                style={{
                  backgroundColor: "#131320",
                  border: "1px solid rgba(248, 250, 252, 0.06)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#A78BFA" stroke="#A78BFA" />
                  ))}
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-7"
                  style={{ color: "#F8FAFC" }}
                >
                  « {t.quote} »
                </blockquote>
                <figcaption
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(248, 250, 252, 0.06)" }}
                >
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm" style={{ color: "#F8FAFC" }}>
                      {t.author}
                    </div>
                    <div className="text-xs opacity-60 truncate" style={{ color: "#F8FAFC" }}>
                      {t.role} · {t.company}
                    </div>
                  </div>
                  <Linkedin className="w-4 h-4 opacity-50" style={{ color: "#A78BFA" }} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING ─── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#0A0A0F" }}
      >
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
          }}
          data-anim="float"
        />
        <div className="container max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-reveal="slide-right">
              <div
                className="text-[11px] mono-tag mb-4 opacity-80"
                style={{ color: "#A78BFA" }}
              >
                {`{ premier_appel }`}
              </div>
              <h2
                className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
                style={{ color: "#F8FAFC" }}
              >
                30 min pour voir
                <br />
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#A78BFA",
                  }}
                >
                  si on a un fit.
                </span>
              </h2>
              <p
                className="text-lg opacity-70 leading-relaxed mb-8"
                style={{ color: "#F8FAFC" }}
              >
                Visio gratuite, sans préparation. Vous me racontez votre
                contexte, je vous dis honnêtement si je peux aider et lequel
                des trois programmes est pertinent. Aucun engagement.
              </p>
              <ul className="space-y-3">
                {[
                  "Diagnostic rapide de votre situation",
                  "Recommandation de programme adapté",
                  "Aucun pitch commercial",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#F8FAFC" }}
                  >
                    <Check className="w-4 h-4" style={{ color: "#A78BFA" }} strokeWidth={2.5} />
                    <span className="opacity-85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cal.com mockup */}
            <div
              className="p-6 rounded-2xl backdrop-blur-md"
              style={{
                backgroundColor: "rgba(19, 19, 32, 0.6)",
                border: "1px solid rgba(167, 139, 250, 0.25)",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.15)",
              }}
              data-reveal="slide-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    Cal
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#F8FAFC" }}>
                    Réserver via Cal.com
                  </span>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded font-medium"
                  style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#4ADE80" }}
                >
                  Gratuit
                </div>
              </div>
              <p className="text-xs opacity-60 mb-1 tracking-wider uppercase" style={{ color: "#F8FAFC" }}>
                Discovery call · 30 min
              </p>
              <p className="text-2xl font-bold mb-6" style={{ color: "#F8FAFC" }}>
                Choisir un créneau
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {SLOTS.map((s, i) => (
                  <button
                    key={`${s.day}-${s.time}`}
                    disabled={s.taken}
                    className="p-3 rounded-lg text-left transition-colors"
                    style={{
                      backgroundColor: s.taken
                        ? "transparent"
                        : i === 0
                          ? "rgba(167, 139, 250, 0.18)"
                          : "rgba(248, 250, 252, 0.04)",
                      border: s.taken
                        ? "1px dashed rgba(248, 250, 252, 0.1)"
                        : i === 0
                          ? "1px solid rgba(167, 139, 250, 0.4)"
                          : "1px solid rgba(248, 250, 252, 0.08)",
                      color: s.taken ? "rgba(248, 250, 252, 0.3)" : "#F8FAFC",
                      cursor: s.taken ? "not-allowed" : "pointer",
                    }}
                  >
                    <div className="text-xs opacity-60 mb-1">{s.day}</div>
                    <div className="text-sm font-semibold flex items-center justify-between">
                      {s.time}
                      {s.taken && <span className="text-[10px] opacity-50">Pris</span>}
                    </div>
                  </button>
                ))}
              </div>
              <button
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-md transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  color: "#FFFFFF",
                  boxShadow: "0 0 24px rgba(139, 92, 246, 0.4)",
                }}
              >
                Confirmer le créneau du Mar 10 juin · 14:00
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESOURCES ─── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0A0A0F" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div
              className="text-[11px] mono-tag mb-4 opacity-80"
              style={{ color: "#A78BFA" }}
              data-reveal
            >
              {`{ ressources_gratuites }`}
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl"
              style={{ color: "#F8FAFC" }}
              data-reveal
              data-delay="100"
            >
              Si vous n'êtes pas prêt(e)
              <br />
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#A78BFA",
                }}
              >
                commencez par là
              </span>
              .
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {RESOURCES.map((r, idx) => {
              const Icon = r.icon
              return (
                <a
                  key={r.title}
                  href="#"
                  className="group p-7 rounded-2xl block transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "#131320",
                    border: "1px solid rgba(248, 250, 252, 0.06)",
                  }}
                  data-reveal
                  data-delay={`${idx * 150}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-lg group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: "rgba(167, 139, 250, 0.1)",
                        border: "1px solid rgba(167, 139, 250, 0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#A78BFA" }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-medium"
                      style={{ color: "#A78BFA" }}
                    >
                      {r.type}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#F8FAFC" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm opacity-65 leading-relaxed mb-6" style={{ color: "#F8FAFC" }}>
                    {r.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color: "#A78BFA" }}
                  >
                    {r.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="py-20" style={{ backgroundColor: "#0A0A0F" }}>
        <div className="container max-w-3xl mx-auto px-6">
          <div
            className="p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
            data-reveal
          >
            <div>
              <p
                className="text-2xl font-bold mb-1"
                style={{ color: "#F8FAFC" }}
              >
                Operating
              </p>
              <p className="text-sm opacity-65" style={{ color: "#F8FAFC" }}>
                1 mémo par lundi · 4 200 founders abonnés
              </p>
            </div>
            <div className="flex w-full md:w-auto items-center gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                readOnly
                className="flex-1 md:w-64 px-4 py-3 text-sm rounded-md outline-none"
                style={{
                  backgroundColor: "rgba(10, 10, 15, 0.6)",
                  color: "#F8FAFC",
                  border: "1px solid rgba(248, 250, 252, 0.1)",
                }}
              />
              <button
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-md shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  color: "#FFFFFF",
                }}
              >
                <Send className="w-4 h-4" />
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24" style={{ backgroundColor: "#0A0A0F" }}>
        <div className="container max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="text-[11px] mono-tag mb-4 opacity-80"
              style={{ color: "#A78BFA" }}
              data-reveal
            >
              {`{ faq }`}
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#F8FAFC" }}
              data-reveal
              data-delay="100"
            >
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <details
                key={faq.q}
                className="group p-6 rounded-xl"
                style={{
                  backgroundColor: "#131320",
                  border: "1px solid rgba(248, 250, 252, 0.06)",
                }}
                data-reveal
                data-delay={`${idx * 100}`}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium pr-4" style={{ color: "#F8FAFC" }}>
                    {faq.q}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 group-open:rotate-90 transition-transform"
                    style={{ color: "#A78BFA" }}
                  />
                </summary>
                <p className="mt-4 text-sm opacity-70 leading-relaxed" style={{ color: "#F8FAFC" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-12"
        style={{
          backgroundColor: "#0A0A0F",
          color: "#F8FAFC",
          borderTop: "1px solid rgba(248, 250, 252, 0.06)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
              }}
            >
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <div>
              <p className="text-sm font-semibold">{BRAND}</p>
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                {TAGLINE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity inline-flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Mentions légales
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              CGV
            </a>
          </div>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Marie Dubois Coaching
          </p>
        </div>
      </footer>
    </div>
  )
}

export function CoachDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Coach & Consultant</span>
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
