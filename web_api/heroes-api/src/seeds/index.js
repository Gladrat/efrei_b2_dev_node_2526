import sequelize from "../config/index.js";
import { seedHeroes } from "./hero.seed.js";
import { seedPowers } from "./power.seed.js";

export default async function seedDatabase() {
  await sequelize.sync({ force: true });
  console.log("Database is synchronized.");

  await seedPowers();
  console.log("Power seeding done.");

  await seedHeroes();
  console.log("Hero seeding done.");
}
