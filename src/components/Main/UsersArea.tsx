import { Col } from "antd";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { ExportTrackerContext } from "./../../context/Context";

const initialState = {
  type: "income",
  category: "",
  amount: 0,
  date: "",
  id: "",
};

export type TContextProps = {
  transactions: {
    incomes: [];
    expenses: [];
  };
  setTransactions: Dispatch<SetStateAction<{ incomes: []; expenses: [] }>>;
};

export default function UsersArea() {
  const [transactionToCreate, setTransactionToCreate] = useState(initialState);
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      <Col
        className="transparent"
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <Inputs
          setTransactionToCreate={setTransactionToCreate}
          transactionToCreate={transactionToCreate}
          contextProps={contextProps}
        />
        <TransactionsContainer transactions={contextProps.transactions} />
      </Col>
    </>
  );
}
