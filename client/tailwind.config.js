/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      hemocyanin: '#180048',
      ice: '#f0ffff',
      plum: '#600e6b',
      purpleHaze: '#a49fc8',
      siphon: '#100030',
      sohoLights: '#f050f8',
    },
    extend: {
      gap: {
        2.5: '10px',
      },
      boxShadow: {
        'custom-light': '2px 2px 4px 0px rgba(3, 3, 2, 0.15)',
      },
    },
  },
};