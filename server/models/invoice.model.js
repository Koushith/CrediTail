import mongoose from "mongoose";
import { Retailer } from "./retailer.model.js";
import { Sales } from "./sales.model.js";
import { Brand } from "./brand.model.js";

//todo- fix relationships

const InvoiceSchema = mongoose.Schema({
  brand: {
    // type: mongoose.Schema.ObjectId,
    type: String,
    // ref: Brand,
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
    // type: mongoose.Schema.ObjectId,
    // ref: Retailer,
    type: String,
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
    default: false,
  },

  invoiceDate: {
    type: String, //chanfe
  },
  salesRepId: {
    type: String,
  },
  salesManName: {
    // type: mongoose.Schema.ObjectId,
    // ref: Sales,
    type: String,
  },
  collectionDate: {
    type: String, //change later
  },
});

export const Invoice = mongoose.model("Invoice", InvoiceSchema);
