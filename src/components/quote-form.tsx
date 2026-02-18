"use client"

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

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

    const form = e.currentTarget
    const formData = new FormData(form)

    const quoteData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: '',
      message: formData.get('projectDetails') as string,
      status: 'new',
    }

    try {
      await addDoc(collection(db, 'quotes'), {
        ...quoteData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })

      // Send email notification (fire-and-forget — don't block the success message)
      fetch('/api/send-quote-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData),
      }).catch((err) => console.error('Email notification failed:', err))

      setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.')
      form.reset()
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