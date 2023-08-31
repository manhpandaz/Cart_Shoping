import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
// import { withErrorBoundary } from "react-error-boundary";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to card
        <span>{`(${cartItemAmount})`}</span>
      </button>
    </div>
  );
};
