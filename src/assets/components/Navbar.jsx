import React from "react";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-items">
        <span className="my-shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="add">
            <sup> {size}</sup>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
