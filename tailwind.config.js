/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        byp: ["Broted-young-plant"],
        bypscript: ["Broted-young-plant-script"],
        qslight: ["Quiche-sans-light"],
        lato: ["Lato"],
      },
      screens: {
        tablet: "960px",
        desktop: "1280px",
      },
      colors: {
        primary: {
          OlderSage: "#819D6D",
          Olive: "#46553B",
        },
        secondary: {
          "Brl-01": "#F7E4BD",
          "Brl-02": "#E7CD94",
          "Brl-03": "#B49349",
          "Brl-04": "#5E460F",
        },
        neutral: {
          White: "#FFF8EE",
          Black: "#36290B",
          Grey: "#B8B2A4",
        },
      },
      fontSize: {},
    },
  },
  plugins: [],
};
