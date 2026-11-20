# Sunkist Dental

Website for Sunkist Dental (Dr. Grishma Shah, DDS) in Orange, CA — https://sunkistdental.com

Built to be fast, easy to keep updated, and strong for local search (SEO), answer engines (AEO) and AI search (GEO).

## Stack

- Next.js (App Router) + TypeScript, static export (`output: "export"`)
- Tailwind CSS + shadcn/ui
- JSON-LD structured data (Dentist, Person, FAQPage, BreadcrumbList)
- `sitemap.ts` / `robots.ts` generated at build time

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build    # static site in ./out
```

## Where content lives

| What | File |
| --- | --- |
| Practice info, hours, doctor bio/credentials | `src/lib/site-config.ts` |
| Insurance plans accepted | `src/lib/insurance.ts` |
| FAQs (also feed FAQ schema) | `src/lib/faqs.ts` |
| Structured data | `src/lib/json-ld.ts` |
| Pages | `src/app/*` |

## Hosting and deployment

- **Hosting:** GitHub Pages. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/`.
- **Custom domain:** `public/CNAME` contains `sunkistdental.com`.
- **Domain + DNS:** Cloudflare (registrar and DNS). The four GitHub Pages `A` records and the `www` CNAME are proxied; SSL/TLS mode is Full; Always Use HTTPS is on.
- **Email:** Cloudflare Email Routing forwards `info@sunkistdental.com` to a personal inbox. MX/SPF/DKIM records are managed by Cloudflare.
- **Search Console:** Domain property `sunkistdental.com`, verified by a `google-site-verification` TXT record on the root. Sitemap: `https://sunkistdental.com/sitemap.xml`.

Do not delete the MX, SPF, DKIM or `google-site-verification` TXT records in Cloudflare.

## Optional environment variables

Set as GitHub repository variables (Settings → Secrets and variables → Actions → Variables):

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID
- `NEXT_PUBLIC_GSC_VERIFICATION` — Search Console meta-tag verification (not needed; DNS verified)
- `NEXT_PUBLIC_BING_VERIFICATION` — Bing Webmaster verification

## Pending / to confirm

- Payment & financing page: only CareCredit is confirmed; other payment copy is unconfirmed.
- Doctor license number, memberships, languages (optional).
- Team and office photos.
- Google Business Profile, directory listings (consistent name/address/phone) and patient reviews.

## Moving to Google Workspace later

Replace the Cloudflare MX records with Google's, update SPF, add Google's DKIM, and re-point or remove the `info@` routing rule. Add the Workspace account as an owner under Search Console → Settings → Users and permissions (keep the TXT record in place).
