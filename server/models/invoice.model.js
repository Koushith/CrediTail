import mongoose from "mongoose";
import { Retailer } from "./retailer.model.js";

const InvoiceSchema = mongoose.Schema({
  billNo: {
    type: String,
    required: true,
  },
  retailerName: {
    type: mongoose.Schema.ObjectId,
    ref: Retailer,
  },
  invoiceAmount: {
    type: Number,
  },
  pendingAmount: {
    type: Number, // by default it will be invoice amount- later upgraded with difference amount
  },
  paymentMethod: {
    type: String,
  },
  isSettled: {
    type: Boolean,
  },
  billDate: {
    type: Date,
  },
  invoiceDate: {
    type: Number,
  },
  collectionDate: {
    type: Date,
  },
});
