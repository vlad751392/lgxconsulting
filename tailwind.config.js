/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "adptive-m": "calc(23px + 6 * (100vw /1280))",
        "adptive-ml": "calc(29px + 10 * (100vw /1280))",
        "adptive-l": "calc(35px + 14 * (100vw /1280))",
      },
      colors: {
        pink: {
          regular: "#FFDDF6",
        },
        blue: {
          regular: "#016AF4",
        },
        gray: {
          regular: "#f6f6f6",
          secondary: "#564F68",
          divider: "#e1e1e1",
        },
      },
      boxShadow: {
        'custom': '40px 60px 60px -20px rgba(0,0,0,0.175)',
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
        "100%": { transform: "scale(1)" },
      },
      appearsFromRight: {
        "0%": { transform: "translateX(30%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      appearsFromBottom: {
        "0%": { transform: "translateY(30%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      textUnderlineAnimation: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      scale: "scale 0.7s forwards",
      appearsFromRight: "appearsFromRight 0.7s forwards",
      appearsFromBottom: "appearsFromBottom 1s forwards",
      appearsFromBottomLong: "appearsFromBottom 1.5s forwards 0.5s",
      textUnderlineAnimation: "textUnderlineAnimation 2s forwards",
    },
  },
  plugins: [],
};
