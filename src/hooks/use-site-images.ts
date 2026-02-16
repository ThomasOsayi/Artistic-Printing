'use client'

import { useState, useEffect, useCallback } from 'react'
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { SiteImage } from '@/lib/admin-data'

export function useSiteImages(page: string) {
  const [images, setImages] = useState<Map<string, SiteImage>>(new Map())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'siteImages'),
      where('page', '==', page),
      orderBy('order', 'asc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const map = new Map<string, SiteImage>()
      snapshot.docs.forEach((doc) => {
        const data = doc.data()
        map.set(doc.id, {
          id: doc.id,
          page: data.page,
          section: data.section,
          name: data.name,
          location: data.location,
          stockUrl: data.stockUrl,
          customUrl: data.customUrl || '',
          customPath: data.customPath || '',
          recommendedSize: data.recommendedSize || '',
          order: data.order ?? 0,
        })
      })
      setImages(map)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [page])

  const getImageUrl = useCallback((key: string): string => {
    const img = images.get(key)
    if (!img) return ''
    return img.customUrl || img.stockUrl
  }, [images])

  return { images, loading, getImageUrl }
}
