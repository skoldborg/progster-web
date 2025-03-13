import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
	theme: {
		colors: {
			black: 'var(--black)',
			white: 'var(--white)',
			orangeDark: 'var(--orange-dark)',
		},
		fontFamily: {
			sans: ['Roboto Mono', 'Helvetica', 'sans-serif'],
			header: ['Reverb-Bold', 'Helvetica', 'arial', 'serif'],
		},
		extend: {
			backgroundImage: {
				'gradient-primary': `linear-gradient(140deg, #57c9ca80, #f2a0f980)`,
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(.79, .3, 0, .96)',
			},
		},
	},
	plugins: [],
} satisfies Config;
