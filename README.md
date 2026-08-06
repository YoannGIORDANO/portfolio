# 🚀 Portfolio de Yoann Giordano

Site portfolio personnel — responsive (mobile/tablette/PC), **bibliothèque de 3 thèmes intégrée**, mode clair/sombre, **100 % gratuit à héberger** et **entièrement modifiable** (simple HTML/CSS/JS, aucun outil à installer).

**Adresse du site une fois en ligne : `https://yoanngiordano.github.io/portfolio/`**

---

## ✅ Où s'inscrire ? (réponse courte)

| Besoin | Service | Prix | Inscription nécessaire ? |
|---|---|---|---|
| Stockage du code | **GitHub** | Gratuit | ✅ Déjà fait (c'est ce dépôt !) |
| Hébergement du site | **GitHub Pages** | Gratuit | ❌ Inclus avec GitHub, juste à activer |
| Nom de domaine | **`yoanngiordano.github.io`** | Gratuit | ❌ Inclus automatiquement |

👉 **Vous n'avez besoin de vous inscrire nulle part ailleurs.** Tout fonctionne avec votre compte GitHub actuel. (Options pour un domaine plus court : voir [section domaine](#-nom-de-domaine) plus bas.)

---

## 🌍 Mise en ligne : automatique !

GitHub Pages est activé sur ce dépôt (Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`) : **chaque modification poussée sur la branche `main` publie le site automatiquement** en ~1 minute sur :

**`https://yoanngiordano.github.io/portfolio/`**

Le suivi des publications se trouve dans l'onglet **Actions** du dépôt (workflow « pages build and deployment »). Vous n'avez rien d'autre à configurer.

💡 **Bonus (adresse encore plus pro)** : si vous renommez le dépôt en `YoannGIORDANO.github.io` (Settings → General → Repository name), le site sera directement sur **`https://yoanngiordano.github.io`** — sans `/portfolio` à la fin. C'est l'adresse idéale pour un CV.

---

## 🎨 Bibliothèque de thèmes (3 styles radicalement différents)

Le site embarque **3 thèmes complets**. Pour en changer, modifiez la valeur de `data-skin="…"` **tout en haut de `index.html` ET de `404.html`** (une seule ligne à toucher) :

| Valeur | Style | Ambiance |
|---|---|---|
| `brut` *(actif par défaut)* | **Néo-brutalisme** | Fond crème, bordures noires épaisses, ombres décalées, étiquettes colorées inclinées. Audacieux, très tendance chez les créatifs. |
| `journal` | **Éditorial** | Papier ivoire, typographie serif élégante (Fraunces), filets fins, sections numérotées, photo noir et blanc, lettrine. Chic et intemporel. |
| `terminal` | **Rétro console** | Monospace, vert phosphore, invites `$`, cartes façon fenêtres de terminal, effet écran cathodique. Assumé geek. |

Chaque thème a un **mode clair et un mode sombre** (bouton 🌙/☀️ sur le site, préférence mémorisée). Les couleurs de chaque thème se règlent dans `styles.css` (variables `--accent`, `--bg`… au début de chaque bloc de thème).

---

## ✏️ Personnaliser le site (important !)

Tout se modifie directement sur GitHub : ouvrez le fichier → icône **crayon** 🖉 → modifiez → **Commit changes**. Les zones à changer sont marquées par des commentaires `✏️` dans le code.

| Quoi | Fichier | Où |
|---|---|---|
| Titres qui défilent à l'accueil | `script.js` | Liste `TITRES` tout en haut |
| Phrase d'accroche, texte « À propos » | `index.html` | Sections `accueil` et `apropos` |
| Compétences | `index.html` | Section `competences` (des `<li class="chip">`) |
| **Vos projets** (le + important) | `index.html` | Section `projets` — remplacez les cartes « Projet exemple » |
| Expériences / diplômes | `index.html` | Section `parcours` |
| Lien LinkedIn | `index.html` | Cherchez `votre-profil-linkedin` (2 endroits) |
| Photo | `index.html` | Par défaut : votre avatar GitHub. Sinon mettez une image dans `assets/` et changez le `src` |
| CV téléchargeable | `index.html` + `assets/` | Déposez votre PDF dans `assets/`, puis décommentez le bouton CV (section À propos) |
| Thème du site | `index.html` + `404.html` | `data-skin` tout en haut (voir section Bibliothèque de thèmes) |
| Couleurs du thème | `styles.css` | Variables au début du bloc du thème choisi |
| Titre Google / aperçu de partage | `index.html` | Balises `<title>` et `<meta>` en haut |

**Conseils contenu** : 3 à 6 projets maximum (les meilleurs), des résultats concrets plutôt que des généralités, et ne listez que les compétences que vous assumez en entretien.

### Tester sur votre ordinateur (optionnel)
Double-cliquez simplement sur `index.html` — ou lancez `python3 -m http.server` dans le dossier et ouvrez `http://localhost:8000`.

---

## 🌐 Nom de domaine

- **Gratuit et déjà inclus** : `yoanngiordano.github.io` — sérieux et très répandu chez les développeurs, parfait sur un CV. **Recommandé pour commencer.**
- **Gratuit, plus court** :
  - [is-a.dev](https://github.com/is-a-dev/register) → obtenez `yoann.is-a.dev` en ouvrant une pull request (guide sur leur page). Pensé exactement pour les portfolios de devs.
  - [eu.org](https://nic.eu.org) → domaine type `giordano.eu.org`, gratuit à vie, mais validation manuelle (quelques jours à quelques semaines).
  - ⚠️ Les « vrais » domaines 100 % gratuits type Freenom (`.tk`, `.ml`…) **n'existent plus** — méfiez-vous des sites qui le promettent encore.
- **Payant mais très abordable** (si vous voulez `yoanngiordano.fr` un jour) : `.fr` ≈ 6–8 €/an ou `.ovh` ≈ 3 €/an chez [OVH](https://www.ovhcloud.com/fr/domains/), ou `.xyz`/`.me` à ~2 € la 1ʳᵉ année chez [Porkbun](https://porkbun.com) / [Namecheap](https://www.namecheap.com).
- 🎓 **Étudiant ?** Le [GitHub Student Developer Pack](https://education.github.com/pack) offre un domaine `.me` gratuit 1 an + plein d'avantages.

**Brancher un domaine personnalisé** (plus tard) : Settings → Pages → _Custom domain_, puis chez le fournisseur du domaine créez un enregistrement `CNAME` pointant vers `yoanngiordano.github.io`. Le site reste hébergé gratuitement — seul le domaine change.

---

## 💼 L'ajouter sur votre CV et LinkedIn

- **LinkedIn** : Profil → **Coordonnées** → _Site web_ → collez l'adresse du site. Ajoutez-le aussi dans la section **« Sélection »** (Featured) pour qu'il soit bien visible, et mentionnez-le dans votre résumé.
- **CV** : mettez l'adresse dans l'en-tête, à côté de l'email et du téléphone (ex. `🌐 yoanngiordano.github.io/portfolio`).

---

## 🗂️ Contenu du dépôt

```
index.html   → tout le contenu du site (c'est ici que vous modifiez vos textes)
styles.css   → le design : base commune + les 3 thèmes (brut / journal / terminal)
script.js    → les interactions (mode clair/sombre, menu mobile, machine à écrire…)
404.html     → page d'erreur personnalisée
assets/      → vos images et votre CV en PDF
```
