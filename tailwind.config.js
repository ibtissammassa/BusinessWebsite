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
    },
  },
  plugins: [],
}
