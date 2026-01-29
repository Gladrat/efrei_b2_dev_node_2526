import express from "express";

import { powerController } from "../controller/index.js";

export const router = express.Router();

router.get("/", powerController.getAllPowers);
router.post("/", powerController.createPower);

router.get("/:id", powerController.getPowerById);
router.put("/:id", powerController.updatePower);
router.patch("/:id", powerController.updatePower);
router.delete("/:id", powerController.deletePower);
