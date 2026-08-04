/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        bronze: 'rgb(var(--color-bronze) / <alpha-value>)',
        'bronze-light': 'rgb(var(--color-bronze-light) / <alpha-value>)',
        'bronze-dark': 'rgb(var(--color-bronze-dark) / <alpha-value>)',
        slate: 'rgb(var(--color-slate) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}