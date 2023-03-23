/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors: {
      'inactive':'#ECEAEA',
      'primary-text': '#262626',
      'success' : '#3AA078',
      'light' : '#D3D3D3',
      'bgGreen' : '#E4F0EB'
    },
    fontFamily : {
      'opensans' : ['Open Sans', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif']
    },
    screens: {
      'base': '1120px',
      'sm' : '1048px',
      'xsm' : '675px',
    },
  },

    fontSize: {
      sm: "14px",
      base: "17px",
      xl: "20px",
      "2xl": "33px",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    
  },
  plugins: [],
};
