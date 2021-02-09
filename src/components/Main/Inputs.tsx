import { Button } from "antd";
import React, { ChangeEvent, Dispatch, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  incomeCategories,
  expenseCategories,
} from "../../utils/categoriesConstants";
import { addTransaction } from "./transactions/addTransaction";

export type ITransaction = {
  transactionToCreate: {
    type: string;
    category: string;
    amount: number;
    date: string;
    id: string;
  };
  setTransactionToCreate: Dispatch<React.SetStateAction<any>>;
  contextProps: {
    transactions: {
      incomes: [];
      expenses: [];
    };
    setTransactions: Dispatch<
      React.SetStateAction<{ incomes: []; expenses: [] }>
    >;
  };
};

export default function Inputs(props: ITransaction) {
  const { transactionToCreate, setTransactionToCreate, contextProps } = props;
  function handleChange(e: ChangeEvent<any>) {
    const prop = e.target.id;
    setTransactionToCreate({ ...transactionToCreate, [prop]: e.target.value });
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    transactionToCreate.id = uuidv4();
    e.preventDefault();
    addTransaction(
      transactionToCreate,
      contextProps.transactions,
      contextProps.setTransactions
    );
  }
  return (
    <>
      <h3>Expence Tracker</h3>
      <h5>Powered by speechly</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        provident aliate!
      </p>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select onChange={(e) => handleChange(e)} id="type" required>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <label htmlFor="category">Category</label>
          <select onChange={(e) => handleChange(e)} id="category" required>
            {transactionToCreate.type === "income"
              ? incomeCategories.map((c) => (
                  <option value={c.type}>{c.type}</option>
                ))
              : expenseCategories.map((c) => (
                  <option value={c.type}>{c.type}</option>
                ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={(e) => handleChange(e)}
            id="amount"
            type="number"
            required
          ></input>
          <label htmlFor="">Date</label>
          <input
            type="date"
            onChange={(e) => handleChange(e)}
            id="date"
            required
          />
          <Button htmlType="submit">Create</Button>
        </div>
      </form>
    </>
  );
}
