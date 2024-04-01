import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        lima: {
          "50": "#f3fbea",
          "100": "#e4f6d1",
          "200": "#caeda9",
          "300": "#a8e076",
          "400": "#89d04b",
          "500": "#75c932",
          "600": "#509020",
          "700": "#3e6e1d",
          "800": "#34581c",
          "900": "#2d4b1c",
          "950": "#15290a",
        },
      },
    },
  },
} satisfies Partial<Config>;
