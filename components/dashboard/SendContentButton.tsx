'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'

interface SendContentButtonProps {
  patientId: string
  onSuccess: () => void
}

export function SendContentButton({ patientId, onSuccess }: SendContentButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSend = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientId }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send content')
      }

      onSuccess()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Button
        onClick={handleSend}
        disabled={loading}
        className="h-10 px-5 text-sm"
      >
        {loading ? 'Sending...' : 'Send Content'}
      </Button>
      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}
