import { ChangeEvent, Dispatch, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { addTransaction } from "../components/Main/transactions/utils/addTransaction";
import { TContextProps } from "../components/Main/UsersArea";
import {
  initialExpenseValue,
  initialIncomeValue,
  initialValue,
} from "./categoriesConstants";

export function handleChange(
  e: ChangeEvent<any>,
  transactionToCreate: {
    type: string;
    category: string;
    amount: number;
    date: string;
    id: string;
  },
  setTransactionToCreate: Dispatch<React.SetStateAction<any>>
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
    });
  }
}

export function handleSubmit(
  e: FormEvent<HTMLFormElement>,
  transactionToCreate: {
    type: string;
    category: string;
    amount: number;
    date: string;
    id: string;
  },
  setTransactionToCreate: Dispatch<React.SetStateAction<any>>,
  contextProps: TContextProps
) {
  const { transactions, setTransactions, data, setData } = contextProps;
  e.preventDefault();
  if (transactionToCreate.amount > 0) {
    const uuid = uuidv4();
    setTransactionToCreate({ ...transactionToCreate, id: uuid });
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
