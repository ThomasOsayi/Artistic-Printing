'use client'

import { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import type { SiteImage } from '@/lib/admin-data'
import {
  X,
  Upload,
  RotateCcw,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ImageIcon,
} from 'lucide-react'

const PAGE_URLS: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  portfolio: '/portfolio',
  contact: '/contact',
}

interface ImagePreviewModalProps {
  image: SiteImage | null
  onClose: () => void
  onReplace: (imageId: string) => void
  onRevert: (imageId: string) => void
  isUploading: boolean
  isReverting: boolean
}

export default function ImagePreviewModal({
  image,
  onClose,
  onReplace,
  onRevert,
  isUploading,
  isReverting,
}: ImagePreviewModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!image) return
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [image, handleEsc])

  if (!image || !mounted) return null

  const isCustom = !!image.customUrl
  const displayUrl = image.customUrl || image.stockUrl
  const liveUrl = PAGE_URLS[image.page] || '/'

  const modal = (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999 }}>
      {/* Backdrop */}
      <div
        style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Modal container — full screen on mobile, centered on desktop */}
      <div className="fixed inset-0 flex items-end sm:items-center justify-center sm:p-6 md:p-10 lg:p-16">
        <div
          className="bg-white w-full sm:rounded-2xl sm:shadow-2xl sm:max-w-[860px] flex flex-col rounded-t-2xl sm:rounded-b-2xl"
          style={{ maxHeight: 'min(95vh, 600px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">{image.name}</h2>
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-500 border border-slate-200 whitespace-nowrap">
                {image.section}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* BODY — stacks on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row flex-1 min-h-0 overflow-hidden">
            {/* Image */}
            <div className="flex-1 bg-slate-950 relative flex items-center justify-center min-w-0 min-h-[200px] sm:min-h-0">
              <img
                src={displayUrl}
                alt={image.name}
                className="max-w-full max-h-full object-contain p-3 sm:p-4"
              />

              {/* Zoom controls */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/80 rounded-xl p-1"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <button
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.open(displayUrl, '_blank')}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Open full size"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>

              {/* Loading overlay */}
              {(isUploading || isReverting) && (
                <div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3" style={{ backdropFilter: 'blur(8px)' }}>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-white text-sm font-medium">
                      {isUploading ? 'Uploading...' : 'Reverting...'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Details Panel — below image on mobile, right side on desktop */}
            <div className="w-full sm:w-[260px] md:w-[290px] flex-shrink-0 sm:border-l border-t sm:border-t-0 border-slate-200 bg-white flex flex-col min-h-0">
              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-5">
                {/* Mobile: compact grid layout */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Image Name</div>
                    <div className="text-sm font-semibold text-slate-900">{image.name}</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-sm text-slate-600">{image.location}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Dimensions</div>
                    <div className="text-sm font-medium text-slate-900">{image.recommendedSize}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Source</div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                      isCustom
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      <ImageIcon className="w-3 h-3" />
                      {isCustom ? 'Custom' : 'Unsplash'}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Status</div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isCustom ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <span className="text-sm text-slate-600">
                      {isCustom ? 'Using custom image' : 'Using stock image'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0 p-4 sm:p-5 pt-3 sm:pt-4 space-y-2 border-t border-slate-100">
                <div className="flex gap-2 sm:flex-col">
                  <button
                    onClick={() => onReplace(image.id)}
                    disabled={isUploading || isReverting}
                    className="flex-1 sm:w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-cyan-500 text-white text-sm font-semibold rounded-xl hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    <Upload className="w-4 h-4" />
                    Replace
                  </button>

                  <button
                    onClick={() => window.open(liveUrl, '_blank')}
                    className="flex-1 sm:w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">View on Live Site</span>
                    <span className="sm:hidden">Live Site</span>
                  </button>
                </div>

                {isCustom && (
                  <button
                    onClick={() => onRevert(image.id)}
                    disabled={isUploading || isReverting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-white text-red-600 text-sm font-semibold rounded-xl border border-slate-200 hover:bg-red-50 hover:border-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Revert to Stock
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}