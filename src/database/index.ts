import { DataSource } from "typeorm";
import { CreateUsers1659294167016 } from './migrations/1659294167016-CreateUsers'

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  migrations: [CreateUsers1659294167016]
});
