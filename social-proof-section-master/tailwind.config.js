/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "veryDarkMagenta": "hsl(300, 43%, 22%)",
        "softPink": "hsl(333, 80%, 67%)",
        "darkGrayishMagenta": "hsl(303, 10%, 53%)",
        "lightGrayishMagenta": "hsl(229, 57%, 11%)",        
      },
      fontFamily: {
        body: ["League Spartan, sans-serif"],
      },      
      borderRadius: {
        'large' : '130px',
      },
      
    },
  },
  plugins: [],
}
