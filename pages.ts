import { resolve } from "path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const pages = ["blog-preview-card"];

/**
 * Retrieves the pages and their corresponding file paths.
 * @returns An object containing the pages and their file paths.
 */
export default function getPages() {
  const input = {
    main: resolve(__dirname, "index.html"),
  };
  pages.forEach((page) => {
    input[page] = resolve(__dirname, `src/${page}/index.html`);
  });
  return input;
}
