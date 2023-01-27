/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['TGAqsaPro'],
        'body': ['TGAqsaPro-regular'],
        'title-regular': ['TGAqsaPro-regular']
      },
      colors: {
        'primary': "#BBCA2B",
        'primary-hover':"#A3B028",
        'primary-click':"#8F9A21",
        'cs-black': "#191919",
        'cs-gray': "#999999"
      }
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide'),
  ],
}
