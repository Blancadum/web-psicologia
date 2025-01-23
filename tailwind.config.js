/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/client/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
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
        h1: ["text-2xl md:text-3xl", { fontWeight: "700" }],
        h2: ["clamp(1.3rem, 2vw, 1.8rem)", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["clamp(1.1rem, 1.8vw, 1.6rem)", { lineHeight: "1.4", fontWeight: "500" }],
        paragraph: [
          "clamp(0.9rem, 1.4vw, 1.05rem)",
          { lineHeight: "1.8", fontWeight: "400" },
        ],
      },
      spacing: {
        section: "32px",
        pagePadding: "16px",
        cardPadding: "16px",
      },
      maxWidth: {
        container: "96rem",
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities, theme }) {
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
          "@apply text-2xl md:text-3xl font-bold text-center text-brandPurple mb-4": "",
        },
        h2: {
          "@apply text-h2 font-bold mb-6 text-gray-900 text-center": "",
        },
        h3: {
          "@apply text-h3 mb-4 text-gray-700": "",
        },
        "h1, h2, h3": {
          "@apply mt-4": "",
        },
        a: {
          cursor: "pointer",
        },
      });

      addComponents({
        ".section": {
          "@apply container mx-auto px-6 md:px-8 lg:px-12": "",
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
          "@apply w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto": "",
        },
        ".page-layout": {
          "@apply space-y-4 px-pagePadding": "",
        },
        "p.text-paragraph": {
          "@apply mt-6": "",
        },
      });

      addUtilities(
        {
          ".text-gradient": {
            background: "linear-gradient(to right, #EC4899, #5B21B6)", // Cambia a tus colores preferidos
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
          ".space-y-4": {
            "& > * + *": {
              marginTop: theme("spacing.4"),
            },
          },
        },
        { variants: ["responsive"] }
      );
    },
  ],
};
