/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "adptive-m": "calc(23px + 6 * (100vw /1280))",
        "adptive-ml": "calc(30px + 8 * (100vw /1280))",
        "adptive-l": "calc(35px + 14 * (100vw /1280))",
      },
      colors: {
        pink: {
          regular: "#FFDDF6",
        },
        blue: {
          regular: "#016AF4",
        },
      },
    },
    fontFamily: {
      neue: ["BaseNeue", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    keyframes: {
      scale: {
        "0%": { transform: "scale(0)" },
        "100%": { transform: "scale(1))" },
      },
      appearsFromRight: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      appearsFromBottom: {
        "0%": { transform: "translateY(80%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      textUnderlineAnimation: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      scale: "scale 3s linear",
      appearsFromRight: "appearsFromRight 3s linear",
      appearsFromBottom: "appearsFromBottom 0.3s linear",
      textUnderlineAnimation: "textUnderlineAnimation 2s forwards",
    },
    screens: {
      xl1000: "1000px",
    },
  },
  plugins: [],
};
