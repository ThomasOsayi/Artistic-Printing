'use client'

import { Badge } from '@/components/ui/badge'
import { useSiteImages } from '@/hooks/use-site-images'
import {
  Heart,
  UtensilsCrossed,
  GraduationCap,
  Car,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'

const industries = [
  {
    key: 'home-industry-healthcare',
    icon: Heart,
    name: 'Healthcare',
    desc: 'Patient forms, signage, brochures',
    stats: '200+ clients',
    color: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    items: ['Patient intake forms', 'Hospital signage', 'Medical brochures', 'Prescription pads'],
  },
  {
    key: 'home-industry-hospitality',
    icon: UtensilsCrossed,
    name: 'Hospitality',
    desc: 'Menus, napkins, packaging',
    stats: '150+ clients',
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    items: ['Restaurant menus', 'Custom napkins', 'Takeout packaging', 'Table tents'],
  },
  {
    key: 'home-industry-education',
    icon: GraduationCap,
    name: 'Education',
    desc: 'Flyers, handbooks, materials',
    stats: '100+ clients',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    items: ['Course catalogs', 'Event flyers', 'Student handbooks', 'Certificates'],
  },
  {
    key: 'home-industry-automotive',
    icon: Car,
    name: 'Automotive',
    desc: 'Brochures, forms, signage',
    stats: '75+ clients',
    color: 'from-slate-600 to-slate-800',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80',
    items: ['Sales brochures', 'Service forms', 'Showroom signage', 'Promotional materials'],
  },
]

export function HomeIndustriesSection() {
  const { getImageUrl } = useSiteImages('home')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-cyan-100 text-cyan-700 mb-4">Specialized Expertise</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Deep experience across sectors that demand precision, compliance, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getImageUrl(industry.key) || industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />
              {/* Color overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{industry.name}</h3>
                <p className="text-white/70 mb-3 text-sm">{industry.desc}</p>

                {/* Expanded on hover */}
                <div className="space-y-1.5 overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  {industry.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-white/90 text-sm">
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
                  <span className="text-sm font-medium text-white/60">{industry.stats}</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
