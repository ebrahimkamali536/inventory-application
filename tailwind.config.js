/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#666E7D",
        primary: "#344293",
        accent: "#E91868",
        accentDark: "#D0165D",
        attention: "#F8B114",
        blueActive: "#6774BD",
        blueLight: "#A5ADD7",
        purple: "#6D5BD0",
        inactive: "#666E7D",
        green: "#02A443",
        visited: "#000000",
      },
      borderRadius: {
        md: "4px"
      }
    },
  },
  plugins: [],
}