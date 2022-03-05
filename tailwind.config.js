module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
				'2xl': '144px',
			},
			center: true,
		},
		extend: {
			colors: {
				base: '#ffffff',
				primary: '#3b3b3b',
				accent: '#FF5B14',
				info: '#2DA7FB',
				warning: '#FFCB11',
				danger: '#ec4141',
				success: '#67db8e',
				sky: '#9ADCFF',
				whitesky: '#CEE5F8',
			},
			fontFamily: {
				main: 'ProximaNova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
			backgroundImage: {
				'space': 'url(/icon/space.svg)',
				'ground': 'url(/icon/ground.svg)',
			},
			animation: {
				'rocket': 'wiggle 3s linear infinite alternate',
			},
			keyframes: {
				wiggle: {
					'0%': {
						transform: 'translateX(-50%)',
					},
					'50%': {
						transform: 'translateX(500%) rotate(90deg)',
					},
					'100%': {
						transform: 'translateX(-50%)',
					},
				}
			},
		},
	},
	plugins: [],
};