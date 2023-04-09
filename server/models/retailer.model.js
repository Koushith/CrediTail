import mongoose from "mongoose";

const RetailerSchema = mongoose.Schema({
  retailerId: {
    type: String,
    required: true,
  },
  retailerName: {
    type: String,
    required: true,
  },
  retailerPhone: {
    type: Number,
  },
});

export const Retailer = mongoose.model("Retailer", RetailerSchema);
