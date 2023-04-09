import { Retailer } from "../models/retailer.model.js";

// GET - get all retailer
export const getAllRetailer = async (req, res) => {
  try {
    const retailer = await Retailer.find({});

    if (retailer) {
      //todo- check status codes and update it correctly
      res.status(200).json({
        retailer,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//POST - create a retailer

export const createRetailer = async (req, res) => {
  try {
    const { retailerId, retailerName, retailerPhone } = req.body;

    const retailer = await Retailer.create({
      retailerId,
      retailerName,
      retailerPhone,
    });
    if (retailer) {
      res.status(201).json({
        message: "Retailer created",
        retailer,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong- couldnot create a retailer",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};
