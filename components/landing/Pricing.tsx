import Link from 'next/link'
import { Button } from '../ui/Button'

export function Pricing() {
  return (
    <section className="w-full bg-[var(--warm-white)] py-24">
      <div className="max-w-[560px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-slate)] mb-4">
          Get early access
        </h2>
        <p className="text-lg text-[var(--slate-secondary)] mb-10">
          TrustBase is currently in early access. Sign up to be among the first
          providers to transform patient engagement.
        </p>

        <Link href="/signup">
          <Button className="h-14 px-10 text-lg">Request early access</Button>
        </Link>
      </div>
    </section>
  )
}
