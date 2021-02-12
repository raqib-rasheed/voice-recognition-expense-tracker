import React from "react";

import Chart from "./components/chart/Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsersArea from "./components/Main/UsersArea";
import { Provider } from "./context/Context";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Provider>
      <Container className="wrapper">
        <Row lg={3}>
          <Chart title="income" />
          <UsersArea />
          <Chart title="expense" />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;

// <Row>
//   <Col md={4}>md=4</Col>
//   <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
// </Row>
// <Row>
//   <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
//   <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
// </Row>
