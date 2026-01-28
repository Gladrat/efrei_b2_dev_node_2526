import express from "express";

import sequelize from "./config/index.js";
import { heroController } from "./controller/index.js";
import { createHero } from "./services/hero.service.js";
import { heroService } from "./services/index.js";

await sequelize.sync({ force: true });
console.log("La base de données est synchro !");

const batman = await createHero({
  alias: "Batman",
  identity: "Bruce Wayne",
  powerDate: "2026-01-01",
});
await createHero({
  alias: "Joker",
  identity: "Bruce Wayne",
  powerDate: "2026-01-01",
});
await createHero({
  alias: "SuperNode",
  identity: "Ryan Dhal",
  powerDate: "2029-01-01",
});

await heroService.deleteHero(batman.id);

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "medium" }).format(new Date())} ${req.method} ${req.url} ${JSON.stringify(req.body)}`,
  );
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome on S.H.I.E.L.D API</h1>
<h2>The API is located on <a href="/api/v1">/api/v1</a><h2>`);
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "S.H.I.E.L.D API is working." });
});

app.get("/api/v1/heroes", heroController.getAllHeroes);
app.get("/api/v1/heroes/:id", heroController.getHeroById);

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
