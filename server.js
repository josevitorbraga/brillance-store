import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookies from "cookie-parser";
import dotenv from "dotenv";
import mercadopago from "mercadopago";

import routes from "./routes/index.js";
dotenv.config();

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = process.env.MONGO_DB;
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("tmp"));
app.use(cookies());
app.use(routes);
app.use(express.static(path.join(__dirname, "client", "build")));

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

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

  app.listen(port, () => {
    console.log("🚀 Backend Iniciado na porta 3333");
  });
};

run();
