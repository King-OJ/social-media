/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Rubik", "Arial", "sans-serif"]
    },
    colors: {
      "transparent": 'transparent',
      "inherit": 'inherit',
      'lightBlue': '#5DA9E9',
      'darkBlue': '#003F91',
      'darkPink': '#6D326D',
      'lightGray': '#E5F4E3',
      "primary50": "#E6FBFF",
      "primary100": "#CCF7FE",
      "primary200": "#99EEFD",
      "primary300": "#66E6FC",
      "primary400": "#33DDFB",
      "primary500": "#00D5FA",
      "primary600": "#00A0BC",
      "primary700": "#006B7D",
      "primary800": "#00353F",
      "primary900": "#001519",
      "grey0": "#FFFFFF",
      "grey10": "#F6F6F6",
      "grey50": "#F0F0F0",
      "grey100": "#E0E0E0",
      "grey200": "#C2C2C2",
      "grey300": "#A3A3A3",
      "grey400": "#858585",
      "grey500": "#666666",
      "grey600": "#4D4D4D",
      "grey700": "#333333",
      "grey800": "#1A1A1A",
      "grey900": "#0A0A0A",
      "grey1000": "#000000",
    },
    extend: {},
  },
  plugins: [],
}

