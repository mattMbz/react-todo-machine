/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        itau: '#FF6201',
        platzi: '#0C1633'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

