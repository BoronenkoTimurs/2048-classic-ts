/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gameBackground: "#AD9D8F",
        squareBackgound: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
