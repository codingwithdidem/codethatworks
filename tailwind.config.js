const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#8739F9',
        secondary: '#C651CD',
        dark: '#363636'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
