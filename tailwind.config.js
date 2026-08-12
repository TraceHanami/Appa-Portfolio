/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './wishes.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#F9F8F6',
          100: '#F2EFFB',
          200: '#E5E0D8',
          300: '#D4CFC6',
          600: '#757067',
          800: '#2C2B29',
          900: '#1A1918',
        },
        gold: {
          400: '#E6C687',
          500: '#D4AF37',
          600: '#B89327',
        },
        slate: {
          850: '#141A21',
          900: '#0F141A',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: []
}
