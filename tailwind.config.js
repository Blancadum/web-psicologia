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
        h1: ["clamp(1.8rem, 3vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["clamp(1.6rem, 2.8vw, 2.2rem)", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["clamp(1.4rem, 2.5vw, 2rem)", { lineHeight: "1.4", fontWeight: "500" }],
        paragraph: ["clamp(1rem, 1.8vw, 1.25rem)", { lineHeight: "1.8" }],
      },
      spacing: {
        section: "40px",
        sectionPadding: "16px",
        pagePadding: "16px", // Ajuste base para todos los lados
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
          textAlign: "center", // Centramos los encabezados por defecto
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
        },
        p: {
          fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
          lineHeight: "1.8",
        },
      });
    },
  ],
};
