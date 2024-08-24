/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '2800px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1000px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '800px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '600px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '380px' },
      // => @media (max-width: 639px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        'gang': ['gang'],
        'jersey': ['Jersey']
      },
      backgroundImage: {
        'hero': "url('./assets/image/landing.png')",
        'dep_bg': "url('./assets/image/department_bg.png')",
      },
      dropShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'sm-red': '0px 0px 6px rgba(255, 0, 0, .8)',
        'md': '0px 0px 8px rgba(0, 0, 0, 1)',
        'lg': '0px 0px 12px rgba(0, 0, 0, .8)',
      },
      colors: {
        customOrange: '#D9913B',
        customRed: '#DD5454',
        customBlue: '#1377B5',
      },
    },
  },
  plugins: [],
}