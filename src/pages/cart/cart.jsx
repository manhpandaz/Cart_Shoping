import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
// import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-Item";

import "./cart.scss";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your course Item</h1>
      </div>
      <div className="item">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}></CartItem>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

// export default Cart;
