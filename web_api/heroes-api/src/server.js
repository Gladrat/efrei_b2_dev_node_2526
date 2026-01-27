import sequelize from "./config/index.js";
import Hero from "./models/hero.model.js";

await sequelize.sync({ force: true });
console.log("La base de données est synchro !");

// const b = {
//   alias: "Batman",
//   identity: "Bruce Wayne",
//   powerDate: "01/01/2026"
// }
// const newHero = await Hero.create(b)
// console.log(newHero.id);

// const batman = await Hero.findByPk(newHero.id)
// console.log(batman);

// await batman.update({alias: "Joker"})
// await Hero.create(b)

// const r = await Hero.findOne({where: {alias: "Joker"}})
// console.log(JSON.stringify(r));

// const destroyedHero = await r.destroy()