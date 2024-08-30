import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",

  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
} as Config;
