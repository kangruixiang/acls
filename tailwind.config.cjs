const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: { center: true },
		fontFamily: {
			sans: ['Concourse_3', 'Concourse_4', 'ui-sans-serif', 'system-ui'],
			serif: ['Equity', 'ui-serif']
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};

module.exports = config;
