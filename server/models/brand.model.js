import mongoose from "mongoose";

const BrandSchema = mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
});

export const Brand = mongoose.model("Brand", BrandSchema);
