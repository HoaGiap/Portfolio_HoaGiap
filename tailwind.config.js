/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier Prime', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Design tokens from DESIGN.md (Hermes Agent)
        primary: {
          DEFAULT: '#0000F2',
          hover: '#1a1aff',
          dim: 'rgba(0, 0, 242, 0.15)',
        },
        secondary: {
          DEFAULT: '#000091',
        },
        surface: {
          DEFAULT: '#101010',
          elevated: '#161616',
          card: '#141414',
          border: 'rgba(0, 0, 242, 0.3)',
        },
        'on-surface': {
          DEFAULT: '#F2F2F2',
          muted: '#8e8e8e',
          subtle: '#525252',
        },
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
      },
      boxShadow: {
        'hermes-inset': 'inset 0 0 0 0.5px #0000F2',
        'hermes-inset-subtle': 'inset 0 0 0 0.5px rgba(0, 0, 242, 0.35)',
        'hermes-glow': '0 0 25px -4px rgba(0, 0, 242, 0.5)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
