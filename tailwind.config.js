/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '1026px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "red": "#b7090a",
      "black": "#202020",
      "gray": "#888",
      "white": "#fff",
      "yellow": "#ffcf55"
    
    

    },

    container: {
      padding: '20px',
      center: true
    },
  },
  plugins: [],
}

