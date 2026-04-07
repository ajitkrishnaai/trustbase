interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="sticky top-0 bg-[var(--warm-white)] px-5 pt-4 pb-3 border-b border-[var(--border-subtle)] z-50 shadow-[0_2px_8px_rgba(13,148,136,0.04)]">
      <div className="text-sm font-medium text-[var(--slate-secondary)] text-center mb-2">
        Step {currentStep} of {totalSteps}
      </div>
      <div className="w-full h-2 bg-[var(--progress-bg)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-400"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--sage-green) 0%, var(--teal-primary) 100%)',
          }}
        />
      </div>
    </div>
  )
}
