import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Root template appends " | Artistic Printing"
  title: 'Print Portfolio | Healthcare, Restaurant & Dealership Work in LA',
  description:
    'See real print work for LA hospitals, dental offices, hospices, restaurants, and auto dealerships. Forms, brochures, menus, folders, and banners. Request a free quote.',
  openGraph: {
    title: 'Print Portfolio | Artistic Printing',
    description:
      'Print work for Los Angeles hospitals, dental offices, restaurants, and dealerships. Forms, brochures, menus, and large format.',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}