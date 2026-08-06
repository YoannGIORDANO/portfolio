# 🚀 Portfolio de Yoann Giordano

Site portfolio personnel — moderne, responsive (mobile/tablette/PC), thème clair/sombre, **100 % gratuit à héberger** et **entièrement modifiable** (simple HTML/CSS/JS, aucun outil à installer).

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

## 🌍 Mettre le site en ligne (5 minutes, une seule fois)

1. **Fusionnez cette branche dans `main`** : sur la page GitHub du dépôt, cliquez sur le bandeau _« Compare & pull request »_ (ou onglet _Pull requests_ → _New pull request_), puis _« Merge »_.
2. Allez dans **Settings** (⚙️ du dépôt) → **Pages** (menu de gauche).
3. Dans **Build and deployment** → **Source**, choisissez **« Deploy from a branch »**.
4. Branche : **`main`**, dossier : **`/ (root)`** → **Save**.
5. Attendez 1 à 2 minutes, rechargez la page : votre lien apparaît en haut →
   **`https://yoanngiordano.github.io/portfolio/`** 🎉

💡 **Bonus (adresse encore plus pro)** : si vous renommez le dépôt en `YoannGIORDANO.github.io` (Settings → General → Repository name), le site sera directement sur **`https://yoanngiordano.github.io`** — sans `/portfolio` à la fin. C'est l'adresse idéale pour un CV.

Ensuite, **chaque modification poussée sur `main` met automatiquement le site à jour** en ~1 minute.

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
| Couleurs du site | `styles.css` | Variables `--accent` et `--accent-2` tout en haut |
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
styles.css   → le design (couleurs, mise en page, animations)
script.js    → les interactions (thème, menu mobile, effet machine à écrire…)
404.html     → page d'erreur personnalisée
assets/      → vos images et votre CV en PDF
```
