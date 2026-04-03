import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Printing Services | Business Cards, Packaging, Banners — Artistic Printing Co.',
  description: 'Commercial printing, custom packaging, large format banners, and office forms in Los Angeles. Digital and offset printing with in-house design support. Free estimates.',
  openGraph: {
    title: 'Printing Services — Artistic Printing Co.',
    description: 'Commercial printing, custom packaging, large format, and office forms in Los Angeles. Free estimates and 24-48 hour turnaround.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
