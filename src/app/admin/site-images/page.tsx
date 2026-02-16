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
  Smartphone,
  Loader2,
  ImageIcon,
  Globe,
  Layers,
  AlertTriangle,
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
  'CTA Background',
  'Features Background',
  'Capabilities Background',
])

export default function SiteImagesPage() {
  const [allImages, setAllImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('home')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [uploadingId, setUploadingId] = useState<string | null>(null)
  const [revertingId, setRevertingId] = useState<string | null>(null)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [resettingAll, setResettingAll] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const pendingImageId = useRef<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Seed on first load
  useEffect(() => {
    seedSiteImages().catch(console.error)
  }, [])

  // Real-time listener for all images
  useEffect(() => {
    const q = query(collection(db, 'siteImages'), orderBy('order', 'asc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const imgs = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as SiteImage[]
      setAllImages(imgs)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Filter images for active tab
  const pageImages = allImages.filter((img) => img.page === activeTab)

  // Group by section
  const sections = pageImages.reduce<Record<string, SiteImage[]>>((acc, img) => {
    if (!acc[img.section]) acc[img.section] = []
    acc[img.section].push(img)
    return acc
  }, {})

  // Stats
  const totalImages = allImages.length
  const customCount = allImages.filter((img) => img.customUrl).length
  const stockCount = totalImages - customCount
  const pageCount = new Set(allImages.map((img) => img.page)).size

  // Page tab counts
  const pageCounts = PAGE_TABS.reduce<Record<string, number>>((acc, tab) => {
    acc[tab.key] = allImages.filter((img) => img.page === tab.key).length
    return acc
  }, {})

  // Refresh iframe
  const refreshPreview = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }, [])

  // Handle file selection
  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const imageId = pendingImageId.current
    if (!file || !imageId) return

    // Reset input
    e.target.value = ''

    // Validate
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
      // Find existing image to check for old custom path
      const existing = allImages.find((img) => img.id === imageId)

      // Delete old custom image if exists
      if (existing?.customPath) {
        try {
          await deleteObject(ref(storage, existing.customPath))
        } catch {
          // Old file may not exist, ignore
        }
      }

      // Upload new file
      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
      const storagePath = `site-images/${imageId}-${Date.now()}.${ext}`
      const storageRef = ref(storage, storagePath)
      await uploadBytes(storageRef, file)
      const downloadUrl = await getDownloadURL(storageRef)

      // Update Firestore
      await updateDoc(doc(db, 'siteImages', imageId), {
        customUrl: downloadUrl,
        customPath: storagePath,
      })

      // Refresh preview after short delay for Firestore propagation
      setTimeout(refreshPreview, 1000)
    } catch (err) {
      console.error('Upload failed:', err)
      alert('Upload failed. Please try again.')
    } finally {
      setUploadingId(null)
      pendingImageId.current = null
    }
  }, [allImages, refreshPreview])

  // Replace handler
  const handleReplace = useCallback((imageId: string) => {
    pendingImageId.current = imageId
    fileInputRef.current?.click()
  }, [])

  // Revert handler
  const handleRevert = useCallback(async (imageId: string) => {
    const img = allImages.find((i) => i.id === imageId)
    if (!img?.customUrl) return

    setRevertingId(imageId)
    try {
      if (img.customPath) {
        try {
          await deleteObject(ref(storage, img.customPath))
        } catch {
          // File may not exist
        }
      }
      await updateDoc(doc(db, 'siteImages', imageId), {
        customUrl: '',
        customPath: '',
      })
      setTimeout(refreshPreview, 1000)
    } catch (err) {
      console.error('Revert failed:', err)
      alert('Revert failed. Please try again.')
    } finally {
      setRevertingId(null)
    }
  }, [allImages, refreshPreview])

  // Reset all to stock for active tab
  const handleResetAll = useCallback(async () => {
    setResettingAll(true)
    try {
      const customImages = pageImages.filter((img) => img.customUrl)
      for (const img of customImages) {
        if (img.customPath) {
          try {
            await deleteObject(ref(storage, img.customPath))
          } catch {
            // Ignore missing files
          }
        }
        await updateDoc(doc(db, 'siteImages', img.id), {
          customUrl: '',
          customPath: '',
        })
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
    <div className="flex gap-6">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* ═══ LEFT PANEL — Image Management ═══ */}
      <div className="flex-1 min-w-0">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Images', value: totalImages, icon: ImageIcon, color: 'bg-cyan-100 text-cyan-600' },
            { label: 'Custom Uploads', value: customCount, icon: Upload, color: 'bg-emerald-100 text-emerald-600' },
            { label: 'Stock Images', value: stockCount, icon: Image, color: 'bg-amber-100 text-amber-600' },
            { label: 'Pages', value: pageCount, icon: Globe, color: 'bg-purple-100 text-purple-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page Tabs + Reset All */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            {PAGE_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-xs opacity-60">{pageCounts[tab.key] || 0}</span>
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

        {/* Reset Confirmation Dialog */}
        {showResetConfirm && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">
                Reset all {activeTab} images to stock?
              </p>
              <p className="text-sm text-red-600 mt-1">
                This will delete all custom uploads for this page and revert to the original Unsplash images.
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleResetAll}
                  disabled={resettingAll}
                  className="px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 disabled:opacity-50"
                >
                  {resettingAll ? 'Resetting...' : 'Yes, Reset All'}
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-300 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Sections */}
        <div className="space-y-8">
          {Object.entries(sections).map(([sectionName, sectionImages]) => {
            const isFullWidth = FULL_WIDTH_SECTIONS.has(sectionName)
            return (
              <div key={sectionName}>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-slate-400" />
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                    {sectionName}
                  </h3>
                  <span className="text-xs text-slate-400">({sectionImages.length})</span>
                </div>

                <div className={`grid gap-4 ${isFullWidth ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {sectionImages.map((img) => {
                    const isUploading = uploadingId === img.id
                    const isReverting = revertingId === img.id
                    const isCustom = !!img.customUrl
                    const displayUrl = img.customUrl || img.stockUrl

                    return (
                      <div
                        key={img.id}
                        className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
                      >
                        {/* Thumbnail */}
                        <div className={`relative overflow-hidden ${isFullWidth ? 'h-40' : 'h-28'}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={displayUrl}
                            alt={img.name}
                            className="w-full h-full object-cover"
                          />

                          {/* Upload/Revert spinner overlay */}
                          {(isUploading || isReverting) && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <Loader2 className="w-6 h-6 text-white animate-spin" />
                              <span className="ml-2 text-white text-sm">
                                {isUploading ? 'Uploading...' : 'Reverting...'}
                              </span>
                            </div>
                          )}

                          {/* Hover overlay with actions */}
                          {!isUploading && !isReverting && (
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                              <button
                                onClick={() => handleReplace(img.id)}
                                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg hover:bg-cyan-400 transition-colors"
                              >
                                <Upload className="w-4 h-4" />
                                Replace
                              </button>
                              <button
                                onClick={() => handleRevert(img.id)}
                                disabled={!isCustom}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                              >
                                <RotateCcw className="w-4 h-4" />
                                Revert
                              </button>
                            </div>
                          )}

                          {/* Status badge */}
                          <div className="absolute top-2 right-2">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                isCustom
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {isCustom ? 'Custom' : 'Stock'}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-3">
                          <div className="font-medium text-sm text-slate-900">{img.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{img.location}</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Recommended: {img.recommendedSize}
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
      </div>

      {/* ═══ RIGHT PANEL — Live Preview ═══ */}
      <div className="hidden xl:block w-[420px] flex-shrink-0">
        <div className="sticky top-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-3 px-3 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-500 flex-1 max-w-[200px] truncate">
                  artisticprinting.com{PAGE_PREVIEW_URLS[activeTab]}
                </div>
              </div>

              {/* Desktop / Mobile toggle */}
              <div className="flex gap-1 bg-slate-200 p-0.5 rounded-lg">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`p-1.5 rounded-md transition-colors ${
                    previewMode === 'desktop' ? 'bg-white shadow-sm text-cyan-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-1.5 rounded-md transition-colors ${
                    previewMode === 'mobile' ? 'bg-white shadow-sm text-cyan-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Iframe container */}
            <div
              className="relative bg-slate-100 overflow-hidden"
              style={{
                height: previewMode === 'desktop' ? `${900 * 0.31}px` : `${844 * 0.47}px`,
              }}
            >
              <iframe
                ref={iframeRef}
                src={PAGE_PREVIEW_URLS[activeTab]}
                title="Live Preview"
                className="absolute top-0 left-0 border-0"
                style={{
                  width: previewMode === 'desktop' ? '1280px' : '390px',
                  height: previewMode === 'desktop' ? '900px' : '844px',
                  transform: previewMode === 'desktop' ? 'scale(0.31)' : 'scale(0.47)',
                  transformOrigin: 'top left',
                }}
              />
            </div>

            {/* Tip */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-200">
              <p className="text-[11px] text-slate-400 text-center">
                Changes update in real-time. The preview shows exactly what visitors see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
