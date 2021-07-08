import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
} from "react-icons/ai";

const NavLinks = ({ closeMenu }) => {
  return (
    <ul>
      <Link
        to="/"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-b block"
      >
        Home <AiFillHome className="ml-2 " />
      </Link>
    
      <Link
        to="/search"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-b block"
      >
        Search <AiOutlineSearch className="ml-2" />
      </Link>

      <Link
        to="/about"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-t border-b block"
      >
        About
      </Link>

      <Link
        to="/contact"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-t border-b block"
      >
        Contact us
      </Link>
      <Link
        to="/login"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-t border-b block"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        onClick={closeMenu}
        className="flex items-center text-blue-500 py-3 border-t border-b block"
      >
        Sign up
      </Link>
    </ul>
  );
};

export default NavLinks;
