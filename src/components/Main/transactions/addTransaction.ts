import { Dispatch, SetStateAction } from "react";
import analyseNetValue from "./analyseNetValue";

interface ITransaction {
  type: string;
  category: string;
  amount: number;
  date: string;
}
export type Ttransactions = {
  incomes: ITransaction[];
  expenses: ITransaction[];
};

export function addTransaction(
  newT: ITransaction,
  transactions: Ttransactions,
  setterFn: Dispatch<SetStateAction<any>>
) {
  if (newT.type === "income") {
    let updatedIncomes = transactions?.incomes?.slice();
    updatedIncomes.push(newT);
    setterFn({ ...transactions, incomes: updatedIncomes });
  } else {
    let updatedExpenses = transactions?.expenses?.slice();
    updatedExpenses.push(newT);
    setterFn({ ...transactions, expenses: updatedExpenses });
  }
  analyseNetValue(transactions);
}
