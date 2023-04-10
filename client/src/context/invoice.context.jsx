import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
export const InvoiceContext = createContext([]);

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(["00"]);

  const getAllInvoices = async () => {
    try {
      // const method =
      //   Platform.OS === "ios"
      //     ? uriEndPoint.method.toLowerCase()
      //     : uriEndPoint.method;
      const { data } = await axios.get("http://172.17.0.1:5000/v1/invoice", {
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
