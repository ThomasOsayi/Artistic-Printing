import { guides } from '@/lib/guides'

// Plain-text summary for AI assistants and crawlers (https://llmstxt.org).
// Only facts that already appear on the live site. Guides are generated from src/lib/guides.ts.
export const dynamic = 'force-static'

const SITE_URL = 'https://www.artisticprinting.com'

const MAIN_PAGES: [string, string, string][] = [
  ['Home', '/', 'Overview of Artistic Printing Co. and what we print'],
  ['Services', '/services', 'All print services by product type'],
  ['Portfolio', '/portfolio', 'Examples of recent print work'],
  ['About', '/about', 'Our family-owned shop on West Pico Boulevard'],
  ['Contact and quotes', '/contact', 'Request a free quote, phone, email and map'],
  ['Printing guides', '/guides', 'Plain-language guides to ordering print'],
]

const LANDING_PAGES: [string, string, string][] = [
  ['Healthcare printing in Los Angeles', '/healthcare-printing-los-angeles', 'Patient forms, signage and bilingual materials for hospitals, clinics, hospices and dental offices'],
  ['Hospitality printing in Los Angeles', '/hospitality-printing-los-angeles', 'Menus, takeout packaging, gift cards and signage for restaurants, hotels and event venues'],
  ['Education printing in Los Angeles', '/education-printing-los-angeles', 'Course catalogs, brochures and signage for schools, universities and academies'],
  ['Automotive printing in Los Angeles', '/automotive-printing-los-angeles', 'Sales brochures, service mailers, vehicle wraps and signage for dealerships'],
  ['Banner printing in Los Angeles', '/banner-printing-los-angeles', 'Custom vinyl banners, retractable stands and mesh banners with grommets'],
  ['Large format printing in Los Angeles', '/large-format-printing-los-angeles', 'Posters, window graphics, wall murals, trade show displays and ADA signage'],
  ['Business card printing in Los Angeles', '/business-card-printing-los-angeles', 'Business cards in matte, gloss, soft-touch, spot UV and foil finishes'],
  ['Brochure printing in Los Angeles', '/brochure-printing-los-angeles', 'Tri-fold, bi-fold and multi-page brochures with in-house folding and bindery'],
  ['Flyer printing in Los Angeles', '/flyer-printing-los-angeles', 'Full-color flyers from 100 to 50,000 pieces'],
]

const line = ([label, path, note]: [string, string, string]) => `- [${label}](${SITE_URL}${path === '/' ? '' : path}): ${note}`

export function GET() {
  const body = [
    '# Artistic Printing Co.',
    '',
    '> Family-owned commercial printer at 5878 West Pico Boulevard, Los Angeles, CA 90019. Phone (323) 939-8911, email design@artisticprinting.com.',
    '',
    'Artistic Printing Co. prints custom healthcare and dental forms, NCR carbonless forms, business cards, brochures, flyers, banners, large format graphics and packaging for Los Angeles businesses, with digital, offset and large format printing under one roof. We work with hospitals, clinics, hospices, home health agencies, dental offices, restaurants, hotels, car dealerships and schools, and we offer free pickup and delivery in Los Angeles. Quotes are free at ' + SITE_URL + '/contact.',
    '',
    '## Main pages',
    ...MAIN_PAGES.map(line),
    '',
    '## Industries and services',
    ...LANDING_PAGES.map(line),
    '',
    '## Printing guides',
    ...guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.shortAnswer.split('. ')[0].replace(/\.$/, '')}.`),
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
