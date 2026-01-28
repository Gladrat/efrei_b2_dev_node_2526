import express from "express";

import { seedDatabase } from "./seeds/index.js";
import { heroRoutes, apiRoutes, powerRoutes } from "./routes/index.js";

await seedDatabase();

const app = express();
const port = 3002;

app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "medium" }).format(new Date())} ${req.method} ${req.url} ${JSON.stringify(req.body)}`,
  );
  next();
});

app.use("/api/v1/heroes", heroRoutes.router);
app.use("/api/v1/powers", powerRoutes.router);
app.use("/", apiRoutes.router);

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
