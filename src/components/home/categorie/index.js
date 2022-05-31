import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { AiOutlineSearch, BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "./sidebar";

const Categorie = ({ element, more, handleCategory, activeCategorie }) => {
  return (
    <Col md={2} sm={6} className="">
      <div className="d-flex align-items-center justify-content-between">
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
        {more && (
          <div className=" d-none-mobile">
            <Sidebar />
          </div>
        )}
      </div>

      {}
    </Col>
  );
};

export default Categorie;
