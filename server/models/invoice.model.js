import mongoose from "mongoose";
import { Retailer } from "./retailer.model.js";
import { Sales } from "./sales.model.js";
import { Brand } from "./brand.model.js";

const InvoiceSchema = mongoose.Schema({
  brand: {
    type: String,
  },
  brandId: {
    type: String,
  },
  billNo: {
    type: String,
    required: true,
  },
  retailderId: {
    type: String,
  },
  retailerPhone: {
    type: Number,
  },
  retailerName: {
    type: String,
  },
  invoiceAmount: {
    type: Number,
  },

  paymentMethod: {
    type: String,
  },
  isSettled: {
    type: Boolean,
    default: false,
  },

  invoiceDate: {
    type: String,
  },
  salesRepId: {
    type: String,
  },
  salesManName: {
    type: String,
  },
  collectionDate: {
    type: String,
  },
});

export const Invoice = mongoose.model("Invoice", InvoiceSchema);
