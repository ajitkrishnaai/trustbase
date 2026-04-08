import { Patient } from '@/lib/supabase/types'
import { DashboardClient } from './DashboardClient'

const mockPatients: Patient[] = [
  {
    id: '1',
    provider_id: 'demo-provider',
    name: 'Sarah M.',
    visit_type: 'Cholesterol Check-in',
    appointment_date: '2026-04-10',
    content_token: 'patient-a',
    content_status: 'completed',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    provider_id: 'demo-provider',
    name: 'James R.',
    visit_type: 'Diabetes Management',
    appointment_date: '2026-04-10',
    content_token: 'patient-b',
    content_status: 'opened',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    provider_id: 'demo-provider',
    name: 'Linda K.',
    visit_type: 'Blood Pressure Follow-up',
    appointment_date: '2026-04-11',
    content_token: 'patient-c',
    content_status: 'sent',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    provider_id: 'demo-provider',
    name: 'David T.',
    visit_type: 'Cholesterol Check-in',
    appointment_date: '2026-04-11',
    content_token: 'patient-d',
    content_status: 'not_sent',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    provider_id: 'demo-provider',
    name: 'Maria G.',
    visit_type: 'Blood Pressure Follow-up',
    appointment_date: '2026-04-12',
    content_token: 'patient-e',
    content_status: 'sent',
    content_json: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    provider_id: 'demo-provider',
    name: 'Robert W.',
    visit_type: 'Diabetes Management',
    appointment_date: '2026-04-12',
    content_token: 'patient-f',
    content_status: 'not_sent',
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
        engaged: 3,
        total: 6,
      }}
    />
  )
}
