import { Hero } from '@/components/landing/Hero'
import { ValueProps } from '@/components/landing/ValueProps'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Pricing } from '@/components/landing/Pricing'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  )
}
