import mongoose from "mongoose";
import { Retailer } from "./retailer.model.js";
import { Sales } from "./sales.model.js";

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

  invoiceDate: {
    type: Number,
  },
  collectedBy: {
    type: mongoose.Schema.ObjectId,
    ref: Sales,
  },
  collectionDate: {
    type: Date,
  },
});
