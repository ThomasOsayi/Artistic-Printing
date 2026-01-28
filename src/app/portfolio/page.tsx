"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    name: 'Kaiser Permanente',
    industry: 'healthcare',
    type: 'Patient Forms & Signage',
    image: '🏥',
  },
  { name: 'JY Accessories', industry: 'retail', type: 'Branding Package', image: '🛍️' },
  {
    name: 'Salud Clinica',
    industry: 'healthcare',
    type: 'Website & Print Materials',
    image: '⚕️',
  },
  { name: 'American Dental', industry: 'healthcare', type: 'Brochures & Forms', image: '🦷' },
  { name: 'Beverly Hills Café', industry: 'hospitality', type: 'Menus & Napkins', image: '☕' },
  { name: 'Toyota Hollywood', industry: 'automotive', type: 'Sales Materials', image: '🚗' },
  { name: 'Vista Hospital', industry: 'healthcare', type: 'Patient Materials', image: '🏨' },
  { name: 'Broadway Bank', industry: 'finance', type: 'Marketing Collateral', image: '🏦' },
]

const filters = ['all', 'healthcare', 'hospitality', 'automotive', 'retail', 'finance']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.industry === activeFilter)

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-slate-300 max-w-2xl">
            Browse our portfolio of work across healthcare, hospitality, automotive, and more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {project.industry}
                  </Badge>
                  <h3 className="font-semibold text-slate-900 mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-500">{project.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
