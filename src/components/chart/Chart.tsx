import React, { useContext, useMemo } from "react";
import { Col } from "react-bootstrap";
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
      <Col
        xs={12}
        sm={6}
        lg={title === "income" ? { order: "first" } : { order: "last" }}
        className="mb-3"
      >
        <div className={`chart-container ${title} round-corners`}>
          <h5 className="text-center py-3">{`Chart For ${title}`}</h5>
          <Doughnut
            data={state}
            options={{
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
      </Col>
    </>
  );
};

export default Chart;
