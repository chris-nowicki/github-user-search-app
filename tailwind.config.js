/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '350px',
      md: '500px',
      lg: '775px',
      xl: '3000px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        100: '#FFFFFF',
        200: '#FEFEFE',
        300: '#F6F8FF',
      },
      blue: {
        100: '#60ABFF',
        150: '#0079FF',
        200: '#4B6A9B',
        300: '#697C9A',
        400: '#1E2A47',
        500: '#2B3442',
        600: '#141D2F',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
