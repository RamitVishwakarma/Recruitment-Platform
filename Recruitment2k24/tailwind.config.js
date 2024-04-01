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
      "light-yellow": "#ECCD2A",
      white: "#F5F5F5",
      "text-green": "#579C00",
      footer: "#E5E5E5",
    },
    extend: {
      backgroundImage: {
        background: "url('/src/assets/Backgrounds/Background.svg')",
        "admin-dashboard-bg": "url('/src/assets/admin-dashboard-bg.svg')",
        "reg-bg": "url('/src/assets/registration-bg.svg')",
        "login-bg": "url('/src/assets/login-bg.svg')",
        "home-bg": "url('/src/assets/Backgrounds/User-dashboard.svg')",
      },
    },
  },
  plugins: [],
};
