'use client'

import { useState, useCallback } from 'react'
import { FileText, Clock, CheckCircle, DollarSign } from 'lucide-react'
import { StatsCards, type StatCard } from '@/components/admin/stats-cards'
import { QuotesTable } from '@/components/admin/quotes-table'
import { QuoteDetailPanel } from '@/components/admin/quote-detail-panel'
import { ReplyModal } from '@/components/admin/reply-modal'
import { mockQuotes, type Quote } from '@/lib/admin-data'

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [filterStatus, setFilterStatus] = useState('All')
  const [replyQuote, setReplyQuote] = useState<Quote | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  const handleStatusChange = useCallback((id: string, status: Quote['status']) => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status } : q))
    )
    const quote = quotes.find((q) => q.id === id)
    if (quote) {
      showToast(`${quote.firstName} ${quote.lastName}'s quote marked as ${status}`)
      if (selectedQuote?.id === id) {
        setSelectedQuote({ ...quote, status })
      }
    }
  }, [quotes, selectedQuote, showToast])

  const handleReply = useCallback((quote: Quote) => {
    setReplyQuote(quote)
  }, [])

  const handleSendReply = useCallback((data: { estimatedPrice: number; turnaround: string }) => {
    if (replyQuote) {
      setQuotes((prev) =>
        prev.map((q) =>
          q.id === replyQuote.id
            ? {
                ...q,
                estimatedPrice: data.estimatedPrice,
                status: q.status === 'new' ? 'pending' : q.status,
              }
            : q
        )
      )
      const updatedQuote = {
        ...replyQuote,
        estimatedPrice: data.estimatedPrice,
        status: replyQuote.status === 'new' ? ('pending' as const) : replyQuote.status,
      }
      if (selectedQuote?.id === replyQuote.id) {
        setSelectedQuote(updatedQuote)
      }
      setReplyQuote(null)
      showToast('Reply sent successfully!')
    }
  }, [replyQuote, selectedQuote, showToast])

  const newCount = quotes.filter((q) => q.status === 'new').length
  const pendingCount = quotes.filter((q) => q.status === 'pending').length
  const approvedCount = quotes.filter((q) => q.status === 'approved').length
  const revenue = quotes
    .filter((q) => q.status === 'completed' && q.finalPrice)
    .reduce((sum, q) => sum + (q.finalPrice || 0), 0)

  const stats: StatCard[] = [
    { label: 'New Requests', value: newCount, change: '+2 this week', icon: FileText, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50' },
    { label: 'Pending Review', value: pendingCount, change: '+1 this week', icon: Clock, iconColor: 'text-amber-600', iconBg: 'bg-amber-50' },
    { label: 'Approved', value: approvedCount, change: '+2 this month', icon: CheckCircle, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
    { label: 'Monthly Revenue', value: `$${revenue.toLocaleString()}`, change: 'Feb 2026', icon: DollarSign, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  ]

  return (
    <>
      <StatsCards stats={stats} />

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        <QuotesTable
          quotes={quotes}
          selectedId={selectedQuote?.id || null}
          onSelect={setSelectedQuote}
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
        <QuoteDetailPanel
          quote={selectedQuote}
          onStatusChange={handleStatusChange}
          onReply={handleReply}
        />
      </div>

      {replyQuote && (
        <ReplyModal
          quote={replyQuote}
          onClose={() => setReplyQuote(null)}
          onSend={handleSendReply}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[70] bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm animate-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          {toast}
        </div>
      )}
    </>
  )
}
