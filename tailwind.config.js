export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#51084d',
          secondary: '#ffe600',
          third: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        handwriting: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}
