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
        mobile: '360px',
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
        'MainTitle' : ['2.25rem', {letterSpacing: '0.3rem', lineHeight: '100%'}],
        'SubTitle' : ['1.5rem'],
        'Heading1' : '20px',
        'Heading2' : ['20px', {letterSpacing: '0.04rem'}],
        'Heading3' : '20px',
        'Heading4' : ['1rem'],
        'Body' : '14px',
        'BodyLarge': '36px',
        'BodySmall' : '20px'
      },
      maxWidth: {
        'mobile-invitation': '500px',
        40: '160px',
        82: '20.5rem'
      },
      spacing: {
        30: '7.5rem',
        21: '5.25rem'
      },
      boxShadow: {
        'MainTitle-outline': '0 0 0 0.5px #B49349'
      },
      letterSpacing: {
        0.24: '0.24rem'
      },
      width: {
        85: '85%'
      },
      gap: {
        9: '2.25rem'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
