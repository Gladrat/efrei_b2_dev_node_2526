import sequelize from "../config/index.js";
import { DataTypes, where } from "sequelize";

const model = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}

const Power = sequelize.define(
  "Power",
  model
)

export default Power;