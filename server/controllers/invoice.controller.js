// get all invoice
// create invoice
// update invoice-amount

import { Invoice } from "../models/invoice.model.js";

//POST- create an ivoice

export const createInvoice = async (req, res) => {
  try {
    const {
      brand,
      brandId,
      billNo,
      retailerName,
      invoiceAmount,
      pendingAmount,
      isSettled,
      invoiceDate,
      salesManName,
      collectionDate,
      salesRepId,
      retailerId,
      retailerPhone,
    } = req.body;

    const invoice = await Invoice.create({
      brand,
      brandId,
      billNo,
      retailerName,
      retailerId,
      retailerPhone,
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

export const getInvoiceById = async (req, res) => {
  try {
    const { id } = await req.params;
    console.log(id);

    const invoice = await Invoice.findOne({ billNo: id });

    if (invoice) {
      res.status(200).json({
        message: "Invoice found",
        invoice,
      });
    } else {
      res.status(404).json({
        message: "no invoice found",
      });
    }
  } catch (e) {
    res.json({
      message: "from error- find by id",
      error: e.message,
    });
  }
};

//update invoice - ALLOW ONLY PAYMENT TO UPDATE- SET SETTLED IF DIFF ==0

export const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { pendingAmount } = req.body;

    console.log({ pendingAmount });

    //get the ivoice
    // get the invoice amout
    // check if  invoice amout === pending amount
    //                       - if yes -> setSettled to true, invoice amout to 0
    //                       -if no -> get the diff and update the invoice amount with the difference

    const invoice = await Invoice.findOne({ billNo: id });
    console.log("found", invoice);

    if (invoice) {
      let amountToBePaid = invoice.invoiceAmount;
      console.log("amount to br paid", amountToBePaid);

      let difference = amountToBePaid - pendingAmount;

      if (pendingAmount === amountToBePaid) {
        //payment closure
      } else {
        // update with diffrence
      }
    }

    //  const _link = await Link.findByIdAndUpdate(id, {
    //    title,
    //    category,
    //    link,
    //  });

    res.status(200).json({
      message: "success",
      //  _link,
    });
  } catch (e) {
    res.status(400).json({
      message: "something went wrong while editing",
      error: e.message,
    });
  }
};

//show all settles invoice
