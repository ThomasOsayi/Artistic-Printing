'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  ArrowRight,
  Eye,
  Image as ImageIcon,
  Loader2,
} from 'lucide-react'
import type { PortfolioItem } from '@/lib/admin-data'

const industryColors: Record<string, string> = {
  Healthcare: 'bg-cyan-100 text-cyan-700',
  Automotive: 'bg-purple-100 text-purple-700',
  Hospitality: 'bg-amber-100 text-amber-700',
  Education: 'bg-blue-100 text-blue-700',
  Finance: 'bg-green-100 text-green-700',
  Media: 'bg-red-100 text-red-700',
  Retail: 'bg-pink-100 text-pink-700',
  Other: 'bg-slate-100 text-slate-700',
}

export function HomePortfolioSection() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const revealRef = useScrollReveal()

  useEffect(() => {
    const q = query(
      collection(db, 'portfolio'),
      where('visible', '==', true),
      orderBy('order', 'asc'),
      limit(6)
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
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
            createdAt: d.createdAt?.toDate?.()?.toISOString() || '',
            updatedAt: d.updatedAt?.toDate?.()?.toISOString() || '',
          } as PortfolioItem
        })

        const sorted = [...data].sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.order - b.order
        })

        setItems(sorted)
        setLoading(false)
      },
      (error) => {
        console.error('Portfolio query failed:', error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  if (!loading && items.length === 0) return null

  return (
    <section className="py-20 bg-slate-50" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Badge data-reveal className="bg-purple-100 text-purple-700 mb-4">Our Work</Badge>
            <h2 data-reveal="delay-1" className="text-4xl font-bold text-slate-900 mb-2">Recent Projects</h2>
            <p data-reveal="delay-2" className="text-slate-600 text-lg">
              A glimpse at what we&apos;ve delivered for LA businesses.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            data-reveal="delay-2"
            className="border-slate-300 hover:border-cyan-500 hover:text-cyan-600 group self-start md:self-auto transition-all duration-300 hover:shadow-md"
          >
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
            <span className="ml-2 text-slate-400 text-sm">Loading projects...</span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((project, index) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both', animationDuration: '600ms' }}
              >
                <div className="relative h-56 overflow-hidden">
                  {project.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.imageUrl}
                      alt={project.client}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-slate-200" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm ${
                        industryColors[project.industry] || 'bg-white/90 text-slate-700'
                      }`}
                    >
                      {project.industry}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-white shadow-sm">
                        ★ Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-cyan-600 transition-colors duration-300">
                    {project.client}
                  </h3>
                  <p className="text-slate-500 text-sm">{project.type}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}