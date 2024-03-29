/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#31a0da',
      'secondary': '#7eb928',
      'other-color': '#d34728',
      'bg-primary': '#7eb928',
      'bg-secondary': '#7eb928',
      'gray': '#f5f5f5',
      'gray-400': '#363636',

    }
  },
  plugins: [],
}
