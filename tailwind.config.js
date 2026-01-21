export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#211282',
          secondary: '#1e1178',
          third: '#f8f8f8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        handwriting: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}
