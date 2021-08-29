module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        big: "52px",
        signCont: "49px",
      },
      width: {
        30: "30%",
        70: "70%",
        35: "35%",
      },
    },

    colors: {
      primary: "#07A098",
      secondary: "#1984FF",
      white: "#FFFFFF",
      border: "#0EB4F6",
      inputField: "#F0F0F0",
      textBody: "#686868",
      black: "#000000",
      boldtext: "011B25",
      desc: "#9D9D9D",
      footer: "#FCFCFC",
      btnText:"#C1C1C1"
    },
    fontFamily: {
      Poppins: "Poppins",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
