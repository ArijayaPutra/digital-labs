/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			colors: {
				'primary-500': '#9F0303',
				'grey-50': '#F9FAFB',
				'grey-400': '#9CA3AF',
				'grey-500': '#6B7280',
				'grey-700': '#374151',
				'grey-800': '#222B31',
				'grey-900': '#09141A',
			},
		},
	},
	plugins: [],
};
