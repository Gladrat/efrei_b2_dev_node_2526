import express from "express";

import seedDatabase from "./seeds/index.js";
import { heroRoute } from "./routes/index.js";
import { apiRoute } from "./routes/index.js";

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

app.use("/", apiRoute.router)
app.use("/api/v1/heroes", heroRoute.router)

app.listen(port, () => {
  console.log(`Server launched at http://localhost:${port}`);
});
