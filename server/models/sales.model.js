import mongoose from "mongoose";

const SalesSchema = mongoose.Schema({
  repId: {
    type: String,
    required: true,
  },
  repName: {
    type: String,
    required: true,
  },
});

export const Sales = mongoose.model("Sales", SalesSchema);
