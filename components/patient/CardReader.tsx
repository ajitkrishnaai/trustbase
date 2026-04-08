'use client'

import { useState } from 'react'
import { ContentCard } from '@/lib/supabase/types'
import { Button } from '../ui/Button'
import { CardIcon } from './CardIcon'

interface CardReaderProps {
  cards: ContentCard[]
  appointmentDate: string
  patientId: string
  onComplete: () => void
}

export function CardReader({ cards, appointmentDate, patientId, onComplete }: CardReaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  const currentCard = cards[currentIndex]
  const isFirstCard = currentIndex === 0
  const isLastCard = currentIndex === cards.length - 1

  const handleNext = async () => {
    if (isLastCard) {
      try {
        await fetch(`/api/patient/${patientId}/complete`, {
          method: 'PATCH',
        })
        setShowCelebration(true)
        onComplete()
      } catch (error) {
        console.error('Failed to mark as completed:', error)
      }
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleBack = () => {
    if (!isFirstCard) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  if (showCelebration) {
    return (
      <div className="bg-[var(--card-bg)] rounded-[20px] p-8 md:p-12 shadow-[var(--card-shadow)] border border-[var(--border-subtle)] min-h-[400px] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-[var(--teal-primary)]" style={{ background: 'var(--icon-bg, rgba(13,148,136,0.08))' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[var(--dark-slate)] mb-4">
          You&apos;re all set!
        </h2>
        <p className="text-lg text-[var(--slate-secondary)] max-w-md">
          You&apos;ve completed all the educational content. See you at your appointment!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[var(--card-bg)] rounded-[20px] p-8 md:p-12 shadow-[var(--card-shadow)] border border-[var(--border-subtle)] min-h-[400px] md:min-h-[480px] flex flex-col items-center text-center">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-[var(--teal-primary)]"
        style={{ background: 'var(--icon-bg, rgba(13,148,136,0.08))' }}
      >
        <CardIcon name={currentCard.icon} size={36} />
      </div>

      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-slate)] mb-4 max-w-[90%] leading-tight">
        {currentCard.headline}
      </h2>

      {/* Body */}
      <p className="text-lg md:text-xl text-[var(--slate-secondary)] leading-relaxed mb-8 max-w-full">
        {currentCard.body}
      </p>

      {/* Appointment info on last card */}
      {isLastCard && (
        <div
          className="mb-8 p-4 rounded-xl border flex items-center justify-center gap-2"
          style={{
            background: 'var(--icon-bg)',
            borderColor: 'var(--sage-light)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--teal-primary)]">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-base font-semibold text-[var(--teal-primary)]">
            {formatDate(appointmentDate)}
          </span>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 justify-center mt-auto w-full">
        {!isFirstCard && (
          <Button
            variant="secondary"
            onClick={handleBack}
            className="h-12 px-6 text-base flex-1 max-w-[140px]"
          >
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          className="h-12 px-8 text-base flex-[2] max-w-[200px] shadow-[0_4px_12px_rgba(13,148,136,0.3)]"
        >
          {isLastCard ? 'Done' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
