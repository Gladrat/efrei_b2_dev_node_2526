import express from "express";

import sequelize from "./config/index.js";
import Hero from "./models/hero.model.js";

await sequelize.sync({ force: true });
console.log("La base de données est synchro !");

await Hero.create({
  alias: "Batman",
  identity: "Bruce Wayne",
  powerDate: "01/01/2026",
});
await Hero.create({
  alias: "Joker",
  identity: "Bruce Wayne",
  powerDate: "01/01/2026",
});
await Hero.create({
  alias: "SuperNode",
  identity: "Ryan Dhal",
  powerDate: "01/01/2009",
});
// console.log(newHero.id);

// const batman = await Hero.findByPk(newHero.id)
// console.log(batman);

// await batman.update({alias: "Joker"})
// await Hero.create(b)

// const r = await Hero.findOne({where: {alias: "Joker"}})
// console.log(JSON.stringify(r));

// const destroyedHero = await r.destroy()

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
  res.json(await Hero.findAll());
});

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
