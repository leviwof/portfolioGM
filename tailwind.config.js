/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Surfaces (neutral, restrained) ---
        ink: {
          DEFAULT: '#0B0F17', // page background
          dark: '#070A10', // deepest — footer, on-accent text
          light: '#131B2E', // subtle raised fill
          card: '#161F33', // card surface
          cardHover: '#1E2B45',
          border: '#24324D', // hairline borders
        },
        // --- Single restrained accent (links, focus, primary CTA only) ---
        accent: {
          DEFAULT: '#2DD4BF',
          soft: 'rgba(45, 212, 191, 0.12)',
          strong: '#14B8A6',
          glow: 'rgba(45, 212, 191, 0.25)',
          dark: '#14B8A6',
        },
        // --- Supporting hues (used sparingly for category accents) ---
        brand: {
          cyan: '#06B6D4',
          indigo: '#6366F1',
          emerald: '#10B981',
          purple: '#A855F7',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Fluid display scale for strong, responsive typography.
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
        heading: ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '1200px', // section content width
        prose: '68ch', // comfortable reading measure
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        // Soft, low-contrast elevation — no neon glow.
        card: '0 1px 2px rgba(0,0,0,0.30), 0 8px 24px -12px rgba(0,0,0,0.50)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.30), 0 16px 40px -16px rgba(0,0,0,0.55)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
