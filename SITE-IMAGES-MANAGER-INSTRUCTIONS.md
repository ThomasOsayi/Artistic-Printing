# Site Images Manager — Complete Implementation Instructions

## Overview

Build a "Site Images" admin page that lets Artistic Printing staff replace every Unsplash stock image across the public site with their own uploaded photos via Firebase Storage. Uploads update the public site in real-time. Staff can revert any image back to the original Unsplash stock URL. A live preview panel shows how the public site looks without navigating away.

**Reference mockup:** `site-images-manager-mockup.html` (in this project's files — open it in a browser to see the full interactive design)

---

## Tech Stack (already configured)

- **Next.js 16** with App Router, React 19, TypeScript, Tailwind CSS 4
- **Firebase:** Firestore + Storage + Auth
- **Firebase config:** `src/lib/firebase.ts` — exports `db` and `storage`
- **UI components:** shadcn/ui in `src/components/ui/`
- **Admin layout:** `src/app/admin/layout.tsx` with sidebar nav
- **Types:** `src/lib/admin-data.ts`

---

## Architecture

### New Firestore Collection: `siteImages`

Each document represents one replaceable image slot on the public site. The document ID is the image's unique key.

```typescript
// Add to src/lib/admin-data.ts
export interface SiteImage {
  id: string                    // document ID = image key
  page: string                  // 'home' | 'services' | 'about' | 'portfolio' | 'contact'
  section: string               // e.g., 'Hero Background', 'Industry Cards', 'Product Cards'
  name: string                  // human-readable label, e.g., 'Healthcare'
  location: string              // breadcrumb, e.g., 'Home → Industries → Healthcare'
  stockUrl: string              // original Unsplash URL (never changes)
  customUrl: string             // Firebase Storage URL when replaced (empty string = using stock)
  customPath: string            // Firebase Storage path for deletion (empty string = using stock)
  recommendedSize: string       // e.g., '1920×1080', '600×400'
  order: number                 // sort order within section
}
```

### How It Works

1. **Seed on first load:** If `siteImages` collection is empty, seed it with every Unsplash URL currently hardcoded in the public pages. Each gets a document with `stockUrl` set and `customUrl` empty.

2. **Admin replaces an image:** Upload goes to Firebase Storage under `site-images/{imageKey}-{timestamp}.{ext}`. The document's `customUrl` and `customPath` are updated.

3. **Admin reverts an image:** Delete the file from Storage, clear `customUrl` and `customPath` back to empty strings.

4. **Public pages read from Firestore:** A helper hook `useSiteImages(pageKey)` returns the active URL for each image — if `customUrl` is non-empty, use it; otherwise fall back to `stockUrl`.

---

## ⚠ COMPLETE IMAGE REGISTRY — Every Unsplash URL in the Site

Below is **every single Unsplash image** hardcoded across all public pages. This is the exact data for the seed function. URLs are copied verbatim from the source files.

### HOME PAGE — `src/app/(main)/page.tsx` (14 images)

| # | Key | Section | Name | stockUrl | Size |
|---|-----|---------|------|----------|------|
| 1 | `home-hero-bg` | Hero Background | Main Hero Background | `https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 2 | `home-product-business-cards` | Product Cards | Business Cards | `https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=80` | 500×300 |
| 3 | `home-product-brochures` | Product Cards | Tri-Fold Brochures | `https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80` | 500×300 |
| 4 | `home-product-packaging` | Product Cards | Custom Packaging | `https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80` | 500×300 |
| 5 | `home-product-banners` | Product Cards | Banners & Signs | `https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80` | 500×300 |
| 6 | `home-industry-healthcare` | Industry Cards | Healthcare | `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80` | 600×420 |
| 7 | `home-industry-hospitality` | Industry Cards | Hospitality | `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80` | 600×420 |
| 8 | `home-industry-education` | Industry Cards | Education | `https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80` | 600×420 |
| 9 | `home-industry-automotive` | Industry Cards | Automotive | `https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80` | 600×420 |
| 10 | `home-features-bg` | Features Background | Features Section Background | `https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 11 | `home-facility-1` | Facility Strip | Digital Press Room | `https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=200&q=80` | 200×130 |
| 12 | `home-facility-2` | Facility Strip | Offset Printing | `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=200&q=80` | 200×130 |
| 13 | `home-facility-3` | Facility Strip | Design Studio | `https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=200&q=80` | 200×130 |
| 14 | `home-cta-bg` | CTA Background | CTA Section Background | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |

**Location breadcrumbs:** home-hero-bg → "Home → Hero Section", home-product-* → "Home → Hero → Product Cards", home-industry-* → "Home → Industries We Serve", home-features-bg → "Home → Features Section", home-facility-* → "Home → Features → Facility Strip", home-cta-bg → "Home → CTA Section"

### SERVICES PAGE — `src/app/(main)/services/page.tsx` (7 images)

| # | Key | Section | Name | stockUrl | Size |
|---|-----|---------|------|----------|------|
| 1 | `services-hero-bg` | Hero Background | Services Hero | `https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 2 | `services-commercial` | Service Categories | Commercial Printing | `https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80` | 800×400 |
| 3 | `services-packaging` | Service Categories | Custom Packaging | `https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80` | 800×400 |
| 4 | `services-large-format` | Service Categories | Large Format | `https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80` | 800×400 |
| 5 | `services-office` | Service Categories | Office & Forms | `https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80` | 800×400 |
| 6 | `services-capabilities-bg` | Capabilities Background | Capabilities Section | `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 7 | `services-cta-bg` | CTA Background | Services CTA | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |

**Location breadcrumbs:** services-hero-bg → "Services → Hero Section", services-commercial → "Services → Commercial Printing", services-packaging → "Services → Custom Packaging", services-large-format → "Services → Large Format", services-office → "Services → Office & Forms", services-capabilities-bg → "Services → Capabilities Section", services-cta-bg → "Services → CTA Section"

### ABOUT PAGE — `src/app/(main)/about/page.tsx` (10 images)

| # | Key | Section | Name | stockUrl | Size |
|---|-----|---------|------|----------|------|
| 1 | `about-hero-bg` | Hero Background | About Hero | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 2 | `about-team-kassa` | Team Photos | Kassa — Founder | `https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80` | 400×500 |
| 3 | `about-team-marcel` | Team Photos | Marcel — Marketing | `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80` | 400×500 |
| 4 | `about-team-estevan` | Team Photos | Estevan — Designer | `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80` | 400×500 |
| 5 | `about-team-joao` | Team Photos | João — Consultant | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80` | 400×500 |
| 6 | `about-facility-digital` | Facility Tour | Digital Press Room | `https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80` | 600×400 |
| 7 | `about-facility-offset` | Facility Tour | Offset Printing | `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80` | 600×400 |
| 8 | `about-facility-design` | Facility Tour | Design Studio | `https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80` | 600×400 |
| 9 | `about-facility-finishing` | Facility Tour | Finishing Area | `https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80` | 600×400 |
| 10 | `about-cta-bg` | CTA Background | About CTA | `https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |

**Location breadcrumbs:** about-hero-bg → "About → Hero Section", about-team-kassa → "About → Team → Kassa", about-team-marcel → "About → Team → Marcel", about-team-estevan → "About → Team → Estevan", about-team-joao → "About → Team → João Serro", about-facility-digital → "About → Facility Tour → Digital Press", about-facility-offset → "About → Facility Tour → Offset Printing", about-facility-design → "About → Facility Tour → Design Studio", about-facility-finishing → "About → Facility Tour → Finishing Area", about-cta-bg → "About → CTA Section"

### PORTFOLIO PAGE — `src/app/(main)/portfolio/page.tsx` (2 images)

| # | Key | Section | Name | stockUrl | Size |
|---|-----|---------|------|----------|------|
| 1 | `portfolio-hero-bg` | Hero Background | Portfolio Hero | `https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 2 | `portfolio-cta-bg` | CTA Background | Portfolio CTA | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |

*(Portfolio project images are managed separately via the Portfolio CMS — NOT part of Site Images.)*

### CONTACT PAGE — `src/app/(main)/contact/page.tsx` (2 images)

| # | Key | Section | Name | stockUrl | Size |
|---|-----|---------|------|----------|------|
| 1 | `contact-hero-bg` | Hero Background | Contact Hero | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |
| 2 | `contact-cta-bg` | CTA Background | Contact CTA | `https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80` | 1920×1080 |

### TOTALS: 35 images (Home: 14, Services: 7, About: 10, Portfolio: 2, Contact: 2)

---

## Files to Create / Modify

### 1. Type Definition Update
**File:** `src/lib/admin-data.ts`
Add the `SiteImage` interface (shown above) after the existing `PortfolioItem` interface.

### 2. Site Images Seed Data
**File:** `src/lib/site-images-seed.ts`

Contains the complete hardcoded registry of all 35 images and a function to seed them into Firestore on first load. Use the exact URLs from the registry above. Structure each entry as:

```typescript
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { db } from './firebase'

// Export the seed array so the admin page can reference it if needed
export const SEED_DATA = [
  // All 35 entries from the registry above
  // Each entry: { id, page, section, name, location, stockUrl, customUrl: '', customPath: '', recommendedSize, order }
]

export async function seedSiteImages() {
  const snapshot = await getDocs(collection(db, 'siteImages'))
  if (!snapshot.empty) return // already seeded

  const promises = SEED_DATA.map(item => {
    const { id, ...data } = item
    return setDoc(doc(db, 'siteImages', id), data)
  })
  await Promise.all(promises)
}
```

### 3. Site Image Hook (for public pages)
**File:** `src/hooks/use-site-images.ts`

```typescript
'use client'

import { useState, useEffect, useCallback } from 'react'
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { SiteImage } from '@/lib/admin-data'

export function useSiteImages(page: string) {
  const [images, setImages] = useState<Map<string, SiteImage>>(new Map())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'siteImages'),
      where('page', '==', page),
      orderBy('order', 'asc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const map = new Map<string, SiteImage>()
      snapshot.docs.forEach((doc) => {
        const data = doc.data()
        map.set(doc.id, {
          id: doc.id,
          page: data.page,
          section: data.section,
          name: data.name,
          location: data.location,
          stockUrl: data.stockUrl,
          customUrl: data.customUrl || '',
          customPath: data.customPath || '',
          recommendedSize: data.recommendedSize || '',
          order: data.order ?? 0,
        })
      })
      setImages(map)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [page])

  // Returns active URL: custom if set, otherwise stock. Returns '' if not yet loaded.
  const getImageUrl = useCallback((key: string): string => {
    const img = images.get(key)
    if (!img) return ''
    return img.customUrl || img.stockUrl
  }, [images])

  return { images, loading, getImageUrl }
}
```

### 4. Admin Site Images Page
**File:** `src/app/admin/site-images/page.tsx`

This is the main admin page. Must be `'use client'`.

**Reference the mockup HTML file for the exact visual design.** Here is the functional specification:

#### Layout (two-panel)
- **Left panel (flex-1):** Image management grid
- **Right panel (~420px, sticky):** Live preview iframe

#### Left Panel — Image Management

**Stats Row (4 cards):**
- Total Images — count of all siteImages docs
- Custom Uploads — count where customUrl !== ''
- Stock Images — count where customUrl === ''
- Pages — count of unique page values (5)

**Page Tabs:** Home, Services, About, Portfolio, Contact. Each filters images for that page. Show count per tab. Default to Home.

**Image Sections:** Group images by `section` field. Each section has a label header.

**Image Grid:** 2 columns for most; 1 column (full-width) for "Hero Background" and "CTA Background" and "Features Background" and "Capabilities Background" sections (since those are wide images).

Each image card:
- Thumbnail preview (h-28 for grid items, h-40 for full-width)
- Status badge: amber "Stock" or green "Custom"
- Image name, location breadcrumb, recommended size
- **Hover overlay** with Replace and Revert buttons

**Replace flow:**
1. Hidden `<input type="file" accept="image/jpeg,image/png,image/webp">` triggered by button click
2. Validate: JPG/PNG/WEBP, max 10MB
3. Show uploading spinner overlay on the card
4. Upload to Firebase Storage: `site-images/{imageKey}-{Date.now()}.{ext}`
5. Get download URL via `getDownloadURL()`
6. If previous custom image exists (customPath non-empty), delete old file from Storage first
7. Update Firestore doc: set customUrl and customPath
8. onSnapshot listener updates UI automatically

**Revert flow:**
1. Only enabled when customUrl is non-empty
2. Delete file from Storage using customPath
3. Update Firestore doc: clear customUrl and customPath to empty strings

**Header actions:**
- "Reset All to Stock" — batch revert all custom images for the active tab (with confirmation dialog)

#### Right Panel — Live Preview

- Browser chrome frame (three dots + URL bar)
- **Desktop / Mobile toggle**
- **Preview iframe** pointing to the matching public page:
  - Home → `<iframe src="/" />`
  - Services → `<iframe src="/services" />`
  - About → `<iframe src="/about" />`
  - Portfolio → `<iframe src="/portfolio" />`
  - Contact → `<iframe src="/contact" />`
- Scale iframe to fit:
  - Desktop: width 1280px, height 900px, transform scale(0.31), transform-origin top left
  - Mobile: width 390px, height 844px, transform scale(0.47), transform-origin top left
- Tip: "Changes update in real-time. The preview shows exactly what visitors see."

#### Firebase imports needed:
```typescript
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { storage, db } from '@/lib/firebase'
```

### 5. Update Admin Layout
**File:** `src/app/admin/layout.tsx`

Add site-images to the pageTitle logic:
```typescript
const pageTitle = pathname.includes('/site-images')
  ? 'Site Images'
  : pathname.includes('/portfolio')
    ? 'Portfolio Manager'
    : pathname.includes('/clients')
      ? 'Clients'
      : 'Quote Management'
```

### 6. Update Admin Sidebar
**File:** `src/components/admin/admin-sidebar.tsx`

- Remove the "Coming Soon" / "Soon" badge from Site Images
- Make it a working `<Link href="/admin/site-images">`
- Add active state highlighting when pathname includes '/site-images'

### 7. Update Public Pages to Use Dynamic Images

**Pattern for all replacements:**
```tsx
src={getImageUrl('image-key') || 'https://images.unsplash.com/original-hardcoded-url'}
```
The `||` fallback ensures the image shows even before Firestore loads.

#### HOME PAGE — `src/app/(main)/page.tsx`

The homepage is a **server component**. Extract image-heavy sections into client components (same pattern as the existing `<HomePortfolioSection />`):

**a) `src/components/home-hero-section.tsx`**
- `'use client'` with `useSiteImages('home')`
- Copy the full hero section JSX from page.tsx
- Replace 5 URLs: home-hero-bg, home-product-business-cards, home-product-brochures, home-product-packaging, home-product-banners

**b) `src/components/home-industries-section.tsx`**
- `'use client'` with `useSiteImages('home')`
- Copy the industries section JSX
- Replace 4 URLs: home-industry-healthcare, home-industry-hospitality, home-industry-education, home-industry-automotive
- Override each `industry.image` with `getImageUrl(key) || industry.image`

**c) `src/components/home-features-section.tsx`**
- `'use client'` with `useSiteImages('home')`
- Copy the features + quote form section JSX
- Replace 4 URLs: home-features-bg, home-facility-1, home-facility-2, home-facility-3

**d) `src/components/home-cta-section.tsx`**
- `'use client'` with `useSiteImages('home')`
- Copy the CTA section JSX
- Replace 1 URL: home-cta-bg

Then update `page.tsx` to use these components:
```tsx
import { HomeHeroSection } from '@/components/home-hero-section'
import { HomeIndustriesSection } from '@/components/home-industries-section'
import { HomeFeaturesSection } from '@/components/home-features-section'
import { HomeCTASection } from '@/components/home-cta-section'
import { HomePortfolioSection } from '@/components/home-portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      {/* Trust Bar — no images, keep inline */}
      <section className="py-8 bg-slate-50 ...">...</section>
      <HomeIndustriesSection />
      <HomePortfolioSection />
      <HomeFeaturesSection />
      <TestimonialsSection />
      <HomeCTASection />
    </div>
  )
}
```

#### SERVICES PAGE — `src/app/(main)/services/page.tsx`

Add `'use client'` at top and import hook. Replace 7 URLs.

For service categories, map service.id to image key:
```tsx
const serviceImageKeys: Record<string, string> = {
  commercial: 'services-commercial',
  packaging: 'services-packaging',
  'large-format': 'services-large-format',
  office: 'services-office',
}
// Override: getImageUrl(serviceImageKeys[service.id]) || service.image
```

#### ABOUT PAGE — `src/app/(main)/about/page.tsx`

Add `'use client'` at top and import hook. Replace 10 URLs.

For team photos:
```tsx
const teamKeys = ['about-team-kassa', 'about-team-marcel', 'about-team-estevan', 'about-team-joao']
// Override: getImageUrl(teamKeys[i]) || member.image
```

For facility images:
```tsx
const facilityKeys = ['about-facility-digital', 'about-facility-offset', 'about-facility-design', 'about-facility-finishing']
// Override: getImageUrl(facilityKeys[i]) || img.src
```

#### PORTFOLIO PAGE — `src/app/(main)/portfolio/page.tsx`

Already `'use client'`. Add hook, replace 2 URLs (hero bg + CTA bg).

#### CONTACT PAGE — `src/app/(main)/contact/page.tsx`

Already `'use client'`. Add hook, replace 2 URLs (hero bg + CTA bg).

---

## Firestore Index

The hook queries `where('page', '==', ...)` + `orderBy('order', 'asc')`. Firestore will auto-prompt for index creation. If needed:
- Collection: `siteImages`, Fields: `page` (Asc), `order` (Asc)

---

## Firebase Rules

### Firestore Rules (add alongside existing)
```
match /siteImages/{imageId} {
  allow read: if true;
  allow write: if request.auth != null;
}
```

### Storage Rules (add alongside existing portfolio rules)
```
match /site-images/{allPaths=**} {
  allow read: if true;
  allow write: if request.auth != null;
}
```

---

## Design Specifications

Match existing admin dashboard patterns (Quotes, Clients, Portfolio pages).

- **Primary:** cyan-500 for active states, buttons
- **Status badges:** amber-100/amber-700 for "Stock", emerald-100/emerald-700 for "Custom"
- **Cards:** white, slate-200 borders, rounded-xl
- **Hover:** border-cyan-400, shadow, overlay with action buttons
- **Stats cards:** same as Quotes page (white bg, colored icon circle, large number, label)
- **Page tabs:** pill-style (active = white bg + shadow, inactive = slate-100)

---

## Testing Checklist

1. ✅ Admin navigates to `/admin/site-images` from sidebar (no "Soon" badge)
2. ✅ Seed data auto-loads — all 35 images appear
3. ✅ Page tabs filter correctly (Home: 14, Services: 7, About: 10, Portfolio: 2, Contact: 2)
4. ✅ Images grouped by section with headers
5. ✅ Stock / Custom badges correct
6. ✅ Hover overlay shows Replace and Revert buttons
7. ✅ Replace: file picker → upload → Firestore updates → "Custom" badge appears
8. ✅ Revert: deletes from Storage → clears Firestore → falls back to stock
9. ✅ "Reset All to Stock" works with confirmation
10. ✅ Live preview iframe shows correct page and updates in real-time
11. ✅ Desktop / Mobile preview toggle works
12. ✅ Public homepage reflects replacement images immediately
13. ✅ All other public pages reflect replacements
14. ✅ Reverting restores original Unsplash image on public pages
15. ✅ Stats row numbers are accurate
16. ✅ No TypeScript or build errors

---

## File Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/lib/admin-data.ts` | ADD `SiteImage` interface |
| 2 | `src/lib/site-images-seed.ts` | CREATE — seed data with all 35 URLs |
| 3 | `src/hooks/use-site-images.ts` | CREATE — Firestore hook for public pages |
| 4 | `src/app/admin/site-images/page.tsx` | CREATE — full admin page (reference mockup) |
| 5 | `src/app/admin/layout.tsx` | UPDATE — add 'Site Images' to pageTitle logic |
| 6 | `src/components/admin/admin-sidebar.tsx` | UPDATE — enable Site Images link, remove "Soon" badge |
| 7 | `src/components/home-hero-section.tsx` | CREATE — client component (5 dynamic images) |
| 8 | `src/components/home-industries-section.tsx` | CREATE — client component (4 dynamic images) |
| 9 | `src/components/home-features-section.tsx` | CREATE — client component (4 dynamic images) |
| 10 | `src/components/home-cta-section.tsx` | CREATE — client component (1 dynamic image) |
| 11 | `src/app/(main)/page.tsx` | UPDATE — import new client components |
| 12 | `src/app/(main)/services/page.tsx` | UPDATE — add 'use client' + hook, replace 7 URLs |
| 13 | `src/app/(main)/about/page.tsx` | UPDATE — add 'use client' + hook, replace 10 URLs |
| 14 | `src/app/(main)/portfolio/page.tsx` | UPDATE — add hook, replace 2 URLs |
| 15 | `src/app/(main)/contact/page.tsx` | UPDATE — add hook, replace 2 URLs |

**Firebase Console (manual):** Firestore Rules + Storage Rules

---

## Implementation Priority

1. Add `SiteImage` type to `admin-data.ts`
2. Create `site-images-seed.ts` with all 35 entries (use exact URLs from registry above)
3. Create `use-site-images.ts` hook
4. Build admin page at `/admin/site-images` — get upload/revert working
5. Update admin sidebar + layout
6. Update public pages to use the hook (start with Homepage — most images)
7. Test full round-trip: upload on admin → see change on public page → revert → stock restored
