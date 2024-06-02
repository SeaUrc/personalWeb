import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      screens: {
        'aspect-ratio-wide': {'raw': '(min-aspect-ratio: 1/1)'},
        'aspect-ratio-tall': {'raw': '(max-aspect-ratio: 1/1)'},
      }
    },
  },
  plugins: [],
} satisfies Config;
