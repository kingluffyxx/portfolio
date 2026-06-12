export type TemplateCategory =
  | "vitrine"
  | "ecommerce"
  | "saas"
  | "local"

export type Locale = "fr" | "en"

/** Locale-sensitive content of a template */
export interface TemplateContent {
  title: string
  industry: string
  description: string
  ctaLabel: string
  mood: string
  mockup?: TemplateMockup
}

export interface Template {
  slug: string
  category: TemplateCategory
  /** Locale-neutral visual + identity */
  style: {
    primary: string
    secondary: string
    bg: string
    font: "serif" | "sans" | "mono"
  }
  features: string[]
  recommendedService: string
  /** Si défini, la card devient un vrai projet live (badge + lien externe) */
  liveUrl?: string
  /** Tags techniques affichés quand c'est un vrai projet */
  techStack?: string[]
  /** Screenshot réel du projet, affiché à la place du mockup CSS */
  image?: string
  fr: TemplateContent
  en: TemplateContent
}

export interface TemplateMockup {
  brand: string
  tagline: string
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta?: string
    badge?: string
  }
  nav: string[]
  /** Section "services / prestations / cartes" — varie selon le secteur */
  offerings: {
    sectionTitle: string
    items: { title: string; description: string; price?: string }[]
  }
  /** Section "à propos / signature / histoire" */
  about: {
    title: string
    body: string
    bullets: string[]
  }
  /** Section "galerie / témoignages / chiffres" */
  proof: {
    type: "stats" | "testimonials"
    title: string
    items:
      | { value: string; label: string }[]
      | { quote: string; author: string; role: string }[]
  }
  contact: {
    title: string
    body: string
    address?: string
    hours?: string
    phone?: string
  }
}

export function getLocalizedTemplate(t: Template, locale: Locale): TemplateContent {
  return locale === "en" ? t.en : t.fr
}

export const templates: Template[] = [
  {
    slug: "restaurant-bistrot",
    category: "vitrine",
    style: {
      primary: "#C4956C",
      secondary: "#3D2817",
      bg: "#1A0F08",
      font: "serif",
    },
    features: [
      "Menu interactif catégorisé",
      "Réservation en ligne (Le Fork, Bistro)",
      "Galerie photo plats",
      "Carte Google Maps intégrée",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/restaurant-bistrot-v2.jpg",
    fr: {
      title: "Restaurant & Bistrot",
      industry: "Restauration",
      description:
        "Site élégant pour restaurant : menu, réservation en ligne, galerie photo, horaires et localisation.",
      ctaLabel: "Réserver une table",
      mood: "Chaleureux & gastronomique",
      mockup: {
        brand: "L'Atelier des Saveurs",
        tagline: "Cuisine de saison · Bistronomie",
        nav: ["Carte", "L'équipe", "Réserver", "Contact"],
        hero: {
          eyebrow: "Restaurant bistronomique",
          title: "La cuisine du marché, sans détour.",
          subtitle:
            "Une carte courte qui change chaque semaine, des produits sourcés en circuit court et une cave naturelle.",
          primaryCta: "Réserver une table",
          secondaryCta: "Voir la carte",
          badge: "Ouvert ce soir · 19h-23h",
        },
        offerings: {
          sectionTitle: "Carte de la semaine",
          items: [
            { title: "Velouté de potimarron, huile de noisette", description: "Crémeux torréfié, brunoise de pomme verte.", price: "12€" },
            { title: "Cabillaud de petit bateau, beurre blanc", description: "Légumes racines glacés, sarrasin grillé.", price: "26€" },
            { title: "Joue de bœuf braisée 8h, polenta crémeuse", description: "Jus court au vin rouge, oignons fondants.", price: "24€" },
            { title: "Tarte fine aux pommes, glace au lait ribot", description: "Pâte feuilletée maison, caramel au beurre salé.", price: "10€" },
          ],
        },
        about: {
          title: "Une équipe, une cuisine, un lieu.",
          body:
            "Camille et Thomas se sont rencontrés en cuisine il y a 12 ans. Ils ont ouvert L'Atelier en 2022 pour proposer une bistronomie sans chichis, ancrée dans le territoire.",
          bullets: [
            "Produits locaux et de saison",
            "Cave 100% nature et bio",
            "Menu midi à 22€ en semaine",
          ],
        },
        proof: {
          type: "stats",
          title: "Le restaurant en chiffres",
          items: [
            { value: "4.8/5", label: "Sur Google · 312 avis" },
            { value: "1", label: "Étoile Michelin Plate" },
            { value: "30", label: "Couverts par service" },
            { value: "2022", label: "Année d'ouverture" },
          ],
        },
        contact: {
          title: "Nous trouver",
          body: "Réservation recommandée le soir et le weekend.",
          address: "14 rue des Halles · 31000 Toulouse",
          hours: "Mar-Sam · 12h-14h · 19h-23h",
          phone: "05 61 23 45 67",
        },
      },
    },
    en: {
      title: "Restaurant & Bistro",
      industry: "Restaurant",
      description:
        "Refined site for restaurants: menu, online booking, photo gallery, hours and location.",
      ctaLabel: "Book a table",
      mood: "Warm & gastronomic",
      mockup: {
        brand: "L'Atelier des Saveurs",
        tagline: "Seasonal cuisine · Bistronomy",
        nav: ["Menu", "The team", "Book", "Contact"],
        hero: {
          eyebrow: "Bistronomy restaurant",
          title: "Market cuisine, no detours.",
          subtitle:
            "A short menu that changes every week, locally sourced produce and a natural wine cellar.",
          primaryCta: "Book a table",
          secondaryCta: "See the menu",
          badge: "Open tonight · 7pm-11pm",
        },
        offerings: {
          sectionTitle: "This week's menu",
          items: [
            { title: "Pumpkin velouté, hazelnut oil", description: "Roasted cream, green apple brunoise.", price: "€12" },
            { title: "Day-boat cod, beurre blanc", description: "Glazed root vegetables, toasted buckwheat.", price: "€26" },
            { title: "8-hour braised beef cheek, creamy polenta", description: "Red wine reduction, melting onions.", price: "€24" },
            { title: "Thin apple tart, ribot milk ice cream", description: "House puff pastry, salted caramel.", price: "€10" },
          ],
        },
        about: {
          title: "One team, one kitchen, one place.",
          body:
            "Camille and Thomas met in a kitchen 12 years ago. They opened L'Atelier in 2022 to offer honest bistronomy rooted in the local area.",
          bullets: [
            "Local and seasonal produce",
            "100% natural and organic wine list",
            "Weekday lunch menu at €22",
          ],
        },
        proof: {
          type: "stats",
          title: "The restaurant in numbers",
          items: [
            { value: "4.8/5", label: "Google · 312 reviews" },
            { value: "1", label: "Michelin Plate" },
            { value: "30", label: "Covers per service" },
            { value: "2022", label: "Opening year" },
          ],
        },
        contact: {
          title: "Find us",
          body: "Booking recommended for evenings and weekends.",
          address: "14 rue des Halles · 31000 Toulouse",
          hours: "Tue-Sat · 12pm-2pm · 7pm-11pm",
          phone: "+33 5 61 23 45 67",
        },
      },
    },
  },
  {
    slug: "artisan-btp",
    category: "vitrine",
    style: {
      primary: "#F59E0B",
      secondary: "#1F2937",
      bg: "#0F172A",
      font: "sans",
    },
    features: [
      "Demande de devis express",
      "Portfolio avant/après chantiers",
      "Zones d'intervention géolocalisées",
      "Avis clients et certifications",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/artisan-btp-v2.jpg",
    fr: {
      title: "Artisan & BTP",
      industry: "Bâtiment",
      description:
        "Site pro pour artisan : présentation des services, portfolio de chantiers, devis en ligne et avis clients.",
      ctaLabel: "Demander un devis",
      mood: "Solide & rassurant",
    },
    en: {
      title: "Tradesperson & Construction",
      industry: "Construction",
      description:
        "Professional site for tradespeople: services, project portfolio, online quotes and customer reviews.",
      ctaLabel: "Request a quote",
      mood: "Solid & reassuring",
    },
  },
  {
    slug: "salon-beaute",
    category: "vitrine",
    style: {
      primary: "#EC4899",
      secondary: "#831843",
      bg: "#FDF2F8",
      font: "sans",
    },
    features: [
      "Réservation en ligne 24/7",
      "Catalogue prestations + prix",
      "Présentation équipe et expertises",
      "Programme fidélité",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/salon-beaute-v2.jpg",
    fr: {
      title: "Salon de beauté",
      industry: "Beauté & bien-être",
      description:
        "Site moderne pour salon : réservation en ligne, prestations, équipe, galerie et fidélisation.",
      ctaLabel: "Prendre RDV",
      mood: "Élégant & moderne",
      mockup: {
        brand: "Maison Rosée",
        tagline: "Salon de coiffure & soins · Paris 11e",
        nav: ["Prestations", "L'équipe", "Réserver", "Boutique"],
        hero: {
          eyebrow: "Salon de coiffure & soins",
          title: "Votre rituel beauté, à votre rythme.",
          subtitle:
            "Coupe, couleur, soin et coiffure d'événement. Réservation 24/7, équipe formée aux dernières techniques.",
          primaryCta: "Prendre rendez-vous",
          secondaryCta: "Voir les prestations",
          badge: "Prochain créneau : demain 14h30",
        },
        offerings: {
          sectionTitle: "Nos prestations signature",
          items: [
            { title: "Coupe et brushing femme", description: "Diagnostic, coupe sur-mesure, soin et coiffage.", price: "55€" },
            { title: "Coloration naturelle", description: "Sans ammoniaque, soin réparateur inclus.", price: "à partir de 75€" },
            { title: "Soin botanique", description: "Rituel cuir chevelu, massage et masque réparateur.", price: "45€" },
            { title: "Coiffure mariage", description: "Essai inclus, déplacement possible sur Paris.", price: "180€" },
          ],
        },
        about: {
          title: "Une équipe formée, des produits choisis.",
          body:
            "Maison Rosée a ouvert en 2019 avec une conviction : prendre le temps de chaque cliente. Notre équipe se forme deux fois par an chez Davines et L'Oréal.",
          bullets: [
            "Marques Davines, Olaplex et Christophe Robin",
            "Produits véganes et cruelty-free",
            "Carte fidélité : -15% à la 6e visite",
          ],
        },
        proof: {
          type: "testimonials",
          title: "Ce qu'en disent les clientes",
          items: [
            { quote: "Je viens depuis 2 ans, jamais déçue. Sarah comprend exactement ce que je veux et la coloration tient des semaines.", author: "Margot D.", role: "Cliente fidèle" },
            { quote: "Salon hyper agréable, équipe à l'écoute et le résultat est toujours au rendez-vous. La réservation en ligne change la vie.", author: "Inès B.", role: "Cliente depuis 2023" },
          ],
        },
        contact: {
          title: "Venir nous voir",
          body: "Métro Bastille ou Voltaire · Parking Saint-Antoine à 3 min.",
          address: "27 rue Saint-Bernard · 75011 Paris",
          hours: "Mar-Sam · 10h-19h",
          phone: "01 43 56 78 90",
        },
      },
    },
    en: {
      title: "Beauty salon",
      industry: "Beauty & wellness",
      description:
        "Modern site for salons: 24/7 online booking, services, team, gallery and loyalty.",
      ctaLabel: "Book an appointment",
      mood: "Elegant & modern",
      mockup: {
        brand: "Maison Rosée",
        tagline: "Hair salon & treatments · Paris 11",
        nav: ["Services", "The team", "Book", "Shop"],
        hero: {
          eyebrow: "Hair salon & treatments",
          title: "Your beauty ritual, at your own pace.",
          subtitle:
            "Cut, color, treatment and event styling. 24/7 booking, a team trained in the latest techniques.",
          primaryCta: "Book an appointment",
          secondaryCta: "View services",
          badge: "Next slot: tomorrow 2:30pm",
        },
        offerings: {
          sectionTitle: "Our signature services",
          items: [
            { title: "Women's cut and blow-dry", description: "Consultation, tailored cut, treatment and styling.", price: "€55" },
            { title: "Natural coloring", description: "Ammonia-free, repair treatment included.", price: "from €75" },
            { title: "Botanical treatment", description: "Scalp ritual, massage and repair mask.", price: "€45" },
            { title: "Wedding hairstyling", description: "Trial included, on-site possible in Paris.", price: "€180" },
          ],
        },
        about: {
          title: "A trained team, carefully chosen products.",
          body:
            "Maison Rosée opened in 2019 with one conviction: take the time each client deserves. Our team trains twice a year with Davines and L'Oréal.",
          bullets: [
            "Davines, Olaplex and Christophe Robin",
            "Vegan and cruelty-free products",
            "Loyalty card: 15% off on your 6th visit",
          ],
        },
        proof: {
          type: "testimonials",
          title: "What clients say",
          items: [
            { quote: "I've been coming for 2 years and have never been disappointed. Sarah understands exactly what I want and the color holds for weeks.", author: "Margot D.", role: "Regular client" },
            { quote: "Lovely salon, attentive team and great results every time. Online booking is a game changer.", author: "Inès B.", role: "Client since 2023" },
          ],
        },
        contact: {
          title: "Visit us",
          body: "Metro Bastille or Voltaire · Saint-Antoine parking 3 min away.",
          address: "27 rue Saint-Bernard · 75011 Paris",
          hours: "Tue-Sat · 10am-7pm",
          phone: "+33 1 43 56 78 90",
        },
      },
    },
  },
  {
    slug: "cabinet-medical",
    category: "vitrine",
    style: {
      primary: "#0EA5E9",
      secondary: "#0C4A6E",
      bg: "#F8FAFC",
      font: "sans",
    },
    features: [
      "Intégration Doctolib",
      "Présentation du praticien et formations",
      "Spécialités et tarifs",
      "Accès, parking et accessibilité",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/cabinet-medical-v2.jpg",
    fr: {
      title: "Cabinet médical & libéral",
      industry: "Santé",
      description:
        "Site professionnel pour médecin, ostéopathe ou kiné : présentation, Doctolib, infos pratiques.",
      ctaLabel: "Prendre rendez-vous",
      mood: "Clinique & rassurant",
    },
    en: {
      title: "Medical practice",
      industry: "Healthcare",
      description:
        "Professional site for doctors, osteopaths and physiotherapists: profile, booking, practical info.",
      ctaLabel: "Book an appointment",
      mood: "Clinical & reassuring",
    },
  },
  {
    slug: "coach-consultant",
    category: "vitrine",
    style: {
      primary: "#8B5CF6",
      secondary: "#4C1D95",
      bg: "#0F0F0F",
      font: "sans",
    },
    features: [
      "Hero personnel branding fort",
      "Catalogue offres et tarifs",
      "Témoignages clients vidéo",
      "Booking Cal.com intégré",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/coach-consultant-v2.jpg",
    fr: {
      title: "Coach & Consultant",
      industry: "Coaching",
      description:
        "Site personal branding pour coach, consultant ou formateur : offres, témoignages, blog et booking.",
      ctaLabel: "Réserver un appel",
      mood: "Premium & inspirant",
    },
    en: {
      title: "Coach & Consultant",
      industry: "Coaching",
      description:
        "Personal branding site for coaches, consultants and trainers: offers, testimonials, blog and booking.",
      ctaLabel: "Book a call",
      mood: "Premium & inspiring",
    },
  },
  {
    slug: "ecommerce-mode",
    category: "ecommerce",
    style: {
      primary: "#000000",
      secondary: "#FAFAFA",
      bg: "#FFFFFF",
      font: "serif",
    },
    features: [
      "Catalogue produits avec filtres",
      "Paiement Stripe, Apple Pay",
      "Compte client + suivi commandes",
      "Programme fidélité et codes promo",
    ],
    recommendedService: "boutique-en-ligne",
    image: "/images/templates/ecommerce-mode-v2.jpg",
    fr: {
      title: "Boutique mode & accessoires",
      industry: "E-commerce mode",
      description:
        "Boutique en ligne DTC : catalogue produits, panier, paiement, comptes clients et programme fidélité.",
      ctaLabel: "Acheter maintenant",
      mood: "Minimaliste & premium",
      mockup: {
        brand: "MAISON NORD",
        tagline: "Vêtements essentiels · Fabriqués en Europe",
        nav: ["Femme", "Homme", "Nouveautés", "Journal"],
        hero: {
          eyebrow: "Collection automne 2026",
          title: "Le vestiaire essentiel.",
          subtitle:
            "Des pièces simples, coupées dans de bonnes matières, fabriquées au Portugal en petites séries.",
          primaryCta: "Découvrir la collection",
          secondaryCta: "Lookbook automne",
          badge: "Livraison offerte dès 120€",
        },
        offerings: {
          sectionTitle: "Sélection de la semaine",
          items: [
            { title: "T-shirt en jersey épais", description: "Coton biologique 240g, coupe boxy, 4 coloris.", price: "45€" },
            { title: "Pantalon large en laine", description: "100% laine vierge, taille haute, doublure satin.", price: "195€" },
            { title: "Trench coton ciré", description: "Toile italienne, ceinture amovible, unisexe.", price: "320€" },
            { title: "Pull col rond mérinos", description: "Mérinos extra-fin 18.5 microns, tricoté au Portugal.", price: "135€" },
          ],
        },
        about: {
          title: "Une maison, deux ateliers, zéro intermédiaire.",
          body:
            "MAISON NORD est née en 2021 avec l'idée de vendre directement au client des vêtements bien faits, dans des matières que l'on aimerait porter pendant 10 ans. Nous travaillons avec deux ateliers familiaux au Portugal.",
          bullets: [
            "Matières naturelles uniquement (coton bio, laine, lin)",
            "Petites séries, pas de soldes",
            "Retours gratuits sous 30 jours",
          ],
        },
        proof: {
          type: "stats",
          title: "La marque en chiffres",
          items: [
            { value: "12k", label: "Clients fidèles" },
            { value: "4.9/5", label: "Avis Trustpilot · 2 100 avis" },
            { value: "98%", label: "Production en Europe" },
            { value: "2021", label: "Création de la marque" },
          ],
        },
        contact: {
          title: "Service client",
          body: "Réponse sous 24h en semaine. Showroom sur rendez-vous à Paris.",
          address: "Showroom · 12 rue Charlot · 75003 Paris",
          hours: "Lun-Ven · 10h-18h (RDV)",
          phone: "service@maison-nord.com",
        },
      },
    },
    en: {
      title: "Fashion & accessories shop",
      industry: "Fashion e-commerce",
      description:
        "Direct-to-consumer online shop: catalog, cart, payment, customer accounts and loyalty program.",
      ctaLabel: "Shop now",
      mood: "Minimalist & premium",
      mockup: {
        brand: "MAISON NORD",
        tagline: "Essential clothing · Made in Europe",
        nav: ["Women", "Men", "New arrivals", "Journal"],
        hero: {
          eyebrow: "Fall collection 2026",
          title: "The essential wardrobe.",
          subtitle:
            "Simple pieces, cut in good materials, made in Portugal in small runs.",
          primaryCta: "Discover the collection",
          secondaryCta: "Fall lookbook",
          badge: "Free shipping from €120",
        },
        offerings: {
          sectionTitle: "This week's picks",
          items: [
            { title: "Heavy jersey t-shirt", description: "Organic cotton 240g, boxy fit, 4 colors.", price: "€45" },
            { title: "Wide-leg wool trousers", description: "100% virgin wool, high waist, satin lining.", price: "€195" },
            { title: "Waxed cotton trench", description: "Italian canvas, removable belt, unisex.", price: "€320" },
            { title: "Merino crewneck sweater", description: "Extra-fine 18.5 micron merino, knit in Portugal.", price: "€135" },
          ],
        },
        about: {
          title: "One house, two workshops, no middlemen.",
          body:
            "MAISON NORD was founded in 2021 to sell well-made clothes directly to customers, in materials worth wearing for 10 years. We work with two family-owned workshops in Portugal.",
          bullets: [
            "Natural fibers only (organic cotton, wool, linen)",
            "Small runs, no sales",
            "Free returns within 30 days",
          ],
        },
        proof: {
          type: "stats",
          title: "The brand in numbers",
          items: [
            { value: "12k", label: "Loyal customers" },
            { value: "4.9/5", label: "Trustpilot · 2,100 reviews" },
            { value: "98%", label: "Made in Europe" },
            { value: "2021", label: "Brand founded" },
          ],
        },
        contact: {
          title: "Customer service",
          body: "Replies within 24h on weekdays. Showroom by appointment in Paris.",
          address: "Showroom · 12 rue Charlot · 75003 Paris",
          hours: "Mon-Fri · 10am-6pm (by appointment)",
          phone: "service@maison-nord.com",
        },
      },
    },
  },
  {
    slug: "ecommerce-artisan",
    category: "ecommerce",
    style: {
      primary: "#84CC16",
      secondary: "#365314",
      bg: "#F7FEE7",
      font: "serif",
    },
    features: [
      "Pages produit narratives",
      "Calcul de livraison Mondial Relay/Colissimo",
      "Mode multilingue FR/EN",
      "Newsletter et fidélisation",
    ],
    recommendedService: "boutique-en-ligne",
    image: "/images/templates/ecommerce-artisan-v2.jpg",
    fr: {
      title: "Boutique artisanale",
      industry: "E-commerce artisanal",
      description:
        "Boutique pour créateurs et artisans : storytelling produit, paiement, livraison France & Europe.",
      ctaLabel: "Découvrir la collection",
      mood: "Authentique & nature",
    },
    en: {
      title: "Artisan shop",
      industry: "Artisan e-commerce",
      description:
        "Shop for makers and artisans: product storytelling, payment, France & Europe shipping.",
      ctaLabel: "Discover the collection",
      mood: "Authentic & natural",
    },
  },
  {
    slug: "citrusforge",
    category: "saas",
    style: {
      primary: "#FAFAFA",
      secondary: "#0A0A0A",
      bg: "#0A0A0A",
      font: "sans",
    },
    features: [
      "Intégration multi-modèles IA (Sora, Veo 3, Pika, Runway)",
      "Génération Text-to-Image et Text-to-Video",
      "Système de crédits et abonnements Stripe",
      "Dashboard utilisateur personnalisé",
    ],
    recommendedService: "application-sur-mesure",
    liveUrl: "https://citrus-forge.com",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "IA", "Stripe"],
    image: "/images/projects/citrusforge.jpg",
    fr: {
      title: "CitrusForge",
      industry: "SaaS · Génération de contenu IA",
      description:
        "Plateforme SaaS de génération de contenu IA avec les meilleurs modèles du marché.",
      ctaLabel: "Visiter le site",
      mood: "Projet en production",
    },
    en: {
      title: "CitrusForge",
      industry: "SaaS · AI content generation",
      description:
        "SaaS platform for AI content generation using top-tier models.",
      ctaLabel: "Visit the site",
      mood: "Project in production",
    },
  },
  {
    slug: "agence-immo",
    category: "local",
    style: {
      primary: "#DC2626",
      secondary: "#7F1D1D",
      bg: "#FAFAFA",
      font: "sans",
    },
    features: [
      "Catalogue biens avec photos HD",
      "Recherche multicritères (prix, surface, ville)",
      "Estimation en ligne",
      "Pages agent et zones géographiques",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/agence-immo-v2.jpg",
    fr: {
      title: "Agence immobilière",
      industry: "Immobilier",
      description:
        "Site agence immo : catalogue biens, recherche multicritères, estimation, présentation agents.",
      ctaLabel: "Estimer mon bien",
      mood: "Sérieux & local",
    },
    en: {
      title: "Real estate agency",
      industry: "Real estate",
      description:
        "Real estate agency site: listings catalog, multi-criteria search, valuation, agent profiles.",
      ctaLabel: "Get a valuation",
      mood: "Serious & local",
    },
  },
  {
    slug: "photographe-portfolio",
    category: "vitrine",
    style: {
      primary: "#D4A574",
      secondary: "#1A1614",
      bg: "#F5F2EC",
      font: "sans",
    },
    features: [
      "Galerie plein écran immersive",
      "Scroll horizontal des séries photo",
      "Cas clients avec mise en page éditoriale",
      "Devis sur-mesure & booking",
    ],
    recommendedService: "site-vitrine",
    image: "/images/templates/photographe-portfolio-v2.jpg",
    fr: {
      title: "Photographe & créatif",
      industry: "Portfolio créatif",
      description:
        "Portfolio photographe immersif : galerie plein écran, scroll horizontal, cas clients, devis sur-mesure.",
      ctaLabel: "Voir le portfolio",
      mood: "Immersif & visuel",
    },
    en: {
      title: "Photographer & creative",
      industry: "Creative portfolio",
      description:
        "Immersive photographer portfolio: full-screen gallery, horizontal scroll, case studies, custom quotes.",
      ctaLabel: "View the portfolio",
      mood: "Immersive & visual",
    },
  },
]

export const templateCategories: Record<TemplateCategory, { fr: string; en: string }> = {
  vitrine: { fr: "Sites vitrine", en: "Showcase sites" },
  ecommerce: { fr: "Boutiques en ligne", en: "Online shops" },
  saas: { fr: "SaaS & applications", en: "SaaS & applications" },
  local: { fr: "Pro & locaux", en: "Local & professional" },
}
