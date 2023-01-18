/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      neutral: '#ECECEC',
      accent: {
        primary: '#FABB18',
        secondary: '#FFF8E8',
      },
      error: '#FB151A',
      success: '00C271',
      info: 'AFAFAF',
      container: '#FFF',
    },
  },
  plugins: [],
};
