import express from "express";
import {
  createInvoice,
  getAllInvoice,
} from "../controllers/invoice.controller.js";

const router = express.Router();

router.get("/", getAllInvoice);
router.post("/", createInvoice);

export default router;
