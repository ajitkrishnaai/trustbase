export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { Patient } from '@/lib/supabase/types'
import { DashboardClient } from './DashboardClient'

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient()

  // Check auth
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  // Get provider
  const { data: provider } = await supabase
    .from('providers')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (!provider) {
    redirect('/onboarding')
  }

  // Get patients
  const { data: patients } = await supabase
    .from('patients')
    .select('*')
    .eq('provider_id', provider.id)
    .order('appointment_date', { ascending: true })

  // Calculate engagement stats
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const patientsThisWeek = (patients || []).filter(
    (p: Patient) => new Date(p.created_at) >= oneWeekAgo
  )
  const engagedThisWeek = patientsThisWeek.filter(
    (p: Patient) => p.content_status === 'opened' || p.content_status === 'completed'
  )

  return (
    <DashboardClient
      providerId={provider.id}
      patients={patients || []}
      engagementStats={{
        engaged: engagedThisWeek.length,
        total: patientsThisWeek.length,
      }}
    />
  )
}
