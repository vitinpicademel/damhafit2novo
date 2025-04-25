/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        'primary-dark': '#065f46',
        secondary: '#4b5563',
        'secondary-dark': '#374151',
        'gold': '#C5B27B',
        'gold-dark': '#B4A16B',
        'olive': '#4A5F31',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      height: {
        'screen': '100vh',
      },
    },
  },
  plugins: [],
} 