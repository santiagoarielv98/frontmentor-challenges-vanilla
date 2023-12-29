/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/faq-accordion/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#AD28EB",
        "light-pink": "#F9F0FF",
        "grayish-purple": "#8C6991",
        "dark-purple": " #2F1533",
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
};
