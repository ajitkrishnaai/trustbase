import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-sm font-medium text-[var(--dark-slate)] mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`w-full h-10 px-3 border border-[var(--border-medium)] rounded-md text-base text-[var(--dark-slate)] bg-[var(--warm-white)] transition-all duration-200 focus:outline-none focus:border-[var(--teal-primary)] focus:shadow-[0_0_0_3px_rgba(13,148,136,0.1)] focus:bg-white ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1.5">
          <span>⚠️</span>
          {error}
        </p>
      )}
    </div>
  )
}
