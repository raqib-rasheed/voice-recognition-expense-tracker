import React, { Dispatch, SetStateAction } from "react";
import { ITransaction } from "../../../types/transactions-types";

import SingleTransaction from "./SingleTransaction";

export type ITransactionProps = {
  transactions: {
    transactions: ITransaction[];
  };
};

const TransactionsContainer = (props: ITransactionProps) => {
  const {
    transactions: { transactions },
  } = props;

  return (
    <>
      {transactions.length > 0 ? (
        <div
          className="transactions-container"
          style={{ width: "100%", height: "6.35rem" }}
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
