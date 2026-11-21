# SEO and AI-search log: Artistic Printing Co.

Running log for the scheduled SEO program (Tue/Thu/Sat). Read before each run so topics and primary keywords are never repeated.

## Keyword map (one primary keyword per URL; do not reuse)

| URL | Primary keyword / intent |
|---|---|
| /guides/ncr-carbonless-forms-how-many-parts | carbonless forms: how many parts (2 vs 3 vs 4 part) |
| /guides/laminated-vs-synthetic-vs-paper-restaurant-menus | restaurant menu printing / laminated vs synthetic menus (comparison) |
| /guides/vinyl-vs-mesh-banners-school-fences-sports-fields | school sports / fence banners, mesh vs 13 oz vinyl (comparison) |
| /guides/matte-vs-gloss-vs-soft-touch-business-cards | soft-touch vs matte vs gloss business cards (comparison) |
| /guides/dental-office-printed-forms-checklist | dental office forms printing checklist |
| /guides/digital-vs-offset-printing-which-to-choose | digital vs offset printing (comparison) |
| /guides/coroplast-vs-foam-board-vs-pvc-vs-aluminum-signs | coroplast vs foam board vs PVC vs aluminum signs (comparison) |
| /guides/car-dealership-printing-checklist | printing for dealerships / dealership print checklist (addendum stickers, ROs, deal jackets) |
| /guides/school-event-program-booklet-printing-guide | school event / graduation program printing (booklet sizes, page counts) |
| /guides/padded-vs-booked-vs-snap-set-carbonless-forms | padded vs booked vs snap-set carbonless forms (comparison; form formats) |
| /guides/hipaa-print-vendor-business-associate-agreement | HIPAA compliant printing / print vendor BAA (PHI vs no-PHI jobs) |
| /guides/statement-printing-and-mailing-how-it-works | statement printing and mailing (process, remittance stub, #10 double-window, CASS/NCOA/presort) |
| /guides/16pt-vs-18pt-vs-22pt-vs-32pt-business-cards | business card thickness, 16 vs 18 vs 22 vs 32 pt (comparison) |
| Landing pages (Firestore) | healthcare, hospitality, education, automotive printing LA; banner, large format, business card, brochure, flyer printing LA |

## AI visibility panel (created on first Thursday run)

Fixed panel (created 2026-11-19). Run 5 per Thursday, alternating set A and set B so all 10 are covered every 2 weeks. Engines: Perplexity (logged out), Bing, Google (AI Overview).
- Set A: (1) commercial printer in Los Angeles (2) where to print NCR forms in Los Angeles (3) dental office printing Los Angeles (4) same week business card printing Los Angeles (5) banner printing near Mid-City Los Angeles
- Set B: (6) restaurant menu printing Los Angeles (7) printing for car dealerships Los Angeles (8) school banner printing Los Angeles (9) medical forms printing Los Angeles (10) print shop near Pico Boulevard Los Angeles
Next Thursday (2026-11-26): set B.

---

## 2026-11-17 (Tue)

**Search Console** (property https://www.artisticprinting.com/ URL-prefix; sc-domain property is not accessible to thomasosayi@gmail.com), last 28 days (Oct 19 to Nov 15):
- Clicks 12, impressions 1.3K, CTR 0.9%, avg position 50.5 (3 months: 39 clicks, 3.89K impressions)
- Generative AI report: 39 AI feature impressions in 28 days. By page: / 21, /healthcare 7, /education 3, /hospitality 3, /automotive 2, /brochure 2, /contact 2, /about 1
- Top pages by impressions: /education 445 (pos 69.5), / 313 (31.3), /hospitality 183 (50.1), /about 181 (7.7), /healthcare 173 (74.5), /contact 101 (9.3), /portfolio 58, /services 46, /automotive 43 (36.5), /banner 17 (10.5), /business-card 10 (16.2), /brochure 6, /large-format 4, /flyer 4
- Opportunity queries (pos 5-25): "school and sporting events vinyl banner printing los angeles" (12 imp, pos 12.1), "printing for dealerships" (9, 11.9), "restaurant menus printing los angeles" (7, 18.9) and "restaurant menus printing la" (3, 12.3), "laminated card printing los angeles" (5, 21.2), "educational print fulfillment los angeles ca" (7, 21.7), "soft touch business cards los angeles" (1, 12.0), "los angeles printing company" (4, 20.5), "arts district printing co" (13, 24.5)
- Big head terms still far back: "printing for education" 269 imp pos 81, "healthcare printing services" 59 pos 84, "hospitality printing solutions" 60 pos 55, "commercial printing los angeles" 21 pos 34
- Noise: "rtistic printing llc 174 warwick rd elmont ny" (89 imp, different business)
- Indexing: 13 indexed, 2 not indexed (404: /profile/juneaumorangt/profile, an old spam URL, correct as 404; 1 crawled - currently not indexed)
- Sitemap /sitemap.xml: Success, last read Jul 19, 2026, 14 discovered. Not resubmitted (no error).
- Vercel Web Analytics: API returned "Web Analytics not found" for project artistic-printing, so no visitor numbers this run.

**Guides published** (all 2026-11-17):
- Laminated vs synthetic vs paper menus: which should a restaurant print? (comparison; restaurant menu printing)
- 13 oz vinyl vs mesh banners: which works on a school fence or sports field? (comparison; school sports banners)
- Matte vs gloss vs soft-touch business cards: which finish should you choose? (comparison; soft-touch business cards)
- Which printed forms does a dental office need? (dental office forms checklist)

**Refreshed:** none. Only existing guide (NCR forms) was published 2026-11-17, so nothing is older than 30 days.

**Plumbing:** added optional `updated` to `Guide` (Article dateModified, OpenGraph modifiedTime, sitemap lastModified, "Updated" line on guide page). Added /llms.txt route (business summary, main pages, landing pages, every guide generated from guides.ts). robots.txt allows all user agents (no AI crawler blocked).

**Proposed landing-page updates:** none (Saturday task).

**Mention action suggested:** claim/verify Bing Places for Business (https://www.bingplaces.com), import from Google Business Profile.

**Deploy and indexing:** commit 77c844e deployed; all 4 new guides, /guides, /llms.txt, /robots.txt and /sitemap.xml return 200 and the sitemap lists all 5 guides. Requested indexing in URL Inspection for the 4 new guides and /guides (/guides and the new guides were "URL is unknown to Google" before the request).

---

## 2026-11-19 (Thu)

**Search Console** (https://www.artisticprinting.com/ URL-prefix), last 28 days (Oct 21 to Nov 17):
- Clicks 12 (=), impressions 1.29K (1.3K last run), CTR 0.9% (=), avg position 49.4 (50.5 last run, slightly better)
- Generative AI report: 38 AI feature impressions in 28 days (39 last run). By page: / 21, /healthcare 7, /hospitality 3, /contact 2, /education 2, /guides/laminated-vs-synthetic-vs-paper-restaurant-menus 2 (first guide with AI feature impressions), /about 1, /automotive 1, /brochure 1
- Top pages: /education 440 imp (pos 69.5), / 298 (29.5, 10 clicks), /about 201 (7.8), /hospitality 181 (50.4), /healthcare 169 (73.4), /contact 105 (8.4), /portfolio 59 (6.9), /services 47 (6.0), /automotive 38 (35.7), /banner 17 (10.5), /business-card 9 (15.0), /brochure 6, /large-format 5, /flyer 3, /guides/laminated-vs-synthetic-vs-paper-restaurant-menus 2 (pos 1.0)
- Opportunity queries unchanged from Tue: "printing for dealerships" (9 imp, pos 11.9) -> targeted with dealership checklist guide; "school event programs printing" (5, pos 69) -> program guide; "school and sporting events vinyl banner printing los angeles" (12, 12.1); "restaurant menus printing los angeles" (7, 18.9); "laminated card printing los angeles" (5, 21.2); "food and restaurant vinyl banner printing los angeles" (2, 6.5)
- Indexing: 13 indexed, 2 not indexed (same 404 spam URL and 1 crawled-not-indexed). Sitemap: Success, 14 discovered, last read Jul 19 2026 (Google has not re-read it; guides found via URL inspection requests). Not resubmitted (no error).
- Vercel Web Analytics: API still returns "Web Analytics not found" for artistic-printing, no visitor numbers.

**Guides published** (2026-11-19):
- Digital vs offset printing: which is right for your print job? (comparison; digital vs offset printing)
- Coroplast vs foam board vs PVC vs aluminum signs: which should you choose? (comparison; rigid sign materials)
- What does a car dealership need printed? A checklist for sales, F&I and service (printing for dealerships)
- How do you print a school event or graduation program? Sizes, page counts and paper (school event program printing)
- Cross-links: dealership guide -> NCR forms guide; program guide -> vinyl vs mesh banner guide (related links).

**Refreshed:** none. All existing guides were published 2026-11-17 (2 days old); refresh rule needs 30+ days. Note for Saturday pass: NCR guide (oldest format) has sections under 50 words and no question H2s; bring it up to the AI citation rules then.

**AI visibility (set A):**
- Google: (1) commercial printer in LA: no AI Overview, not listed (sites: walkingmaninc, smartpress, labusprinting, mmpbeverlywood, goldimageprinting, supercopyinla, yelp, indieprinting, guruprinters, dprintla, couriergraphics, clutch). (2) NCR forms LA: AI Overview present, not cited (cites minuteman, platinumprintusa, carbonlessncrforms, lapressprinting, guruprinters, laprintcenter, 4over; local pack shows "Their website mentions printed ncr forms"). (3) dental office printing LA: AI Overview present and CITES Artistic Printing (/guides/dental-office-printed-forms-checklist) as a resource for intake and consent forms; other sources quixprint, sprintray, printingfly, dprintla, imagesquareprinting, indieprinting. (4) same week business cards LA: no AI Overview, not listed (rushmyprints, platinumprintusa, printingfly, guruprinters, yelp, indieprinting, laprintcenter, samedayprinting sites). (5) banner printing Mid-City: AI Overview present, not cited (losangelesbanner, mmpbeverlywood, printd, cybercopyusa, yelp, signs.com, losangelesbannerprinting).
- Bing (organic, no Copilot answer shown): not listed for any of the 5; top results yelp, laprintcenter, promedia.la, imagesquareprinting, indieprinting, printingfly, losangelesbannerprinting.
- Perplexity: q1 answered without sign-in, not cited (cited indieprinting, local.yahoo.com listings, expertise.com); q2 onward required sign-in, stopped (not bypassed).
- Mention opportunities: Yelp (appears for 3 of 5 Google queries and Bing), Yahoo Local (Perplexity source, fed by Yelp), expertise.com best-of lists, clutch.co.

**Mention action suggested:** claim/complete the Yelp business page at https://biz.yelp.com (services: NCR forms, dental/medical forms, banners; photos of the shop and finished jobs).

**Deploy and indexing:** commit 6f0912d deployed; all 4 new guides, /guides, /llms.txt, /robots.txt and /sitemap.xml return 200; sitemap and llms.txt list all 9 guides; robots allows all user agents. Requested indexing in URL Inspection for the 4 new guides (all were "URL is unknown to Google") and /guides (already indexed).

---

## 2026-11-21 (Sat)

**Search Console** (https://www.artisticprinting.com/ URL-prefix), last 28 days (Oct 23 to Nov 19):
- Clicks 16 (12 last run), impressions 1.44K (1.29K), CTR 1.1% (0.9%), avg position 44.6 (49.4)
- Generative AI report: 75 AI feature impressions in 28 days (38 last run). By page: / 20, /guides/laminated-vs-synthetic-vs-paper-restaurant-menus 18, /healthcare 8, /guides/school-event-program-booklet-printing-guide 6, /guides/matte-vs-gloss-vs-soft-touch-business-cards 5, /contact 4, /hospitality 4, /education 3, /guides/vinyl-vs-mesh-banners-school-fences-sports-fields 3, /about 1
- Pages: / 305 imp (12 clicks, pos 27.6), /education 440 (68.7), /about 238 (7.7, 0.4% CTR; mostly brand and the unrelated Elmont NY "rtistic printing" query), /hospitality 177 (49.3), /healthcare 173 (71.6, 1 click), /contact 112 (8.2, 2 clicks), /portfolio 62, /services 51, guides: menus 44 imp pos 6.0 (FIRST GUIDE CLICK), matte/gloss 29 (17.7), program 12 (3.8), dental 11 (17.3), vinyl/mesh 8 (10.5), digital/offset 6 (6.2), sign materials 4 (36.5), dealership 2 (1.5), /guides 2; /banner 18 (10.8), /business-card 9 (15.0), /brochure 6 (7.7), /large-format 5 (8.4), /flyer 3 (6.0)
- New query signals: "custom napkin printing los angeles" 8 (61), "automotive statement printing services" 6 (47.8) -> statement guide, "hipaa compliant printing company" (77), "medical forms printing" (65) -> HIPAA guide, "what paper eliminates lamination for restaurant menus" (7), "how much does durable menu paper cost compared to lamination" (10), "is coroplast waterproof" (37), "what is coroplast signs" (99), "how to choose the right business card finish" (pos 3.0), "matte or glossy business cards" 3 (56)
- Indexing (report dated 11/15): 13 indexed, 5 not indexed: 1 x 404 (old spam URL, correct), 4 x "Crawled - currently not indexed" = menus, matte/gloss and vinyl/mesh guides (crawled Nov 17) + /favicon.ico. They already earn impressions, so likely a lagging report; internal links added between guides this run.
- Sitemap: Success, 14 discovered, last read Jul 19 2026 (still not re-read). Not resubmitted (no error).
- Vercel Web Analytics: not checked this run (API returned "not found" on the previous two runs).

**Guides published** (2026-11-21):
- Padded vs booked vs snap-set carbonless forms: which format should you order? (comparison)
- Does your print vendor need a HIPAA business associate agreement? (HIPAA compliant printing)
- How does statement printing and mailing work? (statement printing and mailing)
- 16 pt vs 18 pt vs 22 pt vs 32 pt business cards: how thick should your card be? (comparison; uses the stocks listed on the live business card page)

**Refreshed / Saturday guide pass:** no guide is older than 30 days, so no freshness refresh. Saturday pass: rewrote the NCR guide to the AI citation rules (question H2s, 6 sections of ~130-170 words, new sections on standard sizes and CB/CFB/CF paper, numbering ranges per location, layout specs, reorder and storage; 5 FAQs), set updated 2026-11-21. Internal links added: NCR -> formats guide, dental checklist -> HIPAA guide, dealership checklist -> statement guide, matte/gloss -> thickness guide, statement <-> HIPAA. Matte/gloss keyword "16 pt business cards" swapped to "best finish for business cards" so it does not compete with the thickness guide.

**Proposed landing-page updates (batch "SEO meta 2026-11-21" in src/lib/page-content-updates.ts, apply at /admin/content-update):**
- service-banner-printing-los-angeles: title "Vinyl & Mesh Banner Printing in Los Angeles"; description "Custom 13 oz vinyl, mesh and retractable banners printed in Los Angeles for schools, sports fields, restaurants and events. Grommets included, free LA delivery."
- service-business-card-printing-los-angeles: title "Business Card Printing in LA: Matte, Gloss, Soft-Touch"; description "Business cards printed in Los Angeles on 16pt to 32pt stock with matte, gloss, soft-touch, spot UV or foil finishes. Proofs you approve and free LA delivery."
- (The July founding-year healthcare entry is still in the array; re-applying it is harmless.)

**Technical:** robots.txt 200, allows all user agents (no AI crawler blocked); llms.txt 200 (guide list generated from guides.ts).

**Mention action suggested:** claim Apple Business Connect (https://businessconnect.apple.com) for Apple Maps and Siri, using the same name, address, phone and hours as Google.
