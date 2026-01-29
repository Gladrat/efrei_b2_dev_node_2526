import sequelize from "../config/index.js";
import { seedHeroes } from "./hero.seed.js";

export default async function seedDatabase() {
  await sequelize.sync({ force: true });
  console.log("Database is synchronized.");

  await seedHeroes();
  console.log("Hero seeding done.");
}
