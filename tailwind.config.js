/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ChakraPetch"],
    },
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
