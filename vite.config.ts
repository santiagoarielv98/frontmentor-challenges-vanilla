import { defineConfig } from "vite";
import getPages from "./pages";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/frontmentor-challenges-vanilla/" : "",
  root: "src",
  build: {
    rollupOptions: {
      input: getPages(),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});
