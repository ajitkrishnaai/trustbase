import { notFound } from 'next/navigation'
import { createServiceClient } from '@/lib/supabase/server'
import { PatientViewerClient } from './PatientViewerClient'

interface PageProps {
  params: Promise<{ token: string }>
}

export default async function PatientViewerPage({ params }: PageProps) {
  const { token } = await params
  const supabase = await createServiceClient()

  // Get patient by content_token
  const { data: patient } = await supabase
    .from('patients')
    .select('*')
    .eq('content_token', token)
    .single()

  if (!patient || !patient.content_json) {
    notFound()
  }

  // Update status to 'opened' if it was 'sent'
  if (patient.content_status === 'sent') {
    await supabase
      .from('patients')
      .update({ content_status: 'opened' })
      .eq('id', patient.id)
  }

  return (
    <PatientViewerClient
      patientId={patient.id}
      cards={patient.content_json}
      appointmentDate={patient.appointment_date}
    />
  )
}
