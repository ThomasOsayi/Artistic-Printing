import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistic Printing Company | Commercial Printing in Los Angeles',
  description:
    'LA\'s trusted commercial printing partner for healthcare, hospitality, education, and automotive industries. Business cards, brochures, packaging, large format printing and more.',
  keywords: [
    'commercial printing',
    'Los Angeles printing',
    'business cards LA',
    'brochure printing',
    'custom packaging',
    'healthcare printing',
    'restaurant menus',
  ],
  openGraph: {
    title: 'Artistic Printing Company | Commercial Printing in Los Angeles',
    description:
      'Premium commercial printing for healthcare, hospitality, education & automotive industries. Quality you can count on, delivered on time.',
    url: 'https://artisticprinting.com',
    siteName: 'Artistic Printing Company',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
