import Power from "../models/power.model.js";

export async function createPower({ name }) {
  return await Power.create({ name });
}

export async function getPowerById(id) {
  return await Power.findByPk(id);
}

export async function getAllPowers() {
  return await Power.findAll();
}

export async function updatePower(id, update = {}) {
  const power = await getPowerById(id);
  if (!power) return null;

  return await power.update(update);
}

export async function deletePower(id) {
  const power = await getPowerById(id);
  if (!power) return null;

  await power.destroy();
  return power;
}

export async function powerExists(name, excludedId = null) {
  const power = await Power.findOne({ where: { name } });

  if (!power) return false;

  if (excludedId && power.id === excludedId) return false;

  return true;
}
