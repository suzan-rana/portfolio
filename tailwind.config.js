/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040914",
        backgroundSecondary: "#0a0e21",
        backgroundLight: "#4D4D4D",
        primary: "#ffffff",
        textSecondary: "#898989",
        textDim: "#CCCCCC",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
