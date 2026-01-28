import { Power } from "../models/index.js";

export async function createPower({ name }) {
  return await Power.create({ name });
}

export async function getPowerById(id) {
  return await Power.findByPk(id);
}

export async function getAllPowers() {
  return await Power.findAll();
}

export async function powerExists(name) {
  const power = await Power.findOne({ where: { name } });
  return !!power;
}
