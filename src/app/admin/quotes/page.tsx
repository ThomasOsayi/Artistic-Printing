'use client'

import { useState, useCallback, useEffect } from 'react'
import { collection, onSnapshot, query, orderBy, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { FileText, Clock, CheckCircle, DollarSign, Loader2 } from 'lucide-react'
import { StatsCards, type StatCard } from '@/components/admin/stats-cards'
import { QuotesTable } from '@/components/admin/quotes-table'
import { QuoteDetailPanel } from '@/components/admin/quote-detail-panel'
import { ReplyModal } from '@/components/admin/reply-modal'
import { type Quote } from '@/lib/admin-data'

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [filterStatus, setFilterStatus] = useState('All')
  const [replyQuote, setReplyQuote] = useState<Quote | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  // Real-time Firestore listener
  useEffect(() => {
    const q = query(collection(db, 'quotes'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const quotesData = snapshot.docs.map((docSnap) => {
        const data = docSnap.data()
        return {
          id: docSnap.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          company: data.company || '',
          email: data.email || '',
          phone: data.phone || '',
          industry: data.industry || '',
          service: data.service || data.message || '',
          status: data.status || 'new',
          date: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          message: data.message || '',
          quantity: data.quantity || '',
          urgency: data.urgency || 'Standard',
          estimatedPrice: data.estimatedPrice,
          finalPrice: data.finalPrice,
        } as Quote
      })

      setQuotes(quotesData)
      setLoading(false)

      // Update selected quote if it's still in the list
      if (selectedQuote) {
        const updated = quotesData.find((q) => q.id === selectedQuote.id)
        if (updated) setSelectedQuote(updated)
      }
    })

    return () => unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  const handleStatusChange = useCallback(async (id: string, status: Quote['status']) => {
    try {
      const quoteRef = doc(db, 'quotes', id)
      await updateDoc(quoteRef, {
        status,
        updatedAt: serverTimestamp(),
      })
      const quote = quotes.find((q) => q.id === id)
      if (quote) {
        showToast(`${quote.firstName} ${quote.lastName}'s quote marked as ${status}`)
      }
    } catch (err) {
      console.error('Failed to update status:', err)
      showToast('Failed to update status. Please try again.')
    }
  }, [quotes, showToast])

  const handleReply = useCallback((quote: Quote) => {
    setReplyQuote(quote)
  }, [])

  const handleSendReply = useCallback(async (data: { estimatedPrice: number; turnaround: string }) => {
    if (!replyQuote) return

    try {
      const quoteRef = doc(db, 'quotes', replyQuote.id)
      await updateDoc(quoteRef, {
        estimatedPrice: data.estimatedPrice || null,
        status: replyQuote.status === 'new' ? 'pending' : replyQuote.status,
        replied: true,
        repliedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      setReplyQuote(null)
      showToast('Reply sent successfully!')
    } catch (err) {
      console.error('Failed to send reply:', err)
      showToast('Failed to send reply. Please try again.')
    }
  }, [replyQuote, showToast])

  const newCount = quotes.filter((q) => q.status === 'new').length
  const pendingCount = quotes.filter((q) => q.status === 'pending').length
  const approvedCount = quotes.filter((q) => q.status === 'approved').length
  const revenue = quotes
    .filter((q) => q.status === 'completed' && q.finalPrice)
    .reduce((sum, q) => sum + (q.finalPrice || 0), 0)

  const stats: StatCard[] = [
    { label: 'New Requests', value: newCount, change: `${quotes.length} total quotes`, icon: FileText, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50' },
    { label: 'Pending Review', value: pendingCount, change: 'Awaiting response', icon: Clock, iconColor: 'text-amber-600', iconBg: 'bg-amber-50' },
    { label: 'Approved', value: approvedCount, change: 'Ready for production', icon: CheckCircle, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
    { label: 'Monthly Revenue', value: `$${revenue.toLocaleString()}`, change: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), icon: DollarSign, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
        <span className="ml-2 text-slate-500 text-sm">Loading quotes...</span>
      </div>
    )
  }

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

      {toast && (
        <div className="fixed bottom-6 right-6 z-[70] bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm animate-in slide-in-from-bottom-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          {toast}
        </div>
      )}
    </>
  )
}