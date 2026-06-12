import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
  Calendar,
  Stethoscope,
  Heart,
  Baby,
  Activity,
  Accessibility,
  Bike,
  Train,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  ChevronDown,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Dr Camille Lambert"
const TITLE = "Médecin généraliste"
const SUBTITLE = "Cabinet médical · Paris 15e"
const PHONE = "01 45 32 18 47"

const NAV = ["Présentation", "Consultations", "Le cabinet", "Doctolib"]

const SPECIALTIES = [
  {
    icon: Stethoscope,
    title: "Médecine générale",
    description:
      "Consultations adultes, suivi médical global, prescriptions et certificats.",
    duration: "30 min",
  },
  {
    icon: Baby,
    title: "Suivi pédiatrique",
    description:
      "Consultations nourrissons et enfants, vaccinations, examens obligatoires.",
    duration: "30 min",
  },
  {
    icon: Heart,
    title: "Suivi gynécologique",
    description:
      "Frottis, prescription contraception, suivi de grossesse à bas risque.",
    duration: "45 min",
  },
  {
    icon: Activity,
    title: "Bilan annuel & prévention",
    description:
      "Bilan complet, dépistage, conseils nutrition et activité physique.",
    duration: "45 min",
  },
]

const TEAM = [
  {
    name: "Dr Camille Lambert",
    role: "Médecin généraliste · Fondatrice",
    diploma: "Diplômée Paris Descartes 2015",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dr Léa Mercier",
    role: "Médecin généraliste",
    diploma: "Diplômée Sorbonne Université 2017",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=85",
  },
]

const FIRST_VISIT = [
  {
    step: "01",
    title: "Réserver en ligne",
    description:
      "Choisissez le créneau qui vous convient sur Doctolib, 24h/24, sans appel.",
  },
  {
    step: "02",
    title: "Préparer votre visite",
    description:
      "Apportez votre carte vitale, mutuelle et carnet de santé. Liste de vos traitements.",
  },
  {
    step: "03",
    title: "La consultation",
    description:
      "Échange complet sur votre motif, examen clinique et discussion du plan de soins.",
  },
  {
    step: "04",
    title: "Suivi & ordonnance",
    description:
      "Ordonnance envoyée par mail si vous le souhaitez. Téléconsultation possible.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Dr Lambert prend le temps d'écouter et d'expliquer. Cabinet propre, secrétariat agréable, jamais d'attente. On se sent en confiance.",
    author: "Patient depuis 2021",
    rating: 5,
  },
  {
    quote:
      "Très satisfaite du suivi de ma grossesse. Approche douce et pédagogique. Je recommande à mes amies du quartier.",
    author: "Patiente depuis 2022",
    rating: 5,
  },
  {
    quote:
      "Toujours disponible en cas d'urgence pour les enfants. La téléconsultation pour les renouvellements d'ordonnance change tout.",
    author: "Famille patiente",
    rating: 5,
  },
]

const PRACTICAL = [
  { icon: Train, label: "Métro Volontaires (12) à 2 min" },
  { icon: Bike, label: "Vélib' station Cambronne à 100m" },
  { icon: Accessibility, label: "Accès PMR · Ascenseur" },
  { icon: ShieldCheck, label: "Cabinet conventionné · Secteur 1" },
]

const HOURS = [
  { day: "Lundi — Jeudi", slots: "08h30 – 19h30" },
  { day: "Vendredi", slots: "08h30 – 18h00" },
  { day: "Samedi", slots: "09h00 – 13h00 · Sans RDV" },
  { day: "Dimanche", slots: "Fermé · SOS Médecins 3624" },
]

const FAQS = [
  {
    q: "Acceptez-vous la carte Vitale ?",
    a: "Oui, télétransmission directe vers votre caisse et votre mutuelle. Aucune avance de frais avec tiers payant intégral.",
  },
  {
    q: "Faites-vous des téléconsultations ?",
    a: "Oui, pour les renouvellements d'ordonnance, le suivi de pathologies chroniques et certaines urgences mineures. Tarif identique à la consultation en cabinet.",
  },
  {
    q: "Comment obtenir un rendez-vous urgent ?",
    a: "Des créneaux d'urgence sont libérés chaque matin sur Doctolib. En dehors des heures, contactez SOS Médecins au 3624.",
  },
  {
    q: "Recevez-vous les enfants ?",
    a: "Oui, suivi des nourrissons et enfants jusqu'à 16 ans, vaccinations, examens obligatoires et certificats de sport.",
  },
]

export function MedicalMockup() {
  return (
    <div
      className="medical-mockup"
      style={{
        backgroundColor: "#F7F9FB",
        color: "#0C1929",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
      />
      <MockupAnimations scope="medical-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        .medical-mockup .btn-soft {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 600;
          letter-spacing: 0;
          padding: 0.85rem 1.5rem;
          border-radius: 999px;
          font-size: 0.875rem;
          background: #0EA5E9;
          color: #FFFFFF;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset,
            0 1px 2px rgba(14, 165, 233, 0.3),
            0 8px 16px -4px rgba(14, 165, 233, 0.25);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.15s, box-shadow 0.2s;
        }
        .medical-mockup .btn-soft:hover {
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset,
            0 1px 2px rgba(14, 165, 233, 0.4),
            0 12px 20px -4px rgba(14, 165, 233, 0.35);
        }
        .medical-mockup .btn-ghost {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 500;
          letter-spacing: 0;
          padding: 0.85rem 1.5rem;
          border-radius: 999px;
          font-size: 0.875rem;
          color: #0C1929;
          background: #FFFFFF;
          border: 1px solid rgba(12, 25, 41, 0.12);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 1px 2px rgba(12, 25, 41, 0.04);
        }
        .medical-mockup .btn-ghost:hover { background: #F0F9FF; }
      `}} />

      {/* ─── TOP BAND ─── */}
      <div
        className="text-xs"
        style={{ backgroundColor: "#0C1929", color: "#F7F9FB" }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <span className="opacity-80 inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#38BDF8" }} />
            <span className="hidden md:inline">Secteur 1 · Conventionné · Tiers payant intégral</span>
            <span className="md:hidden">Conventionné · Secteur 1</span>
          </span>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 font-medium"
            style={{ color: "#38BDF8" }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Secrétariat ·&nbsp;</span>
            {PHONE}
          </a>
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(247, 249, 251, 0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(12, 25, 41, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-full"
              style={{ backgroundColor: "#0C1929", color: "#38BDF8" }}
            >
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-medium text-xl italic"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#0C1929",
                }}
              >
                {BRAND}
              </span>
              <span
                className="text-[10px] tracking-[0.25em] uppercase font-medium opacity-60"
                style={{ color: "#0C1929" }}
              >
                {SUBTITLE}
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-9 text-sm">
            {NAV.map((item) => (
              <span
                key={item}
                className="opacity-75 hover:opacity-100 cursor-default transition-opacity"
                style={{ color: "#0C1929" }}
              >
                {item}
              </span>
            ))}
          </nav>
          <button
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-md"
            style={{ backgroundColor: "#0EA5E9", color: "#FFFFFF" }}
          >
            <Calendar className="w-4 h-4" />
            Doctolib
          </button>
        </div>
      </header>

      {/* ─── HERO · CENTERED EDITORIAL ─── */}
      <section
        className="relative overflow-hidden pt-20 pb-12 md:pt-28"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, #DCEFFA 0%, #F7F9FB 60%)",
        }}
      >
        {/* Floating plus signs decoration */}
        <svg
          className="absolute top-16 left-12 hidden md:block opacity-30"
          width="28" height="28" viewBox="0 0 28 28"
          data-anim="float"
        >
          <path d="M14 4v20M4 14h20" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg
          className="absolute top-32 right-20 hidden md:block opacity-25"
          width="20" height="20" viewBox="0 0 20 20"
          data-anim="float"
          style={{ animationDelay: "1s" }}
        >
          <path d="M10 3v14M3 10h14" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg
          className="absolute bottom-32 left-1/3 hidden md:block opacity-20"
          width="16" height="16" viewBox="0 0 16 16"
          data-anim="float"
          style={{ animationDelay: "2s" }}
        >
          <path d="M8 2v12M2 8h12" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <div className="container max-w-5xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-10 rounded-full"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(14, 165, 233, 0.25)",
              boxShadow: "0 1px 2px rgba(12, 25, 41, 0.04)",
            }}
            data-anim="fade-down"
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#22C55E" }}
            />
            <span
              className="text-xs tracking-wide font-medium"
              style={{ color: "#0369A1" }}
            >
              Nouveaux patients acceptés
            </span>
          </div>

          <h1
            className="leading-[1] mb-10 italic max-w-4xl mx-auto"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#0C1929",
              fontSize: "clamp(3rem, 7vw, 6rem)",
            }}
            data-anim="fade-up"
            data-delay="100"
          >
            On prend le temps.
            <br />
            <span style={{ color: "#0EA5E9" }}>C'est tout.</span>
          </h1>

          <p
            className="text-lg md:text-xl opacity-70 mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#0C1929" }}
            data-anim="fade-up"
            data-delay="300"
          >
            Cabinet médical du 15e arrondissement. Médecine générale,
            suivi familial, prévention. 30 min par consultation,
            tiers payant intégral.
          </p>

          <div
            className="inline-flex flex-wrap items-center justify-center gap-3 mb-16"
            data-anim="fade-up"
            data-delay="500"
          >
            <button className="btn-soft">
              <Calendar className="w-4 h-4" />
              Prendre RDV sur Doctolib
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-ghost">
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </div>

        {/* Horizontal trust strip — 4 columns avec separateurs */}
        <div className="container max-w-6xl mx-auto px-6 mt-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(12, 25, 41, 0.08)",
              borderRadius: "16px",
              boxShadow: "0 1px 3px rgba(12, 25, 41, 0.04), 0 20px 40px -16px rgba(12, 25, 41, 0.06)",
              ["--tw-divide-opacity" as string]: 0.08,
            }}
            data-anim="fade-up"
            data-delay="700"
          >
            {[
              { value: "25€", label: "Consultation", sub: "Tiers payant intégral" },
              { value: "30 min", label: "Par patient", sub: "On ne court pas" },
              { value: "< 48 h", label: "Délai RDV moyen", sub: "Urgences chaque matin" },
              { value: "4.9 /5", label: "412 avis Doctolib", sub: "98 % de satisfaction" },
            ].map((s, idx) => (
              <div
                key={s.label}
                className="px-6 py-7 text-left"
                style={{ borderColor: "rgba(12, 25, 41, 0.06)" }}
                data-anim="fade-up"
                data-delay={`${800 + idx * 100}`}
              >
                <div
                  className="text-3xl md:text-4xl italic mb-2 leading-none"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#0EA5E9",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-1"
                  style={{ color: "#0C1929" }}
                >
                  {s.label}
                </div>
                <div className="text-xs opacity-60" style={{ color: "#0C1929" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ECG HEARTBEAT DIVIDER ─── */}
      <div
        className="relative h-8 flex items-center overflow-hidden"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <svg
          className="w-full"
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
          aria-hidden="true"
        >
          <path
            d="M0 16 L200 16 L210 16 L215 8 L220 24 L225 4 L230 28 L235 16 L260 16 L270 16 L275 12 L280 20 L285 16 L500 16 L510 16 L515 8 L520 24 L525 4 L530 28 L535 16 L560 16 L800 16 L810 16 L815 12 L820 20 L825 16 L1100 16 L1110 16 L1115 8 L1120 24 L1125 4 L1130 28 L1135 16 L1200 16"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* ─── TRUST STRIP ─── */}
      <section
        className="py-10"
        style={{
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid rgba(12, 25, 41, 0.06)",
          borderBottom: "1px solid rgba(12, 25, 41, 0.06)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PRACTICAL.map((p, idx) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="flex items-center gap-3"
                  data-reveal
                  data-delay={`${idx * 100}`}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ backgroundColor: "#E0F2FE" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#0369A1" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#0C1929" }}
                  >
                    {p.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SPECIALTIES ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F7F9FB" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nos consultations"
            title="Une médecine de proximité, complète"
            subtitle="Médecine générale, suivi familial, pédiatrie et prévention. Tous les âges, tous les motifs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {SPECIALTIES.map((s, idx) => {
              const Icon = s.icon
              return (
                <article
                  key={s.title}
                  className="p-8 group"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    border: "1px solid rgba(12, 25, 41, 0.06)",
                    boxShadow: "0 1px 3px rgba(12, 25, 41, 0.04)",
                  }}
                  data-reveal
                  data-delay={`${idx * 120}`}
                  data-hover="lift"
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#E0F2FE" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#0369A1" }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-2xl italic mb-3"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#0C1929",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-5" style={{ color: "#0C1929" }}>
                    {s.description}
                  </p>
                  <div
                    className="flex items-center gap-2 text-xs pt-4"
                    style={{
                      borderTop: "1px solid rgba(12, 25, 41, 0.06)",
                      color: "#0C1929",
                    }}
                  >
                    <Clock className="w-3.5 h-3.5 opacity-50" />
                    <span className="opacity-70 font-medium">Durée moyenne · {s.duration}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── DOCTOR PRESENTATION ─── */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="L'équipe"
            title="Deux médecins, une approche"
            subtitle="Une pratique médicale humaine, formée régulièrement aux recommandations HAS."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {TEAM.map((member, idx) => (
              <article
                key={member.name}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl"
                style={{
                  backgroundColor: "#F7F9FB",
                  border: "1px solid rgba(12, 25, 41, 0.06)",
                }}
                data-reveal
                data-delay={`${idx * 200}`}
                data-hover="lift"
              >
                <div
                  className="relative w-full md:w-44 aspect-[4/5] overflow-hidden shrink-0 rounded-xl"
                  data-hover="zoom-img"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div
                    className="text-[10px] tracking-[0.25em] uppercase mb-3 font-medium"
                    style={{ color: "#0EA5E9" }}
                  >
                    {idx === 0 ? "Fondatrice du cabinet" : "Associée"}
                  </div>
                  <h3
                    className="text-3xl italic mb-2"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#0C1929",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium opacity-70 mb-1" style={{ color: "#0C1929" }}>
                    {member.role}
                  </p>
                  <p className="text-xs opacity-60 mb-4" style={{ color: "#0C1929" }}>
                    {member.diploma}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {[
                      "Inscrite à l'Ordre des Médecins",
                      "Numéro RPPS vérifiable",
                      "Formations continues annuelles",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: "#0C1929" }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#0EA5E9" }} />
                        <span className="opacity-80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIRST VISIT WALKTHROUGH ─── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#0C1929" }}
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#0EA5E9" }}
          data-anim="float"
        />
        <div className="container max-w-7xl mx-auto px-6 relative">
          <SectionHeader
            eyebrow="Premier rendez-vous"
            title="Comment ça se passe"
            subtitle="Un parcours simple, sans surprise, du premier clic à la sortie de la consultation."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {FIRST_VISIT.map((step, i) => (
              <div
                key={step.step}
                className="relative"
                data-reveal
                data-delay={`${i * 150}`}
              >
                {i < FIRST_VISIT.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-20 right-0 h-px"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(56, 189, 248, 0.4) 50%, transparent 50%)",
                      backgroundSize: "10px 1px",
                    }}
                  />
                )}
                <div
                  className="text-7xl italic leading-none mb-4 opacity-30"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#38BDF8",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-2xl italic mb-3"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#F7F9FB",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ color: "#F7F9FB" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F7F9FB" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Avis patients"
            title="4.9/5 sur Doctolib"
            subtitle="412 avis vérifiés par Doctolib auprès de patients suivis au cabinet."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-8 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(12, 25, 41, 0.06)",
                  boxShadow: "0 1px 3px rgba(12, 25, 41, 0.04)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#0EA5E9" stroke="#0EA5E9" />
                  ))}
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-6 italic"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#0C1929",
                  }}
                >
                  « {t.quote} »
                </blockquote>
                <figcaption
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(12, 25, 41, 0.06)" }}
                >
                  <div className="text-xs font-medium opacity-60 uppercase tracking-wider" style={{ color: "#0C1929" }}>
                    {t.author}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Questions fréquentes"
            title="Tout ce qu'il faut savoir"
          />

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, idx) => (
              <details
                key={faq.q}
                className="group p-6 rounded-xl"
                style={{
                  backgroundColor: "#F7F9FB",
                  border: "1px solid rgba(12, 25, 41, 0.06)",
                }}
                data-reveal
                data-delay={`${idx * 80}`}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span
                    className="font-medium pr-4"
                    style={{ color: "#0C1929" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform"
                    style={{ color: "#0EA5E9" }}
                  />
                </summary>
                <p
                  className="mt-4 text-sm leading-relaxed opacity-75"
                  style={{ color: "#0C1929" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
        }}
      >
        <div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#BAE6FD" }}
          data-anim="float"
        />
        <div className="container max-w-4xl mx-auto px-6 text-center relative" data-reveal>
          <Calendar className="w-8 h-8 mx-auto mb-6" style={{ color: "#FFFFFF" }} strokeWidth={1.5} />
          <h2
            className="leading-tight mb-8 italic text-white"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
            }}
          >
            Prêt à prendre
            <br />
            <span className="opacity-80">rendez-vous ?</span>
          </h2>
          <p className="text-lg text-white/85 mb-12 max-w-xl mx-auto">
            Réservation en ligne 24h/24 via Doctolib. Premier RDV disponible
            sous 48h en moyenne, créneaux d'urgence libérés chaque matin.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex items-center gap-3 px-8 py-5 text-base font-semibold rounded-md"
              style={{ backgroundColor: "#FFFFFF", color: "#0369A1" }}
            >
              <Calendar className="w-5 h-5" />
              Réserver sur Doctolib
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-8 py-5 text-base font-semibold rounded-md"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRACTICAL INFO ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F7F9FB" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#0EA5E9" }}
              >
                Adresse
              </div>
              <p
                className="text-2xl italic leading-snug mb-3"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#0C1929",
                }}
              >
                42 avenue Émile Zola
                <br />
                75015 Paris
              </p>
              <p className="text-sm opacity-65" style={{ color: "#0C1929" }}>
                Bâtiment B, 3e étage avec ascenseur · Cabinet accessible PMR
              </p>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#0EA5E9" }}
              >
                Horaires
              </div>
              <ul className="space-y-3">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-baseline gap-4 pb-2"
                    style={{ borderBottom: "1px solid rgba(12, 25, 41, 0.06)" }}
                  >
                    <span
                      className="italic text-sm"
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        color: "#0C1929",
                      }}
                    >
                      {h.day}
                    </span>
                    <span className="text-xs tracking-wide opacity-70" style={{ color: "#0C1929" }}>
                      {h.slots}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#0EA5E9" }}
              >
                Contact
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#0C1929" }}>
                  <Phone className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  {PHONE}
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#0C1929" }}>
                  <Mail className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  cabinet@lambert-medecin.fr
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#0C1929" }}>
                  <MapPin className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  Métro Avenue Émile Zola (10)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-10"
        style={{
          backgroundColor: "#0C1929",
          color: "#F7F9FB",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: "#0EA5E9", color: "#FFFFFF" }}
            >
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <p
                className="text-lg italic"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#38BDF8",
                }}
              >
                {BRAND}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                {SUBTITLE}
              </p>
            </div>
          </div>
          <p className="text-xs opacity-50 text-center md:text-right">
            © {new Date().getFullYear()} · RPPS vérifiable · Inscrit Conseil de l'Ordre
            <br />
            Mentions légales · Politique de confidentialité
          </p>
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
  const textColor = light ? "#F7F9FB" : "#0C1929"
  return (
    <div className="text-center max-w-2xl mx-auto" data-reveal>
      <div
        className="inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase mb-4 font-semibold"
        style={{ color: "#0EA5E9" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path
            d="M5 1v8M1 5h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {eyebrow}
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path
            d="M5 1v8M1 5h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2
        className="italic leading-tight"
        style={{
          fontFamily: "'DM Serif Display', serif",
          color: textColor,
          fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base opacity-70 mt-6 leading-relaxed"
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function MedicalDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Cabinet médical</span>
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
