# Artistic Printing Company - Project Structure

A modern commercial printing company website built with Next.js 16, React 19, Tailwind CSS 4, and Firebase.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Firebase | 12.9.0 | Backend (Firestore database + Storage) |
| Radix UI | Latest | Headless UI components (Slot, Tabs) |
| Lucide React | 0.563.0 | Icon library |
| tw-animate-css | 1.4.0 | Animation utilities |
| class-variance-authority | 0.7.1 | Component variant management |
| clsx | 2.1.1 | Conditional class names |
| tailwind-merge | 3.4.0 | Tailwind class deduplication |
| Resend | Latest | Transactional email (quote notification) |

---

## File Tree

```
Artistic-Printing/
├── public/                              # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── site.webmanifest                 # PWA web app manifest (name, icons, theme_color)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout (html, body, font, metadata — NO Header/Footer)
│   │   ├── globals.css                  # Global styles, CSS variables, scroll animation
│   │   ├── favicon.ico
│   │   ├── api/
│   │   │   └── send-quote-notification/
│   │   │       └── route.ts             # POST: send quote email via Resend to design@artisticprinting.com
│   │   │
│   │   ├── (main)/                      # Route group for public site pages
│   │   │   ├── layout.tsx               # Main site layout WITH Header + Footer
│   │   │   ├── page.tsx                 # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx             # About Us page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx             # Contact page with form
│   │   │   ├── portfolio/
│   │   │   │   └── page.tsx             # Portfolio with filters and project grid
│   │   │   ├── services/
│   │   │   │   └── page.tsx             # Services listing with hero and capabilities
│   │   │   └── staff-login/
│   │   │       └── page.tsx             # Staff login (Firebase Auth) → redirects to /admin/quotes
│   │   │
│   │   └── admin/                       # Admin dashboard section (separate layout)
│   │       ├── layout.tsx               # Admin layout with sidebar + top header (NO main site nav)
│   │       ├── page.tsx                 # Redirects to /admin/quotes
│   │       ├── quotes/
│   │       │   └── page.tsx             # Quote management dashboard
│   │       ├── clients/
│   │       │   └── page.tsx            # Client directory page
│   │       ├── portfolio/
│   │       │   └── page.tsx            # Portfolio manager (Firestore + Storage)
│   │       └── site-images/
│   │           └── page.tsx            # Site Images manager (hero, CTA, product cards, etc.)
│   │
│   ├── components/
│   │   ├── header.tsx                   # Site header with navigation
│   │   ├── footer.tsx                   # Site footer
│   │   ├── quote-form.tsx               # Reusable quote request form (Firebase integrated)
│   │   ├── testimonials-section.tsx     # Home page testimonials carousel
│   │   ├── trust-bar.tsx                # Home trust bar (client pills + useScrollReveal)
│   │   ├── home-hero-section.tsx        # Home hero (uses useSiteImages('home'))
│   │   ├── home-industries-section.tsx  # Home industries grid (optional site images)
│   │   ├── home-features-section.tsx    # Home features + quote form (uses useSiteImages)
│   │   ├── home-cta-section.tsx         # Home CTA banner (uses useSiteImages)
│   │   ├── home-portfolio-section.tsx   # Home "Recent Projects" (Firestore portfolio, limit 6)
│   │   │
│   │   ├── admin/                       # Admin dashboard components
│   │   │   ├── admin-sidebar.tsx        # Left sidebar navigation
│   │   │   ├── admin-header.tsx         # Top header with search + actions
│   │   │   ├── stats-cards.tsx          # Stats row (New, Pending, Approved, Revenue)
│   │   │   ├── quotes-table.tsx         # Filterable/searchable quotes table
│   │   │   ├── quote-detail-panel.tsx   # Right-side detail panel for selected quote
│   │   │   ├── reply-modal.tsx          # Email reply modal dialog
│   │   │   ├── status-badge.tsx         # Reusable status badge component
│   │   │   ├── client-table.tsx         # Client directory table
│   │   │   ├── client-modal.tsx         # Add/Edit client modal (from quote companies or manual)
│   │   │   ├── portfolio-modal.tsx      # Add/Edit portfolio item with image upload (Firebase Storage)
│   │   │   └── image-preview-modal.tsx  # Full-size site image preview (replace/revert); portal
│   │   │
│   │   └── ui/                          # shadcn/ui components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   │
│   ├── hooks/
│   │   ├── use-site-images.ts          # Real-time site images by page; getImageUrl(key)
│   │   └── use-scroll-reveal.ts        # Scroll-into-view animations (data-reveal on children)
│   │
│   └── lib/
│       ├── firebase.ts                  # Firebase initialization (Firestore + Storage)
│       ├── auth-context.tsx             # Firebase Auth context (AuthProvider, useAuth)
│       ├── admin-search-context.tsx     # Admin shared search (AdminSearchProvider, useAdminSearch)
│       ├── admin-data.ts                # TypeScript types (Quote, Client, PortfolioItem, SiteImage) + mock data
│       ├── site-images-seed.ts         # Seed Firestore siteImages with stock URLs + doc IDs
│       └── utils.ts                     # Utility functions (cn helper)
│
├── .claude/                             # Claude AI settings
├── .env.local                           # Environment variables (Firebase config — not committed)
├── .gitignore
├── components.json                      # shadcn/ui configuration
├── eslint.config.mjs                    # ESLint configuration
├── next.config.ts                       # Next.js config; Unsplash images remotePatterns
├── package.json                         # Dependencies & scripts
├── package-lock.json
├── postcss.config.mjs                   # PostCSS configuration
├── tsconfig.json                        # TypeScript configuration
├── README.md                            # Default Next.js README
├── PROJECT_STRUCTURE.md                 # This file — full repo summary
├── CLAUDE_CODE_INSTRUCTIONS.md          # Original build instructions
└── ADMIN_DASHBOARD_INSTRUCTIONS.md      # Admin dashboard implementation guide
```

---

## Routes

### Public Pages (under `(main)` route group)

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/(main)/page.tsx` | Homepage |
| `/about` | `src/app/(main)/about/page.tsx` | About Us |
| `/services` | `src/app/(main)/services/page.tsx` | Services listing |
| `/portfolio` | `src/app/(main)/portfolio/page.tsx` | Portfolio with filters |
| `/contact` | `src/app/(main)/contact/page.tsx` | Contact page with quote form |
| `/staff-login` | `src/app/(main)/staff-login/page.tsx` | Staff login (Firebase Auth); redirects to `/admin/quotes` on success |

### Admin Dashboard

| Route | File | Description |
|-------|------|-------------|
| `/admin` | `src/app/admin/page.tsx` | Redirects to `/admin/quotes` |
| `/admin/quotes` | `src/app/admin/quotes/page.tsx` | Quote management dashboard |
| `/admin/clients` | `src/app/admin/clients/page.tsx` | Client directory |
| `/admin/portfolio` | `src/app/admin/portfolio/page.tsx` | Portfolio manager (CRUD + image upload) |
| `/admin/site-images` | `src/app/admin/site-images/page.tsx` | Site Images manager (per-page, upload/revert/reset) |

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/(main)/page.tsx`

- Composed of sections (and inline trust bar). Hero, Industries, Features, and CTA use **useSiteImages('home')** for managed images where applicable; fallback to stock URLs if no custom image.
- **Hero:** `HomeHeroSection` — full-bleed background (site image key `home-hero-bg`), glow orbs, grid pattern, headline "Where Ideas Become Print", CTAs, trust bullets; right: floating product cards (site image keys for business cards, brochures, packaging, banners) with hover rotation/scale.
- **Trust Bar:** `TrustBar` component — "Trusted by LA businesses since 2010", infinite horizontal scroll of client pills; gradient edge masks; hover pauses animation; uses **useScrollReveal** for reveal-on-scroll.
- **Industries:** `HomeIndustriesSection` — "Industries We Serve" (optional site image keys per industry); four image-based cards with gradient overlays, hover expand, client stats.
- **Portfolio Preview:** `HomePortfolioSection` — "Recent Projects" from Firestore `portfolio` (visible, limit 6, featured first). Cards: image, industry badge, optional "Featured" pill, client, type; "View All Work" link. Hides if no items.
- **Features + Quote Form:** `HomeFeaturesSection` — dark section with background (site image), "LA's Most Trusted Printing Partner", four feature cards, facility image strip (site image keys), "Tour" link, floating QuoteForm (dark).
- **Testimonials:** `TestimonialsSection` — "What Our Clients Say", avatar list, active card, 5-star, auto-rotate 6s.
- **CTA:** `HomeCTASection` — full-width background (site image key `home-cta-bg`), cyan overlay, "Ready to Bring Your Ideas to Life?", Request a Quote and phone buttons.

### 2. About Page (`/about`)
**File:** `src/app/(main)/about/page.tsx`

- **Hero:** Page title and short description.
- **Story:** Company history (founded 2010), stats grid (15+ Years, 500+ Clients, 10M+ Prints, 100% Satisfaction).
- **Team:** Four cards (Kassa, Marcel, Estevan, João Serro) with initial avatars and roles.
- **Values:** Quality First, On-Time Delivery, Fair Pricing with icons and copy.

### 3. Services Page (`/services`)
**File:** `src/app/(main)/services/page.tsx`

- **Hero:** Full-bleed background image (Unsplash), title "Our Services", supporting copy.
- **Service Categories:** Alternating layout sections; each category has icon, name, tagline, description, hero image (Unsplash), gradient, and item list (e.g. Business Cards, Brochures & Flyers, Booklets, Postcards for Commercial; Paper Bags, Napkins, Food Packaging, Gift Card Holders for Custom Packaging; Banners, Posters, Trade Show, Vehicle Wraps for Large Format; Letterheads, NCR Forms, Labels, Notepads for Office & Forms). "Learn more" / CTA links.
- **Capabilities:** Dark section "Our Capabilities" with icon grid (High-Speed B&W, Full-Color, Digital, Offset, Bindery, Graphic Design, etc.).
- **CTA:** Background image with cyan overlay, "Don't See What You Need?", Contact Us button.

### 4. Portfolio Page (`/portfolio`)
**File:** `src/app/(main)/portfolio/page.tsx`

- **Data:** Fetches visible portfolio items from Firestore `portfolio` collection (where `visible === true`). Uses `PortfolioItem` type from admin-data.
- **Hero:** Dark section with background, title "Our Work", description.
- **Filter Bar:** Sticky bar with industry filters (All, Healthcare, Hospitality, Automotive, Finance, Media, Education, Retail) and project counts; filter pills with active state.
- **Projects Grid:** Filterable project cards; each has image (Firebase Storage URL or placeholder), industry badge, client name, project type, short description, hover overlay.
- **Empty State:** When no projects match filter, "No projects found" message with LayoutGrid icon.
- **Stats Section:** Four stat cards with icons (Trophy, Users, Calendar, ThumbsUp) and values/labels.
- **Clients Marquee:** "Trusted Partners" / "Clients We've Worked With" with infinite horizontal scroll of client names (same `animate-scroll` pattern).
- **CTA:** Full-width background image with purple/cyan gradient; "Ready to Start Your Project?"; Get a Quote and phone buttons.

### 5. Contact Page (`/contact`)
**File:** `src/app/(main)/contact/page.tsx`

- **Hero:** Page title and description.
- **Contact Form:** Quote request form — First Name, Last Name, Company, Email, Phone, Project Details; validation; loading and success/error messages. Submissions saved to Firestore `quotes` collection.
- **Contact Information:** Address, Phone, Email, Hours with icons.
- **Map Placeholder:** Area reserved for Google Maps.
- **Quick Response Guarantee:** Info box.

### 6. Staff Login (`/staff-login`)
**File:** `src/app/(main)/staff-login/page.tsx`

- **Client component.** Email + password form using `useAuth().login()` (Firebase Auth). On success redirects to `/admin/quotes`. Error message on invalid credentials. Branded header with "A" logo and "Artistic Printing Company — Admin Access".

### 7. Admin — Quotes Dashboard (`/admin/quotes`)
**File:** `src/app/admin/quotes/page.tsx`

- **Data:** Real-time Firestore `quotes` collection via `onSnapshot`; status and `finalPrice` updates written with `updateDoc` + `serverTimestamp`.
- **Stats Row:** Four stat cards — New Requests (cyan), Pending Review (amber), Approved (green), Monthly Revenue (blue). Each shows count/value, change indicator, tinted icon.
- **Quotes Table (left ~65%):** Filterable table with status tabs (All, New, Pending, In Progress, Approved, Completed, Declined). Columns: Client (name + company), Service, Status (colored badge), Date. Clickable rows, selected row gets cyan highlight. Search filters by name/company/service. Scrollable body.
- **Quote Detail Panel (right ~35%):** Shows selected quote — client avatar, status dropdown, contact info, request details, message. Actions: Reply (opens modal), Approve, Decline. When status is "completed", inline Final Price field (persisted to Firestore).
- **Status / Final Price:** Updates persist to Firestore; toast on success or error.

### 8. Admin — Clients Directory (`/admin/clients`)
**File:** `src/app/admin/clients/page.tsx`

- **Data:** Real-time Firestore `clients` and `quotes` via `onSnapshot`. Client list from `clients` collection; Total Orders, Last Order, Revenue derived from `quotes` (by company name). Add client via `addDoc`, edit via `updateDoc`, delete via `deleteDoc` with confirmation.
- **Stats Row:** Three stat cards — Total Clients, Repeat Clients, Avg. Order Value.
- **Client Table:** Columns: Client (avatar + name), Industry (badge), Total Orders, Last Order (date), Revenue (green, bold). Row actions: Edit, Delete (with confirm). "Add Client" opens ClientModal.
- **ClientModal:** Add new client (choose company from quote-derived list or enter manually) or edit existing; fields: name/company, industry, contact email/phone, notes. Save writes to Firestore `clients`.

### 9. Admin — Portfolio Manager (`/admin/portfolio`)
**File:** `src/app/admin/portfolio/page.tsx`

- **Data:** Real-time Firestore `portfolio` collection (ordered by `order`); also listens to `clients` for dropdown. Image files in Firebase Storage (`portfolio/{timestamp}-{id}.{ext}`). Add via `addDoc`, edit via `updateDoc`, delete via `deleteDoc` + `deleteObject` for Storage.
- **Stats Row:** Four cards — Total Projects (visible count), Industries (unique count), Featured (featured + visible), Hidden (not visible).
- **Toolbar:** Search (client/type/industry), industry filter tabs (dynamic from data), "Add Project" button.
- **Project Grid:** Cards show image, client, industry badge, type, description snippet. Per item: visibility toggle (Eye/EyeOff), featured star, Edit, Delete (with confirmation). Reorder via `order` field (lower = first).
- **PortfolioModal:** Add or edit item — client, industry, type, description, image upload (JPG/PNG/WEBP, max 5MB) to Storage, visible/featured toggles. Replacing image deletes old file from Storage. Save writes to Firestore and optionally Storage.

### 10. Admin — Site Images Manager (`/admin/site-images`)
**File:** `src/app/admin/site-images/page.tsx`

- **Data:** Real-time Firestore `siteImages` collection (ordered by `order`). On first load runs **seedSiteImages()** to create default docs (per-page, per-section stock URLs and doc IDs). Custom uploads stored in Firebase Storage; `customUrl`/`customPath` on each doc.
- **Tabs:** Home, Services, About, Portfolio, Contact — filter images by page. Desktop/mobile preview toggle; optional iframe preview of live page.
- **Per-section cards:** Grouped by section (e.g. Hero Background, Product Cards, CTA Background). Each image: name, location, recommended size, current image (custom or stock). Click image to open **ImagePreviewModal** (full-size preview, Replace/Revert actions). Actions on card: Upload, Revert to stock, Reset all (confirm dialog).
- **ImagePreviewModal:** Portal-rendered modal; shows full-size image, link to page, Replace and Revert buttons; Escape to close.
- **Full-width sections:** Hero Background, CTA Background, Features Background, Capabilities Background get full-width display. Storage path for custom uploads (e.g. `siteImages/{page}/{id}.{ext}`).

---

## Components

### Layout Components

#### Root Layout (`src/app/layout.tsx`)
- HTML/body wrapper, Inter font, metadata (title, description, OpenGraph), global CSS import. Wraps app with `AuthProvider` (Firebase Auth). Does NOT include Header/Footer (those are in the `(main)` route group layout).

#### Main Site Layout (`src/app/(main)/layout.tsx`)
- Wraps public pages with `<Header>` and `<Footer>`. Uses Next.js route groups so admin routes are excluded.

#### Admin Layout (`src/app/admin/layout.tsx`)
- `"use client"` — separate layout with **AdminSearchProvider** wrapping `AdminSidebar` + `AdminHeader` + children. No main site nav/footer. Dark sidebar, light content area. Shared admin search state via **useAdminSearch()** (used by Quotes, Portfolio, Clients pages). Responsive: sidebar collapses on mobile with hamburger toggle.

#### Header (`src/components/header.tsx`)
- Sticky nav; logo (A + "ARTISTIC PRINTING CO."); desktop nav links; phone; "Get a Quote" CTA; mobile hamburger and slide-down menu; active route highlight via `usePathname`.

#### Footer (`src/components/footer.tsx`)
- Logo and short description; "Family Owned" and "15+ Years" badges; Quick Links (Services, Portfolio, About, Contact); contact block (address, phone, email, hours); copyright.

### Public Components

#### QuoteForm (`src/components/quote-form.tsx`)
- **Firebase-integrated** reusable form: First Name, Last Name, Email, Phone, Project Details. Props: `variant` (light/dark), `className`. On submit: (1) saves to Firestore `quotes` with `serverTimestamp()`, (2) calls **POST /api/send-quote-notification** (fire-and-forget) to email the team via Resend. Shows loading state, success/error messages.

#### TestimonialsSection (`src/components/testimonials-section.tsx`)
- **Client component.** "What Our Clients Say" with Badge "Customer Stories." Left: list of testimonial rows (avatar from Unsplash, name, role/company); click to set active. Right: large card with quote, 5-star display, active author avatar and name. Auto-advance every 6s via `useEffect` + `setInterval`. Dot-pattern background.

#### HomeHeroSection (`src/components/home-hero-section.tsx`)
- **Client component.** Home hero: background and floating product cards use **useSiteImages('home')** and `getImageUrl(key)` (e.g. `home-hero-bg`, product card keys); fallback to stock URLs. Headline, CTAs, trust bullets.

#### HomeIndustriesSection (`src/components/home-industries-section.tsx`)
- **Client component.** "Industries We Serve" — four industry cards; optional site image keys per industry; gradient overlays, hover expand, stats.

#### HomeFeaturesSection (`src/components/home-features-section.tsx`)
- **Client component.** Dark "Why Choose Us" section: background and facility strip images via useSiteImages('home'); four feature cards; QuoteForm (dark); "Tour" link to `/about`.

#### HomeCTASection (`src/components/home-cta-section.tsx`)
- **Client component.** Final CTA banner: background via `getImageUrl('home-cta-bg')` with fallback; cyan overlay; headline and Request a Quote + phone buttons.

#### HomePortfolioSection (`src/components/home-portfolio-section.tsx`)
- **Client component.** Home "Recent Projects" block. Real-time Firestore query: `portfolio` where `visible === true`, `orderBy('order')`, `limit(6)`; sorts featured first. Grid of cards (image, industry badge, optional "Featured" pill, client, type), loading state, "View All Work" link. Returns `null` if no items when loading finishes. Uses **useScrollReveal** for section reveal.

#### TrustBar (`src/components/trust-bar.tsx`)
- **Client component.** Home page trust bar: "Trusted by LA businesses since 2010", infinite horizontal scroll of client pills (icons + names), gradient edge masks, hover pauses animation. Uses **useScrollReveal** with `data-reveal="fade"` for scroll-in effect.

### Hooks

#### useSiteImages (`src/hooks/use-site-images.ts`)
- **Client hook.** `useSiteImages(page)` — real-time `onSnapshot` on Firestore `siteImages` where `page === page`, ordered by `order`. Returns `{ images: Map<string, SiteImage>, loading, getImageUrl(key) }`. `getImageUrl(key)` returns `customUrl || stockUrl` for that image key (used by HomeHeroSection, HomeFeaturesSection, HomeCTASection, etc.).

#### useScrollReveal (`src/hooks/use-scroll-reveal.ts`)
- **Client hook.** `useScrollReveal(options?)` — returns a ref to attach to a container; children with `data-reveal` (or `data-reveal="delay-1"`, `from-left`, `from-right`, `scale`, `fade`) animate in when scrolled into view. Options: threshold, rootMargin, once. Used by TrustBar, HomeIndustriesSection, HomePortfolioSection, HomeFeaturesSection, HomeCTASection, TestimonialsSection, Footer, and public pages (portfolio, services, about, contact) for scroll-reveal effects.

### Admin Components

#### AdminSidebar (`src/components/admin/admin-sidebar.tsx`)
- Fixed left sidebar (260px, dark `slate-950`). Brand mark, nav links: Quotes (with new-count badge), Clients, Portfolio, Site Images (active). "Coming soon": Settings only. User footer with avatar initials and Sign out (useAuth logout → redirect to `/staff-login`). Collapses off-screen on mobile with overlay.

#### AdminHeader (`src/components/admin/admin-header.tsx`)
- Sticky top header (white). Dynamic page title based on route. Search input bound to **useAdminSearch()** (shared across Quotes, Portfolio, Clients). Notification bell with red dot, external link to live site. Mobile hamburger toggle for sidebar.

#### StatsCards (`src/components/admin/stats-cards.tsx`)
- Horizontal grid of stat cards. Each card: white background, subtle border, value, label, change indicator, tinted icon square, hover lift effect.

#### QuotesTable (`src/components/admin/quotes-table.tsx`)
- Filterable table of quote requests. Status filter tabs, search integration. Clickable rows with selected highlight (cyan-50 bg, left cyan border). Columns: Client, Service, Status, Date. Scrollable body (~520px max height).

#### QuoteDetailPanel (`src/components/admin/quote-detail-panel.tsx`)
- Right-side sticky panel. Empty state when no quote selected. Shows: client avatar, status dropdown, contact info, request details, message, action buttons (Reply, Approve, Decline). Inline "Final Price" field appears when status is "completed".

#### ReplyModal (`src/components/admin/reply-modal.tsx`)
- Modal overlay for replying to quotes. Pre-filled To, Subject, and message template. Estimated Price + Turnaround inputs. On send: closes modal, changes "new" quotes to "pending", saves estimatedPrice, shows toast.

#### StatusBadge (`src/components/admin/status-badge.tsx`)
- Colored badge matching status: cyan (new), amber (pending), blue (in-progress), green (approved), green-dark (completed), red (declined).

#### ClientTable (`src/components/admin/client-table.tsx`)
- Client directory table. Avatar initials, name, industry badge, total orders, last order date, revenue (green, bold). Edit and Delete actions per row; delete confirmation. Integrates with Firestore clients + quote-derived summaries.

#### ClientModal (`src/components/admin/client-modal.tsx`)
- **Client component.** Add or edit client. When adding: searchable list of companies from quotes (excluding existing clients), or manual name entry; industry dropdown; contact email/phone; notes. When editing: pre-filled from selected client. On save calls `onSave` with client data (id/createdAt omitted for new). Avatar color palette for initials.

#### PortfolioModal (`src/components/admin/portfolio-modal.tsx`)
- **Client component.** Add or edit portfolio item. Fields: client, industry (dropdown), type, description, image (file upload), visible (toggle), featured (toggle). Image upload to Firebase Storage (`portfolio/` path); validation (JPG/PNG/WEBP, max 5MB); local preview; on replace, deletes previous image from Storage. On save calls `onSave` with item data (id/createdAt/updatedAt omitted for new).

#### ImagePreviewModal (`src/components/admin/image-preview-modal.tsx`)
- **Client component.** Used by Site Images page. Rendered via React portal; shows a single **SiteImage** full-size with overlay. Displays name, location, page link; actions: Replace (triggers upload), Revert to stock. Props: image, onClose, onReplace, onRevert, isUploading, isReverting. Escape key closes modal.

### Auth (`src/lib/auth-context.tsx`)
- **AuthProvider** wraps the app (in root layout). Uses Firebase Auth: `getAuth(app)`, `onAuthStateChanged`, `signInWithEmailAndPassword`, `signOut`. Exposes **useAuth()**: `{ user, loading, login, logout }`.

### Admin search (`src/lib/admin-search-context.tsx`)
- **AdminSearchProvider** wraps admin layout content; provides **useAdminSearch()**: `{ searchValue, setSearchValue }`. Used by AdminHeader (search input) and by Quotes, Portfolio, and Clients pages to filter lists by the shared search value.

### UI Components (shadcn/ui)

| Component | File | Features |
|-----------|------|----------|
| Badge | `ui/badge.tsx` | Status/label badges with variants |
| Button | `ui/button.tsx` | Buttons with size/variant options |
| Card | `ui/card.tsx` | Card container with header/content/footer |
| Input | `ui/input.tsx` | Form input field |
| Tabs | `ui/tabs.tsx` | Tabbed interface component |
| Textarea | `ui/textarea.tsx` | Multi-line text input |

---

## Firebase Integration

### Setup (`src/lib/firebase.ts`)
- Initializes Firebase app (singleton pattern with `getApps()` check)
- Configures Firestore and Storage using environment variables
- Exports `db` (Firestore instance) and `storage` (Storage instance)

### Environment Variables (`.env.local` — not committed)
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
RESEND_API_KEY                 # Resend API key for quote notification emails
```

### Firebase Auth
- **Auth** — Initialized via `getAuth(app)` in `auth-context.tsx`. Used for staff login: `signInWithEmailAndPassword`, `signOut`, `onAuthStateChanged`. Root layout wraps children with `AuthProvider`; `useAuth()` provides `user`, `loading`, `login`, `logout`.

### Firestore Collections
- **`quotes`** — Quote submissions from the public form and admin updates
  - Fields: `firstName`, `lastName`, `email`, `phone`, `company`, `message`, `status`, `createdAt` (serverTimestamp), `updatedAt` (serverTimestamp), plus optional `industry`, `service`, `quantity`, `urgency`, `estimatedPrice`, `finalPrice`
- **`clients`** — Client directory (admin-managed)
  - Fields: `name`, `industry`, `contactEmail`, `contactPhone`, `notes`, `createdAt` (serverTimestamp)
- **`portfolio`** — Portfolio projects (admin-managed, shown on public `/portfolio`)
  - Fields: `client`, `industry`, `type`, `description`, `imageUrl` (Storage download URL), `imagePath` (Storage path for deletion), `featured`, `visible`, `order` (number, for sort), `createdAt`, `updatedAt` (serverTimestamp)
- **`siteImages`** — Managed site images (hero, CTA, product cards, facility strip, etc.)
  - Fields: `id` (doc ID used as key), `page` (home | services | about | portfolio | contact), `section`, `name`, `location`, `stockUrl`, `customUrl`, `customPath`, `recommendedSize`, `order`. Seed script creates default docs; admin uploads set `customUrl`/`customPath` and use Storage.

### Firebase Storage
- **Portfolio images** — Path `portfolio/{timestamp}-{id}.{ext}`. Upload via PortfolioModal; delete when item is deleted or image is replaced.
- **Site Images** — Custom uploads (e.g. `siteImages/{page}/{id}.{ext}`) when admin replaces a stock image; reverted or reset deletes from Storage.

### Integration Points
- **QuoteForm** — Writes new quotes to Firestore `quotes` with `serverTimestamp()`, then POSTs to `/api/send-quote-notification` to email the team (Resend).
- **Admin Quotes page** — Real-time `onSnapshot(quotes)`; `updateDoc` for status and `finalPrice`.
- **Admin Clients page** — Real-time `onSnapshot(clients)` and `onSnapshot(quotes)`; `addDoc`/`updateDoc`/`deleteDoc` for clients; revenue/orders derived from quotes by company name.
- **Admin Portfolio page** — Real-time `onSnapshot(portfolio)` and `onSnapshot(clients)`; `addDoc`/`updateDoc`/`deleteDoc` for portfolio; image upload/delete via Storage.
- **Public Portfolio page** — Reads from Firestore `portfolio` (visible items only) for project grid.
- **HomePortfolioSection** — Real-time `onSnapshot` on `portfolio` (visible, orderBy order, limit 6) for home "Recent Projects"; featured-first sort client-side.
- **useSiteImages** — Public home (and other pages) use `useSiteImages(page)` to read `siteImages` and resolve `getImageUrl(key)` (customUrl || stockUrl) for hero, CTA, product cards, facility strip, etc.
- **Admin Site Images page** — Real-time `onSnapshot(siteImages)`; seed on load via **site-images-seed.ts**; upload/revert/reset with Storage; updateDoc for customUrl/customPath.
- **ReplyModal** — Updates quote in Firestore (status, estimatedPrice) when sending reply.

---

## API Routes

### POST `/api/send-quote-notification` (`src/app/api/send-quote-notification/route.ts`)
- **Purpose:** Send an email notification when a new quote is submitted (called by QuoteForm after saving to Firestore).
- **Body:** JSON with `firstName`, `lastName`, `email`, `phone`, `company`, `service`, `quantity`, `urgency`, `message`.
- **Implementation:** Uses **Resend** (`RESEND_API_KEY`); sends HTML email to `design@artisticprinting.com` with subject "New Quote Request — {name} ({company})", branded template (contact info + project details). Returns 200 + JSON or 500 on error.

---

## Mock Data (`src/lib/admin-data.ts`)

### TypeScript Interfaces
- **`Quote`** — id, firstName, lastName, company, email, phone, industry, service, status, date, message, quantity, urgency, estimatedPrice?, finalPrice?
- **`Client`** — id, name, industry, contactEmail, contactPhone, notes, createdAt? (totalOrders, lastOrderDate, totalRevenue are computed on the clients page from quotes)
- **`PortfolioItem`** — id, client, industry, type, description, imageUrl, imagePath, featured, visible, order, createdAt?, updatedAt?
- **`SiteImage`** — id, page, section, name, location, stockUrl, customUrl, customPath, recommendedSize, order

### Seed & Mock Data
- **site-images-seed.ts** — `seedSiteImages()` ensures Firestore `siteImages` has default docs (by id: e.g. home-hero-bg, home-cta-bg, home-product-*, home-facility-*, etc.) with stockUrl and order; creates only if missing. Used on admin Site Images page load.
- **mockQuotes** — Used as fallback/reference; admin quotes and clients pages use live Firestore data.
- **mockClients** — Optional fallback; admin clients page reads from Firestore `clients` and derives order/revenue stats from `quotes`.

---

## Styling

### Theme Configuration (`src/app/globals.css`)
- Tailwind CSS 4 with `@theme inline` and CSS custom properties for colors, radius, sidebar, charts.
- Light/dark mode via `.dark` class; primary cyan-600; slate palette.
- Base layer: border-border, outline-ring/50, body bg/text.
- **Custom animation:** `@keyframes scroll` (translateX 0 → -50%); `.animate-scroll` (30s linear infinite, width max-content) for trust bar carousel.

### Design System
- **Typography:** Inter (from layout).
- **Colors:** Slate + cyan primary; chart colors for future data viz.
- **Admin status colors:** cyan (new), amber (pending), blue (in-progress), green (approved), green-dark (completed), red (declined).
- **Spacing / radius:** Tailwind scale and theme radius variables.
- **Motion:** tw-animate-css; custom scroll keyframes; hover transitions. **Scroll reveal:** `useScrollReveal` + `data-reveal` on public pages and home sections for fade/slide/scale-in on scroll.

---

## Configuration

### Next.js (`next.config.ts`)
- **Images:** `images.remotePatterns` allows `https://images.unsplash.com` for hero images, industry cards, portfolio, testimonials avatars, and facility strips.

### PWA / Web App Manifest (`public/site.webmanifest`)
- **site.webmanifest** — Web app manifest: `name`, `short_name`, `icons` (192×192, 512×512), `theme_color` and `background_color` (slate-900), `display: standalone`. Used when adding the site to home screen or as PWA.

### SEO & Metadata (`src/app/layout.tsx`)
- Title: "Artistic Printing Company | Commercial Printing in Los Angeles".
- Meta description and keywords for local/commercial printing.
- OpenGraph title, description, url, siteName, locale, type.

### shadcn/ui (`components.json`)
- Style: "new-york"
- Base color: neutral
- CSS variables: enabled
- Icon library: lucide

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Pending / TODO

1. **Protect /admin routes:** Optionally redirect unauthenticated users from `/admin/*` to `/staff-login` (AuthProvider and login page are in place).
2. **Google Maps:** Contact page map placeholder ready for embed or API.
3. **Team photos:** About page team cards use real images; update if needed.
4. **Analytics:** Add tracking (e.g. Google Analytics) if required.
5. **Admin "Coming Soon" features:** Settings page only (Portfolio and Site Images managers are implemented).
6. **Email notifications:** Send actual emails on quote reply (e.g. via Firebase Extensions or backend); reply modal currently updates Firestore only.
7. **Client detail view:** Dedicated client detail page (e.g. `/admin/clients/[id]`) for future expansion.

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** info@artisticprinting.com
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** 2010
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (plus Finance, Media, Retail on portfolio/services).
