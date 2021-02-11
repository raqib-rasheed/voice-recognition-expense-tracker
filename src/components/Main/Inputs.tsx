import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { TContextProps } from "../../types/transactions-types";

import {
  incomeCategories,
  expenseCategories,
} from "../../utils/categoriesConstants";
import { initialIncomeValue } from "../../utils/categoriesConstants";
import { handleChange, handleSubmit } from "../../utils/util-functions";

export type ITransaction = {
  contextProps: TContextProps;
};

export default function Inputs(props: ITransaction) {
  const { contextProps } = props;

  const [transactionToCreate, setTransactionToCreate] = useState(
    initialIncomeValue
  );

  return (
    <>
      <Card.Body>
        <h3>Expense Tracker</h3>
        <h5>Powered by speechly</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          provident aliate!
        </p>
        <hr />
        <form
          onSubmit={(e) =>
            handleSubmit(
              e,
              transactionToCreate,
              setTransactionToCreate,
              contextProps
            )
          }
        >
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              value={transactionToCreate.type}
              onChange={(e) =>
                handleChange(e, transactionToCreate, setTransactionToCreate)
              }
              id="type"
              required
            >
              <option style={{ display: "none" }}></option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <label htmlFor="category">Category</label>
            <select
              value={transactionToCreate.category}
              onChange={(e) =>
                handleChange(e, transactionToCreate, setTransactionToCreate)
              }
              id="category"
              required
            >
              <option style={{ display: "none" }}></option>
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
              onChange={(e) =>
                handleChange(e, transactionToCreate, setTransactionToCreate)
              }
              id="amount"
              type="number"
              value={transactionToCreate.amount}
              required
            ></input>
            <label htmlFor="">Date</label>
            <input
              value={transactionToCreate.date}
              type="date"
              onChange={(e) =>
                handleChange(e, transactionToCreate, setTransactionToCreate)
              }
              id="date"
              // required
            />
            <button type="submit">Create</button>
          </div>
        </form>
      </Card.Body>
    </>
  );
}
