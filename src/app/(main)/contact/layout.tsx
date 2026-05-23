import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Free Print Quote',
  description:
    'Request a free printing quote from Artistic Printing Co. in Los Angeles. Visit us at 5878 W Pico Blvd or call (323) 939-8911. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Artistic Printing Co.',
    description:
      'Request a free printing quote. Visit us at 5878 W Pico Blvd, Los Angeles, or call (323) 939-8911.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}