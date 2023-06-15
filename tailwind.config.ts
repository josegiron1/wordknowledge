import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "180": "180deg",
      },
      translate: {
        "neg-100": "-100%",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
} satisfies Config;
