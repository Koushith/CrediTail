import { Brand } from "../models/brand.model.js";

// GET - get all brands
export const getAllBrands = async (req, res) => {
  try {
    const links = await Brand.find({});

    if (links) {
      //todo- check status codes and update it correctly
      res.status(200).json({
        links,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//POST - create a brand

export const createBrand = async (req, res) => {
  try {
    const { brandName } = req.body;

    console.log("brand name", brandName);

    const brand = await Brand.create({ brandName });
    if (brand) {
      res.status(201).json({
        message: "Brand created",
        brand,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong- couldnot create a brand",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};
