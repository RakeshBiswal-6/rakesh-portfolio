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
        darkBg: '#05060A',        // Midnight Navy / Black
        darkNavy: '#07080E',      // Deep Workstation Graphite
        darkSurface: '#0B0D16',   // Surface Dark
        darkCard: '#10131F',      // Floating Glass Card
        darkBorder: '#1E2335',    // Subtle metallic frame
        accentPurple: '#A855F7',  // Electric Purple
        accentViolet: '#8B5CF6',  // Soft Violet
        accentBlue: '#38BDF8',    // Subtle Electric Blue
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
        'purple-glow': '0 0 35px rgba(168, 85, 247, 0.18)',
        'blue-glow': '0 0 35px rgba(56, 189, 248, 0.18)',
      },
    },
  },
  plugins: [],
};
