'use client'

import { useState } from 'react'
import { CONTENT_UPDATES, applyContentUpdates, type UpdateResult } from '@/lib/page-content-updates'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, XCircle, Loader2, Database } from 'lucide-react'

export default function ContentUpdatePage() {
  const [running, setRunning] = useState(false)
  const [results, setResults] = useState<UpdateResult[] | null>(null)

  async function handleRun() {
    setRunning(true)
    setResults(null)
    try {
      const res = await applyContentUpdates()
      setResults(res)
    } catch (err) {
      setResults([
        {
          id: 'batch',
          label: 'Batch failed',
          status: 'error',
          message: err instanceof Error ? err.message : String(err),
        },
      ])
    } finally {
      setRunning(false)
    }
  }

  const updatedCount = results?.filter((r) => r.status === 'updated').length ?? 0
  const failedCount = results ? results.length - updatedCount : 0

  return (
    <div className="max-w-3xl">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5 text-cyan-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-slate-900">Page Content Update</h1>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              Applies the update batch defined in{' '}
              <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">page-content-updates.ts</code>{' '}
              to existing Firestore <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">pageContent</code> docs.
              Only the listed fields are overwritten. All other page content is left untouched.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Pending in this batch ({CONTENT_UPDATES.length})
          </div>
          <div className="space-y-2">
            {CONTENT_UPDATES.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">{u.label}</div>
                  <div className="text-xs text-slate-500 truncate font-mono">{u.id}</div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end shrink-0">
                  {Object.keys(u.fields).map((f) => (
                    <Badge key={f} className="bg-slate-200 text-slate-700 text-xs font-normal">
                      {f}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={handleRun}
            disabled={running || CONTENT_UPDATES.length === 0}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold h-11 px-6"
          >
            {running ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating...
              </>
            ) : (
              <>Run update batch</>
            )}
          </Button>
        </div>
      </div>

      {results && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-bold text-slate-900">Results</h2>
            <Badge
              className={
                failedCount === 0
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }
            >
              {updatedCount} updated{failedCount > 0 ? `, ${failedCount} failed` : ''}
            </Badge>
          </div>

          <div className="space-y-2">
            {results.map((r) => {
              const Icon =
                r.status === 'updated'
                  ? CheckCircle2
                  : r.status === 'missing'
                    ? AlertCircle
                    : XCircle
              const color =
                r.status === 'updated'
                  ? 'text-emerald-600'
                  : r.status === 'missing'
                    ? 'text-amber-600'
                    : 'text-red-600'

              return (
                <div
                  key={r.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{r.label}</div>
                    <div className="text-xs text-slate-500 font-mono truncate">{r.id}</div>
                    {r.message && (
                      <div className="text-xs text-slate-600 mt-1">{r.message}</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {updatedCount > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
              Pages revalidate hourly (ISR), so the new titles go live within about 60 minutes,
              or immediately on the next Vercel deploy. After that, request indexing on each URL
              in Search Console so Google recrawls and picks up the new snippets.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
