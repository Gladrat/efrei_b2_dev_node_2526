import express from "express";

import { heroController } from "../controller/index.js";

export const router = express.Router()

router.get("/", heroController.getAllHeroes);
router.post("/", heroController.createHero);

router.get("/:id", heroController.getHeroById);
router.put("/:id", heroController.updateHero);
router.patch("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

// endpoint métier
router.patch("/:id/restore", heroController.restoreHero);