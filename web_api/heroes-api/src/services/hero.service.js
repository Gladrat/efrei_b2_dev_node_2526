import sequelize from "../config/index.js";
import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  const hero = await HeroRepository.getHeroById(id);

  if (!hero) {
    throw new Error(`Cannot find hero with id: ${id}`);
  }

  return hero;
}

export async function getAllHeroes() {
  return await HeroRepository.getAllHeroes();
}

// Validate dupliqué entre create & update ?
export async function createHero({ alias, identity, powerDate }) {
  if (!identity || identity.length < 3) {
    throw new Error("Identity malformed (3 car min)");
  }

  if (await HeroRepository.heroExists(alias)) {
    throw new Error(`Alias already exists: ${alias}`);
  }

  return await HeroRepository.createHero({ alias, identity, powerDate });
}

// PUT / PATCH
export async function updateHero(id, { alias, identity, powerDate }) {
  if (!identity || identity.length < 3) {
    throw new Error("Identity malformed (3 car min)");
  }

  await getHeroById(id); // fonctionne ? NOP

  if (await HeroRepository.heroExists(alias)) {
    throw new Error(`Alias already exists: ${alias}`);
  }

  return await HeroRepository.updateHero(id, { alias, identity, powerDate });
}

export async function deleteHero(id) {
  const hero = await getHeroById(id); // fonctionne ? NOP

  return await HeroRepository.deleteHero(hero);
}

await sequelize.sync({ force: true });

const batman = await createHero({
  alias: "Batman",
  identity: "Bruce Wayne",
  powerDate: "2026-01-01",
});

console.log(
  (
    await createHero({
      alias: "Joker",
      identity: "Bruce Wayne",
      powerDate: "2026-01-01",
    })
  ).id,
);

console.log((await getAllHeroes()).map((h) => h.id));

console.log((await getHeroById(batman.id)).id);

// console.log(
//   await updateHero(12, {
//     alias: "Joker",
//     identity: "BWWWW",
//     powerDate: "2026-01-01",
//   }),
// );

await deleteHero(batman.id)