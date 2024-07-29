/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"1rem",
        screens:{
          sm:"540px",
          md:"720px",
          lg:"960px",
          xl:"1140px",
          "2xl":"1320px"
        }
      },
      colors:{
        mainColor:"#1ABC9C",
        navColor:"#2C3E50"
      }
    },
  },
  plugins: [],
};
