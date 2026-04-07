import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params
    const supabase = await createServiceClient()

    const { error } = await supabase
      .from('patients')
      .update({ content_status: 'completed' })
      .eq('id', id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Complete patient error:', error)
    return NextResponse.json(
      { error: 'Failed to mark as completed' },
      { status: 500 }
    )
  }
}
