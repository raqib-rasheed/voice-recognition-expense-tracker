import React from "react";

import Chart from "./components/chart/Chart";
import { Col, Row } from "antd";

import "./App.css";
import UsersArea from "./components/Main/UsersArea";
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <Row className="wrapper">
        <Chart title="Income" />
        <UsersArea />
        <Chart title="Expense" />
      </Row>
    </Provider>
  );
}

export default App;
