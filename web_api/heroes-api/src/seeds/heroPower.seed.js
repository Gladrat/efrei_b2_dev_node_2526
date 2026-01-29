import { Hero, Power } from "../models/index.js";

export async function seedHeroPowers() {
  // Récupérer tous les héros et pouvoirs existants
  const heroes = await Hero.scope("withDeleted").findAll();
  const powers = await Power.findAll();

  // Créer un map pour accéder facilement aux pouvoirs par nom
  const powerMap = {};
  for (const power of powers) {
    powerMap[power.name] = power;
  }

  // Associations des héros avec leurs pouvoirs
  const associations = [
    {
      heroAlias: "Batman",
      powers: ["Super Force", "Invisibilité"],
    },
    {
      heroAlias: "Joker",
      powers: ["Télékinésie"],
    },
    {
      heroAlias: "SuperNodeJS",
      powers: ["Super Force", "Super Vitesse", "Vol"],
    },
  ];

  for (const assoc of associations) {
    const hero = heroes.find((h) => h.alias === assoc.heroAlias);
    if (hero) {
      const heroPowers = assoc.powers
        .map((name) => powerMap[name])
        .filter(Boolean);
      await hero.addPowers(heroPowers);
    }
  }
}
