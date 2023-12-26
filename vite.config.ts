import { defineConfig } from "vite";
import getPages from "./pages";

export default defineConfig({
  build: {
    rollupOptions: {
      input: getPages(),
    },
  },
});
