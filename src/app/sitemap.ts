import type { MetadataRoute } from 'next'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const SITE_URL = 'https://www.artisticprinting.com'

// Revalidate hourly so new pages and content updates surface to Google within ~60 min.
// Trade-off: 1 Firestore read per hour (~720/month) vs. fresher crawl signals.
export const revalidate = 3600

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: SITE_URL,                 lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
  { url: `${SITE_URL}/services`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${SITE_URL}/portfolio`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${SITE_URL}/about`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE_URL}/contact`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
]

// Priority & change-frequency defaults per page type (overrideable per-doc later if needed)
type SitemapEntry = MetadataRoute.Sitemap[number]
const TYPE_DEFAULTS: Record<string, { priority: number; changeFrequency: SitemapEntry['changeFrequency'] }> = {
  industry:     { priority: 0.8, changeFrequency: 'monthly' },
  service:      { priority: 0.8, changeFrequency: 'monthly' },
  neighborhood: { priority: 0.7, changeFrequency: 'monthly' },
  page:         { priority: 0.5, changeFrequency: 'monthly' },
}

interface PageContentDoc {
  slug: string
  type: string
  published: boolean
  updatedAt?: { toDate: () => Date }
}

async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    const q = query(collection(db, 'pageContent'), where('published', '==', true))
    const snapshot = await getDocs(q)

    return snapshot.docs.flatMap((doc): SitemapEntry[] => {
      const data = doc.data() as PageContentDoc
      if (!data.slug) return [] // skip malformed docs
      const defaults = TYPE_DEFAULTS[data.type] ?? TYPE_DEFAULTS.page
      return [{
        url: `${SITE_URL}/${data.slug}`,
        lastModified: data.updatedAt?.toDate?.() ?? new Date(),
        changeFrequency: defaults.changeFrequency,
        priority: defaults.priority,
      }]
    })
  } catch (err) {
    // Firestore unreachable during build/revalidation — degrade gracefully to static routes
    console.error('[sitemap] Failed to fetch pageContent, returning static routes only:', err)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicRoutes = await getDynamicRoutes()
  return [...STATIC_ROUTES, ...dynamicRoutes]
}