import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}"
	],  
  darkMode:'class',
  safelist:[
    'group-hover:bg-gradient-kaya-light',
    'dark:group-hover:bg-gradient-kaya-dark',
    'group-hover:bg-gradient-scaleup-light',
    'dark:group-hover:bg-gradient-scaleup-dark',
    'group-hover:bg-gradient-lokal360-light',
    'dark:group-hover:bg-gradient-lokal360-dark',
    'group-hover:bg-gradient-printToScale-light',
    'dark:group-hover:bg-gradient-printToScale-dark',
    'group-hover:bg-gradient-mtmc-light',
    'dark:group-hover:bg-gradient-mtmc-dark',
    'group-hover:bg-gradient-portfolio2-light',
    'dark:group-hover:bg-gradient-portfolio2-dark',
    'group-hover:bg-gradient-osaka-light',
    'dark:group-hover:bg-gradient-osaka-dark',
    'group-hover:bg-gradient-charik-light',
    'dark:group-hover:bg-gradient-charik-dark'
  ],
  
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'radial-circle': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-flow': 'linear-gradient(to right, #F3A07D, #E96479, #7D6188, #7D6188, #E96479, #F3A07D)',
        //Projects Gradients
        'gradient-kaya-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #22C55E, #22C55E, #F8F8FF, #F8F8FF)',
        'gradient-kaya-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #22C55E, #22C55E, #1B1B1F, #1B1B1F)',
        'gradient-scaleup-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #E84545, #E84545, #F8F8FF, #F8F8FF)',
        'gradient-scaleup-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #E84545, #E84545, #1B1B1F, #1B1B1F)',
        'gradient-lokal360-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #6D5FDF, #6D5FDF, #F8F8FF, #F8F8FF)',
        'gradient-lokal360-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #6D5FDF, #6D5FDF, #1B1B1F, #1B1B1F)',
        'gradient-printToScale-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #48A26A, #48A26A, #F8F8FF, #F8F8FF)',
        'gradient-printToScale-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #006D3A, #006D3A, #1B1B1F, #1B1B1F)',
        'gradient-mtmc-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #8C5E87, #8C5E87, #F8F8FF, #F8F8FF)',
        'gradient-mtmc-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #6E1269, #6E1269, #1B1B1F, #1B1B1F)',
        'gradient-portfolio2-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #F3A07D, #F3A07D, #F8F8FF, #F8F8FF)',
        'gradient-portfolio2-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #F3A07D, #F3A07D, #1B1B1F, #1B1B1F)',        
        'gradient-osaka-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #056839, #056839, #F8F8FF, #F8F8FF)',
        'gradient-osaka-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #056839, #056839, #1B1B1F, #1B1B1F)',
        'gradient-charik-dark': 'linear-gradient(to right, #F8F8FF, #F8F8FF, #FF7C57, #FF7C57 , #F8F8FF, #F8F8FF)',
        'gradient-charik-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #FF7C57, #FF7C57, #1B1B1F, #1B1B1F)'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'transparent':'transparent',
        'custom-white':{
          DEFAULT:'#F2F3F4',
          dark:'#E3E3E3'
        },
        'custom-dark':{
          light:'#181818',
          DEFAULT:'#1B1B1F',
        },
        'custom-orange':{
          DEFAULT:'#F3A07D',
          dark:'#E19865'
        },
        'custom-red':{
          DEFAULT:'#E96479',
          dark:'#C45258'
        },
        'custom-purple':'#7D6188',
        'custom-gray':{
          DEFAULT:'#AAA9AD',
          dark:'#A4A4A5'
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-slow': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'gradient': 'gradient 5s linear infinite',
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'infinite-scroll-slow': 'infinite-scroll 100s linear infinite',
        'grid': "grid 15s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      screens:{
        '2xl': '1400px',
      },

      letterSpacing: {
        tightest: '-.099em',
      }
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors, require("flowbite/plugin")],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config