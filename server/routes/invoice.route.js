import express from "express";

const router = express.Router();

//get all ivoices

//update ivoice - record payment

//create new invoice

router.get("/", (req, res) => {
  res.send("This route works");
});

export default router;
