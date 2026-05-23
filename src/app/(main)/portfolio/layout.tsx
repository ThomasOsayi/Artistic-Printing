import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Print Portfolio',
  description:
    'Browse printing projects for healthcare, hospitality, automotive, and education clients in Los Angeles. Business cards, packaging, banners, and more.',
  openGraph: {
    title: 'Print Portfolio — Artistic Printing Co.',
    description:
      'Browse printing projects for healthcare, hospitality, automotive, and education clients across Los Angeles.',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}