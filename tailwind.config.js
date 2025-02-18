/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_red: "#ff004f",
        hover_red: "#ff005e",
      },
    },
  },
  plugins: [],
};
