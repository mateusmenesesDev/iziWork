/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#F9F9F9",
        accent: {
          primary: "#FABB18",
          secondary: "#FFF8E8",
        },
        error: "#FB151A",
        success: "#00C271",
        info: "#9A9A9A",
        container: "#FFF",
        placeholder: "#757575",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    
      colors: {
        neutral: '#F9F9F9',
        accent: {
          primary: '#FABB18',
          secondary: '#FFF8E8',
        },
        error: '#FB151A',
        success: '#00C271',
        info: '#9A9A9A',
        container: '#FFF',
        placeholder: '#757575',
      },
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
  ],
};
