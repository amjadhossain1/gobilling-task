import React, { useContext, useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../../../App";

const TableData = ({ product, handleDelete, quantity, index, setTotal }) => {
  const { cart } = useContext(AppContext);
  const [quantityIndex, setQuantityIndex] = useState(1);
  const { name, price, key } = product;

  useEffect(() => {
    cart.forEach((element) => {
      element.quantity = quantityIndex;
    });
    setQuantityIndex(quantity);
  }, [cart, quantity, setQuantityIndex]);

  useEffect(() => {
    const total = cart.reduce(
      (total, pd) => total + Number(pd.price * pd.quantity),
      0
    );
    setTotal(total);
  }, [cart, setTotal]);

  return (
    <tr key={key}>
      <td className="text-truncate">{name}</td>
      <td className="">${price}</td>
      <td className="d-flex align-items-center">
        <AiFillMinusCircle
          onClick={() =>
            quantityIndex > 1 && setQuantityIndex(quantityIndex - 1)
          }
          style={{ width: "25px", height: "25px" }}
        />
        <span className="px-3">{quantityIndex} </span>
        <AiFillPlusCircle
          onClick={() => setQuantityIndex(quantityIndex + 1)}
          style={{ width: "25px", height: "25px" }}
        />
      </td>
      <td>${quantityIndex * price}</td>
      <td className="">
        <span className="text-danger" onClick={() => handleDelete(key)}>
          <MdDeleteForever style={{ width: "25px", height: "25px" }} />
        </span>
      </td>
    </tr>
  );
};

export default TableData;
