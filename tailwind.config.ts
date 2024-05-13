import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'custom-white':{
        DEFAULT:'#F8F8FF',
        dark:'#E3E3E3'
      },
      'custom-dark':{
        light:'#353537',
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
  },
  plugins: [],
};
export default config;
