/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        clashDisplay:["ClashDisplay", 'sans-serif'],
        clashDisplayBold:['ClashDisplay-Bold', 'sans-serif'],
        clashDisplaySemiBold:['ClashDisplay-Semibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 