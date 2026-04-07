import React from 'react'

interface BadgeProps {
  status: 'not_sent' | 'sent' | 'opened' | 'completed'
}

export function Badge({ status }: BadgeProps) {
  const config = {
    not_sent: {
      bg: 'rgba(148, 163, 184, 0.1)',
      color: 'var(--status-not-sent)',
      icon: '○',
      label: 'Not Sent',
    },
    sent: {
      bg: 'rgba(59, 130, 246, 0.1)',
      color: 'var(--status-sent)',
      icon: '→',
      label: 'Sent',
    },
    opened: {
      bg: 'rgba(245, 158, 11, 0.1)',
      color: 'var(--status-opened)',
      icon: '👁',
      label: 'Opened',
    },
    completed: {
      bg: 'rgba(16, 185, 129, 0.1)',
      color: 'var(--status-completed)',
      icon: '✓',
      label: 'Completed',
    },
  }

  const { bg, color, icon, label } = config[status]

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[13px] font-medium"
      style={{ backgroundColor: bg, color }}
    >
      <span>{icon}</span>
      {label}
    </span>
  )
}
