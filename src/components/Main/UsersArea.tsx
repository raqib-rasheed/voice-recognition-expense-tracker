import React, { Dispatch, SetStateAction, useContext } from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { ExportTrackerContext } from "./../../context/Context";
import { Card } from "react-bootstrap";
import { TContextProps } from "../../types/transactions-types";

export default function UsersArea() {
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      <Card className="users-area">
        <Inputs contextProps={contextProps} />
        <TransactionsContainer transactions={contextProps.transactions} />
      </Card>
    </>
  );
}
