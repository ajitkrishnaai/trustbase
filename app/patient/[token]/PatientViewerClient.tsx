'use client'

import { useState } from 'react'
import { ContentCard } from '@/lib/supabase/types'
import { ProgressBar } from '@/components/patient/ProgressBar'
import { CardReader } from '@/components/patient/CardReader'

interface PatientViewerClientProps {
  patientId: string
  cards: ContentCard[]
  appointmentDate: string
}

export function PatientViewerClient({ patientId, cards, appointmentDate }: PatientViewerClientProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [completed, setCompleted] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
  }

  return (
    <div className="min-h-screen bg-[var(--warm-bg)] flex flex-col">
      <ProgressBar currentStep={currentStep} totalSteps={cards.length} />
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-[540px]">
          <CardReader
            cards={cards}
            appointmentDate={appointmentDate}
            patientId={patientId}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  )
}
