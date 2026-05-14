module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2.5rem',
      },
      colors: {
        brand: {
          green: '#2D6A4F',
          light: '#F0F4F2'
        }
      }
    },
  },
  plugins: [],
}