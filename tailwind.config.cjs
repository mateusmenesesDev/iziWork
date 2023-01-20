/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      neutral: '#F9F9F9',
      accent: {
        primary: '#FABB18',
        secondary: '#FFF8E8',
      },
      error: '#FB151A',
      success: '00C271',
      info: '9A9A9A',
      container: '#FFF',
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
