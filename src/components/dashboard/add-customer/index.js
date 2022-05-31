import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsCash, BsPlusLg } from "react-icons/bs";

const AddCustomer = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title id="contained-modal-title-vcenter ">
            <span className=""> Add New Customer </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0 p-5">
          <Form>
            <Form.Control
              className="mb-3 border-0 border-bottom"
              type="text"
              placeholder="Name"
              required
            />
            <Form.Control
              className="mb-3 border-0 border-bottom"
              type="email"
              placeholder="Email"
              required
            />

            <Form.Control
              className="mb-3 border-0 border-bottom"
              type="phone"
              placeholder="Phone"
              required
            />
            <Form.Control
              className="mb-3 border-0 border-bottom"
              type="text"
              placeholder="Currency"
              required
            />
            <Form.Control
              className="mb-3 border-0 border-bottom"
              type="text"
              placeholder="Card Screet"
              required
            />
            <p className="d-flex align-items-center text-primary mt-4 mb-5">
              {" "}
              <BsPlusLg className="me-2" /> Add More Details
            </p>
            <Button variant="primary" type="submit" className="w-100 p-2">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCustomer;
