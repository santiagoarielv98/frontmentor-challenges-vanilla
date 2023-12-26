const pages = ["blog-preview-card"];

/**
 * Retrieves the pages and their corresponding file paths.
 * @returns An object containing the pages and their file paths.
 */
export default function getPages() {
  const input = {};
  pages.forEach((page) => {
    // input[page] = `src/${page}/index.html`;
    input[page] = `${page}/index.html`;
  });
  return input;
}
