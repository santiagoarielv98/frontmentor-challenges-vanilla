/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/faq-accordion/index.html"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FBFCFE",
        "grayish-purple": "#9E9AA7",
        "dark-purple": " #3A3054",
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
};
