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
        darkBackground: "#0a0a0a",
        darkForeground: "#ededed",
      },
      fontFamily: {
        sans: ["Lexend Deca", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(1.8rem, 4vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }], // Encabezado principal
        h2: ["clamp(1.6rem, 3.5vw, 2.2rem)", { lineHeight: "1.3", fontWeight: "600" }], // Segundo nivel
        h3: ["clamp(1.4rem, 3vw, 2rem)", { lineHeight: "1.4", fontWeight: "500" }], // Tercer nivel
        h4: ["clamp(1.2rem, 2.5vw, 1.8rem)", { lineHeight: "1.5", fontWeight: "500" }], // Cuarto nivel
        paragraph: ["clamp(1rem, 2vw, 1.25rem)", { lineHeight: "1.8" }], // Párrafo estándar
        subtitle: ["clamp(1rem, 1.8vw, 1.2rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "40px",
        "section-md": "64px",
        sectionPadding: "16px",
      },
      maxWidth: {
        container: "112rem", // Ajusta el ancho máximo
        section: "112rem",
      },
      boxShadow: {
        card: "0 2px 5px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        h1: {
          marginBottom: "1.5rem",
          marginTop: "1rem",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // Ajustado más pequeño y responsive
          lineHeight: "1.5",
          fontWeight: "500", // Menos bold
        },
        h2: {
          marginBottom: "1.25rem",
          marginTop: "0.75rem",
          fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", // Ajustado más pequeño y responsive
          lineHeight: "1.5",
          fontWeight: "500",
        },
        h3: {
          marginBottom: "1rem",
          marginTop: "0.5rem",
          fontSize: "clamp(1.4rem, 3vw, 2rem)", // Ajustado más pequeño y responsive
          lineHeight: "1.5",
          fontWeight: "500",
        },
        h4: {
          marginBottom: "0.75rem",
          marginTop: "0.5rem",
          fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", // Ajustado más pequeño y responsive
          lineHeight: "1.5",
          fontWeight: "500",
        },
        p: {
          fontSize: "clamp(1rem, 2vw, 1.25rem)", // Párrafo más legible
          lineHeight: "1.8",
          marginBottom: "1rem",
          fontWeight: "400",
        },
      });
    },
  ],
};
