/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('./../public/background-image.jpg')",      
      },
      fontFamily:{
        'sans': ['var(--font-inter)']
      }
    },
  },
  plugins: [],
}
