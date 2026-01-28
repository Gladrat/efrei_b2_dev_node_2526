import sequelize from "../config/index.js";
import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  const hero = await HeroRepository.getHeroById(id);

  if (!hero) {
    throw new Error(`Cannot find hero with id: ${id}`);
  }

  return hero;
}

export async function getAllHeroes(withDeleted = false) {
  return (await HeroRepository.getAllHeroes(withDeleted)).map((h) => {
    const { identity, ...publicData } = h.toJSON();
    return publicData;
  });
}

async function validateHero({ identity, alias }, excludedId = null) {
  if (!identity || identity.length < 3) {
    throw new Error("Identity malformed (3 car min)");
  }

  if (await HeroRepository.heroExists(alias, excludedId)) {
    throw new Error(`Alias already exists: ${alias}`);
  }
}

export async function createHero({ alias, identity, powerDate }) {
  await validateHero({ alias, identity, powerDate });

  return await HeroRepository.createHero({ alias, identity, powerDate });
}

export async function updateHero(
  id,
  { alias = null, identity = null, powerDate = null },
) {
  const hero = await getHeroById(id);
  const updatedHero = {
    alias: alias ?? hero.alias,
    identity: identity ?? hero.identity,
    powerDate: powerDate ?? hero.powerDate,
  };

  await validateHero(
    {
      alias: updatedHero.alias,
      identity: updatedHero.identity,
    },
    hero.id,
  );

  return await HeroRepository.updateHero(id, updatedHero);
}

export async function deleteHero(id) {
  const hero = await getHeroById(id);

  return await HeroRepository.deleteHero(id);
}

// await sequelize.sync({ force: true });