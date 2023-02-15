module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
<<<<<<< HEAD
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
=======
      sans: ['GrapItimhik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      
>>>>>>> de4e81e (testform)
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  },
  plugins: [
  
],
  presets: [
    require("./style-preset.js")
  ],
}
