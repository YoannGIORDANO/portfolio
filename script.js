/* ═══════════════════════════════════════════════════════════════════
   PORTFOLIO — INTERACTIONS
   ✏️ PERSONNALISATION RAPIDE : modifiez la liste ci-dessous pour
      changer les titres qui défilent sur la page d'accueil.
   ═══════════════════════════════════════════════════════════════════ */

const TITRES = [
  "Administrateur Infrastructure & Cloud",
  "Spécialisation systèmes",
  "Microsoft 365 & Windows Server",
  "Certifié VADE Secure",
];

/* ─────────────────────────────────────────────────────────────────── */

// Signale que le JS est actif (les animations d'apparition s'activent)
document.documentElement.classList.add("js");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Thème clair / sombre (mémorisé dans le navigateur) ───────────── */
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ── Menu mobile (burger) ─────────────────────────────────────────── */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});

// Ferme le menu quand on clique sur un lien
navLinks.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

/* ── Effet "machine à écrire" sur la page d'accueil ───────────────── */
const typedEl = document.getElementById("typed");

if (typedEl && !prefersReducedMotion) {
  let mot = 0, lettre = 0, efface = false;

  const tick = () => {
    const texte = TITRES[mot];
    lettre += efface ? -1 : 1;
    typedEl.textContent = texte.slice(0, lettre);

    let delai = efface ? 45 : 90;
    if (!efface && lettre === texte.length) { efface = true; delai = 2000; }
    else if (efface && lettre === 0) { efface = false; mot = (mot + 1) % TITRES.length; delai = 400; }
    setTimeout(tick, delai);
  };
  tick();
} else if (typedEl) {
  typedEl.textContent = TITRES[0];
}

/* ── Apparition des sections au défilement ────────────────────────── */
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* Lien actif dans le menu selon la section visible */
  const sections = document.querySelectorAll("main section[id]");
  const menuLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          menuLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
} else {
  // Sécurité pour les très vieux navigateurs : tout afficher directement
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ── Bouton "remonter en haut" ────────────────────────────────────── */
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 600);
}, { passive: true });

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

/* ── Année automatique dans le pied de page ───────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();
