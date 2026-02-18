'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@/lib/auth-context'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminHeader } from '@/components/admin/admin-header'
import { AdminSearchProvider, useAdminSearch } from '@/lib/admin-search-context'

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [newQuoteCount, setNewQuoteCount] = useState(0)
  const { searchValue, setSearchValue } = useAdminSearch()
  const pathname = usePathname()

  // Clear search when navigating between pages
  useEffect(() => {
    setSearchValue('')
  }, [pathname, setSearchValue])

  // Real-time new quote count from Firestore
  useEffect(() => {
    const q = query(collection(db, 'quotes'), where('status', '==', 'new'))
    const unsub = onSnapshot(q, (snap) => {
      setNewQuoteCount(snap.size)
    })
    return unsub
  }, [])

  const pageTitle = pathname.includes('/site-images')
    ? 'Site Images'
    : pathname.includes('/portfolio')
      ? 'Portfolio Manager'
      : pathname.includes('/clients')
        ? 'Clients'
        : 'Quote Management'

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminSidebar
        newQuoteCount={newQuoteCount}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="lg:ml-[260px]">
        <AdminHeader
          title={pageTitle}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/staff-login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-slate-400 text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <AdminSearchProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminSearchProvider>
  )
}