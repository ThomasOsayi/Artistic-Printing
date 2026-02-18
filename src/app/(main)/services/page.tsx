'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useSiteImages } from '@/hooks/use-site-images'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  FileText,
  Package,
  Printer,
  Building2,
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle2,
  Palette,
  Layers,
  Zap,
  Award,
  MessageSquare,
  FileCheck,
  Send,
} from 'lucide-react'

const services = [
  {
    id: 'commercial',
    icon: FileText,
    name: 'Commercial Printing',
    tagline: 'Professional print materials that make an impression',
    description: 'From business cards to booklets, we deliver crisp, professional printing on premium stocks with fast turnaround.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
    color: 'from-cyan-500 to-blue-600',
    lightColor: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Business Cards', desc: 'Premium cardstock, various finishes' },
      { name: 'Brochures & Flyers', desc: 'Tri-fold, bi-fold, custom sizes' },
      { name: 'Booklets & Catalogs', desc: 'Saddle-stitch, perfect bound' },
      { name: 'Postcards & Mailers', desc: 'Direct mail ready' },
    ],
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Custom Packaging',
    tagline: 'Branded packaging that elevates your product',
    description: 'Food-safe packaging, custom bags, and retail solutions that showcase your brand at every touchpoint.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-500 to-orange-600',
    lightColor: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Paper Bags', desc: 'Custom branded bags' },
      { name: 'Napkins & Coasters', desc: 'Restaurant essentials' },
      { name: 'Food Packaging', desc: 'Boxes, sleeves, wraps' },
      { name: 'Gift Card Holders', desc: 'Retail packaging' },
    ],
  },
  {
    id: 'large-format',
    icon: Printer,
    name: 'Large Format',
    tagline: 'Big visuals that demand attention',
    description: 'Indoor and outdoor signage, trade show graphics, and vehicle wraps printed on durable materials.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500 to-pink-600',
    lightColor: 'bg-purple-50 text-purple-700',
    items: [
      { name: 'Banners & Signs', desc: 'Indoor and outdoor' },
      { name: 'Posters', desc: 'Up to 44" wide' },
      { name: 'Trade Show Graphics', desc: 'Backdrops, stands' },
      { name: 'Vehicle Wraps', desc: 'Full or partial' },
    ],
  },
  {
    id: 'office',
    icon: Building2,
    name: 'Office & Forms',
    tagline: 'Essential business documents, professionally printed',
    description: 'Letterheads, NCR forms, labels, and notepads that keep your operations running smoothly.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    color: 'from-slate-600 to-slate-800',
    lightColor: 'bg-slate-100 text-slate-700',
    items: [
      { name: 'Letterheads', desc: 'Matching envelopes' },
      { name: 'NCR Forms', desc: 'Multi-part carbonless' },
      { name: 'Labels & Stickers', desc: 'Any size, any quantity' },
      { name: 'Notepads', desc: 'Custom branded' },
    ],
  },
]

const serviceImageKeys: Record<string, string> = {
  commercial: 'services-commercial',
  packaging: 'services-packaging',
  'large-format': 'services-large-format',
  office: 'services-office',
}

const capabilities = [
  { icon: Zap, name: 'High-Speed B&W Copies', desc: 'Volume printing' },
  { icon: Palette, name: 'Full-Color Copies', desc: 'Vibrant output' },
  { icon: Layers, name: 'Digital Printing', desc: 'Quick turnaround' },
  { icon: Printer, name: 'Offset Printing', desc: 'Large runs' },
  { icon: FileText, name: '1-4 Color Printing', desc: 'Spot colors' },
  { icon: Printer, name: 'Large Format', desc: 'Up to 44" wide' },
  { icon: Package, name: 'Bindery Services', desc: 'Finishing touches' },
  { icon: Award, name: 'Graphic Design', desc: 'In-house support' },
]

const process = [
  { step: 1, icon: MessageSquare, title: 'Consultation', desc: 'Tell us about your project needs and goals' },
  { step: 2, icon: FileCheck, title: 'Quote & Proof', desc: 'Receive pricing and approve your digital proof' },
  { step: 3, icon: Printer, title: 'Production', desc: 'We print using the best method for your job' },
  { step: 4, icon: Send, title: 'Delivery', desc: 'Free pickup or delivery anywhere in LA' },
]

function ServiceSection({
  service,
  index,
  imageUrl,
}: {
  service: (typeof services)[0]
  index: number
  imageUrl: string
}) {
  const isReversed = index % 2 === 1
  const Icon = service.icon
  const revealRef = useScrollReveal()

  return (
    <section className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`} ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIXED: gap-8 on mobile, gap-16 on lg+ */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image side */}
          <div className={`relative ${isReversed ? 'lg:order-2' : ''}`} data-reveal={isReversed ? 'from-right' : 'from-left'}>
            <div className={`absolute inset-0 bg-linear-to-br ${service.color} rounded-3xl transform ${isReversed ? 'rotate-3' : '-rotate-3'} opacity-20`} />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={service.name}
                className="w-full h-56 sm:h-72 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-linear-to-t ${service.color} opacity-20`} />
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                  <Icon className="w-5 h-5 text-slate-700" />
                  <span className="font-semibold text-slate-900 text-sm">{service.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <Badge data-reveal className={service.lightColor + ' mb-4'}>{service.tagline}</Badge>
            <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{service.name}</h2>
            <p data-reveal="delay-2" className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

            <div className="space-y-4">
              {service.items.map((item, i) => (
                <div
                  key={i}
                  data-reveal={`delay-${i + 2}`}
                  className="group/item flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-x-1"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover/item:text-cyan-600 transition-colors duration-300">
                        {item.name}
                      </div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover/item:text-cyan-500 group-hover/item:translate-x-1 transition-all duration-300 shrink-0" />
                </div>
              ))}
            </div>

            <Button
              asChild
              data-reveal="delay-6"
              className={`mt-8 bg-linear-to-r ${service.color} hover:opacity-90 text-white font-semibold h-12 px-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
            >
              <Link href="/contact">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const { getImageUrl } = useSiteImages('services')
  const [heroMounted, setHeroMounted] = useState(false)
  const capRef = useScrollReveal()
  const processRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  useEffect(() => {
    const t = setTimeout(() => setHeroMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('services-hero-bg') || 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${heroMounted ? 'opacity-30 scale-100' : 'opacity-0 scale-105'}`}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[80px] animate-float-slower" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge
              className={`bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6 transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Full-Service Printing
            </Badge>
            {/* FIXED: text-4xl on mobile */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.35s' }}
            >
              Our{' '}
              <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p
              className={`text-xl text-slate-300 leading-relaxed max-w-2xl transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              Full-service commercial printing with digital, offset, and large format
              capabilities—all under one roof. From concept to delivery in 24-48 hours.
            </p>

            <div
              className={`flex flex-wrap gap-8 mt-10 transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.65s' }}
            >
              {[
                { value: '24-48hr', label: 'Turnaround' },
                { value: '20+', label: 'Years Experience' },
                { value: 'Free', label: 'Estimates' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICE CATEGORIES ═══════════ */}
      {services.map((service, i) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={i}
          imageUrl={getImageUrl(serviceImageKeys[service.id]) || service.image}
        />
      ))}

      {/* ═══════════ CAPABILITIES ═══════════ */}
      <section className="py-20 bg-slate-900 relative overflow-hidden" ref={capRef}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('services-capabilities-bg') || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge data-reveal="fade" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-4">In-House Equipment</Badge>
            <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <p data-reveal="delay-2" className="text-slate-400 max-w-2xl mx-auto text-lg">
              State-of-the-art equipment and experienced technicians for any printing challenge.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  data-reveal="scale"
                  className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{cap.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="py-20 bg-white" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge data-reveal className="bg-purple-100 text-purple-700 mb-4">How It Works</Badge>
            <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple 4-Step Process</h2>
            <p data-reveal="delay-2" className="text-slate-600 max-w-2xl mx-auto text-lg">
              From initial consultation to final delivery, we make printing easy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 stagger-children">
            {process.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} data-reveal className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-linear-to-r from-cyan-500 to-transparent" />
                  )}
                  <div className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4 sm:mt-6 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('services-cta-bg') || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-cyan-600/90 to-cyan-500/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white mb-4">Don&apos;t See What You Need?</h2>
          <p data-reveal="delay-1" className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            We handle custom projects of all kinds. If you can imagine it, we can print it.
          </p>
          <div data-reveal="delay-2" className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold h-14 px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <Link href="/contact">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8 transition-all duration-300 hover:-translate-y-0.5">
              <a href="tel:323-939-8911"><Phone className="w-4 h-4 mr-2" /> (323) 939-8911</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}