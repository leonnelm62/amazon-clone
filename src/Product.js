/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Product.css";

function Product({ title, imag, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>Start</p>
          <p>Start</p>
          <p>Start</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
