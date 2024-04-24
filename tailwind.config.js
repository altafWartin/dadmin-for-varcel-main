/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f5f7fb",
        black: "#000",
        "bodytext-100": "#0c063a",
        white: "#fff",
        coral: {
          "100": "#ff8548",
          "200": "rgba(255, 133, 72, 0.1)",
        },
        orange: "#FF8548",
        whitesmoke: "#ededed",
        "bodytext-50": "#5d5b73",
        "text-100": "#1a1a1a",
        stroke: "#e2e2e2",
        gray: {
          "100": "#fafafa",
          "200": "rgba(255, 255, 255, 0.7)",
        },
        darkslategray: {
          "100": "#3b3b3b",
          "200": "#373737",
        },
        midnightblue: "rgba(12, 6, 58, 0.7)",
        "sec-color-3": "#605bff",
        "sec-color-2": "#4cd7f6",
        dimgray: "rgba(93, 91, 115, 0.7)",
        limegreen: "#4cc830",
        orangered: "#fd521b",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      lg: "1.13rem",
      sm: "0.88rem",
      base: "1rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "2xs": "0.69rem",
      xl: "1.25rem",
      "3xs": "0.63rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};