import { heroService } from "../services/index.js";

const heroDatas = [
  {
    alias: "Batman",
    identity: "Bruce Wayne",
    powerDate: "2026-01-01",
  },

  {
    alias: "Joker",
    identity: "Bruce Wayne",
    powerDate: "2026-01-01",
  },

  {
    alias: "SuperNode",
    identity: "Ryan Dhal",
    powerDate: "2029-01-01",
  },
];

export async function seedHeroes() {
  const heroes = [];
  for (const h of heroDatas) {
    heroes.push(await heroService.createHero(h));
  }  
  await heroService.deleteHero(heroes[0].id);
  await heroService.updateHero(heroes[2].id, { alias: "SuperNodeJS" });
  return heroes;
}
