import { Col } from "antd";
import React, { useContext } from "react";
import { ExportTrackerContext } from "../../context/Context";

export type PropVal = {
  title: string;
};

const Chart = (props: PropVal) => {
  return (
    <>
      <Col
        className="transparent"
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <h4>{props.title}</h4>
      </Col>
    </>
  );
};

export default Chart;
