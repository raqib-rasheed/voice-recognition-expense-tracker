import { Col } from "antd";
import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  incomeCategories,
  expenseCategories,
} from "../../utils/categoriesConstants";

export type PropVal = {
  title: string;
};

const Chart = (props: PropVal) => {
  const { title } = props;
  const categories = title === "income" ? incomeCategories : expenseCategories;

  const state = {
    labels: categories.map((el) => el.type),
    datasets: [
      {
        label: "bytes of Code",
        backgroundColor: ["#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#003350", "#35014F", "#175000"],
        fill: false,
        borderColor: "rgba(0,0,0,.45)",
        borderWidth: 2,
        data: categories.map((el) => el.amount),
      },
    ],
  };

  return (
    <>
      <Col
        className="transparent"
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <h4>{props.title}</h4>
        <Doughnut data={state} />
      </Col>
    </>
  );
};

export default Chart;
