/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#F2F0EC",
				darkorange: "#B6573B",
				black: "#1E1E1E",
				sand: "#BE8B52",
			},
			fontFamily: {
				tanker: ["var(--font-tanker)"],
				poppins: ["var(--font-poppins)"],
				pinyon: ["var(--font-pinyon)"],
			},
			boxShadow: {
				perso: "8px 8px 0px 0px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [],
};
