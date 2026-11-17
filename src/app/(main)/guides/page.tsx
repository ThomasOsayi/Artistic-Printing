import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Printing Guides for Los Angeles Businesses',
  description:
    'Practical guides to ordering commercial printing in Los Angeles: forms, business cards, banners, brochures, paper stocks and turnaround, from Artistic Printing Co.',
  alternates: { canonical: '/guides' },
}

export default function GuidesPage() {
  return (
    <main className="bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Guides' }]} />
        <p className="mt-8 text-sm font-semibold tracking-widest text-cyan-600 uppercase">Printing guides</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">How to order printing that comes out right</h1>
        <p className="mt-5 text-lg text-slate-600 max-w-2xl">Straight answers on forms, cards, banners, paper and turnaround from a Los Angeles print shop on Pico Boulevard.</p>
        <ul className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {guides.map((g) => (
            <li key={g.slug} className="py-7">
              <Link href={`/guides/${g.slug}`} className="text-2xl font-semibold text-slate-900 hover:text-cyan-600 transition-colors">{g.title}</Link>
              <p className="mt-2 text-slate-600">{g.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
