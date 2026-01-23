import express from "express";
import { readFile } from "node:fs/promises";

const app = express();

app.get("/", async (req, res) => {
  const html = await readFile("../index.html", { encoding: "utf8" });
  res.send(html);
});

app.get("/index.js", async (req, res) => {
  const js = await readFile("../index.js", { encoding: "utf8" });
  res.type("application/javascript");
  res.send(js);
});

app.listen(3000, () => {
  console.log("Serveur launched at http://localhost:3000");
});
