'use client'

import { Patient } from '@/lib/supabase/types'
import { StatusBadge } from './StatusBadge'
import { SendContentButton } from './SendContentButton'

interface PatientTableProps {
  patients: Patient[]
  onUpdate: () => void
}

export function PatientTable({ patients, onUpdate }: PatientTableProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }

  if (patients.length === 0) {
    return (
      <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg p-16 text-center shadow-[0_1px_3px_rgba(13,148,136,0.06)]">
        <div className="text-6xl mb-4">👥</div>
        <h3 className="text-xl font-semibold text-[var(--dark-slate)] mb-2">No patients yet</h3>
        <p className="text-base text-[var(--slate-secondary)] max-w-md mx-auto mb-6">
          Add your first patient to start sending personalized education content.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(13,148,136,0.06)]">
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--warm-bg)] border-b border-[var(--border-medium)]">
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--slate-secondary)] uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--slate-secondary)] uppercase tracking-wider">
                Visit Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--slate-secondary)] uppercase tracking-wider">
                Appointment
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--slate-secondary)] uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-[var(--slate-secondary)] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-[var(--border-subtle)] hover:bg-[var(--hover-row)] transition-colors"
              >
                <td className="px-4 py-4 text-base font-medium text-[var(--dark-slate)]">
                  {patient.name}
                </td>
                <td className="px-4 py-4 text-base text-[var(--slate-secondary)]">
                  {patient.visit_type}
                </td>
                <td className="px-4 py-4">
                  <div className="text-base text-[var(--dark-slate)]">
                    {formatDate(patient.appointment_date)}
                  </div>
                  <div className="text-sm text-[var(--slate-tertiary)]">
                    {formatTime(patient.appointment_date)}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={patient.content_status} />
                </td>
                <td className="px-4 py-4 text-right">
                  {patient.content_status === 'not_sent' && (
                    <SendContentButton patientId={patient.id} onSuccess={onUpdate} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="p-4 border-b border-[var(--border-subtle)] last:border-b-0"
          >
            <div className="text-lg font-semibold text-[var(--dark-slate)] mb-2">
              {patient.name}
            </div>
            <div className="text-sm text-[var(--slate-secondary)] mb-3">
              {patient.visit_type}
            </div>
            <div className="flex gap-4 mb-3 text-sm">
              <span className="text-[var(--dark-slate)]">
                {formatDate(patient.appointment_date)} at {formatTime(patient.appointment_date)}
              </span>
            </div>
            <div className="mb-3">
              <StatusBadge status={patient.content_status} />
            </div>
            {patient.content_status === 'not_sent' && (
              <SendContentButton patientId={patient.id} onSuccess={onUpdate} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
