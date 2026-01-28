"use client"

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface QuoteFormProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function QuoteForm({ variant = 'light', className = '' }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const inputClasses =
    variant === 'dark'
      ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
      : 'bg-white border-slate-200'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectDetails: formData.get('projectDetails'),
    }

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/quote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      
      // Simulate API call - data will be used when API is implemented
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.')
      e.currentTarget.reset()
    } catch {
      setSubmitMessage('Something went wrong. Please call us at (323) 939-8911.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input 
          name="firstName" 
          placeholder="First Name" 
          className={inputClasses} 
          required 
        />
        <Input 
          name="lastName" 
          placeholder="Last Name" 
          className={inputClasses} 
          required 
        />
      </div>
      <Input 
        name="email" 
        type="email" 
        placeholder="Email" 
        className={inputClasses} 
        required 
      />
      <Input 
        name="phone" 
        type="tel" 
        placeholder="Phone" 
        className={inputClasses} 
        required 
      />
      <Textarea
        name="projectDetails"
        placeholder="Tell us about your project..."
        className={`${inputClasses} min-h-[100px]`}
        required
      />
      {submitMessage && (
        <div className={`p-3 rounded-md text-sm ${
          submitMessage.includes('Thank you') 
            ? variant === 'dark' 
              ? 'bg-green-900/30 text-green-300' 
              : 'bg-green-50 text-green-700'
            : variant === 'dark'
              ? 'bg-red-900/30 text-red-300'
              : 'bg-red-50 text-red-700'
        }`}>
          {submitMessage}
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  )
}
