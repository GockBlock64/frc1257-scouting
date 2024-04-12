/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      spacing: {
        '26': '108px',
        '49': '196px',
        '74': '292px'
      }
    },
  },
  plugins: [],
}
