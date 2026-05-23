import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const SITE_URL = 'https://www.artisticprinting.com'

export interface Crumb {
  label: string
  href?: string // omit on the final/current item
}

interface BreadcrumbsProps {
  crumbs: Crumb[]
  variant?: 'light' | 'dark'
  className?: string
}

const VARIANTS = {
  light: {
    list: 'text-slate-500',
    separator: 'text-slate-400',
    link: 'hover:text-cyan-600 transition-colors duration-200',
    current: 'text-slate-700 font-medium',
  },
  dark: {
    list: 'text-slate-300',
    separator: 'text-slate-500',
    link: 'hover:text-cyan-400 transition-colors duration-200',
    current: 'text-white font-medium',
  },
}

/**
 * Breadcrumb trail with embedded BreadcrumbList JSON-LD for Google rich snippets.
 *
 * The last crumb represents the current page and renders as plain text with
 * aria-current="page". All preceding crumbs need an `href`.
 *
 * Example:
 *   <Breadcrumbs
 *     crumbs={[
 *       { label: 'Home', href: '/' },
 *       { label: 'Services', href: '/services' },
 *       { label: 'Business Card Printing' },
 *     ]}
 *   />
 *
 * Pass variant="dark" when rendering inside a dark hero section.
 */
export function Breadcrumbs({ crumbs, variant = 'light', className = '' }: BreadcrumbsProps) {
  if (crumbs.length === 0) return null

  const styles = VARIANTS[variant]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className={`flex flex-wrap items-center gap-1.5 ${styles.list}`}>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className={`w-3.5 h-3.5 flex-shrink-0 ${styles.separator}`}
                    aria-hidden="true"
                  />
                )}
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className={styles.link}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={styles.current}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}