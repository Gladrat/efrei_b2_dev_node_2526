import { Router } from "express";
import { powerController } from "../controller/index.js";

export const router = Router();

router.get("/", powerController.getAllPowers);
router.get("/:id", powerController.getPowerById);
router.post("/", powerController.createPower);
