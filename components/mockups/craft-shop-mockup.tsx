import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react"
import { MockupAnimations } from "./mockup-animations"

const BRAND = "Atelier Loutre"
const TAGLINE = "Céramique faite main · Lourmarin, Provence"

const NAV_L = ["Boutique", "Atelier", "Workshops"]
const NAV_R = ["Journal", "Contact"]

const PRODUCTS = [
  {
    name: "Vase Tisane",
    detail: "Grès tourné · Émail gris cendré",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80",
    rotate: "-2deg",
    tape: "left",
  },
  {
    name: "Service Lavande",
    detail: "Assiettes & bols · Édition d'été",
    price: 245,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80",
    rotate: "1.5deg",
    tape: "right",
  },
  {
    name: "Mugs Brûlés",
    detail: "Set de 4 · Tournés et bicolores",
    price: 96,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    rotate: "-1deg",
    tape: "top",
  },
]

const PROCESS = [
  { n: "01", title: "Tournage", detail: "Argile grès blanc tournée à la main, séchage 5 jours." },
  { n: "02", title: "Décor", detail: "Engobes appliqués au pinceau ou empreintes pressées." },
  { n: "03", title: "Biscuit", detail: "1ère cuisson à 980°C dans le four à gaz de l'atelier." },
  { n: "04", title: "Émaillage", detail: "Émaux mélangés au studio à partir de cendres récoltées." },
  { n: "05", title: "Grand feu", detail: "2nde cuisson à 1240°C. Les pièces sortent un mois après." },
]

const TESTIMONIALS = [
  {
    quote: "Camille a fait pour notre mariage une vaisselle qui nous suit chaque soir depuis. Magnifique.",
    author: "Élise & Tom",
    tilt: "-1.5deg",
    pin: "left",
  },
  {
    quote: "Service après-vente exceptionnel — un mug cassé en livraison remplacé en 3 jours.",
    author: "Hugo M.",
    tilt: "1deg",
    pin: "right",
  },
  {
    quote: "Je collectionne. Chaque pièce est unique, je sens le grain, je vois la main qui l'a faite.",
    author: "Anna R.",
    tilt: "-0.8deg",
    pin: "center",
  },
]

const JOURNAL = [
  { title: "Une cendre de bois, un émail", date: "30 mai 2026", cat: "Recette" },
  { title: "Pourquoi je tourne à la main", date: "14 mai 2026", cat: "Atelier" },
  { title: "Workshop d'été · 6-8 août", date: "01 mai 2026", cat: "Agenda" },
]

export function CraftShopMockup() {
  return (
    <div
      className="craft-mockup"
      style={{
        backgroundColor: "#F4EBDA",
        color: "#2C2418",
        fontFamily: "'Inter', system-ui, sans-serif",
        position: "relative",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
      />
      <MockupAnimations scope="craft-mockup" />
      <style dangerouslySetInnerHTML={{ __html: `
        .craft-mockup .hand { font-family: 'Caveat', cursive; }
        .craft-mockup .serif { font-family: 'EB Garamond', serif; }
        .craft-mockup .paper-grain {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(196, 107, 94, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(107, 123, 90, 0.04) 0%, transparent 50%),
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /><feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0.08 0'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.45'/></svg>");
        }
        .craft-mockup .washi-tape {
          background: repeating-linear-gradient(135deg, rgba(196, 107, 94, 0.5) 0 6px, rgba(196, 107, 94, 0.35) 6px 12px);
          border-radius: 1px;
        }
        .craft-mockup .washi-tape.sage { background: repeating-linear-gradient(135deg, rgba(107, 123, 90, 0.55) 0 6px, rgba(107, 123, 90, 0.4) 6px 12px); }
        .craft-mockup .washi-tape.honey { background: repeating-linear-gradient(135deg, rgba(212, 165, 116, 0.6) 0 6px, rgba(212, 165, 116, 0.45) 6px 12px); }
        .craft-mockup .polaroid {
          background: #FAF5EA;
          padding: 14px 14px 56px;
          box-shadow: 0 2px 3px rgba(44, 36, 24, 0.06), 0 12px 28px rgba(44, 36, 24, 0.12);
          position: relative;
        }
        .craft-mockup .stitch {
          background-image: linear-gradient(to right, #2C2418 50%, transparent 50%);
          background-size: 6px 1px;
          background-repeat: repeat-x;
          height: 1px;
        }
        .craft-mockup .stamp {
          font-family: 'Caveat', cursive;
          border: 2px dashed currentColor;
          border-radius: 50%;
          transform: rotate(-12deg);
          padding: 14px 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        @keyframes craft-sway { 0%, 100% { transform: rotate(var(--rot, 0)) translateY(0); } 50% { transform: rotate(var(--rot, 0)) translateY(-4px); } }
        .craft-mockup .sway { animation: craft-sway 6s ease-in-out infinite; }
        .craft-mockup .doodle-underline path { stroke-dasharray: 200; stroke-dashoffset: 0; }
        .craft-mockup .btn-handdrawn {
          position: relative;
          display: inline-flex;
          align-items: baseline;
          gap: 0.5rem;
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 1.25rem;
          color: #2C2418;
          padding: 0.1rem 0;
        }
        .craft-mockup .btn-handdrawn::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -8px;
          height: 8px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'><path d='M2 4 Q 30 1 60 4 T 120 4 T 198 5' stroke='%23C46B5E' stroke-width='2' fill='none' stroke-linecap='round'/></svg>");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .craft-mockup .btn-handdrawn:hover::after {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'><path d='M2 4 Q 30 1 60 5 T 120 3 T 198 4' stroke='%23C46B5E' stroke-width='3' fill='none' stroke-linecap='round'/></svg>");
        }
        .craft-mockup .btn-sticky {
          font-family: 'Caveat', cursive;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1;
          background: #C46B5E;
          color: #FAF5EA;
          padding: 0.85rem 1.6rem 0.7rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 28px 60px 32px 70px / 30px 26px 70px 32px;
          transform: rotate(-2deg);
          box-shadow: 0 6px 0 -2px rgba(44, 36, 24, 0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .craft-mockup .btn-sticky:hover {
          transform: rotate(0deg) translateY(-2px);
          box-shadow: 0 8px 0 -2px rgba(44, 36, 24, 0.2);
        }
        .craft-mockup .btn-stamp {
          font-family: 'Caveat', cursive;
          font-weight: 700;
          font-size: 1.3rem;
          padding: 1rem 1.5rem;
          border: 2px solid currentColor;
          color: #2C2418;
          background: transparent;
          border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .craft-mockup .btn-stamp:hover { background: rgba(44, 36, 24, 0.05); }
      `}} />

      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 paper-grain pointer-events-none"
        style={{ opacity: 0.6, mixBlendMode: "multiply" }}
      />

      {/* ─── HEADER (thin, asymmetric) ─── */}
      <div className="relative" style={{ borderBottom: "1px solid rgba(44, 36, 24, 0.1)" }}>
        <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="hand text-xs" style={{ color: "#6B7B5A" }}>
            ✶ Fait main · Lourmarin, Provence ✶
          </div>
          <div className="hand text-xs flex items-center gap-4" style={{ color: "#2C2418" }}>
            <span>FR · EN</span>
            <span style={{ color: "#C46B5E" }}>{`◯`}</span>
            <span>Newsletter</span>
          </div>
        </div>
      </div>

      <header className="relative">
        <div className="container max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 items-center">
          <nav className="serif text-base flex items-center gap-5 italic">
            {NAV_L.map((item) => (
              <span key={item} className="hover:underline underline-offset-4 decoration-1 cursor-default opacity-80">
                {item}
              </span>
            ))}
          </nav>
          <Link
            href="#"
            className="hand text-center text-5xl md:text-6xl tracking-tight"
            style={{ color: "#2C2418", lineHeight: "0.85" }}
          >
            Atelier
            <br />
            <span style={{ color: "#C46B5E" }}>Loutre</span>
          </Link>
          <nav className="serif text-base flex items-center justify-end gap-5 italic">
            {NAV_R.map((item) => (
              <span key={item} className="hover:underline underline-offset-4 decoration-1 cursor-default opacity-80">
                {item}
              </span>
            ))}
            <span className="relative inline-flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4" />
              <span
                className="hand"
                style={{ color: "#C46B5E", fontSize: "1.1rem", lineHeight: 1 }}
              >
                2
              </span>
            </span>
          </nav>
        </div>
      </header>

      {/* ─── HERO COLLAGE ─── */}
      <section className="relative pt-12 pb-32 md:pb-48 overflow-hidden">
        {/* Floating doodles in margins */}
        <div
          className="absolute hidden lg:block top-32 left-8 sway"
          style={{ transform: "rotate(-15deg)", ["--rot" as string]: "-15deg" }}
        >
          <DoodleStar size={28} color="#C46B5E" />
        </div>
        <div
          className="absolute hidden lg:block bottom-40 left-16 sway"
          style={{ transform: "rotate(12deg)", animationDelay: "1.5s" }}
        >
          <DoodleSwirl size={50} color="#6B7B5A" />
        </div>
        <div
          className="absolute hidden lg:block top-1/3 right-1/3 sway"
          style={{ transform: "rotate(-8deg)", animationDelay: "2.5s" }}
        >
          <DoodleStar size={20} color="#D4A574" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative">
          {/* Text */}
          <div className="relative z-20 max-w-2xl">
            <p
              className="hand text-2xl mb-3 sway"
              style={{ color: "#6B7B5A", ["--rot" as string]: "-2deg" }}
              data-anim="fade-down"
            >
              — bienvenue dans le studio —
            </p>
            <h1
              className="serif leading-[0.9] mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "#2C2418",
                fontWeight: 500,
              }}
              data-anim="fade-up"
              data-delay="200"
            >
              On tourne la
              <br />
              terre, on n'en{" "}
              <span className="italic" style={{ color: "#C46B5E" }}>
                jette
              </span>
              <br />
              <span className="hand inline-block" style={{ fontSize: "1.3em", color: "#C46B5E", transform: "rotate(-3deg) translateY(0.1em)" }}>
                jamais
              </span>{" "}
              une miette.
            </h1>

            <p
              className="serif italic text-xl opacity-80 mb-10 max-w-xl leading-relaxed"
              data-anim="fade-up"
              data-delay="400"
            >
              Camille Berthier tourne, émaille et cuit ses pièces dans un mas
              du Lubéron. Pas de moule, pas de série. Des assiettes, des bols,
              des vases — un à un, depuis 2019.
            </p>

            <div className="flex flex-wrap items-center gap-8" data-anim="fade-up" data-delay="600">
              <button className="btn-sticky">
                Voir la boutique
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#" className="btn-handdrawn">
                Visiter l'atelier
              </a>
            </div>
          </div>

          {/* ─── RIGHT COLLAGE — vrai mur d'atelier ─── */}
          <div className="absolute hidden md:block right-4 lg:right-12 top-8 w-[400px] lg:w-[480px] h-[600px] z-10">
            {/* Polaroid principal — vases (top-right) */}
            <div
              className="polaroid sway absolute"
              style={{
                width: "260px",
                top: "0",
                right: "0",
                transform: "rotate(5deg)",
                ["--rot" as string]: "5deg",
                zIndex: 20,
              }}
              data-anim="scale-in"
              data-delay="300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=85"
                  alt="Vases"
                  fill
                  priority
                  className="object-cover"
                  sizes="260px"
                />
              </div>
              <p
                className="hand absolute bottom-3 left-0 right-0 text-center text-lg"
                style={{ color: "#2C2418" }}
              >
                vases tisanes, été 2025
              </p>
              <span
                className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2"
                style={{
                  width: "90px",
                  height: "20px",
                  transform: "translate(-50%, 0) rotate(-3deg)",
                }}
              />
            </div>

            {/* 2e polaroid — mugs (back-left, plus petit) */}
            <div
              className="polaroid sway absolute"
              style={{
                width: "200px",
                top: "70px",
                left: "0",
                transform: "rotate(-8deg)",
                ["--rot" as string]: "-8deg",
                animationDelay: "1.5s",
                zIndex: 15,
              }}
              data-anim="scale-in"
              data-delay="500"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=500&q=80"
                  alt="Mugs"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <p
                className="hand absolute bottom-2 left-0 right-0 text-center text-base"
                style={{ color: "#2C2418" }}
              >
                fournée du mardi
              </p>
              <span
                className="washi-tape sage absolute -top-2 right-3"
                style={{
                  width: "60px",
                  height: "18px",
                  transform: "rotate(12deg)",
                }}
              />
            </div>

            {/* 3e polaroid — assiettes (bas, à cheval entre les deux) */}
            <div
              className="polaroid sway absolute"
              style={{
                width: "220px",
                bottom: "20px",
                left: "70px",
                transform: "rotate(3deg)",
                ["--rot" as string]: "3deg",
                animationDelay: "2.5s",
                zIndex: 18,
              }}
              data-anim="scale-in"
              data-delay="700"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
                  alt="Assiettes"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <p
                className="hand absolute bottom-2 left-0 right-0 text-center text-base"
                style={{ color: "#2C2418" }}
              >
                service lavande
              </p>
              <span
                className="washi-tape honey absolute -top-2 left-3"
                style={{
                  width: "70px",
                  height: "20px",
                  transform: "rotate(-10deg)",
                }}
              />
            </div>

            {/* Tampon "édition limitée" — top-left */}
            <div
              className="absolute sway"
              style={{
                top: "20px",
                left: "20px",
                zIndex: 25,
                animationDelay: "0.8s",
              }}
              data-anim="fade-up"
              data-delay="900"
            >
              <StampSeal color="#C46B5E" rotation={-18} size="0.85rem">
                édition
                <br />
                limitée
                <br />
                ✶ no.27 ✶
              </StampSeal>
            </div>

            {/* Sticky note todo-list manuscrite — droite milieu */}
            <div
              className="absolute sway hidden lg:block"
              style={{
                top: "200px",
                right: "-20px",
                width: "180px",
                background: "#FFF4D4",
                padding: "16px 18px",
                transform: "rotate(6deg)",
                boxShadow: "0 4px 14px rgba(44, 36, 24, 0.18)",
                zIndex: 22,
                animationDelay: "3.2s",
              }}
              data-anim="fade-up"
              data-delay="1100"
            >
              <p
                className="hand mb-2"
                style={{
                  color: "#C46B5E",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                à faire
              </p>
              <ul
                className="hand text-base space-y-1"
                style={{ color: "#2C2418", fontFamily: "'Caveat', cursive" }}
              >
                <li>✓ tournage bols</li>
                <li>✓ émaillage vases</li>
                <li>→ cuisson dim.</li>
                <li>· photos lookbook</li>
                <li>· réponse Margot</li>
              </ul>
              <span
                className="washi-tape absolute -top-2 left-1/2 -translate-x-1/2"
                style={{
                  width: "50px",
                  height: "16px",
                  transform: "translate(-50%, 0) rotate(-4deg)",
                }}
              />
            </div>

            {/* Petit ticket prix manuscrit */}
            <div
              className="absolute sway hidden lg:block"
              style={{
                bottom: "180px",
                right: "-30px",
                background: "#FAF5EA",
                padding: "8px 16px",
                transform: "rotate(-12deg)",
                border: "1px dashed #6B7B5A",
                zIndex: 28,
                animationDelay: "4s",
              }}
              data-anim="fade-up"
              data-delay="1300"
            >
              <p
                className="hand text-base"
                style={{ color: "#6B7B5A", lineHeight: 1 }}
              >
                vase
                <br />
                <span style={{ color: "#C46B5E", fontWeight: 700, fontSize: "1.4rem" }}>88€</span>
              </p>
            </div>

            {/* Doodles scattered */}
            <div
              className="absolute sway"
              style={{
                top: "0",
                right: "60px",
                transform: "rotate(-20deg)",
                animationDelay: "2s",
                zIndex: 5,
              }}
            >
              <DoodleStar size={18} color="#D4A574" />
            </div>
            <div
              className="absolute sway"
              style={{
                bottom: "100px",
                left: "0",
                transform: "rotate(15deg)",
                animationDelay: "3.5s",
                zIndex: 5,
              }}
            >
              <DoodleSwirl size={36} color="#6B7B5A" />
            </div>
            <div
              className="absolute sway"
              style={{
                top: "300px",
                left: "240px",
                transform: "rotate(-10deg)",
                animationDelay: "1.2s",
                zIndex: 5,
              }}
            >
              <DoodleStar size={14} color="#C46B5E" />
            </div>
          </div>

          {/* Small annotation */}
          <div
            className="hidden md:flex absolute bottom-0 left-1/2 items-center gap-2"
            data-anim="fade-up"
            data-delay="800"
          >
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" style={{ color: "#6B7B5A" }}>
              <path
                d="M4 4 Q 15 18 26 16 Q 36 14 38 28 L 38 32"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M34 28 L 38 33 L 42 27" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="hand text-base" style={{ color: "#6B7B5A" }}>
              chaque pièce est unique
            </span>
          </div>
        </div>
      </section>

      {/* ─── INTERLUDE · Citation + sketches ─── */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Left sketch */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div style={{ transform: "rotate(-12deg)" }} className="sway" data-anim="float">
                <DoodleVase size={80} color="#6B7B5A" />
              </div>
            </div>

            {/* Center quote */}
            <div className="md:col-span-8 text-center" data-reveal>
              <p
                className="serif italic text-2xl md:text-3xl leading-tight mb-4"
                style={{ color: "#2C2418", fontFamily: "'EB Garamond', serif" }}
              >
                «&nbsp;Une pièce, c'est cinq mains qui se touchent.
                <br />
                La mienne, l'argile, l'eau, le feu et la vôtre.&nbsp;»
              </p>
              <p
                className="hand text-2xl"
                style={{
                  color: "#C46B5E",
                  fontFamily: "'Caveat', cursive",
                  transform: "rotate(-2deg)",
                  display: "inline-block",
                }}
              >
                — Camille, juin 2026
              </p>
            </div>

            {/* Right sketch + stamp */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
              <div style={{ transform: "rotate(10deg)" }} className="sway" data-anim="float">
                <DoodleWheel size={70} color="#C46B5E" />
              </div>
              <div className="hidden md:block">
                <StampSeal color="#6B7B5A" rotation={6} size="0.9rem">
                  fait main
                  <br />
                  à Lourmarin
                </StampSeal>
              </div>
            </div>
          </div>

          {/* Hand-drawn rule below */}
          <svg viewBox="0 0 600 12" preserveAspectRatio="none" className="w-full h-3 mt-12" style={{ color: "#C46B5E" }}>
            <path
              d="M0 6 Q 100 1 200 6 T 400 6 T 600 6"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* ─── PRODUCTS BENTO ─── */}
      <section className="py-16 md:py-24 relative">
        {/* Floating doodles */}
        <div
          className="absolute hidden lg:block top-12 right-12 sway"
          style={{ transform: "rotate(8deg)" }}
        >
          <DoodleVase size={64} color="#D4A574" />
        </div>
        <div
          className="absolute hidden lg:block bottom-24 left-8 sway"
          style={{ transform: "rotate(-10deg)", animationDelay: "1s" }}
        >
          <DoodleArrow size={90} color="#6B7B5A" />
        </div>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
            <div>
              <p
                className="hand text-2xl mb-1"
                style={{ color: "#6B7B5A" }}
                data-reveal
              >
                un petit mot,
              </p>
              <h2
                className="serif italic"
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                  color: "#2C2418",
                  fontWeight: 500,
                  lineHeight: "0.95",
                }}
                data-reveal
                data-delay="100"
              >
                quelques pièces du moment.
              </h2>
            </div>
            <div className="stamp text-base" style={{ color: "#C46B5E" }}>
              édition été 26
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {PRODUCTS.map((p, idx) => (
              <article
                key={p.name}
                className="group relative"
                style={{
                  marginTop: idx === 1 ? "2rem" : idx === 2 ? "4rem" : "0",
                }}
                data-reveal
                data-delay={`${idx * 150}`}
              >
                <div
                  className="polaroid relative cursor-pointer transition-transform"
                  style={{
                    transform: `rotate(${p.rotate})`,
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p
                    className="hand absolute bottom-3 left-0 right-0 text-center text-2xl"
                    style={{ color: "#2C2418" }}
                  >
                    {p.name.toLowerCase()}
                  </p>
                  {/* Washi tape position */}
                  {p.tape === "left" && (
                    <span
                      className="washi-tape sage absolute -top-2 left-3"
                      style={{ width: "70px", height: "20px", transform: "rotate(-12deg)" }}
                    />
                  )}
                  {p.tape === "right" && (
                    <span
                      className="washi-tape honey absolute -top-3 right-2"
                      style={{ width: "60px", height: "22px", transform: "rotate(15deg)" }}
                    />
                  )}
                  {p.tape === "top" && (
                    <span
                      className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2"
                      style={{ width: "80px", height: "20px", transform: "translate(-50%, 0) rotate(2deg)" }}
                    />
                  )}
                </div>

                <div className="mt-6 px-3">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="serif italic text-xl" style={{ color: "#2C2418" }}>
                      {p.name}
                    </h3>
                    <span
                      className="hand text-2xl"
                      style={{ color: "#C46B5E" }}
                    >
                      {p.price}€
                    </span>
                  </div>
                  <p className="text-sm opacity-65" style={{ color: "#2C2418" }}>
                    {p.detail}
                  </p>
                  <a href="#" className="btn-handdrawn text-base mt-4">
                    ajouter au panier
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href="#" className="btn-stamp">
              voir les 48 pièces
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── STORY · ATELIER ─── */}
      <section
        className="relative py-20 md:py-32"
        style={{ backgroundColor: "#E8DDC4" }}
      >
        <div className="absolute inset-0 paper-grain pointer-events-none" style={{ opacity: 0.4, mixBlendMode: "multiply" }} />
        {/* Floating stamps */}
        <div
          className="absolute hidden lg:block top-16 right-12 sway"
          style={{ animationDelay: "0.5s" }}
        >
          <StampSeal color="#C46B5E" rotation={-12} size="0.85rem">
            au feu de bois
            <br />
            depuis '19
          </StampSeal>
        </div>
        <div
          className="absolute hidden lg:block bottom-24 left-8 sway"
          style={{ transform: "rotate(8deg)", animationDelay: "1.8s" }}
        >
          <DoodleBrush size={64} color="#6B7B5A" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative" data-reveal="slide-right">
              <div
                className="polaroid relative"
                style={{
                  transform: "rotate(-3deg)",
                  width: "85%",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=1200&q=85"
                    alt="Atelier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 80vw, 500px"
                  />
                </div>
                <p
                  className="hand absolute bottom-3 left-0 right-0 text-center text-xl"
                  style={{ color: "#2C2418" }}
                >
                  l'atelier, un matin d'octobre
                </p>
                <span
                  className="washi-tape honey absolute -top-3 right-4"
                  style={{ width: "120px", height: "24px", transform: "rotate(8deg)" }}
                />
              </div>
              {/* Second smaller polaroid behind */}
              <div
                className="polaroid absolute hidden md:block bottom-12 -right-8"
                style={{
                  transform: "rotate(8deg)",
                  width: "180px",
                  zIndex: -1,
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=70"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <p
                  className="hand absolute bottom-2 left-0 right-0 text-center text-base opacity-70"
                  style={{ color: "#2C2418" }}
                >
                  matin de cuisson
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12" data-reveal="slide-left">
              <p
                className="hand text-2xl mb-3"
                style={{ color: "#6B7B5A" }}
              >
                — depuis 2019 —
              </p>
              <h2
                className="serif italic leading-[0.95] mb-8"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#2C2418",
                  fontWeight: 500,
                }}
              >
                Une fille,
                <br />
                un tour, <span className="hand not-italic" style={{ color: "#C46B5E", fontSize: "1.3em" }}>une terre.</span>
              </h2>
              <div className="serif text-lg leading-relaxed space-y-5 mb-10" style={{ color: "#2C2418" }}>
                <p>
                  J'ai quitté Paris en 2018. Je travaillais dans le marketing,
                  je tournais le soir dans un atelier collectif du 13e. Puis
                  un jour je suis partie. Aujourd'hui je vis à Lourmarin, je
                  ramasse mes cendres dans la cheminée et je cuis au gaz.
                </p>
                <p
                  className="hand text-2xl pl-6 italic"
                  style={{
                    color: "#6B7B5A",
                    borderLeft: "3px solid #C46B5E",
                  }}
                >
                  Mes pièces ne sont pas parfaites. C'est leur force.
                </p>
              </div>
              {/* Hand signature */}
              <div className="flex items-end gap-4">
                <span
                  className="hand text-5xl"
                  style={{
                    color: "#2C2418",
                    transform: "rotate(-3deg)",
                  }}
                >
                  Camille
                </span>
                <span
                  className="text-[10px] tracking-[0.3em] uppercase opacity-50 pb-2"
                  style={{ color: "#2C2418" }}
                >
                  céramiste &amp; potière
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 md:py-28 relative">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="hand text-2xl mb-2" style={{ color: "#6B7B5A" }} data-reveal>
              le chemin d'une pièce,
            </p>
            <h2
              className="serif italic"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                color: "#2C2418",
                fontWeight: 500,
                lineHeight: 1,
              }}
              data-reveal
              data-delay="100"
            >
              cinq mains,
              <br />
              <span style={{ color: "#C46B5E" }}>un mois.</span>
            </h2>
          </div>

          <ol className="space-y-12 md:space-y-6 relative">
            {PROCESS.map((p, i) => (
              <li
                key={p.n}
                className="grid md:grid-cols-12 gap-4 items-start"
                style={{
                  paddingLeft: `${i % 2 === 0 ? "0" : "2rem"}`,
                  paddingRight: `${i % 2 === 0 ? "2rem" : "0"}`,
                }}
                data-reveal
                data-delay={`${i * 100}`}
              >
                <div className="md:col-span-2 flex md:justify-center items-center gap-3">
                  <div
                    className="stamp text-base shrink-0"
                    style={{
                      color: i % 2 === 0 ? "#C46B5E" : "#6B7B5A",
                      transform: `rotate(${i % 2 === 0 ? "-12deg" : "10deg"})`,
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      borderWidth: "2px",
                    }}
                  >
                    {p.n}
                  </div>
                  <div
                    className="shrink-0 hidden md:block sway"
                    style={{
                      transform: `rotate(${i % 2 === 0 ? "8deg" : "-6deg"})`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {i === 0 && <DoodleWheel size={48} color="#C46B5E" />}
                    {i === 1 && <DoodleBrush size={48} color="#6B7B5A" />}
                    {i === 2 && <DoodleKiln size={48} color="#D4A574" />}
                    {i === 3 && <DoodleSwirl size={42} color="#6B7B5A" />}
                    {i === 4 && <DoodleKiln size={48} color="#C46B5E" />}
                  </div>
                </div>
                <div className="md:col-span-10 relative">
                  <h3
                    className="serif italic text-3xl md:text-4xl mb-2"
                    style={{ color: "#2C2418", fontWeight: 500 }}
                  >
                    {p.title}
                  </h3>
                  <p className="serif text-lg leading-relaxed opacity-80" style={{ color: "#2C2418" }}>
                    {p.detail}
                  </p>
                  {i === 0 && (
                    <span
                      className="hand absolute -right-4 top-2 hidden lg:inline-block text-base opacity-60"
                      style={{ color: "#6B7B5A", transform: "rotate(8deg)" }}
                    >
                      ↺ silence absolu
                    </span>
                  )}
                  {i === 4 && (
                    <span
                      className="hand absolute -right-4 -top-2 hidden lg:inline-block text-base opacity-60"
                      style={{ color: "#C46B5E", transform: "rotate(-6deg)" }}
                    >
                      ✷ enfin, l'attente
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── TESTIMONIALS notebook style ─── */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "#EFE3CC" }}>
        <div className="absolute inset-0 paper-grain pointer-events-none" style={{ opacity: 0.4, mixBlendMode: "multiply" }} />
        {/* Doodle decorations */}
        <div
          className="absolute hidden lg:block top-16 left-10 sway"
          style={{ transform: "rotate(-15deg)" }}
        >
          <DoodleStar size={20} color="#C46B5E" />
        </div>
        <div
          className="absolute hidden lg:block bottom-32 right-12 sway"
          style={{ animationDelay: "1.2s" }}
        >
          <DoodleArrow size={80} color="#6B7B5A" flip />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="hand text-2xl mb-2" style={{ color: "#6B7B5A" }} data-reveal>
              ce qu'ils m'écrivent,
            </p>
            <h2
              className="serif italic"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                color: "#2C2418",
                fontWeight: 500,
              }}
              data-reveal
              data-delay="100"
            >
              quelques mots reçus.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={t.author}
                className="relative"
                style={{
                  transform: `rotate(${t.tilt})`,
                  marginTop: idx === 1 ? "1.5rem" : 0,
                }}
                data-reveal
                data-delay={`${idx * 150}`}
              >
                {/* Pin button */}
                <span
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "#C46B5E",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.4)",
                    top: "-6px",
                    left: t.pin === "left" ? "20px" : t.pin === "right" ? "auto" : "50%",
                    right: t.pin === "right" ? "20px" : "auto",
                    transform: t.pin === "center" ? "translateX(-50%)" : undefined,
                    zIndex: 10,
                  }}
                />
                <div
                  className="p-7"
                  style={{
                    background: `repeating-linear-gradient(to bottom, #FAF5EA 0px, #FAF5EA 28px, rgba(107, 123, 90, 0.15) 28px, rgba(107, 123, 90, 0.15) 29px)`,
                    boxShadow: "0 8px 24px rgba(44, 36, 24, 0.1)",
                    minHeight: "260px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <blockquote
                    className="serif italic text-lg leading-[28px] mb-6"
                    style={{ color: "#2C2418" }}
                  >
                    « {t.quote} »
                  </blockquote>
                  <figcaption
                    className="hand text-2xl pt-4"
                    style={{ color: "#C46B5E", borderTop: "1px dashed rgba(44, 36, 24, 0.25)" }}
                  >
                    — {t.author}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL teasers ─── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
            <h2
              className="serif italic"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#2C2418",
                fontWeight: 500,
              }}
              data-reveal
            >
              du journal,
            </h2>
            <a href="#" className="btn-handdrawn text-lg" data-reveal data-delay="100">
              tout lire
            </a>
          </div>

          <ul className="space-y-6">
            {JOURNAL.map((j, idx) => (
              <li
                key={j.title}
                className="grid md:grid-cols-12 gap-4 items-baseline py-5"
                style={{ borderBottom: "1px dashed rgba(44, 36, 24, 0.2)" }}
                data-reveal
                data-delay={`${idx * 100}`}
              >
                <span className="hand text-xl md:col-span-2" style={{ color: "#6B7B5A" }}>
                  {j.cat}
                </span>
                <h3
                  className="md:col-span-7 serif italic text-2xl md:text-3xl"
                  style={{ color: "#2C2418", fontWeight: 500 }}
                >
                  {j.title}
                </h3>
                <span className="md:col-span-2 text-xs opacity-60 tracking-wide" style={{ color: "#2C2418" }}>
                  {j.date}
                </span>
                <span className="md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 inline-block opacity-50" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── SIGNATURE INTERLUDE ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left: floating stamps + doodles */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end gap-6" data-reveal="slide-right">
              <StampSeal color="#6B7B5A" rotation={-12} size="0.9rem">
                merci
                <br />
                d'être passé
              </StampSeal>
              <div style={{ transform: "rotate(-10deg)" }} className="sway">
                <DoodleVase size={56} color="#D4A574" />
              </div>
            </div>

            {/* Center: giant signature */}
            <div className="md:col-span-6 text-center" data-reveal>
              <p className="hand text-2xl mb-2" style={{ color: "#6B7B5A" }}>
                signé,
              </p>
              <p
                className="hand"
                style={{
                  color: "#2C2418",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(5rem, 12vw, 11rem)",
                  fontWeight: 700,
                  lineHeight: "0.9",
                  transform: "rotate(-3deg)",
                  display: "inline-block",
                }}
              >
                Camille
              </p>
              <p
                className="text-[10px] tracking-[0.4em] uppercase opacity-50 mt-4"
                style={{ color: "#2C2418" }}
              >
                Lourmarin · juin 2026
              </p>
            </div>

            {/* Right: more doodles + stamp */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start gap-6" data-reveal="slide-left">
              <div
                className="sway"
                style={{ transform: "rotate(15deg)", animationDelay: "1.5s" }}
              >
                <DoodleSwirl size={56} color="#C46B5E" />
              </div>
              <StampSeal color="#D4A574" rotation={10} size="0.85rem">
                ✶ no.27 ✶
                <br />
                été 2026
              </StampSeal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "#2C2418", color: "#F4EBDA" }}>
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="hand text-3xl mb-2 sway" style={{ color: "#D4A574", ["--rot" as string]: "-2deg" }} data-reveal>
            une lettre par lune,
          </p>
          <h2
            className="serif italic mb-8"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 1,
            }}
            data-reveal
            data-delay="100"
          >
            les pièces du mois,
            <br />
            <span style={{ color: "#D4A574" }}>directement chez vous.</span>
          </h2>
          <p className="serif italic opacity-75 mb-10 max-w-md mx-auto" data-reveal data-delay="200">
            Une newsletter mensuelle avec la fournée du mois, l'histoire des
            émaux et les dates d'ouverture de l'atelier.
          </p>
          <form
            className="inline-flex items-center gap-4 px-5 py-3"
            style={{
              borderBottom: "2px solid #D4A574",
            }}
            data-reveal
            data-delay="300"
          >
            <input
              type="email"
              placeholder="votre email"
              readOnly
              className="hand text-xl bg-transparent outline-none w-64 placeholder-current"
              style={{ color: "#F4EBDA" }}
            />
            <button type="button" className="hand text-2xl" style={{ color: "#D4A574" }}>
              je m'abonne →
            </button>
          </form>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12" style={{ backgroundColor: "#1F1810" }}>
        <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="hand text-3xl" style={{ color: "#D4A574" }}>
            Atelier Loutre
          </div>
          <p className="serif italic text-sm opacity-60 text-center" style={{ color: "#F4EBDA" }}>
            Camille Berthier · 84160 Lourmarin · <span className="hand text-base">bonjour@atelier-loutre.fr</span>
          </p>
          <p className="text-xs opacity-40 hand text-base" style={{ color: "#F4EBDA" }}>
            © 2026 · made with hands
          </p>
        </div>
      </footer>
    </div>
  )
}

// ─── Hand-drawn SVG doodles ───
function DoodleVase({ size = 60, color = "#6B7B5A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ color }}>
      <path d="M22 8 L 38 8 L 36 14 Q 44 18 44 30 Q 44 46 30 48 Q 16 46 16 30 Q 16 18 24 14 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 12 L 36 12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="24" cy="32" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="34" cy="36" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="29" cy="40" r="0.6" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function DoodleWheel({ size = 60, color = "#C46B5E" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ color }}>
      <ellipse cx="30" cy="34" rx="22" ry="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <ellipse cx="30" cy="34" rx="22" ry="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(-4 30 34)" />
      <path d="M22 30 Q 30 18 38 30 Q 38 34 30 36 Q 22 34 22 30 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M30 18 L 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function DoodleKiln({ size = 60, color = "#D4A574" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ color }}>
      <rect x="12" y="14" width="36" height="34" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M12 22 L 48 22" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="30" cy="35" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M27 38 Q 30 30 33 38" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
      <path d="M20 8 Q 22 12 20 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M30 6 Q 32 10 30 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M40 8 Q 42 12 40 14" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function DoodleBrush({ size = 60, color = "#6B7B5A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ color }}>
      <path d="M14 46 L 38 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M36 20 Q 44 16 48 20 Q 50 24 46 30 L 38 28 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M14 46 Q 10 50 8 50 L 10 48" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M22 38 Q 20 42 18 42" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
      <path d="M28 32 Q 26 36 24 36" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

function DoodleStar({ size = 24, color = "#C46B5E" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path d="M12 3 L 13 11 L 21 12 L 13 13 L 12 21 L 11 13 L 3 12 L 11 11 Z" fill="currentColor" />
    </svg>
  )
}

function DoodleArrow({ size = 80, color = "#6B7B5A", flip = false }: { size?: number; color?: string; flip?: boolean }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 80 40" fill="none" style={{ color, transform: flip ? "scaleX(-1)" : undefined }}>
      <path d="M4 20 Q 25 6 50 18 Q 65 24 72 22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 18 L 73 22 L 67 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DoodleSwirl({ size = 50, color = "#D4A574" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" style={{ color }}>
      <path d="M25 8 Q 38 8 38 22 Q 38 36 22 36 Q 12 36 12 26 Q 12 18 22 18 Q 28 18 28 24 Q 28 28 24 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function StampSeal({ children, color = "#C46B5E", rotation = -8, size = "1.05rem" }: { children: React.ReactNode; color?: string; rotation?: number; size?: string }) {
  return (
    <span
      className="hand inline-flex items-center justify-center text-center leading-none px-4 py-3"
      style={{
        color,
        border: `2px solid ${color}`,
        borderRadius: "50%",
        transform: `rotate(${rotation}deg)`,
        width: "120px",
        height: "120px",
        fontSize: size,
        background: "rgba(244, 235, 218, 0.7)",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  )
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export function CraftShopDemoBanner() {
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
            <span className="text-muted-foreground">Maquette · Boutique artisanale</span>
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
