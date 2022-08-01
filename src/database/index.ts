import { DataSource } from "typeorm";
import { CreateUsers1659294167016 } from './migrations/1659294167016-CreateUsers'

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  migrations: [CreateUsers1659294167016]
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization");
  });
