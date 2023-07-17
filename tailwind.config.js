/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#85f7b4",

          secondary: "#9089d6",

          accent: "#3dce8d",

          neutral: "#191a1f",

          "base-100": "#ffffff",

          info: "#89b0e6",

          success: "#115a48",

          warning: "#f0bc2d",

          error: "#dd472c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
