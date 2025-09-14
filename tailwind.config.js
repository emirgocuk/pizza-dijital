/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        pizza: {
          yellow: "#FFD24D",
          red: "#FF3B30",
          green: "#22C55E",
          charcoal: "#0B0B0C",
          cream: "#FFF7E0",
        },
      },
      container: { center: true, padding: "1rem", screens: { lg: "1120px", xl: "1200px" } },
    },
  },
  plugins: [],
};
export default config;
