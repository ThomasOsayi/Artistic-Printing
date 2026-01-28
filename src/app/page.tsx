import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { QuoteForm } from '@/components/quote-form'
import {
  FileText,
  Package,
  Printer,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Car,
  Heart,
  ChevronRight,
  Star,
  Clock,
  Truck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const clients = [
  'Kaiser Permanente',
  'Toyota',
  'LABioMed',
  'Vista Hospital',
  'Broadway Federal Bank',
  'Jim Falk Lexus',
]

const industries = [
  { icon: Heart, name: 'Healthcare', desc: 'Patient forms, signage, brochures' },
  { icon: UtensilsCrossed, name: 'Hospitality', desc: 'Menus, napkins, packaging' },
  { icon: GraduationCap, name: 'Education', desc: 'Flyers, handbooks, materials' },
  { icon: Car, name: 'Automotive', desc: 'Brochures, forms, signage' },
]

const features = [
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most orders completed in 24-48 hours' },
  { icon: Truck, title: 'Free Delivery', desc: 'Complimentary pickup and delivery in LA' },
  { icon: Star, title: 'Quality Guaranteed', desc: '100% satisfaction or we reprint for free' },
  {
    icon: CheckCircle2,
    title: 'All On-Site',
    desc: 'Digital, offset, and large format printing under one roof',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6">
                Trusted by 500+ LA businesses
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Premium Commercial Printing for
                <span className="text-cyan-400"> Healthcare, Hospitality & More</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                From hospital forms to restaurant menus, we&apos;ve been LA&apos;s go-to printing
                partner for over 15 years. Quality you can count on, delivered on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Service Cards - Desktop Only */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/10">
                    <FileText className="w-8 h-8 text-cyan-400 mb-3" />
                    <div className="font-semibold">Business Cards</div>
                    <div className="text-sm text-slate-400">Premium finishes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/10">
                    <Package className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="font-semibold">Custom Packaging</div>
                    <div className="text-sm text-slate-400">Branded solutions</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/10">
                    <Printer className="w-8 h-8 text-yellow-400 mb-3" />
                    <div className="font-semibold">Large Format</div>
                    <div className="text-sm text-slate-400">Banners & signs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/10">
                    <Building2 className="w-8 h-8 text-green-400 mb-3" />
                    <div className="font-semibold">Office Supplies</div>
                    <div className="text-sm text-slate-400">Letterheads & more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <span className="text-sm text-slate-500 font-medium">Trusted by:</span>
            {clients.map((client, i) => (
              <span key={i} className="text-slate-400 font-medium text-sm">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in serving businesses that need reliable, high-volume printing with quick
              turnaround.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Card
                key={i}
                className="group hover:shadow-lg transition-shadow cursor-pointer border-slate-200"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                    <industry.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-slate-600">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Quote Form Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why LA Businesses Choose Us</h2>
              <div className="space-y-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold mb-6">Get a Free Quote</h3>
              <QuoteForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-2xl text-slate-700 mb-6">
            &ldquo;Artistic Printing has been our go-to partner for all hospital materials for over
            8 years. Their attention to detail and quick turnaround keeps our operations running
            smoothly.&rdquo;
          </blockquote>
          <div className="font-semibold text-slate-900">Sarah Mitchell</div>
          <div className="text-slate-500">Operations Director, Kaiser Permanente</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Get a free quote within 24 hours. No job is too large or too small.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
            <Link href="/contact">
              Request a Quote Today
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
