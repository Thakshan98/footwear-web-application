/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      padding: '4rem',
    },
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        'body': '#FE5056'
      }
    },
  },
  
  plugins: [],
}
