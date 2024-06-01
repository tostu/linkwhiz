/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tostulib-svelte/**/*.{html,js,svelte,ts}'
	],
	daisyui: {
		themes: [
			{
				linkWhiz: {
					primary: '#0d1f2d',
					'primary-content': '#f3f4f6',
					secondary: '#009cf9',
					'secondary-content': '#f3f4f6',
					accent: '#e49d23',
					'accent-content': '#1f2937',
					neutral: '#f0fbff',
					'neutral-content': '#151515',
					'base-100': '#374652',
					info: '#17a2b8',
					'info-content': '#f3f4f6',
					success: '#75af49',
					'success-content': '#f3f4f6',
					warning: '#f39f11',
					'warning-content': '#140c00',
					error: '#f44336',
					'error-content': '#f3f4f6'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
