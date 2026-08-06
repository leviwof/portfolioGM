/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F17',
          dark: '#070A10',
          light: '#131B2E',
          card: '#161F33',
          cardHover: '#1E2B45',
          border: '#24324D',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          glow: 'rgba(45, 212, 191, 0.25)',
          dark: '#14B8A6',
        },
        brand: {
          cyan: '#06B6D4',
          indigo: '#6366F1',
          emerald: '#10B981',
          purple: '#A855F7',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
