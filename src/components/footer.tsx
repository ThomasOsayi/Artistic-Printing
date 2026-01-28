import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
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
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                5878 W Pico Blvd, LA 90019
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (323) 939-8911
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@artisticprinting.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Mon-Fri: 8am - 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Artistic Printing Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
