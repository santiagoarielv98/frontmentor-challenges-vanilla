import { sync as globSync } from "glob";
import path from "path";

const _defaultInput = {
  index: path.resolve("src/index.html"),
};

export default function getPages() {
  const pattern = "src/*/index.html";
  const files = globSync(pattern);

  const input: Record<string, string> = _defaultInput ?? {};
  files.forEach((filePath) => {
    const folderName = path.basename(path.dirname(filePath));
    input[folderName] = path.resolve(filePath);
  });

  return input;
}
