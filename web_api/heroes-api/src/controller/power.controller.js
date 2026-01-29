import { powerService } from "../services/index.js";

export async function getAllPowers(req, res, next) {
  try {
    const powers = await powerService.getAllPowers();
    res.json(powers);
  } catch (error) {
    next(error);
  }
}

export async function getPowerById(req, res, next) {
  try {
    const power = await powerService.getPowerById(req.params.id);
    res.json(power);
  } catch (error) {
    next(error);
  }
}

export async function createPower(req, res, next) {
  try {
    const { name } = req.body;
    const newPower = await powerService.createPower({ name });
    res.status(201).json(newPower);
  } catch (error) {
    next(error);
  }
}

export async function updatePower(req, res, next) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedPower = await powerService.updatePower(id, { name });
    res.json(updatedPower);
  } catch (error) {
    next(error);
  }
}

export async function deletePower(req, res, next) {
  try {
    const { id } = req.params;
    await powerService.deletePower(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
