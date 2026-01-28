import { heroService, powerService } from "../services/index.js";

export const heroesData = [
  { alias: "Batman", identity: "Bruce Wayne", powerDate: "2026-01-01" },
  { alias: "Joker", identity: "Bruce Wayne", powerDate: "2026-01-01" },
  { alias: "SuperNode", identity: "Ryan Dhal", powerDate: "2029-01-01" },
];

export async function seedHeroes() {
  const powers = await powerService.getAllPowers();

  const heroes = [];
  for (const data of heroesData) {
    heroes.push(await heroService.createHero(data));
  }

  const [batman, joker, superNode] = heroes;

  await batman.addPowers([powers[0], powers[1]]);
  await joker.addPowers([powers[2]]);
  await superNode.addPowers([powers[0], powers[2], powers[3]]);

  await heroService.deleteHero(batman.id);
  return heroes;
}
