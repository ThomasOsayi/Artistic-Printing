import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    category: 'Commercial Printing',
    items: [
      { name: 'Business Cards', desc: 'Premium cardstock, various finishes' },
      { name: 'Brochures & Flyers', desc: 'Tri-fold, bi-fold, custom sizes' },
      { name: 'Booklets & Catalogs', desc: 'Saddle-stitch, perfect bound' },
      { name: 'Postcards & Mailers', desc: 'Direct mail ready' },
    ],
  },
  {
    category: 'Custom Packaging',
    items: [
      { name: 'Paper Bags', desc: 'Custom branded bags' },
      { name: 'Napkins & Coasters', desc: 'Restaurant essentials' },
      { name: 'Food Packaging', desc: 'Boxes, sleeves, wraps' },
      { name: 'Gift Card Holders', desc: 'Retail packaging' },
    ],
  },
  {
    category: 'Large Format',
    items: [
      { name: 'Banners & Signs', desc: 'Indoor and outdoor' },
      { name: 'Posters', desc: 'Up to 44" wide' },
      { name: 'Trade Show Graphics', desc: 'Backdrops, stands' },
      { name: 'Vehicle Wraps', desc: 'Full or partial' },
    ],
  },
  {
    category: 'Office & Forms',
    items: [
      { name: 'Letterheads', desc: 'Matching envelopes' },
      { name: 'NCR Forms', desc: 'Multi-part carbonless' },
      { name: 'Labels & Stickers', desc: 'Any size, any quantity' },
      { name: 'Notepads', desc: 'Custom branded' },
    ],
  },
]

const capabilities = [
  'High-Speed B&W Copies',
  'Full-Color Copies',
  'Digital Printing',
  'Offset Printing',
  '1-4 Color Printing',
  'Large Format',
  'Bindery Services',
  'Graphic Design',
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 max-w-2xl">
            Full-service commercial printing with digital, offset, and large format
            capabilities—all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((category, i) => (
              <Card key={i} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <div>
                          <div className="font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 mt-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white p-4 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don&apos;t See What You Need?</h2>
          <p className="text-cyan-100 mb-6">We handle custom projects of all kinds. Get in touch!</p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
