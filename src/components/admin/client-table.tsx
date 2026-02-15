'use client'

import type { Client } from '@/lib/admin-data'

interface ClientTableProps {
  clients: Client[]
  onAddClient: () => void
}

const industryColors: Record<string, string> = {
  Healthcare: 'bg-emerald-100 text-emerald-700',
  Automotive: 'bg-blue-100 text-blue-700',
  Hospitality: 'bg-amber-100 text-amber-700',
  Education: 'bg-violet-100 text-violet-700',
  Finance: 'bg-slate-100 text-slate-700',
  Media: 'bg-pink-100 text-pink-700',
}

export function ClientTable({ clients, onAddClient }: ClientTableProps) {
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

      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-xs text-slate-500 uppercase tracking-wider">
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Industry</th>
              <th className="px-4 py-3 font-medium">Total Orders</th>
              <th className="px-4 py-3 font-medium">Last Order</th>
              <th className="px-4 py-3 font-medium text-right">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => {
              const initials = client.name.split(' ').map(w => w[0]).join('').slice(0, 2)
              const colorClass = industryColors[client.industry] || 'bg-slate-100 text-slate-700'

              return (
                <tr key={client.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                        {initials}
                      </div>
                      <span className="font-medium text-slate-900">{client.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
                      {client.industry}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{client.totalOrders}</td>
                  <td className="px-4 py-3 text-slate-500">
                    {new Date(client.lastOrderDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600">
                    ${client.totalRevenue.toLocaleString()}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
