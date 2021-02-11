import React, { useContext, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { ExportTrackerContext } from "../../context/Context";
import { TContextProps } from "../../types/transactions-types";

export type PropVal = {
  title: string;
};

const Chart = (props: PropVal) => {
  const { title } = props;

  const contextData = useContext(ExportTrackerContext) as TContextProps;

  const { data } = contextData;
  const categories =
    title === "income" ? data.incomeCategories : data.expenseCategories;

  const state = useMemo(() => {
    console.log(data);
    return {
      labels: categories.map((el) => el.type),
      datasets: [
        {
          label: title,
          backgroundColor: categories.map((el) => el.color),
          hoverBackgroundColor: ["#4B5000", "#003350", "#35014F", "#175000"],
          fill: false,
          borderColor: "rgba(0,0,0,.45)",
          borderWidth: 2,
          data: categories.map((el) => el.amount),
        },
      ],
    };
  }, [categories, data, title]);

  return (
    <>
      <div className="chart-container">
        <h4>{`Chart For ${title}`}</h4>
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              fontSize: 20,
            },
            fill: false,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </>
  );
};

export default Chart;
