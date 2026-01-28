module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5e9',   // Very light green
          100: '#c8e6c9',  // Soft green
          200: '#a5d6a7',  // Fresh mint green
          300: '#81c784',  // Bright green
          400: '#66bb6a',  // Vibrant leaf green
          500: '#4caf50',  // Classic green
          600: '#43a047',  // Deep green
          700: '#388e3c',  // Rich forest green
          800: '#2e7d32',  // Dark green
          900: '#1b5e20',  // Strong dark green
          950: '#0f3c0d',  // Deepest shade
        },
        secondary:{
          100: '#F9FBE7',
        }
      },
    },
  },
  plugins: [],
}
