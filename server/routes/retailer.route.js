import express from "express";
import {
  createRetailer,
  getAllRetailer,
} from "../controllers/retailer.controller.js";

const router = express.Router();

router.get("/", getAllRetailer);
router.post("/", createRetailer);

export default router;
