'use client'

import { useState, useRef, useCallback, useMemo } from 'react'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import type { PortfolioItem, Client } from '@/lib/admin-data'
import {
  X,
  Upload,
  Image as ImageIcon,
  Loader2,
  Check,
  Search,
  Building2,
  UserPlus,
} from 'lucide-react'

interface PortfolioModalProps {
  item: PortfolioItem | null
  clients: Client[]
  onClose: () => void
  onSave: (data: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>) => void
}

const industryOptions = [
  'Healthcare',
  'Automotive',
  'Hospitality',
  'Education',
  'Finance',
  'Media',
  'Retail',
  'Other',
]

const industryColors: Record<string, string> = {
  Healthcare: 'bg-cyan-100 text-cyan-700',
  Automotive: 'bg-purple-100 text-purple-700',
  Hospitality: 'bg-amber-100 text-amber-700',
  Education: 'bg-blue-100 text-blue-700',
  Finance: 'bg-green-100 text-green-700',
  Media: 'bg-red-100 text-red-700',
  Retail: 'bg-pink-100 text-pink-700',
  Other: 'bg-slate-100 text-slate-700',
}

export function PortfolioModal({ item, clients, onClose, onSave }: PortfolioModalProps) {
  const isEditing = !!item

  // Client selection state (add mode only)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [clientSearch, setClientSearch] = useState('')
  const [manualEntry, setManualEntry] = useState(false)

  // Form fields
  const [client, setClient] = useState(item?.client || '')
  const [industry, setIndustry] = useState(item?.industry || '')
  const [type, setType] = useState(item?.type || '')
  const [description, setDescription] = useState(item?.description || '')
  const [visible, setVisible] = useState(item?.visible ?? true)
  const [featured, setFeatured] = useState(item?.featured ?? false)

  // Image state
  const [imageUrl, setImageUrl] = useState(item?.imageUrl || '')
  const [imagePath, setImagePath] = useState(item?.imagePath || '')
  const [imagePreview, setImagePreview] = useState(item?.imageUrl || '')
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Filter clients by search
  const filteredClients = useMemo(() => {
    if (!clientSearch.trim()) return clients
    const s = clientSearch.toLowerCase()
    return clients.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        c.industry.toLowerCase().includes(s)
    )
  }, [clients, clientSearch])

  const handleSelectClient = useCallback((c: Client) => {
    setSelectedClient(c)
    setClient(c.name)
    setIndustry(c.industry)
    setClientSearch('')
  }, [])

  const handleManualEntry = useCallback(() => {
    setManualEntry(true)
    setSelectedClient(null)
    setClient('')
    setIndustry('')
  }, [])

  const handleBackToSelection = useCallback(() => {
    setManualEntry(false)
    setSelectedClient(null)
    setClient('')
    setIndustry('')
  }, [])

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('Please upload a JPG, PNG, or WEBP image.')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be under 5MB.')
      return
    }

    const localPreview = URL.createObjectURL(file)
    setImagePreview(localPreview)

    setUploading(true)
    try {
      const ext = file.name.split('.').pop() || 'jpg'
      const storagePath = `portfolio/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const storageRef = ref(storage, storagePath)

      await uploadBytes(storageRef, file)
      const downloadUrl = await getDownloadURL(storageRef)

      if (imagePath && imagePath !== item?.imagePath) {
        try {
          await deleteObject(ref(storage, imagePath))
        } catch {
          // Old image may not exist
        }
      }

      setImageUrl(downloadUrl)
      setImagePath(storagePath)
    } catch (err) {
      console.error('Upload failed:', err)
      alert('Image upload failed. Please try again.')
      setImagePreview(item?.imageUrl || '')
    } finally {
      setUploading(false)
    }
  }, [imagePath, item?.imagePath, item?.imageUrl])

  const handleRemoveImage = useCallback(() => {
    setImagePreview('')
    setImageUrl('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [])

  const handleSave = useCallback(async () => {
    if (!client.trim() || !industry || !type.trim()) return

    setSaving(true)
    try {
      onSave({
        client: client.trim(),
        industry,
        type: type.trim(),
        description: description.trim(),
        imageUrl,
        imagePath,
        featured,
        visible,
        order: item?.order ?? 999,
      })
    } finally {
      setSaving(false)
    }
  }, [client, industry, type, description, imageUrl, imagePath, featured, visible, item?.order, onSave])

  const clientChosen = isEditing || selectedClient || manualEntry
  const canSave = client.trim() && industry && type.trim() && !uploading && !saving

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            {isEditing ? 'Edit Project' : 'Add Portfolio Project'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* ═══ STEP 1: Client Selection (add mode only) ═══ */}
          {!isEditing && !clientChosen && (
            <>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-cyan-600 mb-3">
                  Select from Client Directory
                </label>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="p-3 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-xs text-slate-500 mb-2">
                      Choose a client from your directory. Their industry will auto-fill.
                    </p>
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by name or industry..."
                        value={clientSearch}
                        onChange={(e) => setClientSearch(e.target.value)}
                        className="bg-transparent text-sm outline-none placeholder:text-slate-400 w-full"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="max-h-48 overflow-y-auto">
                    {filteredClients.length === 0 ? (
                      <div className="py-8 text-center">
                        <Building2 className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                        <p className="text-xs text-slate-400">
                          {clients.length === 0
                            ? 'No clients in directory yet'
                            : 'No clients match your search'}
                        </p>
                      </div>
                    ) : (
                      filteredClients.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => handleSelectClient(c)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-cyan-50 transition-colors text-left border-b border-slate-50 last:border-0"
                        >
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                            {getInitials(c.name)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-slate-900 truncate">
                              {c.name}
                            </div>
                            {c.contactEmail && (
                              <div className="text-xs text-slate-400 truncate">
                                {c.contactEmail}
                              </div>
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                              industryColors[c.industry] || industryColors.Other
                            }`}
                          >
                            {c.industry}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-slate-400">or</span>
                </div>
              </div>

              <button
                onClick={handleManualEntry}
                className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                Enter client manually
              </button>
            </>
          )}

          {/* ═══ STEP 2: Project Details ═══ */}
          {(isEditing || clientChosen) && (
            <>
              {/* Selected client display */}
              {!isEditing && selectedClient && (
                <div className="flex items-center gap-3 p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-sm font-bold text-cyan-700 flex-shrink-0">
                    {getInitials(selectedClient.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-900">
                      {selectedClient.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {selectedClient.industry}
                      <span className="mx-1.5 text-slate-300">·</span>
                      Auto-filled from directory
                    </div>
                  </div>
                  <button
                    onClick={handleBackToSelection}
                    className="text-xs font-medium text-cyan-600 hover:text-cyan-700 flex-shrink-0"
                  >
                    Change
                  </button>
                </div>
              )}

              {/* Manual entry / edit mode fields */}
              {(isEditing || manualEntry) && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Client Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      placeholder="e.g., Kaiser Permanente"
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none bg-white"
                    >
                      <option value="">Select industry…</option>
                      {industryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  {!isEditing && (
                    <div className="col-span-2">
                      <button
                        onClick={handleBackToSelection}
                        className="text-xs font-medium text-cyan-600 hover:text-cyan-700"
                      >
                        ← Back to client directory
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Image Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Project Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="relative rounded-lg overflow-hidden border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                    />
                    {uploading && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg">
                          <Loader2 className="w-4 h-4 animate-spin text-cyan-600" />
                          <span className="text-sm font-medium text-slate-700">Uploading…</span>
                        </div>
                      </div>
                    )}
                    {!uploading && (
                      <div className="absolute bottom-3 right-3 flex gap-2">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 text-white text-xs font-medium rounded-md backdrop-blur-sm hover:bg-black/70 transition-colors"
                        >
                          <Upload className="w-3 h-3" />
                          Change
                        </button>
                        <button
                          onClick={handleRemoveImage}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/80 text-white text-xs font-medium rounded-md backdrop-blur-sm hover:bg-red-500 transition-colors"
                        >
                          <X className="w-3 h-3" />
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-cyan-400 hover:bg-cyan-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-cyan-100 flex items-center justify-center mx-auto mb-3 transition-colors">
                      <ImageIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                    </div>
                    <div className="text-sm font-medium text-slate-600 group-hover:text-cyan-700">
                      Click to upload
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      PNG, JPG, WEBP up to 5MB
                    </div>
                  </button>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="e.g., Patient Forms & Signage"
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the work done…"
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                />
              </div>

              {/* Toggles */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-3">
                  Display Settings
                </label>
                <div className="space-y-0 divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-slate-900">Visible on site</div>
                      <div className="text-xs text-slate-400 mt-0.5">Show on the public portfolio page</div>
                    </div>
                    <button
                      onClick={() => setVisible(!visible)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        visible ? 'bg-cyan-500' : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          visible ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-slate-900">Featured project</div>
                      <div className="text-xs text-slate-400 mt-0.5">Highlight on homepage and portfolio</div>
                    </div>
                    <button
                      onClick={() => setFeatured(!featured)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        featured ? 'bg-amber-500' : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          featured ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          {(isEditing || clientChosen) && (
            <button
              onClick={handleSave}
              disabled={!canSave}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Check className="w-4 h-4" />
              )}
              {isEditing ? 'Save Changes' : 'Add Project'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}