# Portfolio Cybersécurité — SOC / DFIR

Site vitrine statique (HTML/CSS/JS pur, sans build ni dépendance) destiné à
être hébergé gratuitement sur GitHub Pages. Il centralise la présentation,
les compétences, les projets (avec liens vers les dépôts GitHub dédiés),
les certifications et le parcours, en français et en anglais.

## Structure

```
portfolio-cyber/
├── index.html              # Structure de la page (sections, ids)
├── README.md
└── assets/
    ├── css/
    │   └── style.css       # Tous les styles
    ├── js/
    │   └── app.js          # Contenu du site (FR/EN) + logique d'affichage
    └── cv.pdf              # À AJOUTER PAR VOUS (voir plus bas) — absent du dépôt de base
```

## Ce qu'il faut personnaliser

Tout le texte et les données vivent dans **`assets/js/app.js`**, en haut du
fichier, dans l'objet `CONTENT` (une clé `fr`, une clé `en`). Vous n'avez
normalement pas besoin de toucher au HTML ni à la partie basse du fichier
JS (`RENDU`).

Checklist avant publication :

- [ ] `nav.brandName` — votre nom (fr **et** en)
- [ ] `hero.profile` — ID, focus actuel, statut si besoin
- [ ] `about.paragraphs` — ajustez le narratif si besoin
- [ ] `skills.categories` — adaptez à votre stack réelle (langages, outils)
- [ ] `projects.items[].link` — remplacez `VOTRE-USER` / `YOUR-USERNAME`
      par votre pseudo GitHub réel dans les 4 projets déjà en ligne
- [ ] `projects.items[].status` — `"active"`, `"completed"` ou `"planned"`
      selon l'état réel de chaque projet
- [ ] `certifications.items` — remplacez par vos certifications réelles
      (`status`: `"done"` / `"progress"` / `"planned"`, `date` optionnelle
      pour celles obtenues) — supprimez la section dans `index.html` si
      vous n'en avez aucune pour l'instant
- [ ] `timeline.items` — dates, poste, entreprise, formation initiale
- [ ] `contact.emailValue` — votre email
- [ ] dans `index.html`, section `#contact` : remplacez les `href` de
      LinkedIn et GitHub

Pensez à dupliquer chaque changement de texte dans les deux blocs `fr` et
`en` de `CONTENT`.

## Activer le formulaire de contact (optionnel)

Le bouton **Email** (mailto:) fonctionne déjà sans rien faire. Le
**formulaire** en bas de la section Contact, lui, nécessite un compte
gratuit chez [Formspree](https://formspree.io) pour délivrer les messages :

1. Créez un compte sur https://formspree.io
2. Créez un formulaire, copiez son ID (ex. `abcdwxyz`)
3. Dans `assets/js/app.js`, tout en haut, remplacez :
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID";
   ```
   par votre propre URL.

Tant que ce n'est pas fait, le formulaire affiche proprement un message
d'erreur invitant à utiliser le bouton Email — le site n'est pas cassé pour
autant.

## Ajouter votre CV

Deux boutons "Télécharger mon CV" (navbar + section Contact) pointent vers
`assets/cv.pdf`, qui n'existe pas encore dans ce dépôt. Exportez votre CV en
PDF, nommez-le `cv.pdf`, et déposez-le dans le dossier `assets/` du dépôt
(même méthode que pour les autres fichiers : upload GitHub ou `git add`).
Les deux boutons fonctionneront alors immédiatement, sans aucune autre
modification.

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub — `votre-pseudo.github.io` (site à la racine) ou
   un nom classique comme `portfolio-cyber` (site sous `/portfolio-cyber/`).
2. Ajoutez les fichiers de ce projet à la racine du dépôt, en conservant la
   structure des dossiers (`assets/css/…`, `assets/js/…`).
3. Dans le dépôt : **Settings → Pages** → Source : *Deploy from a branch* →
   Branch : `main`, dossier `/ (root)` → **Save**.
4. Patientez 1–2 minutes, l'URL du site apparaît en haut de cette page.
5. Chaque nouveau push republie automatiquement le site.
# w4phty.github.io
