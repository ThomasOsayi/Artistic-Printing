# Artistic Printing Company - Project Structure

A modern commercial printing company website built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Radix UI | Latest | Headless UI components (Slot, Tabs) |
| Lucide React | 0.563.0 | Icon library |
| tw-animate-css | 1.4.0 | Animation utilities |

---

## File Tree

```
Artistic-Printing/
├── public/                          # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout with Header/Footer
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles, CSS variables, scroll animation
│   │   ├── favicon.ico
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx             # About Us page
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page with form
│   │   │
│   │   ├── portfolio/
│   │   │   └── page.tsx             # Portfolio with filters and project grid
│   │   │
│   │   └── services/
│   │       └── page.tsx             # Services listing with hero and capabilities
│   │
│   ├── components/                  # React components
│   │   ├── header.tsx               # Site header with navigation
│   │   ├── footer.tsx               # Site footer
│   │   ├── quote-form.tsx          # Reusable quote request form
│   │   ├── testimonials-section.tsx # Home page testimonials carousel
│   │   │
│   │   └── ui/                      # shadcn/ui components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   │
│   └── lib/
│       └── utils.ts                 # Utility functions (cn helper)
│
├── .claude/                         # Claude AI settings
├── .gitignore
├── components.json                  # shadcn/ui configuration
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js config; Unsplash images remotePatterns
├── package.json                     # Dependencies & scripts
├── package-lock.json
├── postcss.config.mjs               # PostCSS configuration
├── README.md
└── tsconfig.json                    # TypeScript configuration
```

---

## Pages Implemented

### 1. Home Page (`/`)
**File:** `src/app/page.tsx`

- **Hero:** Full-bleed background image (Unsplash), gradient overlay, glow orbs, grid pattern. Headline “Where Ideas Become Print”, CTAs (Get Your Quote, See Our Work), trust bullets (Free LA Delivery, 24hr Turnaround, 100% Satisfaction). Right: floating product cards with real images (business cards, brochures, packaging, banners) and hover rotation/scale.
- **Trust Bar:** “Trusted by 500+ LA businesses” with Shield icon; infinite horizontal scroll of client pills (Kaiser Permanente, Toyota, LABioMed, etc.); gradient edge masks; hover pauses animation.
- **Industries:** “Industries We Serve” — four image-based cards (Healthcare, Hospitality, Education, Automotive) with Unsplash images, gradient overlays, hover scale/color, expandable item lists and client stats.
- **Portfolio Preview:** “Recent Projects” with 6 project cards (client, type, category badge), Unsplash images, hover overlay and “View All Work” link to `/portfolio`.
- **Features + Quote Form:** Dark section with background image, “LA’s Most Trusted Printing Partner”, four feature cards (Fast Turnaround, Free Delivery, Quality Guaranteed, All On-Site), facility image strip with “Tour” link to `/about`, floating quote form (QuoteForm dark variant).
- **Testimonials:** `TestimonialsSection` — “What Our Clients Say” with avatar list, active testimonial card, 5-star display, auto-rotate every 6s.
- **CTA:** Full-width background image, cyan overlay, “Ready to Bring Your Ideas to Life?”, Request a Quote and phone buttons.

### 2. About Page (`/about`)
**File:** `src/app/about/page.tsx`

- **Hero:** Page title and short description.
- **Story:** Company history (founded 2010), stats grid (15+ Years, 500+ Clients, 10M+ Prints, 100% Satisfaction).
- **Team:** Four cards (Kassa, Marcel, Estevan, João Serro) with initial avatars and roles.
- **Values:** Quality First, On-Time Delivery, Fair Pricing with icons and copy.

### 3. Services Page (`/services`)
**File:** `src/app/services/page.tsx`

- **Hero:** Full-bleed background image (Unsplash), title “Our Services”, supporting copy.
- **Service Categories:** Alternating layout sections; each category has icon, name, tagline, description, hero image (Unsplash), gradient, and item list (e.g. Business Cards, Brochures & Flyers, Booklets, Postcards for Commercial; Paper Bags, Napkins, Food Packaging, Gift Card Holders for Custom Packaging; Banners, Posters, Trade Show, Vehicle Wraps for Large Format; Letterheads, NCR Forms, Labels, Notepads for Office & Forms). “Learn more” / CTA links.
- **Capabilities:** Dark section “Our Capabilities” with icon grid (High-Speed B&W, Full-Color, Digital, Offset, Bindery, Graphic Design, etc.).
- **CTA:** Background image with cyan overlay, “Don’t See What You Need?”, Contact Us button.

### 4. Portfolio Page (`/portfolio`)
**File:** `src/app/portfolio/page.tsx`

- **Hero:** Dark section with background, title “Our Work”, description.
- **Filter Bar:** Sticky bar with industry filters (All, Healthcare, Hospitality, Automotive, Finance, Media, Education, Retail) and project counts; filter pills with active state.
- **Projects Grid:** Filterable project cards; each has Unsplash image, industry badge, client name, project type, short description, hover overlay. Multiple industries (Healthcare, Automotive, Hospitality, Finance, Media, etc.).
- **Empty State:** When no projects match filter, “No projects found” message with LayoutGrid icon.
- **Stats Section:** Four stat cards with icons (Trophy, Users, Calendar, ThumbsUp) and values/labels.
- **Clients Marquee:** “Trusted Partners” / “Clients We’ve Worked With” with infinite horizontal scroll of client names (same `animate-scroll` pattern).
- **CTA:** Full-width background image with purple/cyan gradient; “Ready to Start Your Project?”; Get a Quote and phone buttons.

### 5. Contact Page (`/contact`)
**File:** `src/app/contact/page.tsx`

- **Hero:** Page title and description.
- **Contact Form:** Quote request form — First Name, Last Name, Company, Email, Phone, Project Details; validation; loading and success/error messages; simulated submit (ready for API).
- **Contact Information:** Address, Phone, Email, Hours with icons.
- **Map Placeholder:** Area reserved for Google Maps.
- **Quick Response Guarantee:** Info box.

---

## Components

### Layout Components

#### Header (`src/components/header.tsx`)
- Sticky nav; logo (A + “ARTISTIC PRINTING CO.”); desktop nav links; phone; “Get a Quote” CTA; mobile hamburger and slide-down menu; active route highlight via `usePathname`.

#### Footer (`src/components/footer.tsx`)
- Logo and short description; “Family Owned” and “15+ Years” badges; Quick Links (Services, Portfolio, About, Contact); contact block (address, phone, email, hours); copyright.

### Form Components

#### QuoteForm (`src/components/quote-form.tsx`)
- Reusable form: First Name, Last Name, Email, Phone, Project Details. Props: `variant` (light/dark), `className`. Loading state, success/error messages. Simulated submit (ready for `/api/quote` or similar).

### Feature Components

#### TestimonialsSection (`src/components/testimonials-section.tsx`)
- **Client component.** “What Our Clients Say” with Badge “Customer Stories.” Left: list of testimonial rows (avatar from Unsplash, name, role/company); click to set active. Right: large card with quote, 5-star display, active author avatar and name. Auto-advance every 6s via `useEffect` + `setInterval`. Dot-pattern background.

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

## Styling

### Theme Configuration (`src/app/globals.css`)
- Tailwind CSS 4 with `@theme inline` and CSS custom properties for colors, radius, sidebar, charts.
- Light/dark mode via `.dark` class; primary cyan-600; slate palette.
- Base layer: border-border, outline-ring/50, body bg/text.
- **Custom animation:** `@keyframes scroll` (translateX 0 → -50%); `.animate-scroll` (30s linear infinite, width max-content) for trust bar carousel.

### Design System
- **Typography:** Inter (from layout).
- **Colors:** Slate + cyan primary; chart colors for future data viz.
- **Spacing / radius:** Tailwind scale and theme radius variables.
- **Motion:** tw-animate-css; custom scroll keyframes; hover transitions across sections.

---

## Configuration

### Next.js (`next.config.ts`)
- **Images:** `images.remotePatterns` allows `https://images.unsplash.com` for hero images, industry cards, portfolio, testimonials avatars, and facility strips.

### SEO & Metadata (`src/app/layout.tsx`)
- Title: “Artistic Printing Company | Commercial Printing in Los Angeles”.
- Meta description and keywords for local/commercial printing.
- OpenGraph title, description, url, siteName, locale, type.

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

1. **API integration:** Contact and quote forms use simulated submission; add backend/API routes and wire forms.
2. **Google Maps:** Contact page map placeholder ready for embed or API.
3. **Team photos:** About page team cards use initial avatars; replace with real photos if desired.
4. **Analytics:** Add tracking (e.g. Google Analytics) if required.
5. **Email/service:** Connect forms to email or CRM (e.g. SendGrid, Formspree) when backend is ready.

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** info@artisticprinting.com
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–2pm
- **Founded:** 2010
- **Focus industries:** Healthcare, Hospitality, Education, Automotive (plus Finance, Media, Retail on portfolio/services).
