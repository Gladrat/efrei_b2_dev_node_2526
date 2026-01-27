import Hero from "../models/hero.model.js";

export async function createHero({ alias, identity, powerDate }) {
  return await Hero.create({ alias, identity, powerDate });
}

export async function getOneHero(id) {
  const hero = await Hero.findByPk(id);
  if (!hero) return null;

  return hero;
}

export async function getAllHeroes() {
  return await Hero.findAll();
}

export async function updateHero(id, update) {
  const hero = getOneHero(id);

  return await hero.update(update);
}

export async function deleteHero(id) {
  const hero = await getOneHero(id);

  return await hero.destroy();
}
