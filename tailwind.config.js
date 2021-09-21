// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {},
    fontFamily: {
      'hand': ['Indie Flower']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
