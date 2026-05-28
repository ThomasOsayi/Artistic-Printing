'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { QuoteForm } from '@/components/quote-form'
import {
  // Hero badge icons (per industry)
  HeartPulse, Utensils, Car, GraduationCap, Building2,
  // Compliance / quality
  ShieldCheck, Languages, Type, Truck, Award, Sparkles, Leaf, Recycle,
  Clock, Package, BadgeCheck, Star, Zap,
  // Print items
  ClipboardList, Copy, FileSignature, FolderOpen, BookOpen, ScrollText,
  NotebookPen, IdCard, Coffee, Gift, Ticket, Megaphone,
  Image as ImageIcon, Calendar, FileText, Briefcase, Wrench, Book,
  // Trust logos
  Hospital, Cross, Stethoscope, Microscope, Building, Home as HomeIcon,
  Users, School, ChefHat, Hotel,
  // UI
  HelpCircle, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import type { PageContent, GradientColor, AccentColor } from '@/lib/admin-data'

// ─── Icon name → component map ──────────────────────────────────────────
// PageContent docs store icon names as kebab-case strings; we map them
// here at render time. Add new icons to this map as seed data requires.
const ICONS: Record<string, LucideIcon> = {
  // Hero badges
  'heart-pulse': HeartPulse,
  'utensils': Utensils,
  'car': Car,
  'graduation-cap': GraduationCap,
  'building-2': Building2,
  // Compliance / quality
  'shield-check': ShieldCheck,
  'languages': Languages,
  'type': Type,
  'truck': Truck,
  'award': Award,
  'sparkles': Sparkles,
  'leaf': Leaf,
  'recycle': Recycle,
  'clock': Clock,
  'package': Package,
  'badge-check': BadgeCheck,
  'star': Star,
  'zap': Zap,
  // Print items
  'clipboard-list': ClipboardList,
  'copy': Copy,
  'file-signature': FileSignature,
  'folder-open': FolderOpen,
  'book-open': BookOpen,
  'scroll-text': ScrollText,
  'notebook-pen': NotebookPen,
  'id-card': IdCard,
  'coffee': Coffee,
  'gift': Gift,
  'ticket': Ticket,
  'megaphone': Megaphone,
  'image': ImageIcon,
  'calendar': Calendar,
  'file-text': FileText,
  'briefcase': Briefcase,
  'wrench': Wrench,
  'book': Book,
  // Trust logos
  'hospital': Hospital,
  'cross': Cross,
  'stethoscope': Stethoscope,
  'microscope': Microscope,
  'building': Building,
  'home': HomeIcon,
  'users': Users,
  'school': School,
  'chef-hat': ChefHat,
  'hotel': Hotel,
  // UI fallbacks
  'map-pin': MapPin,
}

function Icon({ name, className }: { name: string; className?: string }) {
  const Component = ICONS[name] ?? HelpCircle
  return <Component className={className} />
}

// ─── Tailwind class maps ────────────────────────────────────────────────
// Listed as full literal strings so Tailwind's JIT sees them at build time.
const GRADIENT_CLASSES: Record<GradientColor, string> = {
  'cyan-blue':     'from-cyan-500 to-blue-600',
  'purple-pink':   'from-purple-500 to-pink-600',
  'amber-orange':  'from-amber-500 to-orange-600',
  'emerald-teal':  'from-emerald-500 to-teal-600',
  'pink-rose':     'from-pink-500 to-rose-600',
  'blue-indigo':   'from-blue-500 to-indigo-600',
}

const ACCENT_TEXT: Record<AccentColor, string> = {
  cyan:    'text-cyan-600',
  emerald: 'text-emerald-600',
  purple:  'text-purple-600',
  pink:    'text-pink-600',
  amber:   'text-amber-600',
  teal:    'text-teal-600',
  blue:    'text-blue-600',
  rose:    'text-rose-600',
}

// ─── Breadcrumb parent label per page type ───
const TYPE_PARENT: Record<string, { label: string; href: string }> = {
  industry:     { label: 'Industries',    href: '/services' },
  service:      { label: 'Services',      href: '/services' },
  neighborhood: { label: 'Service Areas', href: '/services' },
  page:         { label: 'Services',      href: '/services' },
}

// ─── Default process steps (used if doc.processSteps is undefined) ───
const DEFAULT_PROCESS_STEPS = [
  { title: 'Submit RFQ',     description: 'Drop us your specs via form, email, or phone' },
  { title: 'Quick Consult',  description: 'Quote returned within 24 hours' },
  { title: 'Proof Rounds',   description: 'Digital proofs until sign-off — color, copy, layout' },
  { title: 'Production',     description: 'Digital or offset, in-house bindery and finishing' },
  { title: 'Free Delivery',  description: 'Hand-delivered anywhere in LA County' },
]

// ─── Section copy helper ───
function s(content: PageContent, key: string): string {
  return content.sections?.[key] || ''
}

interface IndustryPageProps {
  content: PageContent
  /** Optional short label for the last breadcrumb (defaults to content.heroBadge or h1). */
  breadcrumbLabel?: string
}

export function IndustryPage({ content, breadcrumbLabel }: IndustryPageProps) {
  const [heroMounted, setHeroMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const complianceRef = useScrollReveal()
  const printRef      = useScrollReveal()
  const trustRef      = useScrollReveal()
  const processRef    = useScrollReveal()
  const faqRef        = useScrollReveal()
  const ctaRef        = useScrollReveal()

  useEffect(() => {
    const t = setTimeout(() => setHeroMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const parent = TYPE_PARENT[content.type] ?? TYPE_PARENT.page
  const processSteps = content.processSteps && content.processSteps.length > 0
    ? content.processSteps
    : DEFAULT_PROCESS_STEPS

  const heroBadgeIcon = s(content, 'heroBadgeIcon')
  const heroImage     = s(content, 'heroImage')
  const ctaImage      = s(content, 'ctaImage')

  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={heroImage}
              alt=""
              className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${
                heroMounted ? 'opacity-25 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[80px] animate-float-slower" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumbs */}
          <div
            className={`mb-8 transition-all duration-700 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ transitionDelay: '0.05s' }}
          >
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: 'Home', href: '/' },
                { label: parent.label, href: parent.href },
                { label: breadcrumbLabel || content.heroBadge || content.h1 },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            {content.heroBadge && (
              <div
                className={`inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-medium mb-6 transition-all duration-700 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '0.15s' }}
              >
                {heroBadgeIcon && <Icon name={heroBadgeIcon} className="w-3.5 h-3.5" />}
                {content.heroBadge}
              </div>
            )}

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight transition-all duration-700 ${
                heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {content.h1}
            </h1>

            <p
              className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 transition-all duration-700 ${
                heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.45s' }}
            >
              {content.heroSubtitle}
            </p>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.55s' }}
            >
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold h-12 px-7 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5">
                <a href="#quote">
                  Request a Quote <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 h-12 px-7 transition-all duration-300 hover:-translate-y-0.5">
                <a href="tel:323-939-8911">
                  <Phone className="w-4 h-4 mr-1" /> (323) 939-8911
                </a>
              </Button>
            </div>

            {content.heroBullets && content.heroBullets.length > 0 && (
              <div
                className={`flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-sm text-slate-400 transition-all duration-700 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                {content.heroBullets.map((bullet, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {bullet}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPLIANCE GRID ═══════════ */}
      {content.complianceCards && content.complianceCards.length > 0 && (
        <section className="py-20 bg-white" ref={complianceRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {s(content, 'complianceEyebrow') && (
                <Badge data-reveal className="bg-emerald-100 text-emerald-700 mb-4">
                  {s(content, 'complianceEyebrow')}
                </Badge>
              )}
              {s(content, 'complianceHeading') && (
                <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {s(content, 'complianceHeading')}
                </h2>
              )}
              {s(content, 'complianceSubtitle') && (
                <p data-reveal="delay-2" className="text-slate-600 max-w-2xl mx-auto">
                  {s(content, 'complianceSubtitle')}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {content.complianceCards.map((card, i) => (
                <div
                  key={i}
                  data-reveal="scale"
                  className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENT_CLASSES[card.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${GRADIENT_CLASSES[card.color]} flex items-center justify-center mb-4 shadow-lg group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500`}>
                      <Icon name={card.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ WHAT WE PRINT ═══════════ */}
      {content.printItems && content.printItems.length > 0 && (
        <section className="py-20 bg-slate-50" ref={printRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start mb-12">
              <div className="lg:col-span-1">
                {s(content, 'printEyebrow') && (
                  <Badge data-reveal className="bg-cyan-100 text-cyan-700 mb-4">
                    {s(content, 'printEyebrow')}
                  </Badge>
                )}
                {s(content, 'printHeading') && (
                  <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                    {s(content, 'printHeading')}
                  </h2>
                )}
                {s(content, 'printIntro') && (
                  <p data-reveal="delay-2" className="text-slate-600 leading-relaxed mb-6">
                    {s(content, 'printIntro')}
                  </p>
                )}
                <Link
                  data-reveal="delay-3"
                  href="#quote"
                  className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                >
                  Don&apos;t see what you need? Ask us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children">
                {content.printItems.map((item, i) => (
                  <div
                    key={i}
                    data-reveal="scale"
                    className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-500 transition-colors duration-300">
                      <Icon
                        name={item.icon}
                        className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ TRUSTED BY ═══════════ */}
      {content.trustLogos && content.trustLogos.length > 0 && (
        <section className="py-16 bg-white border-y border-slate-100" ref={trustRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              {s(content, 'trustEyebrow') && (
                <p data-reveal className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-2">
                  {s(content, 'trustEyebrow')}
                </p>
              )}
              {s(content, 'trustHeading') && (
                <h3 data-reveal="delay-1" className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {s(content, 'trustHeading')}
                </h3>
              )}
            </div>

            <div
              data-reveal="fade"
              className="relative overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage:       'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="flex gap-4 animate-scroll whitespace-nowrap">
                {/* Render logos twice for seamless infinite loop */}
                {[...content.trustLogos, ...content.trustLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full"
                  >
                    <Icon name={logo.icon} className={`w-5 h-5 ${ACCENT_TEXT[logo.color]}`} />
                    <span className="font-semibold text-slate-700">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="py-20 bg-slate-900 relative overflow-hidden" ref={processRef}>
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] animate-float-slower" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            {s(content, 'processEyebrow') && (
              <Badge data-reveal="fade" className="bg-white/10 text-white border-white/20 mb-4">
                {s(content, 'processEyebrow')}
              </Badge>
            )}
            {s(content, 'processHeading') && (
              <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {s(content, 'processHeading')}
              </h2>
            )}
            {s(content, 'processSubtitle') && (
              <p data-reveal="delay-2" className="text-slate-400 max-w-2xl mx-auto">
                {s(content, 'processSubtitle')}
              </p>
            )}
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 stagger-children">
              {processSteps.map((step, i) => (
                <div key={i} data-reveal className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-cyan-500/20">
                    <span className="text-cyan-400 font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-20 bg-white" ref={faqRef}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {s(content, 'faqEyebrow') && (
                <Badge data-reveal className="bg-purple-100 text-purple-700 mb-4">
                  {s(content, 'faqEyebrow')}
                </Badge>
              )}
              {s(content, 'faqHeading') && (
                <h2 data-reveal="delay-1" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {s(content, 'faqHeading')}
                </h2>
              )}
              {s(content, 'faqSubtitle') && (
                <p data-reveal="delay-2" className="text-slate-600">
                  {s(content, 'faqSubtitle')}{' '}
                  <a href="#quote" className="text-cyan-600 font-medium hover:text-cyan-700">
                    Ask us directly
                  </a>
                  .
                </p>
              )}
            </div>

            <div className="space-y-3">
              {content.faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={i}
                    data-reveal={i < 5 ? `delay-${i + 1}` : 'fade'}
                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full px-5 sm:px-6 py-5 flex items-center justify-between text-left gap-3"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                            isOpen ? 'bg-cyan-500' : 'bg-cyan-100'
                          }`}
                        >
                          <HelpCircle
                            className={`w-4 h-4 transition-colors duration-300 ${
                              isOpen ? 'text-white' : 'text-cyan-600'
                            }`}
                          />
                        </div>
                        <span className="font-semibold text-slate-900 text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 sm:px-6 pb-5">
                        <p className="text-slate-600 leading-relaxed pl-11 text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA + FORM ═══════════ */}
      <section id="quote" className="py-20 bg-slate-900 relative overflow-hidden" ref={ctaRef}>
        {ctaImage && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ctaImage} alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-900/40" />
          </div>
        )}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal="from-left">
              {s(content, 'ctaEyebrow') && (
                <div className="inline-flex items-center bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {s(content, 'ctaEyebrow')}
                </div>
              )}
              {s(content, 'ctaHeading') && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                  {s(content, 'ctaHeading')}
                </h2>
              )}
              {s(content, 'ctaSubtitle') && (
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {s(content, 'ctaSubtitle')}
                </p>
              )}

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Call us directly</div>
                    <a href="tel:323-939-8911" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      (323) 939-8911
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Or email</div>
                    <a href="mailto:design@artisticprinting.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                      design@artisticprinting.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Visit our shop</div>
                    <div className="text-white font-semibold">5878 W Pico Blvd, LA 90019</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal="from-right">
              <QuoteForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}