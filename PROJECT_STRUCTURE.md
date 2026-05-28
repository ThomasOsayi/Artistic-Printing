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
| @next/third-parties | 16.2.2 | Google Analytics integration |

---

## File Tree

```
Artistic-Printing/
├── public/
│   └── site.webmanifest                 # PWA manifest (name, icons, theme_color)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout (html, body, Inter, metadata, JSON-LD, AuthProvider, Analytics, GA)
│   │   ├── globals.css                  # Global styles, CSS variables, animations
│   │   ├── robots.ts                    # Robots.txt: allow /, disallow /admin/ /staff-login /api/
│   │   ├── sitemap.ts                   # Static routes + dynamic pageContent from Firestore (revalidate 1h)
│   │   ├── manifest.json                # PWA manifest (maskable icons, standalone display)
│   │   ├── api/
│   │   │   └── send-quote-notification/
│   │   │       └── route.ts             # POST: Resend email to design@artisticprinting.com
│   │   │
│   │   ├── (main)/                      # Route group for public site pages
│   │   │   ├── layout.tsx               # ⚠️ Currently broken duplicate of root layout (see Known Issues)
│   │   │   ├── page.tsx                 # Home page (section composition + page metadata)
│   │   │   ├── about/
│   │   │   │   ├── layout.tsx           # About SEO metadata
│   │   │   │   └── page.tsx             # About Us (hero, story, timeline, team, facility, values, CTA)
│   │   │   ├── contact/
│   │   │   │   ├── layout.tsx           # Contact SEO metadata
│   │   │   │   └── page.tsx             # Contact (hero, methods, form, FAQ, CTA)
│   │   │   ├── portfolio/
│   │   │   │   ├── layout.tsx           # Portfolio SEO metadata
│   │   │   │   └── page.tsx             # Portfolio (Firestore grid, filters, stats, marquee, CTA)
│   │   │   ├── services/
│   │   │   │   ├── layout.tsx           # Services SEO metadata
│   │   │   │   └── page.tsx             # Services (hero, categories, capabilities, process, CTA)
│   │   │   └── staff-login/
│   │   │       └── page.tsx             # Staff login (Firebase Auth) → /admin/quotes
│   │   │
│   │   └── admin/                       # Admin dashboard (auth-protected, separate layout)
│   │       ├── layout.tsx               # Sidebar + header; redirects unauthenticated to /staff-login
│   │       ├── page.tsx                 # Redirects to /admin/quotes
│   │       ├── quotes/page.tsx          # Quote management
│   │       ├── clients/page.tsx         # Client directory
│   │       ├── portfolio/page.tsx       # Portfolio manager
│   │       └── site-images/page.tsx     # Site Images manager
│   │
│   ├── components/
│   │   ├── header.tsx                   # Sticky nav, logo image, mobile menu, scroll style (not mounted — see Known Issues)
│   │   ├── footer.tsx                   # Footer with logo, links, contact, scroll reveal (not mounted)
│   │   ├── breadcrumbs.tsx              # Breadcrumb trail + BreadcrumbList JSON-LD (ready, not used on pages yet)
│   │   ├── quote-form.tsx               # Reusable quote form (home features section; Firestore + Resend)
│   │   ├── testimonials-section.tsx     # Home testimonials carousel
│   │   ├── trust-bar.tsx                # Home trust bar (client pills + scroll reveal)
│   │   ├── home-hero-section.tsx        # Home hero (useSiteImages)
│   │   ├── home-industries-section.tsx  # Home industries grid
│   │   ├── home-features-section.tsx    # Home features + QuoteForm
│   │   ├── home-cta-section.tsx         # Home CTA banner
│   │   ├── home-portfolio-section.tsx   # Home recent projects (Firestore)
│   │   ├── admin/                       # Admin dashboard components (sidebar, header, tables, modals, etc.)
│   │   └── ui/                          # shadcn/ui: badge, button, card, input, tabs, textarea
│   │
│   ├── hooks/
│   │   ├── use-site-images.ts           # Real-time site images by page
│   │   └── use-scroll-reveal.ts         # Scroll reveal + useParallax
│   │
│   └── lib/
│       ├── firebase.ts                  # Firestore + Storage init
│       ├── auth-context.tsx             # Firebase Auth (AuthProvider, useAuth)
│       ├── admin-search-context.tsx       # Shared admin search state
│       ├── admin-data.ts                # Types: Quote, Client, PortfolioItem, SiteImage, PageContent + mockQuotes
│       ├── site-images-seed.ts          # 35 default siteImages docs (home/services/about/portfolio/contact)
│       ├── page-content-seed.ts         # Phase 0 pageContent seeder (SEED_PAGES empty until Phase 1)
│       └── utils.ts                     # cn() helper
│
├── .env.local                           # Firebase + RESEND_API_KEY (not committed)
├── components.json                      # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts                       # Unsplash remotePatterns for next/image
├── package.json
├── postcss.config.mjs
├── tsconfig.json                        # @/* path alias
└── PROJECT_STRUCTURE.md                 # This file
```

---

## Routes

### Public Pages (under `(main)` route group)

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/(main)/page.tsx` | Homepage (composed sections) |
| `/about` | `src/app/(main)/about/page.tsx` | About Us |
| `/services` | `src/app/(main)/services/page.tsx` | Services listing |
| `/portfolio` | `src/app/(main)/portfolio/page.tsx` | Portfolio with filters |
| `/contact` | `src/app/(main)/contact/page.tsx` | Contact + quote form |
| `/staff-login` | `src/app/(main)/staff-login/page.tsx` | Staff login → `/admin/quotes` |

Dynamic SEO landing pages (`pageContent` collection) are planned (Phase 1+); infrastructure exists but no routes or seed data yet.

### Admin Dashboard

| Route | File | Description |
|-------|------|-------------|
| `/admin` | `src/app/admin/page.tsx` | Redirects to `/admin/quotes` |
| `/admin/quotes` | `src/app/admin/quotes/page.tsx` | Quote management |
| `/admin/clients` | `src/app/admin/clients/page.tsx` | Client directory |
| `/admin/portfolio` | `src/app/admin/portfolio/page.tsx` | Portfolio CRUD + image upload |
| `/admin/site-images` | `src/app/admin/site-images/page.tsx` | Site Images manager |

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/(main)/page.tsx`

Exports page-level `metadata` (title, description, OpenGraph).

- **Hero:** `HomeHeroSection` — `useSiteImages('home')` for `home-hero-bg` and product card images; glow orbs, grid, headline, CTAs, floating product cards.
- **Trust Bar:** `TrustBar` — infinite scroll client pills, gradient masks, `useScrollReveal`.
- **Industries:** `HomeIndustriesSection` — four industry cards with optional site images.
- **Portfolio Preview:** `HomePortfolioSection` — Firestore `portfolio` (visible, limit 6, featured first).
- **Features + Quote:** `HomeFeaturesSection` — dark section, facility strip images, four feature cards, embedded `QuoteForm` (dark variant).
- **Testimonials:** `TestimonialsSection` — auto-rotate every 6s.
- **CTA:** `HomeCTASection` — `home-cta-bg` background, quote + phone CTAs.

### 2. About Page (`/about`)
**File:** `src/app/(main)/about/page.tsx` — **client component**

- **Hero:** Dark hero with `about-hero-bg` via `useSiteImages('about')`, animated entrance, badge “Family-Owned Since 2010”.
- **Story + Stats:** Two-column story with stats grid (15+ Years, 24-48hr Turnaround, 10M+ Prints, 100% Satisfaction).
- **Timeline:** Company milestones (2010–2026) with scroll reveal.
- **Team:** Four members (Kassa, Marcel, Estevan, João Serro) with gradient avatar initials and bios.
- **Facility Tour:** Four facility images via site image keys (`about-facility-digital`, offset, design, finishing).
- **Values:** Quality First, On-Time Delivery, Fair Pricing with icon cards.
- **CTA:** Full-width section with `about-cta-bg`, contact buttons.
- **SEO layout:** `about/layout.tsx` exports metadata.

### 3. Services Page (`/services`)
**File:** `src/app/(main)/services/page.tsx` — **client component**

- **Hero:** `services-hero-bg`, stats row (24-48hr, 20+ Years, Free Estimates), animated entrance.
- **Service Categories:** Four alternating sections (Commercial, Custom Packaging, Large Format, Office & Forms) with icons, item lists, per-category images from site images (`services-commercial`, `services-packaging`, etc.), “Get a Quote” links.
- **Capabilities:** Dark section with `services-capabilities-bg`, icon grid (digital, offset, bindery, design, etc.).
- **Process:** How-we-work steps with scroll reveal.
- **CTA:** `services-cta-bg` background, “Don't See What You Need?” + Contact Us.
- **SEO layout:** `services/layout.tsx`.

### 4. Portfolio Page (`/portfolio`)
**File:** `src/app/(main)/portfolio/page.tsx` — **client component**

- **Data:** Real-time Firestore `portfolio` where `visible === true`, ordered by `order`.
- **Hero:** `portfolio-hero-bg` via `useSiteImages('portfolio')`.
- **Filter Bar:** Sticky industry filters (All + dynamic industries from data) with counts.
- **Projects Grid:** Cards with industry icon/color mapping, image, badges, hover overlay, loading spinner.
- **Empty State:** “No projects found” when filter matches nothing.
- **Stats:** Four stat cards (500+ Projects, Rush Orders, 20+ Years, 100% Satisfaction).
- **Clients Marquee:** Infinite horizontal scroll of client names.
- **CTA:** `portfolio-cta-bg` with gradient overlay, quote + phone.
- **SEO layout:** `portfolio/layout.tsx`.

### 5. Contact Page (`/contact`)
**File:** `src/app/(main)/contact/page.tsx` — **client component**

- **Hero:** `contact-hero-bg`, “We Respond Within 24 Hours” badge.
- **Contact Method Cards:** Visit, Call, Email (`design@artisticprinting.com`), Hours — with gradient icons and action links (Google Maps directions, tel:, mailto:).
- **Quote Form (inline):** First/Last name, company, email, phone, project details; saves to Firestore `quotes` with `serverTimestamp()`. Does **not** call `/api/send-quote-notification` (unlike `QuoteForm` on home).
- **Quick Services sidebar:** Turnaround hints for common products.
- **FAQ Accordion:** Five FAQs with expand/collapse.
- **CTA:** `contact-cta-bg` section.
- **SEO layout:** `contact/layout.tsx`.

### 6. Staff Login (`/staff-login`)
**File:** `src/app/(main)/staff-login/page.tsx`

- Email + password via `useAuth().login()`; redirect to `/admin/quotes` on success; branded admin access UI.

### 7. Admin — Quotes (`/admin/quotes`)
- Real-time Firestore `quotes` (`onSnapshot`, `createdAt` desc).
- Stats: New, Quoted, Approved, Monthly Revenue.
- Filterable table + detail panel with status workflow, pricing card, ReplyModal, delete with confirmation.
- `updateDoc` / `deleteDoc` for status, prices, turnaround.

### 8. Admin — Clients (`/admin/clients`)
- Real-time `clients` + `quotes`; computed orders/revenue by company name.
- Stats: Total Clients, Repeat Clients, Avg. Order Value.
- ClientTable + ClientModal (add from quote companies or manual, edit, delete).

### 9. Admin — Portfolio (`/admin/portfolio`)
- CRUD on `portfolio` collection; images in Storage `portfolio/{timestamp}-{id}.{ext}`.
- Stats, search, industry tabs, visibility/featured toggles, PortfolioModal with 5MB image validation.

### 10. Admin — Site Images (`/admin/site-images`)
- Real-time `siteImages`; `seedSiteImages()` on first load (35 seed docs if collection empty).
- Tabs: Home (14), Services (7), About (10), Portfolio (2), Contact (2).
- Upload / revert / reset; ImagePreviewModal (portal); desktop/mobile preview toggle.

---

## Components

### Layout

#### Root Layout (`src/app/layout.tsx`)
- `<html>` / `<body>`, Inter font, `globals.css`, `AuthProvider`.
- **Metadata:** `metadataBase`, title, description, favicons, manifest, OpenGraph (`/og-image.png`).
- **JSON-LD:** Single `LocalBusiness` entity (address, geo, hours, services, `info@artisticprinting.com`).
- **Analytics:** Vercel `<Analytics />` + Google Analytics (`G-R91VBXEWDG`) via `@next/third-parties/google`.

#### Main Site Layout (`src/app/(main)/layout.tsx`) — Known Issue
Currently contains a **duplicate** of enhanced root-layout code (metadata with `title.template`, `@graph` JSON-LD, AuthProvider, Analytics, GA) and incorrectly imports `./globals.css` from the wrong path. **Build fails** until this file is restored to wrap children with `<Header>` and `<Footer>` only.

#### Header (`src/components/header.tsx`) — Implemented, not mounted
- Sticky nav with `/logo-header.png` (next/image), scroll-based `.header-scrolled` style.
- Links: Home, Services, Portfolio, About, Contact; phone; “Get a Quote”; mobile slide-down menu; active route highlight.

#### Footer (`src/components/footer.tsx`) — Implemented, not mounted
- Logo image, description, Family Owned / 15+ Years badges, quick links, contact block, copyright.
- `useScrollReveal` with staggered `data-reveal`.

#### Per-Page SEO Layouts
- `services/layout.tsx`, `portfolio/layout.tsx`, `about/layout.tsx`, `contact/layout.tsx` — page-specific `Metadata` (title, description, OpenGraph).
- Home exports metadata from `page.tsx`; staff-login has none.

#### Admin Layout (`src/app/admin/layout.tsx`)
- Auth guard → `/staff-login`; `AdminSearchProvider`; `AdminSidebar` + `AdminHeader`; real-time new-quote badge; search clears on navigation; responsive sidebar overlay.

### Public Components

| Component | Purpose |
|-----------|---------|
| `QuoteForm` | Home features section only; Firestore + Resend notification API |
| `Breadcrumbs` | Accessible trail + `BreadcrumbList` JSON-LD; `variant` light/dark; not used on pages yet |
| `TestimonialsSection` | Home carousel, 6s auto-advance |
| `TrustBar` | Home client marquee |
| `HomeHeroSection` / `HomeIndustriesSection` / `HomeFeaturesSection` / `HomeCTASection` / `HomePortfolioSection` | Home page sections |

### Hooks

- **`useSiteImages(page)`** — `onSnapshot` on `siteImages` where `page === page`; `getImageUrl(key)` → `customUrl || stockUrl`. Used on home sections and services, about, portfolio, contact pages.
- **`useScrollReveal`** — IntersectionObserver for `data-reveal` variants; used across public pages and home sections.
- **`useParallax`** — Lightweight scroll-based translate (exported from `use-scroll-reveal.ts`).

### Admin Components
`admin-sidebar`, `admin-header`, `stats-cards`, `quotes-table`, `quote-detail-panel`, `reply-modal`, `status-badge`, `client-table`, `client-modal`, `portfolio-modal`, `image-preview-modal` — full quote workflow, client CRUD, portfolio CRUD, site image management.

### UI (shadcn/ui)
`badge`, `button`, `card`, `input`, `tabs`, `textarea` — new-york style, lucide icons.

---

## Firebase Integration

### Setup (`src/lib/firebase.ts`)
- Singleton Firebase app; exports `db` (Firestore), `storage` (Storage).

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

### Auth (`src/lib/auth-context.tsx`)
- `signInWithEmailAndPassword`, `signOut`, `onAuthStateChanged`; admin layout redirects if unauthenticated.

### Firestore Collections

| Collection | Purpose |
|------------|---------|
| `quotes` | Public form submissions + admin workflow (status, pricing, turnaround) |
| `clients` | Admin client directory |
| `portfolio` | Portfolio projects (public + admin); `visible`, `featured`, `order`, Storage URLs |
| `siteImages` | Managed images per page/section (35 seed entries) |
| `pageContent` | **Phase 0+** SEO landing page copy (types + seeder ready; `SEED_PAGES` empty) |

### Storage
- `portfolio/{timestamp}-{id}.{ext}` — portfolio uploads
- `siteImages/{page}/{id}.{ext}` — custom site image replacements

### Integration Points
- **QuoteForm (home)** → Firestore `quotes` + POST `/api/send-quote-notification`
- **Contact page form** → Firestore `quotes` only (no email API call)
- **Admin quotes** → real-time list, status/price updates, ReplyModal Firestore writes
- **Admin clients** → CRUD + quote-derived metrics
- **Admin portfolio / site-images** → CRUD + Storage upload/delete
- **Public portfolio + HomePortfolioSection** → read `portfolio` (visible)
- **useSiteImages** → all major public pages + home sections
- **sitemap.ts** → reads published `pageContent` docs for dynamic URLs

---

## API Routes

### POST `/api/send-quote-notification`
- Resend HTML email to `design@artisticprinting.com` from `onboarding@resend.dev`.
- Called by `QuoteForm` after Firestore save (fire-and-forget).
- Body: `firstName`, `lastName`, `email`, `phone`, `company`, `service`, `quantity`, `urgency`, `message`.

---

## Data Types (`src/lib/admin-data.ts`)

- **`Quote`** — contact fields, `status` workflow, optional `estimatedPrice`, `finalPrice`, `turnaround`, `quotedAt`
- **`Client`** — name, industry, contact, notes; orders/revenue computed on clients page
- **`PortfolioItem`** — client, industry, type, description, imageUrl/Path, featured, visible, order
- **`SiteImage`** — page, section, name, location, stockUrl, customUrl/Path, recommendedSize, order
- **`PageContent`** — `type` (industry | service | neighborhood | page), `slug`, `published`, SEO fields, `sections` map, optional `faqs`, `relatedSlugs`
- **`mockQuotes`** — 11 sample quotes (reference/fallback; admin uses live Firestore)

### Seed Scripts
- **`site-images-seed.ts`** — `seedSiteImages()` creates 35 docs if collection empty (home: 14, services: 7, about: 10, portfolio: 2, contact: 2).
- **`page-content-seed.ts`** — `seedPageContent()` idempotent seeder; no-op while `SEED_PAGES` is empty (Phase 1 will add industry/service/neighborhood pages).

---

## SEO & Discovery

### Root metadata (`src/app/layout.tsx`)
- Site-wide title, description, favicons, `/site.webmanifest`, OpenGraph image.
- `LocalBusiness` JSON-LD.

### Enhanced metadata (intended for root — currently duplicated in broken `(main)/layout.tsx`)
- `title.template`: `%s — Artistic Printing Co.`
- `@graph` JSON-LD: `LocalBusiness` (with `logo`, `founder` → Person), `WebSite`, `Person` (Estevan, placeholder)
- Contact email in schema: `design@artisticprinting.com`

### Robots (`src/app/robots.ts`)
- Allow `/`; disallow `/admin/`, `/staff-login`, `/api/`; sitemap URL.

### Sitemap (`src/app/sitemap.ts`)
- **`revalidate = 3600`** (hourly ISR).
- **Static routes:** `/`, `/services`, `/portfolio`, `/about`, `/contact` with priorities and change frequencies.
- **Dynamic routes:** Published docs from Firestore `pageContent` (`published === true`); URL `/{slug}`; priority/frequency by `type` (industry/service 0.8, neighborhood 0.7, page 0.5). Graceful fallback to static-only if Firestore fails.

### Breadcrumbs (`src/components/breadcrumbs.tsx`)
- Renders nav + embedded `BreadcrumbList` JSON-LD; ready for dynamic landing pages.

---

## Styling (`src/app/globals.css`)

- Tailwind CSS 4 `@theme inline`, light/dark CSS variables, cyan primary.
- **Animations:** `animate-scroll` (trust/marquee), `data-reveal` variants + stagger, `float-slow` / `float-slower` orbs, `header-scrolled` frosted glass, `animate-count-up`, `.scrollbar-hide`.
- **Motion:** `useScrollReveal` + `data-reveal` on public pages and home sections.

---

## Configuration

### Next.js (`next.config.ts`)
- `images.remotePatterns` → `images.unsplash.com`

### PWA
- `public/site.webmanifest` — linked from root metadata
- `src/app/manifest.json` — alternate manifest with maskable icons (not primary link)

### shadcn/ui (`components.json`)
- Style: new-york; neutral base; CSS variables; lucide icons

### TypeScript (`tsconfig.json`)
- `@/*` → `./src/*`

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Known Issues / Pending

1. **`(main)/layout.tsx` regression:** File duplicates root layout and breaks build (`Can't resolve './globals.css'`). Should be restored to only render `<Header>` + `{children}` + `<Footer>`.
2. **Header/Footer not mounted:** Components exist with logo and nav but are not imported anywhere until layout is fixed.
3. **Contact form email:** Contact page saves to Firestore but does not trigger Resend notification (only home `QuoteForm` does).
4. **Static assets missing from `public/`:** Referenced but not present: `logo-header.png`, favicons, `og-image.png`, android-chrome icons. Only `site.webmanifest` exists.
5. **Google Maps:** Contact uses external Google Maps link on “Get Directions”; no embedded map.
6. **Dynamic SEO pages (Phase 1+):** `PageContent` type, `page-content-seed.ts`, dynamic sitemap entries, and `Breadcrumbs` are ready; no `SEED_PAGES`, route templates, or admin editor yet.
7. **Admin “Coming soon”:** Settings page only.
8. **Reply email automation:** ReplyModal uses clipboard / `mailto:`; no automated outbound email on quote reply.
9. **Client detail route:** No `/admin/clients/[id]` page.
10. **JSON-LD `sameAs`:** Placeholder empty until GBP/social URLs are live.
11. **Duplicate analytics risk:** When layout is fixed, ensure GA/Analytics are only included once (root vs. main layout).

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email (public contact):** design@artisticprinting.com
- **Email (schema/root legacy):** info@artisticprinting.com (root layout JSON-LD only)
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** 2010
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (+ Finance, Media, Retail on portfolio)
