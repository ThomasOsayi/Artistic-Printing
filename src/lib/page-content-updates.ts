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

// ─── Batch: founding-year correction (July 2026) ──────────────────────
export const CONTENT_UPDATES: ContentUpdate[] = [
  {
    id: 'industry-healthcare-printing-los-angeles',
    label: 'Healthcare',
    fields: {
      sections: {
        complianceSubtitle:
          "We've spent 30+ years adapting our shop to the specific needs of LA-area medical providers.",
      },
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

      // Firestore replaces a map when its parent key is updated. Convert
      // sparse section changes to dot-path fields so other section copy stays.
      const firestoreFields: Record<string, unknown> = { ...update.fields }
      if (update.fields.sections) {
        delete firestoreFields.sections
        for (const [key, value] of Object.entries(update.fields.sections)) {
          firestoreFields[`sections.${key}`] = value
        }
      }

      await updateDoc(ref, {
        ...firestoreFields,
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