import React, { useContext } from "react";
import removeTransaction from "./utils/removeTransaction";
import { ExportTrackerContext } from "../../../context/Context";
import { TContextProps } from "../../../types/transactions-types";
import { FaTrash } from "react-icons/fa";

export default function SingleTransaction() {
  const {
    transactions: allTransactions,
    setTransactions,
    data,
    setData,
  } = useContext(ExportTrackerContext) as TContextProps;
  return (
    <>
      {allTransactions?.transactions?.map((item) => {
        return (
          <div
            className={`round-corners single-transaction-container ${item.type}`}
            id={item.id}
          >
            <div className="transaction-category">
              <span id={item.id}>{item.category}</span>
            </div>
            <div className="transaction-amount">
              <span id={item.id}>{item.amount}</span>
            </div>
            <FaTrash
              id={item.id}
              onClick={() =>
                removeTransaction(
                  item.id,
                  allTransactions.transactions,
                  setTransactions,
                  data,
                  setData
                )
              }
            ></FaTrash>
          </div>
        );
      })}
    </>
  );
}
