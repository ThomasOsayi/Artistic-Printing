# Artistic Printing Company — Website Build Instructions

## Project Overview

You're building a website for **Artistic Printing Company**, a B2B commercial printing business in Los Angeles. The site's primary goal is **lead generation** — getting visitors to request quotes.

### Business Context
- **Location:** 5878 W Pico Blvd, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Industries served:** Healthcare, Hospitality, Education, Automotive
- **Products:** Business cards, brochures, custom packaging (napkins, paper bags), large format printing, hospital forms, etc.
- **Key clients:** Kaiser Permanente, Toyota, Vista Hospital, Broadway Federal Bank, LABioMed, Jim Falk Lexus

### Design Direction
This is a **complete rebrand** — the old site was dated with poor UI/UX. The new design should be:
- Clean, modern, professional
- Industry-focused (B2B, not consumer)
- Conversion-optimized (CTAs everywhere)
- Mobile-responsive

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 14.x |
| Styling | Tailwind CSS | 3.4.x |
| Components | shadcn/ui | latest |
| Icons | Lucide React | latest |
| Forms | React Hook Form (optional) | latest |
| Deployment | Vercel | — |

---

## Project Setup

### 1. Create the Next.js project

```bash
npx create-next-app@latest artistic-printing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd artistic-printing
```

### 2. Install shadcn/ui

```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### 3. Add required shadcn components

```bash
npx shadcn@latest add button card input textarea badge tabs
```

### 4. Install Lucide icons

```bash
npm install lucide-react
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── ui/                 # shadcn components (auto-generated)
│   ├── header.tsx          # Site header with nav
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Homepage hero section
│   ├── trust-bar.tsx       # Client logos bar
│   ├── industries.tsx      # Industry cards section
│   ├── features.tsx        # Why choose us section
│   ├── testimonial.tsx     # Testimonial section
│   ├── cta-section.tsx     # CTA banner sections
│   └── quote-form.tsx      # Reusable quote form
└── lib/
    └── utils.ts            # shadcn utility (auto-generated)
```

---

## Design Specifications

### Color Palette

```css
/* Primary colors */
--slate-900: #0f172a    /* Dark backgrounds, text */
--slate-800: #1e293b    /* Secondary dark */
--slate-600: #475569    /* Body text */
--slate-400: #94a3b8    /* Muted text */
--slate-200: #e2e8f0    /* Borders */
--slate-100: #f1f5f9    /* Light backgrounds */
--slate-50:  #f8fafc    /* Subtle backgrounds */

/* Accent color */
--cyan-600: #0891b2     /* Primary buttons, links, accents */
--cyan-500: #06b6d4     /* Hover states */
--cyan-400: #22d3ee     /* Light accent (on dark bg) */
--cyan-100: #cffafe     /* Light accent backgrounds */
--cyan-50:  #ecfeff     /* Very light accent */

/* Supporting */
--white: #ffffff
```

### Typography

- **Headings:** System font stack (font-sans in Tailwind) — bold weights
- **Body:** Same system font stack — regular/medium weights
- **No decorative or script fonts**

### Spacing & Layout

- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-16 lg:py-24`
- Container padding: `px-4 sm:px-6 lg:px-8`
- Card border radius: `rounded-lg` or `rounded-xl`
- Consistent spacing scale using Tailwind defaults

---

## Page-by-Page Specifications

### Homepage (`/`)

**Sections in order:**
1. **Hero** — Dark gradient background (slate-900), headline "Premium Commercial Printing for Healthcare, Hospitality & More", two CTAs (Request Quote + View Work), floating service cards on right (desktop only)
2. **Trust Bar** — Light gray bar with client names: Kaiser Permanente, Toyota, LABioMed, Vista Hospital, Broadway Federal Bank, Jim Falk Lexus
3. **Industries** — 4 cards (Healthcare, Hospitality, Education, Automotive) with icons and descriptions
4. **Why Choose Us** — Split layout: features list on left, quote form on right (dark background)
5. **Testimonial** — Centered quote with 5 stars, attribution to "Sarah Mitchell, Operations Director, Kaiser Permanente"
6. **CTA Banner** — Cyan background, "Ready to Start Your Project?" with button

### Services (`/services`)

**Sections:**
1. **Hero** — Dark, simple headline "Our Services"
2. **Services Grid** — 2x2 grid of cards:
   - Commercial Printing (Business Cards, Brochures, Booklets, Postcards)
   - Custom Packaging (Paper Bags, Napkins, Food Packaging, Gift Card Holders)
   - Large Format (Banners, Posters, Trade Show, Vehicle Wraps)
   - Office & Forms (Letterheads, NCR Forms, Labels, Notepads)
3. **Capabilities** — Grid of checkmark items (High-Speed B&W, Full-Color, Digital, Offset, etc.)
4. **CTA Banner** — "Don't See What You Need?"

### Portfolio (`/portfolio`)

**Sections:**
1. **Hero** — Dark, "Our Work"
2. **Filter Bar** — Sticky below header, pill buttons: All, Healthcare, Hospitality, Automotive, Retail, Finance
3. **Project Grid** — 3-column grid of cards with placeholder images/emojis, industry badge, client name, project type

**Projects to show:**
- Kaiser Permanente (healthcare) — Patient Forms & Signage
- JY Accessories (retail) — Branding Package
- Salud Clinica (healthcare) — Website & Print Materials
- American Dental (healthcare) — Brochures & Forms
- Beverly Hills Café (hospitality) — Menus & Napkins
- Toyota Hollywood (automotive) — Sales Materials
- Vista Hospital (healthcare) — Patient Materials
- Broadway Bank (finance) — Marketing Collateral

### About (`/about`)

**Sections:**
1. **Hero** — Dark, "About Us", "Family-owned since 2010"
2. **Story** — Two columns: text on left (founding story), stats box on right (15+ years, 500+ clients, 10M+ prints, 100% satisfaction)
3. **Team** — 4 cards with avatar placeholders:
   - Kassa — Business Developer & Founder
   - Marcel — Marketing Manager
   - Estevan — Lead Designer
   - João Serro — Consultant, Graphic & Web Design
4. **Values** — 3 centered items (Quality First, On-Time Delivery, Fair Pricing)

### Contact (`/contact`)

**Sections:**
1. **Hero** — Dark, "Get in Touch"
2. **Two-column layout:**
   - Left: Quote form (First Name, Last Name, Company, Email, Phone, Project Details, Submit button)
   - Right: Contact info cards (Address, Phone, Email, Hours), Map placeholder, "Quick Response Guarantee" callout

---

## Component Specifications

### Header (sticky)

- Logo: "A" in dark square + "ARTISTIC / PRINTING CO." text
- Nav links: Home, Services, Portfolio, About, Contact
- Phone number (desktop only): (323) 939-8911
- CTA button: "Get a Quote" (cyan)
- Mobile: hamburger menu

### Footer

- Dark background (slate-900)
- 4 columns: Logo + description + badges, Quick Links, Contact info
- Copyright line at bottom

### Quote Form

Reusable component with:
- First/Last name (2-col)
- Email/Phone (2-col)
- Company (optional)
- Project details (textarea)
- Submit button (full-width, cyan)

---

## Important Notes

1. **Images:** The mockup uses emoji placeholders. Replace with real photos:
   - Hero: Show actual printed products or the printing facility
   - Portfolio: Real project photos
   - Team: Headshots or professional avatars

2. **Form handling:** Currently no backend. Options:
   - Vercel serverless function + email service (Resend, SendGrid)
   - Formspree or similar form backend
   - Connect to CRM

3. **SEO:** Add proper meta tags, Open Graph images, structured data for local business

4. **Analytics:** Add Google Analytics or Vercel Analytics

5. **Map:** Replace placeholder with embedded Google Map or Mapbox

---

## Reference Implementation

The complete source code for each component is provided in the accompanying files:
- `components/header.tsx`
- `components/footer.tsx`
- `app/page.tsx` (homepage)
- `app/services/page.tsx`
- `app/portfolio/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

These files contain the exact implementation from the approved mockup and can be used directly.
