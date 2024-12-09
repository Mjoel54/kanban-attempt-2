import { seedUsers } from "./user-seeds.js";
import { seedTickets } from "./ticket-seeds.js";
// @ts-ignore
import { sequelize } from "../models/index.js";

const seedAll = async (): Promise<void> => {
  try {
    // @ts-ignore
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedTickets();
    console.log("\n----- TICKETS SEEDED -----\n");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedAll();
