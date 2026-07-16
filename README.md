# NovaStack — Merged Site (Next.js)

A merged Next.js 14 (App Router + TypeScript + Tailwind + Framer Motion) site
combining the structure, sections, and motion language of wearezylo.com and
phaedrasolutions.com into one brand, strictly in Blue / White / Black.

## What was matched from the source sites
- Zylo: near-black hero/CTA sections with grain texture + glowing blue blobs,
  bold tight display headlines, pill buttons, animated stat counters, infinite
  logo marquee, scroll-reveal fade-ins, sticky blurred nav.
- Phaedra: white content sections with black headlines + blue accents,
  card-grid services/industries, award-style badges pattern, testimonial cards,
  black footer for contrast, hover-lift cards.

## Getting started

npm install
npm run dev

Open http://localhost:3000

## Build for production

npm run build
npm run start

## Pages
- / — Home (animated hero, marquee, animated stats, services, process, industries, testimonials, CTA)
- /services — Service category grid
- /industries — Industries served
- /case-studies — Work/case studies
- /about — Company story & animated stats
- /contact — Contact form

## Animation system
- components/Reveal.tsx — scroll-triggered fade/slide-up wrapper (Framer Motion)
- components/AnimatedCounter.tsx — spring-based count-up on scroll into view
- components/Marquee.tsx — infinite CSS-animation logo ticker
- .grain-overlay (globals.css) — animated SVG noise texture for dark sections
- animate-blob (tailwind.config.ts) — slow-morphing glow blobs in hero/CTA sections

## Fonts
Self-hosted via @fontsource/inter (body) and @fontsource/manrope (display
headings) — no external font CDN calls, so it builds in offline/restricted
network environments too.

## Theme tokens
tailwind.config.ts -> theme.extend.colors.brand:
- brand.blue #1450FF — primary accent
- brand.black #0A0A0C — dark hero/CTA/footer sections
- brand.white / brand.mist — light content sections

## Notes
Copy was written fresh (not copied verbatim from the source sites) to convey
the same information/services/structure while respecting copyright.

## Mega-menu navigation (new)
The navbar now matches wearezylo.com's dropdown behavior:
- `lib/navigation.ts` — single source of truth for all menu items (Services, Industries, Company, Resources), each with a real `href`
- `components/MegaMenu.tsx` — dark dropdown panel: optional left sidebar, item grid with icons/descriptions, right-side hover preview
- `components/Navbar.tsx` — opens on hover (desktop) with a short close-delay to prevent flicker; accordion on mobile
- Every item is a real clickable link — no dead ends:
  - `/services/[slug]` — dynamic page per service (auto-generated for all items in the Services menu)
  - `/industries/[slug]` — dynamic page per industry
  - `/how-we-work`, `/ai-first`, `/careers` — Company menu pages
  - `/blog`, `/resources/whitepapers`, `/newsroom` — Resources menu pages

To add a new service or industry, just add an entry to the relevant array in
`lib/navigation.ts` (with a `href` like `/services/my-new-service`) — the
detail page is generated automatically at build time via `generateStaticParams`.

## Exact reference-match fixes (this round)
Implemented from reference screenshots (Zylo mega-menu, tabbed pattern):
- Services menu items corrected to exact counts/labels from reference: AI & Data Innovation (11 items), Cloud & Infrastructure (8 items), Cybersecurity (6 items) — previously abbreviated placeholder lists
- External-link icon added to items that show it in the reference (Machine Learning Solutions, AI Software Development, UX/UI Audit, Web3 & Blockchain, Fintech & Banking, Careers, White Papers & eBooks, Newsroom)
- Company & Resources dropdowns now show a real photo panel on the right (`photoPanel` field in `lib/navigation.ts`) instead of the decorative graphic — swap `/public/images/company-team.jpg` and `/public/images/resources-desk.jpg` for real photography
- Mega-menu panel repositioned from centered (`left-1/2 -translate-x-1/2`) to left-anchored (`left-0`), matching the reference's alignment under the logo/nav rather than centered under the whole navbar
- Panel width tightened from 1100px to 980px max to match reference proportions; item grid now scrolls internally (`max-h-[65vh] overflow-y-auto`) for long tabs like AI & Data Innovation
- Fixed cursor bug: `<button>` elements showed the default arrow cursor instead of a pointer/hand on hover — added a global `button, [role="button"], a { cursor: pointer }` rule in `globals.css` plus explicit `cursor-pointer` classes on all nav/tab buttons

## This round's fixes
- Renamed brand throughout: "NovaStack" -> "IKFTECH" (navbar logo now shows blue "IKFTECH" wordmark + "Innovating the Future of Technology" tagline, matching the real brand; removed the generic black/blue square "N" icon in navbar and footer)
- Mega-menu item hover box ("card") made more compact: padding p-2->p-1.5, gap-3->gap-2, icon chip 8x8->7x7, rounded-lg->rounded-md
- Added a real dummy dashboard-mockup image to the Services mega-menu's "Featured Work" thumbnail (`public/images/featured-altflow.jpg`) instead of an empty gradient box
- Company/Resources photo panels already use real (placeholder) images from the previous round — swap in actual photography when ready

## Services mega-menu tab-list restyle
Left sidebar tab list in the Services mega-menu now matches the Phaedra-style pattern: bold "All Services" label at top, each category has a small icon-box (rounded, dark by default, solid blue when active) to the left of its name, active tab text turns blue. Background stays the same dark theme — only the tab-list layout/style changed, per direct request. Icons are set per-category in `lib/navigation.ts` (`icon` field on each `MenuColumn`).
