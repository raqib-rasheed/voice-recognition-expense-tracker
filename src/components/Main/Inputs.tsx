import { Button } from "antd";
import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  incomeCategories,
  expenseCategories,
} from "../../utils/categoriesConstants";
import { addTransaction } from "./transactions/utils/addTransaction";
import { initialValue } from "../../utils/categoriesConstants";

export type ITransaction = {
  contextProps: {
    transactions: {
      transactions: [];
    };
    setTransactions: Dispatch<
      React.SetStateAction<{ incomes: []; expenses: [] }>
    >;
  };
};

export default function Inputs(props: ITransaction) {
  const { contextProps } = props;

  const [transactionToCreate, setTransactionToCreate] = useState(initialValue);

  function handleChange(e: ChangeEvent<any>) {
    const prop = e.target.id;
    if (prop === "amount") {
      return setTransactionToCreate({
        ...transactionToCreate,
        [prop]: parseInt(e.target.value),
      });
    }

    setTransactionToCreate({
      ...transactionToCreate,
      [prop]: e.target.value,
    });
    if (
      transactionToCreate.type === "expense" &&
      transactionToCreate.category === "Business"
    ) {
      console.log("issue hherer");
      setTransactionToCreate({
        ...transactionToCreate,
        category: "Bills",
      });
    }
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uuid = uuidv4();
    setTransactionToCreate({ ...transactionToCreate, id: uuid });
    addTransaction(
      transactionToCreate,
      contextProps.transactions,
      contextProps.setTransactions
    );
  }
  return (
    <>
      <h3>Expense Tracker</h3>
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
                  <option defaultValue="Bills" value={c.type}>
                    {c.type}
                  </option>
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
