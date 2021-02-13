import React from "react";
import { Form } from "react-bootstrap";
import { IFormGroupAndCardBodyProp } from "../../types/transactions-types";
import {
  expenseCategories,
  incomeCategories,
} from "../../utils/categoriesConstants";
import { handleChange, handleSubmit } from "../../utils/util-functions";

export default function FormGroupAndCardBody(props: IFormGroupAndCardBodyProp) {
  const { transactionToCreate, setTransactionToCreate, contextProps } = props;
  return (
    <>
      <div className="form-group">
        <Form
          onSubmit={(e) =>
            handleSubmit(
              e,
              transactionToCreate,
              setTransactionToCreate,
              contextProps
            )
          }
        >
          <div className="d-flex justify-content-between type-and-amount-container">
            <Form.Group>
              <Form.Label htmlFor="type">Type</Form.Label>
              <Form.Control
                as="select"
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
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <Form.Control
                as="input"
                value={transactionToCreate.amount}
                onChange={(e) =>
                  handleChange(e, transactionToCreate, setTransactionToCreate)
                }
                type="number"
                id="amount"
                required
              ></Form.Control>
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Control
              as="select"
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
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <label htmlFor="">Date</label>
            <Form.Control
              value={transactionToCreate.date}
              type="date"
              onChange={(e) =>
                handleChange(e, transactionToCreate, setTransactionToCreate)
              }
              id="date"
              // required
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button
              className="btn px-4 btn-outline-primary display-center"
              type="submit"
            >
              Create
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
