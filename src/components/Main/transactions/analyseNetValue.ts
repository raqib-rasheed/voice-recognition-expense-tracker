import { Dispatch, SetStateAction } from "react";
import { Ttransactions } from "../transactions/utils/addTransaction";

export default function analyseNetValue(
  transactions: Ttransactions,
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
  const { transactions: allTransactions } = transactions;
  const { incomeCategories, expenseCategories } = data;
  const result = allTransactions.reduce(
    (acc, crr) => {
      if (crr.type === "income") {
        acc.incomeCategories.forEach((el) => {
          if (el.type === crr.category) {
            el.amount += crr.amount;
          }
        });
      } else if (crr.type === "expense") {
        acc.expenseCategories.forEach((el) => {
          if (el.type === crr.category) {
            el.amount += crr.amount;
          }
        });
      }
      return acc;
    },
    { incomeCategories, expenseCategories }
  );
  setData(result);
}
