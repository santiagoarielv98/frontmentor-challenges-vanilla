import { defineConfig } from "vite";
import getPages from "./pages";

export default defineConfig({
  base: "/frontmentor-challenges-vanilla/",
  root: "src",
  build: {
    rollupOptions: {
      input: getPages(),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});
