module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: { max: "780px" },
        tab:{min:"993px"}
      },
    },
  },
  plugins: [],
}