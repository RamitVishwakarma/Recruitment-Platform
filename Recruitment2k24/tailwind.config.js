/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ProductSans: ["ProductSans", "sans"],
    },
    colors: {
      hr: "#00000066",
      grey: "#353535",
      "nav-hover": "#CDD5FF",
      "text-box": "#FBFBFB",
      "button-text": "#2F3B00",
      "button-hover": "#D4F74C", 
      blue: "#000C49",
      red: "#EB6B6B",
      purple: "#BA75DA",
      lime: "#ABD700",
      "light-blue": "#6B83FF",
      "light-purple": "#E570D2",
      "para-blue": "#111B52",
      "light-red": "#EB6B6B",
    },
    extend: {},
  },
  plugins: [],
};
