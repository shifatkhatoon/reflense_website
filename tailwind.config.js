/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#AED7FF',
          200: '#7DB9F6',
          300: '#70B1F4',
          400: '#53A0EE',
          500: '#4597EC',
          600: '#0671E0', // main blue
        },
      },
    },
  },
  plugins: [],
};
