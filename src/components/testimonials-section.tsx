"use client"

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Artistic Printing has been our go-to partner for all hospital materials for over 8 years. Their attention to detail and quick turnaround keeps our operations running smoothly.",
    author: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Kaiser Permanente',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote:
      "The quality of their custom packaging has elevated our brand. Customers constantly compliment our takeout boxes and napkins.",
    author: 'Michael Chen',
    role: 'Owner',
    company: 'Beverly Hills Café',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote:
      "From brochures to showroom banners, they handle everything. True one-stop shop for all our dealership printing needs.",
    author: 'David Rodriguez',
    role: 'Marketing Manager',
    company: 'Jim Falk Lexus',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-700 mb-4">Customer Stories</Badge>
          <h2 className="text-4xl font-bold text-slate-900">What Our Clients Say</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left — Testimonial navigation with avatars */}
          <div className="lg:col-span-2 space-y-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                  i === active
                    ? 'bg-cyan-50 border-2 border-cyan-500 shadow-lg'
                    : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover shadow-md flex-shrink-0"
                />
                <div>
                  <div
                    className={`font-semibold ${i === active ? 'text-cyan-700' : 'text-slate-900'}`}
                  >
                    {t.author}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {t.role}, {t.company}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — Active testimonial card */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-200 shadow-xl relative">
              <Quote className="w-16 h-16 text-cyan-500/15 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500 shadow-lg"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonials[active].author}</div>
                  <div className="text-slate-500">
                    {testimonials[active].role}, {testimonials[active].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}