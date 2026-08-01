/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F1B2D',
        paper: '#F7F5F0',
        charcoal: '#1C1F26',
        bronze: '#B08D57',
        'bronze-light': '#D4B483',
        slate: '#5B6472',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}