'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '@/lib/firebase'
import { seedSiteImages } from '@/lib/site-images-seed'
import type { SiteImage } from '@/lib/admin-data'
import {
  Image,
  Upload,
  RotateCcw,
  Loader2,
  ImageIcon,
  Globe,
  Layers,
  AlertTriangle,
  Check,
  Info,
  FileText,
  Maximize2,
  Monitor,
} from 'lucide-react'
import ImagePreviewModal from '@/components/admin/image-preview-modal'

const PAGE_TABS = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'about', label: 'About' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'contact', label: 'Contact' },
]

const FULL_WIDTH_SECTIONS = new Set([
  'Hero Background',
  'Hero Section',
  'CTA Background',
  'CTA Section',
  'Features Background',
  'Features Section',
  'Capabilities Background',
  'Capabilities Section',
])

export default function SiteImagesPage() {
  const [allImages, setAllImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('home')
  const [uploadingId, setUploadingId] = useState<string | null>(null)
  const [revertingId, setRevertingId] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [resettingAll, setResettingAll] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const pendingImageId = useRef<string | null>(null)

  useEffect(() => {
    seedSiteImages().catch(console.error)
  }, [])

  useEffect(() => {
    const q = query(collection(db, 'siteImages'), orderBy('order', 'asc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const imgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as SiteImage[]
      setAllImages(imgs)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const pageImages = allImages.filter((img) => img.page === activeTab)

  const sections = pageImages.reduce<Record<string, SiteImage[]>>((acc, img) => {
    if (!acc[img.section]) acc[img.section] = []
    acc[img.section].push(img)
    return acc
  }, {})

  const totalImages = allImages.length
  const customCount = allImages.filter((img) => img.customUrl).length
  const stockCount = totalImages - customCount
  const pageCount = new Set(allImages.map((img) => img.page)).size

  const pageCounts = PAGE_TABS.reduce<Record<string, number>>((acc, tab) => {
    acc[tab.key] = allImages.filter((img) => img.page === tab.key).length
    return acc
  }, {})

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const imageId = pendingImageId.current
    if (!file || !imageId) return
    e.target.value = ''

    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('Please select a JPG, PNG, or WEBP image.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('File must be under 10MB.')
      return
    }

    setUploadingId(imageId)
    try {
      const existing = allImages.find((img) => img.id === imageId)
      if (existing?.customPath) {
        try { await deleteObject(ref(storage, existing.customPath)) } catch { /* ok */ }
      }
      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
      const storagePath = `site-images/${imageId}-${Date.now()}.${ext}`
      const storageRef = ref(storage, storagePath)
      await uploadBytes(storageRef, file)
      const downloadUrl = await getDownloadURL(storageRef)
      await updateDoc(doc(db, 'siteImages', imageId), { customUrl: downloadUrl, customPath: storagePath })
    } catch (err) {
      console.error('Upload failed:', err)
      alert('Upload failed. Please try again.')
    } finally {
      setUploadingId(null)
      pendingImageId.current = null
    }
  }, [allImages])

  const handleReplace = useCallback((imageId: string) => {
    pendingImageId.current = imageId
    fileInputRef.current?.click()
  }, [])

  const handleRevert = useCallback(async (imageId: string) => {
    const img = allImages.find((i) => i.id === imageId)
    if (!img?.customUrl) return
    setRevertingId(imageId)
    try {
      if (img.customPath) {
        try { await deleteObject(ref(storage, img.customPath)) } catch { /* ok */ }
      }
      await updateDoc(doc(db, 'siteImages', imageId), { customUrl: '', customPath: '' })
    } catch (err) {
      console.error('Revert failed:', err)
      alert('Revert failed. Please try again.')
    } finally {
      setRevertingId(null)
    }
  }, [allImages])

  const handleResetAll = useCallback(async () => {
    setResettingAll(true)
    try {
      const customImages = pageImages.filter((img) => img.customUrl)
      for (const img of customImages) {
        if (img.customPath) {
          try { await deleteObject(ref(storage, img.customPath)) } catch { /* ok */ }
        }
        await updateDoc(doc(db, 'siteImages', img.id), { customUrl: '', customPath: '' })
      }
    } catch (err) {
      console.error('Reset all failed:', err)
      alert('Reset failed. Please try again.')
    } finally {
      setResettingAll(false)
      setShowResetConfirm(false)
    }
  }, [pageImages])

  const getGridClass = (sectionName: string, count: number): string => {
    const isFullWidth = FULL_WIDTH_SECTIONS.has(sectionName) || count === 1
    if (isFullWidth) return 'grid-cols-1'
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2'
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 text-cyan-500 animate-spin" />
        <span className="ml-2 text-slate-500">Loading site images...</span>
      </div>
    )
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* ═══ STATS ROW ═══ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {[
          { label: 'Total Images', value: totalImages, icon: ImageIcon, iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
          { label: 'Custom Uploads', value: customCount, icon: Upload, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
          { label: 'Stock Images', value: stockCount, icon: Image, iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
          { label: 'Pages', value: pageCount, icon: FileText, iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-5 flex items-center justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
              <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconColor}`} />
            </div>
          </div>
        ))}
      </div>

      {/* ═══ TOOLBAR: Page Tabs + Reset ═══ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="overflow-x-auto -mx-1 px-1 pb-1">
          <div className="inline-flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 min-w-max">
            {PAGE_TABS.map((tab) => {
              const isActive = activeTab === tab.key
              const count = pageCounts[tab.key] || 0
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[12px] sm:text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm font-semibold ring-1 ring-slate-200/60'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`inline-flex items-center justify-center min-w-[18px] sm:min-w-[20px] h-[18px] sm:h-5 px-1 sm:px-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold ${
                      isActive
                        ? 'bg-cyan-100 text-cyan-700'
                        : 'bg-slate-200/70 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <button
          onClick={() => setShowResetConfirm(true)}
          disabled={!pageImages.some((img) => img.customUrl)}
          className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-sm font-medium text-red-600 border border-red-200 bg-white hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">Reset All to Stock</span>
          <span className="sm:hidden">Reset All</span>
        </button>
      </div>

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">Reset all {activeTab} images to stock?</p>
            <p className="text-xs sm:text-sm text-red-600 mt-1">This will delete all custom uploads for this page and revert to the original Unsplash images.</p>
            <div className="flex gap-2 mt-3">
              <button onClick={handleResetAll} disabled={resettingAll} className="px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 disabled:opacity-50">
                {resettingAll ? 'Resetting...' : 'Yes, Reset All'}
              </button>
              <button onClick={() => setShowResetConfirm(false)} className="px-4 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-300 hover:bg-slate-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ IMAGE SECTIONS ═══ */}
      <div className="space-y-8">
        {Object.entries(sections).map(([sectionName, sectionImages]) => {
          const isFullWidth = FULL_WIDTH_SECTIONS.has(sectionName) || sectionImages.length === 1
          const gridClass = getGridClass(sectionName, sectionImages.length)

          return (
            <div key={sectionName}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-cyan-100">
                <Layers className="w-4 h-4 text-cyan-500" />
                <h3 className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{sectionName}</h3>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-medium">{sectionImages.length}</span>
              </div>

              <div className={`grid gap-3 sm:gap-4 ${gridClass}`}>
                {sectionImages.map((img) => {
                  const isUploading = uploadingId === img.id
                  const isReverting = revertingId === img.id
                  const isCustom = !!img.customUrl
                  const displayUrl = img.customUrl || img.stockUrl

                  return (
                    <div
                      key={img.id}
                      className={`group relative bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                        isCustom
                          ? 'border-2 border-emerald-300 hover:border-emerald-400'
                          : 'border border-slate-200 hover:border-cyan-400'
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden cursor-pointer ${isFullWidth ? 'h-40 sm:h-56' : 'h-36 sm:h-44'}`}
                        onClick={() => setPreviewImage(img.id)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={displayUrl}
                          alt={img.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />

                        {(isUploading || isReverting) && (
                          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center z-20">
                            <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-spin" />
                            <span className="ml-2 text-white text-xs sm:text-sm font-medium">
                              {isUploading ? 'Uploading...' : 'Reverting...'}
                            </span>
                          </div>
                        )}

                        {!isUploading && !isReverting && (
                          <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setPreviewImage(img.id)
                              }}
                              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
                            >
                              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              Preview
                            </button>
                          </div>
                        )}

                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                          <span
                            className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold shadow-md ${
                              isCustom ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                            }`}
                          >
                            {isCustom && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                            {isCustom ? 'CUSTOM' : 'STOCK'}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4">
                        <div className="font-semibold text-xs sm:text-sm text-slate-900 truncate">{img.name}</div>
                        <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">{img.location}</div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-2.5 pt-2 sm:pt-2.5 border-t border-slate-100">
                          <span className="text-[10px] sm:text-[11px] text-slate-400">{img.recommendedSize}</span>
                          <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
                          <span className={`text-[10px] sm:text-[11px] font-semibold ${isCustom ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {isCustom ? 'Custom ✓' : 'Unsplash'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ═══ INFO BOX ═══ */}
      <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
          <Info className="w-4 h-4 text-cyan-600" />
        </div>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-700">How it works:</span>{' '}
          Each image slot shows where it&apos;s used on the live site. Click any card to preview full-size.
          Use &quot;Replace&quot; to upload your own photo — it goes to Firebase Storage and the site updates
          instantly. &quot;Revert&quot; restores the original stock image.
        </p>
      </div>

      {/* ═══ FLOATING LIVE PREVIEW BUTTON ═══ */}
      <button
        onClick={() => {
          const url = { home: '/', services: '/services', about: '/about', portfolio: '/portfolio', contact: '/contact' }[activeTab] || '/'
          window.open(url, '_blank')
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        style={{ zIndex: 50 }}
      >
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">Live Preview</span>
        <span className="sm:hidden">Preview</span>
      </button>

      {/* ═══ IMAGE PREVIEW MODAL ═══ */}
      <ImagePreviewModal
        image={previewImage ? allImages.find((i) => i.id === previewImage) ?? null : null}
        onClose={() => setPreviewImage(null)}
        onReplace={(id) => {
          handleReplace(id)
        }}
        onRevert={(id) => {
          handleRevert(id)
        }}
        isUploading={uploadingId === previewImage}
        isReverting={revertingId === previewImage}
      />
    </>
  )
}