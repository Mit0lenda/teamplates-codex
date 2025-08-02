const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#FF4500',
        background: '#0D0D0D',
        text: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Anton', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
