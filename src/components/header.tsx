"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // ─── Track scroll position for header style change ───
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // check initial
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ─── Close mobile menu on route change (deferred to avoid sync setState in effect) ───
  useEffect(() => {
    const id = setTimeout(() => setMobileMenuOpen(false), 0)
    return () => clearTimeout(id)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'header-scrolled border-b border-slate-200/60'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo-header.png"
              alt="Artistic Printing Company"
              width={44}
              height={40}
              className="group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
            <span className="sr-only">Artistic Printing Company</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-cyan-500 rounded-full transition-all duration-300 ${
                      isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:323-939-8911"
              className="hidden sm:flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              (323) 939-8911
            </a>
            <Button
              asChild
              className="bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu — animated slide-down */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-slate-200 space-y-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-12px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}