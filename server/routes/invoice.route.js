import express from "express";
import {
  createInvoice,
  getAllInvoice,
  getInvoiceById,
  updateInvoice,
} from "../controllers/invoice.controller.js";

const router = express.Router();

router.get("/", getAllInvoice);
router.post("/", createInvoice);
router.get("/:id", getInvoiceById);
router.put("/:id", updateInvoice);

export default router;
