import React, { Dispatch, SetStateAction, useContext } from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { ExportTrackerContext } from "./../../context/Context";
import { Card, Col } from "react-bootstrap";
import { TContextProps } from "../../types/transactions-types";

export default function UsersArea() {
  const contextProps = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      <Col xs={{ order: "first" }} sm={12} className="mb-2">
        <Card className="round-corners ">
          <Inputs contextProps={contextProps} />
          <TransactionsContainer transactions={contextProps.transactions} />
        </Card>
      </Col>
    </>
  );
}
