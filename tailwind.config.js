module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        jump: "jump 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
