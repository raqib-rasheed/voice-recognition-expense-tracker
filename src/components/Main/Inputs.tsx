import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { TContextProps } from "../../types/transactions-types";
import { useSpeechContext } from "@speechly/react-client";

import {
  incomeCategories,
  expenseCategories,
} from "../../utils/categoriesConstants";
import { initialIncomeValue } from "../../utils/categoriesConstants";

import createTransactionWithSpeechly from "./transactions/utils/createTransactionSpeechly";
import FormGroupAndCardBody from "./FormGroupAndCardBody";

export type ITransactionContextProps = {
  contextProps: TContextProps;
};

export default function Inputs(props: ITransactionContextProps) {
  const { contextProps } = props;

  const [transactionToCreate, setTransactionToCreate] = useState(
    initialIncomeValue
  );

  const { segment } = useSpeechContext();

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setTransactionToCreate({ ...transactionToCreate, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setTransactionToCreate({ ...transactionToCreate, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransactionWithSpeechly(
          transactionToCreate,
          setTransactionToCreate,
          contextProps
        );
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setTransactionToCreate(initialIncomeValue);
      }

      segment.entities.forEach((s) => {
        const type = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

        switch (s.type) {
          case "amount":
            setTransactionToCreate({
              ...transactionToCreate,
            });
            break;
          case "category":
            if (incomeCategories.map((iC) => iC.type).includes(type)) {
              setTransactionToCreate({
                ...transactionToCreate,
                category: "Income",
                type,
              });
            } else if (expenseCategories.map((iC) => iC.type).includes(type)) {
              setTransactionToCreate({
                ...transactionToCreate,
                category: "Expense",
                type,
              });
            }
            break;
          case "date":
            setTransactionToCreate({ ...transactionToCreate, date: s.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        transactionToCreate.amount &&
        transactionToCreate.category &&
        transactionToCreate.type &&
        transactionToCreate.date
      ) {
        createTransactionWithSpeechly(
          transactionToCreate,
          setTransactionToCreate,
          contextProps
        );
      }
    }
  }, [segment]);
  return (
    <>
      <Card.Body className="py-1">
        <h3 className="text-center">Expense Tracker</h3>
        <h6 className="text-muted text-center mb-3">Powered by Speechly</h6>
        <hr />
        <p>
          {segment && (
            <div className="segment">
              {segment.words.map((w) => w.value).join(" ")}
            </div>
          )}
        </p>
        <FormGroupAndCardBody
          transactionToCreate={transactionToCreate}
          setTransactionToCreate={setTransactionToCreate}
          contextProps={contextProps}
        />
      </Card.Body>
    </>
  );
}
