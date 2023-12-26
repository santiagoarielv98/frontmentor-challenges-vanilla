import { defineConfig } from "vite";
import getPages from "./pages";

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: getPages(),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});
