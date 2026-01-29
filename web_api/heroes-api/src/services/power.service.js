import ErrorManager from "../errors/api.errors.js";
import { PowerRepository } from "../repositories/index.js";

export async function getPowerById(id) {
  const power = await PowerRepository.getPowerById(id);

  if (!power) {
    throw new ErrorManager.NotFoundError(`Cannot find power with id: ${id}`);
  }

  return power;
}

export async function getAllPowers() {
  return await PowerRepository.getAllPowers();
}

async function validatePower({ name }, excludedId = null) {
  if (!name || name.length < 2) {
    throw new ErrorManager.ValidatorError("Name malformed (2 car min)");
  }

  if (await PowerRepository.powerExists(name, excludedId)) {
    throw new ErrorManager.ConflictError(`Power already exists: ${name}`);
  }
}

export async function createPower({ name }) {
  await validatePower({ name });

  return await PowerRepository.createPower({ name });
}

export async function updatePower(id, { name = null }) {
  const power = await getPowerById(id);
  const updatedPower = {
    name: name ?? power.name,
  };

  await validatePower({ name: updatedPower.name }, power.id);

  return await PowerRepository.updatePower(id, updatedPower);
}

export async function deletePower(id) {
  await getPowerById(id);

  return await PowerRepository.deletePower(id);
}
