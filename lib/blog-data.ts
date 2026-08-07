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
    cover: "/blog/sous-dossier.jpg",
    coverIsEmoji: false,
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
    cover: "/blog/wordpress-nextjs.jpg",
    coverIsEmoji: false,
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
    updated: "2026-08-06",
    category: "SEO",
    tags: ["SEO", "audit", "checklist"],
    readingTime: 7,
    cover: "/blog/audit-seo.jpg",
    coverIsEmoji: false,
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
        text: "Là, un audit SEO sérieux est rentabilisé en quelques semaines. Vous perdez du trafic gratuit à cause de problèmes que vous ne voyez pas. [Mon audit SEO à 350 €](/services/audit-seo) couvre ces 7 points et 40 autres, et vous repartez avec un plan d'action priorisé.",
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
    cover: "/blog/cout-site.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Demander un site internet en 2026, c'est obtenir des devis entre 800 € et 80 000 €. La fourchette n'est pas aberrante : elle reflète des projets qui n'ont rien à voir. Voici comment lire un devis et savoir si le prix est juste. Et si vous ne savez pas encore quel budget prévoir, commencez par [cette méthode pour budgéter votre projet](/blog/comment-budgeter-projet-site-web).",
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
    cover: "/blog/core-web-vitals.jpg",
    coverIsEmoji: false,
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
  {
    slug: "j-ai-une-idee-de-site-par-ou-commencer",
    title: "J'ai une idée de site mais je ne sais pas par où commencer",
    excerpt:
      "Vous avez le projet en tête depuis des mois, sans jamais franchir le pas. Voici les étapes concrètes pour passer de l'idée à un site en ligne, sans compétence technique.",
    date: "2026-07-14",
    updated: "2026-08-06",
    category: "Création de site",
    tags: ["création de site", "débutant", "accompagnement"],
    readingTime: 7,
    cover: "/blog/idee-site.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "C'est la phrase que j'entends le plus souvent au premier rendez-vous : « J'ai une idée depuis longtemps, mais je ne sais pas comment m'y prendre. » Le blocage n'est presque jamais l'idée. C'est le fait de ne pas savoir quelle est la première marche.",
      },
      {
        type: "h2",
        text: "Le vrai blocage : vous croyez qu'il faut tout savoir avant de commencer",
      },
      {
        type: "p",
        text: "Beaucoup de gens attendent d'avoir « tout compris » sur les hébergeurs, les noms de domaine, WordPress, le référencement, avant d'oser lancer leur projet. Résultat : le projet reste dans un coin de la tête pendant deux ans. La vérité, c'est que vous n'avez pas besoin de tout savoir. Vous avez besoin de savoir quoi décider, et dans quel ordre.",
      },
      {
        type: "callout",
        title: "Vous n'êtes pas en retard",
        text: "La grande majorité des projets qui aboutissent partent d'une idée mal dégrossie et d'un budget serré. Ce qui fait la différence, ce n'est pas la perfection du départ, c'est le fait de commencer.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Étape 1 : posez à quoi sert le site en une phrase",
      },
      {
        type: "p",
        text: "Avant de parler technique, répondez à une seule question : que doit-il se passer quand quelqu'un arrive sur votre site ? Vous appeler ? Acheter un produit ? Réserver un créneau ? Lire vos articles ? Cette phrase oriente absolument tout le reste. Un site fait pour recevoir des appels ne ressemble pas à un site fait pour vendre en ligne.",
      },
      {
        type: "ul",
        items: [
          "« Je veux que les gens me contactent pour un devis » → site vitrine avec un formulaire clair.",
          "« Je veux vendre mes produits » → boutique en ligne.",
          "« Je veux que les gens réservent un rendez-vous » → site vitrine avec un module de réservation.",
          "« J'ai une idée d'outil ou de service en ligne » → application ou SaaS, un projet plus ambitieux.",
        ],
      },
      {
        type: "h2",
        text: "Étape 2 : listez ce que le visiteur doit pouvoir faire",
      },
      {
        type: "p",
        text: "Pas besoin de maquette ni de vocabulaire technique. Prenez une feuille et écrivez, comme si vous racontiez à un ami, ce que le visiteur doit voir et faire. « Il arrive, il comprend en dix secondes ce que je propose, il voit mes tarifs, il clique pour me contacter. » Ce petit texte vaut de l'or : c'est le cahier des charges de votre projet, en langage humain.",
      },
      {
        type: "h2",
        text: "Étape 3 : rassemblez ce que vous avez déjà",
      },
      {
        type: "p",
        text: "Vous avez probablement plus de matière que vous ne le pensez. Photos, logo, textes de présentation, avis clients, exemples de réalisations. Rassembler tout ça dans un dossier vous fait gagner un temps considérable, et vous fait souvent réaliser ce qui manque.",
      },
      {
        type: "ol",
        items: [
          "Un logo, ou au minimum le nom exact et l'orthographe voulue.",
          "Quelques photos de qualité (vos produits, votre lieu, vous au travail).",
          "Un texte qui explique ce que vous faites et pour qui.",
          "Vos coordonnées et vos éventuels tarifs.",
          "Des exemples de sites que vous aimez, pour donner le ton.",
        ],
      },
      {
        type: "quote",
        text: "Vous n'avez pas besoin d'un cahier des charges de vingt pages. Vous avez besoin de savoir ce que le visiteur doit ressentir et faire. Le reste, c'est mon métier.",
      },
      {
        type: "h2",
        text: "Étape 4 : le budget, plus simple qu'il n'y paraît",
      },
      {
        type: "p",
        text: "La question du budget bloque beaucoup de gens, souvent parce qu'ils n'ont aucun repère. Un [site vitrine](/services/site-vitrine) professionnel n'a pas le même coût qu'une [boutique en ligne](/services/boutique-en-ligne) ou qu'une [application sur-mesure](/services/application-sur-mesure). J'ai écrit [un article complet sur les fourchettes réelles en 2026](/blog/combien-coute-site-internet-2026) pour vous donner des repères clairs avant même de demander un devis.",
      },
      {
        type: "callout",
        title: "Le piège des solutions « gratuites »",
        text: "Les constructeurs de site en glisser-déposer semblent gratuits, mais coûtent en temps, en abonnements cachés et en référencement médiocre. Pour un projet sérieux, l'accompagnement d'un professionnel se rentabilise vite.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Étape 5 : parlez-en à quelqu'un dont c'est le métier",
      },
      {
        type: "p",
        text: "C'est là que je peux vous aider, même si votre idée est encore floue. Mon travail ne commence pas au code. Il commence en traduisant votre idée en un projet concret : quel type de site, quelles fonctionnalités utiles, quel budget réaliste, dans quel ordre. Vous n'avez rien à préparer de technique. Vous arrivez avec votre idée, je m'occupe du reste.",
      },
      {
        type: "h2",
        text: "En résumé",
      },
      {
        type: "p",
        text: "Une idée de site ne devient un projet qu'au moment où on la pose noir sur blanc. Décrivez à quoi il sert, ce que le visiteur doit faire, rassemblez ce que vous avez, et [faites-vous accompagner](/#contact) pour le reste. Si vous hésitez encore sur le format, [ce guide compare le site vitrine, la boutique et l'application](/blog/site-vitrine-ecommerce-ou-application). Le plus dur, c'est la première marche. Une fois posée, tout devient simple.",
      },
    ],
  },
  {
    slug: "site-vitrine-ecommerce-ou-application",
    title: "Site vitrine, boutique en ligne ou application : lequel choisir pour votre projet ?",
    excerpt:
      "Trois types de sites, trois budgets, trois logiques différentes. Voici comment savoir lequel correspond vraiment à votre besoin, sans payer pour ce qui ne vous servira pas.",
    date: "2026-08-04",
    updated: "2026-08-06",
    category: "Création de site",
    tags: ["création de site", "e-commerce", "application"],
    readingTime: 8,
    cover: "/blog/type-de-site.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "« Il me faut un site » veut tout et rien dire. Derrière cette phrase se cachent trois projets très différents, avec des budgets qui vont du simple au vingtuple. Choisir le bon dès le départ vous évite de payer trop, ou de vous retrouver limité six mois plus tard.",
      },
      {
        type: "h2",
        text: "Le site vitrine : montrer et être contacté",
      },
      {
        type: "p",
        text: "C'est le plus courant, et souvent le bon choix pour démarrer. Un [site vitrine](/services/site-vitrine) présente votre activité, vos services, vos réalisations, et pousse le visiteur à vous contacter. Il ne vend rien directement en ligne : son objectif est de générer des appels, des demandes de devis, des réservations.",
      },
      {
        type: "ul",
        items: [
          "Pour qui : artisans, freelances, professions libérales, restaurants, salons, PME de services.",
          "Ce qu'il fait : présenter, rassurer, donner envie de vous contacter.",
          "Ce qu'il ne fait pas : encaisser des paiements, gérer un catalogue, gérer des comptes clients.",
          "Budget indicatif : le plus accessible des trois.",
        ],
      },
      {
        type: "callout",
        title: "Le bon réflexe",
        text: "Si votre besoin est « qu'on me trouve sur Google et qu'on m'appelle », un site vitrine bien référencé suffit. Inutile de payer pour une boutique dont vous n'utiliserez jamais les fonctions.",
        tone: "success",
      },
      {
        type: "h2",
        text: "La boutique en ligne : vendre directement",
      },
      {
        type: "p",
        text: "Dès que vous voulez encaisser un paiement en ligne, vous passez sur une [boutique en ligne](/services/boutique-en-ligne) (e-commerce). C'est un cran au-dessus : il faut gérer un catalogue de produits, des stocks, des paiements sécurisés, des livraisons, parfois des comptes clients et des factures. C'est plus puissant, mais aussi plus lourd à maintenir.",
      },
      {
        type: "ul",
        items: [
          "Pour qui : commerçants, créateurs, marques qui vendent des produits physiques ou numériques.",
          "Ce qu'il fait : catalogue, panier, paiement, gestion des commandes et des stocks.",
          "Le point de vigilance : une boutique se maintient. Produits, prix, promotions, litiges : c'est un outil vivant.",
          "Budget indicatif : nettement supérieur au site vitrine.",
        ],
      },
      {
        type: "p",
        text: "Un piège fréquent : vouloir une boutique alors qu'on vend peu de produits, ou des prestations sur-mesure. Dans ces cas, un site vitrine avec un simple bouton de paiement ou un formulaire de commande fait souvent mieux le travail, pour bien moins cher.",
      },
      {
        type: "h2",
        text: "L'application sur-mesure : un outil qui n'existe pas encore",
      },
      {
        type: "p",
        text: "C'est le projet le plus ambitieux. Une [application sur-mesure](/services/application-sur-mesure) (ou SaaS) n'est pas un site qui présente une activité : c'est un outil que les gens utilisent. Un tableau de bord, un espace client, un logiciel en ligne, une plateforme qui met en relation des utilisateurs. C'est là qu'on parle de vraies fonctionnalités : comptes, données, logique métier, abonnements.",
      },
      {
        type: "ul",
        items: [
          "Pour qui : porteurs de projet avec une idée d'outil ou de service en ligne, entreprises qui veulent digitaliser un processus.",
          "Ce qu'il fait : ce que rien d'existant ne fait pour vous. C'est du sur-mesure.",
          "La logique : on part souvent d'une première version simple, puis on l'étoffe selon les retours des utilisateurs.",
          "Budget indicatif : le plus élevé, et le plus variable selon l'ambition.",
        ],
      },
      {
        type: "callout",
        title: "Commencer petit, même pour un gros projet",
        text: "Si vous avez une idée de SaaS, on ne construit pas tout d'un coup. On identifie le cœur de la valeur, on le sort en version minimale, et on avance par étapes. C'est moins risqué et bien plus efficace.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Comment trancher en trois questions",
      },
      {
        type: "ol",
        items: [
          "Est-ce que je veux encaisser un paiement directement sur le site ? Si non, un site vitrine suffit probablement.",
          "Est-ce que je vends un catalogue de produits ? Si oui, c'est une boutique en ligne.",
          "Est-ce que les gens doivent se connecter et utiliser un outil ? Si oui, c'est une application sur-mesure.",
        ],
      },
      {
        type: "quote",
        text: "Le meilleur projet n'est pas le plus gros. C'est celui qui répond à votre besoin réel, sans vous faire payer des fonctions que vous n'utiliserez jamais.",
      },
      {
        type: "h2",
        text: "En cas de doute, on en parle",
      },
      {
        type: "p",
        text: "Si vous hésitez encore, c'est normal, et c'est exactement le moment de m'en parler. En un échange, on clarifie votre besoin et on identifie le format juste, ni sous-dimensionné, ni surdimensionné. Vous repartez avec une idée claire de ce qu'il vous faut et de ce que ça coûte.",
      },
    ],
  },
  {
    slug: "freelance-ou-agence-nextjs",
    title: "Freelance ou agence Next.js : que choisir pour votre projet ?",
    excerpt:
      "Une agence Next.js facture une structure entière. Un freelance senior livre le même code, en direct et souvent 30 à 50 % moins cher. Voici comment trancher.",
    date: "2026-08-06",
    category: "Création de site",
    tags: ["next.js", "freelance", "agence"],
    readingTime: 6,
    cover: "🤝",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "Vous avez un projet Next.js et vous cherchez qui pour le construire. La première idée, c'est souvent « une agence ». Mais entre une agence Next.js et un développeur freelance senior, la différence de prix va du simple au double, pour un résultat technique souvent identique. Voici comment choisir sans vous tromper.",
      },
      {
        type: "h2",
        text: "Ce que vous payez dans une agence Next.js",
      },
      {
        type: "p",
        text: "Une agence, ce n'est pas seulement des développeurs. C'est aussi un chef de projet, un commercial, des locaux, une marge, et parfois plusieurs intermédiaires entre vous et la personne qui écrit réellement le code. Tout ça se retrouve sur la facture. Ce n'est pas du gaspillage en soi : sur un très gros projet avec plusieurs équipes à coordonner, cette structure a du sens.",
      },
      {
        type: "p",
        text: "Le problème, c'est quand vous payez cette structure pour un projet qui n'en a pas besoin : un site vitrine performant, une landing page SEO, un dashboard, un SaaS en phase de lancement. Là, vous financez de l'organisation dont votre projet ne tirera aucune valeur.",
      },
      {
        type: "h2",
        text: "Ce que change un freelance senior",
      },
      {
        type: "ul",
        items: [
          "Vous parlez directement à la personne qui code. Pas de téléphone arabe entre vous et la technique.",
          "Le devis est plus clair : vous payez du développement, pas une chaîne d'intermédiaires.",
          "Le tarif est souvent 30 à 50 % inférieur à une agence pour un périmètre équivalent.",
          "Les décisions vont plus vite : une question technique trouve sa réponse dans l'heure, pas dans le prochain point projet.",
        ],
      },
      {
        type: "callout",
        title: "Le code est le même",
        text: "Next.js, l'App Router, TypeScript, le SSR, les Core Web Vitals : ce sont les mêmes outils et les mêmes bonnes pratiques, que le développeur soit en agence ou en freelance. La qualité dépend du développeur, pas de la structure autour.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Quand l'agence reste le bon choix",
      },
      {
        type: "p",
        text: "Soyons honnêtes : le freelance n'est pas toujours la réponse. L'agence garde l'avantage dans quelques cas précis.",
      },
      {
        type: "ul",
        items: [
          "Projet très gros nécessitant plusieurs développeurs en parallèle, sur une longue durée.",
          "Besoin de garanties contractuelles lourdes et d'une continuité d'équipe imposée par votre direction.",
          "Vous voulez déléguer aussi le design, le contenu, le marketing, et pas seulement le développement.",
        ],
      },
      {
        type: "h2",
        text: "Comment trancher en une question",
      },
      {
        type: "p",
        text: "Demandez-vous : « Ai-je besoin d'une équipe, ou d'un bon développeur ? » Si votre projet tient dans la tête d'une personne compétente — un site, une app, un SaaS de lancement — le freelance vous fera économiser sans rien perdre en qualité. Si vous devez coordonner plusieurs chantiers en même temps sur des mois, l'agence se justifie.",
      },
      {
        type: "quote",
        text: "Vous ne payez pas pour un logo d'agence sur un devis. Vous payez pour du code qui marche et un site rapide. Choisissez en fonction de ça.",
      },
      {
        type: "h2",
        text: "En pratique",
      },
      {
        type: "p",
        text: "Si votre projet Next.js peut être porté par une personne, un [développeur Next.js freelance](/services/developpement-nextjs) est presque toujours le meilleur rapport qualité-prix : le même niveau technique, un contact direct, un budget maîtrisé. Décrivez-moi votre besoin, je vous dis franchement si un freelance suffit ou si vous avez vraiment besoin d'une agence — [on en parle ici](/#contact).",
      },
    ],
  },
  {
    slug: "comment-budgeter-projet-site-web",
    title: "Comment budgéter votre projet de site web avant de contacter un freelance",
    excerpt:
      "Vous avez une idée de site mais aucune idée du budget ? Voici la méthode simple pour estimer votre fourchette vous-même, avant même de demander un devis.",
    date: "2026-08-07",
    category: "Création de site",
    tags: ["budget", "création de site", "débutant"],
    readingTime: 8,
    cover: "💰",
    coverIsEmoji: true,
    content: [
      {
        type: "lead",
        text: "C'est une situation que je vois presque chaque semaine : quelqu'un a une idée claire de site, il veut avancer, il contacte un freelance… mais quand j'ai la question « quel budget avez-vous prévu ? », c'est le silence. Pas parce que la personne cache son budget : parce qu'elle n'en a aucune idée. Et c'est normal. Voici comment vous en construire un, tout seul, avant même de m'écrire.",
      },
      {
        type: "h2",
        text: "Pourquoi arriver sans budget vous dessert",
      },
      {
        type: "p",
        text: "Beaucoup de gens n'osent pas annoncer un budget par peur de « dire une bêtise » ou de se faire surfacturer. En réalité, c'est l'inverse. Un projet sans budget, c'est un projet flou, et un projet flou reçoit des devis flous. Le freelance ne sait pas s'il doit vous proposer une solution à 2 000 € ou à 20 000 €, alors il temporise, pose dix questions, ou pire, part sur une hypothèse à côté de vos moyens.",
      },
      {
        type: "callout",
        title: "Une fourchette suffit",
        text: "Vous n'avez pas besoin d'un chiffre exact. Dire « je pense à quelque chose entre 2 000 et 4 000 € » suffit à orienter tout l'échange. Ça ne vous engage pas, ça cadre la discussion.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Les 5 questions qui déterminent votre prix",
      },
      {
        type: "p",
        text: "Le prix d'un site ne tombe pas du ciel. Il dépend de choix concrets que vous êtes le mieux placé pour connaître. Répondez à ces cinq questions et vous aurez déjà 80 % de l'estimation.",
      },
      {
        type: "ol",
        items: [
          "Combien de pages ? Une page unique, cinq pages, ou un site avec des dizaines de fiches produits ? Plus il y a de contenu à structurer, plus le temps de travail monte.",
          "Vendez-vous en ligne ? Encaisser un paiement (boutique) change complètement le projet par rapport à un simple site de présentation.",
          "Avez-vous déjà le contenu ? Textes, photos, logo prêts, ou tout à créer ? Le contenu manquant est le premier poste qui gonfle un devis.",
          "Est-ce du standard ou du sur-mesure ? Un site classique coûte moins qu'une fonctionnalité qui n'existe nulle part ailleurs et qu'il faut développer.",
          "Quel délai ? Un besoin « pour hier » impose de prioriser votre projet et se paie plus cher qu'un planning souple.",
        ],
      },
      {
        type: "h2",
        text: "Traduire vos réponses en fourchette",
      },
      {
        type: "p",
        text: "Une fois ces questions répondues, vous pouvez vous positionner sur une fourchette réaliste. Pour les chiffres concrets par type de projet, j'ai détaillé les montants dans un article dédié : [combien coûte un site internet en 2026](/blog/combien-coute-site-internet-2026). Croisez vos réponses avec ces fourchettes et vous obtenez votre budget de départ.",
      },
      {
        type: "ul",
        items: [
          "Site de présentation simple, contenu prêt, pas de vente : bas de la fourchette.",
          "Plusieurs pages, contenu à créer, quelques fonctionnalités : milieu de fourchette.",
          "Vente en ligne, sur-mesure, ou délai serré : haut de la fourchette, voire au-delà.",
        ],
      },
      {
        type: "h2",
        text: "Ce qui fait exploser le budget (et qu'on peut couper au départ)",
      },
      {
        type: "p",
        text: "Le réflexe classique est de vouloir tout, tout de suite. C'est le meilleur moyen de faire gonfler la facture et de retarder le lancement. La bonne approche : identifier le cœur de votre projet, le sortir en premier, et ajouter le reste ensuite selon les retours réels.",
      },
      {
        type: "quote",
        text: "Un site n'est jamais figé. Mieux vaut lancer une version simple qui marche et l'enrichir, que d'attendre six mois et de tout payer d'un coup pour des fonctions dont vous n'êtes même pas sûr.",
      },
      {
        type: "h2",
        text: "Le coût qu'on oublie toujours : le récurrent",
      },
      {
        type: "p",
        text: "Un site n'est pas un achat unique. Il faut l'héberger, le maintenir à jour, le sécuriser. Ce coût récurrent est modeste mais réel, et l'ignorer au moment de budgéter mène à de mauvaises surprises. Prévoyez-le dès le départ, au même titre que la création.",
      },
      {
        type: "callout",
        title: "Ordre de grandeur",
        text: "L'hébergement et la maintenance d'un site professionnel se situent généralement entre 50 et 250 € par mois selon la complexité. À intégrer dans votre budget annuel, pas seulement dans le devis initial.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Comment présenter votre budget à un freelance",
      },
      {
        type: "p",
        text: "Une fois votre fourchette en tête, annoncez-la simplement. « Voici mon projet, voici ce que le site doit faire, et je pense à un budget entre X et Y. » Cette phrase fait gagner un temps énorme : le freelance vous dit tout de suite si c'est réaliste, ce qui rentre dans l'enveloppe, et ce qu'il faut éventuellement décaler à plus tard. C'est le contraire de se faire avoir : c'est reprendre la main sur la discussion.",
      },
      {
        type: "h2",
        text: "En résumé",
      },
      {
        type: "p",
        text: "Budgéter un site n'a rien de sorcier : répondez aux cinq questions, croisez avec les fourchettes du marché, gardez le cœur du projet pour la première version, et n'oubliez pas le récurrent. Vous arriverez chez le freelance avec un projet clair et un budget cadré, et vous obtiendrez un bien meilleur devis. Si vous voulez qu'on estime ensemble le budget de votre projet, [écrivez-moi](/#contact) : je vous donne une fourchette honnête, sans engagement.",
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
