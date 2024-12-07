import User from "../models/user.model";
import bcrypt from "bcrypt";

async function seedAdmin() {
  try {
    const adminDetails = {
      username: "hafsa",
      email: "hafsa.hameed457@gmail.com",
      password: "hafsa457",
    };

    const existingAdmin = await User.findOne({
      where: { email: adminDetails.email },
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(adminDetails.password, 10);

    await User.create({
      username: adminDetails.username,
      email: adminDetails.email,
      password: hashedPassword,
    });

    console.log("Admin user created successfully.");
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
}

export default seedAdmin;
