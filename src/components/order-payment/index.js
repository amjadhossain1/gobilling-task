import React, { useContext } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { BsCash } from "react-icons/bs";
import { AiOutlineCreditCard, AiOutlineUser } from "react-icons/ai";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const OrderPayment = () => {
  const { Payment, setPayment } = useContext(AppContext);
  let navigate = useNavigate();

  const payItem = [
    { title: "Cash", icon: <BsCash /> },
    { title: "Card", icon: <AiOutlineCreditCard /> },
    { title: "On Account", icon: <AiOutlineUser /> },
    { title: "Checque", icon: <AiOutlineCreditCard /> },
  ];

  return (
    <Container>
      <div className="d-flex justify-content-between bg-light border rounded p-3 mt-4 mb-3">
        <span>Order Amount</span>
        <span>${Payment}</span>
      </div>
      <div className="">
        <Row>
          <Col md={4}>
            <ListGroup className="border">
              {payItem.map((element) => {
                const { title, icon } = element;
                return (
                  <ListGroup.Item key={title} className="border-0 p-3">
                    <div className="d-flex">
                      <span className="d-flex align-items-center me-3">
                        {icon}
                      </span>
                      <span> {title}</span>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col md={8}>
            <Form>
              <Form.Control
                className="mb-3 border-0 border-bottom"
                type="text"
                placeholder="Card Name"
                required
              />
              <Form.Control
                className="mb-3 border-0 border-bottom"
                type="number"
                placeholder="Card Number"
                required
              />

              <Form.Control
                className="mb-3 border-0 border-bottom"
                type="text"
                placeholder="Card Expire Date"
                required
              />
              <Form.Control
                className="mb-3 border-0 border-bottom"
                type="text"
                placeholder="Card Screet"
                required
              />
              <Button
                variant="primary"
                type="submit"
                onClick={() => navigate("/dashboard")}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OrderPayment;
