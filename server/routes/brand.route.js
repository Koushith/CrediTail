import express from "express";
import { Brand } from "../models/brand.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const brand = await Brand.find({});
  res.send(brand);
});

export default router;
