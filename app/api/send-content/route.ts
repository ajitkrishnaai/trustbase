import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { sendContentEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { patientId } = await request.json()

    if (!patientId) {
      return NextResponse.json({ error: 'Patient ID is required' }, { status: 400 })
    }

    // TODO: Implement proper auth
    // For MVP, we'll skip auth and trust RLS
    const supabase = createServiceClient()

    // Get patient (RLS will enforce ownership)
    const { data: patient } = await supabase
      .from('patients')
      .select('*')
      .eq('id', patientId)
      .single()

    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 })
    }

    // Generate content if not exists
    if (!patient.content_json) {
      const generateResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/generate-content`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ patientId }),
        }
      )

      if (!generateResponse.ok) {
        throw new Error('Failed to generate content')
      }

      // Refresh patient data
      const { data: updatedPatient } = await supabase
        .from('patients')
        .select('*')
        .eq('id', patientId)
        .single()

      if (updatedPatient) {
        patient.content_json = updatedPatient.content_json
      }
    }

    // Create viewer URL
    const viewerUrl = `${process.env.NEXT_PUBLIC_APP_URL}/patient/${patient.content_token}`

    // For MVP, we need to get provider email somehow
    // Get provider to get user email
    const { data: provider } = await supabase
      .from('providers')
      .select('user_id')
      .eq('id', patient.provider_id)
      .single()

    let userEmail = 'demo@trustbase.ajitkrishna.com'
    if (provider) {
      const { data: user } = await supabase.auth.admin.getUserById(provider.user_id)
      if (user?.user?.email) {
        userEmail = user.user.email
      }
    }

    // Send email
    await sendContentEmail({
      to: userEmail,
      patientName: patient.name,
      visitType: patient.visit_type,
      viewerUrl,
    })

    // Update patient status
    const { error: updateError } = await supabase
      .from('patients')
      .update({ content_status: 'sent' })
      .eq('id', patientId)

    if (updateError) {
      throw updateError
    }

    return NextResponse.json({ success: true, viewerUrl })
  } catch (error) {
    console.error('Send content error:', error)
    return NextResponse.json(
      { error: 'Failed to send content' },
      { status: 500 }
    )
  }
}
