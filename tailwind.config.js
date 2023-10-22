/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        darkMode: "var(--color-bg-dark-primary)",
        darkText: "var(--color-text-dark-mode-white)",
        darkElement: "var(--color-element-primary)",
        lightElement: "var(--color-text-light-mode-blue)",
        lightModeInput: "var(--color-light-mode-input)",
        lightMode: "var(--color-bg-light-primary)",
      },
      textColor: {
        darkMode: "var(--color-text-dark-mode-white)",
        lightMode: "var(--color-text-light-mode-blue)",
      },
      
    },
  },
  plugins: [],
};
