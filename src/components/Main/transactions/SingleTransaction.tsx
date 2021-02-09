import React from "react";
import { DeleteOutlined, DollarCircleOutlined } from "@ant-design/icons";

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
  const { expenses, incomes } = props;
  console.log(incomes[0]?.category);
  return (
    <>
      {incomes.map((item) => {
        return (
          <div id={item.id}>
            <DollarCircleOutlined className="income" />
            <h6>{item.category}</h6>
            <span>{item.amount}</span>
            <DeleteOutlined id={item.id} />
          </div>
        );
      })}
      {expenses.map((item) => {
        return (
          <div id={item.id}>
            <DollarCircleOutlined className="expense" />
            <h6>{item.category}</h6>
            <span>{item.amount}</span>
            <DeleteOutlined id={item.id} />
          </div>
        );
      })}
    </>
  );
}
