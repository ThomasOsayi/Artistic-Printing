"use client"

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Zap,
  Truck,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

/* ─── DATA ─── */
const contactMethods = [
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: '5878 West Pico Boulevard',
    secondary: 'Los Angeles, CA 90019',
    color: 'from-cyan-500 to-blue-600',
    action: 'Get Directions',
    href: 'https://maps.google.com/?q=5878+West+Pico+Boulevard+Los+Angeles+CA+90019',
  },
  {
    icon: Phone,
    title: 'Call Us',
    primary: '(323) 939-8911',
    secondary: 'Mon-Fri 8am-6pm, Sat 9am-2pm',
    color: 'from-purple-500 to-pink-600',
    action: 'Call Now',
    href: 'tel:323-939-8911',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@artisticprinting.com',
    secondary: 'We respond within 24 hours',
    color: 'from-amber-500 to-orange-600',
    action: 'Send Email',
    href: 'mailto:info@artisticprinting.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Monday - Friday: 8am - 6pm',
    secondary: 'Saturday: 9am - 2pm',
    color: 'from-emerald-500 to-teal-600',
    action: null,
    href: null,
  },
]

const faqs = [
  {
    q: 'How quickly can I get my order?',
    a: 'Most orders are completed within 24-48 hours. Rush orders are available for same-day or next-day delivery. Contact us for time-sensitive projects.',
  },
  {
    q: 'Do you offer free delivery?',
    a: 'Yes! We offer free pickup and delivery anywhere in the Los Angeles area for orders over $100.',
  },
  {
    q: 'What file formats do you accept?',
    a: 'We accept PDF, AI, PSD, INDD, JPG, PNG, and most common design formats. Our team can also help with file preparation if needed.',
  },
  {
    q: 'Can you help with design?',
    a: 'Absolutely! Our in-house design team can create or refine your artwork. Design services start at $50/hour.',
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'Minimums vary by product. Business cards start at 250, flyers at 100, and large format has no minimum. Contact us for specifics.',
  },
]

const quickServices = [
  { icon: FileText, label: 'Business Cards', time: '24hr' },
  { icon: FileText, label: 'Flyers & Brochures', time: '24-48hr' },
  { icon: Truck, label: 'Large Format', time: '48-72hr' },
  { icon: Zap, label: 'Rush Orders', time: 'Same Day' },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setSubmitMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await addDoc(collection(db, 'quotes'), {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        company: (formData.get('company') as string) || '',
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('projectDetails') as string,
        status: 'new',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })

      setFormStatus('success')
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.")
      form.reset()
    } catch {
      setFormStatus('error')
      setSubmitMessage('Something went wrong. Please call us at (323) 939-8911.')
    }
  }

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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
              We Respond Within 24 Hours
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Ready to start your project? Get a free quote within 24 hours. Visit our
              shop, give us a call, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT METHOD CARDS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-lg group-hover:bg-white/20 transition-colors`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-white mb-1 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-slate-900 group-hover:text-white font-medium transition-colors">
                      {method.primary}
                    </p>
                    <p className="text-slate-500 group-hover:text-white/80 text-sm transition-colors">
                      {method.secondary}
                    </p>
                    {method.action && method.href && (
                      <a
                        href={method.href}
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-cyan-600 group-hover:text-white transition-colors"
                      >
                        {method.action} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT FORM + INFO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Request a Quote</h2>
                </div>
                <p className="text-slate-500 mb-8">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>

                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Request Received!
                    </h3>
                    <p className="text-slate-500 mb-6">{submitMessage}</p>
                    <Button
                      onClick={() => setFormStatus('idle')}
                      variant="outline"
                      className="border-slate-300"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="firstName"
                          required
                          placeholder="John"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="lastName"
                          required
                          placeholder="Smith"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        placeholder="Your Company"
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          required
                          placeholder="(323) 555-0123"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        name="projectDetails"
                        required
                        rows={5}
                        placeholder="Tell us what you need printed, quantities, timeline, etc."
                        className="rounded-xl resize-none"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm">
                        {submitMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold h-14 rounded-xl text-lg"
                    >
                      {formStatus === 'loading' ? (
                        'Sending...'
                      ) : (
                        <>
                          Submit Request <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Interactive Google Map */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7676095183584!2d-118.36519492357064!3d34.04786501815756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9143f5c9d2f%3A0x7c0f2c5e7f1b8e4a!2s5878%20W%20Pico%20Blvd%2C%20Los%20Angeles%2C%20CA%2090019!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Artistic Printing Company Location"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                  <p className="text-slate-600">5878 West Pico Boulevard</p>
                  <p className="text-slate-600 mb-3">Los Angeles, CA 90019</p>
                  <a
                    href="https://maps.google.com/?q=5878+West+Pico+Boulevard+Los+Angeles+CA+90019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Quick Response Guarantee</h3>
                </div>
                <p className="text-cyan-100 leading-relaxed">
                  We respond to all quote requests within 24 hours during business days.
                  For urgent projects, call us directly.
                </p>
              </div>

              {/* Turnaround Times */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Typical Turnaround Times</h3>
                <div className="space-y-3">
                  {quickServices.map((svc, i) => {
                    const Icon = svc.icon
                    return (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-slate-600" />
                          </div>
                          <span className="text-slate-700">{svc.label}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-cyan-600 border-cyan-200 bg-cyan-50"
                        >
                          {svc.time}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">
              Can&apos;t find what you&apos;re looking for? Give us a call.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                  </div>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-slate-600 leading-relaxed pl-11">{faq.a}</p>
                  </div>
                )}
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-cyan-500/90" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">Prefer to Talk?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Give us a call or stop by our shop on Pico
            Boulevard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold h-14 px-8"
            >
              <a href="tel:323-939-8911">
                <Phone className="w-5 h-5 mr-2" /> (323) 939-8911
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8"
            >
              <a
                href="https://maps.google.com/?q=5878+West+Pico+Boulevard+Los+Angeles+CA+90019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" /> Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}