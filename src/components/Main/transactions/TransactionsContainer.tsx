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
        <div
          className="card-container"
          style={{ width: "100%", height: "5rem" }}
        >
          <SingleTransaction />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TransactionsContainer;
