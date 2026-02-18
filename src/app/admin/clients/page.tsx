'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Users, Repeat, TrendingUp, CheckCircle, Loader2 } from 'lucide-react'
import { StatsCards, type StatCard } from '@/components/admin/stats-cards'
import { ClientTable } from '@/components/admin/client-table'
import { ClientModal } from '@/components/admin/client-modal'
import type { Client, Quote } from '@/lib/admin-data'
import { useAdminSearch } from '@/lib/admin-search-context'

export default function ClientsPage() {
  const { searchValue } = useAdminSearch()
  const [clients, setClients] = useState<Client[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<string | null>(null)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<Client | null>(null)

  // Listen to clients collection
  useEffect(() => {
    const q = query(collection(db, 'clients'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => {
        const d = docSnap.data()
        return {
          id: docSnap.id,
          name: d.name || '',
          industry: d.industry || '',
          contactEmail: d.contactEmail || '',
          contactPhone: d.contactPhone || '',
          notes: d.notes || '',
          createdAt: d.createdAt?.toDate?.()?.toISOString() || '',
        } as Client
      })
      setClients(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Listen to quotes for revenue/order summaries
  useEffect(() => {
    const q = query(collection(db, 'quotes'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => {
        const d = docSnap.data()
        return {
          id: docSnap.id,
          firstName: d.firstName || '',
          lastName: d.lastName || '',
          company: d.company || '',
          email: d.email || '',
          phone: d.phone || '',
          industry: d.industry || '',
          service: d.service || d.message || '',
          status: d.status || 'new',
          date: d.createdAt?.toDate?.()?.toISOString() || '',
          message: d.message || '',
          quantity: d.quantity || '',
          urgency: d.urgency || 'Standard',
          finalPrice: d.finalPrice,
          estimatedPrice: d.estimatedPrice,
        } as Quote
      })
      setQuotes(data)
    })

    return () => unsubscribe()
  }, [])

  // Build per-client summaries from quotes
  const quoteSummaries = useMemo(() => {
    const summaries: Record<string, { totalOrders: number; totalRevenue: number; lastOrderDate: string | null }> = {}

    quotes.forEach((q) => {
      const company = q.company?.trim()
      if (!company) return

      if (!summaries[company]) {
        summaries[company] = { totalOrders: 0, totalRevenue: 0, lastOrderDate: null }
      }

      summaries[company].totalOrders += 1

      if (q.finalPrice) {
        summaries[company].totalRevenue += q.finalPrice
      }

      if (q.date && (!summaries[company].lastOrderDate || q.date > summaries[company].lastOrderDate)) {
        summaries[company].lastOrderDate = q.date
      }
    })

    return summaries
  }, [quotes])

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  // Add or edit client
  const handleSaveClient = useCallback(async (data: Omit<Client, 'id' | 'createdAt'>) => {
    try {
      if (editingClient) {
        await updateDoc(doc(db, 'clients', editingClient.id), {
          ...data,
          updatedAt: serverTimestamp(),
        })
        showToast(`${data.name} updated successfully`)
      } else {
        await addDoc(collection(db, 'clients'), {
          ...data,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        })
        showToast(`${data.name} added successfully`)
      }
      setModalOpen(false)
      setEditingClient(null)
    } catch (err) {
      console.error('Failed to save client:', err)
      showToast('Failed to save client. Please try again.')
    }
  }, [editingClient, showToast])

  // Delete client
  const handleConfirmDelete = useCallback(async () => {
    if (!deleteTarget) return
    try {
      await deleteDoc(doc(db, 'clients', deleteTarget.id))
      showToast(`${deleteTarget.name} removed`)
      setDeleteTarget(null)
    } catch (err) {
      console.error('Failed to delete client:', err)
      showToast('Failed to delete client. Please try again.')
    }
  }, [deleteTarget, showToast])

  const handleViewQuotes = useCallback((client: Client) => {
    // Navigate to quotes page filtered by this client's company name
    window.location.href = `/admin/quotes?search=${encodeURIComponent(client.name)}`
  }, [])

  // Stats
  const totalClients = clients.length
  const repeatClients = Object.values(quoteSummaries).filter((s) => s.totalOrders > 1).length
  const totalRevenue = Object.values(quoteSummaries).reduce((sum, s) => sum + s.totalRevenue, 0)
  const totalOrders = Object.values(quoteSummaries).reduce((sum, s) => sum + s.totalOrders, 0)
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0

  const stats: StatCard[] = [
    { label: 'Total Clients', value: totalClients, change: `${totalClients} registered`, icon: Users, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50' },
    { label: 'Repeat Clients', value: repeatClients, change: totalClients > 0 ? `${Math.round((repeatClients / totalClients) * 100)}% retention` : '—', icon: Repeat, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
    { label: 'Avg. Order Value', value: `$${avgOrderValue.toLocaleString()}`, change: 'From completed quotes', icon: TrendingUp, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
        <span className="ml-2 text-slate-500 text-sm">Loading clients...</span>
      </div>
    )
  }

  return (
    <>
      <StatsCards stats={stats} />

      <div className="mt-6">
        <ClientTable
          clients={clients}
          quoteSummaries={quoteSummaries}
          searchValue={searchValue}
          onAddClient={() => { setEditingClient(null); setModalOpen(true) }}
          onEditClient={(client) => { setEditingClient(client); setModalOpen(true) }}
          onDeleteClient={(client) => setDeleteTarget(client)}
          onViewQuotes={handleViewQuotes}
        />
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <ClientModal
          client={editingClient}
          quotes={quotes}
          existingClientNames={clients.map((c) => c.name)}
          onClose={() => { setModalOpen(false); setEditingClient(null) }}
          onSave={handleSaveClient}
        />
      )}

      {/* Delete Confirmation */}
      {deleteTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-white rounded-xl w-full max-w-sm mx-4 p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Delete Client</h3>
            <p className="text-sm text-slate-500 mb-6">
              Are you sure you want to remove <strong>{deleteTarget.name}</strong> from the directory? This won&apos;t delete their existing quotes.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

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
