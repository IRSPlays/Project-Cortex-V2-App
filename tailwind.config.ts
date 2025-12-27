import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3c83f6",
        "background-light": "#f5f7f8",
        "background-dark": "#101722",
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "subtle-light": "#e2e8f0",
        "subtle-dark": "#334155",
        "primary-dark": "#2563eb",
        "surface-dark": "#1f2937",
        "surface-light": "#ffffff",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
