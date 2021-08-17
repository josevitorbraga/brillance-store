import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routes from "./routes/index.js";
dotenv.config();

const db = process.env.MONGO_DB;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const run = async () => {
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🎲 Database connected..."))
    .catch(err => console.log(err));

  app.listen("3333", () => {
    console.log("🚀 Backend Iniciado na porta 3333");
  });
};

run();
