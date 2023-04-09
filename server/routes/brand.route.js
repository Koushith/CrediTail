import express from "express";
import { Brand } from "../models/brand.model.js";
import { createBrand, getAllBrands } from "../controllers/brand.controller.js";

const router = express.Router();

router.get("/", getAllBrands);
router.post("/", createBrand);

export default router;
