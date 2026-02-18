'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { QuoteForm } from '@/components/quote-form'
import { useSiteImages } from '@/hooks/use-site-images'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  Clock,
  Truck,
  Star,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

const features = [
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most orders completed in 24-48 hours' },
  { icon: Truck, title: 'Free Delivery', desc: 'Complimentary pickup and delivery in LA' },
  { icon: Star, title: 'Quality Guaranteed', desc: '100% satisfaction or we reprint for free' },
  {
    icon: CheckCircle2,
    title: 'All On-Site',
    desc: 'Digital, offset, and large format under one roof',
  },
]

const facilityKeys = ['home-facility-1', 'home-facility-2', 'home-facility-3']
const facilityStockUrls = [
  'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=200&q=80',
]

export function HomeFeaturesSection() {
  const { getImageUrl } = useSiteImages('home')
  const revealRef = useScrollReveal()

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" ref={revealRef}>
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl('home-features-bg') || 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80'}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-900/90" />
      </div>
      {/* Animated glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-float-slower" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* FIXED: gap-8 on mobile, gap-16 on lg+ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Features */}
          <div>
            <Badge data-reveal className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
              Why Choose Us
            </Badge>
            <h2 data-reveal="delay-1" className="text-4xl lg:text-5xl font-bold text-white mb-6">
              LA&apos;s Most Trusted
              <br />
              <span className="text-cyan-400">Printing Partner</span>
            </h2>
            <p data-reveal="delay-2" className="text-slate-400 mb-10 text-lg leading-relaxed">
              15+ years of delivering quality, speed, and reliability to businesses across Los
              Angeles.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {features.map((feature, i) => (
                <div
                  key={i}
                  data-reveal
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FIXED: Facility image strip — smaller on mobile, flex-wrap to prevent overflow */}
            <div data-reveal="delay-5" className="mt-10 flex flex-wrap gap-2 sm:gap-3">
              {facilityKeys.map((key, i) => (
                <div
                  key={i}
                  className="w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getImageUrl(key) || facilityStockUrls[i]}
                    alt="Our facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <Link
                href="/about"
                className="w-16 h-12 sm:w-24 sm:h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-semibold cursor-pointer hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                Tour →
              </Link>
            </div>
          </div>

          {/* Right — Floating quote form */}
          <div data-reveal="from-right delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Get a Free Quote</h3>
                    <p className="text-sm text-slate-400">Response within 24 hours</p>
                  </div>
                </div>

                <QuoteForm variant="dark" />

                <p className="text-center text-xs text-slate-500 mt-4">
                  No spam, ever. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}