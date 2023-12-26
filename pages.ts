const pages: string[] = ["blog-preview-card"];

/**
 * Retrieves the pages and their corresponding file paths.
 * @returns An object containing the pages and their file paths.
 */
export default function getPages(): Record<string, string> {
  const input = {
    main: "/index.html",
  };

  pages.forEach((page) => {
    input[page] = `/${page}/index.html`;
  });
  return input;
}
