import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT:'#d4af37', light:'#f0d060', pale:'#ffe88a', dark:'#8b6914' },
        deep: { blue:'#05091a', navy:'#0a1040' },
      },
      fontFamily: {
        display:  ['Cormorant Garamond', 'serif'],
        cinzel:   ['Cinzel', 'serif'],
        script:   ['Dancing Script', 'cursive'],
        sans:     ['Inter', 'sans-serif'],
      },
      backdropBlur: { xs:'2px' },
      animation: {
        'float':      'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
        'fade-up':    'fadeUp 0.9s ease-out forwards',
      },
      keyframes: {
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-14px)' } },
        glowPulse: { '0%,100%':{ opacity:'0.4' }, '50%':{ opacity:'0.9' } },
        fadeUp:    { from:{ opacity:'0', transform:'translateY(20px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
export default config
