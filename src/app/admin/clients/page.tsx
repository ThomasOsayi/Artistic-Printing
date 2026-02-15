'use client'

import { useState, useCallback } from 'react'
import { Users, Repeat, TrendingUp, CheckCircle } from 'lucide-react'
import { StatsCards, type StatCard } from '@/components/admin/stats-cards'
import { ClientTable } from '@/components/admin/client-table'
import { mockClients } from '@/lib/admin-data'

export default function ClientsPage() {
  const [clients] = useState(mockClients)
  const [toast, setToast] = useState<string | null>(null)

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  const totalClients = clients.length
  const repeatClients = clients.filter((c) => c.totalOrders > 1).length
  const totalRevenue = clients.reduce((sum, c) => sum + c.totalRevenue, 0)
  const totalOrders = clients.reduce((sum, c) => sum + c.totalOrders, 0)
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0

  const stats: StatCard[] = [
    { label: 'Total Clients', value: totalClients, change: '+2 this month', icon: Users, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50' },
    { label: 'Repeat Clients', value: repeatClients, change: `${Math.round((repeatClients / totalClients) * 100)}% retention`, icon: Repeat, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
    { label: 'Avg. Order Value', value: `$${avgOrderValue.toLocaleString()}`, change: 'All time', icon: TrendingUp, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  ]

  return (
    <>
      <StatsCards stats={stats} />

      <div className="mt-6">
        <ClientTable
          clients={clients}
          onAddClient={() => showToast('Coming soon')}
        />
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[70] bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm animate-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          {toast}
        </div>
      )}
    </>
  )
}
