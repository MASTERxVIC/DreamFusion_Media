/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
        bespoke: ['BespokeStencil', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
