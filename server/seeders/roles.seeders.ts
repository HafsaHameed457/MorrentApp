import Role from "../models/roles.model";

const seedRoles = async () => {
  try {
    const rolesExist = await Role.count();

    if (rolesExist === 0) {
      await Role.bulkCreate([
        {
          name: "admin",
          permissions: ["create", "read", "update", "delete"], // Full permissions for admin

          description: "Administrator with full access",
        },
        {
          name: "manager",
          permissions: ["read", "update"], // Limited permissions for manager

          description: "Manager with limited access",
        },
        {
          name: "user",
          permissions: ["read"], // Read-only permissions for user

          description: "Regular user with basic access",
        },
      ]);

      console.log("Roles seeded successfully.");
    } else {
      console.log("Roles already exist.");
    }
  } catch (error) {
    console.error("Error seeding roles:", error);
  }
};

export default seedRoles;
