module.exports = {
  content: ["./dist/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        shade: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shade: "shade 1s ease-in-out",
      },
      fontFamily: {
        header: ["Pacifico", "cursive"],
        body: ["Itim", "sans-serif"],
      },
      backgroundImage: {
        pizza: "url('assets/images/pizza-oven.png')",
        restaurant: "url('assets/images/restaurant.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
