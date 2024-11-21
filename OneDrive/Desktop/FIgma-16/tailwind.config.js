/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './*.{html,js}'],
	theme: {
		extend: {
			boxShadow: {
				'custom-inset': 'inset 11px -5px 27px 0 rgba(43, 123, 211, 0.14)',
			},
		},
	},
	plugins: [],
}
