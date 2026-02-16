export interface Quote {
  id: string
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  industry: string
  service: string
  status: 'new' | 'pending' | 'in-progress' | 'approved' | 'completed' | 'declined'
  date: string
  message: string
  quantity: string
  urgency: string
  estimatedPrice?: number
  finalPrice?: number
}

export interface Client {
  id: string
  name: string
  industry: string
  contactEmail: string
  contactPhone: string
  notes: string
  createdAt?: string
}

export interface PortfolioItem {
  id: string
  client: string
  industry: string
  type: string
  description: string
  imageUrl: string        // Firebase Storage download URL
  imagePath: string       // Firebase Storage path (for deletion)
  featured: boolean
  visible: boolean
  order: number           // For drag-to-reorder (lower = first)
  createdAt?: string
  updatedAt?: string
}

export interface SiteImage {
  id: string
  page: string
  section: string
  name: string
  location: string
  stockUrl: string
  customUrl: string
  customPath: string
  recommendedSize: string
  order: number
}

export const mockQuotes: Quote[] = [
  {
    id: 'q1',
    firstName: 'Sarah',
    lastName: 'Chen',
    company: 'Kaiser Permanente',
    email: 'schen@kaiserpermanente.org',
    phone: '(323) 555-0142',
    industry: 'Healthcare',
    service: 'Patient Forms & Signage',
    status: 'new',
    date: '2026-02-12',
    message: 'We need updated patient intake forms for 3 locations in the LA area. Approximately 5,000 copies per location, full color, double-sided. Also interested in updated wayfinding signage for our new wing.',
    quantity: '15,000 forms + signage',
    urgency: 'Standard',
  },
  {
    id: 'q2',
    firstName: 'Michael',
    lastName: 'Torres',
    company: 'Jim Falk Lexus',
    email: 'mtorres@jimfalklexus.com',
    phone: '(310) 555-0198',
    industry: 'Automotive',
    service: 'Sales Brochures',
    status: 'new',
    date: '2026-02-11',
    message: 'Looking for premium tri-fold brochures for our 2026 model lineup. Need high-quality paper stock with spot UV coating on the cover. This is for our spring sales event.',
    quantity: '2,500',
    urgency: 'Rush',
  },
  {
    id: 'q3',
    firstName: 'Elena',
    lastName: 'Rodriguez',
    company: 'Beverly Hills Café',
    email: 'elena@beverlyhillscafe.com',
    phone: '(310) 555-0234',
    industry: 'Hospitality',
    service: 'Menus & Packaging',
    status: 'new',
    date: '2026-02-10',
    message: 'We are refreshing our entire menu design for spring. Need dinner menus, wine lists, and branded takeout packaging. Looking for eco-friendly paper options.',
    quantity: '500 menus + 3,000 packaging',
    urgency: 'Standard',
  },
  {
    id: 'q4',
    firstName: 'David',
    lastName: 'Kim',
    company: 'UCLA Extension',
    email: 'dkim@ucla.edu',
    phone: '(310) 555-0301',
    industry: 'Education',
    service: 'Course Catalogs',
    status: 'new',
    date: '2026-02-09',
    message: 'Annual course catalog for Summer 2026 session. 120 pages, perfect bound, full color throughout. Need to include updated program information and new certificate offerings.',
    quantity: '10,000',
    urgency: 'Standard',
  },
  {
    id: 'q5',
    firstName: 'Patricia',
    lastName: 'Nguyen',
    company: 'Vista Hospital',
    email: 'pnguyen@vistahospital.org',
    phone: '(818) 555-0156',
    industry: 'Healthcare',
    service: 'Patient Materials',
    status: 'pending',
    date: '2026-02-05',
    message: 'Need a comprehensive patient welcome kit including folder, informational brochures, and discharge instruction sheets. Must comply with healthcare readability standards.',
    quantity: '8,000 kits',
    urgency: 'Standard',
    estimatedPrice: 12400,
  },
  {
    id: 'q6',
    firstName: 'James',
    lastName: 'Washington',
    company: 'Broadway Federal Bank',
    email: 'jwashington@broadwayfederal.com',
    phone: '(213) 555-0189',
    industry: 'Finance',
    service: 'Marketing Collateral',
    status: 'pending',
    date: '2026-02-03',
    message: 'Complete brand refresh for all branch marketing materials. Includes rate sheets, product brochures, lobby posters, and business cards for 45 employees.',
    quantity: 'Multiple items',
    urgency: 'Standard',
    estimatedPrice: 8750,
  },
  {
    id: 'q7',
    firstName: 'Robert',
    lastName: 'Tanaka',
    company: 'Toyota Hollywood',
    email: 'rtanaka@toyotahollywood.com',
    phone: '(323) 555-0277',
    industry: 'Automotive',
    service: 'Sales Brochures',
    status: 'pending',
    date: '2026-02-01',
    message: 'Quarterly promotional mailers for our service department. Need 4-page saddle-stitched booklets with perforated coupon tear-outs.',
    quantity: '5,000',
    urgency: 'Rush',
    estimatedPrice: 3200,
  },
  {
    id: 'q8',
    firstName: 'Lisa',
    lastName: 'Martinez',
    company: 'K-Earth 101 FM',
    email: 'lmartinez@kearth101.com',
    phone: '(323) 555-0344',
    industry: 'Media',
    service: 'Event Materials',
    status: 'approved',
    date: '2026-01-25',
    message: 'Annual summer concert series materials: VIP lanyards, event programs, promotional flyers, and large format stage banners. Need everything to match our updated branding.',
    quantity: '10,000 flyers + banners',
    urgency: 'Standard',
    estimatedPrice: 6800,
  },
  {
    id: 'q9',
    firstName: 'Dr. Anthony',
    lastName: 'Reyes',
    company: 'LABioMed',
    email: 'areyes@labiomed.org',
    phone: '(310) 555-0412',
    industry: 'Healthcare',
    service: 'Research Publications',
    status: 'approved',
    date: '2026-01-20',
    message: 'Annual research report — 200 pages, hardcover, with data visualization inserts. Need archival quality paper. Also need 500 soft-cover versions for distribution.',
    quantity: '200 hardcover + 500 softcover',
    urgency: 'Standard',
    estimatedPrice: 15600,
  },
  {
    id: 'q10',
    firstName: 'Maria',
    lastName: 'Gonzalez',
    company: 'Salud Clinica',
    email: 'mgonzalez@saludclinica.org',
    phone: '(213) 555-0523',
    industry: 'Healthcare',
    service: 'Bilingual Forms',
    status: 'completed',
    date: '2026-01-10',
    message: 'Bilingual (English/Spanish) patient forms, consent documents, and informational pamphlets. All materials need to be ADA compliant with appropriate font sizes.',
    quantity: '20,000',
    urgency: 'Standard',
    estimatedPrice: 4200,
    finalPrice: 4450,
  },
  {
    id: 'q11',
    firstName: 'Thomas',
    lastName: 'Baker',
    company: 'Promise Hospital',
    email: 'tbaker@promisehospital.com',
    phone: '(323) 555-0601',
    industry: 'Healthcare',
    service: 'Facility Signage',
    status: 'declined',
    date: '2026-01-08',
    message: 'Interior and exterior signage package for new facility. ADA-compliant room signs, directional signage, and exterior monument sign.',
    quantity: '150 signs',
    urgency: 'Rush',
  },
]
