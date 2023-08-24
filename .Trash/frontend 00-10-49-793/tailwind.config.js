/** @type {import('tailwindcss').Config} */
export default {
	content: ["./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [
		// eslint-disable-next-line no-undef
		require("flowbite/plugin"),
	],
	// screens: {
	// 	xs: "480px",
	// 	ss: "620px",
	// 	sm: "768px",
	// 	md: "1060px",
	// 	lg: "1200px",
	// 	xl: "1700px",
	// },
};
