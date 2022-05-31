import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Header from "./header";
import Sidebar from "./sidebar";
import { IoAddCircleOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";
import OrderReveiw from "./order-Reveiw";
import AddCustomer from "./add-customer";
import { AppContext } from "../../App";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const { user } = useContext(AppContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header handleShow={handleShow} />
      <Sidebar handleClose={handleClose} show={show} />
      <Container
        className="d-flex justify-content-between bg-light p-3 rounded text-primary "
        onClick={() => setModalShow(true)}
        style={{ cursor: "pointer" }}
      >
        <span className="d-flex align-items-center">
          <FaUserCircle
            className="me-2"
            style={{ width: "25px", height: "25px" }}
          />
          <span className="fs-5">{user.email}</span>
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
