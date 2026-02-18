'use client'

import { cn } from '@/lib/utils'

const statusConfig: Record<string, { label: string; className: string }> = {
  'new': { label: 'New', className: 'bg-cyan-100 text-cyan-700' },
  'quoted': { label: 'Quoted', className: 'bg-amber-100 text-amber-700' },
  'approved': { label: 'Approved', className: 'bg-green-100 text-green-700' },
  'in-production': { label: 'In Production', className: 'bg-blue-100 text-blue-700' },
  'completed': { label: 'Completed', className: 'bg-green-200 text-green-800' },
  'declined': { label: 'Declined', className: 'bg-red-100 text-red-700' },
  // Legacy support
  'pending': { label: 'Quoted', className: 'bg-amber-100 text-amber-700' },
  'in-progress': { label: 'In Production', className: 'bg-blue-100 text-blue-700' },
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const config = statusConfig[status] || { label: status, className: 'bg-slate-100 text-slate-700' }
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', config.className, className)}>
      {config.label}
    </span>
  )
}