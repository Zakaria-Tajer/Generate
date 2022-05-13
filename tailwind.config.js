module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
        'Lato': 'Lato , sans-serif'
      },
      colors: {
        'main': '#2028EB',
        'DarkOne': '#222831',
        'DarkGrey': '#393E46',
        'Teal': '#00ADB5',
        'PureGrey': '#EEEEEE',
      },
      screens: {
        'xsm': '375px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}