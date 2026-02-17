'use client'

import { useState, useEffect, useMemo } from 'react'
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useSiteImages } from '@/hooks/use-site-images'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { PortfolioItem } from '@/lib/admin-data'
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
  GraduationCap,
  ShoppingBag,
  Loader2,
  type LucideIcon,
} from 'lucide-react'

/* ─── INDUSTRY ICON MAP ─── */
const industryIcons: Record<string, LucideIcon> = {
  Healthcare: Heart,
  Automotive: Car,
  Hospitality: UtensilsCrossed,
  Finance: Building2,
  Media: Radio,
  Education: GraduationCap,
  Retail: ShoppingBag,
}

const industryColors: Record<string, string> = {
  Healthcare: 'bg-rose-500',
  Automotive: 'bg-slate-700',
  Hospitality: 'bg-amber-500',
  Finance: 'bg-blue-600',
  Media: 'bg-purple-500',
  Education: 'bg-cyan-600',
  Retail: 'bg-pink-500',
}

const stats = [
  { icon: Trophy, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' },
]

export default function PortfolioPage() {
  const { getImageUrl } = useSiteImages('portfolio')
  const [projects, setProjects] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [heroMounted, setHeroMounted] = useState(false)
  const statsRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  useEffect(() => {
    const t = setTimeout(() => setHeroMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const q = query(
      collection(db, 'portfolio'),
      where('visible', '==', true),
      orderBy('order', 'asc')
    )
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => {
        const d = docSnap.data()
        return {
          id: docSnap.id,
          client: d.client || '',
          industry: d.industry || '',
          type: d.type || '',
          description: d.description || '',
          imageUrl: d.imageUrl || '',
          imagePath: d.imagePath || '',
          featured: d.featured ?? false,
          visible: d.visible ?? true,
          order: d.order ?? 999,
        } as PortfolioItem
      })
      setProjects(data)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const industries = useMemo(() => {
    const counts: Record<string, number> = {}
    projects.forEach((p) => { counts[p.industry] = (counts[p.industry] || 0) + 1 })
    const tabs: { id: string; name: string; icon: LucideIcon; count: number }[] = [
      { id: 'all', name: 'All Projects', icon: Grid3X3, count: projects.length },
    ]
    Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([ind, count]) => {
        tabs.push({ id: ind, name: ind, icon: industryIcons[ind] || Grid3X3, count })
      })
    return tabs
  }, [projects])

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.industry === activeFilter)

  const clientNames = useMemo(() => [...new Set(projects.map((p) => p.client))], [projects])

  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('portfolio-hero-bg') || 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${heroMounted ? 'opacity-30 scale-100' : 'opacity-0 scale-105'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px] animate-float-slower" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge
              className={`bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6 transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Our Work
            </Badge>
            <h1
              className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.35s' }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p
              className={`text-xl text-slate-300 leading-relaxed max-w-2xl transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              Browse our portfolio of work across healthcare, hospitality, automotive, and
              more. Every project showcases our commitment to quality and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FILTER BAR ═══════════ */}
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
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-[1.02]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {ind.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-200'}`}>
                      {ind.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECT GRID ═══════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
              <span className="ml-2 text-slate-500 text-sm">Loading portfolio...</span>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, i) => (
                  <div
                    key={project.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
                    style={{
                      animation: 'count-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      animationDelay: `${i * 0.06}s`,
                      opacity: 0,
                    }}
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      {project.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.imageUrl}
                          alt={project.client}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <LayoutGrid className="w-12 h-12 text-slate-200" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${industryColors[project.industry] || 'bg-slate-600'} text-white shadow-lg`}>
                          {project.industry}
                        </Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <Trophy className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Eye className="w-5 h-5 text-slate-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-slate-500 mb-1">{project.type}</div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {project.client}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <LayoutGrid className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">No projects found</h3>
                  <p className="text-slate-500">Try selecting a different filter</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="py-16 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} data-reveal="scale" className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-500">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CLIENTS MARQUEE ═══════════ */}
      {clientNames.length > 0 && (
        <section className="py-16 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <div className="text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Trusted Partners</Badge>
              <h2 className="text-3xl font-bold text-white">Clients We&apos;ve Worked With</h2>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
            <div className="flex gap-8 animate-scroll">
              {[...clientNames, ...clientNames].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-8 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="text-white font-medium whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('portfolio-cta-bg') || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-cyan-500/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 data-reveal className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p data-reveal="delay-1" className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of LA businesses who trust us with their printing needs. Get a free quote today.
          </p>
          <div data-reveal="delay-2" className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold h-14 px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
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