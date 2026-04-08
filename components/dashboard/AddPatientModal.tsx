'use client'

import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Button } from '../ui/Button'
import { createBrowserClient } from '@/lib/supabase/client'

interface AddPatientModalProps {
  isOpen: boolean
  onClose: () => void
  providerId: string
  onSuccess: () => void
}

const visitTypeOptions = [
  { value: 'Cholesterol Management', label: 'Cholesterol Management' },
  { value: 'Diabetes Check-in', label: 'Diabetes Check-in' },
  { value: 'Preventive Care', label: 'Preventive Care' },
  { value: 'Annual Physical', label: 'Annual Physical' },
  { value: 'Follow-up Visit', label: 'Follow-up Visit' },
]

export function AddPatientModal({ isOpen, onClose, providerId, onSuccess }: AddPatientModalProps) {
  const [name, setName] = useState('')
  const [visitType, setVisitType] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!name || !visitType || !appointmentDate || !appointmentTime) {
        throw new Error('All fields are required')
      }

      const appointmentDateTime = `${appointmentDate}T${appointmentTime}:00`
      const contentToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      const supabase = createBrowserClient()
      const { error: insertError } = await supabase.from('patients').insert({
        provider_id: providerId,
        name,
        visit_type: visitType,
        appointment_date: appointmentDateTime,
        content_token: contentToken,
        content_status: 'not_sent',
      })

      if (insertError) throw insertError

      setName('')
      setVisitType('')
      setAppointmentDate('')
      setAppointmentTime('')
      onSuccess()
      onClose()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Patient">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            {error}
          </div>
        )}

        <Input
          label="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Sarah Johnson"
          required
        />

        <Select
          label="Visit Type"
          options={visitTypeOptions}
          value={visitType}
          onChange={(e) => setVisitType(e.target.value)}
          required
        />

        <Input
          type="date"
          label="Appointment Date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        <Input
          type="time"
          label="Appointment Time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />

        <div className="flex gap-3 justify-end pt-4 border-t border-[var(--border-subtle)]">
          <Button type="button" variant="secondary" onClick={onClose} className="h-10 px-5">
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="h-10 px-5">
            {loading ? 'Adding...' : 'Add Patient'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
