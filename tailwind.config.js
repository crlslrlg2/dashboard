import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        "1xl": "1400px",
      },
      colors: {
        primary: "#070B3D",
        secondary: "#7C7C91",
        tertiary: "#44E2E6",
        quaternary: "#F01B8C",
        quinary: "#101343",
        grayprimary: "#666890",
      },

      fontFamily: {
        sans: ["DMSans", ...defaultTheme.fontFamily.sans],
      },
      borderColor: {
        primary: "#9D9DAD30",
      },
      boxShadow: {
        main: "0px 0px 25px 8px rgba(10, 3, 29, 0.05)",
      },
      borderRadius: {
        primary: "6px",
      },
      padding: {
        mobilePrimary: "16px",
        tabletPrimary: "40px",
        primary: "65px",
      },
    },
  },
  plugins: [],
};
