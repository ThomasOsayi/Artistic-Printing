# Admin Dashboard Implementation — Claude Code Instructions

## Overview

Add a `/admin` section to the existing Artistic Printing Next.js app. This is a **frontend-only** implementation for now — all data will be stored in React state using mock data. Firebase integration comes later as a separate step.

The dashboard allows the business owner to:
- View and manage incoming quote requests
- Track quote status through a pipeline (New → Pending → In Progress → Approved/Completed → Declined)
- Reply to quotes via an email compose modal
- View a client directory with aggregated revenue
- Search and filter quotes

---

## Design System (MUST match existing site)

The existing site uses these conventions — the admin dashboard should feel like a natural extension:

- **Colors:** Slate palette for neutrals, cyan-500/600 as primary accent (same as the main site's CTA buttons and highlights)
- **Components:** The project already has shadcn/ui installed (`badge`, `button`, `card`, `input`, `tabs`, `textarea`). Use these existing components wherever possible.
- **Typography:** Inter font (already loaded in layout.tsx)
- **Patterns:** The site uses Lucide React icons throughout. Continue using Lucide for all dashboard icons.

### Dashboard-Specific Colors
- New status: cyan-500 background tint
- Pending status: amber-500 background tint  
- In Progress status: blue-500 background tint
- Approved status: green-500 background tint
- Completed status: green-700 background tint
- Declined status: red-500 background tint

---

## Architecture

### Route Structure
```
src/app/admin/
├── layout.tsx          # Admin layout with sidebar + top header (NO main site header/footer)
├── page.tsx            # Redirects to /admin/quotes
├── quotes/
│   └── page.tsx        # Quote management page (main dashboard view)
└── clients/
    └── page.tsx        # Client directory page
```

### Components
```
src/components/admin/
├── admin-sidebar.tsx       # Left sidebar navigation
├── admin-header.tsx        # Top header with search + actions
├── stats-cards.tsx         # Stats row (New, Pending, Approved, Revenue)
├── quotes-table.tsx        # Filterable/searchable quotes table
├── quote-detail-panel.tsx  # Right-side detail panel for selected quote
├── reply-modal.tsx         # Email reply modal dialog
├── status-badge.tsx        # Reusable status badge component
└── client-table.tsx        # Client directory table
```

### Data
```
src/lib/admin-data.ts       # Mock quote and client data + TypeScript types
```

---

## Admin Layout (`src/app/admin/layout.tsx`)

The admin section has its own layout that does NOT include the main site's Header or Footer. It should be a completely separate shell:

- **Left sidebar** (fixed, 260px wide, dark navy background `slate-950`)
  - Brand mark at top: "A" icon + "Artistic Printing" + "Admin Dashboard" subtitle
  - Navigation links with icons:
    - **Overview section:** Quotes (with count badge showing number of "new" quotes), Clients
    - **Management section:** Portfolio (grayed out, "Soon" label), Site Images (grayed out, "Soon" label)
    - **Settings section:** Settings (grayed out, "Soon" label)
  - Active link: cyan-400 text, left border accent, subtle cyan background tint
  - Footer: User avatar with initials "AP", name "Artistic Printing", role "Owner"

- **Top header** (sticky, white background, full width of remaining space)
  - Left: Page title (dynamic based on current route)
  - Right: Search input (searches quotes by name/company/service), notification bell icon (with red dot), external link icon (opens live site)

- **Main content area** fills remaining space with slate-100 background

Use `"use client"` for the layout since it needs state for sidebar interactions.

---

## Mock Data (`src/lib/admin-data.ts`)

Define TypeScript interfaces and mock data:

```typescript
export interface Quote {
  id: string
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  industry: string
  service: string
  status: 'new' | 'pending' | 'in-progress' | 'approved' | 'completed' | 'declined'
  date: string // ISO date string
  message: string
  quantity: string
  urgency: string
  estimatedPrice?: number  // Set when owner replies
  finalPrice?: number      // Set when marking as completed
}

export interface Client {
  id: string
  name: string
  industry: string
  totalOrders: number
  lastOrderDate: string
  totalRevenue: number
}
```

Include 10-12 realistic mock quotes using the actual Artistic Printing client names from the site:
- Kaiser Permanente (Healthcare) — Patient Forms & Signage
- Jim Falk Lexus (Automotive) — Sales Brochures
- Beverly Hills Café (Hospitality) — Menus & Packaging
- UCLA Extension (Education) — Course Catalogs
- Vista Hospital (Healthcare) — Patient Materials
- Broadway Federal Bank (Finance) — Marketing Collateral
- Toyota Hollywood (Automotive) — Sales Brochures
- K-Earth 101 FM (Media) — Event Materials
- LABioMed (Healthcare) — Research Publications
- Salud Clinica (Healthcare) — Bilingual Forms
- Promise Hospital (Healthcare) — Facility Signage

Mix of statuses: 4 new, 3 pending, 2 approved, 1 completed, 1 declined.

Include 10 clients with realistic revenue figures and order counts.

---

## Quotes Page (`src/app/admin/quotes/page.tsx`)

This is the main dashboard view with three sections:

### 1. Stats Row (top)
Four stat cards in a horizontal grid:
- **New Requests** — count of quotes with status "new", cyan icon
- **Pending Review** — count of "pending" quotes, amber icon
- **Approved** — count of "approved" quotes, green icon  
- **Monthly Revenue** — sum of `finalPrice` from "completed" quotes this month, blue icon

Each card: white background, subtle border, icon on right in a tinted square, hover lift effect. Include a small change indicator (e.g., "+2 this week").

### 2. Quotes Table (left, ~65% width)
- **Header:** Title "All Quote Requests" + filter tabs (All, New, Pending, In Progress, Approved, Completed, Declined)
- **Table columns:** Client (name + company), Service, Status (colored badge), Date
- **Rows are clickable** — clicking a row selects it and populates the detail panel
- **Selected row** gets a cyan-50 background and left cyan border
- **Scrollable** body with max height ~520px
- **Search** filters by client name, company, or service (connected to the header search input)

### 3. Quote Detail Panel (right, ~35% width, sticky)
When no quote is selected: show an empty state with icon, "Select a Quote" heading, and helper text.

When a quote is selected, show:
- **Top section:** Client avatar (colored initials), status dropdown (select element to change status), client name + company + industry
- **Contact Info section:** Email (cyan colored, clickable), Phone
- **Request Details section:** Service, Quantity, Urgency (red text if "Rush"), Submitted date
- **Message section:** The client's message in a subtle gray box
- **Actions section:**
  - "Reply" button (primary, opens reply modal)
  - Approve button (green, small)
  - Decline button (red outline, small)

**When status is changed to "completed"**, show an inline editable "Final Price" field that defaults to the estimatedPrice. This is how revenue gets tracked — no separate data entry.

### Status Change Behavior
- Changing status updates the quote in state, re-renders the table and stats
- Show a toast notification: "[Client Name]'s quote marked as [Status]"

---

## Reply Modal

A modal dialog (use a simple custom modal or a div overlay — don't add a new dependency like Radix Dialog unless it's already installed) with:

- **To field** (readonly, pre-filled with client name + email)
- **Subject field** (pre-filled: "Re: Your Quote Request — Artistic Printing Co.")
- **Message textarea** (pre-filled with a professional template)
- **Two-column row:** Estimated Price input + Estimated Turnaround input
- **Footer:** Cancel button + Send Reply button

On send:
- Close modal
- If quote was "new", change status to "pending"
- Save the estimatedPrice to the quote
- Show toast "Reply sent successfully!"

(For now this is all frontend state. Firebase will handle actual email sending later.)

---

## Clients Page (`src/app/admin/clients/page.tsx`)

### Stats Row
Three stat cards: Total Clients, Repeat Clients, Avg. Order Value

### Client Table
- **Header:** Title "Client Directory" + "Add Client" button (shows toast "Coming soon" on click)
- **Columns:** Client (avatar initials + name), Industry (badge), Total Orders, Last Order (date), Revenue (green, bold)
- **Rows are not clickable** for now (client detail view is a future feature)

Revenue per client = sum of finalPrice from their completed quotes.

---

## Toast Notifications

Implement a simple toast system:
- Fixed position bottom-right
- Dark navy background, white text, cyan check icon
- Slides up on show, auto-dismisses after 3 seconds
- Use React state + setTimeout

---

## Key Implementation Notes

1. **State Management:** Use React `useState` at the page level for quotes and clients data. Pass down via props. No need for context or state management libraries.

2. **Do NOT modify existing files** except `src/app/admin/layout.tsx` needs to exist as a separate layout. The admin layout should NOT wrap in the main site's `<Header>` and `<Footer>`. Next.js nested layouts handle this automatically — the admin layout replaces the root layout's header/footer for `/admin/*` routes.

   Actually, since the root layout (`src/app/layout.tsx`) includes `<Header>` and `<Footer>`, you need to restructure slightly. The cleanest approach: move `<Header>` and `<Footer>` out of the root layout and into a `(main)` route group layout, so admin routes don't inherit them. Structure:
   
   ```
   src/app/
   ├── layout.tsx                    # Root layout (html, body, font — NO Header/Footer)
   ├── (main)/
   │   ├── layout.tsx                # Main site layout WITH Header + Footer
   │   ├── page.tsx                  # Home (moved from src/app/page.tsx)
   │   ├── about/page.tsx            # (moved)
   │   ├── contact/page.tsx          # (moved)
   │   ├── portfolio/page.tsx        # (moved)
   │   └── services/page.tsx         # (moved)
   └── admin/
       ├── layout.tsx                # Admin layout with sidebar (NO Header/Footer)
       ├── page.tsx
       ├── quotes/page.tsx
       └── clients/page.tsx
   ```

   This way admin gets its own layout without the main nav/footer, and all existing pages continue working exactly as before under the `(main)` group (parentheses means it's a route group — doesn't affect URLs).

3. **Responsive:** The sidebar should collapse off-screen on mobile (<900px) with a hamburger toggle in the top header. The content grid (table + detail panel) should stack vertically on screens <1200px.

4. **No new dependencies.** Use only what's already installed (shadcn/ui components, Lucide React, Tailwind). Build the modal, toast, and sidebar as custom components.

5. **All "Coming Soon" items** (Portfolio manager, Site Images, Settings) should be visible but grayed out in the sidebar with an italic "Soon" label. They don't need pages — clicking them does nothing or shows a toast.

---

## Summary of Files to Create/Modify

### Create:
- `src/lib/admin-data.ts`
- `src/app/admin/layout.tsx`
- `src/app/admin/page.tsx`
- `src/app/admin/quotes/page.tsx`
- `src/app/admin/clients/page.tsx`
- `src/components/admin/admin-sidebar.tsx`
- `src/components/admin/admin-header.tsx`
- `src/components/admin/stats-cards.tsx`
- `src/components/admin/quotes-table.tsx`
- `src/components/admin/quote-detail-panel.tsx`
- `src/components/admin/reply-modal.tsx`
- `src/components/admin/status-badge.tsx`
- `src/components/admin/client-table.tsx`
- `src/app/(main)/layout.tsx` (new — wraps Header + Footer)

### Move (into route group):
- `src/app/page.tsx` → `src/app/(main)/page.tsx`
- `src/app/about/` → `src/app/(main)/about/`
- `src/app/contact/` → `src/app/(main)/contact/`
- `src/app/portfolio/` → `src/app/(main)/portfolio/`
- `src/app/services/` → `src/app/(main)/services/`

### Modify:
- `src/app/layout.tsx` — Remove Header and Footer imports/rendering, keep only html/body/font/metadata
