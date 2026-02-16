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
  Monitor,
  Loader2,
  ImageIcon,
  Globe,
  Layers,
  AlertTriangle,
  Check,
  X,
  Info,
} from 'lucide-react'

const PAGE_TABS = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'about', label: 'About' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'contact', label: 'Contact' },
]

const PAGE_PREVIEW_URLS: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  portfolio: '/portfolio',
  contact: '/contact',
}

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
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [uploadingId, setUploadingId] = useState<string | null>(null)
  const [revertingId, setRevertingId] = useState<string | null>(null)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [resettingAll, setResettingAll] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const pendingImageId = useRef<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

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

  const refreshPreview = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }, [])

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
      setTimeout(refreshPreview, 1000)
    } catch (err) {
      console.error('Upload failed:', err)
      alert('Upload failed. Please try again.')
    } finally {
      setUploadingId(null)
      pendingImageId.current = null
    }
  }, [allImages, refreshPreview])

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
      setTimeout(refreshPreview, 1000)
    } catch (err) {
      console.error('Revert failed:', err)
      alert('Revert failed. Please try again.')
    } finally {
      setRevertingId(null)
    }
  }, [allImages, refreshPreview])

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
      setTimeout(refreshPreview, 1000)
    } catch (err) {
      console.error('Reset all failed:', err)
      alert('Reset failed. Please try again.')
    } finally {
      setResettingAll(false)
      setShowResetConfirm(false)
    }
  }, [pageImages, refreshPreview])

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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Images', sub: `Across ${pageCount} pages`, value: totalImages, icon: ImageIcon, iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
          { label: 'Custom Uploads', sub: 'Replaced stock', value: customCount, icon: Upload, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
          { label: 'Stock Images', sub: 'Unsplash defaults', value: stockCount, icon: Image, iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
          { label: 'Pages', sub: 'With images', value: pageCount, icon: Globe, iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              <div className="text-2xl font-bold text-slate-900 mt-0.5">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
            <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
          </div>
        ))}
      </div>

      {/* ═══ TOOLBAR ═══ */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 flex items-center justify-between flex-wrap gap-3">
        <div className="inline-flex gap-0.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {PAGE_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              {tab.label}
              <span className={`ml-1 text-xs ${activeTab === tab.key ? 'text-slate-400' : 'text-slate-400'}`}>
                {pageCounts[tab.key] || 0}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowResetConfirm(true)}
          disabled={!pageImages.some((img) => img.customUrl)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-4 h-4" />
          Reset All to Stock
        </button>
      </div>

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">Reset all {activeTab} images to stock?</p>
            <p className="text-sm text-red-600 mt-1">This will delete all custom uploads for this page and revert to the original Unsplash images.</p>
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
          return (
            <div key={sectionName}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-cyan-100">
                <Layers className="w-4 h-4 text-cyan-500" />
                <h3 className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{sectionName}</h3>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-medium">{sectionImages.length}</span>
              </div>

              <div className={`grid gap-4 ${isFullWidth ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
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
                      <div className={`relative overflow-hidden ${isFullWidth ? 'h-56' : 'h-40'}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={displayUrl}
                          alt={img.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />

                        {(isUploading || isReverting) && (
                          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center z-20">
                            <Loader2 className="w-6 h-6 text-white animate-spin" />
                            <span className="ml-2 text-white text-sm font-medium">
                              {isUploading ? 'Uploading...' : 'Reverting...'}
                            </span>
                          </div>
                        )}

                        {!isUploading && !isReverting && (
                          <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-10">
                            <button
                              onClick={() => handleReplace(img.id)}
                              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-colors shadow-lg"
                            >
                              <Upload className="w-4 h-4" />
                              Replace
                            </button>
                            {isCustom && (
                              <button
                                onClick={() => handleRevert(img.id)}
                                className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
                              >
                                <RotateCcw className="w-4 h-4" />
                                Revert
                              </button>
                            )}
                          </div>
                        )}

                        <div className="absolute top-3 right-3 z-20">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md ${
                              isCustom ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                            }`}
                          >
                            {isCustom && <Check className="w-3 h-3" />}
                            {isCustom ? 'Custom' : 'Stock'}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="font-semibold text-sm text-slate-900">{img.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{img.location}</div>
                        <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-slate-100">
                          <span className="text-[11px] text-slate-400">{img.recommendedSize}</span>
                          <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
                          <span className={`text-[11px] font-semibold ${isCustom ? 'text-emerald-600' : 'text-amber-600'}`}>
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
        <p className="text-sm text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-700">How it works:</span>{' '}
          Each image slot shows where it&apos;s used on the live site. Click &quot;Replace&quot; to upload your own photo — it
          goes to Firebase Storage and the site updates instantly. &quot;Revert&quot; restores the original Unsplash stock image.
          Orange badge = stock, Green badge = your custom upload.
        </p>
      </div>

      {/* ═══ FLOATING PREVIEW BUTTON ═══ */}
      <button
        onClick={() => setPreviewOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <Monitor className="w-4 h-4" />
        Live Preview
      </button>

      {/* ═══ PREVIEW SLIDE-OVER DRAWER ═══ */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          previewOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setPreviewOpen(false)}
      />
      <div
        className={`fixed top-0 bottom-0 right-0 w-[520px] bg-white z-[101] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          previewOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <h3 className="text-[15px] font-bold text-slate-900">Live Preview</h3>
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Live updates
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  previewMode === 'desktop' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Desktop
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  previewMode === 'mobile' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Mobile
              </button>
            </div>
            <button
              onClick={() => setPreviewOpen(false)}
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-5 py-2.5 border-b border-slate-200 bg-slate-50/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28CA41' }} />
          </div>
          <div className="flex-1 px-3 py-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-500 truncate">
            artisticprinting.com{PAGE_PREVIEW_URLS[activeTab]}
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 bg-slate-100 overflow-hidden relative">
          {previewMode === 'desktop' ? (
            <iframe
              ref={iframeRef}
              src={PAGE_PREVIEW_URLS[activeTab]}
              title="Live Preview"
              className="absolute top-0 left-0 border-0"
              style={{ width: '1280px', height: '900px', transform: 'scale(0.39)', transformOrigin: 'top left' }}
            />
          ) : (
            <iframe
              ref={iframeRef}
              src={PAGE_PREVIEW_URLS[activeTab]}
              title="Live Preview"
              className="absolute top-0 border-0"
              style={{
                width: '390px', height: '844px',
                transform: 'scale(0.58)', transformOrigin: 'top center',
                left: '50%', marginLeft: '-195px',
              }}
            />
          )}
        </div>

        {/* Tip */}
        <div className="px-5 py-3 bg-amber-50 border-t border-amber-100 text-center">
          <p className="text-[11px] text-amber-700 leading-relaxed">
            💡 Changes update in real-time. Upload or revert an image to see it change here instantly.
          </p>
        </div>
      </div>
    </>
  )
}