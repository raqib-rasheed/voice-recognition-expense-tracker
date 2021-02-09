import React, { createContext, FC, useState } from "react";

export const ExportTrackerContext = createContext({});
export const Provider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState<any>({
    incomes: [],
    expenses: [],
  });

  return (
    <ExportTrackerContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </ExportTrackerContext.Provider>
  );
};
