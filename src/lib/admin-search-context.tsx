'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface AdminSearchContextType {
  searchValue: string
  setSearchValue: (value: string) => void
}

const AdminSearchContext = createContext<AdminSearchContextType>({
  searchValue: '',
  setSearchValue: () => {},
})

export function AdminSearchProvider({ children }: { children: ReactNode }) {
  const [searchValue, setSearchValue] = useState('')
  return (
    <AdminSearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </AdminSearchContext.Provider>
  )
}

export function useAdminSearch() {
  return useContext(AdminSearchContext)
}