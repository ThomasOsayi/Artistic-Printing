'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import type { Quote } from '@/lib/admin-data'

interface ReplyModalProps {
  quote: Quote
  onClose: () => void
  onSend: (data: { estimatedPrice: number; turnaround: string }) => void
}

export function ReplyModal({ quote, onClose, onSend }: ReplyModalProps) {
  const [subject] = useState(`Re: Your Quote Request — Artistic Printing Co.`)
  const [message, setMessage] = useState(
    `Dear ${quote.firstName},\n\nThank you for reaching out to Artistic Printing regarding your ${quote.service.toLowerCase()} needs. We've reviewed your request and would be happy to assist.\n\nBased on the details provided, here is our estimate for your project. Please let us know if you have any questions or would like to discuss further.\n\nBest regards,\nArtistic Printing Team`
  )
  const [estimatedPrice, setEstimatedPrice] = useState(quote.estimatedPrice?.toString() || '')
  const [turnaround, setTurnaround] = useState('5-7 business days')

  const handleSend = () => {
    onSend({
      estimatedPrice: parseFloat(estimatedPrice) || 0,
      turnaround,
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Reply to Quote</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">To</label>
            <div className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              {quote.firstName} {quote.lastName} &lt;{quote.email}&gt;
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Subject</label>
            <div className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              {subject}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Estimated Price ($)</label>
              <input
                type="number"
                value={estimatedPrice}
                onChange={(e) => setEstimatedPrice(e.target.value)}
                placeholder="0.00"
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Est. Turnaround</label>
              <input
                type="text"
                value={turnaround}
                onChange={(e) => setTurnaround(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            Send Reply
          </button>
        </div>
      </div>
    </div>
  )
}
