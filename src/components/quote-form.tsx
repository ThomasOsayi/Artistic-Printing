"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface QuoteFormProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function QuoteForm({ variant = 'light', className = '' }: QuoteFormProps) {
  const inputClasses =
    variant === 'dark'
      ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
      : 'bg-white border-slate-200'

  return (
    <form className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="First Name" className={inputClasses} required />
        <Input placeholder="Last Name" className={inputClasses} required />
      </div>
      <Input type="email" placeholder="Email" className={inputClasses} required />
      <Input type="tel" placeholder="Phone" className={inputClasses} required />
      <Textarea
        placeholder="Tell us about your project..."
        className={`${inputClasses} min-h-[100px]`}
        required
      />
      <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
        Submit Request
      </Button>
    </form>
  )
}
