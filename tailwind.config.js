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
        '200':'50rem',
        '300':'60rem',
      },
      screens: {
      'mdl': '991px',
      // => @media (min-width: 991px) { ... }
      },
      backgroundImage: {
        'cloud': "url('img/cloud.png')",
      }
    }
  },
  plugins: [],
}
