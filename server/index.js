import express from "express";
import { connectDb } from "./db/db.connect.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
connectDb();

const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
