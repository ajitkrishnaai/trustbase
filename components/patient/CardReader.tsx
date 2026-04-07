'use client'

import { useState } from 'react'
import { ContentCard } from '@/lib/supabase/types'
import { Button } from '../ui/Button'

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
      // Mark as completed
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
        <div className="text-8xl mb-6 animate-bounce">🎉</div>
        <h2 className="text-3xl font-bold text-[var(--dark-slate)] mb-4">
          You're all set!
        </h2>
        <p className="text-lg text-[var(--slate-secondary)] max-w-md">
          You've completed all the educational content. See you at your appointment!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[var(--card-bg)] rounded-[20px] p-8 md:p-12 shadow-[var(--card-shadow)] border border-[var(--border-subtle)] min-h-[400px] md:min-h-[480px] flex flex-col items-center text-center">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'var(--icon-bg)' }}
      >
        <span className="text-4xl">{currentCard.icon}</span>
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
          className="mb-8 p-4 rounded-xl border"
          style={{
            background: 'var(--icon-bg)',
            borderColor: 'var(--sage-light)',
          }}
        >
          <div className="text-base font-semibold text-[var(--teal-primary)]">
            📅 {formatDate(appointmentDate)}
          </div>
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
            ← Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          className="h-12 px-8 text-base flex-[2] max-w-[200px] shadow-[0_4px_12px_rgba(13,148,136,0.3)]"
        >
          {isLastCard ? 'Done' : 'Next →'}
        </Button>
      </div>
    </div>
  )
}
