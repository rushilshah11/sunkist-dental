# Sunkist Dental — Rebuild Plan

## Goal
More consistent, loyal patients — not just traffic. This rebuild replaces a 5-year-old
Create React App + Firebase site with a modern, static, SEO/AEO/GEO-ready foundation
built to actually support ongoing content and local search work.

## Tech Stack
- **Next.js (App Router) + TypeScript**, `output: 'export'` — fully static, no server
  runtime, no database (Firebase removed, wasn't needed).
- **Tailwind CSS + shadcn/ui** for the component layer.
- **Netlify** hosting via Git, branch deploys as the staging lane:
  - `rebuild` branch → dedicated Netlify site while building (keeps current prod site
    on `main` untouched)
  - `staging` branch (once active) → auto-deployed preview lane
  - `main` → production, only touched at cutover

## Information Architecture
- `/` — Home
- `/services` — services overview
- `/services/[slug]` — one real page per procedure (root canals, implants, dentures,
  etc.), original content instead of linking out to Wikipedia
- `/about` — Meet Dr. Shah
- `/contact` — hours, address (as real text, not just inside a map iframe), phone, map

No blog for now — can be added later once the core site is solid.

## Design Direction
Grounded in the current site, not a wholesale identity change:
- **Keep the brand teal (`#266880`)** as the primary color — recognizable and reads as
  calm/clinical without being cold.
- **Keep the split-hero pattern** (headline + clinic imagery) — it already reads as
  "confident clinic," just needs a cleaner, modern execution.
- **Keep rounded, soft-shadowed cards** for testimonials/services — that's where the
  "family-friendly" warmth already lives.
- **Modernize typography** — replace the mismatched custom serif h4 font + Georgia nav
  font with a clean, consistent pairing from shadcn's defaults.
- Standardize spacing, radius, and shadow via shadcn/Tailwind tokens instead of the
  ad-hoc Bootstrap-era CSS.
- Doctor's bio and real patient testimonials stay prominent — personal trust signals
  matter more than polish for a family practice.

## Booking
Keep the "Book Appointment" CTA in place and prominent. `onClick` is a no-op /
placeholder for now — wiring the actual booking flow is a later decision.

## Removed from the old site
- Firebase (no database needed)
- Contact form (dropped entirely — CTA is the phone number / booking button)
- Services-as-Wikipedia-links modal (replaced with real service pages)

## Phases
0. **Repo & environment** — scaffold Next.js + TS + Tailwind + shadcn, confirm
   `output: 'export'` builds clean, get a blank page live on the rebuild Netlify site.
1. **Core layout** — shared nav + footer (real NAP as text), base page shells for the
   IA above.
2. **Build pages** — Home, About, Contact, Services overview, then service detail
   pages (build 1–2 as the template, replicate for the rest).
3. **SEO/AEO/GEO layer**:
   - `generateMetadata` per page — unique title/description/OG tags
   - JSON-LD: `Dentist`/`LocalBusiness` schema site-wide
   - `FAQPage` schema on service pages once they have real Q&A content
   - `sitemap.xml` + `robots.txt` (Next.js native support)
   - GA4 + Google Search Console verification
4. **QA on staging branch deploy**, full pass before cutover.
5. **Cutover** — point `main` at the new build, retire the old CRA site.
6. **Ongoing** (outside this codebase): NAP cleanup across directories, Google
   Business Profile optimization, review generation, service page content — the
   operational work that keeps paying off after launch.

## Notes / Decisions Log
- Information architecture decided by Claude, no blog for now.
- Design direction: family-friendly warmth + confident-clinic polish, teal brand color
  retained, shadcn/ui for the component system.
- Booking button stays visually present, functionally disabled until a booking flow is
  chosen.