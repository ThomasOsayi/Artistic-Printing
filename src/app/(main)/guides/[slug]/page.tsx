import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { guides, guideBySlug } from '@/lib/guides'

const SITE_URL = 'https://www.artisticprinting.com'
export const dynamicParams = false
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const g = guideBySlug((await params).slug)
  if (!g) return {}
  return {
    title: g.title,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: 'article', title: g.title, description: g.description, url: `${SITE_URL}/guides/${g.slug}`, publishedTime: g.date },
  }
}

function Body({ text }: { text: string }) {
  const out: React.ReactNode[] = []
  let list: string[] = []
  const flush = () => {
    if (list.length) out.push(<ul key={`l${out.length}`} className="list-disc pl-6 space-y-2 mb-6 text-slate-700">{list.map((l, i) => <li key={i}>{l}</li>)}</ul>)
    list = []
  }
  text.split('\n').map((l) => l.trim()).filter(Boolean).forEach((l, i) => {
    if (l.startsWith('- ')) { list.push(l.slice(2)); return }
    flush()
    out.push(l.startsWith('## ')
      ? <h2 key={i} className="mt-10 mb-3 text-2xl font-bold text-slate-900">{l.slice(3)}</h2>
      : <p key={i} className="mb-5 text-lg leading-relaxed text-slate-700">{l}</p>)
  })
  flush()
  return <>{out}</>
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const g = guideBySlug((await params).slug)
  if (!g) notFound()
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description, abstract: g.shortAnswer, datePublished: g.date, dateModified: g.date, url: `${SITE_URL}/guides/${g.slug}`, keywords: g.keywords.join(', '), author: { '@type': 'Organization', name: 'Artistic Printing Co.', url: SITE_URL }, publisher: { '@type': 'Organization', name: 'Artistic Printing Co.', url: SITE_URL } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: g.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ]
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: g.title }]} />
        <p className="mt-8 text-sm text-slate-500">{new Date(g.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · Artistic Printing Co.</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">{g.title}</h1>
        <p className="mt-5 text-xl text-slate-600">{g.description}</p>
        <aside className="mt-10 mb-10 rounded-xl border border-cyan-200 bg-cyan-50 p-6" aria-label="Short answer">
          <p className="text-xs font-semibold tracking-widest text-cyan-700 uppercase">The short answer</p>
          <p className="mt-2 text-lg leading-relaxed text-slate-800">{g.shortAnswer}</p>
        </aside>
        <Body text={g.body} />
        <h2 className="mt-12 mb-4 text-2xl font-bold text-slate-900">Questions, answered in one line</h2>
        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          {g.faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-2 text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Need this printed in Los Angeles?</h2>
          <p className="mt-2 text-slate-300">Artistic Printing Co. is a family-owned commercial printer at 5878 West Pico Boulevard with free pickup and delivery across LA.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {g.related.map((r) => (
              <Link key={r.href} href={r.href} className={r.href === '/contact' ? 'rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-400' : 'rounded-lg border border-slate-600 px-5 py-3 text-slate-200 hover:border-slate-400'}>{r.label}</Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
