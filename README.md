# Eli Goldberger — Portfolio Site

Personal developer/consultant portfolio hosted on GitHub Pages. Built with **Astro v6**, static output, shared layouts, and content collections.

---

## Current Status

| Aspect | Status |
|--------|--------|
| **Branch** | `overhaul/audit-and-research` |
| **Architecture** | Astro v6 (static), content collections, shared BaseLayout |
| **Pages** | Home, Projects, Resume, Fun Stuff |
| **Deploy** | GitHub Actions → GitHub Pages |
| **Build** | `npm run build` → `dist/` |

---

## Architecture Overview

- **Framework:** Astro v6 with static output
- **Layout:** `src/layouts/BaseLayout.astro` — persistent nav, footer, meta, skip link
- **Pages:** `src/pages/` — index, projects/, resume/, fun/
- **Content:** Projects in `src/content/projects/` (Markdown + frontmatter)
- **Assets:** `public/images/`, `public/resume/`, `public/favicon.*`
- **Styles:** `src/styles/global.css` + component-scoped styles

---

## Developer Workflow

```bash
npm install
npm run dev      # Local dev at localhost:4321
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

---

## Deploy

- Push to `main` or `overhaul/audit-and-research` triggers `.github/workflows/deploy.yml`
- Uses `withastro/action` to build and deploy to GitHub Pages
- Configure repository Settings → Pages → Source: **GitHub Actions**

---

## Project Structure

```
src/
├── content.config.ts    # Projects collection schema
├── content/projects/    # Markdown project entries
├── layouts/BaseLayout.astro
├── components/
├── pages/
├── styles/global.css
public/
├── images/
├── resume/
├── favicon.svg, favicon.ico
_legacy/                 # Archived Foundation/jQuery site (reference only)
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| [README.md](README.md) | Project overview (this file) |
| [SITE_ANALYSIS_AND_IMPROVEMENT_PLAN.md](SITE_ANALYSIS_AND_IMPROVEMENT_PLAN.md) | Grading rubric, P0–P3 recommendations |
| [REPO_OVERHAUL_AUDIT.md](REPO_OVERHAUL_AUDIT.md) | Technical audit; overhaul context |
| [AI_RESEARCH_PROMPT.md](AI_RESEARCH_PROMPT.md) | Prompt for external AI tech stack research |

---

## Changelog

- **2025-03-18:** Astro v6 migration complete — shared layout, content collections, GitHub Actions deploy; legacy files moved to `_legacy/`
- **2025-03-18:** Overhaul audit branch; full site audit and research prompt added
