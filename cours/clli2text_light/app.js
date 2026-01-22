import fs from "fs/promises";
import path from "path";
import chalk from "chalk";

const IGNORE = [
  "node_modules",
  ".git",
  "package.json",
  "package-lock.json",
  "output.txt",
];

function formatSize(bytes) {
  const sizes = ["octets", "Ko", "Mo", "Go", "To"];
  if (bytes === 0) return "0 octets";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

async function processTree(
  directory,
  outputPath,
  indent = "",
  compiledContent = []
) {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(directory, file.name);

      if (IGNORE.includes(file.name)) {
        continue;
      }

      if (file.isDirectory()) {
        console.log(chalk.green(`${indent}📂 ${file.name}`));
        await processTree(
          filePath,
          outputPath,
          indent + "   ",
          compiledContent
        );
      } else {
        const stats = await fs.stat(filePath);
        const fileSize = formatSize(stats.size);
        const content = await fs.readFile(filePath, "utf-8");
        compiledContent.push(
          `\n=== ${file.name} (${fileSize}) ===\n${content}\n`
        );

        console.log(chalk.yellow(`${indent}📄 ${file.name}`));
      }
    }
    await fs.writeFile(outputPath, compiledContent.join("\n"), "utf-8");
  } catch (error) {
    console.error(chalk.red(`Erreur : ${error.message}`));
  }
}

const args = process.argv.slice(2);
const directory = args[0] || "./";
const outputFile = args[1] || "output.txt";

console.log(
  chalk.blue(`\nFile and folder tree for : ${directory}\n`)
);

await processTree(directory, outputFile);

console.log(
  chalk.blue(`\nCompilation completed. Content saved in "${outputFile}"`)
);
console.log("\n");
