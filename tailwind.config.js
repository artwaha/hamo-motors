/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hamo_yellow: "#F6AB1B",
        hamo_red: "#ED2024",
        hamo_bg: "#E8ECEE",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans - serif"],
        roboto: ["Roboto", "sans - serif"],
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
