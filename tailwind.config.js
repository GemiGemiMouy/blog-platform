/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
   extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',  // emerald-500 mint green
          light: '#059669',    // emerald-600 deeper teal
        },
        textPrimary: '#064E3B',   // emerald-900 dark teal
        textSecondary: '#065F46', // emerald-800
        bgLight: '#ECFDF5',       // emerald-50 pale mint background
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

