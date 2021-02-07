import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsersArea from "./components/Main/UsersArea";
import { Container, Row } from "react-bootstrap";
import Details from "./components/chart/Chart";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Details title="Expense" />
          <UsersArea />
          <Details title="Income" />
        </Row>
      </Container>
    </>
  );
}

export default App;
