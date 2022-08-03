import { DataSource } from "typeorm";
import { User } from "../models/User";
import { CreateUsers1659294167016 } from "./migrations/1659294167016-CreateUsers";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  migrations: ["./src/database/migrations/**.ts"],
  entities: ["./src/models/**.ts"],
  logging: true
});
