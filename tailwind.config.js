/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0e17", // Deep blue/almost black
        secondary: "#6e44ff", // Purple accent
        accent: "#00e5ff", // Neon blue accent
        dark: "#050812", 
        "dark-light": "#0f1524", // Slightly lighter than dark for contrast
        light: "#e6effe",
        slate: "#8892b0",
        muted: "#515a77",
        glass: "rgba(255, 255, 255, 0.05)",
        // New enhanced color variations
        "accent-light": "#7df3ff",
        "accent-dark": "#00b3cc",
        "secondary-light": "#8d6cff",
        "secondary-dark": "#5535cc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neuro': '5px 5px 10px #080c15, -5px -5px 10px #0c101a',
        'neuro-inset': 'inset 5px 5px 10px #080c15, inset -5px -5px 10px #0c101a',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'card-hover': '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
        'inner-glow': 'inset 0 0 20px 5px rgba(110, 68, 255, 0.15)',
        // New enhanced shadow variations
        'accent-glow': '0 0 15px 2px rgba(0, 229, 255, 0.3)',
        'secondary-glow': '0 0 15px 2px rgba(110, 68, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, rgba(6, 11, 20, 0.5) 0%, rgba(13, 18, 30, 0.5) 100%)',
        'data-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#8892b0',
            h1: {
              color: '#e6effe',
            },
            h2: {
              color: '#e6effe',
            },
            h3: {
              color: '#e6effe',
            },
            a: {
              color: '#6e44ff',
              '&:hover': {
                color: '#00e5ff',
              },
            },
            code: {
              color: '#00e5ff',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
