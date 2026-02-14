/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  safelist: [
    'opacity-30',
    'opacity-60',
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