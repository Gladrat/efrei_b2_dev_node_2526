import express from "express";

import sequelize from "./config/index.js";
import { createHero, getAllHeroes } from "./repositories/hero.repository.js";

await sequelize.sync({ force: true });
console.log("La base de données est synchro !");

await createHero({
  alias: "Batman",
  identity: "Bruce Wayne",
  powerDate: "01/01/2026",
});
await createHero({
  alias: "Joker",
  identity: "Bruce Wayne",
  powerDate: "01/01/2026",
});
await createHero({
  alias: "SuperNode",
  identity: "Ryan Dhal",
  powerDate: "01/01/2009",
});

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome on S.H.I.E.L.D API</h1>
<h2>The API is located on <a href="/api/v1">/api/v1</a><h2>`);
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "S.H.I.E.L.D API is working." });
});

app.get("/api/v1/heroes", async (req, res) => {
  res.send(await getAllHeroes());
});

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
