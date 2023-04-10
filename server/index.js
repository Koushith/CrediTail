import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/db.connect.js";
import invoice from "./routes/invoice.route.js";
import brand from "./routes/brand.route.js";
import retailer from "./routes/retailer.route.js";
import sales from "./routes/sales.route.js";
import { routeNotFound } from "./middlewares/404error.mddileware.js";

const app = express();
dotenv.config();
connectDb();

const PORT = 5000;

app.use(cors());
app.use(express.json()); //body pareser
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/v1/invoice", invoice);
app.use("/v1/all-brand", brand);
app.use("/v1/retailer", retailer);
app.use("/v1/sales", sales);

//404- middleware - add a custom error message if the route is not found

app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
