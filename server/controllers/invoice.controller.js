// get all invoice
// create invoice
// update invoice-amount

import { Invoice } from "../models/invoice.model.js";

//POST- create an ivoice

export const createInvoice = async (req, res) => {
  try {
    const {
      brand,
      billNo,
      retailerName,
      invoiceAmount,
      pendingAmount,
      isSettled,
      invoiceDate,
      salesManName,
      collectionDate,
      salesRepId,
    } = req.body;

    const invoice = await Invoice.create({
      brand,
      billNo,
      retailerName,
      invoiceAmount,
      pendingAmount,
      isSettled,
      invoiceDate,
      salesManName,
      collectionDate,
      salesRepId,
    });

    if (invoice) {
      res.status(201).json({
        message: "Invoice Created",
        invoice,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong, couldnot create an invoice",
      });
    }
  } catch (e) {
    res.send(e.message);
  }
};

//get all invoice

export const getAllInvoice = async (req, res) => {
  try {
    const invoices = await Invoice.find({});

    if (invoices) {
      res.status(200).json({
        invoices,
      });
    } else {
      res.status(400).json({
        message: "Couldnot fetch all invoices",
      });
    }
  } catch (e) {
    res.send(e.message);
  }
};

//get invoice by id

//update invoice

//show all settles invoice
