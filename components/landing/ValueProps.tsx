const TrendDownIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
)

const HandshakeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    <path d="M12 5.36L8.87 8.5a2.13 2.13 0 0 0 0 3l.35.36a2.13 2.13 0 0 0 3.01 0L15.36 8.7" />
  </svg>
)

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export function ValueProps() {
  const props = [
    {
      icon: <TrendDownIcon />,
      headline: 'Reduce no-shows',
      body: 'Patients who understand their care plan are 3x more likely to show up. Stop losing revenue to anxiety and confusion.',
    },
    {
      icon: <HandshakeIcon />,
      headline: 'Build patient trust',
      body: 'Send personalized education before each visit. Patients arrive informed, confident, and ready to engage with their care.',
    },
    {
      icon: <ClockIcon />,
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
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-[var(--teal-primary)]" style={{ background: 'var(--icon-bg, rgba(13,148,136,0.08))' }}>
                {prop.icon}
              </div>
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
