/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens from design.md
        wine:             '#8C0719',
        'red-primary':    '#BA071F',
        'soft-blush':     '#F2DBD5',
        'gray-light':     '#C9C8C8',
        'gray-mid':       '#A2A2A2',
        'gray-dark':      '#666666',
        surface:          '#FFF8F7',
        'on-surface':     '#281716',
        'on-surface-variant': '#5C403E',
        'outline-variant':'#E5BDBA',
        primary:          '#8F0014',
        'primary-container': '#BA071F',
      },
      fontFamily: {
        condensed: ['"Roboto Condensed"', 'sans-serif'],
        barlow:    ['"Barlow Condensed"', 'sans-serif'],
        'barlow-semi': ['"Barlow Semi Condensed"', 'sans-serif'],
        sans:      ['Inter', 'system-ui', 'sans-serif'],
        signature: ['"Great Vibes"', 'cursive'],
      },
      spacing: {
        gutter:    '1.5rem',
        margin:    '2rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
      },
      borderRadius: {
        sm:      '0.125rem',
        DEFAULT: '0.25rem',
        md:      '0.375rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        full:    '9999px',
      },
      maxWidth: {
        '2xl': '50rem',
      },
      boxShadow: {
        card:       '0 20px 40px -15px rgba(0,0,0,0.07)',
        'card-hover':'0 24px 48px -12px rgba(0,0,0,0.13)',
        modal:      '0 25px 50px -12px rgba(0,0,0,0.35)',
      },
      letterSpacing: {
        widest: '0.15em',
      },
      animation: {
        // FloatingCard: opacity-only fade (no translateY to avoid interaction with absolute position)
        'fade-in':     'fadeIn 0.35s ease-out',
        // Modal backdrop: fast opacity fade
        'backdrop-in': 'backdropIn 0.2s ease-out',
        // Modal card: opacity + subtle scale (GPU-only, no layout reflow, no jump)
        'modal-in':    'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        backdropIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalIn: {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
