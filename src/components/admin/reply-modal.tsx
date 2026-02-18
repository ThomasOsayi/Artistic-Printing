'use client'

import { useState, useCallback } from 'react'
import { X, Copy, Check, ExternalLink } from 'lucide-react'
import type { Quote } from '@/lib/admin-data'

interface ReplyModalProps {
  quote: Quote
  onClose: () => void
  onSend: (data: { estimatedPrice: number; turnaround: string }) => void
}

export function ReplyModal({ quote, onClose, onSend }: ReplyModalProps) {
  const [message, setMessage] = useState(
    `Dear ${quote.firstName},\n\nThank you for reaching out to Artistic Printing regarding your ${quote.service.toLowerCase()} needs. We've reviewed your request and would be happy to assist.\n\nBased on the details provided, here is our estimate for your project. Please let us know if you have any questions or would like to discuss further.\n\nBest regards,\nArtistic Printing Team`
  )
  const [estimatedPrice, setEstimatedPrice] = useState(quote.estimatedPrice?.toString() || '')
  const [turnaround, setTurnaround] = useState('5-7 business days')
  const [copied, setCopied] = useState(false)

  const subject = `Re: Your Quote Request — Artistic Printing Co.`

  const buildFullMessage = useCallback(() => {
    let full = message
    if (estimatedPrice) {
      full += `\n\n---\nEstimated Price: $${parseFloat(estimatedPrice).toLocaleString()}`
    }
    if (turnaround) {
      full += `\nEstimated Turnaround: ${turnaround}`
    }
    return full
  }, [message, estimatedPrice, turnaround])

  const handleCopy = useCallback(async () => {
    const fullMessage = buildFullMessage()
    try {
      await navigator.clipboard.writeText(fullMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)

      // Save to Firestore + update status
      onSend({
        estimatedPrice: parseFloat(estimatedPrice) || 0,
        turnaround,
      })
    } catch {
      alert('Failed to copy. Please select and copy manually.')
    }
  }, [buildFullMessage, estimatedPrice, turnaround, onSend])

  const handleOpenInMail = useCallback(() => {
    const fullMessage = buildFullMessage()
    const mailtoUrl = `mailto:${quote.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`
    window.open(mailtoUrl, '_blank')

    // Save to Firestore + update status
    onSend({
      estimatedPrice: parseFloat(estimatedPrice) || 0,
      turnaround,
    })
  }, [buildFullMessage, quote.email, subject, estimatedPrice, turnaround, onSend])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Send Quote</h2>
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                Estimated Price ($) <span className="text-red-400">*</span>
              </label>
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

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 p-5 border-t border-slate-200">
          <button
            onClick={handleOpenInMail}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in Mail
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCopy}
              disabled={!estimatedPrice}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Draft
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}