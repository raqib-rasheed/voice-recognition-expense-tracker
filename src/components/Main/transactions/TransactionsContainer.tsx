import { Card } from "antd";
import React, { Dispatch, SetStateAction } from "react";

import SingleTransaction from "./SingleTransaction";

export type ITransaction = {
  transactions: {
    transactions: [];
  };
};

const TransactionsContainer = (props: ITransaction) => {
  const {
    transactions: { transactions },
  } = props;
  return (
    <>
      {transactions.length > 0 ? (
        <Card
          className="card-container"
          style={{ width: "100%", height: "5rem" }}
        >
          <SingleTransaction />
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default TransactionsContainer;
