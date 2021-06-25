import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-white border-b p-3 flex justify-between items-center h-12">
      <Link to="/">
        <img
          src="https://placeholderlogo.com/img/placeholder-logo-1.png"
          alt="logo"
          className="h-10 w-28"
        />
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
