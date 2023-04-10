import { createContext, useContext, useState } from "react";

export const PaymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
  const [test, settest] = useState(["4"]);

  const values = { test, settest };
  return (
    <PaymentContext.Provider value={values}>{children}</PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
