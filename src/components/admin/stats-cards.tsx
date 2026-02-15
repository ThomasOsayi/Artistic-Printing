'use client'

import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'

interface StatCard {
  label: string
  value: string | number
  change: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
}

export function StatsCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
              </div>
              <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.iconBg)}>
                <Icon className={cn('w-5 h-5', stat.iconColor)} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export type { StatCard }
