import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ProductCard = ({ product, handleCart }) => {
  const { name, img, price, key } = product;
  return (
    <Col md={3} className="pb-3">
      <Card className="text-center  shadow-sm">
        <Card.Img
          variant="top"
          style={{ height: "10rem" }}
          className=""
          src={img}
        />
        <Card.Body>
          <Card.Title className="text-truncate fs-6">{name}</Card.Title>

          <Button variant="outline-primary" onClick={() => handleCart(product)}>
            Add to Cart
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">${price}</Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
