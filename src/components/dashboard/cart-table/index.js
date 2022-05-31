import React from "react";
import { Container, Table } from "react-bootstrap";
import TableData from "./table-data";

const CartTable = ({ cart, setCart, index, setTotal }) => {


  const handleDelete = (key) => {
    const newCart = cart.filter((pd) => pd.key !== key);
    setCart(newCart);
  };


  return (
    <Container className="my-5">
      <div>
        {cart.length === 0 && <h2 className="text-center mt-5">Empty cart </h2>}
        <Table responsive="sm" className="border">
          <tbody>
            {cart.map((product) => (
              <TableData
                product={product}
                key={product.key}
                handleDelete={handleDelete}
                quantity={product.quantity}
                index={index}
                setTotal={setTotal}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default CartTable;
