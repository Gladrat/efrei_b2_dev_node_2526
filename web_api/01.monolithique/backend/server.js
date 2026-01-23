import express from "express";
import { readFile } from "node:fs/promises";

const heroes = ["SuperCORS"];

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const html = await readFile("../index.html", { encoding: "utf8" });
  res.send(html);
});

app.get("/index.js", async (req, res) => {
  console.log("Liste des héros:", heroes);

  const js = await readFile("../index.js", { encoding: "utf8" });
  res.type("application/javascript");
  res.send(js);
});

app.get("/heroes", (req, res) => {
  res.send(heroes);
});

app.post("/heroes", (req, res) => {
  heroes.push(req.body.hero);
  res.send("Le héro a bien été ajouté:", req.body.hero);
});

app.listen(3000, () => {
  console.log("Serveur launched at http://localhost:3000");
});
