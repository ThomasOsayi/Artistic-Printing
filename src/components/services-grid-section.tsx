'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Badge } from '@/components/ui/badge'
import {
  CreditCard, BookOpen, Image as ImageIcon, Megaphone, Printer,
  ArrowRight, type LucideIcon,
} from 'lucide-react'

// ─── Service landing pages (Phase 2) ────────────────────────────────────
// Hardcoded rather than fetched from Firestore: this list changes only
// when a new service page ships, and hardcoding keeps /services fully
// static with no client-side round trip. Add an entry here whenever a
// new `type: 'service'` page is published.
interface ServiceLink {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  accent: string   // full literal classes so Tailwind JIT keeps them
  iconBg: string
}

const SERVICE_LINKS: ServiceLink[] = [
  {
    slug: 'business-card-printing-los-angeles',
    name: 'Business Cards',
    description: 'Premium stocks from 16pt to 32pt with spot UV, foil, and soft-touch finishing.',
    icon: CreditCard,
    accent: 'group-hover:border-cyan-300',
    iconBg: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500',
  },
  {
    slug: 'brochure-printing-los-angeles',
    name: 'Brochures',
    description: 'Tri-fold, bi-fold, and bound booklets scored and folded in our own shop.',
    icon: BookOpen,
    accent: 'group-hover:border-purple-300',
    iconBg: 'bg-purple-100 text-purple-600 group-hover:bg-purple-500',
  },
  {
    slug: 'flyer-printing-los-angeles',
    name: 'Flyers',
    description: 'Full-color runs from 100 to 50,000, with same-day rush and direct mail.',
    icon: ImageIcon,
    accent: 'group-hover:border-amber-300',
    iconBg: 'bg-amber-100 text-amber-600 group-hover:bg-amber-500',
  },
  {
    slug: 'banner-printing-los-angeles',
    name: 'Banners',
    description: 'Vinyl, mesh, and retractable displays finished with hemming and grommets.',
    icon: Megaphone,
    accent: 'group-hover:border-emerald-300',
    iconBg: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500',
  },
  {
    slug: 'large-format-printing-los-angeles',
    name: 'Large Format',
    description: 'Posters, window graphics, wall murals, vehicle wraps, and ADA signage.',
    icon: Printer,
    accent: 'group-hover:border-pink-300',
    iconBg: 'bg-pink-100 text-pink-600 group-hover:bg-pink-500',
  },
]

export function ServicesGridSection() {
  const sectionRef = useScrollReveal()

  return (
    <section className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge data-reveal className="bg-cyan-100 text-cyan-700 mb-4">
            Printing Services
          </Badge>
          <h2
            data-reveal="delay-1"
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            What we print for Los Angeles businesses
          </h2>
          <p data-reveal="delay-2" className="text-slate-600 max-w-2xl mx-auto">
            Every service below is produced in our Pico Blvd shop, with free pickup
            and delivery anywhere in LA County.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICE_LINKS.map((service) => {
            const ServiceIcon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                data-reveal="scale"
                className={`group bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${service.accent}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${service.iconBg}`}
                >
                  <ServiceIcon className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}

          {/* Sixth cell: catch-all for services without a landing page yet */}
          <Link
            href="/contact"
            data-reveal="scale"
            className="group bg-slate-900 rounded-2xl p-7 border border-slate-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center text-center"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Something else?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              Carbonless forms, notepads, presentation folders, envelopes, postcards
              and more. If it prints, ask us.
            </p>
            <span className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Request a quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}