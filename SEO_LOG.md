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
| Landing pages (Firestore) | healthcare, hospitality, education, automotive printing LA; banner, large format, business card, brochure, flyer printing LA |

## AI visibility panel (created on first Thursday run)

Not created yet. First Thursday run: create a fixed panel of 10 questions and rotate 5 per run.

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
