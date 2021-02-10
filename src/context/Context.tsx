import React, { createContext, FC, useState } from "react";

import {
  expenseCategories,
  incomeCategories,
} from "../utils/categoriesConstants";

export const ExportTrackerContext = createContext({});
export const Provider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState<any>({
    transactions: [],
  });
  const [data, setData] = useState({ incomeCategories, expenseCategories });
  return (
    <ExportTrackerContext.Provider
      value={{ transactions, setTransactions, data, setData }}
    >
      {children}
    </ExportTrackerContext.Provider>
  );
};
