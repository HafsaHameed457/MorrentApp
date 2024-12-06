import { Sequelize } from "sequelize";
import sequelize from "../models/sequelize";
import User from "../models/user.model";

// Create a new user
export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const user = await User.create({
      username,
      email,
      password, // Remember to hash the password in production
    });
    console.log("User created:", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("User not found");
      return null;
    }
    console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Error finding user");
  }
};
export const findAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log("All users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};
