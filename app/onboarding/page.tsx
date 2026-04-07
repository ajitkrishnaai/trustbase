'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'

const specialtyOptions = [
  { value: 'primary_care', label: 'Primary Care' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'endocrinology', label: 'Endocrinology' },
  { value: 'internal_medicine', label: 'Internal Medicine' },
  { value: 'other', label: 'Other' },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [specialty, setSpecialty] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!specialty) {
      setError('Please select a specialty')
      return
    }

    setError('')
    setLoading(true)

    try {
      const supabase = createBrowserClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('Not authenticated')
      }

      const { error: insertError } = await supabase
        .from('providers')
        .insert({
          user_id: user.id,
          specialty,
        })

      if (insertError) throw insertError

      router.push('/dashboard')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--warm-bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--dark-slate)] mb-2">What's your specialty?</h1>
          <p className="text-[var(--slate-secondary)]">Help us personalize your experience</p>
        </div>

        <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-[var(--border-subtle)]">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 flex items-center gap-2">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Select
              label="Specialty"
              options={specialtyOptions}
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading} className="w-full h-12 text-base mt-2">
              {loading ? 'Saving...' : 'Continue to dashboard'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
