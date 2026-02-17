'use client'

import { useEffect, useRef, useCallback } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean // if true, only animate once (default true)
}

/**
 * useScrollReveal — attach to a container ref, and all children
 * with `data-reveal` will animate in when scrolled into view.
 *
 * Usage:
 *   const revealRef = useScrollReveal()
 *   <div ref={revealRef}>
 *     <h2 data-reveal>I fade in</h2>
 *     <p data-reveal="delay-1">I fade in 100ms later</p>
 *     <div data-reveal="delay-2">200ms later</div>
 *   </div>
 *
 * Supported data-reveal values (combine with spaces isn't needed — just pick one):
 *   ""           → default fade-up
 *   "delay-1"    → 100ms delay
 *   "delay-2"    → 200ms delay
 *   "delay-3"    → 300ms delay
 *   "delay-4"    → 400ms delay
 *   "delay-5"    → 500ms delay
 *   "from-left"  → slide from left
 *   "from-right" → slide from right
 *   "scale"      → scale up from 95%
 *   "fade"       → pure fade, no translate
 */
export function useScrollReveal(options: RevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options
  const containerRef = useRef<HTMLDivElement>(null)

  const setupObserver = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('[data-reveal]')
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('revealed')
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  useEffect(() => {
    // Small delay to ensure DOM is painted
    const raf = requestAnimationFrame(() => {
      setupObserver()
    })
    return () => cancelAnimationFrame(raf)
  }, [setupObserver])

  return containerRef
}

/**
 * useParallax — lightweight parallax for background elements.
 * Returns a ref; the element translates on scroll.
 */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          const scrolled = window.innerHeight - rect.top
          if (scrolled > 0 && rect.top < window.innerHeight) {
            el.style.transform = `translateY(${scrolled * speed}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}