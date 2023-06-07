/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        azul: "#49798D",
        verde: "#BEE25E",
        gris: "#B2B2B2",
      },
      dropShadow: {
        arriba: "0 -20px 13px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
