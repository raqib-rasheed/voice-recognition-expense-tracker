import { Dispatch, SetStateAction } from "react";
import analyseNetValue from "../analyseNetValue";

interface ITransaction {
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
  setterFn: Dispatch<SetStateAction<any>>
) {
  let updatedTransactions = transactions?.transactions?.slice();
  updatedTransactions.push(newT);
  setterFn({ transactions: updatedTransactions });
  analyseNetValue(transactions);
}
