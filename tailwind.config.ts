import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0D9488',
          hover: '#0F766E',
          light: '#5EEAD4',
        },
        sage: {
          DEFAULT: '#84A98C',
          light: '#A8C5A0',
        },
        slate: {
          dark: '#1E293B',
          secondary: '#475569',
          tertiary: '#64748B',
        },
        warm: {
          white: '#FAFAF7',
          bg: '#F8F7F4',
        },
        card: '#FFFFFF',
        amber: {
          accent: '#F59E0B',
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(13, 148, 136, 0.08)',
        medium: '0 4px 16px rgba(13, 148, 136, 0.12)',
        large: '0 12px 32px rgba(13, 148, 136, 0.16)',
        card: '0 8px 24px rgba(13, 148, 136, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
