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
        text: "Pour [Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), blog.exemple.fr et exemple.fr/blog ne sont pas la même chose. Le sous-domaine est analysé comme un site séparé. Il a sa propre autorité, ses propres backlinks, son propre historique. Le sous-dossier, lui, fait partie du domaine principal et contribue à son autorité globale.",
      },
      {
        type: "callout",
        title: "Le mot de John Mueller",
        text: "John Mueller (Google) répète depuis 2017 que les deux options peuvent fonctionner. En pratique, sur les sites freelance et PME que je vois passer, le sous-dossier prend l'avantage à chaque fois.",
        tone: "info",
      },
      {
        type: "p",
        text: "Sa recommandation est constante : garder le contenu regroupé sur un même site autant que possible, et réserver le sous-domaine aux parties vraiment différentes. C'est ce qu'il détaille dans [cette prise de position relayée par Search Engine Journal](https://www.searchenginejournal.com/google-treats-subdomains-subdirectories-john-mueller-says/254687/). Pour un blog qui parle du même métier que votre site, le sous-dossier coche exactement cette case.",
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
          "Mettez à jour la [Search Console](https://search.google.com/search-console/about) et soumettez le nouveau sitemap.",
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
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Trois ressources fiables pour creuser la question de l'architecture d'URL et suivre l'indexation de votre blog :",
      },
      {
        type: "ul",
        items: [
          "[Consolider les URL en double (Google Search Central)](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) : la documentation officielle sur la façon dont Google regroupe les URL et l'autorité.",
          "[Subdomain vs. subdirectory, l'avis de John Mueller (Search Engine Journal)](https://www.searchenginejournal.com/google-treats-subdomains-subdirectories-john-mueller-says/254687/) : la position de Google expliquée en clair.",
          "[Guide du débutant en référencement (France Num)](https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/guide-du-debutant-en-referencement) : les bases du SEO par le programme gouvernemental pour les TPE et PME.",
        ],
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
        text: "Ce n'est pas un hasard si WordPress fait tourner environ 41 % de tous les sites web dans le monde et détient près de 60 % du marché des CMS, d'après le [baromètre W3Techs](https://w3techs.com/technologies/overview/content_management). Cet écosystème géant veut dire un vivier de thèmes, de plugins et de prestataires que Next.js n'a pas.",
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
        text: "[Next.js](https://nextjs.org) prend l'avantage dès que votre site devient un produit : une application avec authentification, des fonctionnalités custom, des intégrations API multiples, un dashboard utilisateur. C'est aussi le bon choix si la performance est une question stratégique, par exemple pour un site e-commerce où chaque dixième de seconde se traduit en chiffre d'affaires.",
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
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Trois ressources pour comparer sur des faits plutôt que sur des modes :",
      },
      {
        type: "ul",
        items: [
          "[Part de marché des CMS (W3Techs)](https://w3techs.com/technologies/overview/content_management) : les chiffres à jour sur qui utilise quoi, mis à jour en continu.",
          "[Documentation officielle Next.js](https://nextjs.org/docs) : pour comprendre ce que la techno permet vraiment côté performance et applicatif.",
          "[Web Vitals (web.dev, Google)](https://web.dev/articles/vitals) : les critères de performance qui comptent pour Google, quelle que soit la techno choisie.",
        ],
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
        type: "p",
        text: "Un audit SEO, c'est un état des lieux : on vérifie si Google peut lire votre site, le comprendre et le proposer aux internautes qui cherchent ce que vous vendez. Le référencement naturel reste l'un des leviers les plus rentables pour une TPE ou une PME, comme le rappelle le [guide du débutant de France Num](https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/guide-du-debutant-en-referencement). Bonne nouvelle : les sept points ci-dessous se contrôlent sans aucun outil payant, directement dans votre navigateur.",
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
        type: "p",
        text: "Ces trois seuils ne sont pas des inventions de prestataire : ce sont les valeurs officielles publiées par Google sur [web.dev](https://web.dev/articles/vitals), mesurées sur vos vrais visiteurs (au 75e centile). L'INP est le critère le plus souvent raté sur mobile, alors regardez-le en priorité.",
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
        text: "Testez votre page d'accueil sur [Rich Results Test de Google](https://search.google.com/test/rich-results). Pour un freelance, vous devriez voir au minimum un schema Person ou ProfessionalService. Pour une PME locale, un LocalBusiness. Sans schema, vous laissez Google deviner, et il devine moins bien que vous.",
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
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Trois sources officielles pour approfondir chaque point de la checklist :",
      },
      {
        type: "ul",
        items: [
          "[Web Vitals (web.dev, Google)](https://web.dev/articles/vitals) : les seuils de performance LCP, INP et CLS expliqués par Google.",
          "[Test de résultats enrichis (Google)](https://search.google.com/test/rich-results) : pour vérifier votre balisage Schema.org page par page.",
          "[Guide du référencement de France Num](https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement) : les fondamentaux du SEO pour TPE et PME, côté institution publique.",
        ],
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
        type: "p",
        text: "Pourquoi un tel écart ? Parce qu'un site n'est pas un produit standard : c'est du temps humain. Un développeur fullstack freelance expérimenté facture en moyenne 557 € par jour en France selon le [baromètre Malt 2026](https://www.malt.fr/t/barometre-tarifs/tech/developpeur-backend/developpeur-fullstack). À partir de là, tout dépend du nombre de jours de travail que votre projet demande. Un site vitrine, c'est quelques jours. Une application sur-mesure, c'est plusieurs semaines. Le prix suit cette logique, pas une grille magique.",
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
        type: "p",
        text: "Pour situer l'ordre de grandeur : sur un projet de cette taille, la part de développement pur se compte souvent en dizaines de jours. Avec un TJM moyen de 557 € pour un développeur fullstack expérimenté ([baromètre Malt 2026](https://www.malt.fr/t/barometre-tarifs/tech/developpeur-backend/developpeur-fullstack)), 30 à 60 jours de travail expliquent à eux seuls l'essentiel du budget. Le reste, c'est le cadrage, le design et les tests.",
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
      {
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Pour comparer les tarifs du marché et vérifier qu'un devis est cohérent, quelques ressources fiables et indépendantes :",
      },
      {
        type: "ul",
        items: [
          "[Baromètre des tarifs freelances Malt](https://www.malt.fr/t/barometre-tarifs/tech) : les TJM réels des développeurs par technologie et par niveau d'expérience, mis à jour chaque année.",
          "[France Num](https://www.francenum.gouv.fr), le portail public de la Direction générale des Entreprises : conseils, diagnostic et aides pour financer votre projet numérique.",
          "[Étude Afnic « Réussir avec le web »](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas) : où en sont vraiment les TPE-PME françaises côté site internet.",
        ],
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
        text: "Depuis mars 2024, l'INP a remplacé le FID dans les [Core Web Vitals](https://web.dev/articles/vitals). Ça change concrètement ce sur quoi vous devez travailler. Voici la check 2026, avec ce qui marche vraiment et ce qui ne sert à rien.",
      },
      {
        type: "p",
        text: "Un rappel pour ceux qui découvrent le sujet : les Core Web Vitals sont trois notes que Google attribue à votre site pour mesurer l'expérience réelle de vos visiteurs (vitesse d'affichage, réactivité au clic, stabilité visuelle). Elles comptent dans le classement de Google et, surtout, elles décident si un visiteur reste ou repart. Point important : Google ne juge pas un test isolé, mais les [données réelles de vos visiteurs, au 75e centile](https://developers.google.com/search/docs/appearance/core-web-vitals). Autrement dit, votre site doit être bon pour au moins trois utilisateurs sur quatre.",
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
        type: "p",
        text: "Ces trois seuils (2,5 s, 200 ms, 0,1) ne sont pas arbitraires. Ils correspondent aux valeurs que Google considère comme « bonnes » et qu'il faut tenir sur au moins 75 % des visites réelles pour valider une page. Le détail de la méthode est documenté par [web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds), l'équipe de Google dédiée à la performance web.",
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
      {
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Pour creuser le sujet à la source, sans passer par des articles de seconde main :",
      },
      {
        type: "ul",
        items: [
          "[Google Search Central — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) : la documentation officielle sur ce que Google mesure et pourquoi.",
          "[web.dev — Comment les seuils ont été définis](https://web.dev/articles/defining-core-web-vitals-thresholds) : la méthode derrière les 2,5 s, 200 ms et 0,1.",
          "[Google — Introducing INP to Core Web Vitals](https://developers.google.com/search/blog/2023/05/introducing-inp) : l'annonce officielle du remplacement du FID par l'INP.",
        ],
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
        type: "p",
        text: "Et vous êtes moins seul que vous ne le pensez à hésiter. Selon l'[étude Afnic « Réussir avec le web » 2025](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas), 99 % des dirigeants jugent internet utile ou indispensable à leur activité, mais seulement 61 % des TPE-PME françaises disposent réellement d'un site web. L'écart entre les deux, c'est exactement ce blocage de la première marche.",
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
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Avant même de me contacter, quelques ressources publiques et gratuites peuvent vous aider à y voir clair :",
      },
      {
        type: "ul",
        items: [
          "[France Num](https://www.francenum.gouv.fr), le service public d'accompagnement au numérique : guides, diagnostic gratuit et liste d'aides pour financer votre projet.",
          "[Étude Afnic « Réussir avec le web »](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas) : ce que font (et ne font pas) les autres TPE-PME en ligne, pour vous situer.",
          "[Baromètre France Num 2025](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le) : les usages numériques réels des petites entreprises françaises, données officielles à l'appui.",
        ],
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
        type: "p",
        text: "Avant d'entrer dans le détail, une précision utile : la présence en ligne est devenue la norme, pas un luxe. D'après l'étude Afnic relayée par [France Num](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas), 99 % des dirigeants de TPE-PME jugent internet utile ou indispensable à leur activité, et 61 % disposent d'un site web. La vraie question n'est donc pas « faut-il un site ? », mais « lequel ? ». Voici les trois familles, du plus simple au plus ambitieux.",
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
        type: "p",
        text: "Le marché justifie l'investissement quand la vente en ligne est votre cœur d'activité. Selon le [bilan 2024 de la FEVAD](https://www.fevad.com/bilan-du-e-commerce-en-france-en-2024-les-ventes-sur-internet-franchissent-le-cap-des-175-milliards-deuros-en-hausse-de-96-sur-un-an/), les ventes en ligne en France ont dépassé 175 milliards d'euros (+9,6 % sur un an), avec 41,6 millions d'acheteurs. Un chiffre qui rassure, mais qui ne doit pas vous pousser à ouvrir une boutique si vous vendez peu de références : l'outil doit coller à votre volume réel.",
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
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Pour affiner votre réflexion avec des sources fiables avant de vous décider :",
      },
      {
        type: "ul",
        items: [
          "[Créer votre boutique en ligne : mode d'emploi (economie.gouv.fr)](https://www.economie.gouv.fr/entreprises/creer-boutique-en-ligne-demarches) pour comprendre ce qu'implique concrètement une activité e-commerce.",
          "[Le bilan 2024 du e-commerce (FEVAD)](https://www.fevad.com/bilan-du-e-commerce-en-france-en-2024-les-ventes-sur-internet-franchissent-le-cap-des-175-milliards-deuros-en-hausse-de-96-sur-un-an/) pour situer votre projet dans les tendances du marché.",
          "[La présence en ligne des TPE-PME (France Num)](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas) pour voir où en sont les entreprises de votre taille.",
        ],
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
    cover: "/blog/freelance-agence.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Vous avez un projet Next.js et vous cherchez qui pour le construire. La première idée, c'est souvent « une agence ». Mais entre une agence Next.js et un développeur freelance senior, la différence de prix va du simple au double, pour un résultat technique souvent identique. Voici comment choisir sans vous tromper.",
      },
      {
        type: "p",
        text: "Le freelance n'est pas une solution au rabais : c'est un mode de travail répandu et structuré. Pour situer les ordres de grandeur, le [baromètre des tarifs Tech de Malt](https://www.malt.fr/t/barometre-tarifs/tech) publie les tarifs journaliers moyens réels par métier et par ville. C'est un bon point de repère pour comprendre ce que vous payez vraiment, en direct, sans intermédiaire.",
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
        type: "p",
        text: "Ce que vous payez avec un freelance, c'est un tarif journalier lisible. Le [baromètre Malt](https://www.malt.fr/t/barometre-tarifs/tech) situe le TJM médian d'un développeur autour de 500 € par jour, davantage pour des expertises rares. Avec une agence, ce même temps de développement est majoré par la structure (chef de projet, commercial, marge). Sur un projet porté par une seule personne, l'écart se voit directement sur le devis.",
      },
      {
        type: "callout",
        title: "Le code est le même",
        text: "Next.js, l'[App Router](https://nextjs.org/docs/app), TypeScript, le SSR, les Core Web Vitals : ce sont les mêmes outils et les mêmes bonnes pratiques, que le développeur soit en agence ou en freelance. La qualité dépend du développeur, pas de la structure autour.",
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
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Trois ressources pour comparer en connaissance de cause avant de choisir :",
      },
      {
        type: "ul",
        items: [
          "[Le baromètre des tarifs Tech (Malt)](https://www.malt.fr/t/barometre-tarifs/tech) pour connaître les tarifs réels des développeurs freelances par métier et par ville.",
          "[La documentation officielle Next.js App Router](https://nextjs.org/docs/app) pour comprendre la technologie sur laquelle repose votre projet.",
          "[Le portail officiel de l'auto-entrepreneur (URSSAF)](https://www.autoentrepreneur.urssaf.fr/portail/accueil.html) pour savoir ce qu'implique concrètement le statut d'un freelance avec qui vous travaillez.",
        ],
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
    cover: "/blog/budget-site.jpg",
    coverIsEmoji: false,
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
        type: "p",
        text: "Poser un budget, c'est aussi assumer que le site est un investissement, pas une dépense subie. Le [baromètre France Num 2024](https://www.francenum.gouv.fr/barometre-france-num) montre que 79 % des dirigeants de TPE-PME estiment que le numérique apporte de réels bénéfices à leur activité. Un projet web se raisonne comme n'importe quel investissement : on fixe une enveloppe, on regarde ce qu'elle permet, on ajuste.",
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
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Pour préparer votre budget avec des repères fiables et vérifier les aides possibles :",
      },
      {
        type: "ul",
        items: [
          "[Le baromètre France Num 2024](https://www.francenum.gouv.fr/barometre-france-num) pour situer votre projet dans les usages numériques des entreprises françaises.",
          "[Les aides financières à la numérisation (France Num)](https://www.francenum.gouv.fr/aides-financieres) pour vérifier si votre projet est éligible à un accompagnement ou un financement.",
          "[La présence en ligne des TPE-PME (France Num)](https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas) pour comparer vos objectifs à ceux des entreprises de votre taille.",
        ],
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
  {
    slug: "site-non-maintenu-risques",
    title: "Un site qu'on ne met jamais à jour : ce que vous risquez vraiment",
    excerpt:
      "Un site laissé sans maintenance ne reste pas figé : il se dégrade en silence. Failles, pannes, référencement qui chute. Voici ce qui se passe vraiment, et quand ça vous coûte cher.",
    date: "2026-08-11",
    category: "Maintenance",
    tags: ["maintenance", "sécurité", "WordPress"],
    readingTime: 7,
    cover: "/blog/site-non-maintenu-risques.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "« Mon site marche, pourquoi je paierais une maintenance ? » C'est une question légitime, et je l'entends souvent. Le problème, c'est qu'un site n'est pas une plaquette imprimée. C'est un logiciel connecté en permanence à Internet, qui repose sur des dizaines de briques qui vieillissent. Laissé seul, il ne reste pas stable : il se dégrade, lentement, puis d'un coup.",
      },
      {
        type: "h2",
        text: "Un site n'est pas un objet fini, c'est un logiciel vivant",
      },
      {
        type: "p",
        text: "Votre site tourne sur un serveur, un langage (PHP, Node), un CMS ou un framework, et souvent une couche de plugins ou de dépendances. Chacune de ces briques publie régulièrement des mises à jour, dont une bonne partie corrige des failles de sécurité. Le jour où vous mettez le site en ligne, tout est à jour. Six mois plus tard, plus rien ne l'est. Et le décalage ne fait que grandir.",
      },
      {
        type: "callout",
        title: "L'illusion du « ça marche »",
        text: "Un site peut afficher exactement la même page pendant deux ans tout en étant devenu une passoire de sécurité. Rien ne se voit à l'écran. Le danger est justement qu'il est invisible jusqu'au jour où il ne l'est plus.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Risque n°1 : la faille de sécurité",
      },
      {
        type: "p",
        text: "C'est le risque le plus concret, surtout sous WordPress qui équipe une large part du web et concentre donc l'attention des attaquants. La plupart des piratages n'ont rien de ciblé : ce sont des robots qui scannent des millions de sites à la recherche d'une version de plugin connue pour être vulnérable. Si la vôtre traîne depuis huit mois, vous êtes une cible facile.",
      },
      {
        type: "p",
        text: "Les chiffres confirment où se situe le danger. Dans son rapport annuel sur la sécurité WordPress, [Patchstack recense que plus de 90 % des failles de l'écosystème WordPress proviennent des extensions](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/), pas du cœur du CMS. Autrement dit, ce sont vos plugins non mis à jour qui ouvrent la porte, bien plus que WordPress lui-même.",
      },
      {
        type: "ul",
        items: [
          "Injection de spam : votre site se met à rediriger vers des pages douteuses ou des pharmacies en ligne, à votre insu.",
          "Défacement : la page d'accueil est remplacée par un message d'attaquant.",
          "Vol de données : si vous avez des comptes clients ou un formulaire, les données peuvent fuiter.",
          "Blacklist Google : un site infecté est signalé « site dangereux » dans les résultats, et le trafic s'effondre du jour au lendemain.",
        ],
      },
      {
        type: "h2",
        text: "Risque n°2 : la panne au pire moment",
      },
      {
        type: "p",
        text: "Une mise à jour de PHP côté hébergeur, un plugin qui n'est plus compatible, un certificat SSL expiré : il suffit d'un maillon pour que le site tombe. Et il ne tombe jamais un mardi tranquille. Il tombe pendant une promo, la veille d'un rendez-vous important, ou quand un client cherche justement à vous contacter. Sans maintenance, personne ne surveille, et vous découvrez la panne quand un proche vous prévient que « votre site ne s'ouvre plus ».",
      },
      {
        type: "callout",
        title: "Le certificat SSL oublié",
        text: "Un certificat HTTPS non renouvelé affiche un gros avertissement rouge « connexion non sécurisée » à chaque visiteur. Beaucoup de sites vitrines l'ont vécu simplement parce que personne ne surveillait la date d'expiration.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Risque n°3 : le référencement qui glisse",
      },
      {
        type: "p",
        text: "Google favorise les sites rapides, sûrs et à jour. Un site non maintenu accumule les signaux négatifs : temps de chargement qui augmente à mesure que la base de données gonfle, erreurs techniques non corrigées, [Core Web Vitals](/blog/core-web-vitals-2026-checklist) qui repassent au rouge. La chute n'est pas brutale, elle est progressive, ce qui la rend d'autant plus insidieuse : vous perdez des positions sans jamais avoir de moment déclencheur clair.",
      },
      {
        type: "h2",
        text: "Risque n°4 : la réparation coûte plus cher que la prévention",
      },
      {
        type: "p",
        text: "C'est le calcul que beaucoup font à l'envers. Économiser 80 à 150 € par mois de maintenance semble raisonnable, jusqu'au jour où il faut nettoyer un site piraté, restaurer une sauvegarde qui n'existe pas, ou remettre à niveau deux ans de mises à jour d'un coup. À ce stade, la facture de réparation dépasse souvent une année entière de maintenance, et le site reste hors ligne pendant l'opération.",
      },
      {
        type: "quote",
        text: "La maintenance ne se voit pas quand tout va bien. C'est exactement pour ça qu'elle est efficace : son travail, c'est que rien n'arrive.",
      },
      {
        type: "h2",
        text: "Ce que couvre une vraie maintenance",
      },
      {
        type: "ol",
        items: [
          "Mises à jour régulières du cœur, des extensions et des dépendances, testées avant d'être appliquées.",
          "Sauvegardes automatiques et vérifiées, avec une restauration possible en quelques minutes.",
          "Surveillance de la disponibilité et des performances, pour détecter une panne avant vos visiteurs.",
          "Veille de sécurité et correction des failles connues dès leur publication.",
          "Renouvellement et vérification des certificats SSL et des accès.",
        ],
      },
      {
        type: "h2",
        text: "Faut-il une maintenance pour tous les sites ?",
      },
      {
        type: "p",
        text: "Non, et il faut être honnête là-dessus. Un site statique en Next.js hébergé sur Vercel, sans base de données ni plugins, demande beaucoup moins de suivi qu'un WordPress bourré d'extensions. C'est d'ailleurs un des arguments du débat [WordPress ou Next.js](/blog/wordpress-ou-nextjs-site-vitrine) : la surface d'attaque et la charge de maintenance ne sont pas les mêmes. Mais « moins » ne veut pas dire « zéro » : même un site simple a besoin de sauvegardes et d'un œil de temps en temps.",
      },
      {
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Si vous voulez creuser le sujet par vous-même, voici trois ressources fiables. Les deux premières viennent du dispositif public Cybermalveillance.gouv.fr, la troisième est le rapport de référence sur les failles WordPress.",
      },
      {
        type: "ul",
        items: [
          "[Cybermalveillance.gouv.fr — Pourquoi et comment bien gérer ses mises à jour](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/315) : les bons réflexes pour ne pas laisser un logiciel prendre du retard.",
          "[Cybermalveillance.gouv.fr — Comment sécuriser son site Internet](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/securisation-sites-internet) : un guide clair, écrit pour des non-spécialistes.",
          "[Patchstack — State of WordPress Security](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/) : le rapport annuel qui détaille d'où viennent réellement les failles.",
        ],
      },
      {
        type: "h2",
        text: "En résumé",
      },
      {
        type: "p",
        text: "Un site non maintenu ne reste pas dans son état du jour de la livraison. Il vieillit, s'expose et ralentit, sans que rien ne le montre à l'écran. La maintenance n'est pas une rente déguisée : c'est l'assurance que le site pour lequel vous avez payé continue de faire son travail. Si vous ne savez pas dans quel état est le vôtre, [écrivez-moi](/#contact) : je le regarde et je vous dis franchement s'il tient la route ou s'il est en train de vous coûter du trafic en silence.",
      },
    ],
  },
  {
    slug: "chatbot-ia-site-web-2026",
    title: "Faut-il un chatbot IA sur votre site en 2026 ?",
    excerpt:
      "Tout le monde veut son assistant IA sur son site. Mais un chatbot mal pensé fait fuir plus de clients qu'il n'en convertit. Voici quand il vaut vraiment le coup, et quand il vous dessert.",
    date: "2026-08-14",
    category: "IA",
    tags: ["IA", "chatbot", "conversion"],
    readingTime: 7,
    cover: "/blog/chatbot-ia-site-web-2026.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Depuis que les modèles de langage sont devenus accessibles, la demande a explosé : « je veux un chatbot IA sur mon site ». L'idée est séduisante, un assistant qui répond à tout, 24h/24. Mais entre le fantasme et ce qui aide réellement un visiteur à devenir client, il y a un monde. Voici comment décider sans suivre la mode.",
      },
      {
        type: "h2",
        text: "Ce qu'un chatbot IA fait bien",
      },
      {
        type: "p",
        text: "Un assistant branché sur un bon modèle et nourri de vos propres contenus (FAQ, documentation, catalogue) peut répondre instantanément à des questions répétitives, à toute heure. Sur un site qui reçoit beaucoup de demandes similaires, c'est un vrai gain : il désengorge votre boîte mail et donne une réponse immédiate là où un formulaire de contact impose d'attendre.",
      },
      {
        type: "ul",
        items: [
          "Répondre aux questions fréquentes (horaires, tarifs, modalités, disponibilité) sans intervention humaine.",
          "Guider un visiteur vers la bonne page ou le bon produit dans un catalogue large.",
          "Qualifier une demande avant qu'elle n'arrive chez vous, pour gagner du temps au premier échange.",
          "Assurer une présence hors de vos heures d'ouverture, quand personne ne peut répondre en direct.",
        ],
      },
      {
        type: "h2",
        text: "Ce qu'un chatbot IA fait mal (et qui coûte des clients)",
      },
      {
        type: "p",
        text: "Le problème n'est pas la technologie, c'est l'usage. Un chatbot posé par défaut sur un site vitrine de cinq pages, où l'information tient déjà à l'écran, n'apporte rien : il ajoute une fenêtre qui s'ouvre toute seule et masque le contenu. Pire, un assistant qui invente des réponses (les fameuses « hallucinations ») peut promettre un prix ou un délai que vous ne tenez pas, et vous engager sur une base fausse.",
      },
      {
        type: "callout",
        title: "Le piège de la réponse inventée",
        text: "Un modèle de langage ne « sait » rien de votre entreprise s'il n'est pas explicitement connecté à vos données. Livré à lui-même, il comble les trous avec du plausible. Sur un site commercial, une fausse promesse générée automatiquement peut se retourner contre vous.",
        tone: "warning",
      },
      {
        type: "p",
        text: "Le phénomène n'est pas marginal, et il s'aggrave. Selon une analyse de NewsGuard, [le taux de fausses réponses des principaux chatbots est passé de 18 % à 35 % en un an](https://www.vktr.com/ai-technology/ai-hallucinations-nearly-double-heres-why-theyre-getting-worse-not-better/) sur des questions d'actualité, entre août 2024 et août 2025. Un assistant laissé sans garde-fous se trompe donc plus d'une fois sur trois, souvent avec un ton parfaitement assuré.",
      },
      {
        type: "h2",
        text: "La vraie question : avez-vous un volume de questions répétitives ?",
      },
      {
        type: "p",
        text: "C'est le seul critère qui tranche vraiment. Un chatbot se justifie quand vous recevez, chaque semaine, les mêmes questions par mail ou par téléphone. Là, l'automatiser vous fait gagner un temps réel et améliore l'expérience du visiteur. Si vous recevez trois demandes par mois, toutes différentes, un bon formulaire de contact et un numéro de téléphone visible feront mieux le travail, pour zéro coût et zéro risque.",
      },
      {
        type: "quote",
        text: "Un chatbot n'est pas une décoration futuriste. C'est un outil qui a un sens quand il répond à un vrai flux de questions, et qui encombre le reste du temps.",
      },
      {
        type: "h2",
        text: "Chatbot IA, mais bien fait : les conditions",
      },
      {
        type: "ol",
        items: [
          "Il est connecté à vos contenus réels (FAQ, pages, catalogue), pas laissé en roue libre sur un modèle générique.",
          "Il connaît ses limites : sur une question hors de son périmètre, il propose un contact humain au lieu d'inventer.",
          "Il ne s'ouvre pas de force et ne masque pas le contenu : le visiteur le sollicite quand il en a besoin.",
          "Il passe le relais à un humain proprement, avec l'historique de la conversation.",
          "Il respecte le RGPD : les échanges peuvent contenir des données personnelles, à traiter en conséquence.",
        ],
      },
      {
        type: "h2",
        text: "Les alternatives souvent plus efficaces",
      },
      {
        type: "p",
        text: "Avant d'investir dans un assistant IA, beaucoup de sites gagneraient d'abord à améliorer les fondamentaux. Une page qui explique clairement ce que vous proposez, des tarifs visibles, une FAQ bien écrite et un formulaire de contact simple répondent à 80 % des questions sans aucune IA. C'est aussi ce qui fait qu'un site [convertit ou pas](/blog/j-ai-une-idee-de-site-par-ou-commencer) : la clarté avant la technologie.",
      },
      {
        type: "callout",
        title: "L'IA a un autre usage, plus discret",
        text: "Le vrai levier IA pour un site n'est pas toujours le chatbot visible. C'est souvent en coulisses : accélérer la rédaction de contenu, générer des variantes de pages, aider au support interne. Moins spectaculaire, mais plus rentable.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Un chatbot traite des données personnelles, même s'il ne demande ni nom ni email : adresses IP, cookies, contenu des conversations. Avant de vous lancer, la CNIL a publié des repères clairs. Voici trois ressources utiles.",
      },
      {
        type: "ul",
        items: [
          "[CNIL — Chatbots : les conseils pour respecter les droits des personnes](https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes) : ce que vous devez prévoir côté transparence et champs de saisie libre.",
          "[CNIL — IA et RGPD : les recommandations officielles](https://www.cnil.fr/fr/ia-et-rgpd-la-cnil-publie-ses-nouvelles-recommandations-pour-accompagner-une-innovation-responsable) : le cadre à respecter si vous branchez une IA sur vos données.",
          "[NewsGuard — l'analyse des fausses réponses des chatbots](https://www.vktr.com/ai-technology/ai-hallucinations-nearly-double-heres-why-theyre-getting-worse-not-better/) : pour comprendre pourquoi un assistant non encadré reste risqué.",
        ],
      },
      {
        type: "h2",
        text: "Mon conseil concret",
      },
      {
        type: "p",
        text: "Ne posez pas un chatbot parce que « tout le monde en a un ». Posez-le si vous avez un volume réel de questions répétitives, si vous pouvez le connecter à vos vraies données, et si vous êtes prêt à le maintenir. Sinon, investissez d'abord dans la clarté de votre site : ça coûte moins cher et ça convertit mieux. Si vous hésitez pour votre cas, [parlons-en](/#contact) : je vous dirai honnêtement si un chatbot vaut le coup chez vous, ou si votre budget est mieux placé ailleurs.",
      },
    ],
  },
  {
    slug: "seo-ia-etre-cite-chatgpt-perplexity",
    title: "SEO à l'ère de l'IA : comment être cité par ChatGPT et Perplexity",
    excerpt:
      "De plus en plus de gens posent leurs questions à une IA plutôt qu'à Google. Être bien référencé ne suffit plus : il faut être cité dans les réponses. Voici comment s'y prendre concrètement.",
    date: "2026-08-18",
    category: "SEO",
    tags: ["SEO", "IA", "GEO"],
    readingTime: 8,
    cover: "/blog/seo-ia-etre-cite-chatgpt-perplexity.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Une part croissante des recherches ne passe plus par une liste de liens bleus, mais par une réponse rédigée directement par une IA : ChatGPT, Perplexity, ou les aperçus générés par Google. Le jeu change. Il ne suffit plus d'être en première page, il faut être la source que l'IA cite dans sa réponse. On appelle ça le GEO (Generative Engine Optimization), et ça se prépare.",
      },
      {
        type: "h2",
        text: "Ce qui change quand l'IA répond à la place de Google",
      },
      {
        type: "p",
        text: "Dans un moteur classique, l'utilisateur voit dix résultats et choisit. Dans une réponse générée, il voit une synthèse et, parfois, quelques sources citées. Le trafic ne se répartit plus sur dix liens : il se concentre sur les rares pages que le modèle juge fiables et faciles à citer. Être « quelque part en première page » ne suffit plus, il faut être la référence claire sur une question précise.",
      },
      {
        type: "p",
        text: "Cette bascule n'est plus théorique. Les analyses de trafic montrent que [les visites envoyées par les IA vers les sites ont explosé en 2025](https://digiday.com/media/in-graphic-detail-the-state-of-ai-referral-traffic-in-2025/), avec une croissance de l'ordre de 500 % sur l'année. Le volume reste petit face à Google, mais la pente est très raide : les pages qui savent se rendre citables prennent de l'avance dès maintenant.",
      },
      {
        type: "callout",
        title: "Le SEO classique reste la fondation",
        text: "Le GEO ne remplace pas le référencement traditionnel, il s'ajoute par-dessus. Les IA s'appuient largement sur les mêmes signaux : contenu de qualité, site technique propre, autorité. Vos [7 vérifications SEO de base](/blog/audit-seo-7-verifications-gratuites) restent le point de départ.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Comment une IA choisit ce qu'elle cite",
      },
      {
        type: "p",
        text: "Les modèles ne raisonnent pas comme un lecteur humain. Ils cherchent des passages clairs, autonomes et vérifiables, qu'ils peuvent extraire et reformuler sans risque. Un contenu qui répond directement à une question, en une ou deux phrases nettes, a beaucoup plus de chances d'être repris qu'un long paragraphe qui tourne autour du sujet.",
      },
      {
        type: "ul",
        items: [
          "La clarté : une réponse explicite et sans ambiguïté, pas un enrobage marketing.",
          "La structure : des titres qui posent des questions, des réponses juste en dessous.",
          "La fraîcheur : une date récente et un contenu à jour rassurent le modèle sur la fiabilité.",
          "L'autorité : un auteur identifiable, une expertise démontrée, des sources citées.",
        ],
      },
      {
        type: "h2",
        text: "Rendre votre site lisible par les IA",
      },
      {
        type: "p",
        text: "Les robots des IA (GPTBot d'OpenAI, ClaudeBot, PerplexityBot) parcourent le web comme celui de Google. Première étape : vérifier que vous ne les bloquez pas par erreur dans votre robots.txt. Beaucoup de sites, par excès de prudence, interdisent ces robots et se retirent d'eux-mêmes des réponses générées. À l'inverse, si vous voulez y apparaître, il faut les laisser passer.",
      },
      {
        type: "ol",
        items: [
          "Autorisez les crawlers IA dans robots.txt si vous voulez être cité (GPTBot, ClaudeBot, PerplexityBot, entre autres).",
          "Structurez vos pages avec des titres sous forme de questions et des réponses courtes juste après.",
          "Ajoutez des données structurées Schema.org (FAQ, Article, Person) pour lever toute ambiguïté sur le sens.",
          "Envisagez un fichier llms.txt qui résume et oriente les IA vers vos contenus clés.",
          "Datez et mettez à jour vos contenus : une IA préfère une source récente à une page de 2019.",
        ],
      },
      {
        type: "callout",
        title: "Le format « question / réponse » gagne",
        text: "Écrivez un titre qui reprend exactement la question que pose votre client, puis répondez-y en deux phrases dès la première ligne. C'est le format que les IA extraient le plus facilement, et c'est aussi celui que les humains préfèrent.",
        tone: "success",
      },
      {
        type: "h2",
        text: "L'autorité compte plus que jamais",
      },
      {
        type: "p",
        text: "Les IA sont prudentes : elles préfèrent citer des sources qu'elles jugent crédibles pour éviter de propager une erreur. Un contenu signé par une personne réelle, avec une expertise visible, des chiffres sourcés et un site cohérent sur son sujet, inspire davantage confiance qu'une page anonyme. C'est la même logique que le maillage interne en SEO : plus votre site est cohérent et spécialisé sur un thème, plus il fait autorité, que ce soit pour Google ou pour un modèle de langage.",
      },
      {
        type: "quote",
        text: "Être cité par une IA, ce n'est pas ruser avec un algorithme. C'est produire la réponse la plus claire et la plus fiable à une vraie question. Le reste suit.",
      },
      {
        type: "h2",
        text: "Faut-il tout miser sur le GEO dès maintenant ?",
      },
      {
        type: "p",
        text: "Non, et méfiez-vous de ceux qui vous vendent une révolution totale. Le trafic issu des recherches classiques reste massif, et le référencement Google garde toute son importance. Le GEO est un complément qui monte en puissance, pas un remplacement. La bonne stratégie en 2026 : garder des fondations SEO solides, et adapter progressivement votre contenu pour être aussi lisible par les IA. Ce sont largement les mêmes efforts, orientés un cran plus loin.",
      },
      {
        type: "h2",
        text: "Pour aller plus loin",
      },
      {
        type: "p",
        text: "Trois sources de première main pour approfondir, directement chez ceux qui font les règles.",
      },
      {
        type: "ul",
        items: [
          "[Google Search Central — optimiser pour les fonctionnalités d'IA générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) : la doc officielle de Google, qui confirme qu'un contenu utile et bien structuré reste la base.",
          "[OpenAI — vue d'ensemble des robots (GPTBot, OAI-SearchBot)](https://developers.openai.com/api/docs/bots) : comment autoriser ou bloquer chaque crawler d'OpenAI dans votre robots.txt.",
          "[Spécification officielle llms.txt](https://llmstxt.org/) : le format proposé pour guider les IA vers vos contenus clés.",
        ],
      },
      {
        type: "h2",
        text: "En résumé",
      },
      {
        type: "p",
        text: "Les IA deviennent une porte d'entrée vers votre site, en plus de Google. Pour y apparaître : laissez passer leurs robots, structurez vos pages en questions-réponses claires, ajoutez des données structurées, datez vos contenus et démontrez votre expertise. Rien de magique, juste du SEO propre poussé un cran plus loin. Si vous voulez savoir où en est votre site face à cette bascule, [écrivez-moi](/#contact) : je regarde ce qui vous rend citable, et ce qui vous en empêche aujourd'hui.",
      },
    ],
  },
  {
    slug: "site-internet-artisan",
    title: "Site internet pour artisan : est-ce vraiment utile, et combien ça coûte ?",
    excerpt:
      "Le bouche-à-oreille ne suffit plus : vos futurs clients vous cherchent sur Google avant de vous appeler. Voici ce dont un artisan a vraiment besoin, et ce qui ne sert à rien.",
    date: "2026-08-20",
    category: "Par métier",
    tags: ["artisan", "création de site", "SEO local"],
    readingTime: 7,
    cover: "/blog/site-internet-artisan.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "« Moi, je marche au bouche-à-oreille, je n'ai pas besoin de site. » C'est la phrase que j'entends le plus souvent chez les artisans. Le problème, c'est qu'aujourd'hui, même un client qu'on vous a recommandé va taper votre nom sur Google avant de décrocher son téléphone. S'il ne trouve rien, ou un site à l'abandon, le doute s'installe.",
      },
      {
        type: "h2",
        text: "Pourquoi la question se pose (et pourquoi elle est légitime)",
      },
      {
        type: "p",
        text: "Beaucoup d'artisans ont construit toute leur activité sans site, au bouche-à-oreille et à la réputation locale. Et ça a marché. Se demander « ai-je vraiment besoin d'un site ? » est donc parfaitement légitime : vous ne voulez pas payer pour un outil qui ne vous rapportera rien. Cet article n'est pas là pour vous vendre un site à tout prix, mais pour vous aider à décider en connaissance de cause.",
      },
      {
        type: "p",
        text: "Le point de départ, c'est un changement de comportement des clients, y compris les plus fidèles. Selon [France Num, le programme public d'accompagnement à la transformation numérique des entreprises](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/transformation-numerique-des), une large majorité de Français se renseignent en ligne avant de faire appel à un professionnel. Concrètement : la première impression ne se joue plus seulement sur le chantier, elle se joue aussi sur un écran, avant même qu'on vous appelle.",
      },
      {
        type: "callout",
        title: "« Avoir un site » ne veut pas dire « devenir informaticien »",
        text: "Rassurez-vous tout de suite : vous n'avez rien de technique à gérer. Un site professionnel se conçoit, se met en ligne et se maintient pour vous. Votre rôle se limite à décrire votre métier et à fournir quelques photos. Le reste, c'est le travail du prestataire.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Le bouche-à-oreille ne disparaît pas, il passe par Google",
      },
      {
        type: "p",
        text: "On vous recommande à un ami. Que fait cet ami ? Il cherche votre nom en ligne pour vérifier. Vos réalisations, vos avis, votre sérieux. Sans présence en ligne, vous laissez cette vérification au hasard. Avec un site simple et propre, vous confirmez en dix secondes que vous êtes un pro fiable.",
      },
      {
        type: "callout",
        title: "Les chiffres qui comptent",
        text: "88 % des personnes cherchent un prestataire en ligne avant de le contacter, et 62 % évitent une entreprise qui n'a pas de site. Pour un artisan, ne pas être trouvable, c'est perdre des chantiers sans jamais le savoir.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Ce dont un artisan a vraiment besoin (et pas plus)",
      },
      {
        type: "p",
        text: "Inutile de payer pour une usine à gaz. Un [site vitrine](/services/site-vitrine) bien fait suffit largement. Voici ce qui compte vraiment.",
      },
      {
        type: "ul",
        items: [
          "Ce que vous faites et où vous intervenez, clair en dix secondes (métier + zone géographique).",
          "Des photos de vos réalisations, idéalement en avant/après : c'est votre meilleure preuve.",
          "Des avis clients visibles, qui rassurent immédiatement.",
          "Vos coordonnées avec un bouton d'appel direct sur mobile, et un formulaire de demande de devis.",
        ],
      },
      {
        type: "p",
        text: "Ce dont vous n'avez pas besoin : une boutique en ligne, des comptes clients, un blog quotidien. Payer pour ça, c'est jeter de l'argent sur des fonctions que vous n'utiliserez jamais.",
      },
      {
        type: "h2",
        text: "Le vrai levier : être trouvé dans votre ville",
      },
      {
        type: "p",
        text: "Un artisan ne cherche pas à être visible dans toute la France, mais dans sa zone. C'est là que le référencement local change tout : quand quelqu'un tape « plombier + votre ville » ou « menuisier près de moi », vous devez apparaître. Ça passe par un site structuré pour le local et une fiche Google Business complète. Avant de payer un audit, vous pouvez déjà vérifier [7 points SEO vous-même](/blog/audit-seo-7-verifications-gratuites).",
      },
      {
        type: "callout",
        title: "Votre fiche Google est gratuite et décisive",
        text: "Pour un artisan, la fiche Google Business est souvent le tout premier point de contact : elle affiche vos horaires, vos avis, votre téléphone et un itinéraire. La créer et la compléter ne coûte rien et vous fait remonter dans les recherches locales.",
        tone: "success",
      },
      {
        type: "h2",
        text: "Les avis clients : votre meilleur atout, et il est gratuit",
      },
      {
        type: "p",
        text: "Le « pack local », ce sont les trois fiches mises en avant par Google sur la carte quand on cherche un artisan près de chez soi. Y figurer, c'est capter l'essentiel des appels. Or plusieurs [analyses de référencement local](https://www.localranker.fr/blog/seo-local-artisan) montrent que le volume et la note de vos avis pèsent lourd : pour espérer y entrer, on vise en général au moins 10 à 20 avis récents avec une moyenne d'au moins 4,3 étoiles. Une fiche qui reçoit régulièrement de nouveaux avis signale à Google que votre activité est bien réelle et vivante.",
      },
      {
        type: "p",
        text: "La bonne nouvelle, c'est que récolter des avis ne coûte rien et ne demande qu'un réflexe : les demander au bon moment.",
      },
      {
        type: "ol",
        items: [
          "Demandez l'avis juste après un chantier réussi, quand le client est satisfait : c'est là que le taux de réponse est le plus élevé.",
          "Facilitez-lui la vie : un lien direct par SMS, un mail, ou un QR code sur votre facture ou votre carte de visite.",
          "Répondez à chaque avis, même négatif : ça montre votre sérieux aux futurs clients qui lisent.",
        ],
      },
      {
        type: "h2",
        text: "Combien ça coûte",
      },
      {
        type: "p",
        text: "Un site vitrine d'artisan, propre et bien référencé, se situe dans le bas de la fourchette du marché. Pour des repères précis par type de projet, j'ai détaillé les [vrais prix d'un site en 2026](/blog/combien-coute-site-internet-2026), et une méthode pour [budgéter votre projet](/blog/comment-budgeter-projet-site-web) avant même de demander un devis.",
      },
      {
        type: "h2",
        text: "Les pièges à éviter",
      },
      {
        type: "ul",
        items: [
          "Les solutions « gratuites » ou à 20 €/mois : belles en apparence, mais lentes, mal référencées et bourrées d'abonnements cachés.",
          "Le site fait par un proche « qui s'y connaît un peu » : souvent jamais fini, jamais mis à jour, invisible sur Google.",
          "Le site sans aucun SEO : vous avez une belle vitrine, mais dans une rue où personne ne passe.",
        ],
      },
      {
        type: "quote",
        text: "Pour un artisan, un site n'a qu'un seul but : qu'on vous trouve dans votre secteur et qu'on vous appelle. Tout le reste est du décor.",
      },
      {
        type: "h2",
        text: "Pour aller plus loin (ressources utiles et gratuites)",
      },
      {
        type: "p",
        text: "Avant de vous lancer, quelques ressources officielles et gratuites pour vous faire votre propre idée :",
      },
      {
        type: "ul",
        items: [
          "[France Num](https://www.francenum.gouv.fr) — le portail public d'accompagnement à la digitalisation : diagnostic gratuit, conseils et annuaire d'experts près de chez vous.",
          "[Aide Profil d'établissement Google](https://support.google.com/business) — la documentation officielle pour créer et optimiser votre fiche Google Business, votre premier levier de visibilité locale.",
          "[Chambre de Métiers et de l'Artisanat (artisanat.fr)](https://www.artisanat.fr) — accompagnement, formations au numérique et aides régionales pour les artisans.",
        ],
      },
      {
        type: "h2",
        text: "En pratique",
      },
      {
        type: "p",
        text: "Si vous êtes artisan et que vous hésitez encore, commencez simple : décrivez votre métier, rassemblez quelques photos et vos avis, et [parlons-en](/#contact). Je vous dis franchement ce qu'il vous faut, ni plus ni moins. Et si votre idée est encore floue, [ce guide pour démarrer](/blog/j-ai-une-idee-de-site-par-ou-commencer) vous met sur les rails.",
      },
    ],
  },
  {
    slug: "site-internet-restaurant",
    title: "Site internet pour restaurant : ce qui compte vraiment en 2026",
    excerpt:
      "Instagram et les plateformes ne suffisent pas : sans site ni fiche Google à jour, vous laissez vos réservations et vos marges à des intermédiaires. Voici le minimum vital.",
    date: "2026-08-23",
    category: "Par métier",
    tags: ["restaurant", "création de site", "SEO local"],
    readingTime: 7,
    cover: "/blog/site-internet-restaurant.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Beaucoup de restaurateurs pensent qu'entre Instagram et les plateformes de réservation, un site est inutile. En réalité, c'est l'inverse : sans site et sans fiche Google à jour, vous dépendez entièrement d'intermédiaires qui prennent une commission et gardent vos clients. Un site vous redonne la main.",
      },
      {
        type: "h2",
        text: "D'abord, comprendre comment on choisit un restaurant aujourd'hui",
      },
      {
        type: "p",
        text: "Pendant longtemps, un bon restaurant se remplissait grâce à son emplacement et au bouche-à-oreille. Ça compte toujours, mais une étape s'est intercalée : avant de pousser votre porte, le client vérifie sur son téléphone. Il regarde vos photos, votre carte, vos avis, et il décide en quelques secondes s'il vous fait confiance. Comprendre ce réflexe, c'est comprendre pourquoi votre présence en ligne est devenue aussi importante que votre cuisine.",
      },
      {
        type: "p",
        text: "Les chiffres le confirment. Selon plusieurs études du secteur, [environ 62 % des recherches de restaurants passent par Google](https://www.metadosi.fr/62-des-consommateurs-decouvrent-des-restaurants-sur-google/), et près de 9 personnes sur 10 consultent les avis avant de choisir où manger. Autrement dit, votre vitrine numérique travaille pour vous (ou contre vous) 24 h/24, que vous vous en occupiez ou non.",
      },
      {
        type: "callout",
        title: "Pas besoin d'une usine à gaz",
        text: "Être présent en ligne pour un restaurant, ça ne veut pas dire un site compliqué. Ça veut dire deux choses simples et complémentaires : une fiche Google à jour, et un site clair avec votre carte et un moyen de réserver. Le reste est du bonus.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Vos clients vous cherchent sur Google avant de réserver",
      },
      {
        type: "p",
        text: "Le réflexe est devenu universel : on entend parler d'un restaurant, on tape son nom sur Google. On veut voir la carte, les horaires, les photos, les avis, et savoir si on peut réserver. Si ces informations sont absentes, fausses ou dispersées sur cinq plateformes, vous perdez le client au moment précis où il était prêt à venir.",
      },
      {
        type: "callout",
        title: "La fiche Google avant tout",
        text: "Pour un restaurant, la fiche Google Business est le premier point de contact, avant même votre site. Horaires exacts, photos récentes, avis, menu, bouton d'itinéraire et d'appel : une fiche complète et à jour est non négociable en 2026.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Le minimum vital d'un site de restaurant",
      },
      {
        type: "ul",
        items: [
          "La carte, à jour et en vraies pages web (pas un PDF), pour qu'elle soit lisible sur mobile et référencée.",
          "Les horaires et jours de fermeture, cohérents avec votre fiche Google.",
          "Un module de réservation clair, idéalement en direct sur le site.",
          "L'adresse avec un plan et l'accès (parking, transports).",
          "De belles photos récentes des plats et de la salle.",
        ],
      },
      {
        type: "callout",
        title: "Le piège du menu en PDF",
        text: "Un menu en PDF est illisible sur mobile (il faut zoomer, ça pixelise) et totalement invisible pour Google. Or « restaurant + votre plat signature + votre ville » est une recherche fréquente. Une carte en vraies pages web se lit d'un pouce et vous fait ressortir dans les résultats.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "Réservation : reprendre la main sur vos marges",
      },
      {
        type: "p",
        text: "Les plateformes de réservation vous apportent de la visibilité, mais prélèvent une commission sur chaque couvert, et surtout, le client leur appartient, pas à vous. Un module de réservation directement sur votre site vous coûte zéro commission et vous constitue votre propre base de clients, que vous pouvez recontacter. L'idéal n'est pas de tout couper, mais de ne plus dépendre uniquement des plateformes.",
      },
      {
        type: "p",
        text: "Mettons des chiffres dessus. Sur la principale plateforme du marché, la commission tourne autour de 2,60 € par couvert, en plus d'un abonnement mensuel, d'après [plusieurs analyses de coûts 2026](https://www.restoboard.fr/blog/combien-coute-thefork-restaurant-2026). Sur un service de 40 couverts réservés en ligne, l'addition grimpe vite, tous les soirs. Une partie de ces réservations pourrait passer par vos propres canaux, gratuitement.",
      },
      {
        type: "callout",
        title: "L'astuce que peu de restaurateurs connaissent",
        text: "Les réservations qui arrivent via votre fiche Google (le bouton « Réserver » directement dans Google Maps et la recherche) peuvent se faire sans commission. Coupler une fiche Google bien configurée à un module de réservation, c'est capter des réservations gratuites que vous auriez sinon payées à une plateforme.",
        tone: "success",
      },
      {
        type: "quote",
        text: "Chaque réservation qui passe par votre site plutôt que par une plateforme, c'est une commission économisée et un client qui devient vraiment le vôtre.",
      },
      {
        type: "h2",
        text: "Ne pas mettre tous ses œufs dans les plateformes",
      },
      {
        type: "p",
        text: "TheFork, les réseaux sociaux, les applications de livraison : ce sont des canaux utiles, mais loués, pas possédés. Du jour au lendemain, une plateforme peut changer ses règles, ses commissions ou son algorithme. Votre site et votre fiche Google, eux, vous appartiennent. C'est votre socle, le reste vient s'y ajouter.",
      },
      {
        type: "h2",
        text: "Combien ça coûte",
      },
      {
        type: "p",
        text: "Un site de restaurant reste un [site vitrine](/services/site-vitrine) avec, en option, un module de réservation. On est dans une fourchette raisonnable, détaillée dans mon article sur les [prix d'un site en 2026](/blog/combien-coute-site-internet-2026). L'important n'est pas d'y mettre cher, mais d'y mettre juste : carte, réservation, Google Business.",
      },
      {
        type: "h2",
        text: "Pour aller plus loin (ressources utiles)",
      },
      {
        type: "p",
        text: "Quelques ressources fiables pour creuser le sujet de votre côté :",
      },
      {
        type: "ul",
        items: [
          "[Aide Profil d'établissement Google](https://support.google.com/business) — pour configurer votre fiche, vos photos, votre menu et le bouton de réservation.",
          "[FEVAD](https://www.fevad.com) — la fédération du e-commerce publie régulièrement des chiffres sur les usages en ligne des Français, réservation comprise.",
          "[France Num](https://www.francenum.gouv.fr) — accompagnement et aides à la digitalisation, y compris pour la restauration.",
        ],
      },
      {
        type: "h2",
        text: "En pratique",
      },
      {
        type: "p",
        text: "Si vous tenez un restaurant et que votre présence en ligne se résume à un compte Instagram et une fiche à moitié remplie, vous laissez de l'argent sur la table. [Écrivez-moi](/#contact) : on fait le point sur ce qui vous manque et on remet votre établissement en main sur Google.",
      },
    ],
  },
  {
    slug: "aides-financer-site-internet-2026",
    title: "Financer votre site internet en 2026 : les aides qui existent vraiment",
    excerpt:
      "Des aides existent pour digitaliser votre entreprise, mais attention aux informations périmées : le fameux chèque France Num à 500 € est fermé depuis 2021. Voici ce qui est réellement disponible.",
    date: "2026-08-25",
    category: "Financement",
    tags: ["aides", "budget", "financement"],
    readingTime: 7,
    cover: "/blog/aides-financer-site-internet-2026.jpg",
    coverIsEmoji: false,
    content: [
      {
        type: "lead",
        text: "Créer un site internet représente un budget, et pour beaucoup de petites entreprises, c'est justement ce budget qui fait repousser le projet d'année en année. Ce que peu de dirigeants savent, c'est qu'il existe des aides publiques pour financer une partie de cette digitalisation. Encore faut-il s'y retrouver, car une grande partie de ce qu'on lit en ligne à ce sujet est périmée.",
      },
      {
        type: "h2",
        text: "D'abord, de quoi parle-t-on ?",
      },
      {
        type: "p",
        text: "Si vous êtes artisan, commerçant, indépendant ou à la tête d'une petite structure, vous n'êtes pas censé connaître le paysage des aides publiques. C'est normal : ce n'est pas votre métier, et ce paysage est mouvant, éclaté entre l'État, les régions, les chambres consulaires. Prenons donc le temps de poser les bases avant d'entrer dans le détail.",
      },
      {
        type: "p",
        text: "La « digitalisation » d'une entreprise, c'est simplement le fait de se doter d'outils numériques : un site internet, une boutique en ligne, un logiciel de caisse, un système de réservation, etc. Depuis plusieurs années, les pouvoirs publics encouragent cette transition, notamment pour les très petites entreprises (TPE) et les petites et moyennes entreprises (PME), parce qu'une entreprise visible et outillée en ligne résiste mieux. Pour ça, différents dispositifs d'aide financière ont existé, existent encore, ou vont apparaître. Le problème, c'est qu'ils changent souvent, et que beaucoup d'articles continuent de vanter des aides qui n'existent plus.",
      },
      {
        type: "callout",
        title: "L'idée à retenir",
        text: "Vous n'êtes pas obligé de financer votre site tout seul, et vous n'avez pas besoin de devenir expert en subventions. Vous avez juste besoin de savoir quelles portes frapper, et dans quel ordre. C'est exactement ce que cet article vous donne.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Le mythe du chèque France Num à 500 €",
      },
      {
        type: "p",
        text: "Vous avez sûrement croisé la promesse d'un « chèque France Num de 500 € » pour financer votre site. C'est l'aide la plus citée… et elle est fermée depuis le 31 juillet 2021. De nombreux articles continuent de la mettre en avant parce que ça fait un bon titre, mais le dispositif national n'existe plus sous cette forme.",
      },
      {
        type: "callout",
        title: "Méfiez-vous des articles qui datent",
        text: "Si une page vous promet « 500 € France Num » comme une aide nationale active en 2026, c'est un signal qu'elle n'a pas été mise à jour. Vérifiez toujours la date de l'information et la source officielle.",
        tone: "warning",
      },
      {
        type: "h2",
        text: "France Num aujourd'hui : un portail, pas un chèque",
      },
      {
        type: "p",
        text: "France Num n'est plus une aide unique, c'est le programme public d'orientation vers la transformation numérique. Concrètement, [francenum.gouv.fr](https://www.francenum.gouv.fr) vous propose trois choses : un diagnostic gratuit de votre maturité numérique, un annuaire d'experts référencés (les « Activateurs »), et une orientation vers les aides financières disponibles selon votre profil et votre région.",
      },
      {
        type: "h2",
        text: "Les vraies aides en 2026 : le niveau régional",
      },
      {
        type: "p",
        text: "L'argent se trouve aujourd'hui surtout au niveau régional. Selon votre région, des chèques numériques existent, souvent cumulables avec l'accompagnement France Num.",
      },
      {
        type: "ul",
        items: [
          "Chèques numériques régionaux : généralement de 500 à 5 000 € selon la région et le projet.",
          "Aides et accompagnements de votre CCI (Chambre de Commerce et d'Industrie) ou CMA (Chambre de Métiers, pour les artisans).",
          "Aides sectorielles ou locales ponctuelles (métropole, département) selon votre activité.",
        ],
      },
      {
        type: "callout",
        title: "Les montants changent, vérifiez à la source",
        text: "Les conditions et montants varient d'une région à l'autre et évoluent régulièrement. Ne vous fiez pas à un chiffre lu sur un blog : vérifiez ce qui est actif auprès de votre Région ou de votre CCI/CMA. C'est gratuit et c'est la seule info fiable.",
        tone: "info",
      },
      {
        type: "h2",
        text: "Les autres leviers pour alléger la facture",
      },
      {
        type: "p",
        text: "Au-delà des subventions, il y a des façons concrètes de rendre un site plus abordable.",
      },
      {
        type: "ul",
        items: [
          "Étaler le paiement avec votre prestataire (plusieurs échéances plutôt qu'un règlement unique).",
          "Commencer par une version simple qui couvre l'essentiel, puis enrichir ensuite : c'est le principe même d'un budget maîtrisé, que je détaille dans [comment budgéter votre projet](/blog/comment-budgeter-projet-site-web).",
          "Ne pas oublier que la création d'un site est une dépense professionnelle déductible (parlez-en à votre comptable).",
        ],
      },
      {
        type: "h2",
        text: "Comment vous y prendre concrètement",
      },
      {
        type: "ol",
        items: [
          "Faites le diagnostic gratuit sur France Num pour cadrer votre besoin.",
          "Contactez votre Région et votre CCI/CMA pour connaître les aides actives chez vous.",
          "Demandez un devis clair à votre prestataire, avec le détail de ce qui est inclus.",
          "Montez votre dossier d'aide AVANT d'engager la dépense : beaucoup d'aides ne sont pas rétroactives.",
        ],
      },
      {
        type: "quote",
        text: "Une aide, c'est un bonus, pas un point de départ. Cadrez d'abord votre projet et son budget réel ; l'aide viendra l'alléger, pas le définir.",
      },
      {
        type: "h2",
        text: "Pour aller plus loin (sources officielles)",
      },
      {
        type: "p",
        text: "Ne vous fiez qu'aux sources officielles, qui sont à jour, plutôt qu'aux blogs qui recyclent d'anciennes aides :",
      },
      {
        type: "ul",
        items: [
          "[France Num — aides financières](https://www.francenum.gouv.fr/aides-financieres) — le recensement officiel des aides à la digitalisation, filtrable selon votre profil et votre région.",
          "[Bpifrance](https://www.bpifrance.fr) — financements, prêts et accompagnement des TPE/PME.",
          "[Le réseau des CCI (cci.fr)](https://www.cci.fr) — pour connaître les aides régionales actives et être accompagné dans vos démarches.",
        ],
      },
      {
        type: "h2",
        text: "En pratique",
      },
      {
        type: "p",
        text: "Si vous voulez financer un site sans vous perdre dans des dispositifs périmés, [écrivez-moi](/#contact) : je vous donne un devis clair et honnête, et je vous oriente vers les bonnes démarches à faire de votre côté avant d'engager quoi que ce soit.",
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
