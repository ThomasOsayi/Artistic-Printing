import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Root template appends " | Artistic Printing"
  // Targets "printing services in los angeles" and "custom printing
  // services in los angeles" (both showing impressions, no page owns them).
  title: 'Printing Services in Los Angeles | Digital, Offset & Large Format',
  description:
    'Digital, offset, and large format printing under one roof in LA. Healthcare forms, NCR carbonless, business cards, brochures, banners. Most orders in 24 to 48 hours.',
  openGraph: {
    title: 'Printing Services in Los Angeles | Artistic Printing',
    description:
      'Digital, offset, and large format printing in Los Angeles. Forms, brochures, folders, banners. Free local pickup and delivery, 24 to 48 hour turnaround.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}