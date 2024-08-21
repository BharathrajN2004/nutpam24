/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      dropShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '0px 0px 8px rgba(0, 0, 0, 1)',
        'lg': '0px 0px 12px rgba(0, 0, 0, .8)',
      },
    },
  },
  plugins: [],
}