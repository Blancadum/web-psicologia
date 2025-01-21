/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#5B21B6",
        brandPink: "#EC4899",
        background: "#ffffff",
        foreground: "#171717",
      },
      fontFamily: {
        sans: ["Lexend Deca", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(1.5rem, 2.5vw, 2.2rem)", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["clamp(1.4rem, 2.2vw, 2rem)", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["clamp(1.2rem, 2vw, 1.8rem)", { lineHeight: "1.4", fontWeight: "500" }],
        paragraph: [
          "clamp(0.95rem, 1.5vw, 1.1rem)",
          { lineHeight: "1.8", fontWeight: "400" },
        ],
      },
      spacing: {
        section: "48px", // Más aire entre secciones
        sectionPadding: "22px", // Más aire dentro de secciones
        pagePadding: "20px", // General para todos los lados
      },
      maxWidth: {
        container: "96rem", // Pantallas grandes
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        h1: {
          textAlign: "center", // Centramos encabezados
          fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
          marginBottom: "2rem",        },
        h2: {
          textAlign: "center",
          fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
          marginBottom: "2rem",
        },
        h3: {
          textAlign: "left",
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          marginBottom: "2rem",
        },
        p: {
          fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", // Reducimos tamaño
          lineHeight: "1.8",
          marginBottom: "2rem", // Más espacio entre párrafos
        },
      });
    },
  ],
};
