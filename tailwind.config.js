/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'orange': '#FAC898',
        'purple': '#162838',
      },
    },
  },
  plugins: [],
}