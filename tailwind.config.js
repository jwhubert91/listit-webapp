/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spot_green: "#1DD860",
        air_red: "#FF385C",
        tik_blue: "#24F7F0",
        snap_yellow: "#FFFD01",
        disc_purple: "#5663F7",
      },
    },
    screens: {
      sm: "320px",
      md: "640px",
      tablet: "960px",
      lg: "1280px",
      xl: "1600px",
    },
  },
  plugins: [],
}
