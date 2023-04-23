/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#0047ff",
          secondary: "#4200FF",
          text: "#0081f9",
        },
        purple: "#5f00bd",
      },
      backgroundImage: {
        "mv-bg": "url(/images/mv-bg.jpg)",
      },
      backgroundPosition: {
        "mv-bg": "top left 80%",
      },
    },
  },
  plugins: [],
};
