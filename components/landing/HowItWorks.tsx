export function HowItWorks() {
  const steps = [
    {
      number: '01',
      headline: 'Book',
      body: 'When you schedule an appointment, add the patient and visit type to TrustBase.',
    },
    {
      number: '02',
      headline: 'Educate',
      body: 'TrustBase generates personalized content and sends the patient a link. They read at their own pace.',
    },
    {
      number: '03',
      headline: 'Show up',
      body: 'Patient arrives informed and confident. You see engagement metrics before the visit.',
    },
  ]

  return (
    <section id="how-it-works" className="w-full bg-[var(--warm-bg)] py-24">
      <div className="max-w-[960px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-slate)] text-center mb-16">
          Three steps to better outcomes
        </h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-[var(--sage-green)] to-[var(--teal-light)] opacity-30" />
          
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-center relative z-10">
              <div className="text-5xl font-bold text-[var(--sage-green)] opacity-40 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-[var(--dark-slate)] mb-3">
                {step.headline}
              </h3>
              <p className="text-base text-[var(--slate-secondary)] leading-relaxed max-w-[280px] mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
