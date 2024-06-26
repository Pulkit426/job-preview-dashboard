/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#E7E7E7",
        primaryOrange: "#DC4A2D",
        neutralGray: "#B0B0B0",
      },
    },
  },
  plugins: [],
};

