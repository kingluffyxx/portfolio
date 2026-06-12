import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Instagram,
  Star,
  Mail,
  Calendar,
  Check,
  Heart,
  Sparkles,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Maison Rosée"
const TAGLINE = "Salon de coiffure & soins"
const PHONE = "01 43 56 78 90"
const ADDRESS = "27 rue Saint-Bernard · 75011 Paris"

const NAV = ["Prestations", "L'équipe", "Réserver", "Boutique"]

const SERVICES = [
  {
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    title: "Coupe & brushing",
    duration: "1h",
    price: "55",
    description: "Diagnostic, coupe sur-mesure, soin et coiffage.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80",
    title: "Coloration",
    duration: "2h30",
    price: "75",
    badge: "Sans ammoniaque",
    description: "Naturelle, sans ammoniaque, soin réparateur inclus.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=1000&q=80",
    title: "Soin botanique",
    duration: "45min",
    price: "45",
    description: "Rituel cuir chevelu, massage et masque réparateur.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
    title: "Coiffure mariage",
    duration: "Essai inclus",
    price: "180",
    badge: "Sur RDV",
    description: "Essai inclus, déplacement possible sur Paris.",
  },
]

const TEAM = [
  {
    name: "Sarah Lefèvre",
    role: "Fondatrice · Coloriste experte",
    bio: "Formée chez L'Oréal Professionnel et Davines. 12 ans d'expérience.",
    image:
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Inès Bertrand",
    role: "Coiffeuse · Spécialiste coupes",
    bio: "Diplômée du Studio Toni&Guy Londres. 8 ans en salon.",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Léa Marchand",
    role: "Coiffeuse · Mariage & soin",
    bio: "Maquilleuse certifiée, spécialiste des coiffures d'événement.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Je viens depuis 2 ans, jamais déçue. Sarah comprend exactement ce que je veux et la coloration tient des semaines.",
    author: "Margot D.",
    role: "Cliente fidèle",
  },
  {
    quote:
      "Salon hyper agréable, équipe à l'écoute. La réservation en ligne change la vie, on trouve toujours un créneau qui convient.",
    author: "Inès B.",
    role: "Cliente depuis 2023",
  },
  {
    quote:
      "Le soin botanique est un vrai moment de détente. Mes cheveux n'ont jamais été aussi brillants. Je recommande à 100%.",
    author: "Camille H.",
    role: "Cliente régulière",
  },
]

const HOURS = [
  { day: "Mardi — Vendredi", slots: "10h – 19h" },
  { day: "Samedi", slots: "10h – 19h" },
  { day: "Dimanche — Lundi", slots: "Fermé" },
]

const BRANDS = ["DAVINES", "OLAPLEX", "KÉRASTASE", "CHRISTOPHE ROBIN", "RAHUA"]

const TIME_SLOTS = ["09:30", "10:00", "11:30", "14:00", "15:30", "17:00"]

export function SalonMockup() {
  return (
    <div
      className="salon-mockup"
      style={{
        backgroundColor: "#FDF8F4",
        color: "#1F1110",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Mrs+Saint+Delafield&display=swap"
      />
      <MockupAnimations scope="salon-mockup" />

      {/* ─── TOP BAND ─── */}
      <div
        className="text-xs"
        style={{ backgroundColor: "#1F1110", color: "#FDF8F4" }}
      >
        <div className="container max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <span className="opacity-80 inline-flex items-center gap-2">
            <Sparkles className="w-3 h-3" style={{ color: "#E8B4B8" }} />
            <span className="hidden md:inline">Réservation 24/7 · Programme fidélité</span>
            <span className="md:hidden">Réservation 24/7</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#84cc16" }} />
            <span style={{ color: "#E8B4B8" }}>Prochain créneau&nbsp;: demain 14h30</span>
          </span>
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(253, 248, 244, 0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(31, 17, 16, 0.08)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="#" className="flex flex-col leading-tight">
            <span
              className="text-3xl md:text-5xl tracking-tight"
              style={{
                fontFamily: "'Mrs Saint Delafield', cursive",
                color: "#B8336A",
                lineHeight: "0.9",
              }}
            >
              {BRAND}
            </span>
            <span
              className="text-[10px] tracking-[0.35em] uppercase opacity-60 mt-0.5"
              style={{ color: "#1F1110" }}
            >
              Paris 11
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {NAV.map((item) => (
              <span
                key={item}
                className="opacity-70 hover:opacity-100 cursor-default transition-opacity"
                style={{ color: "#1F1110" }}
              >
                {item}
              </span>
            ))}
          </nav>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium rounded-full"
            style={{
              backgroundColor: "#1F1110",
              color: "#FDF8F4",
            }}
          >
            <Calendar className="w-3.5 h-3.5" />
            Réserver
          </button>
        </div>
      </header>

      {/* ─── HERO · MAGAZINE 3-COLS ─── */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Decorative blob */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{ backgroundColor: "#E8B4B8" }}
          data-anim="float"
        />

        <div className="container max-w-7xl mx-auto px-6 relative">
          {/* Top metadata bar */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div
              className="flex items-center gap-3"
              data-anim="fade-down"
            >
              <FloralOrnament />
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-medium"
                style={{ color: "#B8336A" }}
              >
                Édition Été · No 27
              </span>
              <FloralOrnament flip />
            </div>
            <div
              className="hand text-base hidden md:block"
              style={{ color: "#B8336A", fontFamily: "'Mrs Saint Delafield', cursive", fontSize: "2rem", lineHeight: 1 }}
              data-anim="fade-down"
              data-delay="100"
            >
              juin 2026
            </div>
          </div>

          {/* 3-column hero layout */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
            {/* Left photo column */}
            <div className="col-span-3 md:col-span-3" data-anim="slide-right" data-delay="200">
              <div className="relative aspect-[3/5] overflow-hidden" style={{ borderRadius: "999px 999px 4px 4px" }} data-hover="zoom-img">
                <Image
                  src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=85"
                  alt="Couleur lavande"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 768px) 25vw, 300px"
                />
              </div>
              <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase opacity-60 mt-3 text-center" style={{ color: "#1F1110" }}>
                Couleur N°4
              </p>
            </div>

            {/* Center text */}
            <div className="col-span-6 md:col-span-6 text-center" data-anim="fade-up" data-delay="100">
              <p
                className="hand text-2xl md:text-3xl mb-2"
                style={{
                  color: "#B8336A",
                  fontFamily: "'Mrs Saint Delafield', cursive",
                  lineHeight: 1,
                }}
              >
                un peu de temps,
              </p>
              <h1
                className="italic font-light mb-6 leading-[0.85]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#1F1110",
                  fontSize: "clamp(2.75rem, 8vw, 7rem)",
                }}
                data-anim="fade-up"
                data-delay="300"
              >
                beaucoup
                <br />
                <span style={{ color: "#B8336A" }}>de soin.</span>
              </h1>
              <p
                className="serif italic text-base md:text-lg opacity-75 mb-8 max-w-md mx-auto leading-relaxed"
                style={{ color: "#1F1110", fontFamily: "'Cormorant Garamond', serif" }}
                data-anim="fade-up"
                data-delay="500"
              >
                Salon de coiffure & soins · Paris 11<sup>e</sup>. Coupe, couleur
                naturelle, soin botanique et coiffure d'événement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4" data-anim="fade-up" data-delay="700">
                <button
                  className="inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium rounded-full"
                  style={{ backgroundColor: "#1F1110", color: "#FDF8F4" }}
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#" className="hand text-xl border-b border-current pb-1" style={{ color: "#B8336A", fontFamily: "'Mrs Saint Delafield', cursive", fontSize: "1.75rem", lineHeight: 1 }}>
                  voir les prestations →
                </a>
              </div>
            </div>

            {/* Right photo column */}
            <div className="col-span-3 md:col-span-3" data-anim="slide-left" data-delay="400">
              <div className="relative aspect-[3/5] overflow-hidden mb-3" style={{ borderRadius: "4px 4px 999px 999px" }} data-hover="zoom-img">
                <Image
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=85"
                  alt="Intérieur salon"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 768px) 25vw, 300px"
                />
              </div>
              <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase opacity-60 mt-3 text-center" style={{ color: "#1F1110" }}>
                Salon · 75011
              </p>
            </div>
          </div>

          {/* Bottom row of stats — separated by hand-drawn rule */}
          <div
            className="mt-14 pt-8 grid grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            style={{ borderTop: "1px solid rgba(31, 17, 16, 0.12)" }}
            data-anim="fade-up"
            data-delay="800"
          >
            {[
              { v: "4.9", l: "Google · 287 avis" },
              { v: "12", l: "ans d'existence" },
              { v: "3", l: "coiffeuses" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="italic mb-1 leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#B8336A",
                    fontSize: "2.5rem",
                    fontWeight: 400,
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="text-[10px] tracking-[0.25em] uppercase opacity-60 font-medium"
                  style={{ color: "#1F1110" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section
        className="py-12"
        style={{
          backgroundColor: "#FDF8F4",
          borderTop: "1px solid rgba(31, 17, 16, 0.06)",
          borderBottom: "1px solid rgba(31, 17, 16, 0.06)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <p
            className="text-center text-[10px] tracking-[0.35em] uppercase opacity-50 mb-8"
            style={{ color: "#1F1110" }}
          >
            — Les marques que nous utilisons
          </p>
          <div className="marquee-mask">
            <div data-anim="marquee" className="opacity-70">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="text-sm md:text-base tracking-[0.25em] font-light whitespace-nowrap"
                  style={{ color: "#1F1110" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#FDF8F4" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nos prestations signature"
            title="Un soin, un rituel"
            subtitle="Quatre prestations phares pensées avec des produits naturels et un temps suspendu pour vous."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {SERVICES.map((s, idx) => (
              <article
                key={s.title}
                className="group"
                data-reveal
                data-delay={`${idx * 120}`}
                data-hover="zoom-img"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden mb-5"
                  style={{ borderRadius: "4px" }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {s.badge && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium"
                      style={{
                        backgroundColor: "#FDF8F4",
                        color: "#B8336A",
                        borderRadius: "2px",
                      }}
                    >
                      {s.badge}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-baseline mb-2 gap-3">
                  <h3
                    className="text-2xl italic font-light leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#1F1110",
                    }}
                  >
                    {s.title}
                  </h3>
                  <span
                    className="text-xl italic font-medium shrink-0"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#B8336A",
                    }}
                  >
                    {s.price}€
                  </span>
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-3"
                  style={{ color: "#1F1110" }}
                >
                  Durée · {s.duration}
                </div>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ color: "#1F1110" }}
                >
                  {s.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all"
              style={{ color: "#B8336A" }}
            >
              Voir toutes nos prestations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section
        className="py-20 md:py-32 relative"
        style={{ backgroundColor: "#F4E4DE" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative" data-reveal="slide-right">
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-50"
                style={{ backgroundColor: "#E8B4B8" }}
                data-anim="float"
              />
              <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: "4px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=85"
                  alt="L'intérieur du salon Maison Rosée"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div data-reveal="slide-left">
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#B8336A" }}
              >
                — Notre histoire
              </div>
              <h2
                className="leading-[1] mb-8 italic font-light"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#1F1110",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                Un salon ouvert
                <br />
                en <span style={{ color: "#B8336A" }}>2013</span>,
                <br />
                une équipe qui prend le temps.
              </h2>
              <p
                className="text-lg leading-relaxed opacity-80 mb-6 font-light"
                style={{ color: "#1F1110" }}
              >
                Sarah a ouvert Maison Rosée en 2013, après dix ans chez les
                grands noms de la coiffure parisienne. Elle voulait un salon
                différent&nbsp;: pas de cadence, des produits qu'elle aurait
                choisis pour elle-même.
              </p>
              <p
                className="text-lg leading-relaxed opacity-80 mb-10 font-light"
                style={{ color: "#1F1110" }}
              >
                Aujourd'hui Inès, Léa et Sarah accueillent 6 clientes par jour
                maximum. Trois fauteuils, trois rituels, du temps pour chacune.
              </p>
              <ul className="space-y-3">
                {[
                  "Produits Davines, Olaplex et Christophe Robin",
                  "Marques 100% véganes et cruelty-free",
                  "Diagnostic offert lors du premier rendez-vous",
                  "Carte fidélité : -15% à la 6e visite",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3"
                    style={{ color: "#1F1110" }}
                  >
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#B8336A" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#FDF8F4" }} strokeWidth={3} />
                    </div>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#FDF8F4" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="L'équipe"
            title="Trois coiffeuses, trois sensibilités"
            subtitle="Chacune avec sa spécialité, formée régulièrement aux dernières techniques."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {TEAM.map((member, idx) => (
              <article
                key={member.name}
                className="group"
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="zoom-img"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden mb-6"
                  style={{ borderRadius: "4px" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-medium"
                    style={{
                      backgroundColor: "#FDF8F4",
                      color: "#B8336A",
                      borderRadius: "2px",
                    }}
                  >
                    0{idx + 1}
                  </div>
                </div>
                <h3
                  className="text-3xl italic font-light mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1F1110",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4"
                  style={{ color: "#B8336A" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ color: "#1F1110" }}
                >
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#1F1110" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#B8336A" }}
          data-anim="float"
        />
        <div className="container max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div
              className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: "#E8B4B8" }}
            >
              — Avis clientes
            </div>
            <h2
              className="leading-tight italic font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#FDF8F4",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              4.9/5 sur Google
              <br />
              <span style={{ color: "#E8B4B8" }}>287 avis vérifiés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-8"
                style={{
                  backgroundColor: "rgba(253, 248, 244, 0.04)",
                  border: "1px solid rgba(232, 180, 184, 0.15)",
                  borderRadius: "4px",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
                data-hover="lift"
              >
                <div className="flex items-center gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#E8B4B8" stroke="#E8B4B8" />
                  ))}
                </div>
                <blockquote
                  className="text-lg leading-relaxed italic font-light mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#FDF8F4",
                  }}
                >
                  « {t.quote} »
                </blockquote>
                <figcaption className="pt-5" style={{ borderTop: "1px solid rgba(232, 180, 184, 0.15)" }}>
                  <div className="font-medium text-sm" style={{ color: "#E8B4B8" }}>
                    {t.author}
                  </div>
                  <div className="text-xs opacity-60 mt-1" style={{ color: "#FDF8F4" }}>
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#F4E4DE" }}
      >
        <div className="container max-w-4xl mx-auto px-6 text-center relative" data-reveal>
          <Heart className="w-8 h-8 mx-auto mb-6" style={{ color: "#B8336A" }} strokeWidth={1.5} data-anim="heartbeat" />
          <h2
            className="leading-tight mb-8 italic font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#1F1110",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
            }}
          >
            Offrez-vous
            <br />
            un <span style={{ color: "#B8336A" }}>moment pour vous</span>.
          </h2>
          <p
            className="text-lg opacity-75 mb-12 max-w-xl mx-auto font-light"
            style={{ color: "#1F1110" }}
          >
            Réservation en ligne 24h/24, ou par téléphone aux heures
            d'ouverture. Nous vous rappelons sous 2h.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex items-center gap-3 px-8 py-5 text-xs uppercase tracking-[0.25em] font-medium rounded-full"
              style={{ backgroundColor: "#1F1110", color: "#FDF8F4" }}
            >
              <Calendar className="w-4 h-4" />
              Réserver en ligne
            </button>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-8 py-5 text-xs uppercase tracking-[0.25em] font-medium rounded-full"
              style={{
                backgroundColor: "transparent",
                color: "#1F1110",
                border: "1px solid rgba(31, 17, 16, 0.3)",
              }}
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRACTICAL INFO ─── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FDF8F4" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#B8336A" }}
              >
                Adresse
              </div>
              <p
                className="text-2xl italic font-light leading-snug mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#1F1110",
                }}
              >
                27 rue Saint-Bernard
                <br />
                75011 Paris
              </p>
              <p className="text-sm opacity-60" style={{ color: "#1F1110" }}>
                Métro Bastille ou Voltaire · Parking Saint-Antoine à 3 min.
              </p>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#B8336A" }}
              >
                Horaires
              </div>
              <ul className="space-y-3">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-baseline gap-4 pb-2"
                    style={{ borderBottom: "1px solid rgba(31, 17, 16, 0.08)" }}
                  >
                    <span
                      className="italic font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#1F1110",
                      }}
                    >
                      {h.day}
                    </span>
                    <span className="text-xs tracking-wider opacity-70" style={{ color: "#1F1110" }}>
                      {h.slots}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4 font-medium"
                style={{ color: "#B8336A" }}
              >
                Contact
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#1F1110" }}>
                  <Phone className="w-4 h-4" style={{ color: "#B8336A" }} />
                  {PHONE}
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#1F1110" }}>
                  <Mail className="w-4 h-4" style={{ color: "#B8336A" }} />
                  bonjour@maison-rosee.fr
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#1F1110" }}>
                  <Instagram className="w-4 h-4" style={{ color: "#B8336A" }} />
                  @maison.rosee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-12"
        style={{
          backgroundColor: "#1F1110",
          color: "#FDF8F4",
          borderTop: "1px solid rgba(232, 180, 184, 0.1)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-2xl italic font-medium"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#E8B4B8",
              }}
            >
              {BRAND}
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mt-1">
              {TAGLINE} · Paris 11
            </p>
          </div>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Maison Rosée · Tous droits réservés
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
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-4">
        <FloralOrnament />
        <span
          className="text-[10px] tracking-[0.4em] uppercase font-medium"
          style={{ color: "#B8336A" }}
        >
          {eyebrow}
        </span>
        <FloralOrnament flip />
      </div>
      <h2
        className="italic font-light leading-tight"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#1F1110",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base opacity-70 mt-6 leading-relaxed font-light"
          style={{ color: "#1F1110" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

function FloralOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="36"
      height="10"
      viewBox="0 0 36 10"
      fill="none"
      style={{
        color: "#E8B4B8",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <path
        d="M0 5h24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="28" cy="5" r="1.5" fill="currentColor" opacity="0.6" />
      <path
        d="M31 5c1.5-2 3-2 4 0-1.5 2-3 2-4 0z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  )
}

export function SalonDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Salon de beauté</span>
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
