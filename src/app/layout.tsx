import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://www.artisticprinting.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Artistic Printing Co. | Commercial Printing in Los Angeles',
    template: '%s — Artistic Printing Co.',
  },
  description:
    'Commercial printing in Los Angeles since 2010. Custom healthcare forms, business cards, packaging, and large format banners. Free quotes within 24 hours.',
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
    title: 'Artistic Printing Co.',
    description:
      'Commercial Printing • Custom Packaging • Large Format — Los Angeles',
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
        'Commercial printing, custom healthcare forms, packaging, and large format printing in Los Angeles. Serving healthcare, hospitality, education, and automotive industries since 2010.',
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
      foundingDate: '2010',
      areaServed: [
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
      ],
      serviceType: [
        'Commercial Printing',
        'Custom Healthcare Forms',
        'Medical Forms',
        'Dental Forms',
        'Custom Packaging',
        'Large Format Printing',
        'Business Cards',
        'Brochures',
        'Banners',
        'Vehicle Wraps',
      ],
      priceRange: '$$',
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/logo-header.png`,
      founder: { '@id': `${SITE_URL}/#estevan` },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Artistic Printing Co.',
      description:
        'Commercial printing services in Los Angeles. Healthcare forms, packaging, business cards, and large format.',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
    },
    {
      // PLACEHOLDER — fill in image, sameAs (LinkedIn), and description when available
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