/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    
    extend: {
      fontFamily:{
        Nunito:['Nunito'],
      },
      colors:{
        'mainColor':"#e8786e",
        'mainColorL':"#fceae9",
      },
      height: {
        '17': '4.5rem',
        '90':'22rem',
        '100':'38rem',
      },
      screens: {
      'mdl': '991px',
      // => @media (min-width: 991px) { ... }
      },
      keyframes:{
        toRight :{
          '0%,100%':{transform:translateX(0)},
        }
      },
      animation:{
        toRight:'toRight'
      }
    }
  },
  plugins: [],
}
