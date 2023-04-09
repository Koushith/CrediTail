import express from "express";
import { connectDb } from "./db/db.connect.js";
import cors from "cors";
import dotenv from "dotenv";
import getInvoice from "./routes/invoice.route.js";
import getAllBrands from "./routes/brand.route.js";
import { routeNotFound } from "./middlewares/404error.mddileware.js";

const app = express();
dotenv.config();
connectDb();

const PORT = 5000;

app.use(cors());
app.use(express.json()); //body pareser
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.use("/v1/invoice", getInvoice);
app.use("/v1/all-brands", getAllBrands);

//404- middleware - add a custom error message if the route is not found

app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
