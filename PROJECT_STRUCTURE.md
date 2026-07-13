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
│   └── site.webmanifest                 # PWA manifest (name, icons, theme_color)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout: Inter, metadata, @graph JSON-LD, AuthProvider, Analytics, GA
│   │   ├── globals.css                  # Global styles, CSS variables, animations
│   │   ├── robots.ts                    # Robots.txt: allow /, disallow /admin/ /staff-login /api/
│   │   ├── sitemap.ts                   # Static routes + published pageContent (revalidate 1h)
│   │   ├── manifest.json                # PWA manifest (maskable icons)
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
│   │   │   │   ├── layout.tsx           # About SEO metadata
│   │   │   │   └── page.tsx             # About Us
│   │   │   ├── contact/
│   │   │   │   ├── layout.tsx           # Contact SEO metadata
│   │   │   │   └── page.tsx             # Contact + quote form
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
│   │       └── site-images/page.tsx
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
│       ├── admin-data.ts                # Quote, Client, PortfolioItem, SiteImage, PageContent types
│       ├── site-images-seed.ts          # 35 default siteImages docs
│       ├── page-content-seed.ts         # 4 industry pageContent docs (Phase 1)
│       └── utils.ts
│
├── .env.local                           # Firebase + RESEND_API_KEY (not committed)
├── components.json
├── next.config.ts
├── package.json
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
| `/contact` | `(main)/contact/page.tsx` | Contact + quote form |
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

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/(main)/page.tsx`

- **Hero:** `HomeHeroSection` — site images, glow orbs, “Where Ideas Become Print”, CTAs; “Trusted by LA businesses since **2010**”.
- **Trust Bar:** `TrustBar` — client marquee; “Trusted by LA businesses since **2010**”.
- **Industries:** `HomeIndustriesSection` — four cards link to industry landing pages (`/healthcare-printing-los-angeles`, etc.); CTA label “Learn More”.
- **Portfolio Preview:** `HomePortfolioSection` — Firestore `portfolio` (visible, limit 6, featured first).
- **Features + Quote:** `HomeFeaturesSection` — dark section, facility images, `QuoteForm` (dark).
- **Testimonials:** `TestimonialsSection` — auto-rotate 6s.
- **CTA:** `HomeCTASection` — `home-cta-bg`, quote + phone buttons.

### 2–6. Static Pages
- **About** — hero, story, timeline, team, facility tour, values, CTA; `useSiteImages('about')`.
- **Services** — hero (15+ years experience), four service-type categories, capabilities, 4-step process, CTA; `useSiteImages('services')`.
- **Portfolio** — Firestore grid, industry filters, stats, client marquee, CTA; `useSiteImages('portfolio')`.
- **Contact** — hero, contact method cards, inline quote form (Firestore only), FAQ accordion, CTA; `useSiteImages('contact')`.
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
- **Compliance grid** — `complianceCards` (icon, gradient color, title, description).
- **What We Print** — `printItems` grid with icons.
- **Trusted By** — infinite marquee of `trustLogos`.
- **Process** — 5-step timeline (`processSteps` or defaults).
- **FAQ** — accordion; mirrors FAQ JSON-LD on route.
- **CTA + Form** — contact info + embedded `QuoteForm` (dark); `#quote` anchor.

Content is driven entirely by Firestore `pageContent` docs (seeded from `page-content-seed.ts`).

### 8–11. Admin Pages
- **Quotes** — real-time list, status workflow, pricing, ReplyModal, delete.
- **Clients** — CRUD, quote-derived metrics.
- **Portfolio** — CRUD, Storage upload/delete, visibility/featured toggles.
- **Site Images** — 35 seed images across 5 pages; upload/revert/reset; preview modal.

---

## Components

### Layout

#### Root Layout (`src/app/layout.tsx`)
- `title.template`: `%s — Artistic Printing Co.`
- `@graph` JSON-LD: `LocalBusiness`, `WebSite`, `Person` (Estevan placeholder).
- `AuthProvider`, Vercel Analytics, Google Analytics.

#### Main Layout (`src/app/(main)/layout.tsx`)
- `<Header />` + `{children}` + `<Footer />`.

#### Header / Footer
- **Header** — `/logo-header.png`, nav links, phone, “Get a Quote”, mobile menu, `.header-scrolled` frosted glass.
- **Footer** — logo, quick links, contact, “Family Owned” / “15+ Years” badges, scroll reveal.

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
- Structured lists: `complianceCards?`, `printItems?`, `trustLogos?`, `processSteps?`, `faqs?`, `relatedSlugs?`

### Storage
- `portfolio/{timestamp}-{id}.{ext}` — portfolio uploads
- `siteImages/{page}/{id}.{ext}` — custom site image replacements

### Seed Scripts
- **`seedSiteImages()`** — creates 35 `siteImages` docs if collection empty (runs on Site Images admin page load).
- **`seedPageContent()`** — idempotent; creates 4 industry docs if missing (runs on admin layout mount). Preserves existing docs/admin edits.

### Integration Points
- **QuoteForm (home + industry pages)** → Firestore `quotes` + POST `/api/send-quote-notification`
- **Contact page form** → Firestore `quotes` only (no Resend call)
- **`[slug]/page.tsx`** → reads `pageContent` at build + ISR; `generateStaticParams` + `getPage`
- **Sitemap** → static routes + published `pageContent` slugs
- **Admin** → full CRUD on quotes, clients, portfolio, site images

### Firestore Security (production)
- `pageContent` requires **public read** on published docs for SSG/ISR prerendering at build time and hourly revalidation. Writes remain admin-only.

---

## API Routes

### POST `/api/send-quote-notification`
- Resend HTML email to `design@artisticprinting.com`.
- Called by `QuoteForm` after Firestore save (fire-and-forget).

---

## SEO & Discovery

### Metadata
- Root: `metadataBase`, `title.template`, OpenGraph, favicons, manifest.
- Per-page layouts for About, Services, Portfolio, Contact.
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
- Homepage **Industries We Serve** cards → four industry landing pages (highest-authority internal links).
- Industry pages breadcrumb parent → `/services` (labeled “Industries”).

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

### PWA
- `public/site.webmanifest` (primary link from metadata)
- `src/app/manifest.json` (alternate)

### shadcn/ui (`components.json`)
- Style: new-york; neutral base; lucide icons

### TypeScript (`tsconfig.json`)
- `@/*` → `./src/*`

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
3. **Admin page content editor:** No admin UI for `pageContent` yet; edits require Firestore console or seed file changes.
4. **Contact form email:** Contact page does not trigger Resend (only `QuoteForm` does).
5. **Static assets:** `logo-header.png`, favicons, `og-image.png` referenced in metadata but may be missing from `public/` (only `site.webmanifest` committed).
6. **Google Maps:** Contact uses external directions link; no embedded map.
7. **Admin “Coming soon”:** Settings page only.
8. **Reply automation:** ReplyModal uses clipboard / `mailto:`; no automated outbound email.
9. **Client detail route:** No `/admin/clients/[id]`.
10. **JSON-LD `sameAs`:** Empty until GBP/social URLs are live.
11. **Copy consistency:** Portfolio hero still shows “20+ Years Experience”; `home-features-section` mentions “20+ years” while most site copy uses 2010 / 15+.

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** design@artisticprinting.com
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** 2010
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (+ Finance, Media, Retail on portfolio)
