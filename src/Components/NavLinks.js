import { Link } from "react-router-dom";

const NavLinks = ({ closeMenu }) => {
  return (
    <ul>
      <Link
        to="/"
        onClick={closeMenu}
        className="text-blue-500 py-3 border-b block"
      >
        Home
      </Link>
      <Link
        to="/products"
        onClick={closeMenu}
        className="text-blue-500 py-3 border-t border-b block"
      >
        Products
      </Link>
      <Link
        to="/about"
        onClick={closeMenu}
        className="text-blue-500 py-3 border-t border-b block"
      >
        About
      </Link>
    </ul>
  );
};

export default NavLinks;
