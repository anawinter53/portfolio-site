/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./layout/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['var(--font-poppins)']
      // },
      colors: {
        grey: {
          800: '#18141c',
          900: '#120f16'
        },
        yellow: {
          400: '#FEDE00',
        }
      },
      backgroundImage: {
        heropattern: "url(/herobgc.jpg)",
      }
    },
  },
  plugins: [],
}

