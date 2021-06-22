import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Nav;
