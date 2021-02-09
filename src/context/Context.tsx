import React, {
  createContext,
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { TContextProps } from "../components/Main/UsersArea";

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
