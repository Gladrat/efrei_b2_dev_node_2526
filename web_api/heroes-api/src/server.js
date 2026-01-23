import sequelize from "./config/index.js";

await sequelize.sync()
console.log("La base de données est synchro !");
