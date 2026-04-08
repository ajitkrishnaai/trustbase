import React from 'react'

interface BadgeProps {
  status: 'not_sent' | 'sent' | 'opened' | 'completed'
}

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export function Badge({ status }: BadgeProps) {
  const config = {
    not_sent: {
      bg: 'rgba(148, 163, 184, 0.1)',
      color: 'var(--status-not-sent)',
      icon: <span style={{ fontSize: '10px' }}>&#9675;</span>,
      label: 'Not Sent',
    },
    sent: {
      bg: 'rgba(59, 130, 246, 0.1)',
      color: 'var(--status-sent)',
      icon: <span style={{ fontSize: '12px' }}>&rarr;</span>,
      label: 'Sent',
    },
    opened: {
      bg: 'rgba(245, 158, 11, 0.1)',
      color: 'var(--status-opened)',
      icon: <EyeIcon />,
      label: 'Opened',
    },
    completed: {
      bg: 'rgba(16, 185, 129, 0.1)',
      color: 'var(--status-completed)',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
      label: 'Completed',
    },
  }

  const { bg, color, icon, label } = config[status]

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[13px] font-medium"
      style={{ backgroundColor: bg, color }}
    >
      <span className="flex items-center">{icon}</span>
      {label}
    </span>
  )
}
