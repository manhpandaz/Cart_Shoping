import React, { useContext } from "react";
import "./cart.scss";
import { Minus, Plus } from "phosphor-react";
import { ShopContext } from "../../context/shop-context";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="actionBtn">
        <button onClick={() => addToCart(id)}>
          <Plus size={32} />
        </button>
        <input type="number" value={cartItemAmount} />
        <button onClick={() => removeFromCart(id)}>
          <Minus size={32} />
        </button>
      </div>
    </div>
  );
};

// export default CartItem;
