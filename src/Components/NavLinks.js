import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch, AiFillInfoCircle } from "react-icons/ai";

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
        About <AiFillInfoCircle className="ml-2" />
      </Link>
    </ul>
  );
};

export default NavLinks;
