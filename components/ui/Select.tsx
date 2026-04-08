import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-sm font-medium text-[var(--dark-slate)] mb-1.5">
          {label}
        </label>
      )}
      <select
        className={`w-full h-10 px-3 border border-[var(--border-medium)] rounded-md text-base text-[var(--dark-slate)] bg-[var(--warm-white)] transition-all duration-200 focus:outline-none focus:border-[var(--teal-primary)] focus:shadow-[0_0_0_3px_rgba(13,148,136,0.1)] focus:bg-white ${className}`}
        {...props}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          {error}
        </p>
      )}
    </div>
  )
}
