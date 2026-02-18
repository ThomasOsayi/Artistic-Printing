'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { db, storage } from '@/lib/firebase'
import {
  Image as ImageIcon,
  Star,
  EyeOff,
  Eye,
  Pencil,
  Trash2,
  Plus,
  GripVertical,
  Loader2,
  CheckCircle,
  Users,
  LayoutGrid,
} from 'lucide-react'
import { StatsCards, type StatCard } from '@/components/admin/stats-cards'
import { PortfolioModal } from '@/components/admin/portfolio-modal'
import type { PortfolioItem, Client } from '@/lib/admin-data'
import { useAdminSearch } from '@/lib/admin-search-context'

const industryColors: Record<string, string> = {
  Healthcare: 'bg-cyan-100 text-cyan-700',
  Automotive: 'bg-purple-100 text-purple-700',
  Hospitality: 'bg-amber-100 text-amber-700',
  Education: 'bg-blue-100 text-blue-700',
  Finance: 'bg-green-100 text-green-700',
  Media: 'bg-red-100 text-red-700',
  Retail: 'bg-pink-100 text-pink-700',
  Other: 'bg-slate-100 text-slate-700',
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<string | null>(null)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null)

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<PortfolioItem | null>(null)

  // Filter & search
  const { searchValue } = useAdminSearch()
  const [activeFilter, setActiveFilter] = useState('all')

  // ─── Real-time Firestore listener ───
  useEffect(() => {
    const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => {
        const d = docSnap.data()
        return {
          id: docSnap.id,
          client: d.client || '',
          industry: d.industry || '',
          type: d.type || '',
          description: d.description || '',
          imageUrl: d.imageUrl || '',
          imagePath: d.imagePath || '',
          featured: d.featured ?? false,
          visible: d.visible ?? true,
          order: d.order ?? 999,
          createdAt: d.createdAt?.toDate?.()?.toISOString() || '',
          updatedAt: d.updatedAt?.toDate?.()?.toISOString() || '',
        } as PortfolioItem
      })
      setItems(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const [clients, setClients] = useState<Client[]>([])

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
    })
    return () => unsubscribe()
  }, [])

  // ─── Filtered items ───
  const filteredItems = useMemo(() => {
    let result = items
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.industry === activeFilter)
    }
    if (searchValue.trim()) {
      const s = searchValue.toLowerCase()
      result = result.filter(
        (p) =>
          p.client.toLowerCase().includes(s) ||
          p.type.toLowerCase().includes(s) ||
          p.industry.toLowerCase().includes(s)
      )
    }
    return result
  }, [items, activeFilter, searchValue])

  // ─── Industry tabs ───
  const industryTabs = useMemo(() => {
    const counts: Record<string, number> = {}
    items.forEach((p) => {
      counts[p.industry] = (counts[p.industry] || 0) + 1
    })
    const tabs = [{ id: 'all', label: 'All', count: items.length }]
    Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([ind, count]) => {
        tabs.push({ id: ind, label: ind, count })
      })
    return tabs
  }, [items])

  // ─── Stats ───
  const visibleCount = items.filter((p) => p.visible).length
  const uniqueIndustries = new Set(items.filter((p) => p.visible).map((p) => p.industry)).size
  const featuredCount = items.filter((p) => p.featured && p.visible).length
  const hiddenCount = items.filter((p) => !p.visible).length

  const stats: StatCard[] = [
    {
      label: 'Total Projects',
      value: visibleCount,
      change: 'Live on site',
      icon: ImageIcon,
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50',
    },
    {
      label: 'Industries',
      value: uniqueIndustries,
      change: 'Categories',
      icon: Users,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50',
    },
    {
      label: 'Featured',
      value: featuredCount,
      change: 'Highlighted',
      icon: Star,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
    {
      label: 'Hidden',
      value: hiddenCount,
      change: 'Not shown on site',
      icon: EyeOff,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
    },
  ]

  // ─── Toast ───
  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  // ─── Save (add or edit) ───
  const handleSave = useCallback(
    async (data: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>) => {
      try {
        if (editingItem) {
          // If image was replaced, delete old one from Storage
          if (editingItem.imagePath && editingItem.imagePath !== data.imagePath) {
            try {
              await deleteObject(ref(storage, editingItem.imagePath))
            } catch {
              // Old file may not exist
            }
          }

          await updateDoc(doc(db, 'portfolio', editingItem.id), {
            ...data,
            updatedAt: serverTimestamp(),
          })
          showToast(`"${data.client}" updated successfully`)
        } else {
          // New item — set order to end of list
          const maxOrder = items.length > 0 ? Math.max(...items.map((p) => p.order)) : 0
          await addDoc(collection(db, 'portfolio'), {
            ...data,
            order: maxOrder + 1,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          })
          showToast(`"${data.client}" added to portfolio`)
        }
        setModalOpen(false)
        setEditingItem(null)
      } catch (err) {
        console.error('Failed to save portfolio item:', err)
        showToast('Failed to save. Please try again.')
      }
    },
    [editingItem, items, showToast]
  )

  // ─── Toggle visibility ───
  const handleToggleVisibility = useCallback(
    async (item: PortfolioItem) => {
      try {
        await updateDoc(doc(db, 'portfolio', item.id), {
          visible: !item.visible,
          updatedAt: serverTimestamp(),
        })
        showToast(`"${item.client}" ${!item.visible ? 'shown' : 'hidden'} on site`)
      } catch (err) {
        console.error('Failed to toggle visibility:', err)
        showToast('Failed to update. Please try again.')
      }
    },
    [showToast]
  )

  // ─── Delete ───
  const handleConfirmDelete = useCallback(async () => {
    if (!deleteTarget) return
    try {
      // Delete image from Storage
      if (deleteTarget.imagePath) {
        try {
          await deleteObject(ref(storage, deleteTarget.imagePath))
        } catch {
          // Image may not exist
        }
      }
      await deleteDoc(doc(db, 'portfolio', deleteTarget.id))
      showToast(`"${deleteTarget.client}" removed from portfolio`)
      setDeleteTarget(null)
    } catch (err) {
      console.error('Failed to delete portfolio item:', err)
      showToast('Failed to delete. Please try again.')
    }
  }, [deleteTarget, showToast])

  // ─── Loading state ───
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
        <span className="ml-2 text-slate-500 text-sm">Loading portfolio...</span>
      </div>
    )
  }

  return (
    <>
      <StatsCards stats={stats} />

      {/* ─── Portfolio Card ─── */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl overflow-hidden">
        {/* Card Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-sm font-semibold text-slate-900">Portfolio Projects</h2>
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter tabs */}
            <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
              {industryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Add button */}
            <button
              onClick={() => {
                setEditingItem(null)
                setModalOpen(true)
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Project
            </button>
          </div>
        </div>

        {/* ─── Grid ─── */}
        <div className="p-5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <LayoutGrid className="w-12 h-12 text-slate-200 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-400">
                {items.length === 0
                  ? 'No portfolio projects yet'
                  : 'No projects match your filter'}
              </p>
              {items.length === 0 && (
                <button
                  onClick={() => {
                    setEditingItem(null)
                    setModalOpen(true)
                  }}
                  className="mt-3 text-sm font-medium text-cyan-600 hover:text-cyan-700"
                >
                  Add your first project →
                </button>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative bg-white border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ${
                    item.featured ? 'border-amber-300' : 'border-slate-200'
                  } ${!item.visible ? 'opacity-55' : ''}`}
                  onClick={() => {
                    setEditingItem(item)
                    setModalOpen(true)
                  }}
                >
                  {/* Featured badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-full">
                      <Star className="w-2.5 h-2.5" fill="currentColor" />
                      Featured
                    </div>
                  )}

                  {/* Hidden badge */}
                  {!item.visible && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-black/60 text-white text-[10px] font-bold rounded-full backdrop-blur-sm">
                      <EyeOff className="w-2.5 h-2.5" />
                      Hidden
                    </div>
                  )}

                  {/* Drag handle (visual only for now) */}
                  <div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-md bg-white/90 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                    <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  {/* Image */}
                  <div className="relative h-40 bg-slate-100 overflow-hidden">
                    {item.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.imageUrl}
                        alt={item.client}
                        className={`w-full h-full object-cover ${
                          !item.visible ? 'grayscale-[60%]' : ''
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-10 h-10 text-slate-200" />
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <div className="text-sm font-bold text-slate-900 mb-0.5 truncate">
                      {item.client}
                    </div>
                    <div className="text-xs text-slate-400 mb-3 truncate">{item.type}</div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                          industryColors[item.industry] || industryColors.Other
                        }`}
                      >
                        {item.industry}
                      </span>

                      {/* Quick actions */}
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setEditingItem(item)
                            setModalOpen(true)
                          }}
                          className="w-7 h-7 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleToggleVisibility(item)
                          }}
                          className="w-7 h-7 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                          title={item.visible ? 'Hide' : 'Show'}
                        >
                          {item.visible ? (
                            <Eye className="w-3 h-3" />
                          ) : (
                            <EyeOff className="w-3 h-3" />
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setDeleteTarget(item)
                          }}
                          className="w-7 h-7 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add card */}
              <button
                onClick={() => {
                  setEditingItem(null)
                  setModalOpen(true)
                }}
                className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center min-h-[260px] hover:border-cyan-400 hover:bg-cyan-50/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-cyan-100 flex items-center justify-center mb-3 transition-colors">
                  <Plus className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-cyan-600 transition-colors">
                  Add New Project
                </span>
                <span className="text-xs text-slate-300 mt-1">Upload image &amp; details</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ─── Add/Edit Modal ─── */}
      {modalOpen && (
        <PortfolioModal
          item={editingItem}
          clients={clients}
          onClose={() => {
            setModalOpen(false)
            setEditingItem(null)
          }}
          onSave={handleSave}
        />
      )}

      {/* ─── Delete Confirmation ─── */}
      {deleteTarget && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setDeleteTarget(null)}
          />
          <div className="relative bg-white rounded-xl w-full max-w-sm mx-4 p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Delete Project
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Are you sure you want to remove{' '}
              <strong>&ldquo;{deleteTarget.client}&rdquo;</strong> from the portfolio?
              This will also delete the uploaded image.
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

      {/* ─── Toast ─── */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[70] bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm animate-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          {toast}
        </div>
      )}
    </>
  )
}