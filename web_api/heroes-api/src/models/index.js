import Hero from "./hero.model.js";
import Power from "./power.model.js";

Hero.belongsToMany(Power, { through: "Hero_Power", foreignKey: "hero_id" });
Power.belongsToMany(Hero, { through: "Hero_Power", foreignKey: "power_id" });

export { Hero, Power };
