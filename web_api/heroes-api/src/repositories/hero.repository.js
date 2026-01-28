import Hero from "../models/hero.model.js";

export async function createHero({ alias, identity, powerDate }) {
  return await Hero.create({ alias, identity, powerDate });
}

export async function getHeroById(id) {
  const hero = await Hero.scope("withDeleted").findByPk(id);
  if (!hero) return null;

  return hero;
}

export async function getAllHeroes(withDeleted = false) {
  return await Hero.scope(
    withDeleted ? "withDeleted" : "defaultScope",
  ).findAll();
}

export async function updateHero(id, update = {}) {
  const hero = await getHeroById(id);

  return await hero.update(update);
}

export async function deleteHero(id) {
  const hero = await getHeroById(id);

  if (!hero) return null;

  hero.isDeleted = true;
  await hero.save();
  return hero;

  // return await hero.destroy();
}

export async function heroExists(alias, excludedId = null) {
  const hero = await Hero.findOne({ where: { alias } });

  if (!hero) return false;

  if (excludedId && hero.id === excludedId) return false;

  return true;
}
