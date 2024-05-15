/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lunargreen: '#354733',
        avacado: '#8A9B6E',
        darkgray: '#AFB2AA',
        lightgray: '#F0F1EE',
        medgray: '#808276',
        almwhite: '#FCFCFC',
        flaggreen: '#158212',
        lightgreen: '#83E281',
        whitegreen: '#F6FFF6',
        almblack: '#1E1E24',
      },
      fontFamily: {
        ebgaramond: ['EBGaramond-regular', 'serif'],
        'ebgaramond-bold': ['EBGaramond-bold', 'serif'],
        'inter-medium': ['Inter-medium', 'sans-serif'],
        'inter-regular': ['Inter-regular', 'sans-serif'],
        'inter-semibold': ['Inter-semibold', 'sans-serif'],
        'lato-bold': ['Lato-bold', 'sans-serif'],
        'lato-regular': ['Lato-regular', 'sans-serif'],
        pacifico: ['Pacifico-regular', 'sans-serif'],
        'raleway-bold': ['Raleway-bold', 'sans-serif'],
        'raleway-regular': ['Raleway-regular', 'sans-serif'],
      },
      fontSize: {
        '6.5xl': '4rem',
        '4.5xl': '2.625rem',
        '4.7xl': '2.75rem',
        'xsm': '0.9375rem',
      }
    },
  },
  plugins: [],
}

