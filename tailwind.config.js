/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        body: ['var(--noto-sans_JP)'],
        heading: ['var(--noto-sans_JP)'],
      },
      colors: {
        black: '#000',
        'black-light-1': 'rgba(0, 0, 0, 0.2)',
        white: '#FFF',
        'white-light-1': 'rgba(255, 255, 255, 0.15)',
        green: '#219653',
        'green-light-1': 'rgba(0, 161, 43, 0.2)',
        'ball-blue': '#2C99D2',
        'red-light-1': 'rgba(254, 49, 49, 0.2)'
      },
    },
  },
  plugins: [],
}