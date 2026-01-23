import sequelize from "../config/index.js";
import { DataTypes } from "sequelize";

const model = {
  alias: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  identity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  powerDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Hero = sequelize.define("Hero", model);
