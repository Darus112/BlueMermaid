/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'price': '#4e6d83',
      'foodcard': '#e0ebf1',
      'seagull': {
        '50': '#f2f8fd',
        '100': '#e5f0f9',
        '200': '#c4e0f3',
        '300': '#7fbde5',
        '400': '#55a9db',
        '500': '#308ec7',
        '600': '#2071a9',
        '700': '#1b5a89',
        '800': '#1a4d72',
        '900': '#1b415f',
      },   
    },
    fontFamily: {
      body: ['Poppins'],
      food: ['Raleway'],
      content: ['Dosis']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
