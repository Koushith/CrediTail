import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const InvoiceContext = createContext([]);

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(["00"]);

  const getAllIvoices = async () => {
    const { data } = await axios.get("http://localhost:5000/v1/invoice");
    setInvoices(data.invoices);
  };

  useEffect(() => {
    getAllIvoices();
  }, []);

  const values = { invoices, setInvoices };
  return (
    <InvoiceContext.Provider value={values}>{children}</InvoiceContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoiceContext);
