'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useSiteImages } from '@/hooks/use-site-images'
import {
  ArrowRight,
  Phone,
  Award,
  Clock,
  Users,
  Calendar,
  Printer,
  Shield,
  DollarSign,
  MapPin,
  Mail,
} from 'lucide-react'

/* ─── DATA ─── */
const stats = [
  { value: '15+', label: 'Years in Business', icon: Calendar },
  { value: '500+', label: 'Clients Served', icon: Users },
  { value: '10M+', label: 'Prints Delivered', icon: Printer },
  { value: '100%', label: 'Satisfaction Rate', icon: Award },
]

const team = [
  {
    name: 'Kassa',
    role: 'Business Developer & Founder',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: 'Founded Artistic Printing in 2010 with a vision to bring quality printing to LA businesses.',
  },
  {
    name: 'Marcel',
    role: 'Marketing Manager',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Builds relationships with clients and ensures their needs are always met.',
  },
  {
    name: 'Estevan',
    role: 'Lead Designer',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Transforms ideas into stunning print-ready designs with 10+ years of experience.',
  },
  {
    name: 'João Serro',
    role: 'Consultant, Graphic & Web Design',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Provides expert guidance on branding and digital integration for print projects.',
  },
]

const teamKeys = ['about-team-kassa', 'about-team-marcel', 'about-team-estevan', 'about-team-joao']

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description:
      'Every print job is inspected before it leaves our facility. We never compromise on quality.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We meet deadlines. Period. Free pickup and delivery anywhere in Los Angeles.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description:
      'Competitive rates with no hidden fees or surprises. Transparent quotes every time.',
    color: 'from-amber-500 to-orange-600',
  },
]

const timeline = [
  { year: '2011', title: 'Founded', desc: 'Started as a small shop on Pico Boulevard' },
  { year: '2013', title: 'Expansion', desc: 'Added large format printing capabilities' },
  { year: '2016', title: 'Healthcare Focus', desc: 'Became preferred vendor for major hospitals' },
  { year: '2020', title: 'Digital Upgrade', desc: 'Invested in state-of-the-art digital presses' },
  { year: '2026', title: 'Today', desc: 'Serving 500+ businesses across Los Angeles' },
]

const facilityImages = [
  {
    src: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80',
    label: 'Digital Press Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
    label: 'Offset Printing',
  },
  {
    src: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80',
    label: 'Design Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80',
    label: 'Finishing Area',
  },
]

const facilityKeys = ['about-facility-digital', 'about-facility-offset', 'about-facility-design', 'about-facility-finishing']

export default function AboutPage() {
  const { getImageUrl } = useSiteImages('about')

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
            src={getImageUrl('about-hero-bg') || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
              Family-Owned Since 2010
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Family-owned and operated since 2010, serving Los Angeles businesses with
              pride, precision, and a personal touch that big print shops can&apos;t match.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR STORY + STATS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                From Small Shop to{' '}
                <span className="text-cyan-600">LA&apos;s Trusted Partner</span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Artistic Printing Company was founded in 2010 with a simple mission:
                  provide Los Angeles businesses with exceptional printing services and
                  unmatched customer care.
                </p>
                <p>
                  What started as a small shop on Pico Boulevard has grown into a
                  full-service commercial printing center, serving over 500 businesses
                  including major healthcare systems, automotive dealerships, restaurants,
                  and educational institutions.
                </p>
                <p>
                  Today, we combine state-of-the-art digital and offset printing technology
                  with old-fashioned attention to detail. Every job gets the same care,
                  whether it&apos;s 100 business cards or 100,000 hospital forms.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Link href="/portfolio">
                    See Our Work <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TIMELINE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-slate-900">15 Years of Growth</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full hidden md:block" />

            <div className="grid md:grid-cols-5 gap-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative text-center">
                  {/* Dot */}
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-cyan-500 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-cyan-600 font-bold">{item.year}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEAM
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-700 mb-4">Meet the Team</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The People Behind the Press
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getImageUrl(teamKeys[i]) || member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-300 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FACILITY TOUR
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              Our Facility
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Take a Tour</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our 5,000 sq ft facility houses state-of-the-art equipment for every printing
              need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilityImages.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageUrl(facilityKeys[i]) || img.src}
                  alt={img.label}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-medium">Location</div>
                <div className="text-slate-400 text-sm">5878 W Pico Blvd, LA 90019</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-medium">Hours</div>
                <div className="text-slate-400 text-sm">Mon-Fri: 8am - 6pm</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-medium">Contact</div>
                <div className="text-slate-400 text-sm">info@artisticprinting.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VALUES
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from the smallest business card to
              the largest banner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 transition-colors`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-white/90 transition-colors leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl('about-cta-bg') || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80'}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-cyan-500/90" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Visit our shop, give us a call, or request a quote online. We&apos;d love to
            hear about your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold h-14 px-8"
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
