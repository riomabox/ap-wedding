/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        byp: ["Broted-young-plant"],
        bypscript: ["Broted-young-plant-script"],
        qslight: ["Quiche-sans-light"],
        qsmedium: ["Quiche-sans-medium"],
        qsregular: ["Quiche-sans-regular"],
        qsthin: ["Quiche-sans-thin"],
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
      fontSize: {
        'MainTitle' : ['64px', {letterSpacing: '0.1rem'}],
        'SubTitle' : ['48px'],
        'Heading1' : '40px',
        'Heading2' : ['36px', {letterSpacing: '0.4rem'}],
        'Heading3'  : '36px',
        'Heading4' : ['28px', {letterSpacing: '0.24rem'}],
        'Body' : '28px',
        'BodyLarge': '36px',
        'BodySmall' : '20px'
      },
    },
  },
  plugins: [],
};
