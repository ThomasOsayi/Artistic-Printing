import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { PageContent } from './admin-data'

// ─── Phase 1+ page content ──────────────────────────────────────────────
// Each entry seeds one Firestore doc in the `pageContent` collection,
// keyed by `id` (format: `{type}-{slug}`).
//
// Adding new entries is incremental — `seedPageContent()` only creates
// docs that don't already exist, so admin edits and prior seeds are
// preserved across phases.
//
// Phase 1 (this file): 4 industry pages
// Phase 2-3: service pages (will add here or in a sibling seed file)
// Phase 4: neighborhood pages

export const SEED_PAGES: Omit<PageContent, 'createdAt' | 'updatedAt'>[] = [

  // ═════════════════════════════════════════════════════════════════════
  // HEALTHCARE
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'industry-healthcare-printing-los-angeles',
    type: 'industry',
    slug: 'healthcare-printing-los-angeles',
    published: true,

    metaTitle: 'Healthcare Printing in Los Angeles',
    metaDescription:
      'Patient forms, signage, and bilingual materials for LA hospitals, clinics, and hospices. HIPAA-aware production, BAA available, 24–48hr turnaround, free LA delivery.',

    heroBadge: 'Los Angeles Healthcare Printing',
    h1: "Healthcare Printing Trusted by LA's Top Hospitals",
    heroSubtitle:
      'Patient forms, signage, brochures, and bilingual materials for hospitals, clinics, hospices, and home health agencies. HIPAA-aware production, 24–48 hour turnaround, free LA delivery.',
    heroBullets: [
      'BAA available',
      'Bilingual EN / ES',
      'ADA-compliant typography',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'heart-pulse',
      heroImage:
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',

      complianceEyebrow: 'Built for Healthcare',
      complianceHeading: 'What hospitals look for in a print partner',
      complianceSubtitle:
        "We've spent 15+ years adapting our shop to the specific needs of LA-area medical providers.",

      printEyebrow: 'Capabilities',
      printHeading: 'What we print for healthcare clients',
      printIntro:
        'From single-page patient intake forms to facility-wide signage rollouts, we handle the full range of healthcare collateral.',

      trustEyebrow: 'Trusted by LA healthcare leaders',
      trustHeading: 'Kaiser, Vista, Gateways & 80+ other LA medical providers',

      processEyebrow: 'Our Process',
      processHeading: 'From inquiry to delivery in days, not weeks',
      processSubtitle:
        "We've optimized our workflow for the realities of healthcare procurement — fast quotes, careful proofs, and reliable delivery.",

      faqEyebrow: 'FAQ',
      faqHeading: 'Common questions from healthcare buyers',
      faqSubtitle: "Don't see your question?",

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Ready to print for your healthcare facility?',
      ctaSubtitle:
        "Tell us what you need and we'll quote within 24 hours. BAA available before any work begins.",
    },

    complianceCards: [
      { icon: 'shield-check', color: 'cyan-blue',    title: 'HIPAA-Aware Production',     description: 'Secure handling of files containing PHI. BAA available on request before any work begins.' },
      { icon: 'languages',    color: 'purple-pink',  title: 'Bilingual EN / ES',           description: 'Patient-facing forms, consents, and pamphlets produced fluently in English and Spanish.' },
      { icon: 'type',         color: 'amber-orange', title: 'ADA-Compliant Typography',    description: 'Readable font sizes, contrast, and signage compliant with ADA standards for patient materials.' },
      { icon: 'truck',        color: 'emerald-teal', title: 'Free LA Delivery',            description: 'Complimentary pickup and delivery across LA County. Rush orders available same-day.' },
    ],

    printItems: [
      { icon: 'clipboard-list', title: 'Patient Intake Forms',     subtitle: 'Single & multi-part' },
      { icon: 'copy',           title: 'NCR Carbonless Forms',     subtitle: '2-, 3-, 4-part' },
      { icon: 'file-signature', title: 'Consent Documents',        subtitle: 'HIPAA & treatment' },
      { icon: 'folder-open',    title: 'Patient Welcome Kits',     subtitle: 'Folders + inserts' },
      { icon: 'map-pin',        title: 'Wayfinding Signage',       subtitle: 'ADA-compliant' },
      { icon: 'book-open',      title: 'Patient Education',        subtitle: 'Brochures & pamphlets' },
      { icon: 'scroll-text',    title: 'Discharge Sheets',         subtitle: 'Aftercare instructions' },
      { icon: 'id-card',        title: 'Clinician Business Cards', subtitle: 'Doctor & nurse cards' },
      { icon: 'notebook-pen',   title: 'Prescription Pads',        subtitle: 'Branded & secure' },
    ],

    trustLogos: [
      { icon: 'hospital',    color: 'cyan',    name: 'Kaiser Permanente' },
      { icon: 'cross',       color: 'emerald', name: 'Vista Hospital' },
      { icon: 'stethoscope', color: 'purple',  name: 'Gateways Hospital' },
      { icon: 'heart-pulse', color: 'pink',    name: 'Promise Hospital' },
      { icon: 'microscope',  color: 'amber',   name: 'LABioMed' },
      { icon: 'hospital',    color: 'cyan',    name: 'Salud Clínica' },
      { icon: 'home',        color: 'teal',    name: '12+ Hospices' },
      { icon: 'users',       color: 'blue',    name: '20+ Home Health Agencies' },
    ],

    processSteps: [
      { title: 'Submit RFQ',     description: 'Drop us your specs via form, email, or phone' },
      { title: 'Quick Consult',  description: 'Quote returned within 24 hours, BAA signed if needed' },
      { title: 'Proof Rounds',   description: 'Digital proofs until sign-off — color, copy, layout' },
      { title: 'Production',     description: 'Digital or offset, in-house bindery and finishing' },
      { title: 'Free Delivery',  description: 'Hand-delivered anywhere in LA County' },
    ],

    faqs: [
      {
        question: 'Do you sign Business Associate Agreements (BAAs)?',
        answer:
          "Yes. We routinely sign BAAs with hospitals, clinics, and managed care organizations before any work involving Protected Health Information (PHI). Send us your standard BAA and we'll have it back to you within 24 hours.",
      },
      {
        question: 'Can you produce bilingual English / Spanish materials?',
        answer:
          'Routinely. We produce bilingual patient intake forms, consent documents, discharge instructions, and informational pamphlets for clients across LA County. Our designers handle the typographic balance of dual-language layouts so neither language feels secondary.',
      },
      {
        question: "What's the typical turnaround on healthcare forms?",
        answer:
          'Standard orders ship within 24–48 hours after proof approval. Rush orders are available same-day for time-sensitive needs. Multi-part NCR forms typically run 3–5 days due to specialty bindery requirements.',
      },
      {
        question: 'Do you offer volume discounts for recurring orders?',
        answer:
          'Yes. Most of our healthcare clients are on standing reorder schedules with negotiated pricing. We can also warehouse pre-printed inventory and ship as needed — useful for hospital systems and multi-location practices.',
      },
      {
        question: 'Can you match ADA Title III signage standards?',
        answer:
          'Yes. Our designers are familiar with ADA Title III requirements for character height, contrast ratio, mounting specifications, and tactile / Grade 2 Braille signage. We supply room signs, directional signage, and exterior monument signs to ADA spec.',
      },
    ],

    relatedSlugs: [
      'hospitality-printing-los-angeles',
      'automotive-printing-los-angeles',
      'education-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // HOSPITALITY
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'industry-hospitality-printing-los-angeles',
    type: 'industry',
    slug: 'hospitality-printing-los-angeles',
    published: true,

    metaTitle: 'Restaurant & Hospitality Printing in Los Angeles',
    metaDescription:
      'Menus, takeout packaging, gift cards, and signage for LA restaurants, hotels, and event venues. Eco-friendly stocks, brand-consistent finishes, same-day rush available.',

    heroBadge: 'LA Restaurant & Hospitality Printing',
    h1: 'Menus, Packaging & Print Built for LA Restaurants',
    heroSubtitle:
      'Menus, table tents, takeout packaging, gift cards, and event collateral for LA restaurants, hotels, and venues. Eco-friendly stocks, brand-consistent finishes, same-day rush available.',
    heroBullets: [
      'Eco-friendly stocks',
      'Same-day rush available',
      'Spot UV & foil finishes',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'utensils',
      heroImage:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',

      complianceEyebrow: 'Built for Hospitality',
      complianceHeading: 'What restaurants and hotels look for in a print partner',
      complianceSubtitle:
        "Quick turnarounds, consistent brand reproduction, and sustainable options for LA's most discerning hospitality clients.",

      printEyebrow: 'Capabilities',
      printHeading: 'What we print for restaurants, hotels & venues',
      printIntro:
        'From daily menu reprints to full hotel collateral rollouts, we handle the full range of hospitality and F&B print.',

      trustEyebrow: 'Trusted by LA hospitality',
      trustHeading: '30+ restaurants, hotels & venues across LA',

      processEyebrow: 'Our Process',
      processHeading: 'From spec to service in days',
      processSubtitle:
        'We move at restaurant speed — fast quotes, fast proofs, and rush production when tomorrow night depends on it.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Common questions from hospitality buyers',
      faqSubtitle: 'Need something custom?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Ready to print for your restaurant or venue?',
      ctaSubtitle:
        "Tell us what you need — we'll quote within 24 hours and can rush production same-day for emergencies.",
    },

    complianceCards: [
      { icon: 'leaf',         color: 'emerald-teal', title: 'Eco-Friendly Stocks',  description: 'FSC-certified and post-consumer recycled paper options at standard pricing for menus and packaging.' },
      { icon: 'sparkles',     color: 'purple-pink',  title: 'Brand Consistency',     description: 'PMS color matching, spot UV, foil stamping, and embossing to keep your brand identity sharp.' },
      { icon: 'zap',          color: 'amber-orange', title: 'Same-Day Rush',         description: 'Submit print-ready files before 11am for same-day completion. We stock common menu sizes.' },
      { icon: 'truck',        color: 'cyan-blue',    title: 'Free LA Delivery',      description: 'Complimentary pickup and delivery across LA County. Rush delivery available for service-critical needs.' },
    ],

    printItems: [
      { icon: 'utensils',  title: 'Dinner & Wine Menus',     subtitle: 'Single-page to multi-fold' },
      { icon: 'file-text', title: 'Table Tents & Specials',  subtitle: 'Rigid or folded' },
      { icon: 'package',   title: 'Takeout Packaging',       subtitle: 'Custom bags & boxes' },
      { icon: 'gift',      title: 'Branded Gift Cards',      subtitle: 'PVC & paper stock' },
      { icon: 'ticket',    title: 'Event Programs',          subtitle: 'Booklets & passports' },
      { icon: 'book-open', title: 'Hotel Collateral',        subtitle: 'In-room guides & directories' },
      { icon: 'image',     title: 'Promotional Flyers',      subtitle: 'Daily, weekly, seasonal' },
      { icon: 'coffee',    title: 'Coasters & Sleeves',      subtitle: 'Pulp board & paper' },
      { icon: 'map-pin',   title: 'Lobby & Window Signage',  subtitle: 'Rigid & vinyl' },
    ],

    trustLogos: [
      { icon: 'utensils',  color: 'amber',   name: 'Beverly Hills Café' },
      { icon: 'chef-hat',  color: 'emerald', name: 'LA Restaurant Group' },
      { icon: 'hotel',     color: 'pink',    name: 'Boutique LA Hotels' },
      { icon: 'coffee',    color: 'rose',    name: 'Specialty Cafés' },
      { icon: 'ticket',    color: 'purple',  name: 'Event Venues' },
      { icon: 'building',  color: 'cyan',    name: '25+ LA restaurants' },
      { icon: 'hotel',     color: 'blue',    name: '8 boutique hotels' },
    ],

    faqs: [
      {
        question: 'Do you offer FSC-certified or recycled paper stocks?',
        answer:
          'Yes. We stock multiple FSC-certified and post-consumer recycled paper options for menus, takeout packaging, and marketing materials. Eco-friendly stocks are available at standard pricing for most products.',
      },
      {
        question: 'Can you do same-day rush printing for menus?',
        answer:
          'Yes, on most menu and table tent reprints. Submit print-ready files before 11am for same-day completion. Rush fees apply, but we maintain stock of the most common menu sizes to keep them minimal.',
      },
      {
        question: 'Can you help design takeout packaging from our brand assets?',
        answer:
          'Our in-house design team handles takeout bag printing, custom box wraps, and branded napkins. We work directly from your existing brand assets or design new pieces. Custom dies, foil stamping, and spot UV are all available for premium presentations.',
      },
      {
        question: 'Do you print on coasters or coffee sleeves?',
        answer:
          'Yes. Custom-printed coasters (paperboard and pulp board), coffee cup sleeves, and to-go cup wraps are all in our regular catalog. Minimum orders typically start at 500 pieces with quick 5–7 day turnaround.',
      },
      {
        question: "What's the minimum order for restaurant menus?",
        answer:
          'Minimums depend on the format. Single-page menus start at 100 pieces; bound multi-page menus at 50. We can also do extremely short runs (10–25 menus) for daily specials or seasonal inserts.',
      },
    ],

    relatedSlugs: [
      'healthcare-printing-los-angeles',
      'automotive-printing-los-angeles',
      'education-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // AUTOMOTIVE
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'industry-automotive-printing-los-angeles',
    type: 'industry',
    slug: 'automotive-printing-los-angeles',
    published: true,

    metaTitle: 'Automotive Dealership Printing in Los Angeles',
    metaDescription:
      'Sales brochures, service mailers, vehicle wraps, and signage for LA dealerships. Premium finishes, brand book compliance, volume pricing for multi-location groups.',

    heroBadge: 'LA Automotive & Dealership Printing',
    h1: 'Print That Sells Cars in Los Angeles',
    heroSubtitle:
      'Sales brochures, service department mailers, vehicle wraps, banners, and showroom collateral for LA dealerships. Premium finishes, brand book compliance, volume pricing for multi-location groups.',
    heroBullets: [
      'Premium finishes',
      'Brand book compliance',
      'Volume pricing',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'car',
      heroImage:
        'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1920&q=80',

      complianceEyebrow: 'Built for Automotive',
      complianceHeading: 'What dealerships look for in a print partner',
      complianceSubtitle:
        'We understand brand book compliance, premium finishes, and the production speed needed to support sales events and quarterly campaigns.',

      printEyebrow: 'Capabilities',
      printHeading: 'What we print for dealerships & auto groups',
      printIntro:
        'From a single sales brochure to a quarterly direct mail campaign across all your locations, we handle the full automotive print spectrum.',

      trustEyebrow: 'Trusted by LA dealerships',
      trustHeading: 'Lexus, Toyota & 15+ other LA dealers',

      processEyebrow: 'Our Process',
      processHeading: 'Built for dealership-grade output and speed',
      processSubtitle:
        'Premium finishes, brand compliance, and reliable turnaround — every job inspected before it leaves our facility.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Common questions from dealership buyers',
      faqSubtitle: 'Have a brand book to share?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Ready to print for your dealership?',
      ctaSubtitle:
        "Tell us your brand specs and we'll quote within 24 hours. Volume pricing available for multi-location groups.",
    },

    complianceCards: [
      { icon: 'sparkles',    color: 'amber-orange', title: 'Premium Finishes',         description: 'Spot UV, soft-touch lamination, foil stamping, and embossing applied in-house for dealership-grade presentation.' },
      { icon: 'badge-check', color: 'blue-indigo',  title: 'Brand Book Compliance',    description: 'PMS color matching, stock specifications, and finish requirements per manufacturer brand books.' },
      { icon: 'package',     color: 'emerald-teal', title: 'Volume Pricing',           description: 'Annual contracts for multi-location groups with consolidated billing and per-location delivery.' },
      { icon: 'truck',       color: 'cyan-blue',    title: 'Free LA Delivery',         description: 'Free delivery to your showroom or service department anywhere in LA County. Rush available.' },
    ],

    printItems: [
      { icon: 'file-text',   title: 'Sales Brochures',        subtitle: 'Tri-fold & multi-page' },
      { icon: 'scroll-text', title: 'Service Mailers',        subtitle: 'Direct mail postcards' },
      { icon: 'car',         title: 'Vehicle Wraps',          subtitle: 'Full & partial wraps' },
      { icon: 'megaphone',   title: 'Showroom Banners',       subtitle: 'Vinyl & retractable' },
      { icon: 'id-card',     title: 'Sales Team Cards',       subtitle: 'Premium business cards' },
      { icon: 'book-open',   title: 'Promo Booklets',         subtitle: 'Saddle-stitched, perforated' },
      { icon: 'image',       title: 'Direct Mail Postcards',  subtitle: 'Variable data printing' },
      { icon: 'ticket',      title: 'Coupon Tear-outs',       subtitle: 'Perforated multi-up' },
      { icon: 'map-pin',     title: 'Lobby & Lot Signage',    subtitle: 'Vinyl & rigid' },
    ],

    trustLogos: [
      { icon: 'car',      color: 'amber',   name: 'Jim Falk Lexus' },
      { icon: 'car',      color: 'cyan',    name: 'Toyota Hollywood' },
      { icon: 'car',      color: 'blue',    name: 'LA Luxury Dealers' },
      { icon: 'car',      color: 'purple',  name: 'Import Dealerships' },
      { icon: 'car',      color: 'rose',    name: 'Domestic Dealerships' },
      { icon: 'building', color: 'emerald', name: '15+ LA dealerships' },
      { icon: 'users',    color: 'teal',    name: '4 multi-location groups' },
    ],

    faqs: [
      {
        question: 'Can you match manufacturer brand-book color specs?',
        answer:
          'Yes. We work routinely with manufacturer brand books from Lexus, Toyota, BMW, Audi, Mercedes-Benz, and others. PMS color matching, paper stock specifications, and finish requirements are all standard for our automotive accounts.',
      },
      {
        question: 'Do you do spot UV, soft-touch, and foil finishes in-house?',
        answer:
          'All of these are in-house capabilities. Spot UV coating, soft-touch laminate, foil stamping (silver, gold, copper, holographic), embossing, and die-cutting are routinely applied to dealership sales brochures and direct mail.',
      },
      {
        question: 'Do you have experience with vehicle wraps?',
        answer:
          'Yes. We print and install full vehicle wraps, partial wraps, window decals, and showroom signage. Cast vinyl materials with 5-year outdoor durability ratings. Installation includes prep, application, and post-install inspection.',
      },
      {
        question: 'Is volume pricing available for multi-location dealer groups?',
        answer:
          'Standard for our dealership accounts. We negotiate annual contracts based on combined volume across all locations, with consolidated billing and warehoused inventory for each location\'s delivery schedule.',
      },
      {
        question: 'Can you handle direct-mail list management?',
        answer:
          'We handle the production side — variable data printing, address matching, postal sorting, and CASS certification. We work with your existing list provider or can recommend dealership-focused list brokers.',
      },
    ],

    relatedSlugs: [
      'healthcare-printing-los-angeles',
      'hospitality-printing-los-angeles',
      'education-printing-los-angeles',
    ],
  },

  // ═════════════════════════════════════════════════════════════════════
  // EDUCATION
  // ═════════════════════════════════════════════════════════════════════
  {
    id: 'industry-education-printing-los-angeles',
    type: 'industry',
    slug: 'education-printing-los-angeles',
    published: true,

    metaTitle: 'School & Education Printing in Los Angeles',
    metaDescription:
      'Course catalogs, transcripts, brochures, and signage for LA schools, universities, and academies. ADA-compliant materials, bilingual options, bulk pricing for districts.',

    heroBadge: 'LA Education & School Printing',
    h1: 'Print Built for LA Schools & Universities',
    heroSubtitle:
      'Course catalogs, transcripts, admissions brochures, banners, and signage for LA schools, universities, and learning centers. ADA-compliant materials, bilingual options, bulk pricing.',
    heroBullets: [
      'ADA-compliant materials',
      'Bilingual EN / ES',
      'Bulk district pricing',
      'Free LA delivery',
    ],

    sections: {
      heroBadgeIcon: 'graduation-cap',
      heroImage:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
      ctaImage:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',

      complianceEyebrow: 'Built for Education',
      complianceHeading: 'What schools and universities look for in a print partner',
      complianceSubtitle:
        "Bulk runs, multilingual materials, and accessibility-compliant production — built for LA's education sector.",

      printEyebrow: 'Capabilities',
      printHeading: 'What we print for schools, colleges & academies',
      printIntro:
        'From annual course catalogs to campus-wide signage rollouts, we serve K-12 schools, community colleges, and universities across LA.',

      trustEyebrow: 'Trusted by LA education',
      trustHeading: 'UCLA Extension & 15+ other LA institutions',

      processEyebrow: 'Our Process',
      processHeading: 'From draft to delivery, in time for fall semester',
      processSubtitle:
        'Multi-stage proofing for catalogs and yearbooks, bulk production for district-wide rollouts, on-time delivery for graduation deadlines.',

      faqEyebrow: 'FAQ',
      faqHeading: 'Common questions from education buyers',
      faqSubtitle: 'Planning an annual contract?',

      ctaEyebrow: 'Get Started',
      ctaHeading: 'Ready to print for your school or campus?',
      ctaSubtitle:
        "Tell us your specs — annual catalog, enrollment season, or daily print needs — and we'll quote within 24 hours.",
    },

    complianceCards: [
      { icon: 'type',      color: 'amber-orange', title: 'ADA-Compliant Materials', description: 'Readable typography, contrast ratios, and tactile / Braille signage to ADA Title III spec.' },
      { icon: 'languages', color: 'purple-pink',  title: 'Bilingual EN / ES',       description: 'Enrollment forms, student handbooks, parent letters in fluent dual-language layouts.' },
      { icon: 'package',   color: 'emerald-teal', title: 'Bulk District Pricing',   description: 'District-wide contracts with consolidated production and per-school delivery schedules.' },
      { icon: 'truck',     color: 'cyan-blue',    title: 'Free LA Delivery',         description: 'Free delivery to every campus and district office across LA County.' },
    ],

    printItems: [
      { icon: 'book',        title: 'Course Catalogs',         subtitle: 'Perfect-bound, 40–300 pp' },
      { icon: 'book-open',   title: 'Admissions Brochures',    subtitle: 'Tri-fold & booklets' },
      { icon: 'folder-open', title: 'Student Handbooks',       subtitle: 'Saddle-stitched & bound' },
      { icon: 'award',       title: 'Diplomas & Certificates', subtitle: 'Foil & embossed' },
      { icon: 'ticket',      title: 'Event Programs',          subtitle: 'Graduations & open houses' },
      { icon: 'map-pin',     title: 'Campus Signage',          subtitle: 'ADA-compliant wayfinding' },
      { icon: 'megaphone',   title: 'Banners & Posters',       subtitle: 'Vinyl & paper' },
      { icon: 'id-card',     title: 'Faculty Cards',           subtitle: 'Staff & faculty' },
      { icon: 'file-text',   title: 'Bilingual Forms',         subtitle: 'EN / ES enrollment' },
    ],

    trustLogos: [
      { icon: 'graduation-cap', color: 'blue',    name: 'UCLA Extension' },
      { icon: 'school',         color: 'cyan',    name: 'LACCD Campuses' },
      { icon: 'graduation-cap', color: 'purple',  name: 'Private Universities' },
      { icon: 'school',         color: 'amber',   name: 'Art & Design Schools' },
      { icon: 'school',         color: 'emerald', name: 'K-12 Schools' },
      { icon: 'school',         color: 'pink',    name: '10+ K-12 schools' },
      { icon: 'book-open',      color: 'teal',    name: '5+ adult learning centers' },
    ],

    faqs: [
      {
        question: 'Do you offer bulk pricing for school districts?',
        answer:
          'Yes. We offer district-wide pricing for school systems, with consolidated production and per-school delivery. Annual contracts cover enrollment forms, district communications, and recurring seasonal materials at locked-in rates.',
      },
      {
        question: 'Can you produce perfect-bound course catalogs and yearbooks?',
        answer:
          'Both are in our standard catalog. Perfect-bound catalogs from 40 to 300 pages, yearbooks up to 400 pages with hard or soft covers. We handle editorial proofing, color management, and on-time delivery for graduation deadlines.',
      },
      {
        question: 'Do you do bilingual EN / ES enrollment materials?',
        answer:
          'Yes. About 30% of our education work is bilingual or trilingual. We produce bilingual enrollment packets, student handbooks, parent letters, and district communications with experienced dual-language typography.',
      },
      {
        question: 'Can you produce ADA-compliant campus signage?',
        answer:
          'Yes. Campus signage, room identifiers, directional signs, and emergency information signs all to ADA Title III spec. Tactile lettering, Grade 2 Braille, contrast ratios, and mounting heights all match code.',
      },
      {
        question: 'Do you offer annual reprint contracts?',
        answer:
          'Standard for our larger education clients. We warehouse approved files, run an annual schedule of reprints (catalogs, handbooks, enrollment forms), and ship to each campus as needed. Pricing is locked in for the contract period.',
      },
    ],

    relatedSlugs: [
      'healthcare-printing-los-angeles',
      'hospitality-printing-los-angeles',
      'automotive-printing-los-angeles',
    ],
  },
]

/**
 * Idempotent seeder for the `pageContent` collection.
 *
 * For each entry in SEED_PAGES, checks if a doc with that ID already
 * exists. If yes, leaves it alone (preserves admin edits and prior seeds).
 * If no, creates it with serverTimestamp() for createdAt and updatedAt.
 *
 * Safe to call repeatedly. Safe to call before the collection exists.
 * No-op when SEED_PAGES is empty.
 */
export async function seedPageContent() {
  if (SEED_PAGES.length === 0) return

  await Promise.all(
    SEED_PAGES.map(async (page) => {
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