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
      },
      animation: {
        slide: 'slide 2.5s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(150%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
