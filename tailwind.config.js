module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#30CAFB",
        secondary: "#4AFF9D",
        danger: "#F8DF00",
      }),
      backgroundImage: (theme) => ({
        "landing-page": "url('./Images/landing-bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
