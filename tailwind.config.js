/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#08090C',        // Deep Charcoal / Midnight Black
        darkSurface: '#0E1015',   // Dark Graphite
        darkCard: '#13161D',      // Card Slate
        darkBorder: '#20242F',    // Subtle metallic border
        accentBlue: '#38BDF8',    // Soft Electric Blue
        accentViolet: '#818CF8',  // Subtle Violet
        accentSilver: '#E2E8F0',  // Pure Silver
        textMuted: '#94A3B8',     // Soft Slate Grey
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.7), 0 1px 0 rgba(255, 255, 255, 0.05) inset',
        'subtle-glow': '0 0 30px rgba(56, 189, 248, 0.12)',
        'violet-glow': '0 0 30px rgba(129, 140, 248, 0.12)',
      },
    },
  },
  plugins: [],
};
