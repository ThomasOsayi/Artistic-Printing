import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { QuoteForm } from '@/components/quote-form'
import { TestimonialsSection } from '@/components/testimonials-section'
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
  Sparkles,
  Play,
  Check,
  Phone,
  Shield,
  Eye,
} from 'lucide-react'

const clients = [
  { name: 'Kaiser Permanente', icon: Heart },
  { name: 'Toyota', icon: Car },
  { name: 'LABioMed', icon: Heart },
  { name: 'Vista Hospital', icon: Heart },
  { name: 'Broadway Federal Bank', icon: Building2 },
  { name: 'Jim Falk Lexus', icon: Car },
  { name: 'Beverly Hills Café', icon: UtensilsCrossed },
  { name: 'UCLA Extension', icon: GraduationCap },
  { name: 'Cedars-Sinai', icon: Heart },
  { name: 'Honda of Downtown LA', icon: Car },
]

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'Patient forms, signage, brochures',
    stats: '200+ clients',
    color: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    items: ['Patient intake forms', 'Hospital signage', 'Medical brochures', 'Prescription pads'],
  },
  {
    icon: UtensilsCrossed,
    name: 'Hospitality',
    desc: 'Menus, napkins, packaging',
    stats: '150+ clients',
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    items: ['Restaurant menus', 'Custom napkins', 'Takeout packaging', 'Table tents'],
  },
  {
    icon: GraduationCap,
    name: 'Education',
    desc: 'Flyers, handbooks, materials',
    stats: '100+ clients',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    items: ['Course catalogs', 'Event flyers', 'Student handbooks', 'Certificates'],
  },
  {
    icon: Car,
    name: 'Automotive',
    desc: 'Brochures, forms, signage',
    stats: '75+ clients',
    color: 'from-slate-600 to-slate-800',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80',
    items: ['Sales brochures', 'Service forms', 'Showroom signage', 'Promotional materials'],
  },
]

const portfolio = [
  {
    client: 'Kaiser Permanente',
    type: 'Patient Forms & Signage',
    cat: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    client: 'Beverly Hills Café',
    type: 'Menus & Packaging',
    cat: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
  },
  {
    client: 'Toyota Hollywood',
    type: 'Sales Brochures',
    cat: 'Automotive',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80',
  },
  {
    client: 'UCLA Extension',
    type: 'Course Catalogs',
    cat: 'Education',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
  },
  {
    client: 'Vista Hospital',
    type: 'Patient Materials',
    cat: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
  {
    client: 'Broadway Bank',
    type: 'Marketing Collateral',
    cat: 'Finance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
]

const features = [
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most orders completed in 24-48 hours' },
  { icon: Truck, title: 'Free Delivery', desc: 'Complimentary pickup and delivery in LA' },
  { icon: Star, title: 'Quality Guaranteed', desc: '100% satisfaction or we reprint for free' },
  {
    icon: CheckCircle2,
    title: 'All On-Site',
    desc: 'Digital, offset, and large format under one roof',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Background image + floating product cards
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] bg-slate-900 text-white overflow-hidden">
        {/* Real background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
        </div>

        {/* Glow orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Trusted by 500+ LA businesses</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Where Ideas
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Become Print
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                Premium commercial printing for healthcare, hospitality & more. From concept to
                delivery in 24-48 hours.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 h-14 text-base"
                >
                  <Link href="/contact">
                    Get Your Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/15 h-14 px-8 text-base backdrop-blur-sm"
                >
                  <Link href="/portfolio">
                    <Play className="w-4 h-4 mr-2" />
                    See Our Work
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  Free LA Delivery
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  24hr Turnaround
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  100% Satisfaction
                </div>
              </div>
            </div>

            {/* Right side — Floating product cards with real images */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[540px]">
                {/* Business cards */}
                <div className="absolute top-0 left-4 w-72 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 transform rotate-[-6deg] hover:rotate-[-2deg] transition-all duration-500 cursor-pointer hover:shadow-cyan-500/40 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=80"
                    alt="Business cards"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">Business Cards</div>
                        <div className="text-slate-500 text-xs">Premium Matte Finish</div>
                      </div>
                      <Badge className="bg-cyan-100 text-cyan-700 text-xs">500 qty</Badge>
                    </div>
                  </div>
                </div>

                {/* Brochures */}
                <div className="absolute top-16 right-0 w-60 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 transform rotate-[5deg] hover:rotate-[1deg] transition-all duration-500 cursor-pointer hover:shadow-purple-500/40 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80"
                    alt="Brochures"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4">
                    <div className="font-semibold text-white text-sm">Tri-Fold Brochures</div>
                    <div className="text-cyan-100 text-xs">Glossy finish • 1000 qty</div>
                  </div>
                </div>

                {/* Packaging */}
                <div className="absolute bottom-20 left-0 w-56 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform rotate-[3deg] hover:rotate-[-1deg] transition-all duration-500 cursor-pointer hover:shadow-orange-500/40 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80"
                    alt="Custom packaging"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4">
                    <div className="font-semibold text-white text-sm">Custom Packaging</div>
                    <div className="text-amber-100 text-xs">Food-safe materials</div>
                  </div>
                </div>

                {/* Banners */}
                <div className="absolute bottom-0 right-6 w-48 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20 transform rotate-[-4deg] hover:rotate-[0deg] transition-all duration-500 cursor-pointer hover:shadow-pink-500/40 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80"
                    alt="Large format banners"
                    className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                    <div className="font-semibold text-white text-sm">Banners & Signs</div>
                    <div className="text-purple-100 text-xs">Large format</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST BAR — Auto-scrolling client carousel
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Shield className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-500">
              Trusted by 500+ LA businesses
            </span>
          </div>

          <div className="relative group">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-scroll group-hover:[animation-play-state:paused]">
                {[...clients, ...clients].map((client, i) => {
                  const Icon = client.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INDUSTRIES — Image-based cards with overlays
          ═══════════════════════════════════════════════════════════ */}
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
                  src={industry.image}
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

      {/* ═══════════════════════════════════════════════════════════
          PORTFOLIO PREVIEW — Recent project showcase
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Our Work</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Recent Projects</h2>
              <p className="text-slate-600 text-lg">
                A glimpse at what we&apos;ve delivered for LA businesses.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 hover:border-cyan-500 hover:text-cyan-600 group self-start md:self-auto"
            >
              <Link href="/portfolio">
                View All Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 backdrop-blur-sm shadow-sm text-xs">
                      {project.cat}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-cyan-600 transition-colors">
                    {project.client}
                  </h3>
                  <p className="text-slate-500 text-sm">{project.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES + QUOTE FORM — Dark section with background image
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-900/90" />
        </div>
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Features */}
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                LA&apos;s Most Trusted
                <br />
                <span className="text-cyan-400">Printing Partner</span>
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                15+ years of delivering quality, speed, and reliability to businesses across Los
                Angeles.
              </p>

              {/* Feature cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Facility image strip */}
              <div className="mt-10 flex gap-3">
                {[
                  'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=200&q=80',
                  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=200&q=80',
                  'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=200&q=80',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white/10 hover:border-cyan-500/50 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt="Our facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <Link
                  href="/about"
                  className="w-24 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-semibold cursor-pointer hover:bg-cyan-500/30 transition-colors"
                >
                  Tour →
                </Link>
              </div>
            </div>

            {/* Right — Floating quote form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Get a Free Quote</h3>
                    <p className="text-sm text-slate-400">Response within 24 hours</p>
                  </div>
                </div>

                <QuoteForm variant="dark" />

                <p className="text-center text-xs text-slate-500 mt-4">
                  No spam, ever. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS — Split layout with avatars
          ═══════════════════════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════════════════════
          CTA — Background image with cyan overlay
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-cyan-500/90" />
        </div>
        {/* Decorative orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm">
            Start Your Project
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free quote within 24 hours. No job is too large or too small. From 100 business
            cards to 100,000 hospital forms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold h-14 px-8 shadow-xl shadow-black/10"
            >
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8 backdrop-blur-sm"
            >
              <a href="tel:323-939-8911">
                <Phone className="w-4 h-4 mr-2" />
                (323) 939-8911
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}