import { HomeHeroSection } from '@/components/home-hero-section'
import { HomeIndustriesSection } from '@/components/home-industries-section'
import { HomeFeaturesSection } from '@/components/home-features-section'
import { HomeCTASection } from '@/components/home-cta-section'
import { HomePortfolioSection } from '@/components/home-portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustBar } from '@/components/trust-bar'

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
