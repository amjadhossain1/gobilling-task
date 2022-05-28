import React from "react";
import { Button, Col } from "react-bootstrap";

const Categorie = ({ element, handleCategory, activeCategorie }) => {
    console.log("active", element === activeCategorie);
  return (
    <Col md={2} className="">
      <Button
        className=""
        variant={
          element === activeCategorie ? "outline-primary" : "outline-secondary"
        }
        onClick={() => handleCategory(element)}
      >
        {element}
      </Button>
    </Col>
  );
};

export default Categorie;
