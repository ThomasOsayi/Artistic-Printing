'use client'

import { Bell, ExternalLink, Menu, Search } from 'lucide-react'

interface AdminHeaderProps {
  title: string
  searchValue: string
  onSearchChange: (value: string) => void
  onMenuClick: () => void
}

export function AdminHeader({ title, searchValue, onSearchChange, onMenuClick }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden text-slate-600 hover:text-slate-900">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search quotes..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-56"
          />
        </div>
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
        >
          <ExternalLink className="w-4.5 h-4.5" />
        </a>
      </div>
    </header>
  )
}
