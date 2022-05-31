import React, { useState } from "react";
import { Button, Offcanvas, Row } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import Categorie from "..";
import { categories } from "../../../../demo-data";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BsThreeDotsVertical
        className="cursor-pointer icon-size"
        // style={{ width: "25px", height: "25px" }}
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="">
            <span className="">Categorie</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <Row className="py-3 d-flex ">
            {categories.map((element) => (
              <Button
                key={element}
                className="px-3 my-2 mx-1"
                variant={"outline-secondary"}
              >
                {element.title}
              </Button>
            ))}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
