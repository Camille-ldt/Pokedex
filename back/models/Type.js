import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Type extends Model {}

Type.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "#FFFFFF"
  }
}, {
  sequelize,
  tableName: "type"
});