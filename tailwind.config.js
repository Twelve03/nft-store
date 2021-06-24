module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
