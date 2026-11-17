// Print-buying guides at /guides/[slug]. Code-based on purpose (no Firestore write needed),
// so new guides ship with a normal git push. Newest first.
// Body format: "## " = heading, "- " = bullet, anything else = paragraph.
// Only state facts about Artistic Printing that already appear on the live site.

export interface Guide {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  keywords: string[]
  shortAnswer: string // answer-first block AI tools can quote verbatim
  related: { href: string; label: string }[] // service/industry pages on this site
  faqs: { q: string; a: string }[]
  body: string
}

export const guides: Guide[] = [
  {
    slug: 'ncr-carbonless-forms-how-many-parts',
    title: 'NCR carbonless forms: 2-part, 3-part or 4-part?',
    description:
      'How to choose the number of parts for carbonless forms, what each copy color is for, and how numbering, binding and sizes affect the order.',
    date: '2026-11-17',
    keywords: ['NCR forms', 'carbonless forms', '3 part forms', 'carbonless form printing Los Angeles'],
    shortAnswer:
      'Choose one part for every person who needs to keep a copy. Two-part forms (white and canary) suit most invoices and receipts, three-part (white, canary, pink) suit work orders that go to a customer, the office and the field, and four-part adds a goldenrod copy for one more department.',
    related: [
      { href: '/healthcare-printing-los-angeles', label: 'Healthcare printing in Los Angeles' },
      { href: '/automotive-printing-los-angeles', label: 'Automotive printing in Los Angeles' },
      { href: '/contact', label: 'Request a quote' },
    ],
    faqs: [
      { q: 'What does NCR stand for?', a: 'NCR stands for "no carbon required." Each sheet is coated so pressure from a pen transfers the writing to the sheets below without separate carbon paper.' },
      { q: 'What are the standard colors for carbonless forms?', a: 'The common order is white on top, then canary (yellow), pink and goldenrod. The top sheet usually goes to the customer.' },
      { q: 'Can carbonless forms be numbered?', a: 'Yes. Sequential numbering is printed on every part so each set can be tracked, which matters for invoices, work orders and patient forms.' },
      { q: 'Should forms be padded or booked?', a: 'Padded sets are glued at the top and tear off individually. Booked forms are bound with a cover so the remaining copies stay together in a book.' },
    ],
    body: `Carbonless forms are still the fastest way to give everyone in a transaction their own copy without a printer or a screen. The only real decision is how many parts each set needs.
## Count the people who keep a copy
Start with the people, not the paper. If a customer and your office both need a record, you need two parts. If a technician in the field also keeps one, you need three. Every extra part adds cost per set, so do not add a copy nobody files.
## What each part usually does
- White: the original, usually handed to the customer
- Canary: the office or accounting copy
- Pink: the field, warehouse or department copy
- Goldenrod: a fourth copy for a second department or the file
## Numbering, sizes and binding
Sequential numbering makes every set traceable, which is why most invoices and work orders are numbered. Common sizes are letter and half letter. Sets can be padded and glued at the top, or booked with a cover so copies stay together.
## Getting the layout right
Leave enough writing space for real handwriting, put the fields people fill in most often near the top, and keep fine print off the lower parts where it is harder to read. Ask for a proof of every part before printing.
## When to reorder
Track how many sets you use per month and reorder before you run out. Numbered forms should continue from the last number you used.`,
  },
]

export const guideBySlug = (s: string) => guides.find((g) => g.slug === s)
