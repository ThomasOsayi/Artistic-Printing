import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { PageContent } from './admin-data'

// ─── Phase 2 service pages ──────────────────────────────────────────────
// Kept in a sibling file so page-content-seed.ts stays readable as the
// number of landing pages grows. Same doc shape, same `pageContent`
// collection, same `{type}-{slug}` ID convention.
//
// NOTE: `startingPrice` and `turnaround` values below are PLACEHOLDERS.
// Confirm each with Estevan before publishing — they are rendered on the
// page AND emitted as Offer JSON-LD.

export const SERVICE_SEED_PAGES: Omit<PageContent, 'createdAt' | 'updatedAt'>[] = [

  // ═════════════════════════════════════════════════════════════════════
  // BUSINESS CARDS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'service-business-card-printing-los-angeles',
    type: 'service',
    slug: 'business-card-printing-los-angeles',
    published: true,

    metaTitle: 'Business Card Printing in Los Angeles',
    metaDescription:
      'Custom business cards printed in Los Angeles. Matte, gloss, soft-touch, spot UV, and foil finishes. Fast local turnaround and free delivery across LA County.',

    heroBadge: 'LA Business Card Printing',
    h1: 'Business Cards Printed in Los Angeles',
    heroSubtitle:
      'Premium stocks, in-house finishing, and proofs you actually get to approve. We print business cards for LA medical practices, dealerships, restaurants, and small businesses.',
    heroBullets: [
      '16pt to 32pt stocks',
      'Spot UV, foil & soft-touch',
      'Free LA delivery',
      'Proof before print',
    ],

    sections: {
      heroBadgeIcon: 'credit-card',
      heroImage:
        'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80',
      turnaround: '2–4 business days',

      whyEyebrow: 'Why Artistic Printing',
      whyHeading: 'Business cards that hold up in a handshake',
      whySubtitle:
        'Thick stocks, clean edges, and finishes applied in our own shop on Pico Blvd. Nothing gets outsourced and shipped in from out of state.',

      specEyebrow: 'Specifications',
      specHeading: 'Sizes, stocks, and finishing options',
      specIntro:
        'Standard specs below. If you need something custom, we quote it the same day.',

      printEyebrow: 'Options',
      printHeading: 'Finishes and card styles we produce',
      printIntro:
        'From straightforward matte cards to foil-stamped and die-cut work, all finished in-house.',

      trustEyebrow: 'Printed for LA businesses',
      trustHeading: 'Medical practices, dealerships, restaurants and more',

      processEyebrow: 'How It Works',
      processHeading: 'From your file to your hands in days',
      processSubtitle:
        'Send artwork or let our designers build it. Either way you see a proof before anything runs.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Business card questions we get asked',
      faqSubtitle: 'Something not covered here?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Need business cards printed in LA?',
      ctaSubtitle:
        'Send us your artwork or your specs and we will quote it within 24 hours. Free pickup and delivery anywhere in LA County.',
    },

    complianceCards: [
      { icon: 'layers',      color: 'cyan-blue',    title: 'Premium Stocks',        description: '16pt, 18pt, 22pt, and 32pt options in matte, gloss, uncoated, and cotton. Samples on request.' },
      { icon: 'sparkles',    color: 'purple-pink',  title: 'In-House Finishing',    description: 'Spot UV, soft-touch lamination, foil stamping, embossing, and rounded corners done under our own roof.' },
      { icon: 'palette',     color: 'amber-orange', title: 'Design Help Included',  description: 'No print-ready file? Our designers set up your card from a logo or an old card at no extra charge.' },
      { icon: 'truck',       color: 'emerald-teal', title: 'Free LA Delivery',      description: 'Complimentary pickup and delivery across LA County, or pick up at our Pico Blvd shop.' },
    ],

    specRows: [
      { label: 'Standard Sizes',   value: '3.5" × 2" standard · 2" × 2" square · 3.5" × 1.75" slim · custom sizes available' },
      { label: 'Paper Stocks',     value: '16pt gloss · 16pt matte · 18pt uncoated · 22pt cotton · 32pt triple-layer' },
      { label: 'Finishes',         value: 'Matte laminate · gloss laminate · soft-touch · spot UV · foil stamp · embossing' },
      { label: 'Printing',         value: 'Full color one side or both sides (4/0 or 4/4)' },
      { label: 'Minimum Order',    value: '100 cards' },
      { label: 'Typical Quantities', value: '250 · 500 · 1,000 · 2,500 · 5,000' },
      { label: 'Turnaround',       value: '2–4 business days after proof approval. Rush available.' },
      { label: 'File Formats',     value: 'PDF, AI, INDD, PSD at 300dpi with 0.125" bleed. We can also build from a logo.' },
    ],

    printItems: [
      { icon: 'square',      title: 'Matte Cards',        subtitle: 'Soft, non-reflective finish' },
      { icon: 'sparkles',    title: 'Gloss Cards',        subtitle: 'High shine, vivid color' },
      { icon: 'frame',       title: 'Soft-Touch',         subtitle: 'Velvet feel, premium look' },
      { icon: 'zap',         title: 'Spot UV',            subtitle: 'Selective high-gloss accents' },
      { icon: 'stamp',       title: 'Foil Stamped',       subtitle: 'Gold, silver, copper, holographic' },
      { icon: 'layers',      title: 'Thick 32pt Stock',   subtitle: 'Triple-layer with edge color' },
      { icon: 'scissors',    title: 'Rounded Corners',    subtitle: 'Die-cut radius corners' },
      { icon: 'id-card',     title: 'Clinician Cards',    subtitle: 'For medical and dental staff' },
      { icon: 'briefcase',   title: 'Team Card Programs', subtitle: 'Multi-employee reorders' },
    ],

    trustLogos: [
      { icon: 'hospital',       color: 'cyan',    name: 'Medical & Dental Practices' },
      { icon: 'car',            color: 'amber',   name: 'LA Dealerships' },
      { icon: 'utensils',       color: 'rose',    name: 'Restaurants & Cafés' },
      { icon: 'building',       color: 'blue',    name: 'Professional Services' },
      { icon: 'graduation-cap', color: 'purple',  name: 'Schools & Faculty' },
      { icon: 'store',          color: 'emerald', name: 'Local Retail' },
    ],

    faqs: [
      {
        question: 'What is the minimum order for business cards?',
        answer:
          'We print from 100 cards up. Most clients order 500 or 1,000 at a time because the per-card cost drops significantly at those quantities. If you need a short run for an event or a new hire, 100 is no problem.',
      },
      {
        question: 'Can you print if I only have a logo and no design file?',
        answer:
          'Yes. Our in-house designers will lay out your card from a logo, an old business card, or even a photo of one. Basic setup is included with your order. You approve a digital proof before anything runs.',
      },
      {
        question: 'What is the difference between spot UV and soft-touch?',
        answer:
          'Soft-touch is a velvety matte laminate applied across the whole card, so it feels smooth and premium in the hand. Spot UV is a high-gloss coating applied only to selected areas, usually a logo or name, so it catches the light against a matte background. They are often combined on the same card.',
      },
      {
        question: 'How fast can I get business cards in Los Angeles?',
        answer:
          'Standard turnaround is 2–4 business days after you approve the proof. Rush production is available when you need cards for a conference or an opening. Because we deliver locally across LA County, you are not waiting on shipping transit time.',
      },
      {
        question: 'Do you offer reorders at the same specs?',
        answer:
          'Yes. We keep approved files on record, so a reorder is usually a single phone call or email. For practices and dealerships with multiple staff members, we set up templates so individual cards can be reordered without redesigning anything.',
      },
    ],

    relatedSlugs: [
      'brochure-printing-los-angeles',
      'flyer-printing-los-angeles',
      'healthcare-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // BROCHURES
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'service-brochure-printing-los-angeles',
    type: 'service',
    slug: 'brochure-printing-los-angeles',
    published: true,

    metaTitle: 'Brochure Printing in Los Angeles',
    metaDescription:
      'Tri-fold, bi-fold, and multi-page brochure printing in Los Angeles. Full color, premium stocks, in-house folding and bindery, free LA County delivery.',

    heroBadge: 'LA Brochure Printing',
    h1: 'Brochure Printing in Los Angeles',
    heroSubtitle:
      'Tri-fold, bi-fold, gate-fold, and saddle-stitched booklets printed and folded in our own shop. Used by LA clinics, dealerships, schools, and hotels.',
    heroBullets: [
      'Tri-fold to 32-page booklets',
      'In-house folding & bindery',
      'Bilingual layouts available',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'book-open',
      heroImage:
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80',
      turnaround: '3–5 business days',

      whyEyebrow: 'Why Artistic Printing',
      whyHeading: 'Folded right, on the first run',
      whySubtitle:
        'Folding is where most brochure jobs go wrong. Ours are scored and folded in-house, so panels line up and heavy stocks do not crack.',

      specEyebrow: 'Specifications',
      specHeading: 'Folds, sizes, stocks, and page counts',
      specIntro:
        'The formats we run most often. Custom folds and sizes are quoted the same day.',

      printEyebrow: 'Options',
      printHeading: 'Brochure formats we produce',
      printIntro:
        'From a simple tri-fold rack card to a perfect-bound program, handled start to finish.',

      trustEyebrow: 'Printed for LA organizations',
      trustHeading: 'Clinics, dealerships, schools and hotels across LA',

      processEyebrow: 'How It Works',
      processHeading: 'From layout to delivered boxes',
      processSubtitle:
        'Multi-panel layouts need careful proofing. We send a folding proof so you can see how the panels actually break.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Brochure printing questions',
      faqSubtitle: 'Working on something unusual?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Need brochures printed in LA?',
      ctaSubtitle:
        'Send your file or describe the piece and we will quote within 24 hours, including folding and delivery.',
    },

    complianceCards: [
      { icon: 'scissors',  color: 'purple-pink',  title: 'In-House Folding',      description: 'Scoring and folding done on site, so heavy coated stocks fold cleanly without cracking along the spine.' },
      { icon: 'palette',   color: 'cyan-blue',    title: 'Color Consistency',     description: 'PMS matching and calibrated proofing so brand colors hold across the whole run and across reprints.' },
      { icon: 'type',      color: 'amber-orange', title: 'Bilingual Layouts',     description: 'English and Spanish brochures set so neither language reads as an afterthought. Common for LA clinics and schools.' },
      { icon: 'truck',     color: 'emerald-teal', title: 'Free LA Delivery',      description: 'Boxed, counted, and delivered anywhere in LA County at no charge.' },
    ],

    specRows: [
      { label: 'Fold Types',       value: 'Tri-fold (letter fold) · bi-fold (half fold) · Z-fold · gate fold · roll fold' },
      { label: 'Flat Sizes',       value: '8.5" × 11" · 8.5" × 14" · 11" × 17" · 11" × 25.5" · custom' },
      { label: 'Booklet Options',  value: 'Saddle-stitched 8–48 pages · perfect-bound 40–300 pages' },
      { label: 'Paper Stocks',     value: '100lb gloss text · 80lb matte text · 100lb cover · uncoated · FSC-certified options' },
      { label: 'Finishes',         value: 'Aqueous coating · matte or gloss laminate · spot UV on covers' },
      { label: 'Minimum Order',    value: '100 pieces (50 for bound booklets)' },
      { label: 'Turnaround',       value: '3–5 business days after proof approval. Booklets 5–7 days.' },
      { label: 'File Setup',       value: 'PDF with 0.125" bleed, panel widths adjusted for fold creep. We can set this up for you.' },
    ],

    printItems: [
      { icon: 'book-open',     title: 'Tri-Fold Brochures',   subtitle: 'The standard rack piece' },
      { icon: 'file-text',     title: 'Bi-Fold Brochures',    subtitle: 'Four panel, more room' },
      { icon: 'layers',        title: 'Z-Fold & Gate Fold',   subtitle: 'For sequential storytelling' },
      { icon: 'copy',          title: 'Saddle-Stitched',      subtitle: '8 to 48 page booklets' },
      { icon: 'folder-open',   title: 'Perfect-Bound',        subtitle: 'Catalogs up to 300 pages' },
      { icon: 'clipboard-list',title: 'Patient Education',    subtitle: 'Clinical info pieces' },
      { icon: 'car',           title: 'Sales Brochures',      subtitle: 'Dealership model lineups' },
      { icon: 'graduation-cap',title: 'Admissions Pieces',    subtitle: 'School and program guides' },
      { icon: 'building-2',    title: 'Hotel Collateral',     subtitle: 'In-room guides & directories' },
    ],

    trustLogos: [
      { icon: 'hospital',       color: 'cyan',    name: 'LA Clinics & Hospitals' },
      { icon: 'car',            color: 'amber',   name: 'Dealership Groups' },
      { icon: 'graduation-cap', color: 'blue',    name: 'Schools & Universities' },
      { icon: 'building-2',     color: 'pink',    name: 'Hotels & Venues' },
      { icon: 'briefcase',      color: 'purple',  name: 'Professional Firms' },
      { icon: 'users',          color: 'emerald', name: 'Nonprofits' },
    ],

    faqs: [
      {
        question: 'What is the difference between a tri-fold and a Z-fold?',
        answer:
          'Both use three panels on each side, but they fold differently. A tri-fold tucks one panel inside the other, so opening it reveals panels in sequence and the inside spread is protected. A Z-fold accordions outward, so all panels are the same width and the piece can be read like a timeline. Tri-fold is more common for rack display; Z-fold works better for step-by-step content.',
      },
      {
        question: 'Do I need to adjust panel widths for folding?',
        answer:
          'Yes, and this is the most common file problem we see. On a tri-fold the panel that tucks inside must be slightly narrower, usually about 1/16 of an inch, or the fold buckles. If you send us a flat file with equal panels we will adjust it and show you the corrected proof before printing.',
      },
      {
        question: 'Can you print bilingual English and Spanish brochures?',
        answer:
          'Routinely. A large share of our clinic and school work is bilingual. We handle the layout so both languages fit comfortably without shrinking one to an unreadable size, and we can print English and Spanish as separate versions or as a single dual-language piece.',
      },
      {
        question: 'What is the minimum order for brochures?',
        answer:
          'One hundred pieces for folded brochures, fifty for bound booklets. Short runs are useful for testing a design before committing to a larger print, and we can reprint at higher volume once the copy is settled.',
      },
      {
        question: 'Do you offer eco-friendly or recycled paper?',
        answer:
          'Yes. We stock FSC-certified and post-consumer recycled options, and for most brochure jobs they price the same as conventional stock. Tell us at quote time and we will spec the closest sustainable match to the look you want.',
      },
    ],

    relatedSlugs: [
      'flyer-printing-los-angeles',
      'business-card-printing-los-angeles',
      'healthcare-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // FLYERS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'service-flyer-printing-los-angeles',
    type: 'service',
    slug: 'flyer-printing-los-angeles',
    published: true,

    metaTitle: 'Flyer Printing in Los Angeles',
    metaDescription:
      'Fast full-color flyer printing in Los Angeles. Same-day rush available, quantities from 100 to 50,000, free LA County delivery.',

    heroBadge: 'LA Flyer Printing',
    h1: 'Flyer Printing in Los Angeles',
    heroSubtitle:
      'Full-color flyers for events, promotions, and direct mail. Short runs and large runs both welcome, with same-day rush available when the date will not move.',
    heroBullets: [
      '100 to 50,000 quantities',
      'Same-day rush available',
      'Direct mail services',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'image',
      heroImage:
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=1920&q=80',
      turnaround: '1–3 business days',

      whyEyebrow: 'Why Artistic Printing',
      whyHeading: 'Built for deadlines that do not move',
      whySubtitle:
        'Events, grand openings, and promotions run on fixed dates. We keep common flyer stocks in inventory so rush jobs are not waiting on paper.',

      specEyebrow: 'Specifications',
      specHeading: 'Sizes, stocks, and quantities',
      specIntro:
        'Our standard flyer configurations. Odd sizes and custom cuts are quoted same day.',

      printEyebrow: 'Options',
      printHeading: 'Flyer types we print',
      printIntro:
        'Single-sheet promotional printing in every common format, plus direct mail handling.',

      trustEyebrow: 'Printed for LA',
      trustHeading: 'Restaurants, venues, clinics and retailers',

      processEyebrow: 'How It Works',
      processHeading: 'Artwork in, flyers out',
      processSubtitle:
        'The simplest job we run. Print-ready files submitted in the morning can often be finished the same day.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Flyer printing questions',
      faqSubtitle: 'On a tight deadline?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Need flyers printed fast in LA?',
      ctaSubtitle:
        'Send your file and your deadline. We will tell you honestly whether we can hit it, and quote within 24 hours.',
    },

    complianceCards: [
      { icon: 'zap',      color: 'amber-orange', title: 'Same-Day Rush',       description: 'Print-ready files submitted before 11am can often be finished the same day. Rush fees stay modest because we stock the paper.' },
      { icon: 'package',  color: 'emerald-teal', title: 'Any Quantity',        description: 'One hundred flyers for a neighborhood drop or fifty thousand for a mail campaign. Both are routine.' },
      { icon: 'star',     color: 'cyan-blue',    title: 'Direct Mail Ready',   description: 'Address printing, postal sorting, and CASS certification handled in-house for mailed campaigns.' },
      { icon: 'truck',    color: 'purple-pink',  title: 'Free LA Delivery',    description: 'Delivered anywhere in LA County at no charge, or ready for pickup on Pico Blvd.' },
    ],

    specRows: [
      { label: 'Standard Sizes',   value: '8.5" × 11" · 5.5" × 8.5" (half) · 4" × 6" · 5" × 7" · 11" × 17" · custom cuts' },
      { label: 'Paper Stocks',     value: '70lb text · 100lb gloss text · 100lb matte text · 14pt card · 100lb cover' },
      { label: 'Printing',         value: 'Full color one side (4/0) or both sides (4/4)' },
      { label: 'Finishes',         value: 'Uncoated · aqueous gloss · matte · UV coating' },
      { label: 'Quantities',       value: '100 to 50,000+' },
      { label: 'Turnaround',       value: '1–3 business days standard. Same-day rush on print-ready files before 11am.' },
      { label: 'Direct Mail',      value: 'Variable data addressing, postal sorting, CASS certification, mail drop' },
      { label: 'File Formats',     value: 'PDF, AI, PSD, JPG at 300dpi with 0.125" bleed' },
    ],

    printItems: [
      { icon: 'image',     title: 'Event Flyers',        subtitle: 'Concerts, openings, festivals' },
      { icon: 'tag',       title: 'Promotional Flyers',  subtitle: 'Sales and seasonal offers' },
      { icon: 'scroll-text',title: 'Direct Mail Pieces', subtitle: 'Addressed and mailed' },
      { icon: 'file-text', title: 'Rack Cards',          subtitle: '4" × 9" display cards' },
      { icon: 'ticket',    title: 'Coupon Flyers',       subtitle: 'Perforated tear-offs' },
      { icon: 'calendar',  title: 'Menu Inserts',        subtitle: 'Daily and weekly specials' },
      { icon: 'clipboard-list', title: 'Health Notices', subtitle: 'Clinic and patient info' },
      { icon: 'megaphone', title: 'Door Hangers',        subtitle: 'Die-cut neighborhood drops' },
      { icon: 'users',     title: 'Community Notices',   subtitle: 'Bilingual outreach pieces' },
    ],

    trustLogos: [
      { icon: 'utensils',   color: 'rose',    name: 'Restaurants & Cafés' },
      { icon: 'ticket',     color: 'purple',  name: 'Event Venues' },
      { icon: 'hospital',   color: 'cyan',    name: 'Clinics & Care Homes' },
      { icon: 'store',      color: 'emerald', name: 'Retail & Salons' },
      { icon: 'car',        color: 'amber',   name: 'Dealerships' },
      { icon: 'users',      color: 'blue',    name: 'Community Organizations' },
    ],

    faqs: [
      {
        question: 'How fast can you print flyers in Los Angeles?',
        answer:
          'Standard turnaround is one to three business days. If you send a print-ready file before 11am we can often finish the same day, and because we deliver locally you are not adding shipping time on top. Tell us your actual deadline and we will tell you straight whether it is achievable.',
      },
      {
        question: 'What is the cheapest flyer option?',
        answer:
          'Full color on 70lb uncoated text stock, printed one side, is the most economical configuration. Moving to a coated gloss stock or printing both sides adds cost but usually looks considerably better for anything a customer will hold onto. We can quote both so you can compare.',
      },
      {
        question: 'Can you handle the mailing as well as the printing?',
        answer:
          'Yes. We do variable data addressing, postal presorting, and CASS certification, and we can drop the finished mailing at the postal facility. You supply the list or work with a list broker, and we handle everything from press to post office.',
      },
      {
        question: 'Do you print door hangers?',
        answer:
          'Yes. Door hangers are die-cut from card stock with a hook cutout, typically 4.25" × 11". They are a common choice for neighborhood service businesses and restaurant delivery promotions across LA.',
      },
      {
        question: 'What resolution should my artwork be?',
        answer:
          'Three hundred dpi at final print size, with an eighth-inch bleed on any element that runs to the edge. If you only have a lower-resolution file we will tell you honestly how it will look before printing rather than letting you find out after.',
      },
    ],

    relatedSlugs: [
      'brochure-printing-los-angeles',
      'banner-printing-los-angeles',
      'hospitality-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // BANNERS
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'service-banner-printing-los-angeles',
    type: 'service',
    slug: 'banner-printing-los-angeles',
    published: true,

    metaTitle: 'Banner Printing in Los Angeles',
    metaDescription:
      'Custom vinyl banners, retractable stands, and mesh banners printed in Los Angeles. Weather-resistant outdoor materials, grommets included, free LA delivery.',

    heroBadge: 'LA Banner Printing',
    h1: 'Custom Banner Printing in Los Angeles',
    heroSubtitle:
      'Vinyl banners, retractable stands, mesh fence banners, and step-and-repeat backdrops. Built to survive LA sun and wind, finished with grommets and hemmed edges.',
    heroBullets: [
      'Indoor & outdoor vinyl',
      'Grommets & hemming included',
      'Retractable stands',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'megaphone',
      heroImage:
        'https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80',
      turnaround: '2–4 business days',

      whyEyebrow: 'Why Artistic Printing',
      whyHeading: 'Banners that survive an LA summer',
      whySubtitle:
        'Outdoor signage fails at the edges and the grommets first. We hem every edge and reinforce grommet points as standard, not as an upcharge.',

      specEyebrow: 'Specifications',
      specHeading: 'Materials, sizes, and finishing',
      specIntro:
        'Standard banner configurations. Oversized and custom shapes quoted same day.',

      printEyebrow: 'Options',
      printHeading: 'Banner types we produce',
      printIntro:
        'Indoor and outdoor display graphics for events, storefronts, and construction sites.',

      trustEyebrow: 'Printed for LA',
      trustHeading: 'Dealerships, venues, schools and retailers',

      processEyebrow: 'How It Works',
      processHeading: 'Sized, printed, finished, delivered',
      processSubtitle:
        'Large format artwork needs a scaled proof. We confirm dimensions and mounting before anything goes to the printer.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Banner printing questions',
      faqSubtitle: 'Have an unusual install?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Need a banner printed in LA?',
      ctaSubtitle:
        'Tell us the size, where it is going, and how long it needs to last. We will quote within 24 hours.',
    },

    complianceCards: [
      { icon: 'shield-check', color: 'cyan-blue',    title: 'Weather Resistant',    description: 'UV-stable inks on 13oz to 18oz scrim vinyl, rated to hold color outdoors through an LA summer.' },
      { icon: 'badge-check',  color: 'emerald-teal', title: 'Finished Properly',    description: 'Hemmed edges and reinforced grommets every two feet included as standard, not as an add-on.' },
      { icon: 'ruler',        color: 'amber-orange', title: 'Any Size',             description: 'From a 2ft table banner to a 40ft building wrap, printed in continuous runs without seams where possible.' },
      { icon: 'truck',        color: 'purple-pink',  title: 'Free LA Delivery',     description: 'Rolled, protected, and delivered across LA County at no charge.' },
    ],

    specRows: [
      { label: 'Materials',        value: '13oz scrim vinyl · 18oz heavy-duty vinyl · 8oz mesh (wind-permeable) · fabric · blockout' },
      { label: 'Common Sizes',     value: '2\' × 4\' · 3\' × 6\' · 4\' × 8\' · 4\' × 10\' · custom to 16\' wide continuous' },
      { label: 'Finishing',        value: 'Hemmed edges · grommets every 2\' · pole pockets · wind slits · reinforced corners' },
      { label: 'Retractable Stands', value: '33" × 79" · 39" × 79" standard, with carry case included' },
      { label: 'Step & Repeat',    value: '8\' × 8\' and 10\' × 8\' with adjustable frame' },
      { label: 'Indoor Options',   value: 'Fabric banners, foam board, rigid PVC, and retractable displays' },
      { label: 'Turnaround',       value: '2–4 business days. Rush available for event deadlines.' },
      { label: 'Artwork',          value: 'Vector preferred. Raster at 100dpi at full size, or 300dpi at quarter scale.' },
    ],

    printItems: [
      { icon: 'megaphone',  title: 'Vinyl Banners',        subtitle: 'Indoor and outdoor' },
      { icon: 'flag',       title: 'Mesh Fence Banners',   subtitle: 'Wind-permeable' },
      { icon: 'monitor',    title: 'Retractable Stands',   subtitle: 'Trade show and lobby' },
      { icon: 'frame',      title: 'Step & Repeat',        subtitle: 'Media wall backdrops' },
      { icon: 'square',     title: 'Rigid Signs',          subtitle: 'Foam board and PVC' },
      { icon: 'store',      title: 'Storefront Banners',   subtitle: 'Grand opening and sale' },
      { icon: 'graduation-cap', title: 'School Banners',   subtitle: 'Events and athletics' },
      { icon: 'car',        title: 'Dealership Displays',  subtitle: 'Lot and showroom' },
      { icon: 'ticket',     title: 'Event Signage',        subtitle: 'Directional and welcome' },
    ],

    trustLogos: [
      { icon: 'car',            color: 'amber',   name: 'LA Dealerships' },
      { icon: 'ticket',         color: 'purple',  name: 'Event Venues' },
      { icon: 'graduation-cap', color: 'blue',    name: 'Schools & Campuses' },
      { icon: 'store',          color: 'emerald', name: 'Retail Storefronts' },
      { icon: 'building-2',     color: 'cyan',    name: 'Hotels & Conference Centers' },
      { icon: 'users',          color: 'rose',    name: 'Community Events' },
    ],

    faqs: [
      {
        question: 'How long will an outdoor vinyl banner last in Los Angeles?',
        answer:
          'A 13oz scrim vinyl banner with UV-stable inks typically holds up for one to three years outdoors in LA conditions, depending on direct sun exposure. For permanent or long-term installations we recommend 18oz heavy-duty vinyl, which extends that meaningfully. Banners in full southern exposure will fade sooner than shaded ones.',
      },
      {
        question: 'Do I need a mesh banner instead of solid vinyl?',
        answer:
          'If the banner is going on a fence or anywhere with real wind exposure, yes. Mesh has small perforations that let wind pass through instead of turning the banner into a sail, which is what tears grommets out of solid vinyl. For sheltered walls and indoor use, solid vinyl gives you better color density.',
      },
      {
        question: 'Are grommets and hemming included in the price?',
        answer:
          'Yes. Hemmed edges and grommets every two feet are standard on our vinyl banners, not upsells. Pole pockets, wind slits, and reinforced corners are available and quoted when you tell us how the banner will be mounted.',
      },
      {
        question: 'What resolution does artwork need to be for a large banner?',
        answer:
          'Vector artwork is ideal because it scales without any loss. If you only have raster files, 100dpi at the final full size works well for banners viewed from a distance, or 300dpi at quarter scale. Send what you have and we will tell you honestly whether it will hold up at size before we print.',
      },
      {
        question: 'Can you print a banner for an event this week?',
        answer:
          'Often yes. Standard turnaround is two to four business days, and we can prioritize event work when the date is fixed. Call us with the deadline rather than emailing, and we will tell you immediately whether it is realistic.',
      },
    ],

    relatedSlugs: [
      'large-format-printing-los-angeles',
      'flyer-printing-los-angeles',
      'automotive-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // LARGE FORMAT
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'service-large-format-printing-los-angeles',
    type: 'service',
    slug: 'large-format-printing-los-angeles',
    published: true,

    metaTitle: 'Large Format Printing in Los Angeles',
    metaDescription:
      'Large format printing in Los Angeles: posters, window graphics, vehicle wraps, wall murals, trade show displays, and ADA signage. Free LA County delivery.',

    heroBadge: 'LA Large Format Printing',
    h1: 'Large Format Printing in Los Angeles',
    heroSubtitle:
      'Posters, window graphics, wall murals, vehicle wraps, and trade show displays. Wide-format output on paper, vinyl, fabric, and rigid substrates.',
    heroBullets: [
      'Up to 60" wide output',
      'Vinyl, fabric & rigid substrates',
      'Installation available',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'printer',
      heroImage:
        'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
      turnaround: '3–5 business days',

      whyEyebrow: 'Why Artistic Printing',
      whyHeading: 'One shop for the whole wall',
      whySubtitle:
        'Most print shops send large format out. We run it in house, which means we control the color and you deal with one vendor instead of three.',

      specEyebrow: 'Specifications',
      specHeading: 'Substrates, sizes, and applications',
      specIntro:
        'What we can output and what it mounts to. Unusual substrates are worth a phone call.',

      printEyebrow: 'Applications',
      printHeading: 'Large format work we produce',
      printIntro:
        'Anything too big for a standard press, on nearly any surface that will hold ink or adhesive.',

      trustEyebrow: 'Printed for LA',
      trustHeading: 'Dealerships, hospitals, campuses and retailers',

      processEyebrow: 'How It Works',
      processHeading: 'Measured, proofed, printed, installed',
      processSubtitle:
        'Large format lives or dies on measurements. We confirm dimensions and mounting surface before production, and can site-measure for larger installs.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Large format printing questions',
      faqSubtitle: 'Planning a bigger install?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Need large format printing in LA?',
      ctaSubtitle:
        'Send dimensions and where it is going. We will quote within 24 hours, including installation if you need it.',
    },

    complianceCards: [
      { icon: 'printer',      color: 'cyan-blue',    title: 'In-House Wide Format', description: 'Output up to 60 inches wide on our own equipment, so color matches the rest of your printed materials.' },
      { icon: 'layers',       color: 'purple-pink',  title: 'Any Substrate',        description: 'Paper, adhesive vinyl, perforated window film, fabric, foam board, PVC, aluminum composite, and more.' },
      { icon: 'award',        color: 'amber-orange', title: 'Installation Available',description: 'Vehicle wraps, window graphics, and wall murals installed by our team, including prep and post-install inspection.' },
      { icon: 'type',         color: 'emerald-teal', title: 'ADA-Compliant Signage', description: 'Tactile lettering, Grade 2 Braille, contrast ratios, and mounting heights to ADA Title III specification.' },
    ],

    specRows: [
      { label: 'Max Print Width',  value: '60" continuous roll output. Larger pieces tiled with matched seams.' },
      { label: 'Paper & Film',     value: 'Photo satin · matte poster · backlit film · adhesive vinyl · perforated window film' },
      { label: 'Rigid Substrates', value: '3mm & 6mm foam board · PVC · corrugated plastic · aluminum composite · acrylic' },
      { label: 'Fabric',           value: 'Display fabric for tension frames and hanging banners' },
      { label: 'Laminates',        value: 'Matte · gloss · anti-graffiti · floor-rated slip-resistant' },
      { label: 'Vehicle Graphics', value: 'Cast vinyl with 5-year outdoor durability. Full wraps, partial wraps, decals.' },
      { label: 'Turnaround',       value: '3–5 business days. Installs scheduled separately.' },
      { label: 'Artwork',          value: 'Vector preferred. Raster at 100–150dpi at final size for close-viewed work.' },
    ],

    printItems: [
      { icon: 'image',      title: 'Posters',            subtitle: 'Photo and matte stocks' },
      { icon: 'monitor',    title: 'Window Graphics',    subtitle: 'Perforated and cut vinyl' },
      { icon: 'frame',      title: 'Wall Murals',        subtitle: 'Full-wall adhesive graphics' },
      { icon: 'car',        title: 'Vehicle Wraps',      subtitle: 'Full, partial, and decals' },
      { icon: 'square',     title: 'Rigid Signage',      subtitle: 'Foam board, PVC, aluminum' },
      { icon: 'flag',       title: 'Trade Show Displays',subtitle: 'Backdrops and tension frames' },
      { icon: 'map-pin',    title: 'Wayfinding Signage', subtitle: 'ADA-compliant directional' },
      { icon: 'store',      title: 'Storefront Graphics',subtitle: 'Window and door lettering' },
      { icon: 'building-2', title: 'Building Wraps',     subtitle: 'Oversized exterior graphics' },
    ],

    trustLogos: [
      { icon: 'car',            color: 'amber',   name: 'LA Dealerships' },
      { icon: 'hospital',       color: 'cyan',    name: 'Hospitals & Clinics' },
      { icon: 'graduation-cap', color: 'blue',    name: 'Campuses' },
      { icon: 'store',          color: 'emerald', name: 'Retail Storefronts' },
      { icon: 'building-2',     color: 'purple',  name: 'Property Managers' },
      { icon: 'ticket',         color: 'rose',    name: 'Event Producers' },
    ],

    faqs: [
      {
        question: 'What is the largest size you can print?',
        answer:
          'Our roll output is 60 inches wide with effectively unlimited length. Anything wider is produced as tiled panels with matched seams, which is standard practice for building wraps and full-wall murals. In practice we have not run into a size we could not produce.',
      },
      {
        question: 'Do you install what you print?',
        answer:
          'For vehicle wraps, window graphics, and wall murals, yes. Installation includes surface prep, application, and a post-install inspection. For rigid signage and banners most clients install themselves, but we can quote installation if the location is difficult or high.',
      },
      {
        question: 'Can you print window graphics that we can still see out of?',
        answer:
          'Yes, using perforated window film. It reads as a solid printed graphic from outside while remaining largely see-through from inside, which is why it is standard for storefronts and vehicle rear windows. It does reduce incoming light somewhat.',
      },
      {
        question: 'What file resolution do you need for large format?',
        answer:
          'Vector artwork scales perfectly and is always preferred. For raster images, 100 to 150dpi at final print size is right for work viewed up close, and lower is acceptable for pieces read from a distance. Send us what you have and we will assess it before printing rather than after.',
      },
      {
        question: 'Do you produce ADA-compliant signage?',
        answer:
          'Yes. We produce room identification signs, directional signage, and emergency information signage to ADA Title III specification, including tactile characters, Grade 2 Braille, required contrast ratios, and correct mounting heights. This is regular work for our healthcare and campus clients.',
      },
    ],

    relatedSlugs: [
      'banner-printing-los-angeles',
      'brochure-printing-los-angeles',
      'automotive-printing-los-angeles',
    ],
  },
]

/**
 * Idempotent seeder for the service pages.
 *
 * Same contract as seedPageContent(): creates only docs that do not
 * already exist, so admin edits and prior seeds are preserved.
 *
 * Safe to call repeatedly.
 */
export async function seedServicePages() {
  if (SERVICE_SEED_PAGES.length === 0) return

  await Promise.all(
    SERVICE_SEED_PAGES.map(async (page) => {
      const { id, ...data } = page
      const ref = doc(db, 'pageContent', id)
      const existing = await getDoc(ref)
      if (existing.exists()) return // preserve admin edits / prior seeds

      await setDoc(ref, {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    }),
  )
}