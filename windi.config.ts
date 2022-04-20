import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FFFE55",
        },
      },
    },
  },
  plugins: [formsPlugin],
});
