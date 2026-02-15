'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminHeader } from '@/components/admin/admin-header'
import { mockQuotes } from '@/lib/admin-data'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const pathname = usePathname()

  const newQuoteCount = mockQuotes.filter((q) => q.status === 'new').length

  const pageTitle = pathname.includes('/clients') ? 'Clients' : 'Quote Management'

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
          {typeof children === 'object' && children !== null
            ? children
            : children}
        </main>
      </div>
    </div>
  )
}
