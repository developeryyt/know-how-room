/** @type {import('tailwindcss').Config} */


const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };


export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      spacing: px0_200,
    },
  },
  plugins: [],
}

