'use client'

import { Pencil, Trash2, FileText } from 'lucide-react'
import type { Client } from '@/lib/admin-data'

interface QuoteSummary {
  totalOrders: number
  totalRevenue: number
  lastOrderDate: string | null
}

interface ClientTableProps {
  clients: Client[]
  quoteSummaries: Record<string, QuoteSummary>
  onAddClient: () => void
  onEditClient: (client: Client) => void
  onDeleteClient: (client: Client) => void
  onViewQuotes: (client: Client) => void
}

const industryColors: Record<string, string> = {
  Healthcare: 'bg-emerald-100 text-emerald-700',
  Automotive: 'bg-blue-100 text-blue-700',
  Hospitality: 'bg-amber-100 text-amber-700',
  Education: 'bg-violet-100 text-violet-700',
  Finance: 'bg-slate-100 text-slate-700',
  Media: 'bg-pink-100 text-pink-700',
  Retail: 'bg-orange-100 text-orange-700',
  Other: 'bg-gray-100 text-gray-700',
}

export function ClientTable({ clients, quoteSummaries, onAddClient, onEditClient, onDeleteClient, onViewQuotes }: ClientTableProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Client Directory</h2>
        <button
          onClick={onAddClient}
          className="px-3 py-1.5 text-xs font-medium bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        >
          Add Client
        </button>
      </div>

      {clients.length === 0 ? (
        <div className="py-16 text-center text-slate-400 text-sm">
          No clients yet. Add your first client to get started.
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left text-xs text-slate-500 uppercase tracking-wider">
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Industry</th>
                <th className="px-4 py-3 font-medium">Quotes</th>
                <th className="px-4 py-3 font-medium">Last Quote</th>
                <th className="px-4 py-3 font-medium text-right">Revenue</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clients.map((client) => {
                const initials = client.name.split(' ').map(w => w[0]).join('').slice(0, 2)
                const colorClass = industryColors[client.industry] || 'bg-slate-100 text-slate-700'
                const summary = quoteSummaries[client.name] || { totalOrders: 0, totalRevenue: 0, lastOrderDate: null }

                return (
                  <tr key={client.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                          {initials}
                        </div>
                        <div>
                          <span className="font-medium text-slate-900 block">{client.name}</span>
                          {client.contactEmail && (
                            <span className="text-xs text-slate-400">{client.contactEmail}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
                        {client.industry}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{summary.totalOrders}</td>
                    <td className="px-4 py-3 text-slate-500">
                      {summary.lastOrderDate
                        ? new Date(summary.lastOrderDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        : '—'}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">
                      {summary.totalRevenue > 0 ? `$${summary.totalRevenue.toLocaleString()}` : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => onViewQuotes(client)}
                          className="p-1.5 rounded-md hover:bg-cyan-50 text-slate-400 hover:text-cyan-600 transition-colors"
                          title="View quotes"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onEditClient(client)}
                          className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                          title="Edit client"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteClient(client)}
                          className="p-1.5 rounded-md hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                          title="Delete client"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}