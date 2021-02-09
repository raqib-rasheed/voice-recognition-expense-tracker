import { Dispatch, SetStateAction } from "react";
import analyseNetValue from "../analyseNetValue";
import { TtransactionValues } from "../SingleTransaction";
// import { Ttransactions } from "./addTransaction";

export default function removeTransaction(
  id: string,
  transactions: TtransactionValues[],
  setterFn: Dispatch<SetStateAction<any>>
) {
  const updatedTransactions = transactions.filter((item) => item.id !== id);
  setterFn({ transactions: updatedTransactions });

  // analyseNetValue(transactions);
}
