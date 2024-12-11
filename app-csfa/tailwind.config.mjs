/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		colors: {
    			csfa_blue_300: '#486EDB',
    			csfa_blue_600: '#2C3C94',
    			csfa_blue_700: '#121B3D',
    			csfa_blue_900: 'hsla(227, 54%, 15%, 0.80)',
    			csfa_cyan_700: '#08B0D1',
    			csfa_pink_100: '#E87EA1',
    			csfa_pink_500: '#F6337F',
    			csfa_yellow_700: '#FFC826',
    			csfa_gray_200: '#E0E0E0',
    			csfa_gray_100: '#F5F7F5',
    			csfa_gray_600: '#646464',
    			csfa_gray_700: '#4e4e4e',
    			csfa_white: ' white',
    			csfa_soft_black: 'rgb(31, 31, 31)',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontSize: {
    			csfa_font_ssm: '10px',
    			csfa_font_sm: '12px',
    			csfa_font_lsm: '16px',
    			csfa_font_smd: '18px',
    			csfa_font_md: '20px',
    			csfa_font_lmd: '24px',
    			csfa_font_slg: '28px',
    			csfa_font_lg: '32px',
    			csfa_font_llg: '42px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
	
}
