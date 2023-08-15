/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],

  theme: {
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'tiny': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': ['46px', '56px'],
      '4xl': '48px',
      '5xl': ['56px', '68px'],
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {

      blue: {
        light: "#A65FC3",
        100: "#81668F",
        200: "#E7F3F6",
        300: "#9884A4",
        600: "#9140BB",
        500: "#8E3DBB",
        900: "#4777E1",
      },
      green: {
        light: "#A65FC3",
        100: "#90EE90",
        800: "#006400",
        900: "#61C690",
      },
      red: {
        light: "#A65FC3",
        100: "#BA4C15",
        800: "#FFEEE5",
      },

      black: {
        shadeOne: "#191D31",
        shadeTwo: "#131627"
      },
      white: "#fff",
      yellow: "#FFF382",
      teal: "#FCF7FF",
      gold: "#ED8448",
      red: "#DC2626",
      gray: {
        light: "#D1D2D6",
        100: "#F9F2FC",
        200: "#F6F3F8",
        300: "#F7E5FF",
        500: "#718096",
        600: "#B1A3B8",
        900: "#FCFAFC",
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #4777E1 10%, #05266D 7.4%)',
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for sidebar layout
      },
    },
  },

};
