import express from "express";
import { createInvoice } from "../controllers/invoice.controller.js";

const router = express.Router();

//get all ivoices

//update ivoice - record payment

//create new invoice

// router.get("/", (req, res) => {
//   res.send("This route works");
// });

router.post("/", createInvoice);

export default router;
