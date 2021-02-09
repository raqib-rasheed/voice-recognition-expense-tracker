import React, { Dispatch, SetStateAction, useContext } from "react";
import { DeleteOutlined, DollarCircleOutlined } from "@ant-design/icons";
import removeTransaction from "./utils/removeTransaction";
import { ExportTrackerContext } from "../../../context/Context";

export type TtransactionValues = {
  type: string;
  category: string;
  amount: number;
  date: string;
  id: string;
};

interface ITransactions {
  transactions: {
    transactions: TtransactionValues[];
  };
  setTransactions: Dispatch<SetStateAction<any>>;
}

export default function SingleTransaction() {
  const { transactions: allTransactions, setTransactions } = useContext(
    ExportTrackerContext
  ) as ITransactions;

  return (
    <>
      {allTransactions?.transactions?.map((item) => {
        return (
          <div className="transaction-container" id={item.id}>
            <DollarCircleOutlined id={item.id} className={item.type} />
            <h4 id={item.id}>{item.category}</h4>
            <span id={item.id}>{item.amount}</span>
            <DeleteOutlined
              id={item.id}
              onClick={() =>
                removeTransaction(
                  item.id,
                  allTransactions.transactions,
                  setTransactions
                )
              }
            />
          </div>
        );
      })}
    </>
  );
}
