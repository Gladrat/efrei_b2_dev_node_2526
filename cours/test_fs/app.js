import { readFile, writeFile } from "node:fs/promises";

const content = await readFile("./data.json", { encoding: "utf8" });

console.log("Fini lol !");