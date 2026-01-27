import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../heroDB.sqlite3",
  // logging: false
})

export default sequelize;