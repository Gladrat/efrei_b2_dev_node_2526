import sequelize from "../config/index.js";
import { DataTypes } from "sequelize";

const Power = sequelize.define("Power", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  defaultScope: {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  },
});

export default Power;
