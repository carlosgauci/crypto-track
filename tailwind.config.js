module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },

    animation: {
      "spin-slow": "spin 4s linear infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
