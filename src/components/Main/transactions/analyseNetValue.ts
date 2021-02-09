import { Ttransactions } from "../transactions/utils/addTransaction";
import {
  incomeCategories,
  expenseCategories,
} from "../../../utils/categoriesConstants";

export default function analyseNetValue(transactions: Ttransactions) {
  const { transactions: allTransactions } = transactions;
  allTransactions.reduce((acc, crr) => {
    if (crr.type === "income") {
      incomeCategories.forEach((el) => {
        if (el.type === crr.category) {
          el.amount += crr.amount;
        }
      });
    } else if (crr.type === "expense") {
      expenseCategories.forEach((el) => {
        if (el.type === crr.category) {
          el.amount += crr.amount;
        }
      });
    }
    return acc;
  }, 0);
}

// if (transaction.type === "income") {
//   incomeCategories.forEach((el) => {
//     if (el.type === transaction.category) {
//       el.amount += transaction.amount;
//     }
//   });
// } else {
//   expenseCategories.forEach((el) => {
//     if (el.type === transaction.category) {
//       el.amount += transaction.amount;
//     }
//   });
// }
