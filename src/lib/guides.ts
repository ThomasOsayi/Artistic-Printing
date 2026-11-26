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
    slug: "saddle-stitch-vs-perfect-binding-vs-spiral-vs-wire-o",
    title: "Saddle stitch vs perfect binding vs spiral vs Wire-O: which booklet binding should you choose?",
    description: "How saddle stitch, perfect binding, spiral coil and Wire-O binding compare on page count, lay-flat use, durability and file setup, with a clear pick for programs, catalogs, handbooks and manuals.",
    date: '2026-11-26',
    keywords: ["saddle stitch vs perfect binding", "booklet binding types", "spiral vs wire-o binding", "perfect bound catalog printing", "booklet printing Los Angeles"],
    shortAnswer: "Choose saddle stitch for booklets of about 8 to 48 pages, such as programs, menus and newsletters, because it is the fastest and most economical binding. Choose perfect binding for catalogs, handbooks and reports of about 40 pages or more that need a printed spine, and spiral coil or Wire-O when the booklet must lie flat on a desk, such as a manual, workbook or calendar.",
    related: [
      { href: "/brochure-printing-los-angeles", label: "Brochure and booklet printing in Los Angeles" },
      { href: "/guides/school-event-program-booklet-printing-guide", label: "Guide: school event and graduation programs" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What is the difference between saddle stitch and perfect binding?", a: "Saddle stitch staples folded sheets through the spine fold, while perfect binding glues the pages into a wraparound cover with a flat, printable spine." },
      { q: "How many pages can be saddle stitched?", a: "Saddle stitching works from 8 pages up to about 48 to 64 pages depending on paper thickness, and the page count must be a multiple of 4." },
      { q: "What is the minimum page count for perfect binding?", a: "Perfect binding generally needs about 40 pages or more, because thinner books do not have enough spine for the glue to hold reliably." },
      { q: "Does a perfect bound book lie flat?", a: "No, a perfect bound book springs closed unless it is held open, so choose spiral coil or Wire-O for anything used hands-free." },
      { q: "Is Wire-O or spiral coil more durable?", a: "Plastic spiral coil is more forgiving because it springs back if crushed, while metal Wire-O looks more formal but can stay bent if it is crushed in a bag." },
    ],
    body: `The binding decides how a booklet opens, how long it survives and what it costs to produce. We saddle stitch booklets from 8 to 48 pages and perfect bind catalogs from 40 to 300 pages, and these are the four bindings customers compare most often, with the specs that matter for each.
## What are the main types of booklet binding?
The four most common booklet bindings are saddle stitch, perfect binding, spiral coil and Wire-O. Saddle stitch and perfect binding are permanent bindings made from folded or stacked sheets, while spiral and Wire-O are mechanical bindings that run through a row of punched holes.
- Saddle stitch: folded sheets nested together and stapled through the fold, usually 2 staples on a letter-size book
- Perfect binding: stacked pages glued into a wraparound cover with a square spine
- Spiral (plastic coil): a continuous plastic coil wound through round holes along the edge
- Wire-O (twin loop wire): a double metal wire closed through square or round holes
The quick way to narrow the choice is page count and how the booklet will be used. A 16-page program, a 120-page catalog and a 60-page training manual each point to a different binding, even at the same trim size.
## When is saddle stitching the right choice?
Saddle stitching is the right choice for most booklets under about 48 pages, because it is fast, economical and works on almost any trim size. Sheets are printed, folded in half, nested and stapled through the spine.
- Best for: event and graduation programs, menus, newsletters, small catalogs, promotional booklets
- Durability: good for short-term use, but covers can tear at the staples with heavy handling
- Typical use: 5.5 x 8.5 inch or 8.5 x 11 inch booklets on 80 or 100 lb text with an 80 or 100 lb cover
- Pros: lowest cost, quickest to produce, opens reasonably flat, no extra margin lost to the spine
- Cons: page count must be a multiple of 4, no printable spine, and thick books bulge at the fold
On longer saddle-stitched books the inner pages push outward, an effect called creep. Keep text at least 0.25 inch from the trim on the outside edge so nothing gets cut close after trimming.
## When should you choose perfect binding?
Choose perfect binding for books of about 40 pages or more that need a polished, bookstore look and a spine you can print a title on. The pages are stacked, roughened at the spine and glued into a single cover that wraps around them.
- Best for: course catalogs, student and employee handbooks, annual reports, product catalogs, yearbooks with soft covers
- Durability: strong for regular reading, though the spine can crack if the book is forced flat
- Typical use: 8.5 x 11 or 6 x 9 inch books on 60 to 80 lb text with a 10 to 14 pt cover
- Pros: printable spine, sits upright on a shelf, handles high page counts
- Cons: does not lie flat, needs a wider inside margin, and the spine width must be calculated before the cover is designed
Plan an inside (gutter) margin of at least 0.5 inch, because part of every page disappears into the glued spine. We confirm the exact spine width from the final page count and paper before you finish the cover file.
## When do spiral coil or Wire-O work better?
Spiral coil and Wire-O work better when the booklet must lie completely flat or fold back on itself while someone uses it. Both bind loose sheets through holes punched along one edge, so pages turn a full 360 degrees.
- Spiral coil best for: training manuals, workbooks, cookbooks, field guides, kitchen and lab reference books
- Spiral pros: lies flat, flexible plastic springs back if crushed, comes in many colors
- Wire-O best for: presentation books, proposals, wall and desk calendars, pricing books for sales teams
- Wire-O pros: crisp, formal look, pages stay aligned left to right when the book is open
- Cons for both: no printable spine, extra cost per book, and holes need a clear margin on the binding edge
Keep text and important graphics at least 0.5 inch from the binding edge, since the punched holes sit about 0.25 to 0.375 inch in from the edge. Wire-O can stay bent if it is crushed, so plastic coil is the safer pick for books that travel in backpacks or toolboxes.
## Which binding should you choose for your booklet?
Choose the binding by page count first, then by how the book will be handled. A quick guide by use case:
- Event program, menu or newsletter, 8 to 48 pages: saddle stitch
- Course catalog, handbook or annual report, 40 pages and up: perfect binding
- Training manual, workbook or cookbook used open on a desk: spiral coil
- Proposal, pricing book or calendar with a formal finish: Wire-O
- Short book that must survive daily handling, such as a dealership or clinic reference: spiral coil with a heavier cover or a clear cover sheet
- Long book on a tight schedule: saddle stitch if the page count and paper allow it
If a book falls between bindings, such as 44 or 48 pages, both saddle stitch and perfect binding can work. Thinner text paper keeps a saddle-stitched book flatter, while perfect binding gives you the spine and the more finished look.
## How should you set up a file for each binding?
Set up every booklet with 0.125 inch bleed on all sides and 300 DPI images in CMYK, then adjust margins for the binding. The binding changes the inside margin and how pages are counted, so tell us the binding before layout starts.
- Saddle stitch: total pages in a multiple of 4, including covers, with outside text at least 0.25 inch from the trim to allow for creep
- Perfect binding: inside margin of at least 0.5 inch, page count in even numbers, and a separate cover file with the spine width we confirm from your page count and paper
- Spiral and Wire-O: at least 0.5 inch clear on the binding edge for the holes, and pages supplied as single pages rather than printer spreads
- Covers: 10 to 14 pt or 80 to 100 lb cover stock, with matte or gloss lamination if the book will be handled often
Send a PDF with pages in reading order and we arrange the imposition. You get a proof showing page order and margins before anything is printed and bound.`,
  },
  {
    slug: "retractable-banner-vs-x-banner-vs-tabletop-vs-step-and-repeat",
    title: "Retractable banner vs X-banner vs tabletop display vs step-and-repeat: which event display should you choose?",
    description: "How retractable banner stands, X-banners, tabletop displays and step-and-repeat backdrops compare on size, setup, stability, materials and reuse, with file setup specs and a pick for trade shows, lobbies and events.",
    date: '2026-11-26',
    keywords: ["retractable banner vs x banner", "retractable banner stand size", "event display options", "step and repeat backdrop", "trade show banner Los Angeles"],
    shortAnswer: "Choose a retractable banner stand for trade shows, lobbies and events you will repeat, because it sets up in about a minute, stores the graphic in its base and is more stable than an X-banner. Choose an X-banner for a light, low-cost one-time display, a tabletop display when you only have a 6 or 8 foot table, and a step-and-repeat backdrop when people will be photographed in front of it.",
    related: [
      { href: "/banner-printing-los-angeles", label: "Banner printing in Los Angeles" },
      { href: "/large-format-printing-los-angeles", label: "Large format printing in Los Angeles" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What size is a standard retractable banner?", a: "The most common retractable banner sizes are 33 x 79 inches and 39 x 79 inches, roughly the height of a standing person." },
      { q: "Is a retractable banner better than an X-banner?", a: "For repeated use, yes, because the retractable base is heavier, protects the graphic in transport and sets up faster, while an X-banner costs less and weighs less for one-off use." },
      { q: "Can retractable banners be used outdoors?", a: "Most retractable and X-banner stands are made for indoor use and will tip in wind, so outdoor displays usually call for a weighted sign frame, a fence banner or a banner hung with grommets." },
      { q: "What size is a step-and-repeat backdrop?", a: "Step-and-repeat backdrops are commonly 8 x 8 feet or 8 x 10 feet, which covers a group photo with room for logos above and beside the guests." },
      { q: "Where should the main message go on a banner stand?", a: "Put the logo and main message in the top third, above table and crowd height, and keep the bottom few inches free of important content because the base covers part of it." },
    ],
    body: `Event displays look similar in a catalog, but they behave very differently on a show floor, in a school lobby or at a red carpet. We print retractable stands, vinyl banners and step-and-repeat backdrops for LA events, and these are the four formats customers compare most, with the specs for each.
## What are the main types of event display?
The four most common event displays are the retractable banner stand, the X-banner, the tabletop display and the step-and-repeat backdrop. They differ in footprint, how the graphic is held and how often the hardware can be reused.
- Retractable banner stand: a graphic that rolls into a spring-loaded base and is held up by a pole, commonly 33 x 79 or 39 x 79 inches
- X-banner: a lightweight frame of crossed flexible rods that hooks into grommets at the four corners, commonly about 24 x 63 or 32 x 71 inches
- Tabletop display: a small retractable or pop-up stand that sits on a table, usually under 3 feet tall
- Step-and-repeat: a large backdrop, commonly 8 x 8 or 8 x 10 feet, printed with a repeating grid of logos
All four fit in a car, but only the retractable stand protects its own graphic in transport. That one detail drives most repeat buyers toward it.
## When is a retractable banner stand the right choice?
A retractable banner stand is the right choice for any display you will set up more than a few times. The graphic rolls into an aluminum base, so setup is pulling it up, clipping it to the pole and walking away, usually in about a minute.
- Best for: trade show booths, school and clinic lobbies, dealership showrooms, registration tables, recurring events
- Durability: the base protects the print between uses, and a carry case is standard
- Typical use: 33 x 79 inch or 39 x 79 inch graphic on curl-resistant banner film or polyester fabric
- Pros: fastest setup, stable base, compact for storage, looks finished at any distance
- Cons: more expensive hardware than an X-banner, and the graphic is not meant to be swapped often on basic stands
For a booth or lobby, two 33 inch stands side by side often look better than one wide stand, because they can split a message or flank a table.
## When does an X-banner make more sense?
An X-banner makes more sense when the budget is tight, the display is for one event, or the stand has to be carried a long way. The graphic has grommets in each corner and hooks onto a frame of flexible rods shaped like an X behind it.
- Best for: one-day events, school fairs, pop-ups, temporary promotions, backup signage
- Durability: the graphic is exposed during transport and storage, so it can crease or scuff
- Typical use: about 24 x 63 or 32 x 71 inch vinyl or fabric graphic
- Pros: lowest hardware cost, very light, easy to replace the print for a new campaign
- Cons: visible rods behind the graphic, tips over more easily in a crowded room, slower to assemble than a retractable
Roll an X-banner graphic printed side out and store it in a tube between uses, which keeps the corners from curling the next time it is hung.
## When should you use a tabletop display or a step-and-repeat?
Use a tabletop display when your only space is a 6 or 8 foot table, and a step-and-repeat when people will be photographed in front of your brand. They solve opposite problems: one fits a tight space, the other fills a wall.
- Tabletop best for: career fairs, school open houses, vendor tables, check-in desks
- Tabletop pros: fits in a tote, keeps the floor clear, puts the logo at eye level for seated or standing visitors
- Tabletop cons: small, so it carries a logo and one short message at most
- Step-and-repeat best for: galas, grand openings, fundraisers, award nights, sponsor walls
- Step-and-repeat specs: 8 x 8 or 8 x 10 feet on matte vinyl or fabric, with logos repeated in a staggered grid
- Step-and-repeat cons: needs a frame or stand and more floor space, and takes two people to set up
Choose a matte material for a step-and-repeat, because glossy vinyl bounces camera flash back and creates glare in photos.
## Which event display should you choose?
Choose by how often you will use it, where it stands and who will see it. A quick guide by use case:
- Trade show or recurring event: retractable banner stand, two if the booth is 10 feet wide
- Lobby, showroom or reception area: retractable banner stand
- One-day event or tight budget: X-banner
- Vendor table, career fair or check-in desk: tabletop display plus a printed table cover if you have one
- Photo moments, sponsors and red carpets: step-and-repeat backdrop
- Outdoor events, fences and sports fields: a 13 oz vinyl or mesh banner with grommets rather than a stand
Most stands are made for indoor floors. In an LA parking lot or courtyard, even a light breeze can tip a retractable or X-banner, so outdoor displays need a hung banner or a weighted sign frame instead.
## How should you design and set up a banner stand file?
Design a banner stand for viewing from about 10 feet away. Put the logo and main message in the top third, where it sits above table height and above the heads of a crowd, and keep body text to a few short lines.
- Bleed: add the bleed your stand requires, usually 0.125 to 1 inch, and check whether extra length is needed at the bottom to roll into the base
- Bottom zone: keep the bottom few inches free of logos and text, since the base covers part of the graphic
- Top: leave about 1 inch clear under the top rail
- Text size: a common rule of thumb is about 1 inch of letter height for every 10 feet of viewing distance
- Resolution: 100 to 150 DPI at full size is usually enough for a graphic viewed from several feet
- Color: CMYK, with logos supplied as vector files
We check every banner file against the stand template and send a proof showing what the base and rail will cover before printing.`,
  },
  {
    slug: "school-printing-checklist-front-office-classrooms-events",
    title: "What does a school need printed? A checklist for the front office, classrooms, enrollment and events",
    description: "A practical printing checklist for K-12 schools, colleges and learning centers: front office forms, enrollment packets, handbooks and catalogs, classroom posters, certificates, banners and event pieces, with sizes and paper specs.",
    date: '2026-11-26',
    keywords: ["printing for schools", "school printing services", "school printing checklist", "education printing Los Angeles", "school forms printing"],
    shortAnswer: "Most schools need five groups of printed materials: front office forms and stationery, enrollment and admissions pieces, handbooks and catalogs, classroom and campus signage, and event and recognition items such as programs, banners and certificates. Plan the large annual pieces over the summer, keep approved files ready for reprints, and order bilingual and large-print versions at the same time as the English originals.",
    related: [
      { href: "/education-printing-los-angeles", label: "Education printing in Los Angeles" },
      { href: "/guides/school-event-program-booklet-printing-guide", label: "Guide: school event and graduation programs" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What printed forms does a school front office use most?", a: "The most common are emergency contact cards, enrollment and registration forms, attendance and tardy slips, visitor sign-in sheets and carbonless incident or referral forms." },
      { q: "When should schools order back-to-school printing?", a: "Order handbooks, enrollment packets and signage in early summer, so proofs and corrections are finished well before the first day of school." },
      { q: "What paper should a student handbook use?", a: "Most handbooks are 5.5 x 8.5 or 8.5 x 11 inches on 60 to 80 lb text with a heavier cover, saddle stitched under about 48 pages or perfect bound above that." },
      { q: "Should school materials be printed in English and Spanish?", a: "Many Los Angeles schools print family-facing materials in English and Spanish, either as separate versions or side by side, and both can be proofed and printed in the same order." },
      { q: "What size are school certificates and diplomas?", a: "Certificates are most often 8.5 x 11 inches on heavy cover stock, and many schools add gold or silver foil or embossing for diplomas and awards." },
    ],
    body: `A school prints more than most offices its size, and most of it is due at the same few points in the year. We print course catalogs, handbooks, forms, certificates and signage for schools and learning centers across Los Angeles, and this is the checklist we use when planning a school year with a client.
## What does a school front office need printed?
A school front office mainly needs forms, stationery and visitor materials that are used every day and reordered often. These are the pieces that run out at the worst time, so they are worth keeping on a reorder list.
- Emergency contact cards: commonly 5 x 8 or 4 x 6 inches on card stock so they survive filing and handling
- Registration, enrollment and change-of-address forms: 8.5 x 11 inches, often two-sided
- Attendance, tardy and early-release slips: small pads, often 4.25 x 5.5 inches with 50 or 100 sheets per pad
- Incident, nurse visit and discipline referral forms: 2 or 3 part carbonless so the office, teacher and family each keep a copy
- Visitor badges and sign-in sheets: printed sheets or badge inserts with the school logo
- Letterhead, #10 envelopes and report card envelopes: matched to the school colors and logo
Carbonless forms are usually numbered and padded or booked, which makes it easy to track every copy that leaves the office.
## What should be printed for enrollment and admissions?
Enrollment and admissions materials need to explain the school quickly and look good enough to compete with other schools a family is considering. They are usually printed in larger runs ahead of open house and enrollment season.
- Admissions brochures: an 8.5 x 11 inch tri-fold or a 5.5 x 8.5 inch booklet on 100 lb gloss or matte text
- Enrollment packets: forms and information sheets collated into a 9 x 12 inch pocket folder
- Postcards and mailers: 6 x 9 or 6 x 11 inch postcards on 14 or 16 pt cover stock for open house invitations
- Open house signage: retractable banner stands, A-frame inserts and 18 x 24 inch coroplast yard signs
- Bilingual versions: English and Spanish editions proofed and printed together
Keep one design system across all of these, with the same logo, colors and fonts, so a family recognizes the school from the mailbox to the front gate.
## What handbooks, catalogs and course materials do schools print?
Schools usually print student and staff handbooks, course catalogs and program guides once a year, with smaller updates during the year. These are the longest documents a school produces, so the binding and page count matter.
- Student and parent handbooks: 5.5 x 8.5 or 8.5 x 11 inches, saddle stitched up to about 48 pages
- Course catalogs: 8.5 x 11 inches, perfect bound for longer catalogs, often 40 pages and up
- Staff handbooks and training materials: spiral or perfect bound, depending on whether they need to lie flat
- Curriculum packets and workbooks: 8.5 x 11 inches, often collated and stapled or coil bound
- Large-print versions: body text commonly set at 18 pt or larger for students and families who need it
For larger school clients we keep approved files on hand and run an annual reprint schedule, so next year's handbook starts from this year's corrected file instead of from scratch.
## What signage and classroom materials do schools need?
Schools need signage that guides visitors, sets expectations and lasts more than one semester. Indoor signs and posters are usually reprinted when rules or rooms change, while outdoor signs need weather-resistant materials.
- Classroom and hallway posters: 18 x 24 or 24 x 36 inches, laminated if they will be touched or taped often
- Wayfinding and room signs: foam board or PVC indoors, aluminum for long-term exterior use
- Fence and field banners: 13 oz vinyl, or mesh where wind moves through the fence
- Pickup and drop-off signs: 18 x 24 inch coroplast with H-stakes for temporary use
- Safety and evacuation maps: 8.5 x 11 or 11 x 17 inches, laminated and posted in every room
Before ordering, walk the campus with a list of every location and the size each sign needs. Measuring first prevents reprints when a frame or wall space turns out to be smaller than expected.
## What printing do school events and graduation require?
School events need programs, tickets, banners and recognition pieces, often all due in the same week in spring. Graduation is the busiest single date of the school print calendar.
- Event and graduation programs: 5.5 x 8.5 or 8.5 x 11 inch saddle-stitched booklets
- Tickets: numbered tickets on card stock, with a perforated stub if you need to tear and track entries
- Certificates and diplomas: 8.5 x 11 inches on heavy cover stock, often with gold or silver foil or embossing
- Banners and backdrops: vinyl banners for stages and gyms, and a step-and-repeat backdrop for photos
- Awards night and sports materials: programs, rosters, posters and yard signs for senior recognition
Confirm names against the official roster on every proof. Misspelled names on certificates and programs are the most common and most painful event printing mistake.
## When should a school plan and order its printing?
Plan school printing around three peaks: back to school, the start of the second semester and graduation. Ordering ahead of each peak leaves time for proofs, corrections and approvals from more than one person.
- Early summer: handbooks, enrollment packets, emergency cards, front office forms and new signage
- Late fall: second-semester updates, winter event programs and enrollment mailers for the next year
- Early spring: graduation programs, certificates, diplomas, senior banners and award night pieces
- All year: reorders of forms, envelopes, letterhead and visitor materials
Build a shared checklist with item, size, quantity, language versions and the date each piece is needed. Then send it with your quote request, so the whole year can be scheduled at once instead of piece by piece.`,
  },
  {
    slug: "tri-fold-vs-bi-fold-vs-z-fold-vs-gate-fold-brochures",
    title: "Tri-fold vs bi-fold vs Z-fold vs gate fold brochures: which fold should you choose?",
    description: "How tri-fold, bi-fold, Z-fold, gate fold and roll fold brochures compare on panel count, folded size, rack and envelope fit, and best use, with file setup specs for each.",
    date: '2026-11-24',
    keywords: ["tri-fold vs bi-fold brochure", "z-fold vs tri-fold", "brochure fold types", "gate fold brochure", "brochure printing Los Angeles"],
    shortAnswer: "Choose a tri-fold for rack cards, mailers and patient or guest information, because an 8.5 x 11 inch tri-fold folds to about 3.7 x 8.5 inches and fits a #10 envelope and a standard 4 x 9 inch rack pocket. Choose a bi-fold when you need larger pages, such as a menu or program, a Z-fold for step-by-step content, and a gate fold for a product or event reveal.",
    related: [
      { href: "/brochure-printing-los-angeles", label: "Brochure printing in Los Angeles" },
      { href: "/guides/digital-vs-offset-printing-which-to-choose", label: "Guide: digital vs offset printing" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What size is a tri-fold brochure when folded?", a: "An 8.5 x 11 inch tri-fold folds to about 3.7 x 8.5 inches, which fits a #10 envelope and a standard 4 x 9 inch brochure rack pocket." },
      { q: "How many panels does a tri-fold brochure have?", a: "A tri-fold has six panels, three on each side of the sheet, while a bi-fold has four panels." },
      { q: "Why is one panel of a tri-fold narrower?", a: "The panel that folds inside is made about 1/16 inch narrower so it can tuck in without buckling against the fold." },
      { q: "What paper is best for a folded brochure?", a: "100 lb gloss or matte text is the most common brochure stock, and heavier cover stocks need to be scored before folding so the fold does not crack." },
      { q: "Can a brochure be mailed without an envelope?", a: "Yes, as a self-mailer, but USPS rules require folded self-mailers to be closed with tabs or wafer seals, so plan the address panel and tab positions before design." },
    ],
    body: `The fold decides how a brochure opens, how much room each message gets and whether it fits a rack, an envelope or a table. We score and fold brochures in-house, and these are the folds customers ask us about most, with the sizes and specs for each.
## What are the main brochure fold types?
The five most common brochure folds are the tri-fold, bi-fold, Z-fold, gate fold and roll fold. Each starts as one flat sheet, usually 8.5 x 11, 8.5 x 14 or 11 x 17 inches, and the fold pattern sets the panel count and finished size.
- Tri-fold (letter fold): 6 panels, 8.5 x 11 folds to about 3.7 x 8.5 inches
- Bi-fold (half fold): 4 panels, 8.5 x 11 folds to 5.5 x 8.5 inches, 11 x 17 folds to 8.5 x 11 inches
- Z-fold (accordion): 6 panels of equal width, 8.5 x 11 folds to about 3.7 x 8.5 inches
- Gate fold: 2 outer panels that meet in the middle over a wide center panel, 11 x 17 folds to 8.5 x 11 inches
- Roll fold: 4 or more panels that roll inward, each slightly narrower than the last
The tri-fold and Z-fold finish at the same size, so the real choice between them is how the reader moves through the content, not how the piece fits in a rack.
## When is a tri-fold brochure the right choice?
A tri-fold is the right choice for most rack, counter and mail brochures, because it is compact, familiar and cheap to fold at any quantity. The front cover leads to one inside flap, then opens to a three-panel spread.
- Best for: patient education, service menus, hotel and visitor information, school and program overviews
- Durability: the tucked panel protects the inside spread in racks and bags
- Typical use: 8.5 x 11 inch sheet on 100 lb gloss or matte text
- Pros: fits a #10 envelope and a 4 x 9 inch rack pocket, easy to read in order, lowest folding cost
- Cons: narrow panels of about 3.7 inches limit large photos and tables
Because the inside flap is about 1/16 inch narrower than the other panels, a tri-fold file is not three equal columns. We adjust panel widths on our side and send a folding proof before printing.
## When should you choose a bi-fold brochure?
Choose a bi-fold when content needs wider pages, such as a menu, price list, event program or a product sheet with large photos. One fold in the middle creates four panels that read like a small booklet.
- Best for: menus, event and graduation programs, sales sheets, presentation folder inserts
- Durability: a single fold on heavier stock stands up well on tables and counters
- Typical use: 11 x 17 inch sheet folded to 8.5 x 11, or 8.5 x 11 folded to 5.5 x 8.5
- Pros: widest panels of any fold, simple layout, works on text or cover stock
- Cons: an 8.5 x 11 finished bi-fold does not fit a 4 x 9 inch rack or a #10 envelope
A 5.5 x 8.5 inch bi-fold fits an A9 envelope, which measures 5.75 x 8.75 inches. If you need more than four pages, a saddle-stitched booklet is usually the next step up.
## When does a Z-fold work better than a tri-fold?
A Z-fold works better than a tri-fold when the content reads in a sequence, such as steps, a timeline or a map. It folds back and forth like an accordion, so all six panels are the same width and the reader can pull it open to see one long side at once.
- Best for: process steps, before and after instructions, maps, timelines, inserts that ship with a product
- Durability: no tucked panel, so the edges are more exposed in racks
- Typical use: 8.5 x 11 inch sheet with three equal panels of about 3.67 inches per side
- Pros: equal panels make layout simple, a full side can be read as one continuous strip, opens quickly
- Cons: no protected inside spread, and the front and back covers sit on different sides of the sheet
Z-folds also work well for patient discharge or aftercare instructions, where staff want to point to each step in order.
## What are gate folds and roll folds best for?
Gate folds are best for reveals and roll folds are best for packing a lot of content into a small piece. Both cost more to fold than a tri-fold, so they are used when the format adds something.
- Gate fold best for: product launches, real estate listings, invitations, hotel and venue packages
- Gate fold specs: an 11 x 17 inch sheet with outer panels of about 4.25 inches and a center panel of 8.5 inches, finishing at 8.5 x 11 inches
- Roll fold best for: detailed price lists, menus of services, reference cards with many sections
- Roll fold specs: an 8.5 x 14 inch sheet folds into 4 panels, with each inward panel made about 1/16 to 1/8 inch narrower
- Cons for both: higher folding cost and more careful file setup
On a gate fold, the two outer panels are trimmed slightly short of the center so they meet without overlapping or buckling.
## Which brochure fold should you choose?
Choose the fold by where the brochure lives and how people read it. A quick guide by use case:
- Brochure rack, counter display or #10 envelope: tri-fold
- Steps, maps or a timeline: Z-fold
- Menu, program or large photos: bi-fold on 11 x 17 inch stock
- Product or event reveal: gate fold
- Many sections in a pocket-sized piece: roll fold
- Bilingual English and Spanish content: bi-fold for side-by-side text, or a tri-fold printed as two language versions
If you are unsure, a printed folding dummy is the fastest way to decide. Holding the folded piece shows where the cover, the first flap and the main message actually land.
## How should you set up a folded brochure file?
Set up a folded brochure as one flat file with 0.125 inch bleed on every edge and panel widths that match the fold, not equal thirds. Keep text and logos at least 0.125 inch from the trim and from every fold line, so nothing disappears into the crease.
- Bleed: 0.125 inch on all four sides, so an 8.5 x 11 inch tri-fold file is 8.75 x 11.25 inches
- Tri-fold panels: about 3.6875, 3.6875 and 3.625 inches, with the narrow panel tucking inside
- Images: 300 DPI at final size, in CMYK
- Paper: 100 lb gloss or matte text folds cleanly, while 80 lb and 100 lb cover need scoring first
- Grain: folds run parallel to the paper grain where possible, which reduces cracking on heavy ink coverage
If you send equal panels, we correct the widths and send a proof showing how the panels break before anything is printed.`,
  },
  {
    slug: "best-paper-weight-for-flyers-text-vs-cover-stock",
    title: "What paper weight should a flyer be? 70 lb text vs 100 lb text vs 100 lb cover vs 14 pt",
    description: "How flyer paper weights compare, from 70 lb uncoated text to 100 lb gloss text, 100 lb cover and 14 pt card, with thickness, best uses and a recommendation for handouts, mailers and counter cards.",
    date: '2026-11-24',
    keywords: ["best paper weight for flyers", "100 lb text vs 100 lb cover", "flyer paper stock", "text weight vs cover weight", "flyer printing Los Angeles"],
    shortAnswer: "For most handout flyers, 100 lb gloss or matte text is the best paper weight: it feels substantial, shows color well and still folds cleanly. Use 70 lb uncoated text for budget handouts that people may write on, and step up to 100 lb cover or 14 pt card for flyers that are mailed as postcards, stand on a counter or need to last for weeks.",
    related: [
      { href: "/flyer-printing-los-angeles", label: "Flyer printing in Los Angeles" },
      { href: "/guides/digital-vs-offset-printing-which-to-choose", label: "Guide: digital vs offset printing" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Is 100 lb text heavier than 80 lb cover?", a: "No. Text and cover weights are measured on different base sheet sizes, so 80 lb cover is thicker and stiffer than 100 lb text." },
      { q: "What is 100 lb text in GSM?", a: "100 lb text is about 148 GSM, while 100 lb cover is about 270 GSM." },
      { q: "Can I mail a flyer as a postcard?", a: "Only on card stock thick enough for USPS rules, which require pieces larger than 4.25 x 6 inches to be at least 0.009 inch thick, so use 100 lb cover or 14 pt rather than text weight paper." },
      { q: "Is gloss or matte better for flyers?", a: "Gloss makes photos and bright colors pop, while matte reduces glare and is easier to read and write on, so text-heavy flyers usually look better on matte." },
      { q: "What is the cheapest flyer paper?", a: "70 lb uncoated text printed on one side is the most economical flyer configuration." },
    ],
    body: `Paper weight is the spec most flyer buyers guess at, and it changes how the flyer feels, how it handles and whether it can be mailed. Our standard flyer stocks are 70 lb text, 100 lb gloss text, 100 lb matte text, 14 pt card and 100 lb cover. Here is how they compare.
## What do text weight and cover weight mean?
Text weight and cover weight are two separate scales, so the numbers cannot be compared directly. Paper weight in pounds is the weight of 500 sheets at a base size, and text paper uses a larger base sheet than cover paper. That is why 80 lb cover is thicker than 100 lb text, even though 80 is the smaller number.
- 70 lb text: about 104 GSM, similar to a heavy copy paper
- 100 lb text: about 148 GSM, a firm sheet that still folds easily
- 80 lb cover: about 216 GSM, a light card
- 100 lb cover: about 270 GSM and roughly 0.011 inch thick, a stiff card
- 14 pt card: about 0.014 inch thick, measured in points (thousandths of an inch)
GSM, grams per square meter, is the one scale that works across all papers, so it is the most reliable way to compare a quote that lists weights in different units.
## When is 70 lb text the right flyer paper?
70 lb text is the right flyer paper when you need a large quantity at the lowest cost and the flyer has a short life. It is usually uncoated, so it feels like good office paper.
- Best for: event handouts, inserts, menus for delivery bags, internal notices, school take-home flyers
- Durability: creases easily and softens with handling, fine for a few days of use
- Typical use: 8.5 x 11 or 5.5 x 8.5 inches, printed one or both sides
- Pros: lowest cost, easy to write on, light to carry and mail inside an envelope
- Cons: some show-through when printed on both sides, colors look softer than on coated stock
For a school or community flyer that goes home in a backpack, 70 lb text is usually all you need.
## Why is 100 lb text the most popular flyer weight?
100 lb gloss or matte text is the most popular flyer weight because it balances feel, color and cost. It is noticeably heavier than copy paper, the coating makes photos and brand colors sharp, and it still folds cleanly into a half fold or tri-fold.
- Best for: promotional flyers, sales sheets, open house and grand opening handouts, price lists
- Durability: holds up through handling for a few weeks, resists curling
- Typical use: 8.5 x 11 inches full color both sides, or 11 x 17 inches folded
- Pros: professional feel, strong color on gloss, low glare and writable surface on matte
- Cons: too thin to mail as a postcard or to stand on its own
Gloss suits photo-heavy flyers. Matte is better for text-heavy pieces, menus and anything people will read under bright lights.
## When should a flyer be printed on 100 lb cover or 14 pt card?
Print a flyer on 100 lb cover or 14 pt card when it must stand up, be mailed without an envelope or last for weeks. At this weight the piece behaves like a card, not a sheet of paper.
- Best for: postcards and direct mail, counter cards, rack cards, door hangers, event cards people keep
- Durability: high, it resists bending and creasing in bags and mailboxes
- Typical use: 4 x 6, 5 x 7 or 6 x 9 inch mailers, 4 x 9 inch rack cards, 4.25 x 11 inch door hangers
- Pros: premium feel, meets USPS minimum thickness for postcard and letter mail, stands upright in holders
- Cons: costs more per piece, and folding requires scoring first to prevent cracking
USPS requires mail pieces larger than 4.25 x 6 inches to be at least 0.009 inch thick, so 100 lb cover and 14 pt are safe choices for 5 x 7 and 6 x 9 inch mailers.
## Which flyer paper weight should you choose?
Choose the lightest stock that survives how the flyer will be used. A quick guide by use case:
- Large handout runs, short life, lowest cost: 70 lb uncoated text
- Promotional flyers and sales sheets: 100 lb gloss text
- Text-heavy flyers, menus, anything read under lights: 100 lb matte text
- Folded flyers and small brochures: 100 lb text
- Postcards, door hangers and mailers without envelopes: 14 pt card or 100 lb cover
- Rack cards and counter display: 14 pt card
If you are comparing two stocks, ask for both on the quote. The price difference on a few hundred flyers is often small, and the heavier stock can change how long people keep the piece.
## How should you set up a flyer file for printing?
Set up a flyer file at the finished size plus 0.125 inch bleed on each edge, with images at 300 DPI and colors in CMYK. An 8.5 x 11 inch flyer file should be 8.75 x 11.25 inches, and a 4 x 6 inch postcard file should be 4.25 x 6.25 inches.
- Safe zone: keep text and logos at least 0.125 inch inside the trim line
- Images: 300 DPI at the size they print, not just at the size they appear on screen
- Color: CMYK for full color, with brand colors checked against a printed proof
- Mailers: leave the USPS address and indicia area clear of artwork on the back
- Fonts: embed or outline fonts in the final PDF
Send a PDF and tell us the stock you want, then check the proof for trim, color and spelling before approving it.`,
  },
  {
    slug: "hotel-printing-checklist-front-desk-rooms-events",
    title: "What does a hotel need printed? A checklist for the front desk, guest rooms, dining and events",
    description: "A practical hotel printing checklist: key card sleeves, registration cards, in-room directories, door hangers, room service menus, valet tickets, event signage and back-of-house forms, with common sizes and stocks.",
    date: '2026-11-24',
    keywords: ["hotel printing checklist", "hotel printed materials", "key card sleeves printing", "hotel collateral printing", "hospitality printing Los Angeles"],
    shortAnswer: "Most hotels need printed pieces in five areas: the front desk (key card sleeves, registration cards), guest rooms (directories, door hangers, room service menus, tent cards), dining (menus, table tents), meetings and events (banners, signage, programs) and back of house (numbered valet tickets and carbonless work orders). Print the high-turnover items in larger runs and keep anything with prices or hours on short, easy-to-reprint runs.",
    related: [
      { href: "/hospitality-printing-los-angeles", label: "Restaurant and hospitality printing in Los Angeles" },
      { href: "/guides/laminated-vs-synthetic-vs-paper-restaurant-menus", label: "Guide: laminated vs synthetic vs paper menus" },
      { href: "/guides/padded-vs-booked-vs-snap-set-carbonless-forms", label: "Guide: carbonless form formats" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What size is a hotel key card sleeve?", a: "Key card sleeves are built to hold a standard 3.375 x 2.125 inch card, so the folded sleeve is usually about 2.5 x 3.5 inches." },
      { q: "What size is a hotel door hanger?", a: "Common door hanger sizes are 3.5 x 8.5 inches and 4.25 x 11 inches, die-cut from card stock with a hole that fits a standard door handle." },
      { q: "Should hotel menus be laminated?", a: "Room service and pool menus that get handled or wiped often last longer laminated or on synthetic paper, while menus that change often are cheaper on coated card stock reprinted as needed." },
      { q: "Why are valet tickets numbered?", a: "Matching numbers on the guest stub, the key tag and the hotel copy make each car traceable, so valet tickets are printed in sequence on multi-part or perforated stock." },
      { q: "Can hotel print materials be bilingual?", a: "Yes. Directories, menus and signage are often set in English and Spanish, either side by side or as separate language versions." },
    ],
    body: `A hotel touches guests with print at almost every step, from the key card sleeve at check-in to the menu on the nightstand and the signs outside the ballroom. We print menus, collateral, signage and forms for LA hospitality clients, and this checklist covers what most properties need, grouped by where it is used.
## What does a hotel front desk need printed?
The front desk needs print that speeds up check-in and keeps every guest's details organized. These are high-turnover items, so they are worth ordering in larger runs once the design is final.
- Key card sleeves: hold a standard 3.375 x 2.125 inch key card, folded to about 2.5 x 3.5 inches, with room number and Wi-Fi fields on the inside
- Registration cards: 4 x 6 or 5.5 x 8.5 inches, often on writable uncoated stock
- Folio and receipt envelopes: #10 or 6 x 9 inch envelopes with the hotel logo
- Business cards for managers and sales staff
- Letterhead and envelopes for confirmations and group contracts
- Welcome cards and local area maps
Choose an uncoated or matte stock for anything staff or guests write on, because ballpoint ink smears on gloss. Keep Wi-Fi names, passwords and checkout times off the printed sleeve if they change often, and leave a blank field to fill in instead.
## What printed materials go in a hotel room?
A guest room usually needs a directory, door hangers, a room service menu and a few tent cards. These pieces sit in the room for months, so durability matters more than on front desk items.
- Guest services directory: a bi-fold, saddle-stitched booklet or binder inserts, commonly 5.5 x 8.5 or 8.5 x 11 inches
- Door hangers: 3.5 x 8.5 or 4.25 x 11 inches on 14 pt card or thicker, often with privacy on one side and a service request on the other
- Room service menu: card stock, laminated or synthetic paper, sized to sit on a desk or nightstand
- Tent cards: linen and towel reuse, amenities, breakfast hours, about 4 x 6 inches folded
- Notepads: 4 x 6 or 5.5 x 8.5 inch pads of 50 sheets
- Emergency evacuation maps: posted inside the room door, following your fire safety plan
Laminated and synthetic stocks survive cleaning sprays. Our menu guide compares them in detail.
## What does hotel dining and the bar need printed?
Hotel restaurants, bars and pool areas need menus and table pieces that can change with the season without wasting a large print run. The right stock depends on how often each piece is handled and wiped.
- Dining menus: single-page card menus, bi-folds or inserts for menu covers
- Bar and pool menus: synthetic or laminated, because they get wet
- Table tents: specials, happy hour and events, about 4 x 6 inches folded
- Wine lists and dessert cards: short runs on premium uncoated or cotton stock
- Takeout packaging and stickers for grab-and-go items
- Gift cards and gift certificates for the restaurant or spa
Print items with prices in smaller quantities so a price change does not leave you with boxes of outdated menus. Permanent pieces, such as the menu cover or the table tent design, can be printed in larger runs.
## What do hotel meetings and events need printed?
Meetings, weddings and conferences need signage that guides guests and print that carries the event brand. Most of it is printed per event, so fast, accurate reprints matter more than large runs.
- Directional and welcome signs: 18 x 24 or 24 x 36 inches on foam board or PVC for easels
- Banners: 13 oz vinyl with grommets for walls, or retractable banner stands for registration tables
- Event programs and agendas: 5.5 x 8.5 inch bi-folds or saddle-stitched booklets
- Name badges and table numbers
- Meeting space brochures and wedding package folders for the sales team
- Floor plans and capacity sheets for planners
Foam board is light and inexpensive for single-event signs, while PVC holds up when the same signs are reused. Our sign materials guide compares the options side by side.
## What forms does the back of house need?
The back of house needs forms that create a record and travel between departments. Carbonless forms are the standard, because each copy goes to a different person without a printer or a screen.
- Valet tickets: numbered in sequence, with a guest stub, a key tag and a hotel copy, often on perforated card stock
- Maintenance work orders: 2 or 3 part carbonless, so engineering, the front desk and the requester each keep a copy
- Housekeeping checklists and room status sheets, padded in 50 sheets
- Lost and found tags and logs
- Banquet event orders and delivery receipts
- Incident and inspection reports
Number every form that needs to be accounted for. Booked forms keep a copy behind in the book, which is useful for valet and lost and found records.
## How should a hotel organize reorders?
Organize hotel printing by keeping one master list of every printed item with its size, stock, quantity and file version. That list turns reorders into a quick approval instead of a design project each time.
- Group items by department so each manager knows what they own
- Note which pieces include prices, hours or Wi-Fi details that change
- Set a reorder point, such as when a box of key card sleeves drops to one month of use
- Keep final print-ready PDFs in one shared folder, named by item and date
- Review all pieces when the brand, rates or amenities change
With free pickup and delivery across Los Angeles, small and frequent reprints stay practical for busy properties.`,
  },
  {
    slug: "print-ready-file-setup-bleed-safe-zone-300-dpi-cmyk",
    title: "How do you set up a print-ready file? Bleed, safe zone, 300 DPI, CMYK and fonts",
    description: "A plain checklist for print-ready files: 0.125 inch bleed, safe zones, 300 DPI images, CMYK and rich black, fonts, PDF export settings, and the extra rules for folded pieces and large format banners.",
    date: '2026-11-24',
    keywords: ["print ready file setup", "how to add bleed for printing", "300 dpi for print", "CMYK vs RGB for printing", "print ready PDF checklist"],
    shortAnswer: "A print-ready file is a PDF at the finished size plus 0.125 inch of bleed on every edge, with text kept at least 0.125 inch inside the trim, images at 300 DPI at the size they print, colors in CMYK and every font embedded or outlined. Large format banners and signs are the exception: they print well at 100 to 150 DPI at full size because they are viewed from a distance.",
    related: [
      { href: "/services", label: "All printing services" },
      { href: "/large-format-printing-los-angeles", label: "Large format printing in Los Angeles" },
      { href: "/guides/tri-fold-vs-bi-fold-vs-z-fold-vs-gate-fold-brochures", label: "Guide: brochure fold types" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "How much bleed do I need for printing?", a: "Add 0.125 inch of bleed to every edge, so an 8.5 x 11 inch flyer file is 8.75 x 11.25 inches." },
      { q: "Is 72 DPI good enough for print?", a: "No. A 72 DPI web image prints soft and pixelated on paper, so photos for flyers, brochures and cards should be 300 DPI at the size they print." },
      { q: "Should I send RGB or CMYK files?", a: "Send CMYK for printed pieces, because RGB colors are converted on press and bright screen colors such as vivid blues and greens can shift." },
      { q: "What is rich black?", a: "Rich black adds cyan, magenta and yellow under 100 percent black, such as 60 C, 40 M, 40 Y, 100 K, to make large black areas deeper, while small text should stay 100 percent black only." },
      { q: "What if my file is not print-ready?", a: "Send what you have and tell us the finished size; missing bleed, low-resolution images and font problems can usually be fixed, and the proof shows the result before printing." },
    ],
    body: `Most print delays start with the file, not the press. A missing bleed, a low-resolution logo or an RGB color can mean white slivers on the edge, blurry images or a brand color that looks wrong. This checklist covers what a printer needs, with exact measurements, so your file prints the way it looks on screen.
## What makes a file print-ready?
A file is print-ready when it can go to press without anyone changing it. In practice that means six things are correct: size, bleed, safe zone, image resolution, color mode and fonts.
- Size: the document is built at the finished trim size, such as 3.5 x 2 inches for a business card or 8.5 x 11 inches for a flyer
- Bleed: artwork that touches the edge extends 0.125 inch past the trim on every side
- Safe zone: text, logos and key details sit at least 0.125 inch inside the trim
- Resolution: photos and raster images are 300 DPI at the printed size
- Color: CMYK for full color work, with any Pantone spot colors named correctly
- Fonts: embedded in the PDF or converted to outlines
Export a PDF, ideally PDF/X-1a or PDF/X-4, with crop marks and bleed included. Those presets lock in most of these settings for you.
## How do bleed and safe zones work?
Bleed is extra artwork past the edge that gets trimmed off, and the safe zone is a margin inside the edge where nothing important should sit. Both exist because cutting a stack of paper is accurate to a small tolerance, not to the exact hairline.
- Bleed: 0.125 inch on every edge. A 3.5 x 2 inch card file is 3.75 x 2.25 inches, and a 4 x 6 inch postcard file is 4.25 x 6.25 inches
- Safe zone: keep text at least 0.125 inch inside the trim, and 0.25 inch is safer for small pieces
- Borders: avoid thin borders close to the edge, because any shift in the cut makes them look uneven; keep borders at least 0.25 inch wide or leave them out
- Backgrounds and photos: extend them fully into the bleed, never stop them at the trim line
Without bleed, a background that stops exactly at the edge can leave a thin white line when the sheet is trimmed.
## What resolution do images need for printing?
Images need 300 DPI at the size they will print for anything held in the hand, such as cards, flyers, brochures and forms. DPI is measured at the final size, so enlarging a 300 DPI photo to twice its size cuts it to 150 DPI.
- Small format print: 300 DPI at final size
- Posters up to about 24 x 36 inches: 150 to 300 DPI at final size
- Banners and large format signs: 100 to 150 DPI at full size is usually enough, because they are seen from several feet away
- Logos: vector files such as AI, EPS, SVG or a vector PDF print sharp at any size
- Web images: usually 72 DPI and too small, so avoid images saved from a website or social media
To check, divide the image's pixel width by the printed width in inches. A 1,050 pixel wide image printed 3.5 inches wide is exactly 300 DPI.
## Should print files be CMYK or RGB?
Print files should be CMYK, because presses print with cyan, magenta, yellow and black inks, not the red, green and blue light of a screen. RGB files are converted during printing, and some bright screen colors cannot be matched in ink.
- Convert to CMYK in your design software and review the colors before exporting
- Vivid RGB blues, greens and oranges are the colors most likely to shift
- Large black backgrounds: use rich black, such as 60 C, 40 M, 40 Y, 100 K, for a deep black
- Small text and fine lines: use 100 percent black only, so they stay sharp
- Brand colors: specify the Pantone number if exact matching matters
Screens are brighter than paper, so a printed proof is the only reliable way to judge color.
## How should fonts and text be handled?
Fonts must be embedded in the PDF or converted to outlines, or the printer's system may substitute a different font. A missing font can reflow text, break lines or drop special characters.
- Embed all fonts when exporting the PDF, which PDF/X presets do automatically
- Outline fonts in logos and headlines if you are sending an AI or EPS file
- Minimum text size: about 6 to 7 pt for legible small print, larger for reversed white text on a dark background
- Minimum line weight: 0.25 pt, since thinner lines can break up in print
- Spell check names, phone numbers, addresses and URLs on the proof, because they are the most common errors
Bilingual English and Spanish layouts need extra room, since Spanish text often runs longer than the English.
## What extra rules apply to folded pieces and banners?
Folded pieces and large format jobs each have their own setup rules on top of the basics. Planning them in the file avoids reprints.
- Tri-fold brochures: the tucked panel is about 1/16 inch narrower, so panels are not equal thirds
- Folds: keep text at least 0.125 inch away from every fold line
- Saddle-stitched booklets: page counts must be a multiple of 4, and inner pages shift outward slightly, so keep margins generous
- Banners: keep text and logos 1 to 2 inches in from the edge, clear of hems and grommets
- Carbonless forms: leave enough writing space in each field, and keep numbering areas clear
Send your PDF with the finished size and any fold or finishing notes, and review the proof carefully before approving it.`,
  },
  {
    slug: "padded-vs-booked-vs-snap-set-carbonless-forms",
    title: "Padded vs booked vs snap-set carbonless forms: which format should you order?",
    description: "How padded, booked, snap-set and loose carbonless forms differ, what each format is best for, and how to pick the right one for invoices, work orders, receipts and patient forms.",
    date: '2026-11-21',
    keywords: ["padded vs booked carbonless forms", "carbonless form books", "snap-set forms", "NCR form pads", "carbonless forms Los Angeles"],
    shortAnswer: "Order booked forms when a copy must stay behind as a permanent record, such as field receipts or delivery tickets. Order padded forms for counter or desk use where every copy of the set leaves the pad. Order snap-sets when one person fills out the form and the copies are split between departments right away.",
    related: [
      { href: "/guides/ncr-carbonless-forms-how-many-parts", label: "Guide: 2, 3 or 4 part carbonless forms" },
      { href: "/automotive-printing-los-angeles", label: "Automotive printing in Los Angeles" },
      { href: "/healthcare-printing-los-angeles", label: "Healthcare printing in Los Angeles" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "How many sets come in a carbonless pad or book?", a: "Pads and books are most often made in 25 or 50 sets each, and 50 is the usual choice for forms used every day." },
      { q: "Why does my writing show up on the next set in a pad?", a: "Carbonless coating reacts to pressure, so writing on a set while it sits on the pad marks the set below; tear the set off first or slide a writing shield under it." },
      { q: "Can booked forms be numbered?", a: "Yes. Booked forms are almost always numbered in sequence across every book, so a missing receipt or ticket is easy to spot." },
      { q: "Can I run carbonless forms through my office laser printer?", a: "Only if they are made on laser-compatible carbonless stock and supplied as loose collated sets, because padding glue and book bindings will not feed through a printer." },
      { q: "Which format is cheapest?", a: "Padded and loose sets cost the least to finish, while books add a cover and binding step, so they cost a little more per set." },
    ],
    body: `Once you know how many parts your form needs, the next question is how the sets should be put together. The same 3-part invoice can arrive as a glued pad, a bound book, a snap-apart unit set or a box of loose sets, and each format changes how your staff fill it out and what record stays behind.
## What are the main carbonless form formats?
Carbonless forms come in four common formats: padded, booked, snap-set and loose. All four use the same coated paper, where pressure from a pen on the top sheet transfers to the sheets below, so the difference is only in how the sets are held together.
- Padded: sets stacked and glued along one edge, usually the top, with a chipboard backer. You tear off one complete set at a time.
- Booked: sets bound into a book with a cover, usually 25 or 50 sets per book. The top copies tear out on a perforation and the last copy stays in the book.
- Snap-set (also called a unit set): every part of a single set is joined at a narrow perforated stub, so the whole set snaps apart in one pull.
- Loose: individual collated sets in a box, with no glue or binding, often used with laser-compatible carbonless stock.
Each format suits a different workflow, so start with where and how the form gets filled out.
## When are padded carbonless forms the right choice?
Padded forms are the right choice when the form is filled out at a counter or desk and every copy of the set leaves the pad. A typical pad holds 50 sets glued at the top edge, with a chipboard back so it stands up to handling.
- Best for: front desk forms, order forms, internal requests, referral slips
- Durability: good on a desk, less sturdy in a truck or clipboard bag
- Typical use: 2-part order forms at 5.5 x 8.5 inches, office requests at 8.5 x 11 inches
- Pros: lowest finishing cost, easy to tear off a full set, simple to reorder
- Cons: no cover, so writing on a set while it is still on the pad marks the set below unless you tear it off first or use a writing shield
Padded forms work well when the office keeps its copy in a file rather than in the pad itself.
## When should you order booked carbonless forms?
Booked forms are the better choice when a copy must stay behind as a permanent, numbered record. The book has a wraparound cover that folds under the current set as a writing shield, so pressure does not mark the sets below.
- Best for: receipts, delivery tickets, field service tickets, cash logs, parking or valet tickets
- Durability: high, because the cover protects the sets in a vehicle, bag or toolbox
- Typical use: 2-part or 3-part receipts at 5.5 x 8.5 inches or smaller, 25 or 50 sets per book
- Pros: the last copy never leaves the book, sequential numbering shows any gaps, easy to audit
- Cons: costs a little more per set than pads, and the book takes more space to store
If a manager ever needs to check every ticket written in a week, booked forms make that a five-minute job.
## What are snap-set forms and who uses them?
Snap-sets are single sets where every part is attached to a narrow perforated stub, usually about half an inch to one inch wide, along the top or side edge. After the form is filled out, one pull on the stub separates all of the copies at once.
- Best for: forms one person completes and then splits between departments immediately
- Durability: each set is self-contained, so sets travel well in a folder or a tray
- Typical use: 3-part or 4-part work orders, purchase orders, inspection forms and repair orders at 8.5 x 11 inches
- Pros: fast to separate, keeps all parts aligned while writing, no pad to manage
- Cons: the stub is waste paper, and loose snap-sets need a clipboard or a hard surface under them
Snap-sets are common in service departments where the customer, office and technician each walk away with a different color copy.
## When do loose carbonless sets make sense?
Loose sets make sense when you want to fill in the form with a computer printer instead of a pen. The sheets are supplied collated in order, without glue or binding, and a laser printer prints the data on each sheet of the set in turn, so every part carries the typed information while signatures still transfer by pressure.
- Best for: forms that are typed or printed from software, such as invoices or bills of lading
- Durability: lowest as delivered, since nothing holds the sets together
- Typical use: 2-part or 3-part 8.5 x 11 inch forms printed on a laser printer
- Pros: no handwriting needed, works with existing software
- Cons: the stock must be laser-compatible carbonless, and your software has to print the page once for every part in the set
Ask before ordering, because not every carbonless paper is rated for laser printers. Older pin-fed continuous forms for dot matrix printers still exist, but most offices have moved on from them.
## Which carbonless format should you choose?
Choose the format based on who keeps the last copy and where the form gets filled out. A simple rule we use with customers:
- The record must stay with the person writing it: booked forms
- Every copy leaves the desk with someone: padded forms
- One person fills it out, then copies go to three places: snap-sets
- The form is filled in by software: loose laser-compatible sets
Two details apply to every format. First, add sequential numbering in red or black if you ever need to trace a set, and continue the numbers from your last order. Second, keep the most-used fields near the top of the layout, since writing transfers most clearly to lower parts when it is pressed on a firm surface. If you are still deciding how many copies you need, our guide to 2, 3 and 4-part forms covers the part count and standard paper colors.`,
  },
  {
    slug: "hipaa-print-vendor-business-associate-agreement",
    title: "Does your print vendor need a HIPAA business associate agreement?",
    description: "When a printer counts as a HIPAA business associate, which print jobs involve protected health information, and what to ask about BAAs, file transfer, spoilage and mail design.",
    date: '2026-11-21',
    keywords: ["HIPAA compliant printing", "print vendor business associate agreement", "HIPAA printing patient statements", "medical forms printing Los Angeles", "BAA for printing company"],
    shortAnswer: "Only when the printer will see protected health information. Printing blank intake forms, consent forms, appointment cards or brochures involves no patient data, so no business associate agreement is needed. Printing anything that pairs a patient's name with health or billing details, such as statements, reminders or personalized letters, makes the printer a business associate, and a signed BAA should be in place before any file is sent.",
    related: [
      { href: "/healthcare-printing-los-angeles", label: "Healthcare printing in Los Angeles" },
      { href: "/guides/dental-office-printed-forms-checklist", label: "Guide: dental office printing checklist" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Is a printer a business associate under HIPAA?", a: "A printer is a business associate only when it creates, receives or handles protected health information for a covered entity, such as printing patient statements or personalized letters." },
      { q: "Do I need a BAA to print blank patient intake forms?", a: "No. Blank forms contain no patient information, so printing them does not involve protected health information." },
      { q: "Does the Postal Service need a BAA to carry patient mail?", a: "No. Carriers like the USPS that only transport information fall under what HHS calls the conduit exception, but the printer that prints and inserts the mail is not a conduit." },
      { q: "Can I email a spreadsheet of patient data to a printer?", a: "Send patient data only through an encrypted transfer method agreed in advance, such as a secure portal or SFTP, and never as a regular email attachment." },
      { q: "Does Artistic Printing sign BAAs?", a: "Yes. We offer a business associate agreement on request before any work that involves patient information begins." },
    ],
    body: `Practice managers ask us this question often, usually right after a compliance review. The answer depends on one thing: whether the print job contains protected health information. This guide explains where the line sits and what to ask any printer before patient data leaves your office. It is general information, so confirm the details with your own compliance officer or counsel.
## When does a printer become a HIPAA business associate?
A printer becomes a business associate when it creates, receives, maintains or transmits protected health information on behalf of a covered entity, such as a medical practice, dental office, hospital or health plan. Protected health information, or PHI, is health, treatment or payment information that can be tied to a specific person. A name and address alone on a generic mailer is a gray area, but a name paired with an account balance, a visit date, a provider or a diagnosis is clearly PHI. Once a printer handles that kind of data, HIPAA expects the practice to have a signed business associate agreement, or BAA, with the printer before the work starts. The agreement makes the printer responsible for protecting the data, reporting any breach and passing the same obligations to any subcontractor. Printing that never touches patient data, which is most of what a practice orders, does not create a business associate relationship at all.
## Which print jobs involve protected health information?
Jobs that merge patient data into each printed piece involve PHI, while jobs printed the same for everyone do not. A quick way to sort your print list:
- Involves PHI: patient statements and invoices, appointment reminder postcards or letters with names, recall notices, lab or test result letters, personalized welcome letters, collection letters
- No PHI: blank intake and medical history forms, consent forms, HIPAA notice of privacy practices handouts, appointment cards, referral pads, brochures, signage, business cards, letterhead and envelopes
The second list makes up the bulk of most practice print budgets, and those jobs can be ordered like any other commercial printing. Only the first list needs a BAA, secure file handling and the controls described below. If you are unsure about a specific job, ask whether the printer will ever see a patient's name next to anything about their care or their bill. If the answer is yes, treat it as PHI.
## What should a business associate agreement with a printer cover?
A BAA with a printer should spell out what data the printer may use, how it is protected and what happens if something goes wrong. Look for these points:
- Permitted use: the printer may use the data only to produce and mail the job you ordered
- Safeguards: administrative, physical and technical protections for files and printed pieces
- Breach reporting: how quickly the printer must tell you about a suspected breach
- Subcontractors: any mail house or partner that handles the data must agree to the same terms
- Return or destruction: what happens to data files and printed spoilage when the job is done
- Termination: your right to end the agreement if the terms are not met
Many practices use their own BAA template, and a printer that handles patient data regularly should be ready to review and sign it. We offer a BAA on request before any work begins.
## How should you send patient data files to a printer?
Send patient data only through an encrypted channel agreed in advance, never as a regular email attachment. Common options are a secure upload portal, SFTP or an encrypted file-sharing link with access limited to named people at the shop. Apply the minimum necessary standard, too: export only the fields the job needs. A statement run usually needs name, mailing address, account number, statement date, balance due and the line items, not a full chart or Social Security number. Use a consistent file format such as CSV or Excel with one row per patient and clear column headers, and send a short layout note that maps each field to where it prints. After the job mails, agree on how long the printer keeps the data file, usually just long enough to handle reprints, and confirm that it is deleted afterward.
## What happens to misprints and spoilage?
Every press run creates spoilage, meaning setup sheets, misfeeds and pieces pulled for quality checks, and any of those can carry patient data. Ask the printer how printed spoilage is stored during the job and how it is destroyed after. Cross-cut shredding or a bonded shredding service is the usual answer. Also ask who in the shop can see the job: access should be limited to the people producing it. Proofs deserve the same care. A live-data proof for a statement run should show only a handful of records, and it should come through the same secure channel as the data file rather than through ordinary email. These questions take two minutes to ask and say a lot about whether a printer has done this kind of work before.
## How can the mail piece itself protect patient privacy?
Design the envelope and the mail piece so nothing about a patient's care shows from the outside. Only the name and mailing address should be visible through the window of a #10 double-window envelope, so test the fold to make sure no balance, account detail or service description slides into view. Keep the return address simple: many practices print the practice or billing office name rather than a specialty that would hint at a condition. Postcards are open mail, so use them only for messages with no health details, such as a general reminder to call the office. For statement runs, presort and mail them from one secure location rather than handing stacks to multiple people. If you are planning a statement or reminder program, our guide to statement printing and mailing walks through formats, envelopes and postal steps.`,
  },
  {
    slug: "statement-printing-and-mailing-how-it-works",
    title: "How does statement printing and mailing work?",
    description: "A step-by-step look at statement printing and mailing: data files, statement layout, remittance stubs, double-window envelopes, CASS and NCOA address checks, presort and mail drop.",
    date: '2026-11-21',
    keywords: ["statement printing and mailing", "statement printing services Los Angeles", "patient statement printing", "invoice printing and mailing", "remittance stub printing"],
    shortAnswer: "You send a data file or print-ready statements, the printer merges each record onto your statement layout, prints and folds every page, inserts it with a return envelope into a #10 double-window envelope, checks and presorts the addresses for postal discounts, and drops the mail at the post office. Most monthly statement runs follow the same steps every cycle once the template is approved.",
    related: [
      { href: "/automotive-printing-los-angeles", label: "Automotive printing in Los Angeles" },
      { href: "/healthcare-printing-los-angeles", label: "Healthcare printing in Los Angeles" },
      { href: "/guides/hipaa-print-vendor-business-associate-agreement", label: "Guide: HIPAA and your print vendor" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What file do I need to send for statement printing?", a: "Most runs start from a CSV or Excel export with one row per account, or from a PDF where each statement is already laid out as its own page." },
      { q: "What size envelope do statements go in?", a: "Most statements are 8.5 x 11 inch pages tri-folded into a #10 double-window envelope that measures 4.125 x 9.5 inches, with a #9 return envelope inside." },
      { q: "How many pieces do I need for presort postage?", a: "USPS requires at least 500 pieces in a mailing to qualify for presorted First-Class Mail prices." },
      { q: "What is a remittance stub?", a: "It is the perforated bottom section of a statement that the customer tears off and mails back with payment, usually about 3.5 inches tall so it fits a #9 return envelope." },
      { q: "Can patient statements be printed and mailed this way?", a: "Yes, but patient statements contain protected health information, so a HIPAA business associate agreement and secure file transfer should be in place first." },
    ],
    body: `Statement printing and mailing turns a list of accounts into sealed, addressed and postage-ready envelopes. Medical billing offices, dealership service departments, property managers, schools and membership organizations all use it for monthly or quarterly statements. Here is how the process works from file to mailbox.
## What happens in a statement printing and mailing run?
A statement run moves through the same steps every cycle: data, layout, proof, print, fold and insert, address processing, presort and mail drop. The first run takes the most time because the statement template, envelope and data mapping are set up and approved. After that, each cycle mostly means sending a new data file and approving a short proof.
- Data: you export the accounts that need a statement
- Layout: each record merges into a fixed statement design
- Proof: you check a handful of sample statements with real data
- Print: every page prints with its own name, address and balance
- Fold and insert: pages are folded and inserted with a return envelope
- Address processing: addresses are standardized and checked for moves
- Presort and mail: pieces are sorted for postal discounts and delivered to the post office
The steps below explain the decisions inside each one.
## What data file do you need to send?
Most statement runs start from a CSV or Excel export with one row per account and one column per field. Typical fields are account number, name, mailing address, statement date, previous balance, payments, new charges, amount due, due date, aging buckets such as 30, 60 and 90 days, and an optional message line. If your billing software already produces finished statements, a single PDF with each statement on its own page also works, as long as every page sits in the same position so the address lines up with the envelope window. Keep column names the same from month to month, so the template maps correctly every cycle without changes. Send only the fields the statement needs. For medical or dental statements, that data is protected health information, so it should travel through an encrypted transfer method covered by a business associate agreement.
## How should a statement and remittance stub be laid out?
Most statements print on an 8.5 x 11 inch sheet of 24 lb bond, which is sturdy enough to fold cleanly and accepts pen marks on the stub. The bottom section is a perforated remittance stub, usually about 3.5 inches tall, that the customer tears off and returns with payment. Lay the page out in thirds so it tri-folds evenly:
- Top third: your return address positioned for the upper envelope window, plus the customer's name and address block positioned for the lower window
- Middle third: account summary, line items, aging and messages
- Bottom third: the remittance stub with account number, amount due, an amount enclosed box and your remit-to address
Keep at least 0.25 inch of clear space around each address block so it shows fully through the window when the page shifts slightly in the envelope. Print the remit-to address on the stub so it shows through the window of the return envelope.
## Which envelopes do statements use?
Most statements mail in a #10 double-window envelope, which measures 4.125 x 9.5 inches. The upper window shows your return address and the lower window shows the customer's mailing address, so neither has to be printed on the envelope itself, and the same envelope stock works for every cycle. Inside goes a #9 return envelope, which measures 3.875 x 8.875 inches and slides into a #10 without folding. Return envelopes can be single-window, showing the remit-to address printed on the stub, or printed with your remit-to address directly. Security tint printed inside the envelopes keeps the contents from being read through the paper, which matters for balances and account numbers. If a statement can run to two or more pages, plan for it: multi-page statements are folded together and inserted as one set, which changes the weight and sometimes the postage.
## What are CASS, NCOA and presort?
CASS, NCOA and presort are the postal steps that make sure statements arrive and qualify for lower postage. CASS certification standardizes each address against the USPS database, correcting street suffixes, adding ZIP+4 codes and flagging addresses that do not exist. NCOA processing checks names against the National Change of Address file so mail follows customers who have moved; presorted First-Class Mail requires a move update check within 95 days before the mailing. Presort then groups the pieces by ZIP code and adds an Intelligent Mail barcode, which qualifies the mailing for discounted presorted First-Class Mail prices when it has at least 500 pieces. Smaller runs still mail at standard First-Class prices. Use First-Class Mail for statements, since billing information is not eligible for Marketing Mail. Address corrections from each run are worth feeding back into your billing system so the next cycle is cleaner.
## How long does a statement cycle take to set up?
The first cycle takes the most time, because the template, envelope order and data mapping are all new. Plan for an initial setup that includes a layout proof, a live-data proof of a few records and an envelope fit test before the first run. After that, recurring cycles follow a fixed calendar: you send the file on an agreed day, approve a short proof and the mail drops on schedule. Order envelopes in quantity ahead of time, because printed double-window envelopes are a separate production job and running out stalls a cycle. Keep a simple checklist for each cycle: file sent, proof approved, piece count matches the file, postage statement received. We handle variable data addressing, postal presorting and CASS certification, and we can drop the finished mailing at the postal facility, so a monthly run stays on one calendar.`,
  },
  {
    slug: "16pt-vs-18pt-vs-22pt-vs-32pt-business-cards",
    title: "16 pt vs 18 pt vs 22 pt vs 32 pt business cards: how thick should your card be?",
    description: "How 16 pt, 18 pt, 22 pt and 32 pt business card stocks compare on feel, writability, finishes and cost, with a recommendation for each type of business.",
    date: '2026-11-21',
    keywords: ["16pt vs 32pt business cards", "business card thickness", "thick business cards Los Angeles", "14pt vs 16pt business cards", "cotton business cards"],
    shortAnswer: "For most businesses, 16 pt is the right business card thickness: sturdy, affordable and compatible with matte, gloss and soft-touch finishes. Choose 18 pt uncoated or 22 pt cotton when people need to write on the card, and choose 32 pt when you want a card that feels premium in the hand and can carry a colored edge.",
    related: [
      { href: "/business-card-printing-los-angeles", label: "Business card printing in Los Angeles" },
      { href: "/guides/matte-vs-gloss-vs-soft-touch-business-cards", label: "Guide: matte vs gloss vs soft-touch cards" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "What does pt mean on business card stock?", a: "Pt means points, and one point is one thousandth of an inch, so a 16 pt card is about 0.016 inches thick." },
      { q: "Is 14 pt or 16 pt better for business cards?", a: "16 pt feels noticeably stiffer than 14 pt for a small difference in cost, which is why many printers use 16 pt as the standard card." },
      { q: "Can you write on thick business cards?", a: "You can write on uncoated and cotton stocks easily, while gloss and soft-touch coatings resist ballpoint ink, so choose 18 pt uncoated or 22 pt cotton for appointment cards." },
      { q: "What is a 32 pt business card?", a: "A 32 pt card is built by laminating layers of card stock together, which doubles the thickness of a 16 pt card and allows a colored layer that shows on the edges." },
      { q: "Do thick business cards fit in a card holder?", a: "They fit, but a holder or wallet slot fits about half as many 32 pt cards as 16 pt cards, so carry fewer at a time." },
    ],
    body: `Thickness is the first thing people notice when they take a business card, often before they read it. We print on 16 pt gloss, 16 pt matte, 18 pt uncoated, 22 pt cotton and 32 pt triple-layer stock, and here is how we help customers choose between them.
## What do business card thickness numbers mean?
Business card thickness is measured in points, and one point equals one thousandth of an inch. A 16 pt card is about 0.016 inches thick, and a 32 pt card is about 0.032 inches, twice as thick. Points measure caliper, the actual thickness, which is why card stocks are described in points rather than the lb weights used for text and cover paper. For comparison, many budget online cards are 14 pt, which feels flexible next to 16 pt. Thickness is only part of the feel: coating, paper fiber and finish all change how a card handles. A 22 pt cotton card feels softer and denser than a 22 pt coated card would. The standard US card is 3.5 x 2 inches at every thickness, so the layout rules stay the same: build your file at 3.75 x 2.25 inches to include 0.125 inch of bleed on each side, and keep text at least 0.125 inch inside the trim line.
## When is 16 pt the right business card stock?
16 pt is the right choice for most businesses, because it is stiff enough to feel professional and works with every common finish. It is the stock most people picture when they think of a standard business card.
- Best for: staff cards, sales teams, healthcare offices, dealerships, anyone ordering cards for many people
- Durability: holds its shape in a wallet and through normal handling
- Finishes: matte, gloss, soft-touch, spot UV and foil
- Pros: lowest cost of the thicker stocks, simplest to reorder, broadest finish options
- Cons: coated 16 pt resists ballpoint ink, and it will not stand out on thickness alone
If you are ordering for a team of ten or more, 16 pt matte or gloss keeps every card consistent and affordable. Our guide to matte, gloss and soft-touch finishes covers how each coating looks and feels.
## When should you choose 18 pt uncoated?
Choose 18 pt uncoated when people need to write on the card. Uncoated paper has no sealing layer on top, so pencil, ballpoint and gel ink all sit on the surface and dry quickly without smearing.
- Best for: appointment cards, loyalty and punch cards, cards where staff write a direct number or a next visit
- Durability: slightly thicker than 16 pt, with a natural paper texture that shows wear sooner than coated stock
- Finishes: works well with foil and with simple one or two color designs
- Pros: fully writable, natural look, a step up in thickness from 16 pt
- Cons: colors print slightly softer than on coated stock, and large solid areas look less saturated
Medical and dental offices often use 18 pt uncoated for appointment cards, with the logo on the front and a writable time and date grid on the back.
## When is 22 pt cotton worth it?
22 pt cotton is worth it when the card itself should say something about your business, such as craft, care or a premium service. Cotton stock is made from cotton fiber rather than wood pulp, which gives it a soft, slightly textured surface and a dense, substantial feel.
- Best for: designers, photographers, boutique hotels and restaurants, law and financial offices, wedding and event professionals
- Durability: very good, with a fiber that resists creasing
- Finishes: pairs especially well with foil and simple, spacious layouts
- Pros: premium feel, writable surface, distinctive texture people remember
- Cons: costs more than 16 pt or 18 pt, and fine photographic detail prints less crisply on the textured surface
Cotton rewards simple designs: a logo, a name and contact details with plenty of white space.
## When should you choose 32 pt business cards?
Choose 32 pt when you want the card to stand out on thickness alone. A 32 pt card is built by laminating layers of card stock together, so it is about twice as thick as 16 pt and feels rigid in the hand.
- Best for: real estate agents, creative studios, luxury retail, founders and executives, anyone handing out a few cards at a time to high-value contacts
- Durability: highest of any paper card, it does not bend in a pocket
- Finishes: a colored middle layer can show on all four edges, and foil works well on the face
- Pros: memorable feel, edge color adds a brand accent, very durable
- Cons: highest cost per card, and a holder or wallet slot fits about half as many cards
Because each card costs more, 32 pt is usually ordered in smaller quantities for the people who network most, while the rest of the team carries 16 pt.
## Which business card thickness should you choose?
Choose the thickness that matches how the card will be used, not just how thick it feels. A quick guide by use case:
- Large team, consistent cards, best value: 16 pt matte or gloss
- Staff or customers write on the card: 18 pt uncoated
- Premium, tactile brand with simple design: 22 pt cotton
- Make the strongest first impression, small quantity: 32 pt with colored edges
- Mixed needs: 16 pt for the whole team, 32 pt for owners or sales leads
Before you order, look at the design too. Thin hairlines and very small type read best on smooth coated stocks, while bold, simple layouts suit uncoated and cotton. Samples of each stock are available on request, and holding them side by side is the fastest way to decide.`,
  },
  {
    slug: "digital-vs-offset-printing-which-to-choose",
    title: "Digital vs offset printing: which is right for your print job?",
    description: "How digital and offset printing compare on quantity, color matching, paper choice and versioning, with a simple way to decide which method fits your next print run.",
    date: '2026-11-19',
    keywords: ["digital vs offset printing", "offset printing Los Angeles", "digital printing Los Angeles", "short run printing", "Pantone color matching"],
    shortAnswer: "Choose digital printing for short runs, fast changes and pieces that need names or numbers that change from piece to piece. Choose offset printing for long runs where a lower cost per piece, exact Pantone color matching or a special paper matters more than setup. For many jobs in the hundreds, either works, so ask your printer to quote both.",
    related: [
      { href: "/brochure-printing-los-angeles", label: "Brochure printing in Los Angeles" },
      { href: "/flyer-printing-los-angeles", label: "Flyer printing in Los Angeles" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Is digital printing lower quality than offset?", a: "Not for most business print. Modern production digital presses produce sharp text and photos, and the main differences are in exact spot color matching and very large solid color areas, where offset still has the edge." },
      { q: "Why does offset printing cost more for small quantities?", a: "Offset needs printing plates and press setup before the first good sheet, and that fixed cost is spread across the run, so it only pays off when the quantity is large enough." },
      { q: "Can digital printing match a Pantone color?", a: "Digital presses simulate Pantone colors by mixing CMYK toner, which gets close for many colors but not all, so brand-critical colors are matched most reliably with an offset spot color ink." },
      { q: "Which method is better for personalized mailers?", a: "Digital, because each piece can carry a different name, address, offer code or image in the same run without any extra setup." },
      { q: "Do I need different files for digital and offset printing?", a: "No. The same press-ready PDF with 0.125 inch bleed, 300 DPI images and embedded fonts works for both, though offset jobs that use spot colors should keep those colors defined as Pantone swatches." },
    ],
    body: `Most commercial print today is produced on one of two kinds of press: a digital press, which works much like a very fast, very precise laser printer, or an offset press, which transfers ink from metal plates to paper. We run both, so here is how we help customers pick between them.
## What is the difference between digital and offset printing?
Digital printing puts toner or ink straight onto the sheet from a file, with no plates, so the first sheet off the press is a finished, sellable piece. Offset printing burns the image onto aluminum plates, one per ink color, then transfers ink from the plates to rubber blankets and onto paper. That setup takes time and material before the first good sheet, but once the press is running, every additional sheet costs very little. In practice this means digital is efficient for small quantities and anything that changes from piece to piece, while offset becomes more economical as the quantity grows. Both produce professional results on business cards, brochures, flyers and forms. The right choice comes down to four questions: how many pieces you need, whether a brand color must match exactly, what paper you want, and whether any content changes between pieces.
## When is digital printing the better choice?
Digital printing is the better choice when the quantity is small, the deadline is tight or each piece needs different information.
- Best for: short runs, proofs and samples, event materials, variable data mail, frequent reprints with small edits
- Typical quantities: from one piece up to a few hundred, and often up to a thousand or more for simple single-sheet jobs
- Color: four-color CMYK, with Pantone colors simulated from CMYK
- Pros: no plates, low setup, every piece can be personalized, easy to print only what you need now
- Cons: higher cost per piece on long runs, limited exact spot color matching, some specialty papers and very heavy stocks are not compatible
Digital is also the practical way to print a few versions of the same piece, such as flyers for several locations, without paying for separate plates.
## When is offset printing the better choice?
Offset printing is the better choice for long runs, exact brand colors and jobs where paper choice is part of the design.
- Best for: large brochure and catalog runs, letterhead and envelopes with a Pantone logo, forms printed by the thousand, packaging
- Typical quantities: from about a thousand pieces upward, though the crossover point depends on size, colors and paper
- Color: CMYK plus true Pantone spot color inks, and coatings such as aqueous or varnish
- Pros: lowest cost per piece at volume, exact spot color matching, consistent large solid areas, wide range of papers, including uncoated and textured stocks
- Cons: plate and setup cost make short runs expensive, every change requires new plates, and no per-piece personalization
If your logo is a specific Pantone color and the job is large, offset is usually the safer way to protect that color.
## How do I decide between digital and offset for my job?
Decide by starting with quantity, then checking color, paper and versioning. If you need fewer than a few hundred pieces, digital is almost always the answer. If you need several thousand identical pieces, offset usually wins on cost per piece. In the middle range, a few hundred to a few thousand, both methods can make sense, and the details decide it:
- A brand color that must match a Pantone swatch exactly points to offset
- Names, numbers, addresses or codes that change on each piece point to digital
- Uncoated, textured or very heavy paper often points to offset
- A file that will change again soon points to digital, because you can print smaller batches more often
When you request a quote, tell us the quantity, finished size, paper, number of colors and whether any content varies. That is enough for us to tell you which press fits the job and quote it accordingly.
## Does file setup change between digital and offset printing?
File setup is the same for both methods, which makes switching between them easy. Build the file at the finished size plus 0.125 inch bleed on every edge where color or images run off the page, and keep text and logos at least 0.125 to 0.25 inch inside the trim line. Use images at 300 DPI at the size they print, export a press-ready PDF and embed or outline all fonts. Set rich black (for example 60 percent cyan, 40 magenta, 40 yellow, 100 black) only for large black areas, and keep small text in plain 100 percent black so it stays crisp. If the job will run offset with a spot color, keep that color defined as a named Pantone swatch rather than converting it to CMYK. For digital jobs with variable data, send the list as a clean spreadsheet with one column per field, and we will merge it into the layout.`,
  },
  {
    slug: "coroplast-vs-foam-board-vs-pvc-vs-aluminum-signs",
    title: "Coroplast vs foam board vs PVC vs aluminum signs: which should you choose?",
    description: "A side-by-side comparison of corrugated plastic, foam board, PVC and aluminum composite signs: where each works, how long it lasts and the standard sizes and thicknesses.",
    date: '2026-11-19',
    keywords: ["coroplast vs foam board", "aluminum composite signs", "PVC signs", "yard sign printing Los Angeles", "rigid sign materials"],
    shortAnswer: "Use foam board for indoor signs and event displays, coroplast (corrugated plastic) for lightweight outdoor yard signs and short campaigns, PVC for indoor or covered outdoor signs that need a smooth, sturdy finish, and aluminum composite for permanent outdoor signs that must last for years.",
    related: [
      { href: "/large-format-printing-los-angeles", label: "Large format printing in Los Angeles" },
      { href: "/banner-printing-los-angeles", label: "Banner printing in Los Angeles" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Can foam board signs be used outside?", a: "Only briefly. Foam board warps and its paper facing absorbs moisture, so it should stay indoors or under cover; use coroplast or aluminum composite outdoors." },
      { q: "What size is a standard yard sign?", a: "The most common yard sign is 18 x 24 inches on 4 mm coroplast, mounted on a metal H-stake that slides into the flutes." },
      { q: "What is aluminum composite material (ACM)?", a: "ACM is two thin aluminum sheets bonded to a solid plastic core, usually 3 mm thick in total, which makes it rigid, flat and weather resistant for long-term outdoor signs." },
      { q: "Which sign material is cheapest?", a: "Coroplast and foam board are usually the lowest cost per sign, PVC is in the middle and aluminum composite costs the most, which is offset by its much longer life outdoors." },
    ],
    body: `Rigid signs cover a lot of ground: lobby signs, event easels, yard signs, parking signs and permanent building signs. Four materials handle almost all of them, and each one has a job it does best. We print on all four, and this is how we help customers choose.
## Which rigid sign material should I choose?
Choose the material by where the sign lives and how long it needs to last. Indoor signs that are seen up close, such as lobby, easel and presentation signs, look best on foam board or PVC. Outdoor signs that only need to last through a campaign, an open house, an election or a seasonal promotion are usually printed on coroplast, because it is light, waterproof and inexpensive. Outdoor signs that need to stay up for years, such as parking, address, wayfinding and storefront signs, belong on aluminum composite. Two more questions refine the choice. Will the sign be moved or carried? Foam board and coroplast are the lightest. Will it be mounted with screws or hardware? PVC and aluminum composite hold fasteners best. If you are unsure, tell us where the sign will hang, how it will be mounted and how long it should last, and we will recommend the material.
## When is coroplast (corrugated plastic) the right choice?
Coroplast is the right choice for lightweight outdoor signs that need to survive weather for a season, not for years.
- Best for: yard signs, real estate and open house signs, campaign signs, temporary directional and construction signs
- Common thickness: 4 mm, with 10 mm for larger, stiffer signs
- Common sizes: 18 x 24, 24 x 36 and 4 x 8 feet
- Durability: waterproof and weather resistant; typically lasts several months to about a year outside, depending on sun exposure
- Pros: low cost, very light, works with H-stakes slid into the flutes, can be printed on both sides
- Cons: visible flute texture up close, can bend in strong wind, fades and becomes brittle with long sun exposure
For H-stake yard signs, ask for the flutes to run vertically so the stake slides in from the bottom edge.
## When is foam board the right choice?
Foam board is the right choice for indoor signs that need to look clean and stay light.
- Best for: event easel signs, welcome and seating signs, trade show and presentation boards, retail displays, temporary lobby signs
- Common thickness: 3/16 inch for most signs, 1/2 inch for larger or freestanding signs
- Common sizes: 18 x 24, 24 x 36 and 36 x 48 inches
- Durability: indoor use; the paper facing dents and absorbs moisture, and the board can warp in humidity or sun
- Pros: very light, smooth print surface, low cost, easy to carry and set on an easel
- Cons: not for outdoor use, corners dent easily, cannot hold screws well
Foam board is the usual pick for events, where a sign is used for a day or a week and then retired.
## When should I use PVC or aluminum composite instead?
Use PVC for durable indoor signs and aluminum composite for long-term outdoor signs.
- PVC (expanded PVC board): best for office and lobby signs, menu boards, retail and wall signs; common in 3 mm and 6 mm; smooth, rigid and moisture resistant; holds screws and standoffs; can work outdoors under cover but can warp in direct heat and sun
- Aluminum composite (ACM): best for parking, address, wayfinding, storefront and building signs; common in 3 mm; two aluminum skins over a plastic core keep it flat, weatherproof and rigid; lasts for years outdoors, especially with a UV laminate; costs more than the other three
Both take drilled holes, standoffs, rivets and double-sided mounting tape, so they are the materials to choose when a sign will be permanently installed. For outdoor signs in direct sun, adding a UV-protective laminate over the print helps colors last longer.
## How should I set up artwork for a rigid sign?
Set up the file at the exact finished size, add 0.125 inch bleed on every edge where color runs to the edge and keep text and logos at least 1 inch inside the edges on larger signs so nothing feels cramped. Leave extra margin where holes, grommets or standoffs will go, usually 1 inch from each corner. Images should be at least 150 DPI at full printed size for large signs viewed from a few feet away, and 300 DPI for smaller signs read up close. Use large type: as a rough guide, each inch of letter height is readable from about 10 feet away for a quick glance, so a sign read from the street needs letters several inches tall. High contrast, such as dark text on a light background, reads best outdoors. Send a print-ready PDF with fonts embedded, and tell us how the sign will be mounted so we can drill or add hardware before it leaves the shop.`,
  },
  {
    slug: "car-dealership-printing-checklist",
    title: "What does a car dealership need printed? A checklist for sales, F&I and service",
    description: "A practical checklist of the printed materials car dealerships use in sales, finance and the service drive, with common sizes, paper types and part counts for each item.",
    date: '2026-11-19',
    keywords: ["printing for dealerships", "car dealership printing", "window addendum stickers", "repair order forms", "deal jackets"],
    shortAnswer: "Most dealerships need window addendum stickers, deal jackets and sales forms for the sales floor and F&I office, multi-part repair orders, key tags, mirror hangers and paper floor mats for the service drive, and brochures, mailers and banners for marketing. Keep a reorder list by department so nothing runs out on a busy weekend.",
    related: [
      { href: "/automotive-printing-los-angeles", label: "Automotive and dealership printing" },
      { href: "/guides/ncr-carbonless-forms-how-many-parts", label: "Guide: 2, 3 or 4 part carbonless forms" },
      { href: "/guides/statement-printing-and-mailing-how-it-works", label: "Guide: statement printing and mailing" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Do dealerships print the window sticker on new cars?", a: "No. The federally required new-car price label, often called the Monroney sticker, comes from the manufacturer; dealers print a separate addendum sticker for dealer-installed options and adjustments." },
      { q: "What size is a window addendum sticker?", a: "Addendum stickers are commonly printed on narrow adhesive strips about 4 to 5 inches wide and 11 inches tall so they fit beside the factory label, though some dealers use full 8.5 x 11 inch labels." },
      { q: "How many parts should a repair order have?", a: "Most repair orders are 3 or 4 part carbonless sets, giving copies to the customer, the technician, the office and sometimes the parts or warranty department." },
      { q: "Are FTC Buyers Guides something a dealer can print?", a: "Yes, dealers can print Buyers Guides for used vehicles, but the form's wording and layout are set by the FTC Used Car Rule, so use the current official version without changes." },
      { q: "Can dealership forms be set up as templates for multiple rooftops?", a: "Yes. A master template with a space for each store's name, address and logo lets a dealer group reorder the same form for every location with consistent branding." },
    ],
    body: `A dealership runs on paper in more places than most people realize: on the windows of every car on the lot, in every deal jacket, and on the counter of the service drive. This checklist covers what each department typically orders, with the sizes and specs we see most often.
## What printed materials does a car dealership need?
A dealership needs printed materials in four areas: the lot and showroom, the sales and F&I office, the service drive, and marketing. On the lot, that means window addendum stickers, used-vehicle Buyers Guides, price and feature stickers and lot banners. In sales and F&I, it means deal jackets, worksheets, checklists and branded folders that hold the paperwork a customer takes home. The service drive uses carbonless repair orders, key tags, mirror hangers, paper floor mats and service reminder cards. Marketing covers brochures, direct mail postcards, event flyers and large format signs for sales events. The easiest way to manage it all is a single reorder list by department, with each item's size, part count and usual quantity, so a manager can reorder in one message instead of hunting for old files. Dealer groups with several rooftops benefit from master templates that change only the store name, address and logo.
## What does the sales floor and F&I office need?
The sales floor and F&I office need printed pieces that keep every deal organized and compliant.
- Window addendum stickers: adhesive strips, commonly about 4 to 5 inches by 11 inches, listing dealer-installed equipment next to the manufacturer's label
- Used-vehicle Buyers Guides: the FTC-required window form for used cars, printed using the current official wording and layout
- Deal jackets: envelope-style folders, commonly 9.5 x 12.5 or 10 x 13 inches, with a printed checklist on the front for every document in the deal
- Worksheets and credit applications: often 2-part carbonless so the customer and the store each keep a copy
- Presentation folders: 9 x 12 inch pocket folders with a business card slit, for the paperwork the buyer takes home
- Business cards for every salesperson, usually on 14 to 16 pt card stock
A printed deal jacket checklist sounds small, but it is one of the simplest ways to catch a missing signature before a deal goes to funding.
## What does the service department need printed?
The service department needs durable, high-volume items that are handled by technicians and customers all day.
- Repair orders: 3 or 4 part carbonless sets, commonly 8.5 x 11 inches, sequentially numbered so every job can be traced
- Key tags: numbered paper or plastic tags, often printed in sets that match the repair order numbers
- Mirror hangers: hang tags around 3.5 x 8.5 inches on heavy card stock with a die-cut hole, showing the RO number and promise time
- Paper floor mats: about 17 x 22 inches, printed with the dealership logo, to protect carpets during service
- Service reminder postcards: 4 x 6 or 6 x 9 inches, mailed for oil changes and scheduled maintenance
- Multi-point inspection forms: often 2-part carbonless with a checklist and a car diagram
Our guide to 2, 3 and 4 part carbonless forms explains how to decide how many copies a repair order really needs.
## What marketing print do dealerships use?
Dealership marketing print focuses on sales events, model launches and keeping service customers coming back.
- Model and sales brochures: often 8.5 x 11 inch trifolds or multi-page booklets on 100 lb gloss text with a heavier cover
- Direct mail: postcards from 6 x 9 to 6 x 11 inches for sales events, lease-end offers and service specials
- Lot and showroom banners: 13 oz vinyl with hemmed edges and grommets for sales events, and mesh for fences in windy spots
- Windshield and showroom signs: rigid foam board or PVC for inside the showroom, coroplast for temporary lot signs
- Event flyers and door hangers: for tent sales, community events and new model reveals
Most dealerships also follow a manufacturer brand book for logos, colors and fonts. Share it with your printer at the start so every piece, from a mirror hanger to a banner, uses the approved artwork and colors.
## How can a dealership keep print costs and reorders under control?
A dealership keeps print under control by standardizing items and tracking usage. Start by listing every printed item, the department that uses it, its size, paper, part count and how many you go through per month. Standardize sizes across stores where possible, because one repair order design reprinted for five rooftops is easier to manage than five different ones. Order numbered forms in quantities that last a few months, and note the last number used so the next order continues the sequence. Keep compliance forms, such as Buyers Guides and any state-required disclosures, on the official current version and review them when regulations change. Finally, assign one person to approve proofs so brand and legal details are checked consistently. We work with dealerships across Los Angeles and offer free pickup and delivery in LA, which makes regular reorders simple.`,
  },
  {
    slug: "school-event-program-booklet-printing-guide",
    title: "How do you print a school event or graduation program? Sizes, page counts and paper",
    description: "How to plan a printed program for a graduation, concert, play or awards night: common sizes, why booklet page counts come in multiples of 4, paper weights and file setup.",
    date: '2026-11-19',
    keywords: ["school event programs printing", "graduation program printing", "saddle stitch booklet", "concert program printing", "education printing Los Angeles"],
    shortAnswer: "Most school programs are printed at 5.5 x 8.5 inches (a letter sheet folded in half) or 8.5 x 11 inches (an 11 x 17 sheet folded), saddle stitched with staples on the fold. Because each folded sheet makes 4 pages, the page count must be a multiple of 4, such as 4, 8, 12 or 16. Use 80 to 100 lb text for the inside pages and a heavier cover stock if the program has more than 8 pages.",
    related: [
      { href: "/guides/saddle-stitch-vs-perfect-binding-vs-spiral-vs-wire-o", label: "Guide: booklet binding types compared" },
      { href: "/education-printing-los-angeles", label: "School and education printing" },
      { href: "/guides/vinyl-vs-mesh-banners-school-fences-sports-fields", label: "Guide: vinyl vs mesh banners for schools" },
      { href: "/contact", label: "Request a quote" },
    ],
    faqs: [
      { q: "Why does a booklet need a page count divisible by 4?", a: "A saddle-stitched booklet is made from sheets folded in half, and each folded sheet creates 4 pages, so the total must be 4, 8, 12, 16 and so on." },
      { q: "How many programs should a school print?", a: "Count expected attendees, not graduates or performers, and add about 10 percent for families who want extra copies and for keepsakes." },
      { q: "Can a program include a ticket or donation tear-off?", a: "Yes. A perforated panel can be added to a folded program so guests can tear off a raffle ticket, donation slip or reply card." },
      { q: "What is the best paper for a graduation program?", a: "A 100 lb text weight in silk or matte for the inside pages, with an 80 to 100 lb cover, gives a keepsake feel that is still easy to fold and read." },
      { q: "How do I avoid misspelled student names?", a: "Collect names from the official roster in a spreadsheet, have a second person check each name against it on the final proof, and approve the proof only after that check." },
    ],
    body: `Programs are the one print piece families keep after a graduation, concert or play. They also tend to come together at the last minute, when the final list of names arrives. Planning the format early makes the final week much calmer.
## What size should a school event program be?
Most school programs are 5.5 x 8.5 inches, which is a standard letter sheet folded in half. That size fits comfortably in a hand or a purse, works for a single folded sheet or a small booklet, and is the most economical choice for most events. Larger events with long lists of names, such as a graduation with hundreds of graduates, often move up to 8.5 x 11 inches, made from 11 x 17 sheets folded in half, so names can run in two or three columns at a readable size. A third option is a tall, narrow program made by folding a letter or legal sheet into panels, which works for short concert or recital programs with a simple order of performance. Pick the size by the amount of text: if the names list would need type smaller than about 9 point at 5.5 x 8.5 inches, move up to the larger size rather than shrinking the type.
## How many pages can a printed program have?
A printed program can have as many pages as you need, but a stapled booklet must come in multiples of 4. Each sheet folded in half creates 4 pages: front, inside left, inside right and back. A single folded sheet is a 4-page program, two nested sheets make 8 pages, three make 12, and so on. If your content fills 10 pages, plan for 12 and use the extra 2 pages for sponsor thank-yous, notes, photos or a blank page for autographs. Saddle stitching, which staples the booklet through the fold, works well up to about 48 to 64 pages depending on paper weight. Above that, the booklet becomes thick at the spine and the inner pages push outward, an effect called creep, and a perfect bound (glued spine) booklet may be a better fit. For most school events, 4 to 16 pages covers the order of events, the names list, messages and acknowledgments.
## What paper should a school program be printed on?
School programs are usually printed on coated text paper inside and, for longer booklets, a heavier cover.
- Single folded sheet (4 pages): 80 to 100 lb cover stock gives a sturdy feel, or 100 lb text for a lighter, lower cost program
- 8 pages: 100 lb text throughout is common and folds cleanly
- 12 pages and up: 80 to 100 lb text inside with an 80 to 100 lb cover, often called plus cover
- Finish: silk or matte is easiest to read under stage lighting; gloss makes photos pop but can reflect light
- Color: full color for covers and photos, or black on the inside pages for long name lists to control cost
If guests will write in the program, such as autographs at a senior event, choose a matte or uncoated stock so pens do not smear.
## How should program files be set up for printing?
Program files should be built as single pages at the finished size, in reading order, and exported as a press-ready PDF. The printer arranges pages into printer spreads for the fold, so do not lay out pages side by side yourself unless asked. Add 0.125 inch bleed on every edge where color or photos run off the page, and keep text and page numbers at least 0.25 inch inside the trim, with a little more on the inside edge of thicker booklets to allow for creep. Photos should be 300 DPI at the size they print; phone photos are usually fine if they are not enlarged. Use body text of at least 9 to 10 point and a clear sans serif or serif font for names. Embed all fonts, and use school colors from the school's official values so the program matches signs and banners at the event.
## How far ahead should a school plan program printing?
Plan the program design several weeks ahead and leave a fixed window at the end for the final names. Most delays come from content, not printing: rosters change, sponsor logos arrive late and speeches are confirmed in the last week. Build the layout early with placeholder names, lock the cover, sponsor pages and order of events first, then drop in the final roster on a set date. Have two people check every name against the official list on the proof, since misspelled names are the most common and most painful program error. Count attendees, not graduates, when setting the quantity, and add about 10 percent for extras and keepsakes. If you also need banners, signs or tickets for the same event, order them together so colors match across everything guests see. Our guide to 13 oz vinyl vs mesh banners covers the banner side of school events.`,
  },
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
      { href: "/guides/retractable-banner-vs-x-banner-vs-tabletop-vs-step-and-repeat", label: "Guide: indoor event displays compared" },
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
    keywords: ["soft touch business cards Los Angeles", "matte vs gloss business cards", "soft touch business cards", "business card finishes", "best finish for business cards"],
    shortAnswer: "Choose matte for a clean, readable card you can write on, gloss for photo-heavy cards where color should pop, and soft-touch for a premium card with a velvety feel people remember. Soft-touch pairs especially well with spot UV or foil on 16 pt or heavier stock.",
    related: [
      { href: "/business-card-printing-los-angeles", label: "Business card printing in Los Angeles" },
      { href: "/guides/dental-office-printed-forms-checklist", label: "Dental office printing checklist" },
      { href: "/guides/16pt-vs-18pt-vs-22pt-vs-32pt-business-cards", label: "Guide: business card thickness compared" },
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
      { href: "/guides/hipaa-print-vendor-business-associate-agreement", label: "Guide: HIPAA and your print vendor" },
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
      'How to choose the number of parts for carbonless forms, what each copy color is for, which sizes and paper are standard, and how numbering affects the order.',
    date: '2026-11-17',
    updated: '2026-11-21',
    keywords: ['NCR forms', 'carbonless forms', '3 part forms', 'carbonless form printing Los Angeles'],
    shortAnswer:
      'Choose one part for every person who needs to keep a copy. Two-part forms (white and canary) suit most invoices and receipts, three-part (white, canary, pink) suit work orders that go to a customer, the office and the field, and four-part adds a goldenrod copy for one more department.',
    related: [
      { href: '/guides/padded-vs-booked-vs-snap-set-carbonless-forms', label: 'Guide: padded vs booked vs snap-set forms' },
      { href: '/healthcare-printing-los-angeles', label: 'Healthcare printing in Los Angeles' },
      { href: '/automotive-printing-los-angeles', label: 'Automotive printing in Los Angeles' },
      { href: '/contact', label: 'Request a quote' },
    ],
    faqs: [
      { q: 'What does NCR stand for?', a: 'NCR stands for "no carbon required." Each sheet is coated so pressure from a pen transfers the writing to the sheets below without separate carbon paper.' },
      { q: 'What are the standard colors for carbonless forms?', a: 'The common order is white on top, then canary (yellow), pink and goldenrod. The top sheet usually goes to the customer.' },
      { q: 'Can carbonless forms be numbered?', a: 'Yes. Sequential numbering is printed on every part so each set can be tracked, which matters for invoices, work orders and patient forms.' },
      { q: 'How many parts can a carbonless form have?', a: 'Two to four parts covers almost every business form, and five or more parts is possible but the bottom copy gets lighter with each added sheet.' },
      { q: 'Should forms be padded or booked?', a: 'Pad forms when every copy leaves the desk, and book them when one copy must stay behind as a numbered record; our padded vs booked guide compares all four formats.' },
    ],
    body: `Carbonless forms are still the fastest way to give everyone in a transaction their own copy without a printer or a screen. The first decision is how many parts each set needs, and the answer comes from counting people, not pages.
## How do you decide how many parts a carbonless form needs?
Count the people or departments that need to keep their own copy, and order one part for each. If a customer and your office both need a record, you need two parts. If a technician in the field also keeps one, you need three. If billing or a second department files its own copy, you need four. Every extra part adds paper and cost to each set, and it makes the bottom copy a little lighter, because pen pressure has to pass through more sheets. So do not add a copy nobody actually files. A good test is to follow one completed form through a normal day: write down where each copy ends up, who reads it and how long it is kept. Copies that end up in a drawer nobody opens can be dropped, and the money saved can go toward numbering or a better binding format.
## What is each colored copy used for?
Each color is simply a way to tell copies apart at a glance, and the standard order is white, canary, pink, then goldenrod. Most businesses assign them like this:
- White (top): the original, usually handed to the customer or patient
- Canary (yellow): the office, accounting or billing copy
- Pink: the field, warehouse or department copy
- Goldenrod: a fourth copy for a second department or a permanent file
You can change the order or use other colors, but sticking with the standard sequence helps new staff, because many people already know that white goes to the customer and canary stays in the office. Print the destination at the bottom of each part, for example "Customer copy" or "Office copy," so nobody has to guess. That one line of text prevents most of the mix-ups we hear about.
## What sizes and paper are standard for carbonless forms?
The most common sizes are 8.5 x 11 inches (letter) and 5.5 x 8.5 inches (half letter), with 8.5 x 5.5 inch landscape and 4.25 x 5.5 inch receipt sizes close behind. Carbonless paper comes in three coatings that stack in a set: a coated-back top sheet (CB), coated front and back middle sheets (CFB) and a coated-front bottom sheet (CF). That is why the parts must stay in the order they were printed, since a reversed sheet will not transfer. Most business forms print in one or two ink colors, often black plus a red for numbering or headings. Full-color carbonless forms are possible, but one or two colors keep the cost down and the form easy to read on every part. Leave at least 0.25 inch of margin around the edges so glue, binding and perforations do not cut into fields.
## Should carbonless forms be numbered?
Yes, number any form that represents money, inventory or a legal record, such as invoices, receipts, work orders, repair orders and patient forms. Sequential numbering prints the same number on every part of a set, so the customer copy and the office copy can always be matched, and a missing number points straight to a lost or voided form. Numbers usually print in red in the top right corner, which keeps them easy to find. When you reorder, give the printer the last number you used so the new order continues the sequence without gaps or duplicates. If several locations use the same form, assign each location its own number range, for example 10001 to 20000 for one store and 20001 to 30000 for another. Numbering adds a small cost per set, but it is usually the cheapest internal control a business can buy.
## How should a carbonless form be laid out?
Lay out the form for real handwriting on a clipboard or counter, not for how it looks on a screen. Give each write-in line at least 0.33 inch of height, put the fields people fill in most often near the top and keep signature lines on the top sheet where pressure is firmest. Avoid fine print on the lower parts, since the transferred writing is lighter there and small text competes with it. Shaded boxes work, but keep the shade light so handwriting stays readable on every copy. If the form will be bound into a book or padded at the top, leave extra space on that edge for the binding. Ask for a proof that shows every part, not just the top sheet, since the part labels and colors are where most errors hide. When you are choosing between pads, books and snap-sets, our padded vs booked vs snap-set guide walks through which format fits each use.
## When should you reorder carbonless forms?
Reorder when you reach about one month of remaining supply, based on how many sets you use in a typical month. Specialty bindery such as numbering, booking and padding adds production steps, so carbonless forms take longer to produce than flat printing, and running out on a busy day is the problem to avoid. Keep a simple reorder sheet with the form name, part count, size, quantity per order, last number used and date of the last order. Store unused forms flat in their boxes, away from heat and direct sun, because carbonless coating can lose strength over time and in high temperatures. If you change the layout, mark the old stock clearly so it is used up first or recycled, rather than mixing two versions at the front desk.`,
  },
]

export const guideBySlug = (s: string) => guides.find((g) => g.slug === s)
