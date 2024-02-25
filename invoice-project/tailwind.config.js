/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily : {
      'sans' : ["Anta","sans-serif"],
    },
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}