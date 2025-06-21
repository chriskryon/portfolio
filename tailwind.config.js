/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"sans-serif",
				],
				display: [
					"SF Pro Display",
					"-apple-system",
					"BlinkMacSystemFont",
					"system-ui",
					"sans-serif",
				],
			},
			backdropBlur: {
				xs: "2px",
			},
			animation: {
				float: "float 3s ease-in-out infinite",
				"pulse-slow": "pulse-slow 4s ease-in-out infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "0.8" },
					"50%": { opacity: "0.4" },
				},
			},
			scale: {
				102: "1.02",
			},
		},
	},
	plugins: [],
};
