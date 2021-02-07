import React from "react";
import { Card, Col, Form } from "react-bootstrap";

export default function UsersArea() {
  return (
    <>
      <Col className="m-2 p-0 transparent" xs={6}>
        <Card className="transparent" style={{ width: "100%" }}>
          <Card.Body className="transparent">
            <Card.Title>Expence Tracker</Card.Title>
            <h4>Total Balance $12123</h4>
            <p>
              Try saying Add Expense for $50 in category travel for thursday
            </p>
            <hr />
            <Form>
              <Form.Group
                className="d-flex"
                controlId="exampleForm.SelectCustom"
              >
                <Form.Label className="text-muted">Type</Form.Label>
                <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label className="text-muted">Category</Form.Label>
                <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="d-flex"
                controlId="exampleForm.SelectCustom"
              >
                <Form.Label className="text-muted">Amount</Form.Label>
                <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label className="text-muted">Date</Form.Label>
                <Form.Control type="date" custom></Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
