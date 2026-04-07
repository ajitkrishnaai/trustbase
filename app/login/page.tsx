'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createBrowserClient } from '@/lib/supabase/client'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createBrowserClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--warm-bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--dark-slate)] mb-2">Welcome back</h1>
          <p className="text-[var(--slate-secondary)]">Log in to your TrustBase account</p>
        </div>

        <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-[var(--border-subtle)]">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 flex items-center gap-2">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Button type="submit" disabled={loading} className="w-full h-12 text-base">
              {loading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--slate-secondary)]">
            Don't have an account?{' '}
            <Link href="/signup" className="text-[var(--teal-primary)] font-medium hover:text-[var(--teal-hover)]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
