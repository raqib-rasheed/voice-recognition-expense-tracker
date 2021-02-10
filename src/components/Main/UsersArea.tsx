import React, { Dispatch, SetStateAction, useContext } from "react";
import Inputs from "./Inputs";
import TransactionsContainer from "./transactions/TransactionsContainer";
import { ExportTrackerContext } from "./../../context/Context";
import { Card } from "react-bootstrap";

export type TContextProps = {
  transactions: {
    transactions: [];
  };
  setTransactions: Dispatch<SetStateAction<{ incomes: []; expenses: [] }>>;
  data: {
    incomeCategories: {
      type: string;
      amount: number;
      color: string;
    }[];
    expenseCategories: {
      type: string;
      amount: number;
      color: string;
    }[];
  };
  setData: Dispatch<
    SetStateAction<{
      incomeCategories: {
        type: string;
        amount: number;
        color: string;
      }[];
      expenseCategories: {
        type: string;
        amount: number;
        color: string;
      }[];
    }>
  >;
};
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
