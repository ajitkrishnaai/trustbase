import { notFound } from 'next/navigation'
import { PatientViewerClient } from './PatientViewerClient'
import { TOKEN_MAP, demoContent, demoAppointmentDates } from '@/lib/demo-content'

interface PageProps {
  params: Promise<{ token: string }>
}

export default async function PatientViewerPage({ params }: PageProps) {
  const { token } = await params

  const condition = TOKEN_MAP[token]
  if (!condition) {
    notFound()
  }

  const cards = demoContent[condition]
  const appointmentDate = demoAppointmentDates[condition]

  return (
    <PatientViewerClient
      patientId={`demo-${token}`}
      cards={cards}
      appointmentDate={appointmentDate}
    />
  )
}
