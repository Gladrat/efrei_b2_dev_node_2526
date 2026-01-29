import sequelize from "../config/index.js";
import { DataTypes, where } from "sequelize";

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
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    // type: DataTypes.UUID,
    // defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

const Hero = sequelize.define("Hero", model, {
  defaultScope: {
    where: {
      isDeleted: false,
    },
  },
  scopes: {
    withDeleted: {
      where: {},
    },
  },
});

export default Hero;
