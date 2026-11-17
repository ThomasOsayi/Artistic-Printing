// Print-buying guides at /guides/[slug]. Code-based on purpose (no Firestore write needed),
// so new guides ship with a normal git push. Newest first.
// Body format: "## " = heading, "- " = bullet, anything else = paragraph.
// Only state facts about Artistic Printing that already appear on the live site.

export interface Guide {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD, original publish date (list order)
  updated?: string // YYYY-MM-DD, set only after a substantive content update
  keywords: string[]
  shortAnswer: string // answer-first block AI tools can quote verbatim
  related: { href: string; label: string }[] // service/industry pages on this site
  faqs: { q: string; a: string }[]
  body: string
}

export const guides: Guide[] = [
  {
    slug: "laminated-vs-synthetic-vs-paper-restaurant-menus",
    title: "Laminated vs synthetic vs paper menus: which should a restaurant print?",
    description: "How paper, laminated and synthetic (waterproof) menus compare on durability, cost to update and feel, with sizes and file specs for restaurant menu printing.",
    date: '2026-11-17',
    keywords: ["restaurant menu printing Los Angeles", "laminated menus", "synthetic paper menus", "waterproof menus", "menu printing"],
    shortAnswer: "Print on paper if your menu changes often or goes home with guests, laminate it if it stays the same for months and is handled at every table, and choose synthetic paper if you want a waterproof, wipeable menu that still folds and feels like paper. Many restaurants use a laminated or synthetic main menu with paper inserts for specials.",
    related: [
      { href: "/hospitality-printing-los-angeles", label: "Restaurant and hospitality printing" },
      { href: "/flyer-printing-los-angeles", label: "Flyer printing in Los Angeles" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Can laminated menus be sanitized?", a: "Yes. A sealed laminated menu can be wiped with a damp cloth or a food-service sanitizer between seatings without damaging the print." },
      { q: "Is synthetic paper the same as laminated paper?", a: "No. Synthetic paper is a waterproof plastic-based sheet that is printed directly, while a laminated menu is regular paper sealed inside clear plastic film." },
      { q: "What thickness of lamination is best for menus?", a: "5 mil is the most common menu lamination because it is durable but still flexible; 10 mil is stiffer and suits single-page menus that are never folded." },
      { q: "What is the most common restaurant menu size?", a: "8.5 x 11 inches is the most common, followed by 8.5 x 14 inches and 11 x 17 inches folded to 8.5 x 11." },
      { q: "Can I fold a laminated menu?", a: "Thin 3 mil laminate can be folded, but thicker laminate cracks or springs open, so folded menus are usually printed on synthetic paper or heavy cover stock instead." },
    ],
    body: `Restaurant menus get handled, splashed, wiped and reread every shift, so the material matters as much as the design. Here is how the three common options compare and which one fits your dining room.
## Which menu material is right for my restaurant?
The right menu material depends on how often your menu changes and how hard it is handled. If prices or dishes change every week, print on paper and replace menus as needed, because nothing else is cheaper to update. If your menu stays the same for several months and guests handle it at every table, laminate it or print it on synthetic paper so it can be wiped down between seatings. Synthetic paper is the middle path: it is waterproof and tear-resistant like a laminated menu, but it stays thin, folds cleanly and feels closer to a printed sheet. Many restaurants mix materials, using a durable main menu for the dining room and paper inserts for specials, drinks or seasonal items. Before you choose, count how many menus you lose or throw away each month and how often you reprint for price changes. Those two numbers usually settle the decision.
## When are paper menus the best choice?
Paper menus are the best choice when your menu changes often, when menus go home with guests, or when you want the lowest cost per piece.
- Best for: daily or weekly specials, takeout and delivery menus, pop-ups, prix fixe and event menus
- Durability: low; paper absorbs spills and creases, so plan on replacing menus often
- Typical stock: 80 to 100 lb text for takeout and inserts, 100 to 130 lb cover for a sturdier table menu
- Pros: lowest cost per menu, easy to update, recyclable in most programs, prints sharp color
- Cons: stains and tears quickly, cannot be sanitized, looks worn after a few busy services
A coated matte or silk stock resists light spills better than uncoated paper and keeps text easy to read under dim restaurant lighting.
## When should you laminate a menu?
Laminate a menu when the content is stable for months and the menu is handled at every table. Lamination seals a printed sheet inside clear plastic film, so it can be wiped with a damp cloth or sanitizer.
- Best for: main dining room menus, kids menus, drink lists, counter and table menus that rarely change
- Durability: high; a sealed laminate protects against water, grease and fingerprints
- Typical thickness: 3 mil film is flexible, 5 mil is the common menu weight, 10 mil is stiff and rigid
- Pros: wipeable, long-lasting, glossy or matte film options, works with any paper menu design
- Cons: every price change means reprinting and relaminating, thick laminate does not fold well, and laminated paper is usually not accepted in curbside recycling
Sealed lamination leaves a clear border of about 1/8 to 1/4 inch around the sheet, so allow for that if the menu must fit a holder or sleeve.
## What are synthetic paper menus and when are they worth it?
Synthetic paper is a plastic-based printing sheet, usually polypropylene or polyester, that is waterproof and tear-resistant without lamination. It is worth it when you want laminated durability with a lighter, more natural feel.
- Best for: patio and poolside menus, bars, busy brunch service, folded menus that see heavy use
- Durability: very high; it resists water, grease and tearing, and can be wiped clean
- Typical thickness: about 8 to 14 mil, measured like plastic rather than in paper pounds
- Pros: thinner and lighter than a laminated menu, scores and folds cleanly, no sealed plastic border
- Cons: higher cost per sheet than plain paper, not recyclable with paper, and less suited to menus that change weekly
Ask for a proof on the actual synthetic stock, since some colors print slightly differently on plastic sheets than on coated paper.
## Which menu should I choose for my type of restaurant?
Most restaurants can match their menu to how they serve, using the material that fits each piece rather than one material for everything.
- Fast casual and takeout: paper menus for bags and delivery, a laminated or synthetic counter menu
- Full-service dining with a stable menu: laminated or synthetic main menus, paper inserts for specials
- Fine dining or a menu that changes nightly: heavy paper or cover stock printed in small runs, often slid into a reusable menu cover
- Bars, patios and pool areas: synthetic paper, since spills and outdoor moisture are constant
- Hotels and banquet events: paper for one-time event menus, laminated room service and in-room cards
If you are unsure, start with a short run on paper to test the layout with guests, then move the final version to a durable material once prices and dishes settle.
## What sizes and file specs should I send for menu printing?
The most common menu sizes are 8.5 x 11 inches, 8.5 x 14 inches (legal) and 11 x 17 inches folded to 8.5 x 11. Smaller formats such as 4.25 x 11 inches work well for drinks or desserts, and 5.5 x 8.5 inches suits kids and cocktail menus. Set up your file at final size with 0.125 inch of bleed on every edge if color or photos run to the edge, and keep all text at least 0.125 to 0.25 inch inside the trim line. Use photos at 300 DPI at the printed size, and keep menu item text at about 10 to 12 point or larger so guests can read it in dim lighting. Send a print-ready PDF with fonts embedded. If you plan to laminate, tell us before printing so the layout accounts for the sealed border, and if you plan to fold, mention it so we can score the sheet first.`,
  },
  {
    slug: "vinyl-vs-mesh-banners-school-fences-sports-fields",
    title: "13 oz vinyl vs mesh banners: which works on a school fence or sports field?",
    description: "When to choose mesh or 13 oz vinyl for school, sports and sponsor banners, plus common sizes, letter heights, grommet spacing and file setup.",
    date: '2026-11-17',
    keywords: ["school sports banners Los Angeles", "mesh vs vinyl banner", "13 oz vinyl banner", "fence banner printing", "school banner printing"],
    shortAnswer: "Use mesh for banners zip-tied to chain-link fences, scoreboards and open fields, because its open weave lets wind pass through. Use 13 oz vinyl for gym walls, hallways, stages and other sheltered spots, because it prints brighter and is fully opaque.",
    related: [
      { href: "/banner-printing-los-angeles", label: "Banner printing in Los Angeles" },
      { href: "/education-printing-los-angeles", label: "Printing for schools" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Do mesh banners need wind slits?", a: "No. Mesh already lets air pass through its open weave, which is why it is used on fences instead of cutting slits into vinyl." },
      { q: "How far apart should grommets be on a fence banner?", a: "Grommets are usually placed every 2 to 3 feet along the edges and at every corner, and every 2 feet is safer on windy fences." },
      { q: "Can a mesh banner be printed on both sides?", a: "Not well, because the open weave lets each side show through; a banner seen from both sides should be printed on blockout vinyl." },
      { q: "How long does an outdoor vinyl or mesh banner last?", a: "A well-hung banner commonly lasts a full season or more outdoors; tight mounting and hemmed edges matter more than the material for how long it lasts." },
    ],
    body: `School banners have to survive wind, sun, zip ties and a full season on a fence. Choosing between 13 oz vinyl and mesh is the first decision, and it depends almost entirely on where the banner will hang.
## Should a school banner be vinyl or mesh?
A school banner should be mesh if it will hang on a chain-link fence, a scoreboard, a press box railing or any open spot where wind hits it directly. It should be 13 oz vinyl if it will hang on a gym wall, in a hallway, across a stage or anywhere sheltered from wind. The reason is simple: solid vinyl acts like a sail, so a large vinyl banner on an open fence pulls hard on its grommets and can tear or bend the fence fabric in a strong gust. Mesh has an open weave that lets air pass through, so it stays put with far less strain. The trade-off is appearance. Vinyl is fully opaque and prints brighter, sharper colors, while mesh looks slightly lighter up close because of the tiny holes. From the stands, most people cannot tell the difference, which is why mesh is the standard for outdoor athletic fences.
## What is 13 oz vinyl and when is it the right choice?
13 oz vinyl is the most common banner material: a PVC vinyl sheet with a polyester scrim inside, weighing about 13 ounces per square yard. It is the right choice for indoor and sheltered outdoor banners where color and sharpness matter most.
- Best for: gym walls, cafeterias, hallways, stage backdrops, open house and graduation banners
- Durability: strong and weather-resistant for a season or more outdoors when hung tight
- Typical use: single-sided banners with grommets every 2 to 3 feet and at each corner
- Pros: bright, saturated color, fully opaque, smooth surface for fine text and photos
- Cons: catches wind on open fences, heavier to ship and hang in very large sizes
For a banner that hangs in front of a bright window or needs printing on both sides, ask about a heavier blockout vinyl so light and the reverse image do not show through.
## What is mesh and when is it the right choice?
Mesh banner material is a vinyl-coated polyester with an open weave, usually around 8 to 9 ounces per square yard. It is the right choice for outdoor fences and open structures where wind is the main threat.
- Best for: chain-link fences around fields and courts, outfield fences, scoreboards, construction and campus perimeter fences
- Durability: very good outdoors; the open weave reduces wind load on grommets and the fence itself
- Typical use: sponsor banners, team and championship banners, field and campus wayfinding on fences
- Pros: lighter, handles wind better, less stress on fence posts and ties
- Cons: colors look slightly less dense up close, fine text below about 1 inch tall can lose crispness, and it is a single-sided material
Mesh suits bold designs: large team names, logos and short messages that are read from the bleachers or the parking lot.
## What size should a fence or gym banner be?
The right banner size depends on the space and how far away people will read it. Common banner sizes are 3 x 6 feet, 3 x 8 feet and 4 x 8 feet, and chain-link fences are commonly 4, 6 or 8 feet tall, so measure the fabric between the top and bottom rails before you choose a height. Leave a few inches of clearance at each post so the banner does not wrap around it. For lettering, a widely used sign guideline is about 1 inch of letter height for every 10 feet of viewing distance for basic legibility, so a sponsor name read from 100 feet away needs letters around 10 inches tall, and bigger is better at a glance. Keep each banner to one main message, a logo and at most one short line of supporting text. A row of matching sponsor banners looks far more polished when every sponsor gets the same size and layout template.
## How should a school banner be finished and hung?
Most fence and wall banners should have hemmed edges and metal grommets every 2 to 3 feet, plus one at each corner. Hemming folds and seals the edge so it resists fraying, and grommets give you strong attachment points. On fences, attach every grommet with UV-resistant zip ties or ball bungees, and pull the banner snug so it does not flap; a loose banner wears out its grommets quickly. Banners that hang from a pole or a stage truss work better with pole pockets sewn or welded along the top and bottom. For files, set up the banner at full size at about 100 to 150 DPI, or at half size at 200 to 300 DPI, and use vector logos where possible. Give us your school colors as Pantone numbers if you have them, so team colors stay consistent from one banner to the next and from season to season.
## Which banner should our school order?
Pick the material by location, then standardize sizes so banners can be reused and replaced easily.
- Chain-link fences around fields and courts: mesh, with grommets every 2 feet and zip ties at each one
- Gym walls, cafeterias and hallways: 13 oz vinyl for the brightest color
- Stage backdrops and graduation: 13 oz vinyl with pole pockets or grommets, sized to the stage
- Sponsor programs: mesh for outdoor fences, one shared template so every sponsor banner matches
- Banners seen from both sides: blockout vinyl printed on both sides
If you are replacing worn banners, measure the old ones and photograph how they are hung. That is usually the fastest way to get the next set right the first time.`,
  },
  {
    slug: "matte-vs-gloss-vs-soft-touch-business-cards",
    title: "Matte vs gloss vs soft-touch business cards: which finish should you choose?",
    description: "How matte, gloss and soft-touch business card finishes compare in look, feel, durability and writability, plus 14 pt vs 16 pt vs 32 pt stock and file setup.",
    date: '2026-11-17',
    keywords: ["soft touch business cards Los Angeles", "matte vs gloss business cards", "soft touch business cards", "business card finishes", "16 pt business cards"],
    shortAnswer: "Choose matte for a clean, readable card you can write on, gloss for photo-heavy cards where color should pop, and soft-touch for a premium card with a velvety feel people remember. Soft-touch pairs especially well with spot UV or foil on 16 pt or heavier stock.",
    related: [
      { href: "/business-card-printing-los-angeles", label: "Business card printing in Los Angeles" },
      { href: "/guides/dental-office-printed-forms-checklist", label: "Dental office printing checklist" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Can you write on soft-touch business cards?", a: "Ballpoint pen usually works on soft-touch, but gel ink can smear, so test with the pen you use or keep a writable uncoated back." },
      { q: "Is matte or gloss more professional?", a: "Neither is more professional by default; matte reads as understated and modern, while gloss suits photo-driven brands that want vivid color." },
      { q: "What does 16 pt mean on a business card?", a: "It means the card stock is about 0.016 inch thick, slightly stiffer than the standard 14 pt card." },
      { q: "What is spot UV on a business card?", a: "Spot UV is a clear, glossy coating applied only to chosen areas such as a logo, creating a shiny contrast against a matte or soft-touch background." },
    ],
    body: `The finish is the first thing people feel when you hand them a business card. Matte, gloss and soft-touch each change how a card looks, feels and holds up, and the right choice depends on your design and how the card will be used.
## Which business card finish should I choose?
Choose matte if you want a clean, modern card that is easy to read and easy to write on. Choose gloss if your card is built around photos or bright color and you want that color to pop. Choose soft-touch if you want a premium card with a smooth, velvety feel that people notice the moment they hold it. As a rule of thumb, healthcare offices, contractors and anyone who writes appointment times or notes on cards lean toward matte or uncoated stock. Real estate agents, photographers and restaurants with food photography often prefer gloss. Creative studios, hospitality brands, law firms and anyone positioning a premium service often choose soft-touch, sometimes with spot UV or foil accents. We print all three, along with spot UV and foil, so the decision really comes down to your design, your budget and how the card will be handled after you hand it over.
## What is a matte business card?
A matte business card has a low-sheen coating or laminate that reduces glare and gives the card a smooth, flat look.
- Best for: text-heavy cards, clean minimalist designs, appointment cards, cards you write on
- Durability: good; matte coatings resist fingerprints better than gloss, and matte laminate adds scuff protection
- Typical use: professional services, healthcare and dental offices, corporate teams
- Pros: no glare under office lights, easy to read, accepts pen better than gloss, pairs well with spot UV
- Cons: colors look slightly softer and less saturated than on gloss, dark solid backgrounds can show scuffs without a laminate
If people will write on the card, ask for a writable matte or an uncoated stock and test with the pen your staff actually uses, since some coatings smear gel ink.
## What is a gloss business card?
A gloss business card has a shiny coating, often a UV coating, that reflects light and makes colors look deeper and more vivid.
- Best for: photo-heavy cards, bright brand colors, food, real estate and product images
- Durability: good; UV gloss coating adds a hard protective layer against moisture and wear
- Typical use: real estate, photography, retail, restaurants and auto dealerships
- Pros: the most vivid color, crisp image detail, protective surface
- Cons: glare under bright light, shows fingerprints, and very hard to write on with most pens
A common approach is gloss on the photo side and a writable matte or uncoated back, so the card still works for appointment times or a handwritten note.
## What is a soft-touch business card?
A soft-touch business card is laminated with a special film that gives it a smooth, velvety texture, sometimes described as feeling like suede or a peach skin.
- Best for: premium brands, creative work, hospitality, boutique services, executive cards
- Durability: very good; the laminate adds stiffness and protects against moisture and tearing
- Typical use: cards with spot UV or foil accents, dark or rich brand colors, luxury positioning
- Pros: memorable feel, rich muted color, makes spot UV and foil stand out by contrast
- Cons: higher cost than standard coatings, colors print slightly darker and less saturated, dark solid colors can show scuffs or fingerprints with heavy handling
Soft-touch paired with spot UV on a logo is one of the most effective combinations for a card people keep: the logo feels raised and glossy against the soft background.
## Does card thickness matter: 14 pt, 16 pt or 32 pt?
Yes, thickness changes how solid a card feels, and it matters as much as the finish. Card stock thickness is measured in points, where 1 point equals 0.001 inch, so a 14 pt card is about 0.014 inch thick.
- 14 pt: the standard business card weight; sturdy enough for everyday cards and appointment cards
- 16 pt: noticeably stiffer; the most popular upgrade and a good match for matte, gloss or soft-touch
- 32 pt and heavier: a thick, luxury card often made by bonding sheets together, sometimes with a colored edge
Uncoated cards are often specified in pounds instead, such as 100 lb or 130 lb cover. For most businesses, 16 pt with the finish that fits your design gives the best balance of feel and cost. Reserve 32 pt for executive or brand-first cards where first impressions carry the most weight.
## How should I set up a business card file for printing?
A standard US business card is 3.5 x 2 inches. Set up your file at 3.75 x 2.25 inches to include 0.125 inch of bleed on every side if any color or image runs to the edge, and keep all text and logos inside a safe zone of 3.25 x 1.75 inches, at least 0.125 inch in from the trim. Use 300 DPI images at final size, build the file in CMYK, and keep small text at 7 point or larger so it stays readable. For spot UV or foil, supply a separate matching file or layer with the accent areas in solid 100 percent black vector shapes, and avoid very thin lines under about 0.5 point, since fine detail can fill in. Export a print-ready PDF with fonts embedded or outlined. If you are unsure which finish suits your design, ask for a proof or samples of matte, gloss and soft-touch stock before you order a full run.`,
  },
  {
    slug: "dental-office-printed-forms-checklist",
    title: "Which printed forms does a dental office need?",
    description: "A checklist of the intake forms, consent and lab forms, appointment cards and recall postcards most dental offices print, with sizes, paper and carbonless options.",
    date: '2026-11-17',
    keywords: ["dental office forms printing Los Angeles", "dental patient forms", "dental intake forms printing", "dental lab prescription forms", "dental office printing"],
    shortAnswer: "Most dental offices print a new patient registration form, medical and dental history forms, a HIPAA notice of privacy practices acknowledgment, a financial policy, procedure consent forms and lab prescriptions, plus appointment cards and recall postcards. Clipboard forms usually print on 8.5 x 11 inch paper, and lab prescriptions work best as 2-part or 3-part carbonless sets.",
    related: [
      { href: "/healthcare-printing-los-angeles", label: "Healthcare and dental printing" },
      { href: "/guides/ncr-carbonless-forms-how-many-parts", label: "Choosing 2, 3 or 4-part carbonless forms" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What size are dental appointment cards?", a: "Dental appointment cards are usually 3.5 x 2 inches, the same size as a business card, printed on matte or uncoated stock so staff can write on them." },
      { q: "Should dental lab prescriptions be carbonless?", a: "Yes, most offices use 2-part carbonless lab prescriptions so the lab gets the original and the office keeps an identical copy for the chart." },
      { q: "What paper is best for patient intake forms?", a: "20 lb bond or 60 lb offset paper works well for clipboard forms, and 24 lb bond reduces show-through on two-sided forms." },
      { q: "How big can a dental recall postcard be?", a: "To mail at the USPS postcard rate, a card must be between 3.5 x 5 inches and 4.25 x 6 inches." },
      { q: "Who decides what goes on dental consent forms?", a: "The dentist and the practice compliance or legal advisor decide the wording; the printer handles layout, paper and consistent reprints." },
    ],
    body: `Even dental offices that run digital intake still print a core set of forms, cards and lab slips every month. This checklist covers what most practices order, the common sizes and paper, and which pieces work best as carbonless sets.
## Which printed forms does a dental office need?
Most dental offices need three groups of printed pieces: patient intake forms, clinical and lab forms, and patient communication pieces. Intake covers the new patient registration form, the medical history and dental history forms, the HIPAA notice of privacy practices acknowledgment, the financial policy and insurance information. Clinical and lab forms include procedure consent forms, treatment plans and estimates, lab prescriptions and referral slips to specialists. Patient communication covers appointment cards, recall and reminder postcards, and office brochures or welcome folders. The exact list depends on your specialty: an oral surgeon prints more consent forms, an orthodontist prints more treatment and financial agreements, and a pediatric office adds parent and guardian forms. Your dentist, office manager or compliance advisor decides what each form says. Our job is to make sure every form prints cleanly, reads easily on a clipboard and stays consistent each time you reorder.
## What does the new patient packet usually include?
A typical new patient packet includes four to six pages that a patient fills out at the first visit.
- Patient registration: contact details, emergency contact, responsible party and insurance information
- Medical history: conditions, medications, allergies and physician contact
- Dental history: past treatment, concerns and goals
- HIPAA acknowledgment: signature confirming the patient received your notice of privacy practices
- Financial policy: payment, insurance and cancellation terms with a signature line
- Consent to treat: general consent for examination and routine care
Most offices print these on 8.5 x 11 inch sheets, often two-sided to reduce the stack on the clipboard. Many practices in Los Angeles also keep matching English and Spanish versions, ideally with identical layouts so staff can find the same field on either version.
## Which dental forms should be printed as carbonless NCR?
Print a form as carbonless NCR whenever two or more people need an identical handwritten copy. In dental offices, the most common example is the lab prescription: the dentist fills it out once, the lab receives the top copy with the case, and the office keeps the second copy in the chart.
- Lab prescription forms: 2-part (white and canary), or 3-part if a second location or the billing office keeps a copy
- Referral slips to specialists: 2-part, one for the patient to bring and one for your records
- Handwritten treatment estimates or walkout receipts: 2-part, one for the patient and one for the office
Numbering each set makes lab cases and referrals easier to trace. For a full breakdown of part counts and colors, see our guide to choosing 2-part, 3-part or 4-part carbonless forms.
## What paper, size and binding work best for clipboard forms?
Clipboard forms work best on 8.5 x 11 inch paper in 20 lb bond or 60 lb offset, which takes ballpoint and gel pens well and copies or scans cleanly. Use 24 lb bond or 70 lb offset if you print two-sided and want less show-through. Ordering forms in pads of 50 or 100 sheets, glued at the top, keeps the front desk tidy and makes it easy to tear off one form at a time. Drilled three-hole forms suit offices that keep paper charts in binders. Keep generous writing lines, at least about 0.3 inch tall, and leave a clear signature and date block at the bottom of every page that needs one. Add a small form number and revision date in the footer, such as REG-01 rev 11/2026, so staff always know they are using the current version and can reorder the exact form by name.
## What about appointment cards, recall postcards and referral pads?
Appointment cards, recall postcards and referral pads are the pieces patients take home, so they carry your brand as much as your intake forms carry your workflow.
- Appointment cards: 3.5 x 2 inches, the same size as a business card, on matte or uncoated stock so staff can write times with a pen
- Recall postcards: commonly 4 x 6 inches; to qualify for USPS postcard rates a card must be at least 3.5 x 5 inches and no larger than 4.25 x 6 inches
- Referral pads: 4.25 x 5.5 or 5.5 x 8.5 inches, padded in 50 or 100 sheets, often 2-part carbonless
- Welcome folders: 9 x 12 inch pocket folders that hold the new patient packet and office information
Many practices print appointment cards with the office logo on the front and a writable grid on the back. Our guide to matte, gloss and soft-touch business cards explains which finishes accept pen best.
## Can a commercial printer print dental prescription pads?
Prescription pads for controlled substances are a special case. In California, prescriptions for controlled substances must be written on tamper-resistant security prescription forms produced by a printer approved by the California Department of Justice, and each form carries a unique serial number. Order those pads through an approved security printer and follow the current requirements from the Department of Justice and the Dental Board of California. Everything else in this checklist, including intake forms, consent forms, lab prescriptions, referral slips, appointment cards and recall postcards, is standard commercial printing. It helps to keep a simple reorder sheet at the front desk that lists each form by name and form number, the quantity per order and the date of the last order. When a form starts running low, staff can reorder in one message instead of hunting for an old file.`,
  },
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
