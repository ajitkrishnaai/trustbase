import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-[var(--teal-primary)] text-white hover:bg-[var(--teal-hover)] hover:-translate-y-0.5 shadow-[0_2px_4px_rgba(13,148,136,0.2)] hover:shadow-[0_4px_8px_rgba(13,148,136,0.3)] active:translate-y-0',
    secondary: 'bg-transparent border-2 border-[var(--border-medium)] text-[var(--slate-secondary)] hover:bg-[var(--hover-row)] hover:border-[var(--sage-green)] hover:text-[var(--dark-slate)]',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
