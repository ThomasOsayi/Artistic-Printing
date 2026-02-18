'use client'

import { useState } from 'react'
import {
  FileText,
  Mail,
  Phone,
  Calendar,
  Package,
  Clock,
  MessageSquare,
  DollarSign,
  Timer,
  CheckCircle,
  Trash2,
  Pencil,
  X,
  Check,
} from 'lucide-react'
import { StatusBadge } from './status-badge'
import type { Quote } from '@/lib/admin-data'

interface QuoteDetailPanelProps {
  quote: Quote | null
  onStatusChange: (id: string, status: Quote['status']) => void
  onReply: (quote: Quote) => void
  onFinalPriceChange?: (id: string, price: number) => void
  onEstimatedPriceChange?: (id: string, price: number) => void
  onDelete?: (id: string) => void
}

export function QuoteDetailPanel({
  quote,
  onStatusChange,
  onReply,
  onFinalPriceChange,
  onEstimatedPriceChange,
  onDelete,
}: QuoteDetailPanelProps) {
  const [finalPriceInput, setFinalPriceInput] = useState('')
  const [editingEstPrice, setEditingEstPrice] = useState(false)
  const [estPriceInput, setEstPriceInput] = useState('')
  const [editingFinalPrice, setEditingFinalPrice] = useState(false)
  const [finalPriceEditInput, setFinalPriceEditInput] = useState('')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

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

  const isDeclined = quote.status === 'declined'
  const hasQuote = ['quoted', 'approved', 'in-production', 'completed'].includes(quote.status)
  const isCompleted = quote.status === 'completed'

  const handleSaveFinalPrice = () => {
    const price = parseFloat(finalPriceInput)
    if (price > 0 && onFinalPriceChange) {
      onFinalPriceChange(quote.id, price)
      setFinalPriceInput('')
    }
  }

  const handleSaveEstPrice = () => {
    const price = parseFloat(estPriceInput)
    if (price > 0 && onEstimatedPriceChange) {
      onEstimatedPriceChange(quote.id, price)
      setEditingEstPrice(false)
    }
  }

  const handleSaveEditedFinalPrice = () => {
    const price = parseFloat(finalPriceEditInput)
    if (price > 0 && onFinalPriceChange) {
      onFinalPriceChange(quote.id, price)
      setEditingFinalPrice(false)
    }
  }

  return (
    <div className={`bg-white rounded-xl border border-slate-200 overflow-hidden ${isDeclined ? 'opacity-60' : ''}`}>
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
          </div>
          {onDelete && (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
              title="Delete quote"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Delete confirmation */}
      {showDeleteConfirm && (
        <div className="px-5 py-3 bg-red-50 border-b border-red-200">
          <p className="text-sm text-red-700 mb-2.5">
            Permanently delete this quote from <strong>{quote.firstName} {quote.lastName}</strong>?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="flex-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete?.(quote.id)
                setShowDeleteConfirm(false)
              }}
              className="flex-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      )}

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
              <p className="text-slate-700 font-medium">{quote.quantity || '—'}</p>
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
              <p className="text-slate-700 font-medium">
                {new Date(quote.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      {quote.message && (
        <div className="p-5 border-b border-slate-100">
          <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">Message</h4>
          <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 flex gap-2">
            <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>{quote.message}</p>
          </div>
        </div>
      )}

      {/* ═══ Pricing Card (shows after quote is sent) ═══ */}
      {hasQuote && (quote.estimatedPrice || quote.finalPrice) && (
        <div className="p-5 border-b border-slate-100">
          <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-3">Quote Details</h4>
          <div className={`rounded-lg p-4 space-y-2.5 ${isCompleted ? 'bg-green-50 border border-green-200' : 'bg-cyan-50 border border-cyan-200'}`}>

            {/* Estimated Price — editable */}
            {quote.estimatedPrice && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <DollarSign className="w-3.5 h-3.5" />
                  Est. Price
                </div>
                {editingEstPrice ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-slate-400">$</span>
                    <input
                      type="number"
                      value={estPriceInput}
                      onChange={(e) => setEstPriceInput(e.target.value)}
                      className="w-24 text-sm text-right border border-slate-300 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      autoFocus
                    />
                    <button onClick={handleSaveEstPrice} className="text-green-600 hover:text-green-700">
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => setEditingEstPrice(false)} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setEstPriceInput(quote.estimatedPrice?.toString() || '')
                      setEditingEstPrice(true)
                    }}
                    className="flex items-center gap-1.5 group"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      ${quote.estimatedPrice.toLocaleString()}
                    </span>
                    <Pencil className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
            )}

            {/* Turnaround */}
            {quote.turnaround && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Timer className="w-3.5 h-3.5" />
                  Turnaround
                </div>
                <span className="text-sm font-medium text-slate-700">{quote.turnaround}</span>
              </div>
            )}

            {/* Quoted On */}
            {quote.quotedAt && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-3.5 h-3.5" />
                  Quoted On
                </div>
                <span className="text-sm text-slate-500">
                  {new Date(quote.quotedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            )}

            {/* Final Price — editable */}
            {quote.finalPrice && (
              <div className="flex items-center justify-between pt-2 border-t border-green-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Final Price
                </div>
                {editingFinalPrice ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-slate-400">$</span>
                    <input
                      type="number"
                      value={finalPriceEditInput}
                      onChange={(e) => setFinalPriceEditInput(e.target.value)}
                      className="w-24 text-sm text-right border border-slate-300 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-green-500"
                      autoFocus
                    />
                    <button onClick={handleSaveEditedFinalPrice} className="text-green-600 hover:text-green-700">
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => setEditingFinalPrice(false)} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setFinalPriceEditInput(quote.finalPrice?.toString() || '')
                      setEditingFinalPrice(true)
                    }}
                    className="flex items-center gap-1.5 group"
                  >
                    <span className="text-sm font-bold text-green-700">
                      ${quote.finalPrice.toLocaleString()}
                    </span>
                    <Pencil className="w-3 h-3 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ Final Price Input (completed status only, no final price yet) ═══ */}
      {isCompleted && !quote.finalPrice && (
        <div className="p-5 border-b border-slate-100">
          <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">Final Price</h4>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="number"
                value={finalPriceInput}
                onChange={(e) => setFinalPriceInput(e.target.value)}
                placeholder="0.00"
                className="w-full pl-8 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              onClick={handleSaveFinalPrice}
              disabled={!finalPriceInput || parseFloat(finalPriceInput) <= 0}
              className="px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* ═══ Contextual Actions ═══ */}
      {!isDeclined && (
        <div className="p-5 space-y-3">
          {quote.status === 'new' && (
            <>
              <button
                onClick={() => onReply(quote)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
              >
                Send Quote
              </button>
              <button
                onClick={() => onStatusChange(quote.id, 'declined')}
                className="w-full bg-white hover:bg-red-50 text-red-600 text-sm font-medium py-2 rounded-lg transition-colors border border-red-200"
              >
                Decline
              </button>
            </>
          )}

          {quote.status === 'quoted' && (
            <>
              <button
                onClick={() => onReply(quote)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium py-2 rounded-lg transition-colors"
              >
                Edit & Resend Quote
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => onStatusChange(quote.id, 'approved')}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Client Approved
                </button>
                <button
                  onClick={() => onStatusChange(quote.id, 'declined')}
                  className="flex-1 bg-white hover:bg-red-50 text-red-600 text-sm font-medium py-2 rounded-lg transition-colors border border-red-200"
                >
                  Decline
                </button>
              </div>
            </>
          )}

          {quote.status === 'approved' && (
            <button
              onClick={() => onStatusChange(quote.id, 'in-production')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
            >
              Start Production
            </button>
          )}

          {quote.status === 'in-production' && (
            <button
              onClick={() => onStatusChange(quote.id, 'completed')}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
            >
              Mark Completed
            </button>
          )}
        </div>
      )}

      {isDeclined && (
        <div className="p-5">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600 text-center">
            This quote was declined
          </div>
        </div>
      )}
    </div>
  )
}