'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  const revealRef = useScrollReveal()

  return (
    <footer className="bg-slate-900 text-white" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2" data-reveal="from-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-semibold tracking-tight">ARTISTIC PRINTING CO.</div>
                <div className="text-xs text-slate-400 tracking-widest">Los Angeles, CA</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-4">
              LA&apos;s trusted commercial printing partner since 2010. We deliver quality printing
              solutions for healthcare, hospitality, education, and automotive industries.
            </p>
            <div className="flex gap-4">
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                Family Owned
              </Badge>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                15+ Years
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div data-reveal="delay-2">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 rounded-full transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-reveal="delay-3">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                5878 W Pico Blvd, LA 90019
              </li>
              <li className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (323) 939-8911
              </li>
              <li className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@artisticprinting.com
              </li>
              <li className="flex items-center gap-2 hover:text-slate-200 transition-colors duration-300">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Mon-Fri: 8am - 6pm
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal="fade delay-4" className="border-t border-slate-800 mt-8 pt-8 flex items-center justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Artistic Printing Company. All rights reserved.</span>
          <Link href="/staff-login" className="hover:text-slate-300 transition-colors duration-300">
            Staff Login
          </Link>
        </div>
      </div>
    </footer>
  )
}