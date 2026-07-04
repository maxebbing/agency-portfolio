# Max Ebbing — Web Design Studio

A portfolio site for Max Ebbing, a one-person web design studio. The three
case studies in `/work` are self-initiated concept projects for fictional
clients — imagined stakes, real design decisions, always labeled as concept
work rather than real client engagements.

## Tech stack

- [Next.js](https://nextjs.org) App Router, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with Fraunces (display) and Inter (text)
- Fully static: all pages are prerendered at build time (the three case
  studies via `generateStaticParams`), no server-side data fetching

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build
```

builds the static production output.

## Deployment

Set the `NEXT_PUBLIC_SITE_URL` environment variable to the site's real
production URL (e.g. `https://maxebbing.com`) before deploying. It's used to
resolve `metadataBase` for Open Graph/Twitter metadata and the absolute URLs
in `app/sitemap.ts` and `app/robots.ts`. Without it, these fall back to
`http://localhost:3000`.

## Structure

- `app/` — routes: `/` (homepage), `/work` (case study index), `/work/[slug]`
  (individual case studies), plus `sitemap.ts` and `robots.ts`
- `components/` — page sections and shared UI, organized by area
  (`home/`, `work/`, `site/`)
- `lib/projects.ts` — the single source of content for all case study data
  (client, palette, copy); the index and case study pages are generated from
  it
