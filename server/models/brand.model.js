import mongoose from "mongoose";

// brand - cad, nestle - name should be distributor - they hold the invoice details

const BrandSchema = mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  //   billNo: {
  //     type: String,
  //     required: true,
  //   },
  //   invoiceAmount: {
  //     type: Number,
  //   },
  //   pendingAmount: {
  //     type: Number, // by default it will be invoice amount- later upgraded with difference amount
  //   },
  //   invoiceDate: {
  //     type: Number,
  //   },
  //   collectionDate: {
  //     type: Date,
  //   },
});

export const Brand = mongoose.model("Brand", BrandSchema);
