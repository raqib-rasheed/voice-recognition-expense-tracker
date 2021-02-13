import {
  IAnalyzedTransactions,
  ITransaction,
} from "../../../types/transactions-types";

export default function analyseNetValue(
  transactions: ITransaction[],
  data: IAnalyzedTransactions,
  setData: React.Dispatch<React.SetStateAction<IAnalyzedTransactions>>
) {
  const { incomeCategories, expenseCategories } = data;
  const result = transactions.reduce(
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
