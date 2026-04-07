'use client'

import { Button } from '../ui/Button'

interface ViewContentButtonProps {
  contentToken: string
}

export function ViewContentButton({ contentToken }: ViewContentButtonProps) {
  const handleView = () => {
    window.open(`/patient/${contentToken}`, '_blank', 'noopener')
  }

  return (
    <Button
      variant="secondary"
      onClick={handleView}
      className="h-10 px-5 text-sm"
    >
      View Content
    </Button>
  )
}
