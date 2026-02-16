'use client'

import { useState, useEffect, useMemo, FormEvent } from 'react'
import { X, Search, Check } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import type { Client, Quote } from '@/lib/admin-data'

interface ClientModalProps {
  client: Client | null
  quotes: Quote[]
  existingClientNames: string[]
  onClose: () => void
  onSave: (data: Omit<Client, 'id' | 'createdAt'>) => void
}

const industries = [
  'Healthcare', 'Automotive', 'Hospitality', 'Education',
  'Finance', 'Media', 'Retail', 'Other'
]

const avatarColors = [
  '#06b6d4', '#f59e0b', '#8b5cf6', '#ec4899',
  '#10b981', '#ef4444', '#3b82f6', '#f97316'
]

interface CompanyOption {
  company: string
  contactName: string
  email: string
  phone: string
  quoteCount: number
}

export function ClientModal({ client, quotes, existingClientNames, onClose, onSave }: ClientModalProps) {
  const [selectedCompany, setSelectedCompany] = useState<CompanyOption | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [industry, setIndustry] = useState('Other')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [notes, setNotes] = useState('')

  // If editing, pre-fill fields
  useEffect(() => {
    if (client) {
      setContactEmail(client.contactEmail)
      setContactPhone(client.contactPhone)
      setIndustry(client.industry)
      setNotes(client.notes)
      setSelectedCompany({
        company: client.name,
        contactName: '',
        email: client.contactEmail,
        phone: client.contactPhone,
        quoteCount: 0,
      })
    }
  }, [client])

  // Build unique company options from quotes, excluding already-added clients
  const companyOptions = useMemo(() => {
    const map = new Map<string, CompanyOption>()

    quotes.forEach((q) => {
      const company = q.company?.trim()
      if (!company) return
      // Skip companies already in the client list (unless we're editing that client)
      if (existingClientNames.includes(company) && (!client || client.name !== company)) return

      if (!map.has(company)) {
        map.set(company, {
          company,
          contactName: `${q.firstName} ${q.lastName}`.trim(),
          email: q.email || '',
          phone: q.phone || '',
          quoteCount: 1,
        })
      } else {
        const existing = map.get(company)!
        existing.quoteCount += 1
        // Use latest quote's contact info (quotes are ordered desc by date)
        if (!existing.email && q.email) existing.email = q.email
        if (!existing.phone && q.phone) existing.phone = q.phone
      }
    })

    return Array.from(map.values())
  }, [quotes, existingClientNames, client])

  // Filter by search
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return companyOptions
    const q = searchQuery.toLowerCase()
    return companyOptions.filter(
      (opt) =>
        opt.company.toLowerCase().includes(q) ||
        opt.contactName.toLowerCase().includes(q)
    )
  }, [companyOptions, searchQuery])

  const handleSelect = (opt: CompanyOption) => {
    setSelectedCompany(opt)
    setContactEmail(opt.email)
    setContactPhone(opt.phone)
    setSearchQuery('')
  }

  const handleClear = () => {
    setSelectedCompany(null)
    setContactEmail('')
    setContactPhone('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!selectedCompany && !client) return
    onSave({
      name: client ? client.name : selectedCompany!.company,
      industry,
      contactEmail,
      contactPhone,
      notes,
    })
  }

  const getInitials = (name: string) =>
    name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

  const getColor = (name: string) =>
    avatarColors[name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % avatarColors.length]

  const isEditing = !!client

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl w-full max-w-lg mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            {isEditing ? 'Edit Client' : 'Add New Client'}
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          {/* Step 1: Select from quotes (only for new clients) */}
          {!isEditing && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select from Quote Submissions
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                {!selectedCompany ? (
                  <>
                    <p className="text-xs text-slate-500 mb-3">
                      Choose a company from your submitted quotes. Their contact info will auto-fill.
                    </p>
                    <div className="relative mb-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or company..."
                        className="pl-9 h-9 text-sm"
                      />
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg max-h-[180px] overflow-y-auto">
                      {filteredOptions.length === 0 ? (
                        <div className="py-8 text-center text-xs text-slate-400">
                          {companyOptions.length === 0
                            ? 'No quote submissions yet'
                            : 'No matching companies found'}
                        </div>
                      ) : (
                        filteredOptions.map((opt) => (
                          <button
                            key={opt.company}
                            type="button"
                            onClick={() => handleSelect(opt)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-cyan-50/50 transition-colors border-b border-slate-50 last:border-b-0"
                          >
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                              style={{ background: getColor(opt.company) }}
                            >
                              {getInitials(opt.company)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-slate-900 truncate">
                                {opt.company}
                              </div>
                              <div className="text-[11px] text-slate-400 truncate">
                                {opt.contactName}
                                {opt.email && <> · {opt.email}</>}
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold bg-sky-100 text-sky-700 rounded-full px-2 py-0.5 flex-shrink-0">
                              {opt.quoteCount} {opt.quoteCount === 1 ? 'quote' : 'quotes'}
                            </span>
                          </button>
                        ))
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3 bg-cyan-50 border border-cyan-200 rounded-lg px-3 py-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                      style={{ background: getColor(selectedCompany.company) }}
                    >
                      {getInitials(selectedCompany.company)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900">{selectedCompany.company}</div>
                      <div className="text-[11px] text-slate-500">{selectedCompany.email}</div>
                    </div>
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <button
                      type="button"
                      onClick={handleClear}
                      className="text-[11px] font-semibold text-cyan-600 hover:text-cyan-700 px-2 py-1 rounded-md hover:bg-cyan-100 transition-colors"
                    >
                      Change
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {isEditing ? 'Client Details' : 'Classify & Add Details'}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1.5">
                  Email
                  {!isEditing && selectedCompany && contactEmail && (
                    <span className="text-[9px] font-semibold bg-blue-100 text-blue-600 px-1.5 py-px rounded uppercase">
                      auto-filled
                    </span>
                  )}
                </label>
                <Input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className={`h-9 text-sm ${!isEditing && selectedCompany && contactEmail ? 'bg-sky-50 border-sky-200' : ''}`}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1.5">
                  Phone
                  {!isEditing && selectedCompany && contactPhone && (
                    <span className="text-[9px] font-semibold bg-blue-100 text-blue-600 px-1.5 py-px rounded uppercase">
                      auto-filled
                    </span>
                  )}
                </label>
                <Input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="(323) 555-0100"
                  className={`h-9 text-sm ${!isEditing && selectedCompany && contactPhone ? 'bg-sky-50 border-sky-200' : ''}`}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Industry <span className="text-red-500">*</span>
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Notes</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any notes about this client..."
                className="resize-none text-sm"
                rows={3}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isEditing && !selectedCompany}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEditing ? 'Save Changes' : 'Add Client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}