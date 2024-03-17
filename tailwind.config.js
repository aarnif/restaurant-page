module.exports = {
  content: ["./dist/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "75%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shade: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        opacity: "opacity 1.2s ease-in-out",
        shade: "shade 1s ease-in-out",
      },
      fontFamily: {
        name: ["Blacksword", "sans-serif"],
        header: ["Pacifico", "sans-serif"],
        body: ["Itim", "sans-serif"],
      },
      backgroundImage: {
        pizza: "url('assets/images/pizza-oven.png')",
        restaurant: "url('assets/images/restaurant.png')",
      },
      textShadow: {
        default: "1px 1px 1px #000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
