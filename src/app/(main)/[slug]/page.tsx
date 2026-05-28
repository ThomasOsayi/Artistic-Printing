import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { IndustryPage } from '@/components/industry-page'
import type { PageContent } from '@/lib/admin-data'

const SITE_URL = 'https://www.artisticprinting.com'

// ─── ISR settings ───────────────────────────────────────────────────────
// Hourly revalidation matches the sitemap cadence; content edits surface
// in ~60 min without a deploy.
export const revalidate = 3600
// Pages added after build still render on first request (default true,
// declared explicitly for clarity).
export const dynamicParams = true

// ─── Build-time SSG for every published page ───────────────────────────
export async function generateStaticParams() {
  try {
    const q = query(collection(db, 'pageContent'), where('published', '==', true))
    const snapshot = await getDocs(q)
    return snapshot.docs
      .map((d) => d.data().slug as string | undefined)
      .filter((slug): slug is string => Boolean(slug))
      .map((slug) => ({ slug }))
  } catch (err) {
    console.error('[slug] generateStaticParams failed:', err)
    return []
  }
}

// ─── Helper: fetch a published doc by slug, or null ─────────────────────
async function getPage(slug: string): Promise<PageContent | null> {
  try {
    const q = query(
      collection(db, 'pageContent'),
      where('slug', '==', slug),
      limit(1),
    )
    const snapshot = await getDocs(q)
    if (snapshot.empty) return null
    const docSnap = snapshot.docs[0]
    const data = docSnap.data() as PageContent
    if (!data.published) return null
    return { ...data, id: docSnap.id }
  } catch (err) {
    console.error('[slug] getPage failed:', err)
    return null
  }
}

// ─── Per-page SEO metadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
      robots: { index: false, follow: false },
    }
  }

  return {
    // Root layout's title.template appends " — Artistic Printing Co."
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/${page.slug}`,
      type: 'website',
    },
  }
}

// ─── JSON-LD builders ──────────────────────────────────────────────────
function buildServiceJsonLd(page: PageContent) {
  // Use heroBadge as the service name when available (shorter than h1).
  const name = page.heroBadge || page.h1
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: page.metaDescription,
    url: `${SITE_URL}/${page.slug}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Los Angeles' },
    serviceType: name,
  }
}

function buildFaqJsonLd(faqs: NonNullable<PageContent['faqs']>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

// ─── Template router ───────────────────────────────────────────────────
// Phase 1 ships only the industry template. Phase 2-4 will add 'service'
// and 'neighborhood' cases here without touching anything else.
function getTemplate(type: PageContent['type']) {
  switch (type) {
    case 'industry':
      return IndustryPage
    // case 'service':       return ServicePage       // Phase 2-3
    // case 'neighborhood':  return NeighborhoodPage  // Phase 4
    default:
      return null
  }
}

// ─── Page handler ──────────────────────────────────────────────────────
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  const Template = getTemplate(page.type)
  if (!Template) {
    // Type exists but no template implemented yet — treat as 404 so we
    // don't ship a half-rendered page or expose draft content.
    notFound()
  }

  const serviceLd = buildServiceJsonLd(page)
  const faqLd =
    page.faqs && page.faqs.length > 0 ? buildFaqJsonLd(page.faqs) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <Template content={page} />
    </>
  )
}