import { Dispatch, SetStateAction } from "react";
import {
  IAnalyzedTransactions,
  ITransaction,
} from "../../../../types/transactions-types";
import analyseNetValue from "../analyseNetValue";

export default function removeTransaction(
  id: string,
  transactions: ITransaction[],
  setterFn: Dispatch<SetStateAction<any>>,
  data: IAnalyzedTransactions,
  setData: React.Dispatch<React.SetStateAction<IAnalyzedTransactions>>
) {
  const updatedTransactions = transactions.filter((item) => item.id !== id);
  setterFn({ transactions: updatedTransactions });
  analyseNetValue(transactions, data, setData);
}
