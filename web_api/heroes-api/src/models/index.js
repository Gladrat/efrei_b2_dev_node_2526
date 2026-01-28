import Hero from "./hero.model.js";
import Power from "./power.model.js";

Hero.belongsToMany(Power, { through: "Hero_Power", as: "powers" });
Power.belongsToMany(Hero, { through: "Hero_Power", as: "heroes" });

export { Hero, Power };
