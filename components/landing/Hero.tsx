import Link from 'next/link'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="w-full bg-[var(--warm-bg)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--dark-slate)] leading-tight tracking-tight mb-6">
              $192,000 — the average annual revenue a 5-provider practice loses to no-shows.
            </h1>
            <p className="text-xl text-[var(--slate-secondary)] mb-4 max-w-[560px]">
              Most of it comes down to trust. We fix that before patients walk in.
            </p>
            <p className="text-lg text-[var(--slate-secondary)] mb-10 max-w-[560px]">
              TrustBase sends personalized, bite-sized education to your patients before every appointment. They arrive informed. They show up.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/dashboard">
                <Button className="h-14 px-8 text-lg">Start free trial</Button>
              </Link>
              <a
                href="#how-it-works"
                className="text-lg font-medium text-[var(--teal-primary)] border-b-2 border-transparent hover:border-[var(--teal-primary)] hover:text-[var(--teal-hover)] transition-all"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="md:col-span-7 hidden md:block">
            {/* Mock patient content card */}
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-[var(--shadow-large)] p-8 max-w-[420px] mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[var(--teal-primary)] flex items-center justify-center text-white text-lg font-bold">
                  T
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--dark-slate)]">TrustBase</div>
                  <div className="text-xs text-[var(--slate-tertiary)]">Patient education</div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[var(--dark-slate)] mb-2">
                  What to expect at your cholesterol check-in
                </h3>
                <p className="text-sm text-[var(--slate-secondary)] leading-relaxed">
                  Your provider will review your latest lipid panel and talk through what the numbers mean for your heart health. No surprises — just a clear picture of where you stand.
                </p>
              </div>
              {/* Progress indicator */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--teal-primary)]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--teal-primary)]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--border-medium)]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--border-medium)]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--border-medium)]" />
                </div>
                <span className="text-xs text-[var(--slate-tertiary)]">2 of 5 complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
