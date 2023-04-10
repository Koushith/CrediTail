import { createContext, useContext, useState } from "react";

export const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
  const [test, settest] = useState(["4"]);
  const [amount, setAmount] = useState(0);
  const [inVoice, setInvoice] = useState([]);

  const values = { test, settest, amount, setAmount, inVoice, setInvoice };
  return (
    <PaymentContext.Provider value={values}>{children}</PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
