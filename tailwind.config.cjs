/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC8A6",
        primarylight: " #FCE4D5",
        secondary: "#73C2FB",
        customPink: "#FFADC5",
        customGreen: "#A1CB9B",
        customYellow: "#FCF8C0",
        customTextColorDark: "RGBA(65,65,65,1)",
        customTextColorMedium: "RGBA(65,65,65,0.75)",
        customTextColorLight: "RGBA(65,65,65,0.35)",
        whiteTransparent: "rgba(255,252,252, 0.8)",
      },
      fontFamily: {
        logo: "Comfortaa",
        heading: "Poppins",
        subheading: "Poppins",
        tag: "Poppins",
        bodyText: "Be Vietnam Pro",
      },
    },
  },
  plugins: [],
};
