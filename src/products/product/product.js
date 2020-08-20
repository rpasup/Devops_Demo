import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  const details = `product/${product.id}`;
  return (
    <tr>
      <td>{product.id}</td>
      <td>
        <Link
          className="links"
          to={details}
          params={{ product }}
          onClick={() => {
            alert("Do you want to go to details?");
          }}
        >
          {product.productName}
        </Link>
      </td>
      <td>{product.quantity}</td>
      <td>{`Rs. ${product.price}`}</td>
    </tr>
  );
}

export default Product;
