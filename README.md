# Obsidian — 3D React Developer Portfolio

A premium, single-page developer portfolio built with **React 18, Vite, React Three Fiber and Framer Motion**.
Midnight gold: charcoal black, champagne gold and warm ivory text; one restrained 3D centrepiece; editorial typography.

---

## 1. Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

---

## 2. Make it yours (15 minutes)

All content lives in `src/data/`. You should never need to touch a component to update the site.

| What | Where |
|---|---|
| Name, monogram, role, headline, intro, location | `src/data/site.js` |
| Email, GitHub, LinkedIn, X | `site.social` in `site.js` |
| About text, philosophy, goals | `site.about` in `site.js` |
| Stats (years, projects, students) | `site.stats` — leave `null` to hide; **only real numbers** |
| Skills and one-line notes | `src/data/skills.js` |
| Projects / case studies | `src/data/projects.js` |
| Work history + process steps | `src/data/experience.js` |
| Page title, description, social preview | `index.html` |

**Résumé** — drop your PDF at `public/resume.pdf`. The "Download résumé" button appears automatically
once the file exists (it is hidden otherwise, so there is never a dead link).

**Project screenshots** — save at 1600×1000 (16:10) as `.webp` in `public/projects/` and set
`image: '/projects/your-file.webp'`. Without an image, a generated architectural cover is used.
Empty `github` / `live` fields hide those buttons.

**Portrait** — in `src/sections/About.jsx`, replace the monogram inside `.portrait__frame`
with `<img src="/portrait.webp" alt="Portrait of Your Name" />` (4:5 ratio).

**Social preview** — add a 1200×630 `public/og-image.png` and update `og:url` in `index.html`.

---

## 3. Contact form

Messages from the form are delivered to the `email` in `src/data/site.js` through
[FormSubmit](https://formsubmit.co) — no account or backend needed.

1. Deploy the site (or run it locally) and send yourself one test message from the form.
2. FormSubmit emails an **activation link** to that address. Click it once.
3. From then on, every message arrives in your inbox (subject: *Portfolio message: …*).

To use a different service instead (e.g. Formspree), create `.env` in the project root:
```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```
Any endpoint accepting `POST` JSON `{ name, email, subject, message }` works.
A hidden honeypot field filters simple bots. The form never fakes success.

---

## 4. Design system

**Colour roles** — kept strict so the palette never turns noisy:

| Token | Hex | Role |
|---|---|---|
| `--c-bg` | `#0C0C0F` | Page background (charcoal black, with soft gold light and a fine grid) |
| `--c-bg-2` | `#121216` | Alternate sections |
| `--c-surface` | `#16161B` | Cards |
| `--c-line` | `#2A2830` | Borders, dividers |
| `--c-teal` | `#E6B85C` | **Interaction only** — links, active, focus (champagne gold) |
| `--c-gold` | `#F0A868` | **Editorial emphasis only** — numerals, highlights (copper) |
| `--g-button` | light gold → gold → amber | Primary buttons, active filters (dark text) |
| `--g-brand` | champagne → gold → bronze | Headline accents, stats, card hover borders |
| `--c-text` | `#F5F1EA` | Primary text (warm ivory) |
| `--c-text-2` | `#C8C0B2` | Secondary text |

**Type** — *Plus Jakarta Sans* (headings), *Inter* (body/UI), *JetBrains Mono* (labels, indices).
Fluid sizes with `clamp()`; body copy capped at ~62ch.

**Space** — 4px base scale (`--s-1` … `--s-9`), fluid section padding and gutters.

**Motion** — one reveal pattern (16px rise + fade, once), one easing curve, durations 160/280/600 ms.
All tokens are in `src/styles/variables.css`; they drop to 0 under `prefers-reduced-motion`.

---

## 5. Architecture

```
src/
├─ components/      Navbar, Footer, Button, SectionHeading, Reveal, SkillCard,
│                   ProjectCard, ProjectCover, ProjectModal, SocialLinks,
│                   HeroFallback, BrandIcons
├─ sections/        Hero, About, Skills, Projects, Experience, Process, Contact
├─ three/           HeroScene (Canvas, lights), InteractiveObject (the sculpture)
├─ data/            site, skills, projects, experience  ← all content
├─ hooks/           useActiveSection, useWebGL, useFileExists, useMediaQuery
├─ styles/          variables.css (tokens), global.css
├─ App.jsx
└─ main.jsx
```

### 3D & performance decisions
* Three.js is **only in the hero**, loaded with `React.lazy` after first paint
  (initial JS ≈ 100 KB gzipped; the 3D chunk ≈ 240 KB loads in the background).
* An SVG of the same sculpture renders immediately and cross-fades to the canvas — no loading screen.
* Falls back to the SVG permanently when WebGL is missing, `Save-Data` is on, or device memory is < 2 GB.
* Render loop pauses when the hero is off-screen; reduced-motion switches it to on-demand rendering.
* Lighting uses local `Lightformer`s — no HDR file download.
* Card tilt writes CSS variables directly (no React re-renders on pointer move).

### Accessibility
Skip link · semantic landmarks · one `h1` and ordered headings · visible teal focus rings ·
native `<dialog>` for case studies (focus trap + Escape) · `aria-current` on active nav ·
`aria-pressed` filters · live region for filter results and form status · labelled inputs with
inline, announced errors · reduced-motion respected everywhere · 3D canvas hidden from assistive tech.

---

## 6. Testing checklist

- [ ] Replace all placeholder content in `src/data/` — search the project for `Your Name`, `you@example.com`, `Company name`, `Institute name`, `your-username`
- [ ] Widths 360, 390, 768, 1024, 1440, 1920 — no horizontal scroll
- [ ] Keyboard only: Tab through nav → hero → cards → modal (Esc closes) → form
- [ ] Mobile menu opens, closes on link tap and on Escape, focus returns to the toggle
- [ ] Each project modal: live/source buttons open the right URLs
- [ ] Résumé downloads (after adding `public/resume.pdf`)
- [ ] Form: empty submit shows errors; real submit reaches your inbox
- [ ] OS "reduce motion" on: no floating, no reveals, no scroll smoothing
- [ ] Lighthouse (mobile): Performance, Accessibility, Best Practices, SEO
- [ ] Browser console clean

---

## 7. Deploy

**Vercel** — import the repo; framework *Vite*; build `npm run build`; output `dist`. Add `VITE_FORM_ENDPOINT` if used.

**Netlify** — build `npm run build`, publish `dist`.

**GitHub Pages** — `vite.config.js` already uses `base: './'`, so `dist/` works from any sub-path:
```bash
npm run build
npx gh-pages -d dist
```

Optional: self-host the three fonts (e.g. via `@fontsource`) to remove the Google Fonts request.
