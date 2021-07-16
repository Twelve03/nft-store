import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed md:absolute md:shadow z-50 top-0 w-full bg-white bg-opacity-10 p-3 flex justify-between items-center h-12">
      <MobileNav />
      <div className="w-2/4 items-center hidden md:flex justify-around text-pink-600">
        <Link to="/" className="focus:underline">
          Home
        </Link>

        <Link to="/search" className="focus:underline">
          Search
        </Link>

        <Link to="/about" className="focus:underline">
          About
        </Link>

        <Link to="/login" className="focus:underline">
          Log in
        </Link>

        <Link to="/signup" className="focus:underline">
          Sign up
        </Link>
      </div>

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
