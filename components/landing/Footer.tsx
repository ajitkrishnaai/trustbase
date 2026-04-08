export function Footer() {
  return (
    <footer className="w-full bg-[var(--dark-slate)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <div className="text-xl font-bold text-[var(--warm-white)] mb-4">TrustBase</div>
        <p className="text-sm text-white/60 mb-6">
          Building trust, one appointment at a time.
        </p>

        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-sm text-white/50">
            I help businesses solve real problems quickly and integrate AI where
            it makes sense.{' '}
            <a
              href="https://ajitkrishna.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal-light)] hover:text-[var(--teal-primary)] transition-colors"
            >
              Learn more
            </a>
          </p>
        </div>

        <p className="text-xs text-white/40">
          &copy; 2026 TrustBase. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
