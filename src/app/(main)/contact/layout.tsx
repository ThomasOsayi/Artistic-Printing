import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Root template appends " | Artistic Printing"
  title: 'Contact Us | 5878 W Pico Blvd, Los Angeles',
  description:
    'Call (323) 939-8911 or visit our Pico Blvd shop for a free print quote. Free pickup and delivery across Los Angeles. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Artistic Printing | Los Angeles',
    description:
      'Request a free printing quote. 5878 W Pico Blvd, Los Angeles. Call (323) 939-8911. Free local pickup and delivery.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}