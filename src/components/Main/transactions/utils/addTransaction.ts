import { Dispatch, SetStateAction } from "react";
import analyseNetValue from "../analyseNetValue";

export interface ITransaction {
  type: string;
  category: string;
  amount: number;
  date: string;
  id: string;
}
export type Ttransactions = {
  transactions: ITransaction[];
};

export function addTransaction(
  newT: ITransaction,
  transactions: Ttransactions,
  setterFn: Dispatch<SetStateAction<any>>,
  data: {
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
  },
  setData: Dispatch<
    SetStateAction<{
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
    }>
  >
) {
  let updatedTransactions = transactions?.transactions?.slice();
  updatedTransactions.unshift(newT);
  setterFn({ transactions: updatedTransactions });
  analyseNetValue(transactions, data, setData);
}
