/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#393F48",
        brand: "#EF5DA8",
      },
      backgroundImage: {
        hbackgraund: "url('public/backgraud.png')",
      },
    },
  },
  plugins: [],
};
