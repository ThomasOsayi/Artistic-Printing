'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminHeader } from '@/components/admin/admin-header'
import { mockQuotes } from '@/lib/admin-data'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/staff-login')
    }
  }, [user, loading, router])

  // Show nothing while checking auth
  if (loading || !user) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-slate-400 text-sm">Loading...</div>
      </div>
    )
  }

  const newQuoteCount = mockQuotes.filter((q) => q.status === 'new').length
  const pageTitle = pathname.includes('/portfolio')
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
