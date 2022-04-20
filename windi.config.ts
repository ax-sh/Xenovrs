import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  alias: {
    hstack: "flex items-center",
    vstack: "flex flex-col",
    icon: "w-6 h-6 fill-current",
    app: "text-red",
    fff: "bg-green-500",
    "app-border": "border-gray-200 dark:border-dark-300",
  },
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
