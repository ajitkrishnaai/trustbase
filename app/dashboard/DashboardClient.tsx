'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Patient } from '@/lib/supabase/types'
import { Button } from '@/components/ui/Button'
import { PatientTable } from '@/components/dashboard/PatientTable'
import { AddPatientModal } from '@/components/dashboard/AddPatientModal'

interface DashboardClientProps {
  providerId: string
  patients: Patient[]
  engagementStats: {
    engaged: number
    total: number
  }
}

export function DashboardClient({ providerId, patients, engagementStats }: DashboardClientProps) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUpdate = () => {
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[var(--warm-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-[var(--dark-slate)]">Patients</h1>
          <Button onClick={() => setIsModalOpen(true)} className="h-10 px-5 text-[15px]">
            + Add Patient
          </Button>
        </div>

        {/* Engagement Stats */}
        {engagementStats.total > 0 && (
          <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg p-5 mb-6 shadow-[0_1px_3px_rgba(13,148,136,0.06)]">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--teal-primary)]"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              <span className="text-base font-medium text-[var(--dark-slate)]">
                <span className="text-[var(--teal-primary)] font-semibold">
                  {engagementStats.engaged} of {engagementStats.total}
                </span>{' '}
                patients engaged this week
              </span>
            </div>
          </div>
        )}

        {/* Patient Table */}
        <PatientTable patients={patients} onUpdate={handleUpdate} />

        {/* Add Patient Modal */}
        <AddPatientModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          providerId={providerId}
          onSuccess={handleUpdate}
        />
      </div>
    </div>
  )
}
