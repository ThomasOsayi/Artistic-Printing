# Artistic Printing Company - Project Structure

A modern commercial printing company website built with Next.js 16, React 19, Tailwind CSS 4, and Firebase.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Firebase | 12.9.0 | Backend (Firestore + Storage + Auth) |
| Radix UI (Slot) | 1.2.4 | Headless UI primitive |
| Radix UI (Tabs) | 1.1.13 | Headless tabs component |
| Lucide React | 0.563.0 | Icon library |
| tw-animate-css | 1.4.0 | Animation utilities |
| class-variance-authority | 0.7.1 | Component variant management |
| clsx | 2.1.1 | Conditional class names |
| tailwind-merge | 3.4.0 | Tailwind class deduplication |
| Resend | 6.9.2 | Transactional email (quote notification) |
| @vercel/analytics | 2.0.0 | Vercel web analytics |
| @next/third-parties | 16.2.2 | Google Analytics (`G-R91VBXEWDG`) |

---

## File Tree

```
Artistic-Printing/
├── public/
│   ├── site.webmanifest                 # Primary PWA manifest (linked from root metadata)
│   ├── logo-header.png                  # Header/footer logo
│   ├── og-image.png                     # OpenGraph image (1200×630)
│   ├── web-app-manifest-192x192.png     # Maskable icon (used by src/app/manifest.json)
│   └── web-app-manifest-512x512.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout: Inter, metadata, @graph JSON-LD, AuthProvider, Analytics, GA
│   │   ├── globals.css                  # Global styles, CSS variables, animations
│   │   ├── robots.ts                    # Robots.txt: allow /, disallow /admin/ /staff-login /api/
│   │   ├── sitemap.ts                   # Static routes + published pageContent (revalidate 1h)
│   │   ├── manifest.json                # Alternate PWA manifest (maskable icons)
│   │   ├── favicon.ico                  # App Router favicon
│   │   ├── apple-icon.png               # Apple touch icon (App Router)
│   │   ├── icon0.svg / icon1.png        # App icons
│   │   ├── api/
│   │   │   └── send-quote-notification/
│   │   │       └── route.ts             # POST: Resend email to design@artisticprinting.com
│   │   │
│   │   ├── (main)/                      # Public site (Header + Footer via layout)
│   │   │   ├── layout.tsx               # Wraps children with Header + Footer
│   │   │   ├── page.tsx                 # Home page
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx             # Dynamic SEO pages (SSG + ISR; industry template live)
│   │   │   ├── about/
│   │   │   │   ├── layout.tsx           # About SEO metadata (FOUNDING_YEAR = 1995)
│   │   │   │   └── page.tsx             # About Us (body copy still references 2010 — see Pending)
│   │   │   ├── contact/
│   │   │   │   ├── layout.tsx           # Contact SEO metadata
│   │   │   │   └── page.tsx             # Contact + quote form + embedded Google Maps
│   │   │   ├── portfolio/
│   │   │   │   ├── layout.tsx           # Portfolio SEO metadata
│   │   │   │   └── page.tsx             # Portfolio grid + filters
│   │   │   ├── services/
│   │   │   │   ├── layout.tsx           # Services SEO metadata
│   │   │   │   └── page.tsx             # Service categories (by product type)
│   │   │   └── staff-login/
│   │   │       └── page.tsx             # Staff login → /admin/quotes
│   │   │
│   │   └── admin/                       # Auth-protected dashboard
│   │       ├── layout.tsx               # Sidebar + header; seeds pageContent on mount
│   │       ├── page.tsx                 # Redirects to /admin/quotes
│   │       ├── quotes/page.tsx
│   │       ├── clients/page.tsx
│   │       ├── portfolio/page.tsx
│   │       ├── site-images/page.tsx
│   │       └── content-update/page.tsx  # Manual, authenticated pageContent batch updater
│   │
│   ├── components/
│   │   ├── header.tsx                   # Sticky nav, logo, mobile menu, scroll style
│   │   ├── footer.tsx                   # Logo, links, contact, scroll reveal
│   │   ├── breadcrumbs.tsx              # Breadcrumb trail + BreadcrumbList JSON-LD
│   │   ├── industry-page.tsx            # Industry landing page template (Phase 1)
│   │   ├── quote-form.tsx               # Reusable quote form (Firestore + Resend)
│   │   ├── testimonials-section.tsx
│   │   ├── trust-bar.tsx
│   │   ├── home-hero-section.tsx
│   │   ├── home-industries-section.tsx  # Links to 4 industry landing pages
│   │   ├── home-features-section.tsx
│   │   ├── home-cta-section.tsx
│   │   ├── home-portfolio-section.tsx
│   │   ├── admin/                       # Admin components (sidebar, tables, modals, etc.)
│   │   └── ui/                          # shadcn/ui: badge, button, card, input, tabs, textarea
│   │
│   ├── hooks/
│   │   ├── use-site-images.ts
│   │   └── use-scroll-reveal.ts         # Scroll reveal + useParallax
│   │
│   └── lib/
│       ├── firebase.ts
│       ├── auth-context.tsx
│       ├── admin-search-context.tsx
│       ├── admin-data.ts                # Quote, Client, PortfolioItem, SiteImage, PageContent types + unused mockQuotes
│       ├── site-images-seed.ts          # 35 default siteImages docs
│       ├── page-content-seed.ts         # 4 industry pageContent docs (Phase 1)
│       ├── page-content-updates.ts      # Explicit field updates for existing pageContent docs
│       └── utils.ts
│
├── .env.local                           # Firebase + RESEND_API_KEY (not committed)
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── PROJECT_STRUCTURE.md
```

---

## Routes

### Public Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `(main)/page.tsx` | Homepage |
| `/about` | `(main)/about/page.tsx` | About Us |
| `/services` | `(main)/services/page.tsx` | Service types (commercial, packaging, large format, office) |
| `/portfolio` | `(main)/portfolio/page.tsx` | Portfolio with filters |
| `/contact` | `(main)/contact/page.tsx` | Contact + quote form + embedded map |
| `/staff-login` | `(main)/staff-login/page.tsx` | Staff login |
| `/[slug]` | `(main)/[slug]/page.tsx` | Dynamic SEO landing pages from Firestore `pageContent` |

### Industry Landing Pages (Phase 1 — live)

| Slug | Firestore doc ID | Linked from homepage |
|------|------------------|----------------------|
| `/healthcare-printing-los-angeles` | `industry-healthcare-printing-los-angeles` | Industries We Serve → Healthcare |
| `/hospitality-printing-los-angeles` | `industry-hospitality-printing-los-angeles` | Industries We Serve → Hospitality |
| `/education-printing-los-angeles` | `industry-education-printing-los-angeles` | Industries We Serve → Education |
| `/automotive-printing-los-angeles` | `industry-automotive-printing-los-angeles` | Industries We Serve → Automotive |

All four are **SSG-prerendered** at build time (`generateStaticParams`), **ISR-revalidated hourly** (`revalidate = 3600`), and included in `sitemap.xml`. Unpublished or unknown slugs return 404.

### Admin Dashboard

| Route | Description |
|-------|-------------|
| `/admin` | Redirects to `/admin/quotes` |
| `/admin/quotes` | Quote management |
| `/admin/clients` | Client directory |
| `/admin/portfolio` | Portfolio CRUD + image upload |
| `/admin/site-images` | Site Images manager |
| `/admin/content-update` | Manually applies an explicit update batch to existing `pageContent` docs (not in sidebar) |

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/(main)/page.tsx`

- **Hero:** `HomeHeroSection` — site images, glow orbs, “Where Ideas Become Print”, CTAs; “Trusted by LA businesses since **1995**”.
- **Trust Bar:** `TrustBar` — client marquee; “Trusted by LA businesses since **1995**”.
- **Industries:** `HomeIndustriesSection` — four cards link to industry landing pages; CTA label “Learn More”.
- **Portfolio Preview:** `HomePortfolioSection` — Firestore `portfolio` (visible, limit 6, featured first).
- **Features + Quote:** `HomeFeaturesSection` — dark section, facility images, “**30+ years** …” copy, `QuoteForm` (dark).
- **Testimonials:** `TestimonialsSection` — auto-rotate 6s.
- **CTA:** `HomeCTASection` — `home-cta-bg`, quote + phone buttons.

### 2–6. Static Pages
- **About** — hero, story, timeline, team, facility tour, values, CTA; `useSiteImages('about')`. Layout SEO uses `FOUNDING_YEAR = '1995'`; page body/timeline/team bio still say **2010 / 15+** (consistency debt).
- **Services** — hero (**30+** years experience), four service-type categories, capabilities, 4-step process, CTA; `useSiteImages('services')`.
- **Portfolio** — Firestore grid, industry filters, stats (**30+** years), client marquee, CTA; `useSiteImages('portfolio')`.
- **Contact** — hero, contact method cards, inline quote form (Firestore only — no Resend), **embedded Google Maps iframe** + “Open in Google Maps” link, turnaround guidance, FAQ accordion, CTA; `useSiteImages('contact')`.
- **Staff Login** — Firebase Auth → `/admin/quotes`.

### 7. Dynamic Industry Pages (`/[slug]`)
**Files:** `src/app/(main)/[slug]/page.tsx`, `src/components/industry-page.tsx`

**Route handler (`[slug]/page.tsx`):**
- `generateStaticParams()` — fetches all `pageContent` where `published === true` at build time.
- `generateMetadata()` — per-page title, description, canonical URL, OpenGraph; 404 metadata for missing pages.
- `getPage(slug)` — Firestore query by slug; returns null if unpublished or missing.
- `revalidate = 3600`, `dynamicParams = true` — hourly ISR; new slugs render on first request.
- Template router: `type === 'industry'` → `IndustryPage`; other types 404 until Phase 2–4.
- Injects **Service** JSON-LD + optional **FAQPage** JSON-LD.

**Industry template (`industry-page.tsx`):**
- **Breadcrumbs** — Home → Industries (`/services`) → page name; `BreadcrumbList` JSON-LD.
- **Hero** — badge + icon, H1, subtitle, bullets, quote/phone CTAs, optional hero image from `sections.heroImage`.
- **Compliance grid** — `complianceCards`.
- **What We Print** — `printItems` grid with icons.
- **Trusted By** — infinite marquee of `trustLogos`.
- **Process** — 5-step timeline (`processSteps` or defaults).
- **FAQ** — accordion; mirrors FAQ JSON-LD on route.
- **CTA + Form** — contact info + embedded `QuoteForm` (dark); `#quote` anchor.
- **`relatedSlugs`** are seeded on each industry doc but **not rendered** as related-links UI yet.

Content is driven by Firestore `pageContent` docs (seeded from `page-content-seed.ts`; SEO titles/descriptions may be updated via `/admin/content-update`).

### 8–12. Admin Pages
- **Quotes** — real-time list, status workflow, pricing, ReplyModal, delete. Shared admin search filters the table; does **not** read `?search=` from the URL (Clients “View Quotes” currently passes that unused query param).
- **Clients** — CRUD, quote-derived metrics; “View Quotes” navigates to `/admin/quotes?search=…` (param ignored by quotes page).
- **Portfolio** — CRUD, Storage upload/delete, visibility/featured toggles. Grip/drag handle is **visual only** — `order` is not changed by drag.
- **Site Images** — 35 seed images across 5 pages; upload/revert/reset; preview modal.
- **Content Update** — authenticated one-off migration UI at `/admin/content-update`. Previews `CONTENT_UPDATES`, updates only listed fields on existing docs, stamps `updatedAt`, reports updated/missing/error, never creates missing docs. Current July 2026 batch rewrites meta titles/descriptions for all four industry pages. Not linked from the sidebar; admin header falls back to “Quote Management” title/search there.

---

## Components

### Layout

#### Root Layout (`src/app/layout.tsx`)
- `FOUNDING_YEAR = '1995'` — used in root description and LocalBusiness schema.
- `title.default`: `Commercial Printing Company Los Angeles | Artistic Printing`
- `title.template`: `%s | Artistic Printing`
- `@graph` JSON-LD: `LocalBusiness`, `WebSite`, `Person` (Estevan placeholder; `sameAs` empty).
- `AuthProvider`, Vercel Analytics, Google Analytics.

#### Main Layout (`src/app/(main)/layout.tsx`)
- `<Header />` + `{children}` + `<Footer />`.

#### Header / Footer
- **Header** — `/logo-header.png`, nav links, phone, “Get a Quote”, mobile menu, `.header-scrolled` frosted glass.
- **Footer** — logo, quick links, contact, “Family Owned” / “**30+ Years**” badges, “since **1995**” copy, scroll reveal.

#### Breadcrumbs (`src/components/breadcrumbs.tsx`)
- Accessible trail + embedded `BreadcrumbList` JSON-LD; `variant` light/dark.
- Used on industry landing pages.

### Public Section Components
`HomeHeroSection`, `HomeIndustriesSection`, `HomeFeaturesSection`, `HomeCTASection`, `HomePortfolioSection`, `TrustBar`, `TestimonialsSection`, `QuoteForm`, `IndustryPage`.

### Hooks
- **`useSiteImages(page)`** — real-time `siteImages` by page; `getImageUrl(key)`.
- **`useScrollReveal`** — `data-reveal` scroll animations; `useParallax` for backgrounds.

### Admin Components
`admin-sidebar`, `admin-header`, `stats-cards`, `quotes-table`, `quote-detail-panel`, `reply-modal`, `status-badge`, `client-table`, `client-modal`, `portfolio-modal`, `image-preview-modal`.

### UI (shadcn/ui)
`badge`, `button`, `card`, `input`, `tabs`, `textarea`.

---

## Firebase Integration

### Setup (`src/lib/firebase.ts`)
- Singleton app; exports `db` (Firestore), `storage` (Storage).

### Environment Variables (`.env.local`)
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
RESEND_API_KEY
```

### Auth
- Staff login via `signInWithEmailAndPassword`; admin layout redirects unauthenticated users.

### Firestore Collections

| Collection | Purpose |
|------------|---------|
| `quotes` | Public form submissions + admin workflow |
| `clients` | Admin client directory |
| `portfolio` | Portfolio projects (public + admin) |
| `siteImages` | Managed images per page/section (35 seeds) |
| `pageContent` | SEO landing page copy + structured lists (4 industry seeds) |

**`pageContent` doc shape** (see `PageContent` in `admin-data.ts`):
- Core: `id`, `type`, `slug`, `published`, `metaTitle`, `metaDescription`, `heroBadge`, `h1`, `heroSubtitle`, `heroBullets?`
- `sections` — flat string map (eyebrows, headings, image URLs, icon names)
- Structured lists: `complianceCards?`, `printItems?`, `trustLogos?`, `processSteps?`, `faqs?`, `relatedSlugs?` (seeded but not rendered)

### Storage
- `portfolio/{timestamp}-{id}.{ext}` — portfolio uploads
- `site-images/{id}-{timestamp}.{ext}` — custom site image replacements (actual upload path in Site Images admin)

### Seed / Update Scripts
- **`seedSiteImages()`** — creates 35 `siteImages` docs if collection empty (runs on Site Images admin page load).
- **`seedPageContent()`** — idempotent; creates 4 industry docs if missing (runs on admin layout mount). Preserves existing docs/admin edits.
- **`applyContentUpdates()`** — authenticated, manually triggered updater for existing `pageContent` docs. Accepts partial fields, verifies each target exists, writes only those fields plus `updatedAt`, returns per-document results.

### Current Page Content Update Batch
- `page-content-updates.ts` contains a July 2026 SEO metadata rewrite for Healthcare, Hospitality, Automotive, and Education.
- `/admin/content-update` displays targets and changed fields before execution, disables duplicate clicks while running, and summarizes successful/missing/failed updates.
- Intentionally separate from the idempotent seeder: seeder preserves existing docs; updater deliberately overwrites listed fields.

### Integration Points
- **QuoteForm (home + industry pages)** → Firestore `quotes` + POST `/api/send-quote-notification`
- **Contact page form** → Firestore `quotes` only (no Resend call)
- **`[slug]/page.tsx`** → reads `pageContent` at build + ISR; `generateStaticParams` + `getPage`
- **Sitemap** → static routes + published `pageContent` slugs
- **Admin** → full CRUD on quotes, clients, portfolio, site images
- **Admin content update** → targeted metadata/content migrations for existing `pageContent` docs

### Firestore Security (production)
- `pageContent` requires **public read** on published docs for SSG/ISR prerendering at build time and hourly revalidation. Writes remain admin-only (`request.auth != null`).
- No `firestore.rules` / index config is checked into this repository.

---

## API Routes

### POST `/api/send-quote-notification`
- Resend HTML email to `design@artisticprinting.com`.
- From address currently uses Resend’s `onboarding@resend.dev` sandbox sender.
- Called by `QuoteForm` after Firestore save (fire-and-forget).
- No request validation or rate limiting yet.

---

## SEO & Discovery

### Metadata
- Root: `metadataBase`, `title.template` (`%s | Artistic Printing`), OpenGraph, favicons, manifest.
- Per-page layouts for About, Services, Portfolio, Contact (About layout uses `FOUNDING_YEAR = '1995'`).
- Dynamic pages: `generateMetadata` with canonical URLs.

### Structured Data
- **Site-wide:** `@graph` LocalBusiness + WebSite + Person (root layout).
- **Industry pages:** `Service` + optional `FAQPage` JSON-LD.
- **Breadcrumbs:** `BreadcrumbList` on industry pages.

### Robots (`src/app/robots.ts`)
- Allow `/`; disallow `/admin/`, `/staff-login`, `/api/`.

### Sitemap (`src/app/sitemap.ts`)
- `revalidate = 3600`.
- Static: `/`, `/services`, `/portfolio`, `/about`, `/contact`.
- Dynamic: published `pageContent` docs; priority by type (industry/service 0.8, neighborhood 0.7).

### Internal Linking (SEO)
- Homepage **Industries We Serve** cards → four industry landing pages.
- Industry pages breadcrumb parent → `/services` (labeled “Industries”).
- Seeded `relatedSlugs` not yet surfaced as on-page related links.

---

## Build Output (verified)

```
npm run build
```

| Route | Rendering |
|-------|-----------|
| `/` | Static |
| `/about`, `/services`, `/portfolio`, `/contact`, `/staff-login` | Static |
| `/[slug]` × 4 industry pages | SSG, revalidate 1h |
| `/sitemap.xml` | ISR, revalidate 1h |
| `/admin/*` | Static (client-side auth guard) |
| `/admin/content-update` | Static shell with authenticated client-side Firestore updates |
| `/api/send-quote-notification` | Dynamic |

Prerendered slugs: `automotive-printing-los-angeles`, `education-printing-los-angeles`, `healthcare-printing-los-angeles`, `hospitality-printing-los-angeles`.

---

## Styling (`src/app/globals.css`)

- Tailwind CSS 4 `@theme inline`, cyan primary, slate palette.
- Animations: `animate-scroll`, `data-reveal` variants + stagger, float orbs, `header-scrolled`, count-up, scrollbar-hide.

---

## Configuration

### Next.js (`next.config.ts`)
- `images.remotePatterns` → `images.unsplash.com`

### PWA / Icons
- **Primary:** `public/site.webmanifest` (linked from root metadata) — references `/android-chrome-192x192.png` and `/android-chrome-512x512.png`, which are **not** present in `public/`.
- **Alternate:** `src/app/manifest.json` — references existing `web-app-manifest-*.png` files.
- **Present:** `logo-header.png`, `og-image.png`, `web-app-manifest-*.png`, App Router `favicon.ico` / `apple-icon.png` / `icon0.svg` / `icon1.png`.
- **Missing vs metadata refs:** `/favicon-16x16.png`, `/favicon-32x32.png`, `/apple-touch-icon.png` (metadata still points at these public paths), and the `android-chrome-*` files named in `site.webmanifest`.

### shadcn/ui (`components.json`)
- Style: new-york; neutral base; lucide icons

### TypeScript (`tsconfig.json`)
- `@/*` → `./src/*`

### Other
- `eslint.config.mjs`, `postcss.config.mjs`

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (SSG industry pages)
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Pending / TODO

1. **Phase 2–3:** Service landing pages (`type: 'service'`) — seed data + `ServicePage` template.
2. **Phase 4:** Neighborhood pages (`type: 'neighborhood'`) — seed data + `NeighborhoodPage` template.
3. **General page content editor:** No full CRUD editor for `pageContent`. `/admin/content-update` only applies a hardcoded batch.
4. **Contact form email:** Contact page does not trigger Resend (only `QuoteForm` does).
5. **Icon / manifest mismatches:** Primary `site.webmanifest` references missing `android-chrome-*` icons; root metadata references missing `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`.
6. **Admin content update navigation:** `/admin/content-update` exists but is not in the sidebar; header title/search fall back to Quote Management.
7. **Reply automation:** ReplyModal uses clipboard / `mailto:`; no automated outbound email.
8. **Client detail route:** No `/admin/clients/[id]`.
9. **Quotes `?search=`:** Clients “View Quotes” passes `?search=`, but quotes page never reads that param.
10. **Portfolio drag reorder:** Grip handle is visual only; ordering cannot be changed via drag.
11. **`relatedSlugs`:** Seeded on industry docs but not rendered as related-links UI.
12. **JSON-LD placeholders:** `sameAs` empty; Person (Estevan) incomplete until GBP/social/owner details are live.
13. **Founding-year consistency:** Root layout / About layout / home / footer / services / portfolio use **1995 / 30+**; About page body and industry seed copy still use **2010 / 15+** in places. Confirm with business owner, then unify.
14. **Email API hardening:** No validation/rate limiting; still sends from `onboarding@resend.dev`.
15. **Repo ops:** No checked-in Firestore rules/indexes; `mockQuotes` in `admin-data.ts` is unused demo data.

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** design@artisticprinting.com
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** Documented as **1995** in root layout `FOUNDING_YEAR` (homepage, footer, schema, About layout). About page body and some industry seed strings still say **2010** — treat as unresolved until confirmed.
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (+ Finance, Media, Retail on portfolio)
