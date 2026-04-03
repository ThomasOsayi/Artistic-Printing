import type { Metadata } from 'next'
import { HomeHeroSection } from '@/components/home-hero-section'
import { HomeIndustriesSection } from '@/components/home-industries-section'
import { HomeFeaturesSection } from '@/components/home-features-section'
import { HomeCTASection } from '@/components/home-cta-section'
import { HomePortfolioSection } from '@/components/home-portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustBar } from '@/components/trust-bar'

export const metadata: Metadata = {
  title: 'Artistic Printing Co. | Commercial Printing in Los Angeles',
  description: 'Full-service commercial printing in Los Angeles. Business cards, custom packaging, banners, brochures, and large format printing with 24-48 hour turnaround. Request a free quote.',
  openGraph: {
    title: 'Artistic Printing Co. | Commercial Printing in Los Angeles',
    description: 'Full-service commercial printing in Los Angeles. Business cards, custom packaging, banners, and large format printing with 24-48 hour turnaround.',
  },
}

export default function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <TrustBar />
      <HomeIndustriesSection />
      <HomePortfolioSection />
      <HomeFeaturesSection />
      <TestimonialsSection />
      <HomeCTASection />
    </div>
  )
}