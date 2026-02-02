"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Car,
  Building2,
  UtensilsCrossed,
  Radio,
  ArrowRight,
  Phone,
  Eye,
  Filter,
  Grid3X3,
  LayoutGrid,
  Trophy,
  Users,
  Calendar,
  ThumbsUp,
} from 'lucide-react'

/* ─── PROJECT DATA ─── */
const projects = [
  {
    id: 1,
    client: 'Kaiser Permanente',
    industry: 'Healthcare',
    type: 'Patient Forms & Signage',
    description:
      'Complete print package including intake forms, wayfinding signage, and patient education brochures.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-500',
  },
  {
    id: 2,
    client: 'Jim Falk Lexus',
    industry: 'Automotive',
    type: 'Sales Brochures & Signage',
    description:
      'Premium dealership materials including vehicle brochures, showroom banners, and promotional flyers.',
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
    color: 'bg-slate-700',
  },
  {
    id: 3,
    client: 'Beverly Hills Café',
    industry: 'Hospitality',
    type: 'Menus & Packaging',
    description:
      'Custom menus, branded napkins, takeout packaging, and table tents for upscale dining experience.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    color: 'bg-amber-500',
  },
  {
    id: 4,
    client: 'Vista Hospital',
    industry: 'Healthcare',
    type: 'Patient Materials',
    description:
      'Hospital-wide print materials including directories, patient guides, and departmental signage.',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-500',
  },
  {
    id: 5,
    client: 'Broadway Federal Bank',
    industry: 'Finance',
    type: 'Marketing Collateral',
    description:
      'Professional banking materials including brochures, rate sheets, and promotional displays.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    color: 'bg-blue-600',
  },
  {
    id: 6,
    client: 'K-Earth 101 FM',
    industry: 'Media',
    type: 'Event Materials & Promos',
    description:
      'Radio station promotional materials, event banners, bumper stickers, and concert flyers.',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-500',
  },
  {
    id: 7,
    client: 'Toyota Hollywood',
    industry: 'Automotive',
    type: 'Dealership Package',
    description:
      'Full dealership print suite including window stickers, service forms, and showroom graphics.',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    color: 'bg-slate-700',
  },
  {
    id: 8,
    client: 'LABioMed',
    industry: 'Healthcare',
    type: 'Research Publications',
    description:
      'Scientific publications, research posters, conference materials, and institutional brochures.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-500',
  },
  {
    id: 9,
    client: 'Promise Hospital',
    industry: 'Healthcare',
    type: 'Facility Signage',
    description:
      'Complete wayfinding system, department signs, and patient communication materials.',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-500',
  },
  {
    id: 10,
    client: 'United Independent Taxi',
    industry: 'Automotive',
    type: 'Fleet Graphics & Forms',
    description: 'Vehicle wraps, driver ID cards, receipt books, and dispatch forms.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    color: 'bg-slate-700',
  },
  {
    id: 11,
    client: 'EMI Music',
    industry: 'Media',
    type: 'Album Packaging',
    description:
      'CD packaging, promotional posters, press kits, and concert merchandise.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-500',
  },
  {
    id: 12,
    client: 'Alta Los Angeles Hospitals',
    industry: 'Healthcare',
    type: 'System-Wide Materials',
    description:
      'Multi-facility print program including branded materials across all hospital locations.',
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    color: 'bg-rose-500',
  },
]

const industries = [
  { id: 'all', name: 'All Projects', icon: Grid3X3, count: projects.length },
  {
    id: 'Healthcare',
    name: 'Healthcare',
    icon: Heart,
    count: projects.filter((p) => p.industry === 'Healthcare').length,
  },
  {
    id: 'Automotive',
    name: 'Automotive',
    icon: Car,
    count: projects.filter((p) => p.industry === 'Automotive').length,
  },
  {
    id: 'Hospitality',
    name: 'Hospitality',
    icon: UtensilsCrossed,
    count: projects.filter((p) => p.industry === 'Hospitality').length,
  },
  {
    id: 'Finance',
    name: 'Finance',
    icon: Building2,
    count: projects.filter((p) => p.industry === 'Finance').length,
  },
  {
    id: 'Media',
    name: 'Media',
    icon: Radio,
    count: projects.filter((p) => p.industry === 'Media').length,
  },
]

const stats = [
  { icon: Trophy, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' },
]

const clientNames = [
  'Kaiser Permanente',
  'K-Earth 101 FM',
  'Vista Hospital',
  'Jim Falk Lexus',
  'EMI Music',
  'Promise Hospital',
  'Toyota Hollywood',
  'Beverly Hills Café',
  'LABioMed',
  'Broadway Federal Bank',
  'United Independent Taxi',
  'Alta Los Angeles Hospitals',
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.industry === activeFilter)

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6">
              Our Work
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Browse our portfolio of work across healthcare, hospitality, automotive, and
              more. Every project showcases our commitment to quality and attention to
              detail.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FILTER BAR — Sticky below nav
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium flex-shrink-0">
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            <div className="flex gap-2">
              {industries.map((ind) => {
                const Icon = ind.icon
                const isActive = activeFilter === ind.id
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveFilter(ind.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {ind.name}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-200'}`}
                    >
                      {ind.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROJECT GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Industry badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${project.color} text-white shadow-lg`}>
                      {project.industry}
                    </Badge>
                  </div>

                  {/* Hover overlay content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* View button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-1">{project.type}</div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {project.client}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <LayoutGrid className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                No projects found
              </h3>
              <p className="text-slate-500">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CLIENTS MARQUEE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl font-bold text-white">
              Clients We&apos;ve Worked With
            </h2>
          </div>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

          <div className="flex gap-8 animate-scroll">
            {[...clientNames, ...clientNames].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-white font-medium whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-cyan-500/90" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of LA businesses who trust us with their printing needs. Get a
            free quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold h-14 px-8"
            >
              <Link href="/contact">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8"
            >
              <a href="tel:323-939-8911">
                <Phone className="w-4 h-4 mr-2" /> (323) 939-8911
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}