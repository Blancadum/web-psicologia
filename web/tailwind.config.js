export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      colors: {
        brandPurple: "#5B21B6",
        background: "#ffffff",
        foreground: "#171717",
        darkBackground: "#0a0a0a",
        darkForeground: "#ededed",
      },
      fontFamily: {
        sans: ["Lexend Deca", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: "2rem",
        h2: "1.75rem",
        h3: "1.5rem",
        paragraph: "1rem",
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
          "@apply bg-background text-foreground font-sans": "",
        },
        h1: {
          "@apply text-h1 md:text-3xl font-bold text-center text-brandPurple mb-4": "",
        },
        h2: {
          "@apply text-h2 font-bold mb-6 text-gray-900 text-center": "",
        },
        h3: {
          "@apply text-h3 mb-4 text-gray-700": "",
        },
        a: {
          "@apply cursor-pointer text-brandPurple hover:underline": "",
        },
      });

      addComponents({
        ".section": "@apply container mx-auto px-6 md:px-8 lg:px-12",
        ".faq-title": "@apply text-2xl font-bold text-gray-900 mb-2",
        ".faq-description": "@apply text-gray-700 mb-6",
        ".faq-item": "@apply bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden",
        ".faq-question": "@apply flex items-center justify-between w-full px-4 py-3 text-left text-brandPurple font-semibold focus:outline-none hover:bg-gray-50 transition-all",
        ".faq-answer": "@apply px-4 pb-4 text-gray-600 leading-relaxed transition-all duration-300",
        ".hero-container": "@apply container mx-auto text-center py-12 px-6 md:px-12 lg:px-16",
        ".hero-paragraph": "@apply text-paragraph mb-8 mt-6",
        ".hero-image": "@apply w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto",
        ".page-layout": "@apply space-y-4 px-4 md:px-8",
      });

      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to right, #EC4899, #5B21B6)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".shadow-custom": {
          "box-shadow": "0 4px 10px rgba(0,0,0,0.15)",
        },
      });
    },
  ],
};
