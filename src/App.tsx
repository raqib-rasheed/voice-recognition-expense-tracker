import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import Chart from "./components/chart/Chart";
import UsersArea from "./components/Main/UsersArea";

function App() {
  return (
    <>
      <Container className="wrapper">
        <Row lg={3}>
          <Chart title="income" />
          <UsersArea />
          <Chart title="expense" />
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
        <PushToTalkButtonContainer>
          <PushToTalkButton size="5rem" captureKey=" " />
        </PushToTalkButtonContainer>
      </div>
    </>
  );
}

export default App;
