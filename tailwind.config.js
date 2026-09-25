/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // === Red / white / black system ===
        // --- Surfaces: near-black neutral ramp ---
        ink: {
          DEFAULT: '#0A0A0A', // page background
          dark: '#050505', // deepest — footer, deep fills
          light: '#161616', // subtle raised fill
          card: '#141414', // card surface
          cardHover: '#1F1F1F',
          border: '#2A2A2A', // hairline borders
        },
        // --- Single accent: red (links, focus, primary CTA, highlights) ---
        accent: {
          DEFAULT: '#EF4444',
          soft: 'rgba(239, 68, 68, 0.12)',
          strong: '#DC2626',
          glow: 'rgba(239, 68, 68, 0.28)',
          dark: '#DC2626',
        },
        // --- Category hues collapse into the red family (kept subtly distinct) ---
        brand: {
          cyan: '#F87171',
          indigo: '#EF4444',
          emerald: '#EF4444',
          purple: '#DC2626',
          amber: '#F87171',
        },
        // --- Neutral gray ramp: override `slate` so every existing
        //     text/border reads as a true gray (no blue tint) on black ---
        slate: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // --- Legacy hue classes remap into the red family so older
        //     sections match the tri-color system without rewrites ---
        teal: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
        cyan: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
        indigo: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
        purple: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
        emerald: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
        amber: { 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626' },
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
