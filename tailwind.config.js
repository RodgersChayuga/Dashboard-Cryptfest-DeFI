module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_19: "#ffffff19" },
        blue_gray: { 400: "#868686", 900: "#353535", "900_02": "#2b2b2b" },
        yellow: { 900: "#f7931a" },
        black: { 900: "#080808", "900_66": "#00000066" },
        gray: {
          300: "#dddddd",
          400: "#bfbfbf",
          500: "#a0a0a0",
          900: "#1b1b1b",
          "900_02": "#2a2a2a",
          "900_99": "#1c1f2599",
          "400_19": "#b0b0b019",
          "900_03": "#211621",
          "800_99": "#41414199",
        },
        red: { A700: "#fb0a0a", A700_01: "#f00500" },
        pink: { 500: "#f00090" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins", roboto: "Roboto", urbanist: "Urbanist" },
      backgroundImage: {
        gradient: "linear-gradient(189deg, #fa03f5,#aa9cff)",
        gradient1: "linear-gradient(144deg, #ffffff,#d8d8d8b5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
