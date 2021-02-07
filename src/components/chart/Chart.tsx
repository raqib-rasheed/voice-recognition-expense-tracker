import React from "react";
import { Col } from "react-bootstrap";

export type PropVal = {
  title: string;
};

const Details = (props: PropVal) => {
  return (
    <>
      <Col className=" m-2 transparent">
        <h4 className="text-center">{props.title}</h4>
      </Col>
    </>
  );
};

export default Details;
