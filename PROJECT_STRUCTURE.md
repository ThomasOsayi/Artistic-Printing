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

---

## File Tree

```
Artistic-Printing/
├── public/                              # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout (html, body, font, metadata — NO Header/Footer)
│   │   ├── globals.css                  # Global styles, CSS variables, scroll animation
│   │   ├── favicon.ico
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
│   │   │   └── services/
│   │   │       └── page.tsx             # Services listing with hero and capabilities
│   │   │
│   │   └── admin/                       # Admin dashboard section (separate layout)
│   │       ├── layout.tsx               # Admin layout with sidebar + top header (NO main site nav)
│   │       ├── page.tsx                 # Redirects to /admin/quotes
│   │       ├── quotes/
│   │       │   └── page.tsx             # Quote management dashboard
│   │       └── clients/
│   │           └── page.tsx             # Client directory page
│   │
│   ├── components/
│   │   ├── header.tsx                   # Site header with navigation
│   │   ├── footer.tsx                   # Site footer
│   │   ├── quote-form.tsx               # Reusable quote request form (Firebase integrated)
│   │   ├── testimonials-section.tsx     # Home page testimonials carousel
│   │   │
│   │   ├── admin/                       # Admin dashboard components
│   │   │   ├── admin-sidebar.tsx        # Left sidebar navigation
│   │   │   ├── admin-header.tsx         # Top header with search + actions
│   │   │   ├── stats-cards.tsx          # Stats row (New, Pending, Approved, Revenue)
│   │   │   ├── quotes-table.tsx         # Filterable/searchable quotes table
│   │   │   ├── quote-detail-panel.tsx   # Right-side detail panel for selected quote
│   │   │   ├── reply-modal.tsx          # Email reply modal dialog
│   │   │   ├── status-badge.tsx         # Reusable status badge component
│   │   │   └── client-table.tsx         # Client directory table
│   │   │
│   │   └── ui/                          # shadcn/ui components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   │
│   └── lib/
│       ├── firebase.ts                  # Firebase initialization (Firestore + Storage)
│       ├── admin-data.ts                # Mock data + TypeScript types for admin dashboard
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

### Admin Dashboard

| Route | File | Description |
|-------|------|-------------|
| `/admin` | `src/app/admin/page.tsx` | Redirects to `/admin/quotes` |
| `/admin/quotes` | `src/app/admin/quotes/page.tsx` | Quote management dashboard |
| `/admin/clients` | `src/app/admin/clients/page.tsx` | Client directory |

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/(main)/page.tsx`

- **Hero:** Full-bleed background image (Unsplash), gradient overlay, glow orbs, grid pattern. Headline "Where Ideas Become Print", CTAs (Get Your Quote, See Our Work), trust bullets (Free LA Delivery, 24hr Turnaround, 100% Satisfaction). Right: floating product cards with real images (business cards, brochures, packaging, banners) and hover rotation/scale.
- **Trust Bar:** "Trusted by 500+ LA businesses" with Shield icon; infinite horizontal scroll of client pills (Kaiser Permanente, Toyota, LABioMed, etc.); gradient edge masks; hover pauses animation.
- **Industries:** "Industries We Serve" — four image-based cards (Healthcare, Hospitality, Education, Automotive) with Unsplash images, gradient overlays, hover scale/color, expandable item lists and client stats.
- **Portfolio Preview:** "Recent Projects" with 6 project cards (client, type, category badge), Unsplash images, hover overlay and "View All Work" link to `/portfolio`.
- **Features + Quote Form:** Dark section with background image, "LA's Most Trusted Printing Partner", four feature cards (Fast Turnaround, Free Delivery, Quality Guaranteed, All On-Site), facility image strip with "Tour" link to `/about`, floating quote form (QuoteForm dark variant).
- **Testimonials:** `TestimonialsSection` — "What Our Clients Say" with avatar list, active testimonial card, 5-star display, auto-rotate every 6s.
- **CTA:** Full-width background image, cyan overlay, "Ready to Bring Your Ideas to Life?", Request a Quote and phone buttons.

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

- **Hero:** Dark section with background, title "Our Work", description.
- **Filter Bar:** Sticky bar with industry filters (All, Healthcare, Hospitality, Automotive, Finance, Media, Education, Retail) and project counts; filter pills with active state.
- **Projects Grid:** Filterable project cards; each has Unsplash image, industry badge, client name, project type, short description, hover overlay. Multiple industries (Healthcare, Automotive, Hospitality, Finance, Media, etc.).
- **Empty State:** When no projects match filter, "No projects found" message with LayoutGrid icon.
- **Stats Section:** Four stat cards with icons (Trophy, Users, Calendar, ThumbsUp) and values/labels.
- **Clients Marquee:** "Trusted Partners" / "Clients We've Worked With" with infinite horizontal scroll of client names (same `animate-scroll` pattern).
- **CTA:** Full-width background image with purple/cyan gradient; "Ready to Start Your Project?"; Get a Quote and phone buttons.

### 5. Contact Page (`/contact`)
**File:** `src/app/(main)/contact/page.tsx`

- **Hero:** Page title and description.
- **Contact Form:** Quote request form — First Name, Last Name, Company, Email, Phone, Project Details; validation; loading and success/error messages; simulated submit (ready for API).
- **Contact Information:** Address, Phone, Email, Hours with icons.
- **Map Placeholder:** Area reserved for Google Maps.
- **Quick Response Guarantee:** Info box.

### 6. Admin — Quotes Dashboard (`/admin/quotes`)
**File:** `src/app/admin/quotes/page.tsx`

- **Stats Row:** Four stat cards — New Requests (cyan), Pending Review (amber), Approved (green), Monthly Revenue (blue). Each shows count/value, change indicator, tinted icon.
- **Quotes Table (left ~65%):** Filterable table with status tabs (All, New, Pending, In Progress, Approved, Completed, Declined). Columns: Client (name + company), Service, Status (colored badge), Date. Clickable rows, selected row gets cyan highlight. Search filters by name/company/service. Scrollable body.
- **Quote Detail Panel (right ~35%):** Shows selected quote details — client avatar (colored initials), status dropdown, contact info (email, phone), request details (service, quantity, urgency), client message. Action buttons: Reply (opens modal), Approve, Decline.
- **Status Changes:** Updating status re-renders table and stats, shows toast notification.

### 7. Admin — Clients Directory (`/admin/clients`)
**File:** `src/app/admin/clients/page.tsx`

- **Stats Row:** Three stat cards — Total Clients, Repeat Clients, Avg. Order Value.
- **Client Table:** Columns: Client (avatar + name), Industry (badge), Total Orders, Last Order (date), Revenue (green, bold). "Add Client" button (shows "Coming soon" toast).

---

## Components

### Layout Components

#### Root Layout (`src/app/layout.tsx`)
- HTML/body wrapper, Inter font, metadata (title, description, OpenGraph), global CSS import. Does NOT include Header/Footer (those are in the `(main)` route group layout).

#### Main Site Layout (`src/app/(main)/layout.tsx`)
- Wraps public pages with `<Header>` and `<Footer>`. Uses Next.js route groups so admin routes are excluded.

#### Admin Layout (`src/app/admin/layout.tsx`)
- `"use client"` — separate layout with `AdminSidebar` + `AdminHeader`. No main site nav/footer. Dark sidebar, light content area. Responsive: sidebar collapses on mobile with hamburger toggle.

#### Header (`src/components/header.tsx`)
- Sticky nav; logo (A + "ARTISTIC PRINTING CO."); desktop nav links; phone; "Get a Quote" CTA; mobile hamburger and slide-down menu; active route highlight via `usePathname`.

#### Footer (`src/components/footer.tsx`)
- Logo and short description; "Family Owned" and "15+ Years" badges; Quick Links (Services, Portfolio, About, Contact); contact block (address, phone, email, hours); copyright.

### Public Components

#### QuoteForm (`src/components/quote-form.tsx`)
- **Firebase-integrated** reusable form: First Name, Last Name, Email, Phone, Project Details. Props: `variant` (light/dark), `className`. Saves submissions directly to Firestore `quotes` collection with `serverTimestamp()`. Shows loading state, success/error messages.

#### TestimonialsSection (`src/components/testimonials-section.tsx`)
- **Client component.** "What Our Clients Say" with Badge "Customer Stories." Left: list of testimonial rows (avatar from Unsplash, name, role/company); click to set active. Right: large card with quote, 5-star display, active author avatar and name. Auto-advance every 6s via `useEffect` + `setInterval`. Dot-pattern background.

### Admin Components

#### AdminSidebar (`src/components/admin/admin-sidebar.tsx`)
- Fixed left sidebar (260px, dark `slate-950`). Brand mark, nav links with icons (Quotes with badge count, Clients). "Coming soon" items grayed out (Portfolio, Site Images, Settings). User footer with avatar initials. Collapses off-screen on mobile (<900px).

#### AdminHeader (`src/components/admin/admin-header.tsx`)
- Sticky top header (white). Dynamic page title based on route. Search input (filters quotes), notification bell with red dot, external link to live site. Mobile hamburger toggle for sidebar.

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
- Client directory table. Avatar initials, name, industry badge, total orders, last order date, revenue (green, bold).

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
```

### Firestore Collections
- **`quotes`** — Quote submissions from the public-facing form
  - Fields: `firstName`, `lastName`, `email`, `phone`, `company`, `message`, `status` ("new"), `createdAt` (serverTimestamp), `updatedAt` (serverTimestamp)

### Current Integration Points
- **QuoteForm component** — Writes to Firestore `quotes` collection on form submit
- **Admin dashboard** — Currently uses mock data in React state (not yet connected to Firestore)

---

## Mock Data (`src/lib/admin-data.ts`)

### TypeScript Interfaces
- **`Quote`** — id, firstName, lastName, company, email, phone, industry, service, status, date, message, quantity, urgency, estimatedPrice?, finalPrice?
- **`Client`** — id, name, industry, totalOrders, lastOrderDate, totalRevenue

### Mock Quotes (11 entries)
Realistic quotes from actual Artistic Printing clients: Kaiser Permanente, Jim Falk Lexus, Beverly Hills Café, UCLA Extension, Vista Hospital, Broadway Federal Bank, Toyota Hollywood, K-Earth 101 FM, LABioMed, Salud Clinica, Promise Hospital. Status mix: 4 new, 3 pending, 2 approved, 1 completed, 1 declined.

### Mock Clients (10 entries)
Client directory with revenue figures and order counts for all major clients.

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
- **Motion:** tw-animate-css; custom scroll keyframes; hover transitions across sections.

---

## Configuration

### Next.js (`next.config.ts`)
- **Images:** `images.remotePatterns` allows `https://images.unsplash.com` for hero images, industry cards, portfolio, testimonials avatars, and facility strips.

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

1. **Admin → Firestore integration:** Connect admin dashboard to read quotes from Firestore instead of mock data.
2. **Authentication:** Add Firebase Auth to protect the `/admin` routes.
3. **Google Maps:** Contact page map placeholder ready for embed or API.
4. **Team photos:** About page team cards use initial avatars; replace with real photos if desired.
5. **Analytics:** Add tracking (e.g. Google Analytics) if required.
6. **Admin "Coming Soon" features:** Portfolio manager, Site Images manager, Settings page.
7. **Email notifications:** Send actual emails on quote reply (currently frontend-only).
8. **Client detail view:** Clicking a client in the admin directory (future feature).

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** info@artisticprinting.com
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** 2010
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (plus Finance, Media, Retail on portfolio/services).
