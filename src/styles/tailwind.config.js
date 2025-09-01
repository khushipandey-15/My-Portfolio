/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        dark: "#020c1b",
        light: "#ccd6f6",
        slate: "#8892b0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
