import type { Metadata } from 'next'

// ─────────────────────────────────────────────────────────────────────
// Keep in sync with FOUNDING_YEAR in src/app/layout.tsx.
// Confirm the real year with Estevan before shipping.
// ─────────────────────────────────────────────────────────────────────
const FOUNDING_YEAR = '2010'

export const metadata: Metadata = {
  // Root template appends " | Artistic Printing"
  title: `LA Print Shop Since ${FOUNDING_YEAR} | About Us`,
  description:
    `Family-owned commercial printer on Pico Boulevard in Los Angeles since ${FOUNDING_YEAR}. Trusted by hospitals, dental offices, restaurants, and dealerships across LA.`,
  openGraph: {
    title: `About Artistic Printing | LA Print Shop Since ${FOUNDING_YEAR}`,
    description:
      `Family-owned commercial printer on Pico Boulevard since ${FOUNDING_YEAR}. Serving healthcare, hospitality, education, and automotive clients across Los Angeles.`,
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}