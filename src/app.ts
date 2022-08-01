import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

export { app };