import express from "express";
import {
  createSalesRep,
  getAllSalesRep,
} from "../controllers/sales.controller.js";

const router = express.Router();

router.get("/", getAllSalesRep);
router.post("/", createSalesRep);

export default router;
