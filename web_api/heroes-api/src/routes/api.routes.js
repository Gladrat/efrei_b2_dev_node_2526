import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.send(`<h1>Welcome on S.H.I.E.L.D API</h1>
<h2>The API is located on <a href="/api/v1">/api/v1</a><h2>`);
});

router.get("/api/v1", (req, res) => {
  res.json({ message: "S.H.I.E.L.D API is working." });
});
