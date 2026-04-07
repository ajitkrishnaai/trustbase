import Link from 'next/link'
import { Button } from '../ui/Button'

export function Pricing() {
  const features = [
    'Unlimited patients',
    'Unlimited content generation',
    'Engagement analytics',
    'Email & SMS delivery',
    'Priority support',
  ]

  return (
    <section className="w-full bg-[var(--warm-white)] py-24">
      <div className="max-w-[560px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-slate)] mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-[var(--slate-secondary)] mb-12">
          No setup fees. No patient limits. Cancel anytime.
        </p>
        
        <div className="bg-[var(--card-bg)] rounded-[20px] p-12 border-2 border-[var(--sage-green)] shadow-[var(--shadow-medium)]">
          <div className="text-5xl font-bold text-[var(--teal-primary)] mb-2">$199</div>
          <div className="text-xl font-medium text-[var(--slate-secondary)] mb-8">
            per provider / month
          </div>
          
          <ul className="space-y-4 mb-8 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-[var(--sage-green)] text-xl">✓</span>
                <span className="text-base text-[var(--dark-slate)]">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/signup" className="block">
            <Button className="w-full h-14 text-lg">Start free trial</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
