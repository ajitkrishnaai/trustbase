export function ValueProps() {
  const props = [
    {
      icon: '📉',
      headline: 'Reduce no-shows',
      body: 'Patients who understand their care plan are 3x more likely to show up. Stop losing revenue to anxiety and confusion.',
    },
    {
      icon: '🤝',
      headline: 'Build patient trust',
      body: 'Send personalized education before each visit. Patients arrive informed, confident, and ready to engage with their care.',
    },
    {
      icon: '⏱️',
      headline: 'Cut repetitive questions',
      body: 'Answer common questions before the appointment. Spend consultation time on what matters, not explaining basics.',
    },
  ]

  return (
    <section className="w-full bg-[var(--warm-white)] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-slate)] text-center mb-16">
          Why practices choose TrustBase
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 hover:border-[rgba(132,169,140,0.24)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--dark-slate)] mb-3">
                {prop.headline}
              </h3>
              <p className="text-base text-[var(--slate-secondary)] leading-relaxed">
                {prop.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
