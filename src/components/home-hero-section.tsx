'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useSiteImages } from '@/hooks/use-site-images'
import {
  ArrowRight,
  Sparkles,
  Play,
  Check,
} from 'lucide-react'

export function HomeHeroSection() {
  const { getImageUrl } = useSiteImages('home')

  return (
    <section className="relative min-h-[90vh] bg-slate-900 text-white overflow-hidden">
      {/* Real background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl('home-hero-bg') || 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1920&q=80'}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Trusted by 500+ LA businesses</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Where Ideas
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Become Print
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Premium commercial printing for healthcare, hospitality & more. From concept to
              delivery in 24-48 hours.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 h-14 text-base"
              >
                <Link href="/contact">
                  Get Your Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/15 h-14 px-8 text-base backdrop-blur-sm"
              >
                <Link href="/portfolio">
                  <Play className="w-4 h-4 mr-2" />
                  See Our Work
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                Free LA Delivery
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                24hr Turnaround
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                100% Satisfaction
              </div>
            </div>
          </div>

          {/* Right side — Floating product cards with real images */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[540px]">
              {/* Business cards */}
              <div className="absolute top-0 left-4 w-72 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 transform rotate-[-6deg] hover:rotate-[-2deg] transition-all duration-500 cursor-pointer hover:shadow-cyan-500/40 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl('home-product-business-cards') || 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=80'}
                  alt="Business cards"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">Business Cards</div>
                      <div className="text-slate-500 text-xs">Premium Matte Finish</div>
                    </div>
                    <Badge className="bg-cyan-100 text-cyan-700 text-xs">500 qty</Badge>
                  </div>
                </div>
              </div>

              {/* Brochures */}
              <div className="absolute top-16 right-0 w-60 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 transform rotate-[5deg] hover:rotate-[1deg] transition-all duration-500 cursor-pointer hover:shadow-purple-500/40 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl('home-product-brochures') || 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80'}
                  alt="Brochures"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4">
                  <div className="font-semibold text-white text-sm">Tri-Fold Brochures</div>
                  <div className="text-cyan-100 text-xs">Glossy finish • 1000 qty</div>
                </div>
              </div>

              {/* Packaging */}
              <div className="absolute bottom-20 left-0 w-56 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform rotate-[3deg] hover:rotate-[-1deg] transition-all duration-500 cursor-pointer hover:shadow-orange-500/40 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl('home-product-packaging') || 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80'}
                  alt="Custom packaging"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4">
                  <div className="font-semibold text-white text-sm">Custom Packaging</div>
                  <div className="text-amber-100 text-xs">Food-safe materials</div>
                </div>
              </div>

              {/* Banners */}
              <div className="absolute bottom-0 right-6 w-48 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20 transform rotate-[-4deg] hover:rotate-[0deg] transition-all duration-500 cursor-pointer hover:shadow-pink-500/40 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl('home-product-banners') || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80'}
                  alt="Large format banners"
                  className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                  <div className="font-semibold text-white text-sm">Banners & Signs</div>
                  <div className="text-purple-100 text-xs">Large format</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
