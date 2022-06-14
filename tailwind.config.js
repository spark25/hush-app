/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'h-black': '#0D1017',
        'h-alt': '#292848',
        'h-light': '#1A202E',
        'h-secondary': '#546A7B',
        'h-primary': '#7000DF'
      },
      fontFamily: {
        body: ['Rubik', 'sans-serif'],
        display: ['Oleo Script', 'cursive'],
      },
      fontSize: {
        'nano': '.6rem',
     
      }
    },
  },
  plugins: [],
}
