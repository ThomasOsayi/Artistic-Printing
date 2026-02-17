'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useSiteImages } from '@/hooks/use-site-images'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ArrowRight, Phone } from 'lucide-react'

export function HomeCTASection() {
  const { getImageUrl } = useSiteImages('home')
  const revealRef = useScrollReveal()

  return (
    <section className="py-24 relative overflow-hidden" ref={revealRef}>
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl('home-cta-bg') || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-cyan-500/90" />
      </div>
      {/* Animated decorative orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl animate-float-slower" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Badge data-reveal="fade" className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm">
          Start Your Project
        </Badge>
        <h2 data-reveal="delay-1" className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p data-reveal="delay-2" className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Get a free quote within 24 hours. No job is too large or too small. From 100 business
          cards to 100,000 hospital forms.
        </p>
        <div data-reveal="delay-3" className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold h-14 px-8 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="tel:323-939-8911">
              <Phone className="w-4 h-4 mr-2" />
              (323) 939-8911
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}