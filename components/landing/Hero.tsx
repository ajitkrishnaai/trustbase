import Link from 'next/link'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="w-full bg-[var(--warm-bg)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--dark-slate)] leading-tight tracking-tight mb-6">
              Your patients no-show because they don't trust the plan. TrustBase changes that.
            </h1>
            <p className="text-xl text-[var(--slate-secondary)] mb-10 max-w-[560px]">
              Stop losing revenue and time to patient anxiety. Send bite-sized education before every appointment. Build trust. Reduce no-shows.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/signup">
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
            <div
              className="aspect-[4/3] rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-[var(--shadow-large)] flex items-center justify-center"
            >
              <span className="text-6xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
