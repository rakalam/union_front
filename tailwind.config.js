/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {
      colors : {
        orange_union : '#e6631f',
        orange_union_100 : '#ee8a15',
        bleue_union_500 : '#09aac6',
        jaune_union_500 : '#f4c30f',
        red_union_500 : 'red',
        sombre_bg : '#ffffff0a'
      }
    },
  },
  plugins: [],
}