'use client'

import { FileText, Mail, Phone, Calendar, Package, Clock, MessageSquare } from 'lucide-react'
import { StatusBadge } from './status-badge'
import type { Quote } from '@/lib/admin-data'

interface QuoteDetailPanelProps {
  quote: Quote | null
  onStatusChange: (id: string, status: Quote['status']) => void
  onReply: (quote: Quote) => void
}

const statusOptions: { value: Quote['status']; label: string }[] = [
  { value: 'new', label: 'New' },
  { value: 'pending', label: 'Pending' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'approved', label: 'Approved' },
  { value: 'completed', label: 'Completed' },
  { value: 'declined', label: 'Declined' },
]

export function QuoteDetailPanel({ quote, onStatusChange, onReply }: QuoteDetailPanelProps) {
  if (!quote) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <FileText className="w-12 h-12 text-slate-300 mb-3" />
        <h3 className="text-base font-semibold text-slate-700">Select a Quote</h3>
        <p className="text-sm text-slate-400 mt-1">Click on a quote from the table to view details</p>
      </div>
    )
  }

  const initials = `${quote.firstName[0]}${quote.lastName[0]}`
  const bgColors = ['bg-cyan-500', 'bg-blue-500', 'bg-violet-500', 'bg-amber-500', 'bg-emerald-500']
  const bgColor = bgColors[quote.id.charCodeAt(1) % bgColors.length]

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Top section */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-start gap-4">
          <div className={`w-11 h-11 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-slate-900">{quote.firstName} {quote.lastName}</h3>
              <StatusBadge status={quote.status} />
            </div>
            <p className="text-sm text-slate-500">{quote.company}</p>
            <p className="text-xs text-slate-400">{quote.industry}</p>
          </div>
        </div>
        <div className="mt-3">
          <select
            value={quote.status}
            onChange={(e) => onStatusChange(quote.id, e.target.value as Quote['status'])}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact info */}
      <div className="p-5 border-b border-slate-100 space-y-2.5">
        <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Contact</h4>
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <a href={`mailto:${quote.email}`} className="text-cyan-600 hover:underline">{quote.email}</a>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Phone className="w-3.5 h-3.5 text-slate-400" />
          {quote.phone}
        </div>
      </div>

      {/* Request details */}
      <div className="p-5 border-b border-slate-100 space-y-2.5">
        <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Request Details</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Package className="w-3.5 h-3.5 text-slate-400" />
            <div>
              <span className="text-slate-500 text-xs">Service</span>
              <p className="text-slate-700 font-medium">{quote.service}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <div>
              <span className="text-slate-500 text-xs">Quantity</span>
              <p className="text-slate-700 font-medium">{quote.quantity}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <div>
              <span className="text-slate-500 text-xs">Urgency</span>
              <p className={quote.urgency === 'Rush' ? 'text-red-600 font-medium' : 'text-slate-700 font-medium'}>{quote.urgency}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <div>
              <span className="text-slate-500 text-xs">Submitted</span>
              <p className="text-slate-700 font-medium">{new Date(quote.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="p-5 border-b border-slate-100">
        <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">Message</h4>
        <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 flex gap-2">
          <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>{quote.message}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-5 space-y-3">
        <button
          onClick={() => onReply(quote)}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
        >
          Reply
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange(quote.id, 'approved')}
            className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 text-sm font-medium py-1.5 rounded-lg transition-colors border border-green-200"
          >
            Approve
          </button>
          <button
            onClick={() => onStatusChange(quote.id, 'declined')}
            className="flex-1 bg-white hover:bg-red-50 text-red-600 text-sm font-medium py-1.5 rounded-lg transition-colors border border-red-200"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
