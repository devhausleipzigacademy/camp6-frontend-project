/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#73C2FB",
                secondary: "#FFC8A6",
                customPink: "#FFADC5",
                customGreen: "#A1CB9B",
                customYellow: "#FCF8C0",
            },
            fontFamily: {
                logo: "Comfortaa",
                heading: "Poppins",
                subheading: "Poppins",
                tag: "Poppins",
                bodyText: "Work Sans",
            },
        },
    },
    plugins: [],
};