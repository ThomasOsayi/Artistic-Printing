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
