import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Family-Owned Printer Since 2005 — Artistic Printing Co.',
  description: 'Family-owned and operated on Pico Boulevard since 2005. Meet our team, tour our facility, and learn why 500+ LA businesses trust Artistic Printing.',
  openGraph: {
    title: 'About Artistic Printing Co.',
    description: 'Family-owned commercial printer on Pico Boulevard since 2005. Serving 500+ businesses across Los Angeles.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
