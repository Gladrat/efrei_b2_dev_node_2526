import sequelize from "../config/index.js";
import "../models/index.js";
import { seedPowers } from "./power.seed.js";
import { seedHeroes } from "./hero.seed.js";

export async function seedDatabase() {
  await sequelize.sync({ force: true });
  console.log("Base de données synchronisée");

  await seedPowers();
  await seedHeroes();
  console.log("Données de seed insérées");
}

export * from "./hero.seed.js";
export * from "./power.seed.js";
