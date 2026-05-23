import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { PageContent } from './admin-data'

// ─── Phase 1+ will populate this array ──────────────────────────────────
// Each entry seeds one Firestore doc in the `pageContent` collection,
// keyed by `id` (format: `{type}-{slug}`).
//
// Adding new entries is incremental — `seedPageContent()` only creates
// docs that don't already exist, so admin edits and prior seeds are
// preserved across phases.
//
// To add a page:
//   1. Add a new entry below (id, type, slug, published, copy, etc.)
//   2. Create the matching route file under src/app/(main)/
//   3. Ensure `seedPageContent()` runs (wired in the admin layout when
//      Phase 1 ships)
export const SEED_PAGES: Omit<PageContent, 'createdAt' | 'updatedAt'>[] = [
  // Phase 1: industry pages (healthcare, hospitality, automotive, education)
  // Phase 2–3: service pages
  // Phase 4: neighborhood pages
]

/**
 * Idempotent seeder for the `pageContent` collection.
 *
 * For each entry in SEED_PAGES, checks if a doc with that ID already
 * exists. If yes, leaves it alone (preserves admin edits and prior seeds).
 * If no, creates it with serverTimestamp() for createdAt and updatedAt.
 *
 * Safe to call repeatedly. Safe to call before the collection exists.
 * No-op when SEED_PAGES is empty (Phase 0 default).
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
    })
  )
}