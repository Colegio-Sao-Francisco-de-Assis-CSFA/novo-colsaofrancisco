/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{

				
				// Light Mode 
				csfa_blue_300: "#486EDB",
				csfa_blue_600: "#2C3C94",
				csfa_blue_700: "#121B3D",
				csfa_blue_900: "hsla(227, 54%, 15%, 0.80)",

				// Assets design 
				csfa_cyan_700: "#08B0D1",
				csfa_pink_100: "#E87EA1",
				csfa_pink_500: "#F6337F",
				csfa_yellow_700: "#FFC826",

				//Geral Colors 
				csfa_gray_200: "#E0E0E0",
				csfa_gray_100: "#F5F7F5",
				csfa_gray_600: "#646464",
				csfa_gray_700: "#4e4e4e",
				csfa_white:" white",
				csfa_soft_black: "rgb(31, 31, 31)",
			},

			fontSize:{
				csfa_font_ssm: "10px",
				csfa_font_sm: "12px",
				csfa_font_lsm: "16px",
				csfa_font_smd: "18px",
				csfa_font_md: "20px",
				csfa_font_lmd: "24px",
				csfa_font_slg: "28px",
				csfa_font_lg: "32px",
				csfa_font_llg: "42px"
			}
		},
		
	},
	plugins: [],
	
}
