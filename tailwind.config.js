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
      button: "#F0f0f0",
      gray: "#C1C1C1",
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
