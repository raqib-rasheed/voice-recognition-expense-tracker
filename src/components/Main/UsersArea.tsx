import { Col } from "antd";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { ExportTrackerContext } from "./../../context/Context";
import { v4 as uuidv4 } from "uuid";

export type TContextProps = {
  transactions: {
    transactions: [];
  };
  setTransactions: Dispatch<SetStateAction<{ incomes: []; expenses: [] }>>;
};

export default function UsersArea() {
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      <Col
        className="transparent"
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <Inputs contextProps={contextProps} />
        <TransactionsContainer transactions={contextProps.transactions} />
      </Col>
    </>
  );
}
