/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-can': '#F3DB69',
        'avocado': '#86925F',
        'kabul': '#594F40',
        'swirl': '#D7D1C8',
      },
    },
  },
  plugins: [],
};