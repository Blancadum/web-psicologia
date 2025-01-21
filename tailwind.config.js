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
        background: "#ffffff", // Fondo claro
        foreground: "#171717", // Texto oscuro
        darkBackground: "#0a0a0a", // Fondo oscuro
        darkForeground: "#ededed", // Texto claro
      },
      fontFamily: {
        sans: ["Lexend Deca", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(1.4rem, 2.3vw, 2rem)", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["clamp(1.3rem, 2vw, 1.8rem)", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["clamp(1.1rem, 1.8vw, 1.6rem)", { lineHeight: "1.4", fontWeight: "500" }],
        paragraph: [
          "clamp(0.9rem, 1.4vw, 1.05rem)",
          { lineHeight: "1.8", fontWeight: "400" },
        ],
      },
      spacing: {
        section: "48px", // Espaciado vertical entre secciones
        pagePadding: "18px", // Padding global
        cardPadding: "16px", // Compactación de tarjetas
      },
      maxWidth: {
        container: "96rem", // Ancho máximo para contenedores grandes
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, theme }) {
      addBase({
        ":root": {
          "--background": theme("colors.background"),
          "--foreground": theme("colors.foreground"),
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--background": theme("colors.darkBackground"),
            "--foreground": theme("colors.darkForeground"),
          },
        },
        body: {
          color: "var(--foreground)",
          background: "var(--background)",
          fontFamily: theme("fontFamily.sans"),
        },
        h1: {
          "@apply text-h1 mb-4 text-gray-900 text-center": "",
        },
        h2: {
          "@apply text-h2 font-bold mb-6 text-gray-900 text-center": "", // Más bold y con margen inferior
        },
        h3: {
          "@apply text-h3 mb-4 text-gray-700": "",
        },
        a: {
          cursor: "pointer",
        },
        nav: {
          transition: "transform 0.3s ease-in-out",
        },
        header: {
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        },
        "nav ul li": {
          marginBottom: "1rem",
        },
        "@screen md": {
          "nav ul li": {
            marginBottom: "0",
          },
        },
      });

      addComponents({
        ".section": {
          "@apply container mx-auto py-section px-6 md:px-8 lg:px-12": "",
        },
        ".h1-text": {
          "@apply text-h1 mb-4 text-gray-900 text-center": "",
        },
        ".h2-text": {
          "@apply text-h2 font-bold mb-6 text-gray-900 text-center": "", // Aplicamos más bold aquí
        },
        ".faq-title": {
          "@apply text-2xl font-bold text-gray-900 mb-2": "",
        },
        ".faq-description": {
          "@apply text-gray-700 mb-6": "",
        },
        ".faq-item": {
          "@apply bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden": "",
        },
        ".faq-question": {
          "@apply flex items-center justify-between w-full px-4 py-3 text-left text-brandPurple font-semibold focus:outline-none hover:bg-gray-50 transition-all": "",
        },
        ".faq-answer": {
          "@apply px-4 pb-4 text-gray-600 leading-relaxed transition-all duration-300": "",
        },
        ".hero-container": {
          "@apply container mx-auto text-center py-section px-6 md:px-12 lg:px-16": "",
        },
        ".hero-paragraph": {
          "@apply text-paragraph mb-8 mt-6": "",
        },
        ".hero-image": {
          "@apply w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg": "",
        },
        ".page-layout": {
          "@apply space-y-12 px-6 md:px-12 lg:px-16": "",
        },
        "h1, h2, h3": {
          "@apply mt-10": "",
        },
        "p.text-paragraph": {
          "@apply mt-6": "",
        },
      });
    },
  ],
};
