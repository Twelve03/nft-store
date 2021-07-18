import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed md:absolute md:shadow z-50 top-0 w-full bg-white bg-opacity-10 p-3 flex justify-between items-center h-12">
      <MobileNav />

      {/* Desktop Nav */}
      <div className="w-2/4 items-center hidden md:flex justify-around text-pink-600">
        <Link to="/" className="transition duration-200 ease-in-out focus:text-blue-600 hover:text-blue-600">
          Home
        </Link>

        <Link to="/search" className="transition duration-200 ease-in-out focus:text-blue-600 hover:text-blue-600">
          Search
        </Link>

        <Link to="/about" className="transition duration-200 ease-in-out focus:text-blue-600 hover:text-blue-600">
          About
        </Link>

        <Link to="/login" className="transition duration-200 ease-in-out focus:text-blue-600 hover:text-blue-600">
          Log in
        </Link>

        <Link to="/signup" className="transition duration-200 ease-in-out focus:text-blue-600 hover:text-blue-600">
          Sign up
        </Link>
      </div>

      {/* Logo */}
      <Link to="/">
        <img
          src="https://i.ibb.co/w7Bc5w7/Group-1.png"
          alt="logo"
          className="h-10 w-10"
        />
      </Link>
    </header>
  );
};

export default Header;
