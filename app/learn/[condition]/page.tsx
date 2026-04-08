import { notFound } from 'next/navigation'
import { PatientViewerClient } from '@/app/patient/[token]/PatientViewerClient'
import { demoContent, demoAppointmentDates } from '@/lib/demo-content'

interface PageProps {
  params: Promise<{ condition: string }>
}

export default async function LearnPage({ params }: PageProps) {
  const { condition } = await params

  const cards = demoContent[condition]
  if (!cards) {
    notFound()
  }

  return (
    <PatientViewerClient
      patientId={`demo-${condition}`}
      cards={cards}
      appointmentDate={demoAppointmentDates[condition]}
    />
  )
}
