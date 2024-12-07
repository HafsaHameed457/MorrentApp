import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./sequelize";
import Role from "./roles.model";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  roleId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  roleId: number;
  public password!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export default User;
