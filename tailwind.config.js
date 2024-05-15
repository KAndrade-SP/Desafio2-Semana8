/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:'var(--lato)',
        pacifico:'var(--pacifico)',
        ebgaramond:'var(--ebgaramond)',
        raleway:'var(--raleway)'
      }
    },
  },
  plugins: [],
}

