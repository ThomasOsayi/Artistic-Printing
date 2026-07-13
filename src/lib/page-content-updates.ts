import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { PageContent } from './admin-data'

/**
 * Explicit, one-off content updates for docs that ALREADY EXIST in Firestore.
 *
 * Why this exists separately from page-content-seed.ts:
 * `seedPageContent()` is idempotent — it deliberately SKIPS any doc that
 * already exists, so admin edits are never clobbered on admin mount.
 * That means it cannot be used to push changes to live docs.
 *
 * This module is the opposite: a deliberate, manually-triggered overwrite
 * of specific fields on specific docs. Run from /admin/content-update.
 *
 * To use for a future batch: replace the CONTENT_UPDATES array, run it once,
 * then either empty the array or leave it (re-running is harmless — it just
 * rewrites the same values).
 */

// Any subset of PageContent fields, keyed by doc ID.
type FieldUpdates = Partial<Omit<PageContent, 'id'>>

export interface ContentUpdate {
  id: string
  label: string // human-readable, for the UI log
  fields: FieldUpdates
}

// ─── Batch: SEO metadata rewrite (July 2026) ──────────────────────────
// Rationale: pages ranked but earned zero clicks. Titles now lead with the
// target keyword + location; descriptions lead with a differentiator.
export const CONTENT_UPDATES: ContentUpdate[] = [
  {
    id: 'industry-healthcare-printing-los-angeles',
    label: 'Healthcare',
    fields: {
      metaTitle: 'Healthcare & Medical Printing Los Angeles | HIPAA-Aware Forms',
      metaDescription:
        'HIPAA-aware printing for LA hospitals, hospices, home health, and clinics. Patient intake forms, NCR carbonless, consent forms, folders. Free local pickup and delivery.',
    },
  },
  {
    id: 'industry-hospitality-printing-los-angeles',
    label: 'Hospitality',
    fields: {
      // Leads with "Restaurant Menu Printing" — a term people actually
      // search — rather than "Hospitality Printing", which they don't.
      metaTitle: 'Restaurant Menu Printing Los Angeles | Hospitality Print',
      metaDescription:
        'Menus, table tents, takeout packaging, and signage for LA restaurants, cafes, and hotels. Laminated and full-color options. Fast turnaround, free local delivery.',
    },
  },
  {
    id: 'industry-automotive-printing-los-angeles',
    label: 'Automotive',
    fields: {
      metaTitle: 'Automotive Printing Los Angeles | Dealer Forms & Statements',
      metaDescription:
        'Print for LA auto dealerships: service forms, NCR carbonless, statements, brochures, and showroom signage. Free pickup and delivery across Los Angeles.',
    },
  },
  {
    id: 'industry-education-printing-los-angeles',
    label: 'Education',
    fields: {
      metaTitle: 'Education Printing Los Angeles | Schools & Universities',
      metaDescription:
        'Printing for LA schools, colleges, and training programs. Course catalogs, student handbooks, forms, brochures, and folders. Bulk pricing, free local delivery.',
    },
  },
]

export interface UpdateResult {
  id: string
  label: string
  status: 'updated' | 'missing' | 'error'
  message?: string
}

/**
 * Applies CONTENT_UPDATES to Firestore.
 * Requires an authenticated user (pageContent write rule = request.auth != null).
 * Skips docs that don't exist rather than creating them — this is an update
 * tool, not a seeder, and silently creating a half-formed doc would be worse
 * than failing loudly.
 */
export async function applyContentUpdates(
  updates: ContentUpdate[] = CONTENT_UPDATES,
): Promise<UpdateResult[]> {
  const results: UpdateResult[] = []

  for (const update of updates) {
    try {
      const ref = doc(db, 'pageContent', update.id)
      const snap = await getDoc(ref)

      if (!snap.exists()) {
        results.push({
          id: update.id,
          label: update.label,
          status: 'missing',
          message: 'Doc not found in Firestore',
        })
        continue
      }

      await updateDoc(ref, {
        ...update.fields,
        updatedAt: serverTimestamp(),
      })

      results.push({
        id: update.id,
        label: update.label,
        status: 'updated',
        message: Object.keys(update.fields).join(', '),
      })
    } catch (err) {
      results.push({
        id: update.id,
        label: update.label,
        status: 'error',
        message: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return results
}