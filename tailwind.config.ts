import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        apple: {
          "50": "#e8ffe5",
          "100": "#cbffc7",
          "200": "#9aff96",
          "300": "#5cfd59",
          "400": "#28f427",
          "500": "#07db0a",
          "600": "#01ac06",
          "700": "#06850c",
          "800": "#0c6811",
          "900": "#0f5815",
          "950": "#023107",
        },
        cyprus: {
          DEFAULT: "#063c3c",
        },
      },
      fontFamily: {
        // display: ["Rubik Doodle Shadow", ...defaultTheme.fontFamily.serif],
      },
    },
  },
} satisfies Partial<Config>;
