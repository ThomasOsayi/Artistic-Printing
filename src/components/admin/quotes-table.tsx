'use client'

import { cn } from '@/lib/utils'
import { StatusBadge } from './status-badge'
import type { Quote } from '@/lib/admin-data'

const filterTabs = ['All', 'New', 'Pending', 'In Progress', 'Approved', 'Completed', 'Declined'] as const

interface QuotesTableProps {
  quotes: Quote[]
  selectedId: string | null
  onSelect: (quote: Quote) => void
  filterStatus: string
  onFilterChange: (status: string) => void
}

export function QuotesTable({ quotes, selectedId, onSelect, filterStatus, onFilterChange }: QuotesTableProps) {
  const filtered = filterStatus === 'All'
    ? quotes
    : quotes.filter((q) => {
        const map: Record<string, string> = {
          'New': 'new',
          'Pending': 'pending',
          'In Progress': 'in-progress',
          'Approved': 'approved',
          'Completed': 'completed',
          'Declined': 'declined',
        }
        return q.status === map[filterStatus]
      })

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-base font-semibold text-slate-900 mb-3">All Quote Requests</h2>
        <div className="flex gap-1 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onFilterChange(tab)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                filterStatus === tab
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto max-h-[520px]">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 sticky top-0">
            <tr className="text-left text-xs text-slate-500 uppercase tracking-wider">
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((quote) => (
              <tr
                key={quote.id}
                onClick={() => onSelect(quote)}
                className={cn(
                  'cursor-pointer transition-colors hover:bg-slate-50',
                  selectedId === quote.id && 'bg-cyan-50 border-l-2 border-l-cyan-500'
                )}
              >
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">{quote.firstName} {quote.lastName}</div>
                  <div className="text-xs text-slate-500">{quote.company}</div>
                </td>
                <td className="px-4 py-3 text-slate-600">{quote.service}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={quote.status} />
                </td>
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                  {new Date(quote.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-400">
                  No quotes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
