import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import { addTransaction } from "../components/Main/transactions/utils/addTransaction";
import { ITransaction, TContextProps } from "../types/transactions-types";
import {
  initialExpenseValue,
  initialIncomeValue,
  initialValue,
} from "./categoriesConstants";

export function handleChange(
  e: ChangeEvent<any>,
  transactionToCreate: ITransaction,
  setTransactionToCreate: Dispatch<SetStateAction<ITransaction>>
) {
  const prop = e.target.id;
  const option = e.target;

  if (prop === "type") {
    option.value === "expense" && setTransactionToCreate(initialExpenseValue);
    option.value === "income" && setTransactionToCreate(initialIncomeValue);
  }

  setTransactionToCreate({
    ...transactionToCreate,
    [prop]: option.value,
  });
  if (prop === "amount") {
    setTransactionToCreate({
      ...transactionToCreate,
      [prop]: parseInt(e.target.value),
      id: uuidv4(),
    });
  }
}

export function handleSubmit(
  e: FormEvent<HTMLFormElement>,
  transactionToCreate: ITransaction,
  setTransactionToCreate: Dispatch<React.SetStateAction<ITransaction>>,
  contextProps: TContextProps
) {
  e.preventDefault();
  const {
    transactions: { transactions },
    setTransactions,
    data,
    setData,
  } = contextProps;

  if (transactionToCreate.amount > 0) {
    addTransaction(
      transactionToCreate,
      transactions,
      setTransactions,
      data,
      setData
    );
    setTransactionToCreate(initialValue);
  }
}
