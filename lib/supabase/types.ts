export type Provider = {
  id: string
  user_id: string
  specialty: string | null
  created_at: string
}

export type Patient = {
  id: string
  provider_id: string
  name: string
  visit_type: string
  appointment_date: string
  content_token: string
  content_status: 'not_sent' | 'sent' | 'opened' | 'completed'
  content_json: ContentCard[] | null
  created_at: string
}

export type ContentCard = {
  icon: string
  headline: string
  body: string
}
