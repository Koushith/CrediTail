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
      pendingAmount: invoiceAmount,
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
    const { pendingAmount, paymentMethod } = req.body;
    console.log("payment methodd", paymentMethod);

    const invoice = await Invoice.findOne({ billNo: id });

    console.log("invoice found", invoice);

    if (Number(invoice.invoiceAmount) === Number(pendingAmount)) {
      console.log("true, amount matched- can settle");
      let invoiceAmount = 0;
      let pendingAmount = 0;
      let isSettled = true;

      const updated = await Invoice.findOneAndUpdate(
        { billNo: id },
        {
          invoiceAmount,
          pendingAmount,
          isSettled,
          paymentMethod,
        }
      );

      console.log("updated", updated);

      res.status(200).json({
        message: "Invoice settled",
        updated,
      });
    } else {
      let invoiceamount = await Invoice.findOne({ billNo: id });

      const updatedDiff = await Invoice.findOneAndUpdate(
        { billNo: id },
        {
          invoiceAmount:
            Number(invoiceamount.invoiceAmount) - Number(pendingAmount),

          paymentMethod,
        }
      );

      res.status(200).json({
        message: "Invoice updated with latest",
        updatedDiff,
      });
    }
  } catch (e) {
    res.json({
      message: "couldnot update, error occured",
      error: e.message,
      e,
    });
  }
};
