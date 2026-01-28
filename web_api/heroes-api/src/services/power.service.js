import { PowerRepository } from "../repositories/index.js";

export async function getPowerById(id) {
  const power = await PowerRepository.getPowerById(id);

  if (!power) {
    throw new Error(`Cannot find power with id: ${id}`);
  }

  return power;
}

export async function getAllPowers() {
  return await PowerRepository.getAllPowers();
}

async function validatePower({ name }) {
  if (!name || name.length < 2) {
    throw new Error("Name malformed (2 car min)");
  }

  if (await PowerRepository.powerExists(name)) {
    throw new Error(`Power already exists: ${name}`);
  }
}

export async function createPower({ name }) {
  await validatePower({ name });

  return await PowerRepository.createPower({ name });
}
