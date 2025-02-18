import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Team extends Model {}

Team.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },

  description: {
    type: DataTypes.TEXT,
  }
}, {
  sequelize,
  tableName: "team"
});