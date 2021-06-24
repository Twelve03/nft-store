import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="lg:z-10 lg:absolute lg:w-full flex justify-around items-center">
      <img
        src="https://placeholderlogo.com/img/placeholder-logo-1.png"
        alt=""
        className="h-10 w-24"
      />
      <ul className=" w-2/4 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </ul>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/account-269-866236.png"
        alt=""
        className="w-5 h-5"
      />
      <img
        src="https://icons-for-free.com/iconfiles/png/512/cart+ecommerce+shop+icon-1320166083122274571.png"
        alt=""
        className="w-5 h-5"
      />
    </nav>
  );
};

export default Nav;
