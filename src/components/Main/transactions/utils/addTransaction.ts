import { Dispatch, SetStateAction } from "react";
import {
  IAnalyzedTransactions,
  ITransaction,
} from "../../../../types/transactions-types";
import analyseNetValue from "../analyseNetValue";

export function addTransaction(
  newT: ITransaction,
  transactions: ITransaction[],
  setTransactions: Dispatch<SetStateAction<any>>,
  data: IAnalyzedTransactions,
  setData: Dispatch<SetStateAction<IAnalyzedTransactions>>
) {
  let updatedTransactions = transactions.slice();
  updatedTransactions.unshift(newT);
  setTransactions({ transactions: updatedTransactions });
  analyseNetValue(updatedTransactions, data, setData);
}
