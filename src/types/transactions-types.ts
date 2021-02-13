import { Dispatch } from "react";

export interface ITransaction {
  type: string;
  category: string;
  amount: number;
  date: string;
  id: string;
}

export interface IAnalyzedTransactions {
  incomeCategories: {
    type: string;
    amount: number;
    color: string;
  }[];
  expenseCategories: {
    type: string;
    amount: number;
    color: string;
  }[];
}

export type TContextProps = {
  transactions: {
    transactions: ITransaction[];
  };
  setTransactions: Dispatch<any>;
  data: IAnalyzedTransactions;
  setData: React.Dispatch<React.SetStateAction<IAnalyzedTransactions>>;
};

export interface IFormGroupAndCardBodyProp {
  transactionToCreate: ITransaction;
  setTransactionToCreate: React.Dispatch<React.SetStateAction<ITransaction>>;
  contextProps: TContextProps;
}
