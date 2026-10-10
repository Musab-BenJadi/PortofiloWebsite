/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B12',
          900: '#0B0F19',
          800: '#101625',
          700: '#161E31',
          600: '#1E2740',
        },
        line: {
          700: '#1E2740',
          600: '#28324D',
          500: '#374262',
        },
        paper: {
          100: '#EEF0F6',
          200: '#C9CEDD',
          300: '#8A93AC',
          400: '#666F8C',
        },
        signal: {
          300: '#F0C384',
          400: '#E3A857',
          500: '#CC8B36',
          600: '#A66C24',
        },
        wire: {
          400: '#7C93E8',
          500: '#5B76D6',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 24px 48px -24px rgba(0,0,0,0.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        blink: 'blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
