import { Badge } from '../ui/Badge'
import { Patient } from '@/lib/supabase/types'

interface StatusBadgeProps {
  status: Patient['content_status']
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge status={status} />
}
