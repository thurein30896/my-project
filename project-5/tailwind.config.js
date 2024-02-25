/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "sans-serif",
      },
      colors: {
        primary: "#fec7d7",
        secondary: "#0e172c",
        danger: "#a786df",
        info: "#d9d4e7",
        header: "#f9f8fc",
      },
    },
  },
  plugins: [],
};
