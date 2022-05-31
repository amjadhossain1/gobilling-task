import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { AiOutlineSearch, BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "./sidebar";

const Categorie = ({ element, more, handleCategory, activeCategorie }) => {
  return (
    <Col md={2} className="">
      {more ? (
        <div className="d-flex justify-content-end cursor-pointer">
          <Sidebar />
        </div>
      ) : (
        <Button
          className="px-3 mx-1"
          variant={
            element === activeCategorie
              ? "outline-primary  shadow-sm"
              : "outline-secondary  shadow-sm"
          }
          onClick={() => handleCategory(element)}
        >
          {element}
        </Button>
      )}
      {}
    </Col>
  );
};

export default Categorie;
