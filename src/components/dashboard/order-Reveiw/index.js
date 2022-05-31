import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CartTable from "../cart-table";
import { MdOutlineCancel, MdPayment } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";

const OrderReveiw = () => {
  const {cart, setCart, setPayment} = useContext(AppContext);
  const [total, setTotal] = useState(0);
  let navigate = useNavigate();

  const handlePyment = () => {
    navigate("/pay-now", { replace: true });
  };

  let shipping = 0;
  if (total > 50) {
    shipping = 0;
  } else if (total > 25) {
    shipping = 5;
  } else if (total > 0) {
    shipping = 10;
  }
  const tax = total / 10;
  const discount = total / 20;
  const grandTotal = total + shipping + tax - discount;

  useEffect(() => {
   setPayment(grandTotal);
  }, [grandTotal, setPayment]);
  
  return (
    <Container>
      <CartTable
        cart={cart}
        setCart={setCart}
        index={total}
        setTotal={setTotal}
      />
      <div className=" d-flex justify-content-end">
        <div className="w-25 p-0">
          <div className="d-flex justify-content-between border-top p-2">
            <span>Sub Total</span>
            <span>${total}</span>
          </div>
          <div className="d-flex justify-content-between border-top p-2">
            <span>Tax</span>
            <span>${tax}</span>
          </div>
          <div className="d-flex justify-content-between border-top p-2">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="d-flex justify-content-between border-top p-2">
            <span className="text-primary">Discount on Cart</span>
            <span>${discount}</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between bg-light py-3 rounded text-primary">
        <span className="">Product Count (4)</span>
        <div className="w-25 d-flex justify-content-between fw-bold ps-2">
          <span> Total</span>
          <span>${grandTotal}</span>
        </div>
      </div>

      <div className="d-flex justify-content-between my-3">
        <Button variant="primary" className="d-flex align-items-center px-5">
          {" "}
          <MdOutlineCancel
            className="me-4"
            style={{ width: "25px", height: "25px" }}
          />{" "}
          Cancel
        </Button>{" "}
        <Button variant="secondary" className="icon-size px-5">
          <FaRegHandRock /> Hold
        </Button>{" "}
        <Button variant="success" className="px-5">
          <FaHandHoldingUsd /> Discount
        </Button>{" "}
        <Button variant="warning" className="px-5" onClick={handlePyment}>
          <MdPayment className="" /> Pay Now
        </Button>{" "}
      </div>
    </Container>
  );
};

export default OrderReveiw;
