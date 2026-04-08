import { Patient } from '@/lib/supabase/types'
import { DashboardClient } from './DashboardClient'

const mockPatients: Patient[] = [
  {
    id: 'demo-1',
    provider_id: 'demo-provider',
    name: 'Sarah Johnson',
    visit_type: 'Cholesterol Management',
    appointment_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    content_token: 'cholesterol',
    content_status: 'opened',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'demo-2',
    provider_id: 'demo-provider',
    name: 'Michael Chen',
    visit_type: 'Diabetes Check-in',
    appointment_date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    content_token: 'diabetes',
    content_status: 'sent',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'demo-3',
    provider_id: 'demo-provider',
    name: 'Emily Rodriguez',
    visit_type: 'Preventive Care',
    appointment_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    content_token: 'demo-token-3',
    content_status: 'not_sent',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: 'demo-4',
    provider_id: 'demo-provider',
    name: 'James Williams',
    visit_type: 'Annual Physical',
    appointment_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    content_token: 'hypertension',
    content_status: 'completed',
    content_json: null,
    created_at: new Date().toISOString(),
  },
]

export default function DashboardPage() {
  return (
    <DashboardClient
      providerId="demo-provider"
      patients={mockPatients}
      engagementStats={{
        engaged: 2,
        total: 4,
      }}
    />
  )
}
