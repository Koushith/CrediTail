// get all invoice
// create invoice
// update invoice-amount

//POST- create an ivoice

export const createInvoice = async (req, res) => {
  try {
    const {
      billNo,
      retailerName,
      invoiceAmount,
      pendingAmount,
      isSettled,
      invoiceDate,
      collectionDate,
      collectedBy,
    } = req.body;
  } catch (e) {
    res.send(e.message);
  }
};
