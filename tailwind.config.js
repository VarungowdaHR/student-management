/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors:{
        primary:{
          blue:'#4B5CEE',
          gray:'#E3E3E3',
          btn:'#a5b4fc',
          white:'#fff',
          black:'#000000',
          lightblue:'#C0C6FE',
          palewhite:'#F8FAFC'
        }
      },
      gridTemplateColumns:{
        'row':'1fr 2fr 3fr 1fr 2fr'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
  }
},

  plugins: [],
}
