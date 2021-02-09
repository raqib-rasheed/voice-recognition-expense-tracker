import { Card } from "antd";
import React, { Dispatch, SetStateAction } from "react";

import SingleTransaction from "./SingleTransaction";

export type ITransaction = {
  transactions: {
    incomes: [];
    expenses: [];
  };
};

const TransactionsContainer = (props: ITransaction) => {
  const {
    transactions: { expenses, incomes },
  } = props;
  return (
    <>
      {expenses.length || incomes.length > 0 ? (
        <Card style={{ width: "100%", height: "5rem" }}>
          <SingleTransaction incomes={incomes} expenses={expenses} />
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default TransactionsContainer;
