module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '50': 50,
        '75': 75,
        '100': 100,
        'auto': 'auto',
      },
      height: {
        '10vh': "10vh",
        '20vh': "20vh",
        '30vh': "30vh",
        '40vh': "40vh",
        '50vh': "50vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '100vh': "100vh",
      },

      inset: {
        '1/2': "50%"
      },


      fontFamily: {
        main: ['Montserrat'],
      },
      fontSize: {
        '2xs': "0.65rem"
      },
      colors: {
        dark: "#181818",
        primary: "#F4C500",
        secondary: "#E26B00",
        third: "#0C163D",
        fourth: "#090a0f",
      },
      backgroundOpacity: {
        "5": "0.05",
        "10": "0.1",
        "15": "0.15",
        "20": "0.2",
        "25": "0.25",
        "30": "0.3",
        "35": "0.35",
        "40": "0.4",
        "45": "0.45",
        "50": "0.5",
        "55": "0.55",
        "60": "0.6",
        "65": "0.65",
        "70": "0.7",
        "75": "0.75",
        "80": "0.8",
        "85": "0.85",
        "90": "0.9",
        "95": "0.95",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
