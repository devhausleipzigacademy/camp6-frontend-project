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
				customTextColor: "#414141",
				whiteTransparent: "rgba(255,255,255, 0.9)",
			},
			fontFamily: {
				logo: "Comfortaa",
				heading: "Poppins",
				subheading: "Poppins",
				tag: "Poppins",
				bodyText: "Open Sans",
			},
		},
	},
	plugins: [],
};
