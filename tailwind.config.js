/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        soporte: { orange: '#F58220', dark: '#D96812', ink: '#171717' },
      },
      boxShadow: { soft: '0 12px 30px rgba(23, 23, 23, 0.08)' },
    },
  },
  plugins: [],
};
