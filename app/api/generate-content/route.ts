import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { generateContentCards } from '@/lib/claude'

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

    // If content already exists, return it
    if (patient.content_json) {
      return NextResponse.json({ cards: patient.content_json })
    }

    // Generate content
    const cards = await generateContentCards(patient.visit_type)

    // Save to database
    const { error: updateError } = await supabase
      .from('patients')
      .update({ content_json: cards })
      .eq('id', patientId)

    if (updateError) {
      throw updateError
    }

    return NextResponse.json({ cards })
  } catch (error) {
    console.error('Generate content error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}
