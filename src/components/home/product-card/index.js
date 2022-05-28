import React from "react";
import { Button, Card, Col, Pagination } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  return (
    <Col md={3} className='pb-3'>
      <Card className="text-center">
        <Card.Img
          variant="top"
          style={{ height: "10rem" }}
          className=""
          src={img}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{name}</Card.Title>

    
        </Card.Body>
        <Card.Footer className="text-muted">${price}</Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
