import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'radial-circle': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-flow': 'linear-gradient(to right, #F3A07D, #E96479, #7D6188, #7D6188, #E96479, #F3A07D)'
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
  plugins: [addVariablesForColors],
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
