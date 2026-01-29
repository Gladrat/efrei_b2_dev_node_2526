import express from "express";

import seedDatabase from "./seeds/index.js";
import { heroRoute } from "./routes/index.js";

await seedDatabase();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `${new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "medium" }).format(new Date())} ${req.method} ${req.url} ${JSON.stringify(req.body)}`,
  );
  // console.log(req.headers);
  next();
});

app.use("/api/v1/heroes", heroRoute.router)

app.get("/", (req, res) => {
  res.send(`<h1>Welcome on S.H.I.E.L.D API</h1>
<h2>The API is located on <a href="/api/v1">/api/v1</a><h2>`);
});

app.get("/api/v1", (req, res) => {
  res.json({ message: "S.H.I.E.L.D API is working." });
});

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
