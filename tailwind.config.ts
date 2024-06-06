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
    'dark:group-hover:bg-gradient-mtmc-dark'
  ],
  theme: {
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
        'gradient-mtmc-light': 'linear-gradient(to right, #1B1B1F, #1B1B1F, #6E1269, #6E1269, #1B1B1F, #1B1B1F)'
      },

      colors: {
        'transparent':'transparent',
        'custom-white':{
          DEFAULT:'#F8F8FF',
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

      animation: {
        'gradient': 'gradient 5s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },

      screens:{
        '2xl': '1400px',
      },

      letterSpacing: {
        tightest: '-.099em',
      }

    }, 
  },
  plugins: [addVariablesForColors, require("flowbite/plugin")],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
