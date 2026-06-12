export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "code"; lang: string; code: string }
  | { type: "callout"; title: string; text: string; tone?: "info" | "warning" | "success" }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "hr" }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string // ISO YYYY-MM-DD
  updated?: string
  category: string
  tags: string[]
  readingTime: number // minutes
  cover: string // emoji ou URL
  coverIsEmoji?: boolean
  content: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "blog-sous-dossier-ou-sous-domaine",
    title: "Blog en sous-dossier ou sous-domaine ? Le choix qui change tout pour votre SEO",
    excerpt:
      "Hébergez votre blog sur domaine.fr/blog plutôt que blog.domaine.fr : la différence sur votre référencement est plus grande que vous ne le pensez.",
    date: "2026-06-09",
    category: "SEO",
    tags: ["SEO", "architecture", "blog"],
    readingTime: 6,
    cover: "🔗",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Si vous lancez un blog pour soutenir votre site freelance ou votre boutique, vous allez vite tomber sur la question : sous-dossier ou sous-domaine ? La réponse n'est pas une affaire de goût. Elle a un impact direct sur la vitesse à laquelle vous allez ranker.",
      },
      {
        type: "h2",
        text: "Ce que Google voit vraiment",
      },
      {
        type: "p",
        text: "Pour Google, blog.exemple.fr et exemple.fr/blog ne sont pas la même chose. Le sous-domaine est analysé comme un site séparé. Il a sa propre autorité, ses propres backlinks, son propre historique. Le sous-dossier, lui, fait partie du domaine principal et contribue à son autorité globale.",
      },
      {
        type: "callout",
        title: "Le mot de John Mueller",
        text: "John Mueller (Google) répète depuis 2017 que les deux options peuvent fonctionner. En pratique, sur les sites freelance et PME que je vois passer, le sous-dossier prend l'avantage à chaque fois.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Pourquoi le sous-dossier gagne en pratique",
      },
      {
        type: "ul",
        items: [
          "Chaque article publié renforce l'autorité de l'ensemble du domaine, donc aussi de votre page d'accueil et de vos pages services.",
          "Les backlinks vers vos articles tirent toute votre architecture vers le haut, pas seulement le blog.",
          "Le maillage interne entre articles, pages services et page d'accueil est plus simple et plus naturel.",
          "Vous gardez une seule infrastructure technique (sitemap, robots, analytics, search console).",
        ],
      },
      {
        type: "h2",
        text: "Quand le sous-domaine se justifie",
      },
      {
        type: "p",
        text: "Le sous-domaine n'est pas mauvais en soi. Il se justifie quand la séparation est nécessaire pour des raisons techniques ou organisationnelles.",
      },
      {
        type: "ul",
        items: [
          "Vous utilisez deux stacks différentes (Next.js pour le site, WordPress hébergé ailleurs pour le blog).",
          "Une équipe distincte publie le blog et vous ne voulez pas mélanger les permissions.",
          "Le blog cible une langue ou un pays totalement différent du site principal.",
          "Votre blog est en réalité un site média complet, avec sa propre identité.",
        ],
      },
      {
        type: "h2",
        text: "Le cas typique du freelance",
      },
      {
        type: "p",
        text: "Vous êtes développeur, designer, consultant freelance. Vous voulez écrire des articles techniques pour montrer votre expertise et capter des recherches qualifiées. Votre site principal contient déjà une page d'accueil, des pages services et un portfolio. Le sous-dossier est presque toujours le bon choix : vous concentrez tout votre travail SEO sur un seul domaine.",
      },
      {
        type: "quote",
        text: "Un article sur l'audit SEO ne vous amène pas seulement des lecteurs. Il fait monter votre page « audit SEO » dans les résultats Google pour les clients qui veulent acheter.",
      },
      {
        type: "h2",
        text: "Comment migrer si vous êtes déjà sur un sous-domaine",
      },
      {
        type: "ol",
        items: [
          "Faites un export complet du contenu du blog (articles, médias, métadonnées).",
          "Préparez la nouvelle structure d'URL en sous-dossier sur le site principal.",
          "Mettez en place des redirections 301 de chaque ancienne URL vers la nouvelle.",
          "Mettez à jour la Search Console et soumettez le nouveau sitemap.",
          "Surveillez le trafic pendant 4 à 6 semaines, le temps que Google ré-indexe.",
        ],
      },
      {
        type: "h2",
        text: "Ce que je conseille concrètement",
      },
      {
        type: "p",
        text: "Pour 90 % des sites freelance et PME que je vois passer, la bonne réponse est : sous-dossier, point. Vous évitez de fragmenter votre autorité, vous simplifiez la maintenance et vous accélérez le ranking sur les requêtes commerciales.",
      },
      {
        type: "p",
        text: "Si vous hésitez sur votre cas particulier, écrivez-moi. Je regarde et je vous dis honnêtement ce qui a le plus de chance de payer dans les six prochains mois.",
      },
    ],
  },
  {
    slug: "wordpress-ou-nextjs-site-vitrine",
    title: "WordPress ou Next.js pour son site vitrine ? Le bon choix selon vos vrais besoins",
    excerpt:
      "Entre la souplesse de WordPress et la performance de Next.js, les critères qui comptent vraiment pour décider, sans vous laisser piéger par les modes.",
    date: "2026-05-30",
    category: "Création de site",
    tags: ["WordPress", "Next.js", "performance"],
    readingTime: 8,
    cover: "⚖️",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Tous les six mois je lis qu'il faut tout migrer en headless. Six mois plus tard que WordPress reste imbattable pour les PME. La vraie réponse est plus simple : ça dépend de qui va publier, à quelle vitesse, et combien votre site doit se charger sur mobile.",
      },
      {
        type: "h2",
        text: "Quatre critères qui décident",
      },
      {
        type: "ol",
        items: [
          "Qui édite le contenu et à quelle fréquence ?",
          "Combien de pages, et combien de variantes (multilingue, multi-marques) ?",
          "Quel est votre budget mensuel acceptable (hébergement, maintenance, plugins) ?",
          "Quelle performance Lighthouse vous est imposée par vos clients ou votre métier ?",
        ],
      },
      {
        type: "h2",
        text: "Quand WordPress reste imbattable",
      },
      {
        type: "p",
        text: "WordPress garde un avantage massif sur les sites où le client doit éditer en autonomie sans appeler son développeur. Avec un thème propre et un builder bien choisi (Bricks, Breakdance, ou Gutenberg natif), une PME peut publier des pages produit, des actualités, des landing pages sans aucune compétence technique.",
      },
      {
        type: "p",
        text: "C'est aussi le bon choix si votre budget mensuel pour l'hébergement et la maintenance plafonne autour de 80 à 150 €, et si votre site n'a pas besoin d'un score Lighthouse parfait pour ranker.",
      },
      {
        type: "callout",
        title: "Mythe à enterrer",
        text: "« WordPress, c'est lent. » Faux. WordPress bien optimisé (cache, image WebP, base de données propre, hébergement adapté) atteint sans difficulté 95+ sur Lighthouse mobile. Le problème vient des thèmes blindés de plugins, pas du CMS.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Quand Next.js devient le bon choix",
      },
      {
        type: "p",
        text: "Next.js prend l'avantage dès que votre site devient un produit : une application avec authentification, des fonctionnalités custom, des intégrations API multiples, un dashboard utilisateur. C'est aussi le bon choix si la performance est une question stratégique, par exemple pour un site e-commerce où chaque dixième de seconde se traduit en chiffre d'affaires.",
      },
      {
        type: "ul",
        items: [
          "Sites avec une vraie partie applicative (espace client, configurateur, calculateur).",
          "Sites éditoriaux à très fort trafic où chaque kilo de JavaScript compte.",
          "Sites où vous voulez un design sur-mesure que ni Elementor ni Divi ne sait produire.",
          "Sites où vous voulez un déploiement continu et des previews par branche.",
        ],
      },
      {
        type: "h2",
        text: "L'approche headless : le meilleur des deux ?",
      },
      {
        type: "p",
        text: "Headless WordPress (WordPress comme back-office + Next.js comme front) combine théoriquement les deux mondes. Le client édite dans une interface familière, le front est ultra-performant. En pratique, c'est aussi deux infrastructures à maintenir, deux fois plus de complexité et un coût plus élevé.",
      },
      {
        type: "p",
        text: "Je le recommande pour des projets à partir de 25 000 € de budget, où la performance et le contrôle éditorial sont tous les deux non-négociables.",
      },
      {
        type: "h2",
        text: "Tableau récapitulatif",
      },
      {
        type: "ul",
        items: [
          "Site vitrine PME, budget < 5 k€, édition par le client : WordPress.",
          "Boutique en ligne classique : WooCommerce ou Shopify, pas Next.js.",
          "Application web sur-mesure : Next.js sans hésiter.",
          "Site marketing très exigeant en performance et design : Next.js avec un CMS headless type Sanity ou Payload.",
          "Site éditorial très contenu-centric : WordPress, ou Next.js + CMS headless si vous voulez du sur-mesure.",
        ],
      },
      {
        type: "h2",
        text: "Le piège à éviter",
      },
      {
        type: "p",
        text: "Le piège, c'est de choisir la techno avant d'avoir clarifié qui publie et à quelle vitesse. J'ai vu des PME se lancer dans Next.js et abandonner après six mois parce qu'éditer une page demandait un développeur. J'ai vu des startups bricoler des plugins WordPress alors qu'un Next.js propre leur aurait coûté deux fois moins en maintenance.",
      },
      {
        type: "p",
        text: "La bonne question à se poser, ce n'est pas « Quelle est la meilleure techno en 2026 ? », mais « Qui va publier, à quelle fréquence, et qu'est-ce qui doit aller vite ? ».",
      },
    ],
  },
  {
    slug: "audit-seo-7-verifications-gratuites",
    title: "Audit SEO : 7 vérifications gratuites avant de payer qui que ce soit",
    excerpt:
      "Avant de signer un audit SEO à 800 €, voici les sept points que vous pouvez vérifier vous-même en 30 minutes. Si tout passe, vous avez une bonne base.",
    date: "2026-05-15",
    category: "SEO",
    tags: ["SEO", "audit", "checklist"],
    readingTime: 7,
    cover: "🔍",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Un audit SEO complet coûte entre 350 et 1 500 €. Avant de le payer, vous pouvez déjà détecter les fuites les plus communes en une demi-heure. Voici le check minimum.",
      },
      {
        type: "h2",
        text: "01. Votre site est-il indexé ?",
      },
      {
        type: "p",
        text: "Tapez site:votre-domaine.fr dans Google. Si vous voyez la plupart de vos pages, l'indexation va. Si vous en voyez beaucoup moins que ce que vous avez publié, vous avez un problème.",
      },
      {
        type: "h2",
        text: "02. Avez-vous un sitemap et un robots.txt ?",
      },
      {
        type: "p",
        text: "Allez sur votre-domaine.fr/sitemap.xml et votre-domaine.fr/robots.txt. Si vous obtenez une page blanche ou une 404, c'est déjà un problème majeur. Google a besoin de ces deux fichiers pour comprendre votre site.",
      },
      {
        type: "h2",
        text: "03. Vos titres et descriptions sont-ils uniques ?",
      },
      {
        type: "p",
        text: "Ouvrez 5 pages au hasard. Faites clic droit, voir code source, cherchez les balises <title> et <meta description>. Chaque page doit avoir un titre unique, sous 60 caractères, qui décrit le contenu. La description doit faire 130-160 caractères et donner envie de cliquer.",
      },
      {
        type: "callout",
        title: "Erreur fréquente",
        text: "Beaucoup de sites WordPress affichent le même title sur toutes les pages, ou utilisent Yoast sans avoir personnalisé les modèles. Une seule erreur de paramétrage et 80 % de vos pages sont mal référencées.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "04. Avez-vous une seule balise H1 par page ?",
      },
      {
        type: "p",
        text: "Outil de dev du navigateur, recherchez « h1 » dans les éléments. Vous devriez en voir exactement un par page, contenant le sujet principal. Pas zéro, pas trois.",
      },
      {
        type: "h2",
        text: "05. Votre site se charge-t-il en moins de 2,5 secondes ?",
      },
      {
        type: "p",
        text: "Testez sur PageSpeed Insights de Google. Pour ranker correctement aujourd'hui, votre LCP (Largest Contentful Paint) doit être sous 2,5 secondes sur mobile. Le CLS (Cumulative Layout Shift) doit être sous 0,1. L'INP doit être sous 200ms.",
      },
      {
        type: "h2",
        text: "06. Vos images ont-elles toutes un alt ?",
      },
      {
        type: "p",
        text: "Outil de dev, recherchez img. Chaque balise doit avoir un attribut alt qui décrit l'image. Ce n'est pas seulement pour le SEO : c'est aussi pour les lecteurs d'écran et l'accessibilité.",
      },
      {
        type: "h2",
        text: "07. Schema.org : avez-vous le minimum ?",
      },
      {
        type: "p",
        text: "Testez votre page d'accueil sur Rich Results Test de Google. Pour un freelance, vous devriez voir au minimum un schema Person ou ProfessionalService. Pour une PME locale, un LocalBusiness. Sans schema, vous laissez Google deviner, et il devine moins bien que vous.",
      },
      {
        type: "hr",
      },
      {
        type: "h2",
        text: "Si vos 7 points passent",
      },
      {
        type: "p",
        text: "Vous avez les fondations solides. Un audit SEO ne vous trouvera plus de fuites massives. Vous pouvez vous concentrer sur le contenu, les backlinks et la stratégie. Un accompagnement SEO continu vous apportera plus qu'un audit ponctuel.",
      },
      {
        type: "h2",
        text: "Si plusieurs points échouent",
      },
      {
        type: "p",
        text: "Là, un audit SEO sérieux est rentabilisé en quelques semaines. Vous perdez du trafic gratuit à cause de problèmes que vous ne voyez pas. Mon audit à 350 € couvre ces 7 points et 40 autres, et vous repartez avec un plan d'action priorisé.",
      },
    ],
  },
  {
    slug: "combien-coute-site-internet-2026",
    title: "Combien coûte vraiment un site internet en 2026 ? La grille tarifaire honnête",
    excerpt:
      "Site vitrine, e-commerce, application : voici les vraies fourchettes de prix observées en 2026 sur le marché français, et ce qui les fait varier.",
    date: "2026-05-02",
    category: "Création de site",
    tags: ["prix", "freelance", "guide"],
    readingTime: 9,
    cover: "💶",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Demander un site internet en 2026, c'est obtenir des devis entre 800 € et 80 000 €. La fourchette n'est pas aberrante : elle reflète des projets qui n'ont rien à voir. Voici comment lire un devis et savoir si le prix est juste.",
      },
      {
        type: "h2",
        text: "Site vitrine simple : 1 500 à 4 000 €",
      },
      {
        type: "p",
        text: "Cinq à dix pages, design adapté à votre marque, SEO technique de base, formulaire de contact. WordPress avec un thème personnalisé ou Next.js avec un CMS headless léger. Livré en 2 à 3 semaines. C'est le pack que prend un artisan, un cabinet libéral, une petite PME locale.",
      },
      {
        type: "ul",
        items: [
          "Sous 1 500 € : méfiez-vous, c'est probablement du template tout fait ou un freelance qui sous-traite à l'autre bout du monde.",
          "Entre 1 500 et 4 000 € : la zone honnête pour un site vitrine sur-mesure et propre techniquement.",
          "Au-delà : vous payez pour des options spécifiques (animations sur-mesure, contenu rédigé, photos, branding).",
        ],
      },
      {
        type: "h2",
        text: "Site e-commerce : 5 000 à 15 000 €",
      },
      {
        type: "p",
        text: "Catalogue produits, paiement Stripe, gestion commandes, comptes clients, intégration livraison. WooCommerce pour les catalogues classiques, Shopify pour ceux qui veulent zéro maintenance, ou sur-mesure Next.js + Stripe pour les marques premium.",
      },
      {
        type: "p",
        text: "Le prix dépend surtout du nombre de produits, des variantes, des intégrations (ERP, logistique, marketing), et du niveau de personnalisation visuelle.",
      },
      {
        type: "callout",
        title: "Coût caché à anticiper",
        text: "L'abonnement Shopify ou les plugins WooCommerce premium peuvent représenter 50 à 150 € par mois en plus du coût de création. Demandez toujours le total sur 3 ans, pas seulement le ticket d'entrée.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Application web sur-mesure : 15 000 à 60 000 €",
      },
      {
        type: "p",
        text: "Quand votre besoin sort du standard : SaaS, MVP de startup, dashboard métier, plateforme communautaire. Next.js + base de données + auth + paiement + admin. Livré en 6 à 16 semaines pour un MVP, puis itéré.",
      },
      {
        type: "p",
        text: "Sur cette tranche, vous ne payez pas seulement le développement initial. Vous payez aussi l'architecture qui doit tenir à 10x votre trafic actuel et qui doit pouvoir évoluer sans refonte.",
      },
      {
        type: "h2",
        text: "Refonte d'un site existant : 4 000 à 12 000 €",
      },
      {
        type: "p",
        text: "Le piège classique : « C'est moins cher qu'un nouveau site puisque le contenu existe déjà ». Faux. Une refonte coûte souvent presque autant qu'une création neuve, parce qu'il faut auditer l'existant, migrer le contenu, gérer les redirections 301 pour ne pas perdre votre SEO, et tester sur tous les flux existants.",
      },
      {
        type: "h2",
        text: "Hébergement et maintenance : 50 à 250 €/mois",
      },
      {
        type: "p",
        text: "Souvent oublié dans le devis initial. Pourtant, c'est ce qui détermine si votre site va planter pendant une promo ou non.",
      },
      {
        type: "ul",
        items: [
          "Hébergement mutualisé (Hostinger, o2switch) : 5 à 15 €/mois. Suffisant pour un site vitrine standard.",
          "Hébergement infogéré (Kinsta, WP Engine) : 30 à 80 €/mois. Pour les sites e-commerce ou à fort trafic.",
          "Vercel / Netlify pour Next.js : gratuit en hobby, 20 €/mois pro. Performance imbattable.",
          "Maintenance et mises à jour : 80 à 200 €/mois selon le périmètre.",
        ],
      },
      {
        type: "h2",
        text: "Les vrais facteurs qui font varier le prix",
      },
      {
        type: "ol",
        items: [
          "Le sur-mesure du design : un thème WordPress adapté coûte 30 % moins cher qu'un design sur-mesure intégré.",
          "Le contenu : rédiger 10 pages de qualité coûte 800 à 2 000 € en plus.",
          "Les langues : chaque langue supplémentaire ajoute 20 à 30 % du prix initial.",
          "Les intégrations (CRM, ERP, paiement, livraison, calendrier) : chacune représente 1 à 5 jours de dev.",
          "Le SEO : un SEO sérieux ajoute 1 000 à 3 000 € au devis. Sans ça, votre beau site reste invisible.",
        ],
      },
      {
        type: "h2",
        text: "Comment éviter de se faire avoir",
      },
      {
        type: "p",
        text: "Trois questions à poser à chaque devis : « Le SEO technique est-il inclus ? », « Qui paie l'hébergement et la maintenance, sur quelle base ? », « Que se passe-t-il si je veux changer de prestataire dans 2 ans ? ». Les réponses vous diront si vous travaillez avec un partenaire ou avec un piège.",
      },
    ],
  },
  {
    slug: "core-web-vitals-2026-checklist",
    title: "Core Web Vitals en 2026 : la checklist concrète pour passer au vert",
    excerpt:
      "LCP, CLS, INP : derrière les acronymes, des leviers techniques très précis. Voici la checklist que j'applique sur chaque site pour passer au vert sur PageSpeed.",
    date: "2026-04-18",
    category: "Performance",
    tags: ["performance", "Core Web Vitals", "Lighthouse"],
    readingTime: 8,
    cover: "⚡",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Depuis mars 2024, l'INP a remplacé le FID dans les Core Web Vitals. Ça change concrètement ce sur quoi vous devez travailler. Voici la check 2026, avec ce qui marche vraiment et ce qui ne sert à rien.",
      },
      {
        type: "h2",
        text: "Les 3 métriques qui comptent en 2026",
      },
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint) : le plus gros élément visible doit s'afficher en moins de 2,5 secondes.",
          "INP (Interaction to Next Paint) : votre site doit répondre en moins de 200 ms à une interaction.",
          "CLS (Cumulative Layout Shift) : la mise en page ne doit pas sauter pendant le chargement (score sous 0,1).",
        ],
      },
      {
        type: "h2",
        text: "Améliorer le LCP",
      },
      {
        type: "ol",
        items: [
          "Identifiez l'élément LCP avec PageSpeed Insights : c'est presque toujours une image hero ou un titre H1.",
          "Si c'est une image : preload, format AVIF ou WebP, taille adaptée au viewport, attribute fetchpriority=\"high\".",
          "Si c'est un titre : assurez-vous que la police est preloaded, sinon le texte attend la police avant de s'afficher.",
          "Supprimez les CSS bloquants au-dessus de la ligne de flottaison. Inlinez le critical CSS.",
          "Hébergez vos polices en local plutôt que de les charger depuis Google Fonts.",
        ],
      },
      {
        type: "h2",
        text: "Améliorer l'INP",
      },
      {
        type: "p",
        text: "L'INP mesure la réactivité de votre site. Si vous avez beaucoup de JavaScript qui s'exécute au chargement, votre site n'est pas réactif. Voici les leviers principaux :",
      },
      {
        type: "ul",
        items: [
          "Code-splittez votre JavaScript. Avec Next.js, c'est natif par route.",
          "Différez les scripts tiers (analytics, chat, pixel) avec defer ou async.",
          "Utilisez des Web Workers pour les calculs lourds.",
          "Évitez les listeners trop coûteux sur scroll ou resize : debouncez et throttlez.",
          "Limitez les re-renders React inutiles (memo, useCallback bien placés).",
        ],
      },
      {
        type: "callout",
        title: "Le tueur silencieux de l'INP",
        text: "Les Tag Managers (GTM, Tealium) chargent souvent 200 ko de scripts tiers qui bloquent votre thread principal. Mesurez l'impact avec l'extension Web Vitals : vous serez surpris.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Améliorer le CLS",
      },
      {
        type: "ol",
        items: [
          "Réservez l'espace de toutes les images avec width et height (ou aspect-ratio).",
          "Évitez d'injecter du contenu dynamique au-dessus du contenu existant (bannières, popups, cookies).",
          "Pour les fonts : utilisez font-display: swap avec un fallback similaire en métrique.",
          "Pour les iframes (vidéo, carte) : fixez une hauteur explicite.",
          "Pour les ads : réservez la slot avec sa taille définitive.",
        ],
      },
      {
        type: "h2",
        text: "L'outil unique à utiliser",
      },
      {
        type: "p",
        text: "PageSpeed Insights donne les Core Web Vitals à un instant T. Mais ce qui compte pour Google, ce sont les données « réelles » collectées par Chrome User Experience Report (CrUX). Connectez-vous à Search Console > Core Web Vitals pour voir ce que Google mesure vraiment sur vos pages.",
      },
      {
        type: "h2",
        text: "Le mythe à enterrer",
      },
      {
        type: "p",
        text: "« 100/100 sur PageSpeed » n'est pas le but. Ce qui compte, c'est de passer au vert sur les 3 métriques en données réelles. Un site à 85/100 mais avec un LCP réel à 1,8s rankera mieux qu'un site à 95/100 avec un LCP réel à 3,2s.",
      },
    ],
  },
]

export const blogCategories = Array.from(
  new Set(blogPosts.map((p) => p.category))
).sort()

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === slug)
  if (!current) return []
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      // Priorité : même catégorie d'abord
      const aSame = a.category === current.category ? 1 : 0
      const bSame = b.category === current.category ? 1 : 0
      if (aSame !== bSame) return bSame - aSame
      // Puis date desc
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}
