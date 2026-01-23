import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../heroDB.sqlite3",
  // logging: console.log
})

export default sequelize;