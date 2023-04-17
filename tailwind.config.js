/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#f2f2f2',
          300: '#dadce0',
          500: '#70757a',
          900: '#000000de'
        },
        dark: {
          400: '#9aa0a6',
          700: '#3c4043',
          800: '#202124',
          900: '#171717'
        }
      }
    }
  },
  plugins: []
}
