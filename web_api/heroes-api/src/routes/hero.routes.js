import { Router } from "express";
import { heroController } from "../controller/index.js";

export const router = Router();

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getHeroById);
router.post("/", heroController.createHero);
