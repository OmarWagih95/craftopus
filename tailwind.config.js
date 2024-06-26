/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero':"url(/craftopusWeb.jpg)",
          'smallHero':"url(/smallHero.jpg)",
          'dodo':"url(/paintpurple.png)"
      },
      colors:{
        primary :'#D04848',
        secondary:'#F3B95F'
      }
    },
  },
  plugins: [],
};
  