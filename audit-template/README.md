# Template d'audit — signature Xavier Adda

Modèle HTML pour générer des rapports d'audit PDF à l'image de la marque.
`template.html` est un exemple complet (audit jmmanger.fr) qui sert de base.

## Charte

| Élément | Valeur |
|---|---|
| Primaire | `#6d28d9` (violet) |
| Accent | `#22d3ee` (cyan) |
| Dégradé signature | `linear-gradient(90deg, #6d28d9, #22d3ee)` |
| Fond couverture | `#101014` (sombre, comme le logo) |
| Logo | `logo.png` (couronne) |
| Monospace | labels, code, pastilles |

Couverture sombre avec halos violet→cyan + grain SVG, filigrane couronne.
Pages contenu claires : barre de marque, badges de section dégradés, tableaux
à en-tête sombre, pastilles de gravité (crit / elev / moy / faib).

## Générer le PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="audit.pdf" "file://$PWD/template.html"
```

## Règles de fond (éviter le rendu "IA")

- Jamais de tiret cadratin (—) ni de flèche (→).
- Pas de structure « ce n'est pas A, c'est B » ni de conclusion « en clair ».
- Toujours vérifier les faits contre le site live avant d'affirmer (headers,
  endpoints, page d'erreur pour APP_DEBUG, hébergeur via IP/reverse DNS).
