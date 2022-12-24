module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0060E0",
          secondary: "#34A991",
          accent: "#3A4256",
          neutral: "#3d4451",
          white: '#fff',
          "base-100": "#ffffff",
        },
      },
     
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
}

//3A4256