import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://www.artisticprinting.com'

// ─────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — confirm with Estevan, then change here only.
// Appears in: root description, LocalBusiness schema, About page copy.
// If 1995 is correct, that is 30+ years and a major authority signal.
// ─────────────────────────────────────────────────────────────────────
const FOUNDING_YEAR = '2010'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Homepage title. Targets "commercial printing company" (pos 8.4)
    // and "commercial printing" (pos 10.8) with the LA modifier added.
    default: 'Commercial Printing Company Los Angeles | Artistic Printing',
    // Short suffix preserves character budget for child page titles.
    template: '%s | Artistic Printing',
  },
  description:
    `Family-owned Los Angeles commercial printer since ${FOUNDING_YEAR}. Healthcare and dental forms, NCR carbonless, business cards, banners. Free LA pickup and delivery.`,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Commercial Printing Company in Los Angeles | Artistic Printing',
    description:
      `Healthcare forms, NCR carbonless, packaging, and large format printing in Los Angeles. Family-owned since ${FOUNDING_YEAR}. Free local pickup and delivery.`,
    url: SITE_URL,
    siteName: 'Artistic Printing Co.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Artistic Printing Company',
      alternateName: 'Artistic Printing Co.',
      description:
        `Commercial printing, custom healthcare and dental forms, NCR carbonless forms, packaging, and large format printing in Los Angeles. Serving hospitals, clinics, hospices, home health agencies, dental offices, restaurants, dealerships, and schools since ${FOUNDING_YEAR}.`,
      url: SITE_URL,
      telephone: '+1-323-939-8911',
      email: 'design@artisticprinting.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5878 West Pico Boulevard',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        postalCode: '90019',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.0481,
        longitude: -118.3626,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      foundingDate: FOUNDING_YEAR,
      areaServed: [
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
      ],
      // Expanded to include the exact service terms currently earning
      // impressions in Search Console but with no dedicated page yet.
      serviceType: [
        'Commercial Printing',
        'Custom Healthcare Forms',
        'Medical Forms Printing',
        'Dental Forms Printing',
        'NCR Carbonless Forms',
        'Consent Forms',
        'Statement Printing and Mailing',
        'Custom Packaging',
        'Large Format Printing',
        'Business Cards',
        'Brochures',
        'Restaurant Menu Printing',
        'Banners and Signage',
        'Presentation Folders',
        'Envelopes and Letterhead',
      ],
      // Reinforces topical authority in the healthcare vertical, which is
      // the strongest real specialization and the clearest path to ranking.
      knowsAbout: [
        'HIPAA-aware print production',
        'Patient intake forms',
        'Carbonless multi-part forms',
        'Skilled nursing facility forms',
        'Hospice and home health documentation',
      ],
      priceRange: '$$',
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/logo-header.png`,
      founder: { '@id': `${SITE_URL}/#estevan` },
      // ───────────────────────────────────────────────────────────────
      // TODO — populate as each profile goes live. This array is how
      // Google corroborates that the business is real. Empty = no
      // corroboration. Add in this order as they become available:
      //   1. Google Business Profile URL   (highest value)
      //   2. Yelp listing
      //   3. BBB listing
      //   4. LinkedIn / Facebook company page
      // ───────────────────────────────────────────────────────────────
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Artistic Printing Co.',
      description:
        'Commercial printing services in Los Angeles. Healthcare and dental forms, NCR carbonless, packaging, business cards, and large format.',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
    },
    {
      // ───────────────────────────────────────────────────────────────
      // TODO — a real owner entity is a genuine E-E-A-T signal for a
      // local business. Ask Estevan for: full name, a one-line bio, and
      // a LinkedIn URL (goes in sameAs). Until then this stays minimal.
      // ───────────────────────────────────────────────────────────────
      '@type': 'Person',
      '@id': `${SITE_URL}/#estevan`,
      name: 'Estevan',
      jobTitle: 'Owner',
      worksFor: { '@id': `${SITE_URL}/#business` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Artistic Printing Co." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-R91VBXEWDG" />
      </body>
    </html>
  )
}