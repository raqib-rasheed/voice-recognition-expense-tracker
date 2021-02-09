import React from "react";
import { DollarCircleOutlined } from "@ant-design/icons";

type TtransactionValues = {
  type: string;
  category: string;
  amount: number;
  date: string;
  id: string;
};

interface ITransactions {
  incomes: TtransactionValues[];
  expenses: TtransactionValues[];
}

export default function SingleTransaction(props: ITransactions) {
  return (
    <>
      <DollarCircleOutlined />
    </>
  );
}
