import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Header from "./header";
import Sidebar from "./sidebar";
import { IoAddCircleOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";
import OrderReveiw from "./order-Reveiw";
import AddCustomer from "./add-customer";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div>
      <Header handleShow={handleShow} />
      <Sidebar handleClose={handleClose} show={show} />
      <Container
        className="d-flex justify-content-between bg-light p-3 rounded"
        onClick={() => setModalShow(true)}
        style={{ cursor: "pointer" }}
      >
        <span className="d-flex align-items-center">
          <FaUserCircle className="me-2" /> Steve Jobs
        </span>
        <AddCustomer show={modalShow} onHide={() => setModalShow(false)} />
        <IoAddCircleOutline style={{ width: "30px", height: "30px" }} />
      </Container>
      <AddCustomer show={modalShow} onHide={() => setModalShow(false)} />
      <OrderReveiw />
    </div>
  );
};

export default Dashboard;
