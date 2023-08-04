/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: "class",
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#1c00de",
        "light-blue": "#F1F0FF"
      },
      fontFamily:{
        "sans": ["aileron", ...defaultTheme.fontFamily.sans],
        "heading": ["playfair"]
      }
    },
  },
  plugins: [],
}

