
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#B79449',
        'light-dark': '#0D151A',
        'mid-gray': '#CAD2DC',
        'dim-gray': '#707070'
      },
      backgroundImage: {
        'main-bg': "url('./src/assets/img/background.svg')"
      },
      backgroundColor: {
        linear: 'linear-gradient(180deg, #F2F2F2 0%, #F6F6F6 100%);'
      },
      boxShadow: {
        nav: '0px 4px 4px 0px rgba(0, 0, 0, 0.02)'
      },
      fontSize: {
        xxs: '0.65rem'
      }
    },
    fontFamily: {
      Trueno: ['Trueno Regular', 'sans-serif'],
      TruenoB: ['Trueno Bold', 'sans-serif'],
      TruenoSB: ['Trueno Semi Bold', 'sans-serif'],
      TruenoEB: ['Trueno Extra Bold', 'sans-serif'],
    }
  },
  plugins: []
}
