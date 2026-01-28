import { powerService } from "../services/index.js";

export async function getAllPowers(req, res) {
  try {
    const powers = await powerService.getAllPowers();
    res.json(powers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPowerById(req, res) {
  try {
    const power = await powerService.getPowerById(req.params.id);
    res.json(power);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createPower(req, res) {
  try {
    const { name } = req.body;
    const newPower = await powerService.createPower({ name });
    res.status(201).json(newPower);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
