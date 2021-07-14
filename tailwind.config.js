module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        delagothicone: ["Dela Gothic One"],
        poppins: ["Poppins"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
    boxShadow: { blue: "0 0 5px rgba(81, 203, 238, 1)" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
