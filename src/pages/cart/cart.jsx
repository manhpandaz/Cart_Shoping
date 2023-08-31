import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PRODUCTS } from "../../products";
// import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-Item";

import "./cart.scss";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const navigate = useNavigate();
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
      {cartItems > 0 ? (
        <div className="checkout">
          <p>SubTotal: $ {getTotalAmount(cartItems)}</p>
          <button onClick={() => navigate("/")} className="continueShoppingBtn">
            Continue Shopping
          </button>
          <button className="checkoutBtn">Checkout</button>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};

// export default Cart;
