import express from "express";

import seedDatabase from "./seeds/index.js";
import { heroController } from "./controller/index.js";

await seedDatabase();

const app = express();
const port = 3000;

app.use(express.static("public"));
// Uniquement quand le header de la req "Content-Type: application/json"
app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `${new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "medium" }).format(new Date())} ${req.method} ${req.url} ${JSON.stringify(req.body)}`,
  );
  // console.log(req.headers);
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
app.post("/api/v1/heroes", heroController.createHero);

app.get("/api/v1/heroes/:id", heroController.getHeroById);
app.put("/api/v1/heroes/:id", heroController.updateHero);
app.patch("/api/v1/heroes/:id", heroController.updateHero);
app.delete("/api/v1/heroes/:id", heroController.deleteHero);

// endpoint métier
app.patch("/api/v1/heroes/:id/restore", heroController.restoreHero);

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
