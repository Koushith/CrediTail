import { Sales } from "../models/sales.model.js";

// GET - get all SelesRep
export const getAllSalesRep = async (req, res) => {
  try {
    const salesRep = await Sales.find({});

    if (salesRep) {
      res.status(200).json({
        salesRep,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//POST - create a brand

export const createSalesRep = async (req, res) => {
  try {
    const { repId, repName } = req.body;

    const salesRep = await Sales.create({ repId, repName });
    if (salesRep) {
      res.status(201).json({
        message: "Sales rep created",
        salesRep,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong- couldnot create a sales rep",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};
