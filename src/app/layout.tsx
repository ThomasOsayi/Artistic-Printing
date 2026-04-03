import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artisticprinting.com'),
  title: 'Artistic Printing Co. | Commercial Printing in Los Angeles',
  description: 'Trusted by LA businesses since 2005 for commercial printing, custom packaging, and large format printing. Request a free quote today.',
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
    description: 'Commercial Printing • Custom Packaging • Large Format — Los Angeles',
    url: 'https://www.artisticprinting.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.artisticprinting.com',
  name: 'Artistic Printing Company',
  description: 'Commercial printing, custom packaging, and large format printing services in Los Angeles. Serving healthcare, hospitality, education, and automotive industries since 2010.',
  url: 'https://www.artisticprinting.com',
  telephone: '+1-323-939-8911',
  email: 'info@artisticprinting.com',
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
  areaServed: {
    '@type': 'City',
    name: 'Los Angeles',
  },
  serviceType: [
    'Commercial Printing',
    'Custom Packaging',
    'Large Format Printing',
    'Business Cards',
    'Brochures',
    'Banners',
    'Vehicle Wraps',
  ],
  priceRange: '$$',
  sameAs: [],
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
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-R91VBXEWDG" />
      </body>
    </html>
  )
}