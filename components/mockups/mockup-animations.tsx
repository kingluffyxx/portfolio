/**
 * Animations CSS partagées pour les maquettes premium.
 * Scope : chaque mockup utilise sa classe racine (ex. .restaurant-mockup) pour éviter les fuites globales.
 */
export function MockupAnimations({ scope }: { scope: string }) {
  const css = `
    /* ─── Respect prefers-reduced-motion ─── */
    @media (prefers-reduced-motion: reduce) {
      .${scope} [data-anim] { animation: none !important; transition: none !important; }
    }

    /* ─── KEYFRAMES ─── */
    @keyframes ${scope}-fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ${scope}-fadeDown {
      from { opacity: 0; transform: translateY(-12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ${scope}-fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes ${scope}-slideRight {
      from { opacity: 0; transform: translateX(-30px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes ${scope}-slideLeft {
      from { opacity: 0; transform: translateX(30px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes ${scope}-scaleIn {
      from { opacity: 0; transform: scale(0.96); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes ${scope}-kenBurns {
      from { transform: scale(1); }
      to   { transform: scale(1.08); }
    }
    @keyframes ${scope}-float {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-8px); }
    }
    @keyframes ${scope}-pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 currentColor; opacity: 0.9; }
      50%      { box-shadow: 0 0 0 8px transparent; opacity: 1; }
    }
    @keyframes ${scope}-heartbeat {
      0%, 28%, 70%, 100% { transform: scale(1); }
      14%, 42%           { transform: scale(1.15); }
    }
    @keyframes ${scope}-marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes ${scope}-shimmer {
      0%   { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* ─── ENTRANCE ANIMATIONS (on load) ─── */
    .${scope} [data-anim="fade-up"]     { animation: ${scope}-fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .${scope} [data-anim="fade-down"]   { animation: ${scope}-fadeDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .${scope} [data-anim="fade-in"]     { animation: ${scope}-fadeIn 1.2s ease-out both; }
    .${scope} [data-anim="slide-right"] { animation: ${scope}-slideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .${scope} [data-anim="slide-left"]  { animation: ${scope}-slideLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .${scope} [data-anim="scale-in"]    { animation: ${scope}-scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }

    /* ─── DELAYS (stagger) ─── */
    .${scope} [data-delay="100"]  { animation-delay: 0.1s; }
    .${scope} [data-delay="200"]  { animation-delay: 0.2s; }
    .${scope} [data-delay="300"]  { animation-delay: 0.3s; }
    .${scope} [data-delay="400"]  { animation-delay: 0.4s; }
    .${scope} [data-delay="500"]  { animation-delay: 0.5s; }
    .${scope} [data-delay="600"]  { animation-delay: 0.6s; }
    .${scope} [data-delay="700"]  { animation-delay: 0.7s; }
    .${scope} [data-delay="800"]  { animation-delay: 0.8s; }
    .${scope} [data-delay="1000"] { animation-delay: 1s; }

    /* ─── CONTINUOUS EFFECTS ─── */
    .${scope} [data-anim="ken-burns"] { animation: ${scope}-kenBurns 12s ease-in-out infinite alternate; }
    .${scope} [data-anim="float"]     { animation: ${scope}-float 5s ease-in-out infinite; }
    .${scope} [data-anim="heartbeat"] { animation: ${scope}-heartbeat 2.2s ease-in-out infinite; }

    /* ─── SCROLL-DRIVEN (Chrome 115+, modern browsers) ─── */
    @supports (animation-timeline: view()) {
      .${scope} [data-reveal] {
        animation: ${scope}-fadeUp 1s linear both;
        animation-timeline: view();
        animation-range: entry 5% cover 25%;
      }
      .${scope} [data-reveal="scale"] {
        animation: ${scope}-scaleIn 1s linear both;
        animation-timeline: view();
        animation-range: entry 5% cover 25%;
      }
      .${scope} [data-reveal="slide-right"] {
        animation: ${scope}-slideRight 1s linear both;
        animation-timeline: view();
        animation-range: entry 5% cover 30%;
      }
      .${scope} [data-reveal="slide-left"] {
        animation: ${scope}-slideLeft 1s linear both;
        animation-timeline: view();
        animation-range: entry 5% cover 30%;
      }
      .${scope} [data-parallax] {
        animation: ${scope}-kenBurns linear both;
        animation-timeline: view();
        animation-range: cover;
      }
    }
    /* Fallback : visible par défaut si pas de support scroll-timeline */
    @supports not (animation-timeline: view()) {
      .${scope} [data-reveal] { opacity: 1; }
    }

    /* ─── MARQUEE (logos band) ─── */
    .${scope} [data-anim="marquee"] {
      display: flex;
      gap: 4rem;
      animation: ${scope}-marquee 30s linear infinite;
      width: max-content;
    }
    .${scope} .marquee-mask {
      mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
      overflow: hidden;
    }

    /* ─── HOVER UTILITIES ─── */
    .${scope} [data-hover="lift"] {
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
    }
    .${scope} [data-hover="lift"]:hover {
      transform: translateY(-6px);
    }
    .${scope} [data-hover="zoom-img"] img {
      transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .${scope} [data-hover="zoom-img"]:hover img {
      transform: scale(1.06);
    }

    /* ─── SHIMMER TEXT (accent) ─── */
    .${scope} [data-anim="shimmer"] {
      background: linear-gradient(
        90deg,
        currentColor 0%,
        currentColor 40%,
        rgba(255, 255, 255, 0.7) 50%,
        currentColor 60%,
        currentColor 100%
      );
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${scope}-shimmer 4s linear infinite;
    }

    /* ─── PULSE DOT ─── */
    .${scope} [data-anim="pulse-dot"]::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: inherit;
      background: currentColor;
      opacity: 0.4;
      animation: ${scope}-pulseGlow 2s ease-out infinite;
      z-index: -1;
    }
  `

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
