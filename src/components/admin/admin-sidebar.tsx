'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import {
  FileText,
  Users,
  Image,
  Layout,
  X,
  LogOut,
} from 'lucide-react'

interface AdminSidebarProps {
  newQuoteCount: number
  open: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Overview', type: 'section' as const },
  { label: 'Quotes', href: '/admin/quotes', icon: FileText, badge: true },
  { label: 'Clients', href: '/admin/clients', icon: Users },
  { label: 'Management', type: 'section' as const },
  { label: 'Portfolio', href: '/admin/portfolio', icon: Layout },
  { label: 'Site Images', href: '/admin/site-images', icon: Image },
]

export function AdminSidebar({ newQuoteCount, open, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleSignOut = async () => {
    await logout()
    router.push('/staff-login')
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-screen w-[260px] bg-slate-950 text-white flex flex-col transition-transform duration-200',
          'lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <div className="font-semibold text-sm">Artistic Printing</div>
                <div className="text-xs text-slate-400">Admin Dashboard</div>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navItems.map((item, i) => {
            if (item.type === 'section') {
              return (
                <div key={i} className="px-3 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </div>
              )
            }

            const Icon = item.icon!
            const isActive = item.href !== '#' && pathname.startsWith(item.href!)

            return (
              <Link
                key={i}
                href={item.href!}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                )}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{item.label}</span>
                {item.badge && newQuoteCount > 0 && (
                  <span className="ml-auto bg-cyan-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {newQuoteCount}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* User footer */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-bold">
              AP
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">Artistic Printing</div>
              <div className="text-xs text-slate-400 truncate">{user?.email || 'Owner'}</div>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}