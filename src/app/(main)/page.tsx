import { HomeHeroSection } from '@/components/home-hero-section'
import { HomeIndustriesSection } from '@/components/home-industries-section'
import { HomeFeaturesSection } from '@/components/home-features-section'
import { HomeCTASection } from '@/components/home-cta-section'
import { HomePortfolioSection } from '@/components/home-portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import {
  Heart,
  Car,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Shield,
} from 'lucide-react'

const clients = [
  { name: 'Kaiser Permanente', icon: Heart },
  { name: 'Toyota', icon: Car },
  { name: 'LABioMed', icon: Heart },
  { name: 'Vista Hospital', icon: Heart },
  { name: 'Broadway Federal Bank', icon: Building2 },
  { name: 'Jim Falk Lexus', icon: Car },
  { name: 'Beverly Hills Café', icon: UtensilsCrossed },
  { name: 'UCLA Extension', icon: GraduationCap },
  { name: 'Cedars-Sinai', icon: Heart },
  { name: 'Honda of Downtown LA', icon: Car },
]

export default function HomePage() {
  return (
    <div>
      <HomeHeroSection />

      {/* ═══════════════════════════════════════════════════════════
          TRUST BAR — Auto-scrolling client carousel (no images)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Shield className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-500">
              Trusted by 500+ LA businesses
            </span>
          </div>

          <div className="relative group">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-scroll group-hover:[animation-play-state:paused]">
                {[...clients, ...clients].map((client, i) => {
                  const Icon = client.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeIndustriesSection />
      <HomePortfolioSection />
      <HomeFeaturesSection />
      <TestimonialsSection />
      <HomeCTASection />
    </div>
  )
}
