/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["General Sans", "sans-serif"],
      },
      colors: {
        customGray: "#E7E7E7",
        primaryOrange: "#DC4A2D",
        secondaryOrange: "#FEF4F2",
        neutralGray: "#B0B0B0",
        lightGray: "#FCFCFC",
      },
    },
  },
  plugins: [],
};

