import "reflect-metadata";

import { AppDataSource } from "./database";
import { app } from "./app";

AppDataSource.initialize()
  .then(() => {
    const server = app.listen(3333, () => {
      return console.log("Server started on port 3333! 🏆");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization");
  });
