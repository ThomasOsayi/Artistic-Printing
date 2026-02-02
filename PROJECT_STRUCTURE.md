# Artistic Printing Company - Project Structure

A modern commercial printing company website built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Radix UI | Latest | Headless UI components |
| Lucide React | 0.563.0 | Icon library |
| tw-animate-css | 1.4.0 | Animation utilities |

---

## File Tree

```
Artistic-Printing/
├── public/                          # Static assets
│   ├── favicon.ico
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
│   │   ├── globals.css              # Global styles & CSS variables
│   │   ├── favicon.ico
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx             # About Us page
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page with form
│   │   │
│   │   ├── portfolio/
│   │   │   └── page.tsx             # Portfolio/work showcase
│   │   │
│   │   └── services/
│   │       └── page.tsx             # Services listing page
│   │
│   ├── components/                  # React components
│   │   ├── header.tsx               # Site header with navigation
│   │   ├── footer.tsx               # Site footer
│   │   ├── quote-form.tsx           # Reusable quote request form
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
├── next.config.ts                   # Next.js configuration
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

- **Hero Section:** Gradient background with headline, description, CTA buttons
- **Trust Bar:** Displays notable client names (Kaiser Permanente, Toyota, etc.)
- **Industries Section:** Healthcare, Hospitality, Education, Automotive cards
- **Features + Quote Form:** "Why LA Businesses Choose Us" with embedded quote form
- **Testimonial:** Customer review from Kaiser Permanente
- **CTA Section:** Final call-to-action banner

### 2. About Page (`/about`)
**File:** `src/app/about/page.tsx`

- **Hero Section:** Page title and description
- **Story Section:** Company history (founded 2010) with stats grid
  - 15+ Years in Business
  - 500+ Clients Served
  - 10M+ Prints Delivered
  - 100% Satisfaction Rate
- **Team Section:** Team member cards (Kassa, Marcel, Estevan, João Serro)
- **Values Section:** Quality First, On-Time Delivery, Fair Pricing

### 3. Services Page (`/services`)
**File:** `src/app/services/page.tsx`

- **Hero Section:** Page title and description
- **Services Grid:** Four category cards with items:
  - Commercial Printing (Business Cards, Brochures, Booklets, Postcards)
  - Custom Packaging (Paper Bags, Napkins, Food Packaging, Gift Card Holders)
  - Large Format (Banners, Posters, Trade Show Graphics, Vehicle Wraps)
  - Office & Forms (Letterheads, NCR Forms, Labels, Notepads)
- **Capabilities Section:** List of printing capabilities
- **CTA Section:** Contact prompt

### 4. Portfolio Page (`/portfolio`)
**File:** `src/app/portfolio/page.tsx`

- **Hero Section:** Page title and description
- **Filter Bar:** Industry filters (All, Healthcare, Hospitality, Automotive, Retail, Finance)
- **Projects Grid:** Filterable project cards with:
  - Client name, industry badge, project type
  - Featured clients: Kaiser Permanente, JY Accessories, Salud Clinica, etc.
- **Client-side interactivity:** Uses React state for filtering

### 5. Contact Page (`/contact`)
**File:** `src/app/contact/page.tsx`

- **Hero Section:** Page title and description
- **Contact Form:** Full quote request form with fields:
  - First Name, Last Name, Company
  - Email, Phone
  - Project Details textarea
  - Form validation & submission handling
- **Contact Information:** Address, Phone, Email, Hours
- **Map Placeholder:** Ready for Google Maps integration
- **Quick Response Guarantee:** Info box

---

## Components

### Layout Components

#### Header (`src/components/header.tsx`)
- Sticky navigation bar
- Logo with company branding
- Desktop navigation links
- Phone number display
- "Get a Quote" CTA button
- Mobile hamburger menu with slide-down navigation
- Active page highlighting

#### Footer (`src/components/footer.tsx`)
- Company logo and description
- "Family Owned" and "15+ Years" badges
- Quick links navigation
- Contact information with icons
- Copyright notice

### Form Components

#### QuoteForm (`src/components/quote-form.tsx`)
- Reusable form component
- Light/dark variant support
- Fields: Name, Email, Phone, Project Details
- Form submission with loading state
- Success/error message display
- Simulated API submission (ready for backend integration)

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
- Tailwind CSS 4 with custom theme
- CSS custom properties for colors
- Light/dark mode support
- Primary color: Cyan-600 (`#0891b2`)
- Consistent border radius system
- Chart colors for data visualization

### Design System
- **Typography:** Inter font family
- **Colors:** Slate palette with cyan accents
- **Spacing:** Tailwind's default scale
- **Shadows:** Subtle elevation on hover
- **Animations:** tw-animate-css transitions

---

## SEO & Metadata

Configured in `src/app/layout.tsx`:
- Title: "Artistic Printing Company | Commercial Printing in Los Angeles"
- Meta description optimized for local SEO
- Keywords for commercial printing services
- OpenGraph tags for social sharing

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Pending/TODO

1. **API Integration:** Contact and quote forms are simulated; need backend endpoints
2. **Google Maps:** Map placeholder ready for integration
3. **Real Images:** Currently using emoji placeholders in portfolio
4. **Team Photos:** Placeholder avatars for team members
5. **Analytics:** Add tracking (Google Analytics, etc.)
6. **Email Service:** Connect forms to email service (SendGrid, etc.)

---

## Business Information

- **Company:** Artistic Printing Company
- **Location:** 5878 West Pico Boulevard, Los Angeles, CA 90019
- **Phone:** (323) 939-8911
- **Email:** info@artisticprinting.com
- **Hours:** Mon-Fri 8am-6pm, Sat 9am-2pm
- **Founded:** 2010
- **Focus Industries:** Healthcare, Hospitality, Education, Automotive
