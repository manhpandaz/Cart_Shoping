import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="shop" to={"/"}>
          Shop
        </Link>
        <Link className="cart" to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
