import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Star,
  Quote,
  Wine,
} from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "L'Atelier des Saveurs"
const TAGLINE = "Bistronomie · Toulouse"

const NAV = ["La maison", "La carte", "Le chef", "Réserver"]

const SIGNATURE_DISHES = [
  {
    title: "Cabillaud de petit bateau",
    description: "Beurre blanc à la vanille, légumes racines glacés au sarrasin grillé.",
    price: "26",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Joue de bœuf braisée 8 heures",
    description: "Polenta crémeuse au parmesan, jus court au vin rouge, oignons fondants.",
    price: "24",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tarte fine aux pommes du Tarn",
    description: "Pâte feuilletée maison, caramel au beurre salé, glace au lait ribot.",
    price: "10",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  },
]

const MENU = {
  entrees: [
    {
      title: "Velouté de potimarron, huile de noisette",
      description: "Crémeux torréfié, brunoise de pomme verte.",
      price: "12",
    },
    {
      title: "Tartare de truite des Pyrénées",
      description: "Citron caviar, aneth, blinis au sarrasin.",
      price: "14",
    },
    {
      title: "Œuf parfait, mousseline de champignons",
      description: "Crumble de noisettes, copeaux de comté affiné 24 mois.",
      price: "13",
    },
  ],
  plats: [
    {
      title: "Cabillaud de petit bateau, beurre blanc",
      description: "Légumes racines glacés, sarrasin grillé.",
      price: "26",
    },
    {
      title: "Joue de bœuf braisée 8h, polenta crémeuse",
      description: "Jus court au vin rouge, oignons fondants.",
      price: "24",
    },
    {
      title: "Risotto au safran, vieilles parmesan",
      description: "Émulsion citronnée, herbes du jardin (option végétarienne).",
      price: "22",
    },
  ],
  desserts: [
    {
      title: "Tarte fine aux pommes, glace au lait ribot",
      description: "Pâte feuilletée maison, caramel au beurre salé.",
      price: "10",
    },
    {
      title: "Mousse chocolat Valrhona, fleur de sel",
      description: "Sablé breton, crème fraîche d'Étrez.",
      price: "11",
    },
    {
      title: "Tuile au sésame, sorbet poire-gingembre",
      description: "Réduction au vin blanc moelleux.",
      price: "9",
    },
  ],
}

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Salle du restaurant",
    span: "lg:col-span-2 lg:row-span-2 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    alt: "Assiette signature",
    span: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    alt: "Cave à vin",
    span: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    alt: "Table dressée",
    span: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
    alt: "Détail dressage",
    span: "aspect-square",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Une cuisine d'une justesse rare. Camille et Thomas savent magnifier le produit sans en faire trop. Notre adresse coup de cœur à Toulouse.",
    author: "Margot D.",
    role: "Cliente depuis 2023",
  },
  {
    quote:
      "Le menu midi à 22€ est l'un des meilleurs rapport qualité/prix de la ville. Service attentionné, ambiance chaleureuse.",
    author: "Pierre L.",
    role: "Habitué du quartier",
  },
  {
    quote:
      "Cave naturelle remarquable, accords mets-vins toujours pertinents. Thomas est un vrai passionné, ça se sent.",
    author: "Sophie M.",
    role: "Sommelière",
  },
]

const HOURS = [
  { day: "Mardi — Vendredi", slots: "12h – 14h · 19h – 23h" },
  { day: "Samedi", slots: "19h – 23h30" },
  { day: "Dimanche — Lundi", slots: "Fermé" },
]

export function RestaurantMockup() {
  return (
    <div
      className="restaurant-mockup"
      style={{
        backgroundColor: "#0E0B08",
        color: "#F5EFE6",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Petit+Formal+Script&display=swap"
      />
      <MockupAnimations scope="restaurant-mockup" />

      {/* ─────────── HEADER ─────────── */}
      <header
        className="sticky top-12 z-30"
        style={{
          backgroundColor: "rgba(14, 11, 8, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(196, 149, 108, 0.15)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex flex-col leading-tight">
            <span
              className="font-medium text-xl md:text-2xl tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#C4956C",
              }}
            >
              {BRAND}
            </span>
            <span
              className="text-[10px] tracking-[0.3em] uppercase opacity-60 mt-0.5"
              style={{ color: "#F5EFE6" }}
            >
              {TAGLINE}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {NAV.map((item) => (
              <span
                key={item}
                className="opacity-70 hover:opacity-100 cursor-default tracking-wide transition-opacity"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </nav>
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium"
            style={{
              color: "#0E0B08",
              backgroundColor: "#C4956C",
              borderRadius: "2px",
            }}
          >
            Réserver
          </button>
        </div>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" data-anim="ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85"
            alt="Table dressée"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,11,8,0.4) 0%, rgba(14,11,8,0.2) 40%, rgba(14,11,8,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" />
          <div className="container max-w-7xl mx-auto px-6 pb-20 md:pb-28 relative">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-3 px-3 py-1.5 mb-6"
                style={{
                  border: "1px solid rgba(196, 149, 108, 0.5)",
                  backgroundColor: "rgba(14, 11, 8, 0.5)",
                  borderRadius: "999px",
                }}
                data-anim="fade-down"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#84cc16" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase font-medium"
                  style={{ color: "#C4956C" }}
                >
                  Ouvert ce soir · 19h – 23h
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 italic font-light"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5EFE6",
                }}
                data-anim="fade-up"
                data-delay="200"
              >
                La cuisine
                <br />
                <span style={{ color: "#C4956C", fontWeight: 500 }}>
                  du marché,
                </span>
                <br />
                sans détour.
              </h1>
              <p
                className="text-lg md:text-xl opacity-80 max-w-xl mb-10 leading-relaxed font-light"
                style={{ color: "#F5EFE6" }}
                data-anim="fade-up"
                data-delay="500"
              >
                Une carte courte qui change chaque semaine, des produits sourcés
                en circuit court et une cave 100% nature, en plein cœur de
                Toulouse.
              </p>
              <div className="flex flex-wrap gap-10 items-center" data-anim="fade-up" data-delay="700">
                <button
                  className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.3em] font-medium relative pb-2"
                  style={{ color: "#F5EFE6" }}
                >
                  <span
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: "#C4956C" }}
                  />
                  Réserver une table
                  <span
                    className="w-8 h-px transition-all group-hover:w-14"
                    style={{ backgroundColor: "#C4956C" }}
                  />
                </button>
                <button
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-medium opacity-70 hover:opacity-100 transition-opacity"
                  style={{ color: "#F5EFE6" }}
                >
                  <span className="text-base" style={{ color: "#C4956C" }}>✦</span>
                  Découvrir la carte
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-60"
          style={{ color: "#F5EFE6" }}
          data-anim="float"
        >
          <span>Scroll</span>
          <div className="w-12 h-px" style={{ backgroundColor: "#C4956C" }} />
        </div>
      </section>

      {/* ─────────── INTRO ORNAMENT ─────────── */}
      <section
        className="py-20 md:py-32 text-center"
        style={{
          background:
            "linear-gradient(180deg, #0E0B08 0%, #14100A 100%)",
        }}
      >
        <div className="container max-w-3xl mx-auto px-6" data-reveal>
          <Ornament />
          <p
            className="text-2xl md:text-3xl leading-relaxed mt-10 italic font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F5EFE6",
            }}
          >
            «&nbsp;Cuisiner, c'est faire confiance au produit.
            <br />
            Le reste, c'est de l'écoute.&nbsp;»
          </p>
          <p
            className="mt-8 text-3xl md:text-4xl"
            style={{
              fontFamily: "'Petit Formal Script', cursive",
              color: "#C4956C",
              transform: "rotate(-2deg)",
            }}
          >
            Camille &amp; Thomas
          </p>
          <p
            className="mt-2 text-[10px] tracking-[0.4em] uppercase opacity-50"
            style={{ color: "#C4956C" }}
          >
            Chefs propriétaires
          </p>
        </div>
      </section>

      {/* ─────────── SIGNATURE DISHES ─────────── */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#14100A" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nos signatures"
            title="Les plats qui nous définissent"
          />
          <div className="grid md:grid-cols-3 gap-px mt-16">
            {SIGNATURE_DISHES.map((dish, idx) => (
              <article
                key={dish.title}
                className="group relative"
                data-reveal
                data-delay={`${idx * 200}`}
                data-hover="zoom-img"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(14,11,8,0.95) 100%)",
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div
                      className="text-[10px] tracking-[0.3em] uppercase opacity-60"
                      style={{ color: "#C4956C" }}
                    >
                      0{idx + 1}
                    </div>
                    <div
                      className="text-2xl font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#C4956C",
                      }}
                    >
                      {dish.price}€
                    </div>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl mb-3 italic font-light leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#F5EFE6",
                    }}
                  >
                    {dish.title}
                  </h3>
                  <p
                    className="text-sm opacity-70 leading-relaxed"
                    style={{ color: "#F5EFE6" }}
                  >
                    {dish.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CHEF ─────────── */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#0E0B08" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden" data-reveal="slide-right">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
                alt="Camille et Thomas en cuisine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-parallax
              />
              <div
                className="absolute bottom-6 left-6 right-6 px-6 py-4 backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(14, 11, 8, 0.75)",
                  borderLeft: "2px solid #C4956C",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-1"
                  style={{ color: "#C4956C" }}
                >
                  En cuisine
                </p>
                <p
                  className="text-lg font-light italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#F5EFE6",
                  }}
                >
                  Camille Mercier &amp; Thomas Vasseur
                </p>
              </div>
            </div>
            <div data-reveal="slide-left">
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "#C4956C" }}
              >
                — La maison
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 italic font-light"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5EFE6",
                }}
              >
                12 ans en cuisine, une seule conviction.
              </h2>
              <p
                className="text-lg leading-relaxed opacity-80 mb-6 font-light"
                style={{ color: "#F5EFE6" }}
              >
                Camille et Thomas se sont rencontrés en 2014 dans les cuisines
                d'un trois étoiles parisien. Huit ans plus tard, ils ont posé
                leurs couteaux à Toulouse pour ouvrir L'Atelier avec une idée
                simple&nbsp;: une carte courte, ancrée dans le territoire,
                pensée pour mettre en lumière le produit.
              </p>
              <p
                className="text-lg leading-relaxed opacity-80 mb-10 font-light"
                style={{ color: "#F5EFE6" }}
              >
                Le potager du restaurant à Castanet fournit 60% des herbes et
                légumes anciens. Les viandes viennent du Gers, les poissons de
                Saint-Jean-de-Luz, les vins de chez les vignerons amis du
                Sud-Ouest.
              </p>
              <div
                className="flex items-center gap-8 pt-8"
                style={{ borderTop: "1px solid rgba(196, 149, 108, 0.2)" }}
              >
                {[
                  { value: "1", label: "Étoile Michelin Plate" },
                  { value: "4.8", label: "Sur Google · 312 avis" },
                  { value: "30", label: "Couverts par service" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-3xl md:text-4xl mb-1 font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#C4956C",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.25em] uppercase opacity-60"
                      style={{ color: "#F5EFE6" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── MENU ─────────── */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#14100A" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
        <div className="container max-w-5xl mx-auto px-6 relative">
          <SectionHeader
            eyebrow="La carte de la semaine"
            title="Une carte courte, qui change."
          />
          <p
            className="text-center max-w-2xl mx-auto mt-6 opacity-70 font-light"
            style={{ color: "#F5EFE6" }}
          >
            Notre carte évolue chaque semaine selon les arrivages du marché
            Victor Hugo et les retours du potager.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8">
            <div data-reveal data-delay="0"><MenuColumn title="Entrées" items={MENU.entrees} /></div>
            <div data-reveal data-delay="150"><MenuColumn title="Plats" items={MENU.plats} /></div>
            <div data-reveal data-delay="300"><MenuColumn title="Desserts" items={MENU.desserts} /></div>
          </div>

          <div className="mt-20 pt-12 text-center" style={{ borderTop: "1px solid rgba(196, 149, 108, 0.2)" }}>
            <div className="inline-flex flex-col items-center gap-3">
              <Wine className="w-6 h-6" style={{ color: "#C4956C" }} />
              <p
                className="text-2xl italic font-light"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5EFE6",
                }}
              >
                Menu midi&nbsp;
                <span style={{ color: "#C4956C" }}>22€</span>
                &nbsp;— en semaine
              </p>
              <p className="text-sm opacity-60" style={{ color: "#F5EFE6" }}>
                Entrée + Plat ou Plat + Dessert · Café offert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── GALLERY ─────────── */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#0E0B08" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Le lieu" title="L'ambiance de la maison" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-16">
            {GALLERY.map((g, idx) => (
              <div
                key={g.src}
                className={`relative overflow-hidden ${g.span}`}
                data-reveal="scale"
                data-delay={`${idx * 100}`}
                data-hover="zoom-img"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: "#C4956C" }}
            >
              <Instagram className="w-4 h-4" />
              @latelier_saveurs · Toutes les photos
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: "#14100A" }}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Ils nous suivent" title="Ce qu'on dit de nous" />
          <div className="grid md:grid-cols-3 gap-px mt-16">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="p-10"
                style={{
                  backgroundColor: "#0E0B08",
                  borderTop: "1px solid rgba(196, 149, 108, 0.15)",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5"
                      fill="#C4956C"
                      stroke="#C4956C"
                    />
                  ))}
                </div>
                <Quote
                  className="w-6 h-6 mb-4 opacity-40"
                  style={{ color: "#C4956C" }}
                />
                <blockquote
                  className="text-lg leading-relaxed font-light italic mb-8"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#F5EFE6",
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div
                    className="font-medium text-sm"
                    style={{ color: "#C4956C" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-xs opacity-60 mt-1 tracking-wider uppercase"
                    style={{ color: "#F5EFE6" }}
                  >
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── RESERVATION CTA ─────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#0E0B08" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2400&q=85"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="container max-w-3xl mx-auto px-6 relative text-center" data-reveal>
          <Ornament />
          <h2
            className="text-5xl md:text-7xl leading-tight my-8 italic font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F5EFE6",
            }}
          >
            Réservez votre table.
          </h2>
          <p
            className="text-lg opacity-80 mb-12 max-w-xl mx-auto font-light"
            style={{ color: "#F5EFE6" }}
          >
            Réservation recommandée le soir et le weekend. Nous accueillons les
            groupes jusqu'à 8 personnes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex items-center gap-3 px-10 py-5 text-xs uppercase tracking-[0.25em] font-medium"
              style={{
                backgroundColor: "#C4956C",
                color: "#0E0B08",
                borderRadius: "2px",
              }}
            >
              Réserver en ligne
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0561234567"
              className="inline-flex items-center gap-3 px-10 py-5 text-xs uppercase tracking-[0.25em] font-medium border"
              style={{
                borderColor: "rgba(245, 239, 230, 0.3)",
                color: "#F5EFE6",
                borderRadius: "2px",
              }}
            >
              <Phone className="w-4 h-4" />
              05 61 23 45 67
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── PRACTICAL INFO ─────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#14100A" }}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "#C4956C" }}
              >
                Adresse
              </div>
              <p
                className="text-2xl italic font-light leading-snug"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5EFE6",
                }}
              >
                14 rue des Halles
                <br />
                31000 Toulouse
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "#C4956C" }}
              >
                <MapPin className="w-4 h-4" />
                Itinéraire
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "#C4956C" }}
              >
                Horaires
              </div>
              <ul className="space-y-3">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-baseline gap-4 pb-2"
                    style={{
                      borderBottom: "1px solid rgba(196, 149, 108, 0.1)",
                    }}
                  >
                    <span
                      className="font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#F5EFE6",
                      }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-xs tracking-wider opacity-70"
                      style={{ color: "#F5EFE6" }}
                    >
                      {h.slots}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "#C4956C" }}
              >
                Contact
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#F5EFE6" }}>
                  <Phone className="w-4 h-4" style={{ color: "#C4956C" }} />
                  05 61 23 45 67
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#F5EFE6" }}>
                  <Clock className="w-4 h-4" style={{ color: "#C4956C" }} />
                  Dernière commande 22h
                </li>
                <li className="flex items-center gap-3 opacity-80" style={{ color: "#F5EFE6" }}>
                  <Instagram className="w-4 h-4" style={{ color: "#C4956C" }} />
                  @latelier_saveurs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer
        className="py-12"
        style={{
          backgroundColor: "#0A0805",
          borderTop: "1px solid rgba(196, 149, 108, 0.15)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xl italic font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#C4956C",
              }}
            >
              {BRAND}
            </p>
            <p
              className="text-[10px] tracking-[0.3em] uppercase opacity-50 mt-1"
              style={{ color: "#F5EFE6" }}
            >
              {TAGLINE}
            </p>
          </div>
          <p
            className="text-xs opacity-50"
            style={{ color: "#F5EFE6" }}
          >
            © {new Date().getFullYear()} L&apos;Atelier des Saveurs · Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div
        className="h-px w-12"
        style={{ backgroundColor: "rgba(196, 149, 108, 0.5)" }}
      />
      <div
        className="w-2 h-2 rotate-45"
        style={{
          border: "1px solid #C4956C",
        }}
      />
      <div
        className="h-px w-12"
        style={{ backgroundColor: "rgba(196, 149, 108, 0.5)" }}
      />
    </div>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div
        className="text-[10px] tracking-[0.4em] uppercase mb-4"
        style={{ color: "#C4956C" }}
      >
        — {eyebrow} —
      </div>
      <h2
        className="text-4xl md:text-5xl lg:text-6xl italic font-light leading-tight"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#F5EFE6",
        }}
      >
        {title}
      </h2>
    </div>
  )
}

function MenuColumn({
  title,
  items,
}: {
  title: string
  items: { title: string; description: string; price: string }[]
}) {
  return (
    <div>
      <h3
        className="text-2xl italic font-light text-center mb-8 pb-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#C4956C",
          borderBottom: "1px solid rgba(196, 149, 108, 0.3)",
        }}
      >
        {title}
      </h3>
      <ul className="space-y-7">
        {items.map((item) => (
          <li key={item.title}>
            <div className="flex justify-between items-baseline gap-3 mb-1">
              <h4
                className="font-light text-lg leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5EFE6",
                }}
              >
                {item.title}
              </h4>
              <span
                className="font-light shrink-0"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#C4956C",
                }}
              >
                {item.price}€
              </span>
            </div>
            <p
              className="text-xs opacity-60 leading-relaxed"
              style={{ color: "#F5EFE6" }}
            >
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function RestaurantDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Restaurant</span>
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
