import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const InvoiceContext = createContext([]);

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(["00"]);

  const getAllInvoices = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/v1/invoice", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      });
      setInvoices(data.invoices);
    } catch (e) {
      console.log("something went wrong", e, e.message);
    }
  };

  useEffect(() => {
    getAllInvoices();
  }, []);

  const values = { invoices, setInvoices, getAllInvoices };
  return (
    <InvoiceContext.Provider value={values}>{children}</InvoiceContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoiceContext);
