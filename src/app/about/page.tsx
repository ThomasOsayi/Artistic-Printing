import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const team = [
  { name: 'Kassa', role: 'Business Developer & Founder' },
  { name: 'Marcel', role: 'Marketing Manager' },
  { name: 'Estevan', role: 'Lead Designer' },
  { name: 'João Serro', role: 'Consultant, Graphic & Web Design' },
]

const values = [
  { title: 'Quality First', desc: 'Every print job is inspected before it leaves our facility.' },
  { title: 'On-Time Delivery', desc: 'We meet deadlines. Period. Free pickup and delivery in LA.' },
  { title: 'Fair Pricing', desc: 'Competitive rates with no hidden fees or surprises.' },
]

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '500+', label: 'Clients Served' },
  { value: '10M+', label: 'Prints Delivered' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl">
            Family-owned and operated since 2010, serving Los Angeles businesses with pride.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Artistic Printing Company was founded in 2010 with a simple mission: provide Los
                  Angeles businesses with exceptional printing services and unmatched customer care.
                </p>
                <p>
                  What started as a small shop on Pico Boulevard has grown into a full-service
                  commercial printing center, serving over 500 businesses including major healthcare
                  systems, automotive dealerships, restaurants, and educational institutions.
                </p>
                <p>
                  Today, we combine state-of-the-art digital and offset printing technology with
                  old-fashioned attention to detail. Every job gets the same care, whether it&apos;s
                  100 business cards or 100,000 hospital forms.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold text-cyan-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="text-center border-slate-200">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-400">{member.name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
